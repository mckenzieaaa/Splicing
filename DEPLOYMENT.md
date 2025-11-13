# 🚀 GitHub Pages 部署指南

## 部署完成 ✅

所有三个游戏已经部署到 main 分支，可以通过 GitHub Pages 访问。

## 📂 文件结构

```
main/
├── index.html          # 主页
├── README.md           # 项目说明
├── deploy.sh           # 部署脚本
├── level-1/           # Level 1 游戏文件
│   ├── index.html
│   ├── level1.html
│   ├── assets/
│   └── ...
├── level-2/           # Level 2 游戏文件
│   ├── index.html
│   ├── game.js
│   ├── style.css
│   └── ...
└── level-3/           # Level 3 游戏文件
    ├── index.html
    ├── game.js
    ├── styles.css
    └── ...
```

## 🌐 启用 GitHub Pages

1. 访问你的 GitHub 仓库：https://github.com/mckenzieaaa/Splicing

2. 点击 **Settings** (设置)

3. 在左侧菜单找到 **Pages**

4. 在 "Build and deployment" 部分：
   - **Source**: 选择 "Deploy from a branch"
   - **Branch**: 选择 `main` 分支，文件夹选择 `/root`
   - 点击 **Save**

5. 等待几分钟，GitHub 会自动部署

6. 部署完成后，你的游戏将在以下地址可用：
   - 主页: https://mckenzieaaa.github.io/Splicing/
   - Level 1: https://mckenzieaaa.github.io/Splicing/level-1/
   - Level 2: https://mckenzieaaa.github.io/Splicing/level-2/
   - Level 3: https://mckenzieaaa.github.io/Splicing/level-3/

## 🔄 更新游戏

如果你在分支中更新了游戏，运行部署脚本重新部署：

```bash
# 确保在 main 分支
git checkout main

# 运行部署脚本（手动复制文件，因为自动脚本可能需要调整）
# 或者按照之前的步骤手动复制文件

# 提交并推送
git add .
git commit -m "Update games"
git push origin main
```

## ✅ 验证部署

访问以下链接测试游戏：

- Level-1: https://mckenzieaaa.github.io/Splicing/level-1/
- Level-2: https://mckenzieaaa.github.io/Splicing/level-2/
- Level-3: https://mckenzieaaa.github.io/Splicing/level-3/

部署时间：2025年11月13日
