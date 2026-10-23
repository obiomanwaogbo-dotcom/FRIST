# FRIST · 个人学习空间

保持原有深色首屏、荧光绿点缀与可关闭的动效，采用三个独立页面：

- `index.html`：首页与入口。
- `about.html`：个人介绍、标签与学习方向。
- `videos.html`：视频分类、搜索、视频链接或 MP4 播放器。

统一导航支持页面间跳转，并标示当前页面。旧首页 `#about` 和 `#videos` 链接会自动跳到新页面。

## 更新资料和视频

编辑 `site-content.js` 中的 `name`、`title`、`intro`、`bio`、`tags`、`github`、`videos` 即可。

视频分类可用 `编程入门`、`学习方法`、`随手记录`。`type: 'link'` 打开视频平台网页；`type: 'mp4'` 在站内播放可访问的 MP4 视频直链。`cover` 可以留空或使用相对图片路径。文件内附有添加示例。

尚未添加真实视频时，视频馆显示明确标注的栏目预览。添加第一条真实视频后，全部示例自动隐藏。

## 发布

站点托管在 GitHub Pages：https://obiomanwaogbo-dotcom.github.io/FRIST/

仓库采用 Pages 的 main 分支根目录发布，提交后 GitHub 自动部署，无需额外构建。所有资源使用相对路径，支持仓库子路径。

## 本地预览

无需安装依赖。可直接打开 HTML 文件，或在此目录运行 `python -m http.server 4173`，访问 `http://localhost:4173`。

字体从 Google Fonts 加载，不可用时回退系统字体。动效遵循减少动态效果的系统偏好，也可使用页脚开关关闭。
