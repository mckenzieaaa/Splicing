import pygame
import numpy as np
import pyaudio
import threading
import queue
import random
import math
import time

# Initialize pygame
pygame.init()

# Game settings - 1920×1080 px
SCREEN_WIDTH = 1920
SCREEN_HEIGHT = 1080
FPS = 60

# Pixel scale - 16×16 px
PIXEL_SIZE = 16

# Color definitions - Black, White, Gray + Purple and Yellow (mostly purple/cool colors)
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
LIGHT_GRAY = (192, 192, 192)
DARK_GRAY = (64, 64, 64)
PURPLE = (138, 43, 226)  # BlueViolet
DARK_PURPLE = (75, 0, 130)  # Indigo
LIGHT_PURPLE = (186, 85, 211)  # MediumOrchid
DEEP_PURPLE = (72, 61, 139)  # DarkSlateBlue
YELLOW = (255, 215, 0)  # Gold
ACCENT_PURPLE = (147, 112, 219)  # MediumPurple

# Audio settings
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100
CHUNK = 1024

# Audio analysis related variables
audio_queue = queue.Queue()
current_pitch = 0
current_volume = 0


class PixelHero:
    """Pixel smiley face character - 16×16 pixels"""
    def __init__(self, x, y):
        self.x = x
        self.y = y
        # Character size based on specifications
        # 16×16 pixels occupies 13% width and 24% height
        self.size = PIXEL_SIZE  # Base pixel unit
        self.width = 16 * PIXEL_SIZE  # 256 pixels
        self.height = 16 * PIXEL_SIZE  # 256 pixels
        self.target_y = y
        self.speed = 0.3
        
    def update(self, pitch, volume):
        """Update character position based on pitch and volume"""
        if volume > 80:  # Voice detection threshold
            if pitch > 0:
                # High pitch -> move up, Low pitch -> move down
                normalized_pitch = max(0, min(1, (pitch - 80) / (800 - 80)))
                self.target_y = SCREEN_HEIGHT - 150 - (normalized_pitch * (SCREEN_HEIGHT - 300))
            
            # Smooth movement
            diff = self.target_y - self.y
            self.y += diff * 0.4
        
        # Keep within screen boundaries
        self.y = max(self.height//2, min(SCREEN_HEIGHT - self.height//2, self.y))
    
    def draw(self, screen):
        """Draw pixel smiley face character"""
        # Calculate top-left corner
        left = int(self.x - self.width // 2)
        top = int(self.y - self.height // 2)
        
        # Yellow background (main face)
        for row in range(16):
            for col in range(16):
                # Create circular shape
                if self._is_in_circle(col, row, 8, 8, 7):
                    color = YELLOW
                    # Add some shading for depth
                    if row > 10:
                        color = (230, 195, 0)  # Darker yellow at bottom
                    pygame.draw.rect(screen, color, 
                                   (left + col * PIXEL_SIZE, 
                                    top + row * PIXEL_SIZE, 
                                    PIXEL_SIZE, PIXEL_SIZE))
        
        # Black outline pixels
        outline_pixels = [
            # Top curve
            (4, 1), (5, 1), (6, 1), (7, 1), (8, 1), (9, 1), (10, 1), (11, 1),
            (3, 2), (12, 2),
            (2, 3), (13, 3),
            # Sides
            (1, 4), (1, 5), (1, 6), (1, 7), (1, 8), (1, 9), (1, 10), (1, 11),
            (14, 4), (14, 5), (14, 6), (14, 7), (14, 8), (14, 9), (14, 10), (14, 11),
            # Bottom curve
            (2, 12), (13, 12),
            (3, 13), (12, 13),
            (4, 14), (5, 14), (6, 14), (7, 14), (8, 14), (9, 14), (10, 14), (11, 14),
        ]
        
        for col, row in outline_pixels:
            pygame.draw.rect(screen, BLACK, 
                           (left + col * PIXEL_SIZE, 
                            top + row * PIXEL_SIZE, 
                            PIXEL_SIZE, PIXEL_SIZE))
        
        # Eyes (black pixels)
        eye_pixels = [
            (5, 5), (6, 5),  # Left eye
            (9, 5), (10, 5),  # Right eye
        ]
        
        for col, row in eye_pixels:
            pygame.draw.rect(screen, BLACK, 
                           (left + col * PIXEL_SIZE, 
                            top + row * PIXEL_SIZE, 
                            PIXEL_SIZE, PIXEL_SIZE))
        
        # Nose (small black pixels)
        nose_pixels = [(7, 8), (8, 8)]
        for col, row in nose_pixels:
            pygame.draw.rect(screen, BLACK, 
                           (left + col * PIXEL_SIZE, 
                            top + row * PIXEL_SIZE, 
                            PIXEL_SIZE, PIXEL_SIZE))
        
        # Smile (black pixels)
        smile_pixels = [
            (5, 10), (6, 11), (7, 11), (8, 11), (9, 11), (10, 10)
        ]
        
        for col, row in smile_pixels:
            pygame.draw.rect(screen, BLACK, 
                           (left + col * PIXEL_SIZE, 
                            top + row * PIXEL_SIZE, 
                            PIXEL_SIZE, PIXEL_SIZE))
    
    def _is_in_circle(self, x, y, cx, cy, radius):
        """Check if pixel is within circular boundary"""
        distance = math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        return distance <= radius


class Obstacle:
    """Purple pixel obstacles"""
    def __init__(self, x):
        self.x = x
        self.gap_y = random.randint(300, SCREEN_HEIGHT - 300)
        self.gap_size = 500  # Larger gap for easier gameplay
        self.width = 80  # Wider obstacles
        self.speed = 3.5
        self.color = PURPLE
        self.passed = False
        
    def update(self):
        """Update obstacle position"""
        self.x -= self.speed
    
    def draw(self, screen):
        """Draw purple pixel-style obstacles"""
        # Upper obstacle with pixel pattern
        upper_height = self.gap_y - self.gap_size//2
        self._draw_pixel_column(screen, self.x, 0, self.width, upper_height)
        
        # Lower obstacle with pixel pattern
        lower_y = self.gap_y + self.gap_size//2
        lower_height = SCREEN_HEIGHT - lower_y
        self._draw_pixel_column(screen, self.x, lower_y, self.width, lower_height)
    
    def _draw_pixel_column(self, screen, x, y, width, height):
        """Draw pixelated column with pattern"""
        # Main purple fill
        pygame.draw.rect(screen, DARK_PURPLE, (x, y, width, height))
        
        # Add pixel pattern with different purple shades
        for row in range(0, int(height), PIXEL_SIZE):
            for col in range(0, int(width), PIXEL_SIZE):
                # Create checkered pattern
                if (row // PIXEL_SIZE + col // PIXEL_SIZE) % 2 == 0:
                    pygame.draw.rect(screen, PURPLE, 
                                   (x + col, y + row, PIXEL_SIZE, PIXEL_SIZE))
                else:
                    pygame.draw.rect(screen, DEEP_PURPLE, 
                                   (x + col, y + row, PIXEL_SIZE, PIXEL_SIZE))
        
        # Black outline
        pygame.draw.rect(screen, BLACK, (x, y, width, height), 3)
    
    def collides_with_hero(self, hero):
        """Detect collision with hero"""
        if (hero.x + hero.width//2 > self.x and hero.x - hero.width//2 < self.x + self.width):
            if (hero.y - hero.height//2 < self.gap_y - self.gap_size//2 or 
                hero.y + hero.height//2 > self.gap_y + self.gap_size//2):
                return True
        return False
    
    def is_off_screen(self):
        """Check if obstacle is off screen"""
        return self.x + self.width < 0


def analyze_audio(data):
    """Analyze audio data to extract pitch and volume"""
    audio_data = np.frombuffer(data, dtype=np.int16).astype(np.float32)
    
    # Calculate volume (RMS)
    volume = np.sqrt(np.mean(audio_data**2))
    
    pitch = 0
    if volume > 100:
        # FFT for pitch detection
        fft = np.fft.fft(audio_data)
        freqs = np.fft.fftfreq(len(fft), 1/RATE)
        
        # Focus on human voice range (80-1000 Hz)
        valid_indices = np.where((freqs > 80) & (freqs < 1000))[0]
        
        if len(valid_indices) > 0:
            magnitudes = np.abs(fft[valid_indices])
            peak_index = valid_indices[np.argmax(magnitudes)]
            pitch = abs(freqs[peak_index])
    
    return pitch, volume


def audio_callback():
    """Audio capture thread"""
    p = pyaudio.PyAudio()
    
    try:
        default_input = p.get_default_input_device_info()
        print(f"🎤 Using audio device: {default_input['name']}")
        
        stream = p.open(format=FORMAT,
                       channels=CHANNELS,
                       rate=RATE,
                       input=True,
                       input_device_index=default_input['index'],
                       frames_per_buffer=CHUNK)
        
        while True:
            data = stream.read(CHUNK, exception_on_overflow=False)
            pitch, volume = analyze_audio(data)
            audio_queue.put((pitch, volume))
            
    except Exception as e:
        print(f"Audio error: {e}")
    finally:
        stream.stop_stream()
        stream.close()
        p.terminate()


def draw_ui(screen, score, pitch, volume, game_over=False, paused=False):
    """Draw user interface with pixel aesthetic"""
    font = pygame.font.Font(None, 64)
    small_font = pygame.font.Font(None, 36)
    
    # Score - prominent display
    score_text = font.render(f"SCORE: {score}", True, YELLOW)
    screen.blit(score_text, (20, 20))
    
    # Audio information
    pitch_text = small_font.render(f"Pitch: {pitch:.1f} Hz", True, WHITE)
    volume_text = small_font.render(f"Volume: {volume:.1f}", True, WHITE)
    screen.blit(pitch_text, (20, 100))
    screen.blit(volume_text, (20, 140))
    
    # Volume bar with pixel styling
    bar_width = 300
    bar_height = 20
    volume_ratio = min(1.0, volume / 1000)
    
    # Bar outline
    pygame.draw.rect(screen, WHITE, (20, 180, bar_width, bar_height), 3)
    # Bar fill with gradient purple
    if volume_ratio > 0:
        fill_width = int(bar_width * volume_ratio)
        pygame.draw.rect(screen, LIGHT_PURPLE, (20, 180, fill_width, bar_height))
    
    if game_over:
        # Game over overlay
        overlay = pygame.Surface((SCREEN_WIDTH, SCREEN_HEIGHT))
        overlay.set_alpha(200)
        overlay.fill(BLACK)
        screen.blit(overlay, (0, 0))
        
        big_font = pygame.font.Font(None, 120)
        medium_font = pygame.font.Font(None, 60)
        
        game_over_text = big_font.render("GAME OVER!", True, PURPLE)
        final_score_text = medium_font.render(f"FINAL SCORE: {score}", True, YELLOW)
        restart_text = medium_font.render("PRESS SPACE TO RESTART", True, WHITE)
        quit_text = small_font.render("Press ESC to quit", True, LIGHT_GRAY)
        
        # Center display
        screen.blit(game_over_text, (SCREEN_WIDTH//2 - 350, SCREEN_HEIGHT//2 - 150))
        screen.blit(final_score_text, (SCREEN_WIDTH//2 - 280, SCREEN_HEIGHT//2 - 50))
        screen.blit(restart_text, (SCREEN_WIDTH//2 - 360, SCREEN_HEIGHT//2 + 50))
        screen.blit(quit_text, (SCREEN_WIDTH//2 - 140, SCREEN_HEIGHT//2 + 120))
    
    elif paused:
        instructions = [
            "⏸️ GAME PAUSED",
            "• Press SPACE to continue",
            "• Press ESC to quit"
        ]
        for i, instruction in enumerate(instructions):
            inst_text = small_font.render(instruction, True, WHITE)
            screen.blit(inst_text, (20, 220 + i * 40))
    else:
        instructions = [
            "🎤 Voice Controls:",
            "• High pitch = Fly high",
            "• Low pitch = Fly low", 
            "• No sound = Stay still",
            "• Press SPACE to pause"
        ]
        for i, instruction in enumerate(instructions):
            inst_text = small_font.render(instruction, True, WHITE)
            screen.blit(inst_text, (20, 220 + i * 40))
    
    if paused:
        # Pause overlay
        overlay = pygame.Surface((SCREEN_WIDTH, SCREEN_HEIGHT))
        overlay.set_alpha(128)
        overlay.fill(DARK_PURPLE)
        screen.blit(overlay, (0, 0))
        
        big_font = pygame.font.Font(None, 100)
        pause_text = big_font.render("PAUSED", True, YELLOW)
        screen.blit(pause_text, (SCREEN_WIDTH//2 - 200, SCREEN_HEIGHT//2 - 50))


def draw_pixel_background(screen):
    """Draw pixel-style background with cool colors"""
    # Dark gradient background
    for y in range(0, SCREEN_HEIGHT, PIXEL_SIZE):
        # Gradient from dark purple to black
        ratio = y / SCREEN_HEIGHT
        r = int(72 * (1 - ratio))
        g = int(61 * (1 - ratio))
        b = int(139 * (1 - ratio))
        color = (r, g, b)
        pygame.draw.rect(screen, color, (0, y, SCREEN_WIDTH, PIXEL_SIZE))
    
    # Add pixel stars
    random.seed(42)  # Consistent star pattern
    for _ in range(100):
        x = random.randint(0, SCREEN_WIDTH // PIXEL_SIZE) * PIXEL_SIZE
        y = random.randint(0, SCREEN_HEIGHT // PIXEL_SIZE) * PIXEL_SIZE
        star_color = random.choice([WHITE, LIGHT_GRAY, LIGHT_PURPLE, YELLOW])
        pygame.draw.rect(screen, star_color, (x, y, PIXEL_SIZE, PIXEL_SIZE))
    random.seed()  # Reset seed


def main():
    """Main game loop"""
    global current_pitch, current_volume
    
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    pygame.display.set_caption("🎮 Pixel Hero Voice Game")
    clock = pygame.time.Clock()
    
    # Start audio thread
    audio_thread = threading.Thread(target=audio_callback, daemon=True)
    audio_thread.start()
    
    print("🎮 Pixel Hero Game started!")
    print("🎤 Use your voice to control the pixel hero:")
    print("   High pitch = fly high, Low pitch = fly low")
    print("   No sound = stay still")
    print("🎯 Avoid the purple obstacles!")
    
    while True:
        # Initialize game objects
        hero = PixelHero(300, SCREEN_HEIGHT // 2)
        obstacles = []
        score = 0
        game_over = False
        paused = False
        obstacle_timer = 0
        
        print("🎮 New game started!")
        
        # Main game loop
        running = True
        while running:
            dt = clock.tick(FPS)
            
            # Handle events
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    return
                elif event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_ESCAPE:
                        pygame.quit()
                        return
                    elif event.key == pygame.K_SPACE:
                        if game_over:
                            # Restart
                            print("🔄 Restarting game...")
                            running = False
                            break
                        else:
                            # Pause/resume
                            paused = not paused
                            if paused:
                                print("⏸️ Game paused - Press SPACE to continue")
                            else:
                                print("▶️ Game resumed")
            
            if game_over:
                # Game over state
                draw_pixel_background(screen)
                draw_ui(screen, score, current_pitch, current_volume, game_over=True, paused=False)
                pygame.display.flip()
                continue
            
            if paused:
                # Paused state
                draw_pixel_background(screen)
                
                # Draw obstacles
                for obstacle in obstacles:
                    obstacle.draw(screen)
                
                # Draw hero
                hero.draw(screen)
                
                # Draw UI
                draw_ui(screen, score, current_pitch, current_volume, game_over=False, paused=True)
                pygame.display.flip()
                continue
            
            # Get audio data
            while not audio_queue.empty():
                current_pitch, current_volume = audio_queue.get()
            
            # Update hero
            hero.update(current_pitch, current_volume)
            
            # Generate new obstacles
            obstacle_timer += dt
            if obstacle_timer > 3000:  # Every 3 seconds
                obstacles.append(Obstacle(SCREEN_WIDTH))
                obstacle_timer = 0
            
            # Update obstacles
            for obstacle in obstacles[:]:
                obstacle.update()
                
                # Detect collision
                if obstacle.collides_with_hero(hero):
                    game_over = True
                    print(f"💀 Game Over! Final Score: {score}")
                
                # Detect passing obstacles
                if not obstacle.passed and obstacle.x + obstacle.width < hero.x:
                    obstacle.passed = True
                    score += 1
                    print(f"🎉 Great! Score: {score}")
                
                # Remove off-screen obstacles
                if obstacle.is_off_screen():
                    obstacles.remove(obstacle)
            
            # Draw game
            draw_pixel_background(screen)
            
            # Draw obstacles
            for obstacle in obstacles:
                obstacle.draw(screen)
            
            # Draw hero
            hero.draw(screen)
            
            # Draw UI
            draw_ui(screen, score, current_pitch, current_volume, game_over=False, paused=False)
            
            pygame.display.flip()


if __name__ == "__main__":
    main()
