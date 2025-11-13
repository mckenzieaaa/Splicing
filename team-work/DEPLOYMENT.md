# 🚀 如何在 GitHub Pages 上部署游戏

## 📝 部署步骤

### 方法一：通过 GitHub 网站部署（最简单）

1. **确保你的代码已经推送到 GitHub**
   ```bash
   git add .
   git commit -m "Add pixel hero web game"
   git push origin main
   ```

2. **在 GitHub 上启用 Pages**
   - 打开你的仓库页面：https://github.com/WUYuying003/team-work
   - 点击 **Settings** (设置)
   - 在左侧菜单找到 **Pages**
   - 在 **Source** (源) 下拉菜单中选择 **main** 分支
   - 选择 **/ (root)** 文件夹
   - 点击 **Save** (保存)

3. **等待部署完成**
   - GitHub 会自动构建和部署你的网站
   - 通常需要 1-2 分钟
   - 部署完成后，你会看到一个绿色的提示和网址

4. **访问你的游戏**
   - 游戏网址将是：`https://wuyuying003.github.io/team-work/`
   - 点击链接即可打开游戏
   - 分享这个链接给其他人就可以玩了！

### 方法二：通过命令行部署

如果你还没有推送代码到 GitHub：

```bash
# 1. 初始化 git（如果还没有）
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Add pixel hero voice game"

# 4. 添加远程仓库（如果还没有）
git remote add origin https://github.com/WUYuying003/team-work.git

# 5. 推送到 GitHub
git push -u origin main
```

然后按照方法一的步骤 2-4 在 GitHub 网站上启用 Pages。

## 🎮 游戏功能说明

### 网页版本特点：
- ✅ **无需安装**：直接在浏览器中运行
- ✅ **跨平台**：在任何设备上都能玩（电脑、平板、手机）
- ✅ **实时声控**：使用麦克风控制游戏角色
- ✅ **完整功能**：包含所有游戏功能（暂停、重启、计分）
- ✅ **像素风格**：保留原始设计的像素艺术风格

### 使用说明：
1. 打开游戏网页
2. 点击 "🎤 Start Voice Control" 按钮
3. 允许浏览器访问麦克风
4. 使用声音控制：
   - **高音调**（吹口哨、"eee"声音）= 角色向上飞
   - **低音调**（哼声、"ooo"声音）= 角色向下飞
   - **安静** = 保持当前位置
5. 躲避紫色障碍物，获得高分！

## 🔧 浏览器要求

### 推荐浏览器：
- ✅ **Chrome/Edge** (最佳体验)
- ✅ **Firefox**
- ✅ **Safari** (macOS/iOS)
- ⚠️ 需要 HTTPS 或 localhost 才能访问麦克风

### 注意事项：
- 首次访问需要允许麦克风权限
- 确保电脑/设备有可用的麦克风
- 建议在安静的环境中游戏以获得最佳体验

## 🌐 分享游戏

部署完成后，你可以：

1. **分享链接**
   - 直接复制游戏网址发送给朋友
   - 例如：`https://wuyuying003.github.io/team-work/`

2. **嵌入到其他网站**
   ```html
   <iframe src="https://wuyuying003.github.io/team-work/" 
           width="100%" height="800px" frameborder="0">
   </iframe>
   ```

3. **二维码分享**
   - 可以使用在线工具将网址生成二维码
   - 方便在手机上扫码访问

## 📱 移动设备支持

游戏也支持移动设备：
- 自动适应屏幕大小
- 支持触摸控制按钮
- 可以使用手机麦克风控制
- 响应式设计，在小屏幕上也能完美显示

## 🐛 常见问题

### 问题：游戏不显示
**解决方案**：
- 检查是否正确启用了 GitHub Pages
- 等待几分钟让部署完成
- 清除浏览器缓存后刷新页面

### 问题：麦克风不工作
**解决方案**：
- 确保允许了浏览器的麦克风权限
- 检查系统设置中的麦克风权限
- 尝试刷新页面并重新授权

### 问题：声音控制不灵敏
**解决方案**：
- 确保在安静的环境中
- 尝试调整声音音量
- 靠近或远离麦克风找到最佳距离
- 使用更清晰的声音（吹口哨效果最好）

## 🎯 优化建议

为了获得最佳游戏体验：

1. **使用外置麦克风**（如有）
2. **在安静的房间游戏**
3. **使用 Chrome 浏览器**（最佳兼容性）
4. **保持网络连接稳定**
5. **关闭其他占用麦克风的应用**

## 📊 监控和分析

GitHub Pages 提供基本的访问统计：
- 在仓库的 **Insights** → **Traffic** 查看访问量
- 可以看到有多少人访问了你的游戏

## 🔄 更新游戏

如果想更新游戏：

```bash
# 1. 修改 index.html 文件
# 2. 提交更改
git add index.html
git commit -m "Update game"

# 3. 推送到 GitHub
git push origin main
```

GitHub Pages 会自动重新部署，通常 1-2 分钟后更新就会生效。

---

## ✨ 完成！

现在你的游戏已经在线上了！任何人都可以通过链接访问和游玩。

**游戏地址：** `https://wuyuying003.github.io/team-work/`

祝你游戏愉快！🎮✨
