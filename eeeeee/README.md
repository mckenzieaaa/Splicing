# I am the Most Magical Cat! 🐱✨

**Level 2** of the multi-level game series.

A pixel-art style endless runner game where you control a magical flying cat, collecting coins and avoiding obstacles.

> **Mission**: Complete this level and obtain the password **"1218"** to unlock Level 3!

## Game Overview

You are a cat with magical flying abilities! In this challenging pixel world, you need to:
- 🪙 Collect **30 coins** to achieve victory
- 🚧 Avoid ground obstacles
- 🎮 Master flying techniques to collect coins at different heights

## Game Features

- **Pixel Art Style**: Retro 48×48 pixel sprite animations
- **Smooth Flying Mechanics**: Hold spacebar to glide and fly
- **Dynamic Difficulty**: Coins spawn at various heights to test your skills
- **Beautiful Animations**:
  - 6-frame cat running animation
  - 8-frame spinning coin animation
  - Randomly generated obstacle textures

## Controls

| Key | Function |
|------|------|
| **SPACE** | Start Game |
| **Hold SPACE** | Fly/Glide continuously |
| **Release SPACE** | Fall |

## Objective

Collect **30 coins** to win! Upon victory, the password **"1218"** will be displayed - use it to unlock the next level!

## Game Mechanics

### Player Control
- Seamless transition between ground running and aerial flight
- Gravity system: Natural falling when not flying
- Gliding mechanism: Hold spacebar to ascend continuously

### Coin System
- Coins spawn randomly at 7 different heights:
  - Ground level (no jump required)
  - Low air (small jump)
  - Mid air (requires jump)
  - High air (requires full jump)
  - Very high (requires sustained flight)
- Coin collection is not blocked by obstacles

### Obstacle System
- Obstacles rise from the ground with random heights
- 2 random textures for visual variety
- Game speed is 4x the original design for increased challenge

## Technical Features

- **Canvas Rendering**: Game graphics rendered using HTML5 Canvas
- **Sprite Animation**: Frame-based animation system using sprite sheets
- **Responsive Design**: 1920×1080 game resolution
- **No Image Smoothing**: Maintains pixel-art clarity
- **Scrolling Background**: Creates infinite running visual effect

## File Structure

```
eeeeee/
├── index.html          # Main game page
├── game.js            # Game logic code
├── style.css          # Stylesheet
├── player.png         # Cat sprite sheet (288×48, 6 frames)
├── coin.png           # Coin sprite sheet (512×64, 8 frames)
├── obstacle1.png      # Obstacle texture 1
├── obstacle2.png      # Obstacle texture 2
├── background.png     # Background image
├── title-cat.png      # Title icon
├── trophy.gif         # Victory trophy animation
└── pixel-font.ttf     # Pixel font
```

## How to Run

1. Open `index.html` directly in your browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```
3. Access the game page in your browser

## Game Configuration

Adjustable parameters in `game.js`:

```javascript
const WIN_SCORE = 30;              // Coins needed to win
const GAME_SPEED = 16;             // Game speed
const JUMP_STRENGTH = -12;         // Jump force
const GRAVITY = 0.6;               // Gravity coefficient
const COIN_SPAWN_INTERVAL = 23;    // Coin spawn interval
const OBSTACLE_SPAWN_INTERVAL = 75; // Obstacle spawn interval
```

## Color Scheme

The game uses a minimalist black/white/gray palette with two cool accent colors:

- 🎨 **Player**: Cyan (#4dd0e1)
- 🪙 **Coins**: Gold (#ffd700)
- 🚧 **Obstacles**: Dark gray + Purple-blue accent (#7b68ee)
- 🖤 **Background**: Pure black (#0a0a0a)

## Developer

- Game Design & Development: Marsper
- Pixel Art Assets: Custom sprites

## Version Info

- **Version**: Level 2
- **Last Updated**: November 13, 2025

---

🎮 **Enjoy the game and become the most magical cat!** ✨