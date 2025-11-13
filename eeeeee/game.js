// Game Configuration
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Disable image smoothing for pixel-perfect rendering
ctx.imageSmoothingEnabled = false;

// Load background image
const backgroundImage = new Image();
backgroundImage.src = 'background.png'; // Save your image with this filename
let backgroundLoaded = false;
let backgroundX = 0; // Background scroll position

backgroundImage.onload = () => {
    backgroundLoaded = true;
    console.log('Background image loaded successfully');
};

backgroundImage.onerror = () => {
    console.log('Background image failed to load, using default');
};

// Load player sprite sheet
const playerSprite = new Image();
playerSprite.src = 'player.png'; // Save your cat sprite sheet with this filename
let playerSpriteLoaded = false;
const spriteFrameWidth = 48; // Width of each frame (48x48)
const spriteFrameHeight = 48; // Height of each frame
const spriteFrameCount = 6; // Total 6 animation frames
let currentSpriteFrame = 0; // Current frame
let spriteAnimationCounter = 0; // Animation counter

playerSprite.onload = () => {
    playerSpriteLoaded = true;
    console.log('Player sprite loaded successfully');
    console.log('Image size:', playerSprite.width, 'x', playerSprite.height);
    console.log('Expected size: 288 x 48 (6 frames x 48 pixels)');
};

playerSprite.onerror = () => {
    console.log('Player sprite failed to load, using default shape');
};

// Load coin sprite sheet
const coinSprite = new Image();
coinSprite.src = 'coin.png'; // Save your coin sprite sheet with this filename
let coinSpriteLoaded = false;
let coinSpriteFrameWidth = 64; // Width of each frame (auto-adjusted)
let coinSpriteFrameHeight = 64; // Height of each frame (auto-adjusted)
const coinSpriteFrameCount = 8; // Total 8 animation frames
let currentCoinFrame = 0; // Current frame
let coinAnimationCounter = 0; // Animation counter

coinSprite.onload = () => {
    coinSpriteLoaded = true;
    // Auto-calculate frame dimensions
    coinSpriteFrameWidth = coinSprite.width / coinSpriteFrameCount;
    coinSpriteFrameHeight = coinSprite.height;
    console.log('Coin sprite loaded successfully');
    console.log('Coin image size:', coinSprite.width, 'x', coinSprite.height);
    console.log('Frame size:', coinSpriteFrameWidth, 'x', coinSpriteFrameHeight);
};

coinSprite.onerror = () => {
    console.log('Coin sprite failed to load, using default shape');
};

// Load bottom obstacle textures (two random textures)
const obstacleImages = [];
let obstacleImagesLoaded = 0;
const obstacleImageCount = 2;

for (let i = 1; i <= obstacleImageCount; i++) {
    const img = new Image();
    img.src = `obstacle${i}.png`; // obstacle1.png, obstacle2.png
    img.onload = () => {
        obstacleImagesLoaded++;
        console.log(`Obstacle image ${i} loaded successfully, size:`, img.width, 'x', img.height);
    };
    img.onerror = () => {
        console.log(`Obstacle image ${i} failed to load, using default shape`);
    };
    obstacleImages.push(img);
}

// Game Constants
const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;
const PIXEL_SIZE = 16;
const PLAYER_SIZE = 120;  // Scaled from 80 to 120
const GRAVITY = 0.6;  // Gravity
const JUMP_STRENGTH = -12;  // Jump strength
const GAME_SPEED = 16;  // Increased from 4 to 16 (4x speed)
const COIN_SIZE = 70;  // Scaled from 48 to 70
const COIN_SPAWN_INTERVAL = 23; // Spawn a coin every 23 frames (90/4=22.5, approx 23)
const OBSTACLE_WIDTH = 120; // Increased width
const OBSTACLE_MIN_HEIGHT = 150; // Increased minimum height
const OBSTACLE_SPAWN_INTERVAL = 75; // Spawn an obstacle every 75 frames (300/4=75, 4x speed)
const WIN_SCORE = 30; // Win at 30 points
const GROUND_Y = GAME_HEIGHT - 150; // Raised ground level

// Color Configuration (black/white/gray + two cold colors)
const COLORS = {
    bg: '#0a0a0a',           // Pure black background
    player: '#4dd0e1',        // Cyan (cold color 1 - player)
    coin: '#ffd700',          // Gold (coins)
    coinAccent: '#ffed4e',    // Bright gold
    obstacle: '#2a2a2a',      // Dark gray obstacles
    obstacleAccent: '#7b68ee', // Purple-blue accent (cold color 2)
    ground: '#1a1a1a',        // Dark gray ground
    text: '#e0e0e0',          // Light gray text
    score: '#ffffff'          // White score
};

