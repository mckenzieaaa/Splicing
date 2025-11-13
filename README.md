# 🎮 Splicing - 像素艺术拼接游戏

一个多关卡的像素艺术风格游戏项目，每个关卡使用不同的色彩主题和游戏机制。

## 📂 项目结构

本项目采用**分支式开发**，每个关卡独立在不同的分支中：

### 🎯 关卡分支

| 分支 | 主题 | 状态 | 代码量 | 描述 |
|------|------|------|--------|------|
| **Level-1** | 黑白世界 | ✅ 完成 | 1,334 行 | 平台跳跃游戏，完整的物理引擎和精灵动画 |
| **Level-2** | 魔法猫咪 | ✅ 完成 | 1,005 行 | 跳跃冒险游戏，收集金币避开障碍 |
| **level-3** | 暖色世界 | 🚧 开发中 | - | 暖色调主题关卡（待开发） |

## 🚀 快速开始

### 查看各个关卡

切换到对应分支查看完整代码：

```bash
# 查看 Level-1 (黑白关卡)
git checkout Level-1

# 查看 Level-2 (猫咪游戏)
git checkout Level-2

# 查看 level-3 (开发中)
git checkout level-3
```

### 运行游戏

每个分支都包含完整的游戏文件，直接打开对应的 HTML 文件即可：

**Level-1:**
```bash
git checkout Level-1
# 打开 level1.html 或使用本地服务器
```

**Level-2:**
```bash
git checkout Level-2
# 打开 eeeeee/index.html
```

## 📊 技术栈

- **纯 HTML5 Canvas** - 游戏渲染
- **原生 JavaScript** - 游戏逻辑
- **CSS3** - 样式和动画
- **像素字体** - 复古游戏风格

## 🎨 关卡详情

### Level-1: 黑白世界 (Level-1 分支)

**特性：**
- ✨ 完整的平台跳跃游戏
- 🏃‍♂️ 角色动画系统（走路、跑步、跳跃）
- 🌄 多层背景视差滚动
- 🪙 收集品系统
- 🔊 音效系统
- 📱 响应式设计

**主要文件：**
- `level1.html` (1,334 行, 57 KB)
- `assets/` - 游戏资源
- 完成密码: `1030`

### Level-2: 魔法猫咪 (Level-2 分支)

**特性：**
- 🐱 可爱的猫咪主角
- 🎯 收集 30 个金币获胜
- 🚧 动态障碍物系统
- 🎈 滑翔机制
- 🏆 胜利动画

**主要文件：**
- `eeeeee/game.js` (739 行)
- `eeeeee/index.html` (31 行)
- `eeeeee/style.css` (235 行)
- 完成密码: `0218`

### level-3: 暖色世界 (level-3 分支)

**状态：** 🚧 开发中
- 计划主题: 暖色调彩色世界
- 完成密码: `1218`

## 🔑 游戏密码系统

每个关卡完成后会显示一个密码，用于解锁下一关：

- Level 1 → `1030`
- Level 2 → `0218`  
- Level 3 → `1218`

## 👥 团队协作

本项目采用分支式开发，每个团队成员负责一个关卡：

1. **成员 A** - Level-1 (黑白关卡) ✅
2. **成员 B** - Level-2 (猫咪游戏) ✅
3. **成员 C** - level-3 (暖色关卡) 🚧

## 📝 开发说明

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/mckenzieaaa/Splicing.git
cd Splicing

# 切换到你要开发的分支
git checkout Level-1  # 或 Level-2, level-3

# 使用本地服务器运行（推荐）
# Python 3
python -m http.server 8000

# 或使用 VS Code Live Server 插件
```

### 提交代码

```bash
# 在你的分支上开发
git add .
git commit -m "Update game features"
git push origin <your-branch-name>
```

## 🌐 在线预览

访问 [GitHub Pages](https://mckenzieaaa.github.io/Splicing/) 查看主页面（如果已部署）

或访问各分支：
- [Level-1 分支](https://github.com/mckenzieaaa/Splicing/tree/Level-1)
- [Level-2 分支](https://github.com/mckenzieaaa/Splicing/tree/Level-2)
- [level-3 分支](https://github.com/mckenzieaaa/Splicing/tree/level-3)

## 📄 许可证

本项目仅用于学习和展示目的。

## 🙏 致谢

- 像素艺术资源来自 CraftPix
- 字体和其他开源资源

---

**最后更新：** 2025年11月13日
