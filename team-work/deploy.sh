#!/bin/bash

# 🚀 快速部署脚本 - Deploy to GitHub Pages

echo "🎮 Pixel Hero Game - 部署到 GitHub Pages"
echo "=========================================="
echo ""

# 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo "📝 发现未提交的更改，正在添加文件..."
    git add .
    
    echo "💬 请输入提交信息（直接回车使用默认信息）:"
    read commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="Update pixel hero game"
    fi
    
    git commit -m "$commit_message"
    echo "✅ 文件已提交"
else
    echo "✅ 没有新的更改需要提交"
fi

echo ""
echo "🚀 正在推送到 GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✨ 部署成功！"
    echo ""
    echo "🌐 你的游戏将在 1-2 分钟后在以下地址可用："
    echo "   https://wuyuying003.github.io/team-work/"
    echo ""
    echo "📝 下一步操作："
    echo "   1. 访问 https://github.com/WUYuying003/team-work"
    echo "   2. 进入 Settings → Pages"
    echo "   3. 确保 Source 设置为 'main' 分支"
    echo "   4. 等待部署完成（查看绿色的部署链接）"
    echo ""
else
    echo ""
    echo "❌ 推送失败，请检查："
    echo "   - 是否已经设置了远程仓库"
    echo "   - 是否有推送权限"
    echo "   - 网络连接是否正常"
    echo ""
fi
