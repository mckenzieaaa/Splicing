# 素材目录 (Assets)

此目录用于存放 Level 1 的像素艺术资源。

## 目录结构

```
assets/
├── player/          # 人物动作精灵图（行走、跳跃、待机等）
├── backgrounds/     # 背景图层（云、山、天空等）
├── scenery/         # 场景物件（建筑、树、长椅、路灯、路牌等）
└── README.md        # 本文件
```

## 素材导入指南

### 人物动作精灵图 (player/)
请将你提供的人物动作图放入 `player/` 子目录，建议命名规范：
- `walk.png` — 行走循环动画（精灵表或单帧序列）
- `idle.png` — 待机动画
- `jump.png` — 跳跃动作
- `run.png` — 奔跑动画
- 或者按动作类型分开的多个文件

### 背景图层 (backgrounds/)
你已将素材放入以下子目录：
- `backgrounds/m1/, m2/, ..., m8/` — 山脉背景图层（来自 craftpix mountain 包）
- `backgrounds/Clouds/Clouds 1/, Clouds 2/, ...` — 云朵图层（来自 craftpix clouds 包）
- `backgrounds/nature_1/, nature_2/, ..., nature_8/` — 各种自然场景物件（树、石头、草等）

游戏会自动扫描这些文件夹并加载可用的 PNG 图片。

### 场景物件 (scenery/)
场景物件（建筑、树木、长椅等）主要来自 `backgrounds/nature_*/` 文件夹。
如需添加自定义物件，也可放入 `scenery/` 目录

## 自动转换为黑白灰

所有彩色素材将在游戏加载时自动转换为黑/深灰/浅灰/白四色调色板，无需手动处理。

## 使用方式

放置好文件后：
1. 启动本地服务器（已在端口 8001 运行）
2. 浏览器访问 `http://localhost:8001/level1.html`
3. 游戏会自动加载并转换素材

如需调整素材路径或命名，请编辑 `level1.html` 中的资源加载部分。
