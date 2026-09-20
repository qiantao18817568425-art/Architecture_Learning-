# Codex
Codex使用

## 座舱架构实践知识库

本仓库已于 2026-09-21 转为私有。GitHub Pages 已停止公开提供内容；原站点链接返回 404。这里保存供已授权仓库成员使用的完整资料，不能通过重新开启公开 Pages 的方式提供阅读入口。

本地阅读：安装 Python 后，在仓库根目录执行 `python -m http.server 8766 --bind 127.0.0.1 --directory docs`，然后打开 `http://127.0.0.1:8766/architecture/`。服务仅监听本机；请保留 `--bind 127.0.0.1`。Windows 可运行 `scripts/Start-PrivatePreview.ps1`。

25 个中文版章节、17 个原版对照章节、六阶段学习路线、树状目录、全文检索和并排对比。首页保留 Day 1—34 与 16 条周复盘。

构建：安装 Node.js 后执行 npm install，再执行 npm run build 和 npm test。链接核验使用 python scripts/verify-links.py。

正文来自 content/architecture.json，入门导读来自 content/beginner-guides.mjs；content/course-archive.html 保存已核对的 50 条课程。docs 为生成的静态发布目录。更新课程时先更新课程快照再构建，避免使用历史课程源覆盖新内容。

架构章节 489 处图表由 248 份不同 Mermaid 源码生成，8 类图片图表已按源图重绘，原图片保留对照。Android 分层与整机部署图提供总览、分区及完整图，支持大屏阅读和清晰字号。370 个去重来源提供逐页文字、原件或明确的覆盖状态；841 处引用指向站内材料页。downloads 提供可导入 ChatGPT 项目的文字与 Mermaid 资料包。空文件、旧版 DOC 和损坏图片不假称已完整提取。

正文、原始材料、搜索索引、Mermaid 源码及下载包均按私有资料管理。请勿发布到公开仓库、公开 Pages、公开构建产物或无鉴权的文件直链。后续线上阅读需另行配置真正的访问鉴权；隐藏菜单、robots.txt 或前端密码框不构成访问限制。

新增来源数据位于 content/sources，图片重绘源码位于 content/diagrams。构建后以 scripts/verify-links.py 检查本地链接。Mermaid 10.9.5 已固定并随站点分发，其许可位于 docs/architecture/vendor/mermaid-LICENSE.txt。
