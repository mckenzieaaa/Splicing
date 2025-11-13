# 🎮 Pixel Hero Voice-Controlled Game

A voice-controlled pixel art game featuring a yellow smiley face hero navigating through purple obstacles. Play directly in your browser with real-time voice control!

## 🌐 Play Online

**🎮 [Click here to play the game!](https://wuyuying003.github.io/team-work/)**

The game runs directly in your browser - no installation needed!

## 🎨 Design Specifications

- **Game Size**: 1920×1080 pixels (Full HD)
- **Pixel Grid**: 16×16 pixel units
- **Hero Size**: 16×16 pixels (256×256 actual pixels)
  - Occupies ~13% of screen width
  - Occupies ~24% of screen height
- **Color Scheme**: 
  - Primary: Black, White, Gray
  - Accents: Purple shades (majority) and Yellow
  - Cool color palette with pixel art aesthetic

## 🎮 Game Features

### Voice Control
- **High Pitch Sounds** (whistling, "eee"): Hero flies upward
- **Low Pitch Sounds** (humming, "ooo"): Hero flies downward
- **Silence**: Hero maintains current position
- **Real-time Audio Feedback**: Visual indicators show voice input

### Gameplay
- Navigate your pixel hero through purple obstacles
- Avoid collision with obstacles to survive
- Score points by successfully passing obstacles
- Smooth 60 FPS gameplay
- Pause/resume functionality

### Visual Design
- Pixel-perfect 16×16 character design
- Retro pixel art aesthetic
- Cool purple color scheme with pixel patterns
- Starry pixel background
- Clean, readable UI

## 📋 Requirements

```
pygame>=2.6.0
numpy>=1.24.0
pyaudio>=0.2.14
```

## 🚀 Installation & Setup

### Prerequisites

1. **Install Python** (3.8 or higher)

2. **Install PortAudio** (for microphone input)

#### macOS
```bash
brew install portaudio
```

#### Ubuntu/Debian
```bash
sudo apt-get install portaudio19-dev
```

#### Windows
PyAudio binaries are usually available via pip directly.

### Install Dependencies

```bash
pip install -r requirements.txt
```

## 🎯 How to Play

### 🌐 Web Version (Recommended)

1. **Open the game**: Visit https://wuyuying003.github.io/team-work/
2. **Click "Start Voice Control"** button
3. **Allow microphone access** when prompted
4. **Use your voice to control the hero**:
   - High pitch (whistling) → Fly UP ⬆️
   - Low pitch (humming) → Fly DOWN ⬇️
   - Silence → Stay in place
5. **Avoid purple obstacles** and score points!

### 💻 Local Python Version

1. **Start the game**
```bash
python pixel_hero_game.py
```

2. **Grant microphone permissions** when prompted

3. **Control the pixel hero**:
   - Make **high-pitched sounds** (whistling, "eee" sounds) to fly up
   - Make **low-pitched sounds** (humming, "ooo" sounds) to fly down
   - Stay **quiet** to maintain current height

4. **Navigate through obstacles**:
   - Avoid purple pixel obstacles
   - Pass through gaps to score points

5. **Game Controls**:
   - **SPACE**: Pause/Resume (or restart when game over)
   - **ESC**: Exit game

## 🎤 Voice Control Tips

### For Best Performance:
1. **Use Clear Sounds**: Whistling (high) and humming (low) work best
2. **Consistent Distance**: Maintain steady distance from microphone
3. **Quiet Environment**: Minimize background noise
4. **Practice Range**: Find your comfortable pitch range
5. **Watch Indicators**: Use visual feedback (volume bar and pitch display)

### Troubleshooting:
- **No response**: Check microphone permissions and try louder sounds
- **Lag**: Close other audio applications
- **Inconsistent control**: Try different voice sounds and pitches

## 🔧 Technical Details

### Audio Processing
- **Sample Rate**: 44.1 kHz
- **Pitch Range**: 80-1000 Hz (human voice range)
- **Volume Threshold**: 80 (configurable)
- **FFT Analysis**: Real-time frequency domain processing

### Game Engine
- **Framework**: Pygame for graphics and input
- **Threading**: Separate audio capture thread
- **Collision Detection**: Pixel-perfect collision system
- **Animation**: 60 FPS smooth gameplay

### Character Design
- 16×16 pixel grid character
- Yellow smiley face with black outline
- Pixel-perfect rendering
- Scales to 256×256 actual pixels on screen

### Visual Style
- Pixel art aesthetic throughout
- Purple gradient obstacles with pixel patterns
- Dark purple to black gradient background
- Pixel stars for atmosphere
- Retro game feel with modern mechanics

## 🎨 Customization

You can easily customize the game by modifying:

- **Colors**: Change the color definitions at the top of `pixel_hero_game.py`
- **Difficulty**: Adjust obstacle gap size and speed
- **Audio Sensitivity**: Modify volume thresholds
- **Character Design**: Edit the pixel pattern in the `PixelHero.draw()` method
- **Obstacle Pattern**: Change the checkered pattern in `Obstacle._draw_pixel_column()`

## 📝 Game Origin

This game is inspired by the voice-controlled bird game from the Interactive-Projects repository, adapted with:
- Custom pixel smiley character design
- Full HD resolution (1920×1080)
- Purple and yellow pixel art color scheme
- Enhanced visual effects and pixel aesthetic
- Retro gaming style

## 🎓 Learning Outcomes

This project demonstrates:
- **Audio Signal Processing**: FFT-based pitch detection
- **Game Development**: Real-time rendering with Pygame
- **Pixel Art**: Programmatic pixel-perfect drawing
- **Multithreading**: Concurrent audio processing
- **User Interface Design**: Clean, readable game UI
- **Collision Detection**: Accurate hit detection

## � Deployment

This game is deployed on **GitHub Pages** and can be played by anyone with a web browser!

**See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.**

### Quick Deploy:
1. Push code to GitHub
2. Enable GitHub Pages in repository Settings
3. Your game will be live at: `https://yourusername.github.io/repository-name/`

## 📂 Project Files

- `index.html` - Web version of the game (HTML5/JavaScript)
- `pixel_hero_game.py` - Python version (requires local installation)
- `requirements.txt` - Python dependencies
- `DEPLOYMENT.md` - Detailed deployment guide

## 🌐 Browser Support

The web version works best on:
- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- 📱 Mobile browsers (with microphone support)

## �📄 License

This project is for educational purposes.

---

## 🎮 Start Playing!

**🌐 Web Version**: https://wuyuying003.github.io/team-work/

**💻 Local Version**: `python pixel_hero_game.py`

---

**Enjoy the game! 🎮✨**

Use your voice to guide the pixel hero through obstacles and achieve the highest score!