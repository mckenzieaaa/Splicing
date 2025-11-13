# Level 3 - Hand Tracking Coin Collection Game 🎮

A web-based interactive game that uses **MediaPipe Hand Tracking** technology to detect hand gestures and collect coins by touching numbered targets in sequence.

![Game Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![MediaPipe](https://img.shields.io/badge/MediaPipe-Hands-blue)

## 🌟 Features

### Core Gameplay
- **Hand Tracking Technology**: Real-time hand detection using MediaPipe Hands
- **Camera Integration**: Uses webcam to track your index finger position
- **Touch Detection**: Touch numbered targets in sequential order (1→2→3→...)
- **Progressive Difficulty**: 5 levels with increasing number of targets
- **Time Challenge**: 10-second countdown for each target
- **Animated Coins**: Custom spinning coin sprite animation (8 frames)

### Visual Design
- **Pixel Art Style**: Retro gaming aesthetic with Press Start 2P font
- **Purple/Yellow Theme**: Eye-catching color scheme
- **Particle Effects**: Coins fly to score display on collection
- **Real-time Video Feed**: Mirrored camera view for intuitive interaction
- **Responsive UI**: Score panel, level indicator, timer, and camera status

### Game Mechanics
- Collect coins by touching targets with your index finger
- Targets must be touched in numeric order
- Wrong order triggers a warning modal
- Complete Level 5 to win and reveal the secret code
- Press 'R' to restart at any time

## 🎯 How to Play

1. **Allow Camera Access**: Click "Enable Camera" when prompted
2. **Position Your Hand**: Hold your hand in front of the webcam
3. **Touch Targets**: Point your index finger at numbered targets in order
4. **Collect Coins**: Each successful touch adds to your score
5. **Complete Levels**: Finish all targets before time runs out
6. **Win the Game**: Complete Level 5 to see the victory screen!

## 🚀 Live Demo

Play the game online: **[https://mckenzieaaa.github.io/Splicing/](https://mckenzieaaa.github.io/Splicing/)**

## 🛠️ Technology Stack

- **HTML5 Canvas**: Game rendering (1920x1080 resolution)
- **Vanilla JavaScript**: Game logic and interaction
- **CSS3**: Pixel art styling and animations
- **MediaPipe Hands**: Hand tracking and landmark detection
- **WebRTC**: Camera access via getUserMedia API

### External Libraries
- [MediaPipe Hands](https://cdn.jsdelivr.net/npm/@mediapipe/hands/) - Hand tracking
- [MediaPipe Camera Utils](https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/) - Camera management
- [MediaPipe Drawing Utils](https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/) - Visualization helpers

## 📁 Project Structure

\`\`\`
team-work/
├── web_game/
│   ├── index.html          # Main HTML structure
│   ├── game.js            # Game logic and hand tracking
│   ├── styles.css         # Pixel art styling
│   ├── Spinning Coin.png  # 8-frame coin sprite sheet
│   ├── key.gif           # Victory screen animation (optional)
│   └── README.md         # Documentation
├── pixel_hero_game.py     # Python game version
└── requirements.txt       # Python dependencies
\`\`\`

## 🎮 Game Configuration

### Customizable Settings (in \`game.js\`)

\`\`\`javascript
const VICTORY_LEVEL = 5;           // Number of levels to win
const COIN_FRAME_COUNT = 8;        // Coin animation frames
const COIN_FRAME_SPEED = 0.075;    // Animation speed
const TARGET_RADIUS = 50;          // Target size
const TOUCH_THRESHOLD = 80;        // Touch detection sensitivity
let targetTimer = 10.0;            // Time per target (seconds)
\`\`\`

### Color Scheme

\`\`\`css
--color-bg: #1a0d2e;        /* Dark purple background */
--color-primary: #9d4edd;   /* Purple primary */
--color-accent: #ffd60a;    /* Yellow accent (coins) */
--color-success: #06ffa5;   /* Green success */
--color-wrong: #e63946;     /* Red error */
\`\`\`

## 💻 Local Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Webcam access
- Local web server (for testing)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/mckenzieaaa/Splicing.git
   cd Splicing
   git checkout Level-3
   cd team-work/web_game
   \`\`\`

2. **Run a local server**
   
   Using Python:
   \`\`\`bash
   python3 -m http.server 8000
   \`\`\`
   
   Or using Node.js:
   \`\`\`bash
   npx http-server -p 8000
   \`\`\`

3. **Open in browser**
   \`\`\`
   http://localhost:8000/index.html
   \`\`\`

### Browser Compatibility

✅ **Supported Browsers**
- Chrome 87+
- Firefox 78+
- Edge 88+
- Safari 14+

⚠️ **Requirements**
- WebRTC support
- WebGL support (for MediaPipe)
- Camera permissions enabled

## 🎨 Customization Guide

### Change Coin Sprite
1. Replace \`Spinning Coin.png\` with your custom sprite sheet
2. Update frame dimensions in \`game.js\`:
   \`\`\`javascript
   const COIN_FRAME_WIDTH = 16;  // Your frame width
   const COIN_FRAME_HEIGHT = 16; // Your frame height
   const COIN_FRAME_COUNT = 8;   // Number of frames
   \`\`\`

### Adjust Difficulty
- **Easier**: Increase \`targetTimer\`, decrease \`targetsPerLevel\`
- **Harder**: Decrease \`targetTimer\`, increase \`VICTORY_LEVEL\`

### Modify Colors
Edit CSS variables in \`styles.css\`:
\`\`\`css
:root {
    --color-accent: #your-color;
    --color-primary: #your-color;
}
\`\`\`

## 🐛 Troubleshooting

### Camera Not Working
- **Check Permissions**: Allow camera access in browser settings
- **Try HTTPS**: Some browsers require secure connection
- **Restart Browser**: Close and reopen the browser
- **Check DevTools**: Open console (F12) for error messages

### Hand Not Detected
- **Lighting**: Ensure good lighting conditions
- **Distance**: Keep hand 30-60cm from camera
- **Background**: Plain background works best
- **Calibration**: Try moving hand slowly at first

### Performance Issues
- **Close Other Tabs**: Free up system resources
- **Lower Resolution**: Edit camera settings in \`initializeCamera()\`
- **Disable Extensions**: Try incognito mode

## 📝 Game States

The game has 6 different states:

1. **waiting_camera**: Waiting for camera initialization
2. **playing**: Active gameplay
3. **level_complete**: Level finished, showing next level info
4. **game_over**: Time ran out
5. **wrong**: Wrong target touched (2-second penalty)
6. **victory**: All 5 levels completed

## 🏆 Victory Condition

Complete **Level 5** to win and unlock the secret code: **1218**

## 🚀 Deployment to GitHub Pages

### Quick Setup

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Deploy Level 3 game"
   git push origin Level-3
   \`\`\`

2. **Enable GitHub Pages**
   - Go to repository: https://github.com/mckenzieaaa/Splicing
   - Click "Settings" → "Pages"
   - Under "Source", select "Level-3" branch and "/" (root) folder
   - Click "Save"
   - Your game will be live at: https://mckenzieaaa.github.io/Splicing/

3. **Wait 2-3 minutes** for GitHub to build and deploy

### Custom Domain (Optional)

You can use a custom domain by:
1. Adding a \`CNAME\` file with your domain
2. Configuring DNS settings in your domain registrar

## 📊 Level 3 Features

This is **Level 3** of the Splicing project, featuring:
- Advanced hand tracking gameplay
- Purple and yellow color theme
- Progressive difficulty system
- Real-time camera integration
- Victory code: **1218**

## 📄 License

This project is open source and available for educational purposes.

## 👥 Credits

- **Game Design**: Interactive hand tracking game concept
- **MediaPipe**: Google's MediaPipe Hands technology
- **Font**: Press Start 2P (Google Fonts)
- **Sprite Art**: Custom 8-frame coin animation

## 🔗 Links

- **Repository**: [https://github.com/mckenzieaaa/Splicing](https://github.com/mckenzieaaa/Splicing)
- **Live Demo**: [https://mckenzieaaa.github.io/Splicing/](https://mckenzieaaa.github.io/Splicing/)
- **MediaPipe Docs**: [https://mediapipe.dev](https://mediapipe.dev)

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Enjoy the game! 🎮✨**

Made with ❤️ using MediaPipe Hand Tracking Technology - Level 3
