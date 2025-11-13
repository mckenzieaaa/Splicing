# 🚀 快速开始指南

## 📝 三步部署你的游戏到网上

### 第一步：推送代码到 GitHub

在终端运行：

```bash
cd "/Users/apple/Desktop/必修课3 周四/小组合作/team-work"
./deploy.sh
```

或者手动执行：

```bash
git add .
git commit -m "Add pixel hero web game"
git push origin main
```

### 第二步：在 GitHub 上启用 Pages

1. 打开浏览器，访问：https://github.com/WUYuying003/team-work
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 下拉菜单中选择 **main** 分支
5. 选择 **/ (root)** 文件夹
6. 点击 **Save**（保存）

### 第三步：等待并访问

1. 等待 1-2 分钟让 GitHub 部署你的网站
2. 访问你的游戏：**https://wuyuying003.github.io/team-work/**
3. 点击 "Start Voice Control" 开始游戏！

---

## 🎮 本地测试（可选）

如果想在本地浏览器测试：

```bash
# 方法1：使用 Python 启动简单服务器
cd "/Users/apple/Desktop/必修课3 周四/小组合作/team-work"
python3 -m http.server 8000

# 然后在浏览器打开：http://localhost:8000
```

或者直接双击 `index.html` 文件在浏览器中打开（但麦克风功能可能受限）。

---

## 📱 分享给朋友

部署完成后，直接把这个链接发给朋友就能玩：

```
https://wuyuying003.github.io/team-work/
```

---

## 🐛 遇到问题？

### 问题：推送失败
```bash
# 如果还没有设置远程仓库
git remote add origin https://github.com/WUYuying003/team-work.git

# 如果是第一次推送
git push -u origin main
```

### 问题：GitHub Pages 没有显示
- 确保在 Settings → Pages 中正确设置了 Source
- 等待几分钟
- 检查仓库是否是公开的（Public）

### 问题：游戏不工作
- 确保允许浏览器访问麦克风
- 使用 Chrome 或 Edge 浏览器（最佳兼容性）
- 检查浏览器控制台是否有错误信息（按 F12）

---

## ✨ 完成！

现在你的游戏已经在线上了！🎉

**游戏链接：** https://wuyuying003.github.io/team-work/

赶快分享给你的朋友一起玩吧！🎮
