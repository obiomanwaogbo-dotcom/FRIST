# FRIST · 理工学习站

中文理工学习网站：六门课、24 个起步单元和六个交互实验。使用原生 HTML、CSS、JavaScript，无需安装前端依赖。

## 页面

- index.html：学习站首页，可拖动三维曲面与课程入口。
- courses.html：课程分类与搜索。
- course.html?subject=calc1：学习路线、方法、例题、易错点和自测。subject 还可取 calc2、complex、probability、analog、digital。
- lab.html：交互实验，mode 可取 surface、calculus、complex、probability、analog、digital。
- about.html：独立个人介绍。
- videos.html：保留旧视频链接，视频暂不作为主导航。

## 更新内容

个人资料在 site-content.js，课程在 courses-data.js。learning.js 管理课程交互及浏览器本地阅读进度。experiments.js 绘制实验，lab-math.js 存放可独立验证的数值模型。资料与模型条件见 SOURCES.md。

## 发布和预览

站点：https://obiomanwaogbo-dotcom.github.io/FRIST/

main 分支提交后由 .github/workflows/deploy.yml 部署。文件使用相对链接，兼容仓库子路径。本地可直接打开 HTML，或运行 python -m http.server 4173。

三维图不依赖外部三维库。首屏可见且动效开启时自动旋转；实验区按用户操作重绘。支持手机布局、键盘和减少动态效果偏好。字体不可用时回退系统字体。

这是一版可运行的学习导览与理想模型实验站；未接入任意电路编辑器、SPICE、账号系统、云端进度或视频存储。
