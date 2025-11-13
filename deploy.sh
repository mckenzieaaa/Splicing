#!/bin/bash

# 部署脚本 - 将各分支的游戏文件复制到 main 分支的对应文件夹

echo "🚀 开始部署 Splicing 游戏到 GitHub Pages..."

# 保存当前分支
CURRENT_BRANCH=$(git branch --show-current)
echo "📌 当前分支: $CURRENT_BRANCH"

# 确保在 main 分支
git checkout main

# 清理旧文件
echo "🧹 清理旧的部署文件..."
rm -rf level-1/* level-2/* level-3/*

# 部署 Level-1
echo "📦 部署 Level-1..."
git checkout Level-1
cp -r level1.html assets pixel-font.ttf "Spinning Coin.png" smile.png 7.png ../temp-level-1/ 2>/dev/null || true
git checkout main
mv ../temp-level-1/* level-1/ 2>/dev/null || true
rm -rf ../temp-level-1

# 部署 Level-2
echo "📦 部署 Level-2..."
git checkout Level-2
cp -r eeeeee/* ../temp-level-2/ 2>/dev/null || true
git checkout main
mv ../temp-level-2/* level-2/ 2>/dev/null || true
rm -rf ../temp-level-2

# 部署 Level-3
echo "📦 部署 Level-3..."
git checkout level-3
cp -r team-work/web_game/* ../temp-level-3/ 2>/dev/null || true
git checkout main
mv ../temp-level-3/* level-3/ 2>/dev/null || true
rm -rf ../temp-level-3

# 回到原始分支
git checkout $CURRENT_BRANCH

echo "✅ 部署完成！"
echo "📝 现在请执行以下命令提交并推送："
echo "   git add ."
echo "   git commit -m 'Deploy games to GitHub Pages'"
echo "   git push origin main"