// Game State
let gameState = {
    started: false,
    gameOver: false,
    victory: false,
    score: 0,
    frame: 0
};

// Player Object
const player = {
    x: 200,
    y: GROUND_Y - PLAYER_SIZE,
    width: PLAYER_SIZE,
    height: PLAYER_SIZE,
    velocity: 0,
    isOnGround: true,
    isFlying: false, // Whether flying
    
    update() {
        if (!gameState.started || gameState.gameOver || gameState.victory) return;
        
        // Continuous upward flight when holding space
        if (this.isFlying) {
            this.velocity = JUMP_STRENGTH * 0.6; // Continuous lift is weaker than jump
        } else {
            // Apply gravity
            this.velocity += GRAVITY;
        }
        
        this.y += this.velocity;
        
        // Ground collision detection
        if (this.y >= GROUND_Y - this.height) {
            this.y = GROUND_Y - this.height;
            this.velocity = 0;
            this.isOnGround = true;
        } else {
            this.isOnGround = false;
        }
        
        // Prevent flying out of top boundary
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    },
    
    startFlying() {
        if (!gameState.started) {
            gameState.started = true;
            hideElement('startScreen');
        }
        if (gameState.gameOver || gameState.victory) return;
        this.isFlying = true; // Start flying
    },
    
    stopFlying() {
        this.isFlying = false; // Stop flying
    },
    
    draw() {
        if (playerSpriteLoaded) {
            // Draw player using sprite sheet
            // Update animation frame
            spriteAnimationCounter++;
            if (spriteAnimationCounter >= 8) { // Switch animation frame every 8 frames
                spriteAnimationCounter = 0;
                currentSpriteFrame = (currentSpriteFrame + 1) % spriteFrameCount;
            }
            
            // Draw current frame - scale 48x48 to 16x16
            ctx.drawImage(
                playerSprite,
                currentSpriteFrame * spriteFrameWidth, // Source X coordinate
                0, // Source Y coordinate
                spriteFrameWidth, // Source width 48
                spriteFrameHeight, // Source height 48
                this.x, // Destination X coordinate
                this.y, // Destination Y coordinate
                this.width, // Destination width 16
                this.height // Destination height 16
            );
        } else {
            // If sprite not loaded, use default shape
            // Draw pixelated player (16×16 pixels)
            ctx.fillStyle = COLORS.player;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            
            // Add pixel details - strict 16x16 grid
            // Eyes
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(this.x + 4, this.y + 4, 2, 2);
            ctx.fillRect(this.x + 10, this.y + 4, 2, 2);
            
            // Mouth
            ctx.fillStyle = '#000000';
            ctx.fillRect(this.x + 6, this.y + 10, 4, 2);
            
            // Add wing effect when flying (16x16 pixel blocks)
            if (this.isFlying && gameState.frame % 10 < 5) {
                ctx.fillStyle = COLORS.player;
                ctx.fillRect(this.x - 4, this.y + 6, 4, 4);
                ctx.fillRect(this.x + this.width, this.y + 6, 4, 4);
            }
        }
    },
    
    reset() {
        this.y = GAME_HEIGHT / 2;
        this.velocity = 0;
        this.isFlying = false;
    }
};

