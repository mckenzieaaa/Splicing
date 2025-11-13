# Level 3 - Hand Tracking Coin Collection Game 🎮# Level 2 - Hand Tracking Coin Collection Game 🎮# 😊 笑容收集之旅 - Pixel Game



A web-based interactive game that uses **MediaPipe Hand Tracking** technology to detect hand gestures and collect coins by touching numbered targets in sequence.



![Game Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![MediaPipe](https://img.shields.io/badge/MediaPipe-Hands-blue)A web-based interactive game that uses **MediaPipe Hand Tracking** technology to detect hand gestures and collect coins by touching numbered targets in sequence.一个基于像素艺术风格的互动网页游戏，使用你的笑脸作为主角！



## 🌟 Features



### Core Gameplay![Game Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![MediaPipe](https://img.shields.io/badge/MediaPipe-Hands-blue)## 🎮 游戏特点

- **Hand Tracking Technology**: Real-time hand detection using MediaPipe Hands

- **Camera Integration**: Uses webcam to track your index finger position

- **Touch Detection**: Touch numbered targets in sequential order (1→2→3→...)

- **Progressive Difficulty**: 5 levels with increasing number of targets## 🌟 Features- **像素风格**：16×16像素的复古游戏美学

- **Time Challenge**: 10-second countdown for each target

- **Animated Coins**: Custom spinning coin sprite animation (8 frames)- **互动玩法**：按顺序点击圆圈收集笑容



### Visual Design### Core Gameplay- **紫黄配色**：冷色调紫色系 + 明亮黄色点缀

- **Pixel Art Style**: Retro gaming aesthetic with Press Start 2P font

- **Purple/Yellow Theme**: Eye-catching color scheme- **Hand Tracking Technology**: Real-time hand detection using MediaPipe Hands- **响应式设计**：支持1920×1080分辨率，自适应不同屏幕

- **Particle Effects**: Coins fly to score display on collection

- **Real-time Video Feed**: Mirrored camera view for intuitive interaction- **Camera Integration**: Uses webcam to track your index finger position- **触摸支持**：支持鼠标点击和触摸屏操作

- **Responsive UI**: Score panel, level indicator, timer, and camera status

- **Touch Detection**: Touch numbered targets in sequential order (1→2→3→...)

### Game Mechanics

- Collect coins by touching targets with your index finger- **Progressive Difficulty**: 5 levels with increasing number of targets## 🚀 在GitHub Pages上部署

- Targets must be touched in numeric order

- Wrong order triggers a warning modal- **Time Challenge**: 10-second countdown for each target

- Complete Level 5 to win and reveal the secret code

- Press 'R' to restart at any time- **Animated Coins**: Custom spinning coin sprite animation (8 frames)### 步骤1：创建GitHub仓库



## 🎯 How to Play



1. **Allow Camera Access**: Click "Enable Camera" when prompted### Visual Design1. 登录 [GitHub](https://github.com)

2. **Position Your Hand**: Hold your hand in front of the webcam

3. **Touch Targets**: Point your index finger at numbered targets in order- **Pixel Art Style**: Retro gaming aesthetic with Press Start 2P font2. 点击右上角的 "+" → "New repository"

4. **Collect Coins**: Each successful touch adds to your score

5. **Complete Levels**: Finish all targets before time runs out- **Purple/Yellow Theme**: Eye-catching color scheme3. 填写仓库信息：

6. **Win the Game**: Complete Level 5 to see the victory screen!

- **Particle Effects**: Coins fly to score display on collection   - Repository name: `smile-collection-game` (或任何你喜欢的名字)

## 🚀 Live Demo

- **Real-time Video Feed**: Mirrored camera view for intuitive interaction   - Description: "笑容收集之旅 - 像素游戏"

Play the game online: **[https://mckenzieaaa.github.io/Splicing/](https://mckenzieaaa.github.io/Splicing/)**

- **Responsive UI**: Score panel, level indicator, timer, and camera status   - 选择 "Public" (公开仓库)

## 🛠️ Technology Stack

   - 勾选 "Add a README file"

- **HTML5 Canvas**: Game rendering (1920x1080 resolution)

- **Vanilla JavaScript**: Game logic and interaction### Game Mechanics4. 点击 "Create repository"

- **CSS3**: Pixel art styling and animations

- **MediaPipe Hands**: Hand tracking and landmark detection- Collect coins by touching targets with your index finger

- **WebRTC**: Camera access via getUserMedia API

- Targets must be touched in numeric order### 步骤2：上传游戏文件

### External Libraries

- [MediaPipe Hands](https://cdn.jsdelivr.net/npm/@mediapipe/hands/) - Hand tracking- Wrong order triggers a warning modal

- [MediaPipe Camera Utils](https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/) - Camera management

- [MediaPipe Drawing Utils](https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/) - Visualization helpers- Complete Level 5 to win and reveal the secret code#### 方法A：通过GitHub网页界面上传



## 📁 Project Structure- Press 'R' to restart at any time



```1. 进入你的仓库页面

team-work/

├── web_game/## 🎯 How to Play2. 点击 "Add file" → "Upload files"

│   ├── index.html          # Main HTML structure

│   ├── game.js            # Game logic and hand tracking3. 将以下文件拖拽到上传区域：

│   ├── styles.css         # Pixel art styling

│   ├── Spinning Coin.png  # 8-frame coin sprite sheet1. **Allow Camera Access**: Click "Enable Camera" when prompted   - `index.html`

│   ├── key.gif           # Victory screen animation (optional)

│   └── README.md         # Documentation2. **Position Your Hand**: Hold your hand in front of the webcam   - `game.js`

├── pixel_hero_game.py     # Python game version

└── requirements.txt       # Python dependencies3. **Touch Targets**: Point your index finger at numbered targets in order   - `styles.css`

```

4. **Collect Coins**: Each successful touch adds to your score4. 在底部填写提交信息："Add game files"

## 🎮 Game Configuration

5. **Complete Levels**: Finish all targets before time runs out5. 点击 "Commit changes"

### Customizable Settings (in `game.js`)

6. **Win the Game**: Complete Level 5 to see the victory screen!

```javascript

const VICTORY_LEVEL = 5;           // Number of levels to win#### 方法B：通过Git命令行上传（推荐）

const COIN_FRAME_COUNT = 8;        // Coin animation frames

const COIN_FRAME_SPEED = 0.075;    // Animation speed## 🚀 Live Demo

const TARGET_RADIUS = 50;          // Target size

const TOUCH_THRESHOLD = 80;        // Touch detection sensitivity```bash

let targetTimer = 10.0;            // Time per target (seconds)

```Play the game online: **[https://wuyuying003.github.io/week8/web_game/](https://wuyuying003.github.io/week8/web_game/)**# 1. 克隆你的仓库



### Color Schemegit clone https://github.com/你的用户名/smile-collection-game.git



```javascript## 🛠️ Technology Stackcd smile-collection-game

--color-bg: #1a0d2e;        // Dark purple background

--color-primary: #9d4edd;   // Purple primary

--color-accent: #ffd60a;    // Yellow accent (coins)

--color-success: #06ffa5;   // Green success- **HTML5 Canvas**: Game rendering (1920x1080 resolution)# 2. 复制游戏文件到仓库目录

--color-wrong: #e63946;     // Red error

```- **Vanilla JavaScript**: Game logic and interactioncp /path/to/web_game/* .



## 💻 Local Development- **CSS3**: Pixel art styling and animations



### Prerequisites- **MediaPipe Hands**: Hand tracking and landmark detection# 3. 添加文件到Git

- Modern web browser (Chrome, Firefox, Edge, Safari)

- Webcam access- **WebRTC**: Camera access via getUserMedia APIgit add index.html game.js styles.css

- Local web server (for testing)



### Installation

### External Libraries# 4. 提交更改

1. **Clone the repository**

   ```bash- [MediaPipe Hands](https://cdn.jsdelivr.net/npm/@mediapipe/hands/) - Hand trackinggit commit -m "Add pixel game files"

   git clone https://github.com/mckenzieaaa/Splicing.git

   cd Splicing- [MediaPipe Camera Utils](https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/) - Camera management

   git checkout Level-3

   cd team-work/web_game- [MediaPipe Drawing Utils](https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/) - Visualization helpers# 5. 推送到GitHub

   ```

git push origin main

2. **Run a local server**

   ## 📁 Project Structure```

   Using Python:

   ```bash

   python3 -m http.server 8000

   ``````### 步骤3：启用GitHub Pages

   

   Or using Node.js:web_game/

   ```bash

   npx http-server -p 8000├── index.html          # Main HTML structure1. 进入你的仓库页面

   ```

├── game.js            # Game logic and hand tracking2. 点击 "Settings" (设置)

3. **Open in browser**

   ```├── styles.css         # Pixel art styling3. 在左侧菜单中找到 "Pages"

   http://localhost:8000/index.html

   ```├── Spinning Coin.png  # 8-frame coin sprite sheet4. 在 "Source" 部分：



### Browser Compatibility├── key.gif           # Victory screen animation (optional)   - Branch: 选择 `main`



✅ **Supported Browsers**└── README.md         # This file   - Folder: 选择 `/ (root)`

- Chrome 87+

- Firefox 78+```5. 点击 "Save"

- Edge 88+

- Safari 14+6. 等待1-2分钟，页面会显示：



⚠️ **Requirements**## 🎮 Game Configuration   ```

- WebRTC support

- WebGL support (for MediaPipe)   ✅ Your site is live at https://你的用户名.github.io/smile-collection-game/

- Camera permissions enabled

### Customizable Settings (in `game.js`)   ```

## 🎨 Customization Guide



### Change Coin Sprite

1. Replace `Spinning Coin.png` with your custom sprite sheet```javascript### 步骤4：访问你的游戏

2. Update frame dimensions in `game.js`:

   ```javascriptconst VICTORY_LEVEL = 5;           // Number of levels to win

   const COIN_FRAME_WIDTH = 16;  // Your frame width

   const COIN_FRAME_HEIGHT = 16; // Your frame heightconst COIN_FRAME_COUNT = 8;        // Coin animation frames打开浏览器访问：

   const COIN_FRAME_COUNT = 8;   // Number of frames

   ```const COIN_FRAME_SPEED = 0.075;    // Animation speed```



### Adjust Difficultyconst TARGET_RADIUS = 50;          // Target sizehttps://你的用户名.github.io/smile-collection-game/

- **Easier**: Increase `targetTimer`, decrease `targetsPerLevel`

- **Harder**: Decrease `targetTimer`, increase `VICTORY_LEVEL`const TOUCH_THRESHOLD = 80;        // Touch detection sensitivity```



### Modify Colorslet targetTimer = 10.0;            // Time per target (seconds)

Edit CSS variables in `styles.css`:

```css```🎉 恭喜！你的游戏现在已经在线了！

:root {

    --color-accent: #your-color;

    --color-primary: #your-color;

}### Color Scheme## 📱 分享给其他人

```



## 🐛 Troubleshooting

```javascript将上面的URL分享给朋友，他们可以直接在浏览器中玩你的游戏！

### Camera Not Working

- **Check Permissions**: Allow camera access in browser settings--color-bg: #1a0d2e;        // Dark purple background

- **Try HTTPS**: Some browsers require secure connection

- **Restart Browser**: Close and reopen the browser--color-primary: #9d4edd;   // Purple primary### 可选：使用自定义域名

- **Check DevTools**: Open console (F12) for error messages

--color-accent: #ffd60a;    // Yellow accent (coins)

### Hand Not Detected

- **Lighting**: Ensure good lighting conditions--color-success: #06ffa5;   // Green success1. 购买一个域名（如：smile-game.com）

- **Distance**: Keep hand 30-60cm from camera

- **Background**: Plain background works best--color-wrong: #e63946;     // Red error2. 在仓库的 Settings → Pages → Custom domain 中添加你的域名

- **Calibration**: Try moving hand slowly at first

```3. 在域名提供商处配置DNS记录指向GitHub Pages

### Performance Issues

- **Close Other Tabs**: Free up system resources

- **Lower Resolution**: Edit camera settings in `initializeCamera()`

- **Disable Extensions**: Try incognito mode## 💻 Local Development## 🎯 游戏玩法



## 📝 Game States



The game has 6 different states:### Prerequisites1. **目标**：按数字顺序（1→2→3→...）点击圆圈



1. **waiting_camera**: Waiting for camera initialization- Modern web browser (Chrome, Firefox, Edge, Safari)2. **计时**：每个目标有10秒时间限制

2. **playing**: Active gameplay

3. **level_complete**: Level finished, showing next level info- Webcam access3. **升级**：完成所有目标后进入下一关

4. **game_over**: Time ran out

5. **wrong**: Wrong target touched (2-second penalty)- Local web server (for testing)4. **挑战**：关卡越高，目标数量越多（最多8个）

6. **victory**: All 5 levels completed



## 🏆 Victory Condition

### Installation### 控制方式

Complete **Level 5** to win and unlock the secret code: **1218**



## 🚀 Deployment to GitHub Pages

1. **Clone the repository**- **鼠标**：点击目标圆圈

### Quick Setup

   ```bash- **触摸屏**：触摸目标圆圈

1. **Push to GitHub** (already done!)

   ```bash   git clone https://github.com/WUYuying003/week8.git- **键盘**：

   git add .

   git commit -m "Deploy Level 3 game"   cd week8/web_game  - `R` - 重新开始

   git push origin Level-3

   ```   ```  - `ESC` - 暂停



2. **Enable GitHub Pages**

   - Go to your repository: https://github.com/mckenzieaaa/Splicing

   - Click "Settings" → "Pages"2. **Run a local server**## 🛠️ 技术细节

   - Under "Source", select "Level-3" branch and "/" (root) folder

   - Click "Save"   

   - Your game will be live at: https://mckenzieaaa.github.io/Splicing/

   Using Python:- **分辨率**：1920×1080 px

3. **Wait 2-3 minutes** for GitHub to build and deploy

   ```bash- **像素比例**：16×16 px 网格

### Custom Domain (Optional)

   python3 -m http.server 8000- **主角尺寸**：16×16 像素

You can use a custom domain by:

1. Adding a `CNAME` file with your domain   ```- **技术栈**：纯HTML5 + CSS3 + JavaScript（无需外部依赖）

2. Configuring DNS settings in your domain registrar

   - **兼容性**：支持所有现代浏览器

## 📊 Level 3 Features

   Or using Node.js:

This is **Level 3** of the Splicing project, featuring:

- Advanced hand tracking gameplay   ```bash## 🎨 配色方案

- Purple and yellow color theme

- Progressive difficulty system   npx http-server -p 8000

- Real-time camera integration

- Victory code: **1218**   ```- **背景**：深紫色 (#1a0d2e, #2d1b4e)



## 📄 License- **主色调**：紫色系 (#9d4edd, #c77dff)



This project is open source and available for educational purposes.3. **Open in browser**- **强调色**：黄色 (#ffd60a)



## 👥 Credits   ```- **辅助色**：黑白灰



- **Game Design**: Interactive hand tracking game concept   http://localhost:8000/index.html

- **MediaPipe**: Google's MediaPipe Hands technology

- **Font**: Press Start 2P (Google Fonts)   ```## 📝 更新游戏

- **Sprite Art**: Custom 8-frame coin animation



## 🔗 Links

### Browser Compatibility修改游戏后更新到GitHub Pages：

- **Repository**: [https://github.com/mckenzieaaa/Splicing](https://github.com/mckenzieaaa/Splicing)

- **Live Demo**: [https://mckenzieaaa.github.io/Splicing/](https://mckenzieaaa.github.io/Splicing/)

- **MediaPipe Docs**: [https://mediapipe.dev](https://mediapipe.dev)

✅ **Supported Browsers**```bash

## 📧 Contact

- Chrome 87+# 1. 修改文件后提交

For questions or suggestions, please open an issue on GitHub.

- Firefox 78+git add .

---

- Edge 88+git commit -m "Update game"

**Enjoy the game! 🎮✨**

- Safari 14+

Made with ❤️ using MediaPipe Hand Tracking Technology - Level 3

# 2. 推送到GitHub

⚠️ **Requirements**git push origin main

- WebRTC support

- WebGL support (for MediaPipe)# 3. 等待1-2分钟，GitHub Pages会自动更新

- Camera permissions enabled```



## 🎨 Customization Guide## 🐛 故障排除



### Change Coin Sprite### 游戏无法显示？

1. Replace `Spinning Coin.png` with your custom sprite sheet

2. Update frame dimensions in `game.js`:1. 确认三个文件（index.html, game.js, styles.css）都在仓库根目录

   ```javascript2. 检查GitHub Pages是否已启用

   const COIN_FRAME_WIDTH = 16;  // Your frame width3. 清除浏览器缓存后刷新页面

   const COIN_FRAME_HEIGHT = 16; // Your frame height4. 打开浏览器开发者工具（F12）查看错误信息

   const COIN_FRAME_COUNT = 8;   // Number of frames

   ```### 部署后看到404错误？



### Adjust Difficulty- 等待5-10分钟，GitHub Pages需要时间构建

- **Easier**: Increase `targetTimer`, decrease `targetsPerLevel`- 确认仓库是Public（公开）状态

- **Harder**: Decrease `targetTimer`, increase `VICTORY_LEVEL`- 检查URL是否正确



### Modify Colors## 📧 支持

Edit CSS variables in `styles.css`:

```css如有问题，可以：

:root {1. 在GitHub仓库创建Issue

    --color-accent: #your-color;2. 查看GitHub Pages文档：https://pages.github.com/

    --color-primary: #your-color;

}## 📄 许可证

```

MIT License - 自由使用、修改和分享

## 🐛 Troubleshooting

---

### Camera Not Working

- **Check Permissions**: Allow camera access in browser settings**祝你游戏愉快！ 😊**

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
- **Lower Resolution**: Edit camera settings in `initializeCamera()`
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

Complete **Level 5** to win and unlock the secret code: **0218**

## 🚀 Deployment to GitHub Pages

### Quick Setup

1. **Push to GitHub** (already done!)
   ```bash
   git add .
   git commit -m "Deploy game"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository: https://github.com/WUYuying003/week8
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch and "/web_game" folder
   - Click "Save"
   - Your game will be live at: https://wuyuying003.github.io/week8/web_game/

3. **Wait 2-3 minutes** for GitHub to build and deploy

### Custom Domain (Optional)

You can use a custom domain by:
1. Adding a `CNAME` file with your domain
2. Configuring DNS settings in your domain registrar

## 📄 License

This project is open source and available for educational purposes.

## 👥 Credits

- **Game Design**: Interactive hand tracking game concept
- **MediaPipe**: Google's MediaPipe Hands technology
- **Font**: Press Start 2P (Google Fonts)
- **Sprite Art**: Custom 8-frame coin animation

## 🔗 Links

- **Repository**: [https://github.com/WUYuying003/week8](https://github.com/WUYuying003/week8)
- **Live Demo**: [https://wuyuying003.github.io/week8/web_game/](https://wuyuying003.github.io/week8/web_game/)
- **MediaPipe Docs**: [https://mediapipe.dev](https://mediapipe.dev)

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Enjoy the game! 🎮✨**

Made with ❤️ using MediaPipe Hand Tracking Technology
