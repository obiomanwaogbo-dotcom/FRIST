# FRIST · 个人学习空间

个人数字展厅风格的中文主页：深色首屏、荧光绿点缀、CSS 三维轨道、鼠标倾斜、滚动渐入和阅读进度条。带视频分类、搜索、视频弹窗、动效开关与手机布局，无需安装前端依赖。

## 当前状态

这是可运行的初稿。姓名和介绍尚未个性化，三条视频卡片明确标为栏目排版示例，尚未上传真实视频。GitHub 已连接。完成 Pages 设置和部署后才算上线。

## 修改内容

编辑 `site-content.js`：

- `name` / `title`：网站名称与浏览器标题。
- `intro` / `bio` / `tags`：首页介绍、个人简介与标签。
- `github`：你的 GitHub 主页完整链接。
- `videos`：视频列表。添加第一条真实视频后会自动隐藏全部示例。

```js
videos: [
  {
    title: '我的第一个学习视频',
    category: '编程入门',
    description: '用一个简单例子理解这个知识点。',
    duration: '08:30',
    date: '2026-10-23',
    type: 'link',
    url: 'https://www.bilibili.com/video/实际视频编号/',
    cover: ''
  }
]
```

分类为 `编程入门`、`学习方法`、`随手记录`。普通视频平台链接用 `type: 'link'`；自己的可访问 MP4 直链用 `type: 'mp4'`，会出现站内播放器。不要填视频平台网页地址作为 MP4 直链。封面可以留空，也可以填 `assets/cover.jpg` 等路径或 HTTPS 图片地址。

不需要在网页上添加上传按钮；视频发布在视频平台后，将其链接加入列表并提交到 GitHub 即可更新。建议较长视频使用视频平台，避免占满仓库与站点流量。

## GitHub Pages 上线

1. 使用已有仓库，或新建一个存放站点的仓库。不要覆盖已有个人主页。
2. 将此目录里的文件（包括 `.github` 文件夹、`.nojekyll`）放到仓库根目录。
3. 仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
4. 推送到 main 或 master，或在 Actions 手动运行 Deploy personal site to GitHub Pages。
5. 等待工作流完成，在部署结果中打开 GitHub 返回的网址。

仓库如命名为 `用户名.github.io`，且没有其他同名主页，网址通常是 `https://用户名.github.io/`；其他仓库通常是 `https://用户名.github.io/仓库名/`。以实际部署结果为准。文件使用相对路径，兼容两种路径。

## 本地预览

可直接打开 index.html，或使用任意静态文件服务器。在这个目录执行 `python -m http.server 4173` 后访问 `http://localhost:4173`。

字体使用 Google Fonts，可用系统中文字体自动回退。页面无数据收集、无账号系统、无付费服务依赖。

## 验证记录

- JavaScript 语法检查通过，本地 HTTP 访问返回 200。
- 在浏览器实际验证分类后剩余一条卡片、无搜索结果提示、重置筛选、打开并关闭示例弹窗、关闭动效成功。
- 桌面首屏已截图自查；浏览器的窄屏覆盖设置未生效，手机样式已实现，但完整手机视觉验收待补。
- 尚无真实视频，真实 MP4 的网络加载与播放需填入实际链接后再验收。
- GitHub 已连接，目标为空的私有仓库 `obiomanwaogbo-dotcom/FRIST`。上线以 Pages 的实际部署结果为准。