// Coin Management
const coins = {
    list: [],
    frameCount: 0,
    
    spawn() {
        // Coins appear at different heights: ground, low air, mid air, high air, very high
        const heightOptions = [
            GROUND_Y - COIN_SIZE - 10,  // On ground
            GROUND_Y - 150,              // Low air (requires small jump)
            GROUND_Y - 250,              // Mid air (requires jump)
            GROUND_Y - 350,              // High air (requires full jump)
            GROUND_Y - 450,              // Very high (requires hold to fly)
            200,                         // Very high in air
            300                          // High in air
        ];
        const y = heightOptions[Math.floor(Math.random() * heightOptions.length)];
        
        // Check if too close to obstacles, skip spawn if so
        let tooClose = false;
        for (let obstacle of obstacles.list) {
            // If obstacle is near coin spawn (horizontal distance < 300 pixels)
            if (Math.abs(obstacle.x - GAME_WIDTH) < 300) {
                tooClose = true;
                break;
            }
        }
        
        // Skip spawn if too close to obstacle
        if (tooClose) {
            return;
        }
        
        this.list.push({
            x: GAME_WIDTH,
            y: y,
            size: COIN_SIZE,
            collected: false,
            rotation: 0
        });
    },
    
    update() {
        if (!gameState.started || gameState.gameOver || gameState.victory) return;
        
        this.frameCount++;
        
        // Spawn new coin
        if (this.frameCount >= COIN_SPAWN_INTERVAL) {
            this.spawn();
            this.frameCount = 0;
        }
        
        // Update coin positions
        for (let i = this.list.length - 1; i >= 0; i--) {
            const coin = this.list[i];
            coin.x -= GAME_SPEED;
            coin.rotation += 0.1;
            
            // Check if collected
            if (!coin.collected && this.checkCollection(coin, player)) {
                coin.collected = true;
                gameState.score++;
                
                // Check if won
                if (gameState.score >= WIN_SCORE) {
                    gameState.victory = true;
                    showVictory();
                }
            }
            
            // Remove coins off-screen or collected
            if (coin.x + coin.size < 0 || coin.collected) {
                this.list.splice(i, 1);
            }
        }
    },
    
    checkCollection(coin, player) {
        const px = player.x;
        const py = player.y;
        const pw = player.width;
        const ph = player.height;
        const cx = coin.x;
        const cy = coin.y;
        const cs = coin.size;
        
        // Simple rectangle collision detection
        return (
            px < cx + cs &&
            px + pw > cx &&
            py < cy + cs &&
            py + ph > cy
        );
    },
    
    draw() {
        // Update coin animation frame
        coinAnimationCounter++;
        if (coinAnimationCounter >= 15) { // Switch frame every 15 frames (slower speed)
            coinAnimationCounter = 0;
            currentCoinFrame = (currentCoinFrame + 1) % coinSpriteFrameCount;
        }
        
        this.list.forEach(coin => {
            if (coin.collected) return;
            
            const x = coin.x;
            const y = coin.y;
            
            // Use new sprite texture
            if (coinSpriteLoaded && coinSprite.complete && coinSprite.naturalWidth > 0) {
                // Draw coin using sprite sheet
                ctx.save();
                ctx.imageSmoothingEnabled = false;
                
                ctx.drawImage(
                    coinSprite,
                    currentCoinFrame * coinSpriteFrameWidth, // Source X coordinate
                    0, // Source Y coordinate
                    coinSpriteFrameWidth, // Source width
                    coinSpriteFrameHeight, // Source height
                    x, // Destination X coordinate
                    y, // Destination Y coordinate
                    coin.size, // Destination width
                    coin.size // Destination height
                );
                
                ctx.restore();
            } else {
                // Use larger, more visible default coin drawing
                const size = coin.size;
                
                // Outer ring - purple glow
                ctx.fillStyle = '#7b68ee';
                ctx.fillRect(x, y, size, size);
                
                // Inner - cyan
                ctx.fillStyle = '#4dd0e1';
                ctx.fillRect(x + size * 0.2, y + size * 0.2, size * 0.6, size * 0.6);
                
                // Center - white highlight
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(x + size * 0.4, y + size * 0.4, size * 0.2, size * 0.2);
                
                // Border
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, size, size);
                ctx.fillRect(x, y, 16, 16);
                
                // Inner border - dark gold
                ctx.fillStyle = '#cc9900';
                ctx.fillRect(x + 2, y + 2, 12, 12);
                
                // Inner highlight - bright gold
                ctx.fillStyle = COLORS.coinAccent;
                ctx.fillRect(x + 4, y + 4, 8, 8);
                
                // Center mark - gold
                ctx.fillStyle = COLORS.coin;
                ctx.fillRect(x + 6, y + 6, 4, 4);
                
                // Sparkle effect (top-left white dot)
                if (gameState.frame % 30 < 15) {
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(x + 4, y + 4, 2, 2);
                }
            }
        });
    },
    
    reset() {
        this.list = [];
        this.frameCount = 0;
    }
};

// Obstacle Management
const obstacles = {
    list: [],
    frameCount: 0,
    
    spawn() {
        // Only spawn ground obstacles
        // Random scale ratio (3 to 5x)
        const scale = Math.random() * 2 + 3; // Between 3 to 5x
        
        // Randomly select an obstacle image
        const imageIndex = Math.floor(Math.random() * obstacleImageCount);
        
        // Obstacle height: 80% chance on ground, 20% chance in air
        let yOffset = 0;
        if (Math.random() < 0.8) {
            // 80% chance: on ground or slightly above (0-50 pixels)
            yOffset = Math.random() * 50;
        } else {
            // 20% chance: in air (100-250 pixels)
            yOffset = Math.random() * 150 + 100;
        }
        
        this.list.push({
            x: GAME_WIDTH,
            isTop: false,
            scale: scale,
            imageIndex: imageIndex,
            yOffset: yOffset // Height above ground
        });
    },
    
    update() {
        if (!gameState.started || gameState.gameOver || gameState.victory) return;
        
        this.frameCount++;
        
        // Spawn new obstacle
        if (this.frameCount >= OBSTACLE_SPAWN_INTERVAL) {
            this.spawn();
            this.frameCount = 0;
        }
        
        // Update obstacle positions
        for (let i = this.list.length - 1; i >= 0; i--) {
            const obstacle = this.list[i];
            obstacle.x -= GAME_SPEED;
            
            // Check collision
            if (this.checkCollision(obstacle, player)) {
                gameState.gameOver = true;
            }
            
            // Remove obstacles off-screen
            // Calculate actual width (considering obstacle texture scaling)
            let actualWidth = 100 * obstacle.scale; // Default width
            if (obstacleImagesLoaded === obstacleImageCount) {
                const img = obstacleImages[obstacle.imageIndex];
                if (img && img.complete && img.naturalWidth > 0) {
                    actualWidth = img.width * obstacle.scale;
                }
            }
            
            if (obstacle.x + actualWidth < 0) {
                this.list.splice(i, 1);
            }
        }
    },
    
    checkCollision(obstacle, player) {
        const px = player.x;
        const py = player.y;
        const pw = player.width;
        const ph = player.height;
        
        // Bottom obstacles use texture's actual size and position
        if (obstacleImagesLoaded === obstacleImageCount) {
            const img = obstacleImages[obstacle.imageIndex];
            if (img && img.complete && img.naturalWidth > 0) {
                const scaledWidth = img.width * obstacle.scale;
                const scaledHeight = img.height * obstacle.scale;
                
                // Shrink collision boundary, exclude transparent parts (approx 20% margin)
                const margin = 0.15; // 15% margin
                const collisionX = obstacle.x + scaledWidth * margin;
                const collisionY = GROUND_Y - scaledHeight - (obstacle.yOffset || 0) + scaledHeight * margin;
                const collisionWidth = scaledWidth * (1 - margin * 2);
                const collisionHeight = scaledHeight * (1 - margin * 2);
                
                // Rectangle collision detection (using shrunken bounds)
                return (
                    px < collisionX + collisionWidth &&
                    px + pw > collisionX &&
                    py < collisionY + collisionHeight &&
                    py + ph > collisionY
                );
            }
        }
        
        return false; // No collision detection when image not loaded
    },
    
    draw() {
        this.list.forEach(obstacle => {
            // Bottom obstacles use static textures (two random images)
            if (obstacleImagesLoaded === obstacleImageCount) {
                const img = obstacleImages[obstacle.imageIndex];
                
                if (img && img.complete && img.naturalWidth > 0) {
                    ctx.save();
                    ctx.imageSmoothingEnabled = false;
                    
                    // Calculate scaled dimensions
                    const scaledWidth = img.width * obstacle.scale;
                    const scaledHeight = img.height * obstacle.scale;
                    
                    // Draw position (using offset)
                    const drawX = obstacle.x;
                    const drawY = GROUND_Y - scaledHeight - (obstacle.yOffset || 0);
                    
                    // Draw image
                    ctx.drawImage(
                        img,
                        drawX,
                        drawY,
                        scaledWidth,
                        scaledHeight
                    );
                    
                    ctx.restore();
                } else {
                    // Image not loaded successfully, use default drawing
                    const scaledWidth = 100 * obstacle.scale;
                    const scaledHeight = 100 * obstacle.scale;
                    const drawX = obstacle.x;
                    const drawY = GROUND_Y - scaledHeight - (obstacle.yOffset || 0);
                    
                    ctx.fillStyle = '#ff0000'; // Red square
                    ctx.fillRect(drawX, drawY, scaledWidth, scaledHeight);
                    
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(drawX, drawY, scaledWidth, scaledHeight);
                }
            } else {
                // Image not loaded, use default drawing
                const scaledWidth = 100 * obstacle.scale;
                const scaledHeight = 100 * obstacle.scale;
                const drawX = obstacle.x;
                const drawY = GROUND_Y - scaledHeight - (obstacle.yOffset || 0);
                
                ctx.fillStyle = '#ff0000'; // Red square
                ctx.fillRect(drawX, drawY, scaledWidth, scaledHeight);
                
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.strokeRect(drawX, drawY, scaledWidth, scaledHeight);
            }
        });
    },
    
    reset() {
        this.list = [];
        this.frameCount = 0;
    }
};

// Background Drawing
function drawBackground() {
    if (backgroundLoaded) {
        // Use image as background
        // Calculate background scrolling
        if (gameState.started && !gameState.gameOver && !gameState.victory) {
            backgroundX -= 2; // Increase background scroll speed for smoother effect
        }
        
        // Calculate number of draws needed to fill screen
        const imgWidth = backgroundImage.width;
        const imgHeight = backgroundImage.height;
        
        // Scale image proportionally to fit screen height
        const scale = GAME_HEIGHT / imgHeight;
        const scaledWidth = imgWidth * scale; // Use float for smoother scrolling
        
        // Loop draw background (using float offset)
        const offset = backgroundX % scaledWidth;
        const numImages = Math.ceil(GAME_WIDTH / scaledWidth) + 2; // Draw extra image to ensure coverage
        
        ctx.save();
        ctx.imageSmoothingEnabled = false;
        
        for (let i = -1; i < numImages; i++) {
            const x = offset + (i * scaledWidth);
            ctx.drawImage(
                backgroundImage,
                x,
                0,
                scaledWidth,
                GAME_HEIGHT
            );
        }
        
        ctx.restore();
        
        // Add slight black overlay to make foreground elements stand out
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        
    } else {
        // If image not loaded, use default background
        ctx.fillStyle = COLORS.bg;
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        
        // Pixelated grid layer - 16x16 pixel blocks
        const pixelGridSize = 16;
        for (let x = 0; x < GAME_WIDTH; x += pixelGridSize * 4) {
            for (let y = 0; y < GAME_HEIGHT; y += pixelGridSize * 4) {
                if ((x / pixelGridSize + y / pixelGridSize) % 8 === 0) {
                    ctx.fillStyle = '#141414';
                    ctx.fillRect(x, y, pixelGridSize * 2, pixelGridSize * 2);
                }
            }
        }
        
        // Simple star decoration
        ctx.fillStyle = '#333333';
        for (let i = 0; i < 40; i++) {
            const baseX = (i * 150) % GAME_WIDTH;
            const x = Math.floor((baseX + gameState.frame * 0.3) / 16) * 16;
            const y = Math.floor((i * 97) / 16) * 16;
            ctx.fillRect(x, y, 2, 2);
        }
    }
}

// UI Drawing
function drawUI() {
    // Score display
    ctx.fillStyle = COLORS.score;
    ctx.font = '48px "Pixel Font", monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${gameState.score}`, 50, 80);
    
    if (gameState.score >= WIN_SCORE - 10 && gameState.score < WIN_SCORE) {
        ctx.fillStyle = COLORS.player;
        ctx.font = '32px "Pixel Font", monospace';
        ctx.fillText(`${WIN_SCORE - gameState.score} more to win!`, 50, 140);
    }
}

// Game Main Loop
function gameLoop() {
    gameState.frame++;
    
    // Clear canvas
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
    // Draw
    drawBackground();
    obstacles.draw();
    coins.draw();
    player.draw();
    drawUI();
    
    // Update
    if (gameState.started && !gameState.gameOver && !gameState.victory) {
        player.update();
        coins.update();
        obstacles.update();
    }
    
    // Game over detection
    if (gameState.gameOver && !gameState.victory) {
        showGameOver();
    }
    
    requestAnimationFrame(gameLoop);
}

// UI Helper Functions
function showElement(id) {
    document.getElementById(id).classList.remove('hidden');
}

function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}

function showGameOver() {
    document.getElementById('finalScore').textContent = gameState.score;
    showElement('gameOver');
}

function showVictory() {
    showElement('victory');
}

function resetGame() {
    gameState.started = false;
    gameState.gameOver = false;
    gameState.victory = false;
    gameState.score = 0;
    gameState.frame = 0;
    
    player.reset();
    coins.reset();
    obstacles.reset();
    
    hideElement('gameOver');
    hideElement('victory');
    showElement('startScreen');
}

// Keyboard Controls
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        player.startFlying();
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
        player.stopFlying();
    }
});

// Button Events
document.getElementById('restartBtn').addEventListener('click', resetGame);

// Start Game
gameLoop();
