# Codex
Codex使用

## 座舱架构实践知识库

公开入口：https://qiantao18817568425-art.github.io/Codex/architecture/

24 个中文版章节、17 个原版对照章节、六阶段学习路线、树状目录、全文检索和并排对比。首页保留 Day 1—34 与 16 条周复盘。

构建：安装 Node.js 后执行 npm install，再执行 npm run build 和 npm test。链接核验使用 python scripts/verify-links.py。

正文来自 content/architecture.json，入门导读来自 content/beginner-guides.mjs；content/course-archive.html 保存已核对的 50 条课程。docs 为生成的静态发布目录。更新课程时先更新课程快照再构建，避免使用历史课程源覆盖新内容。

原图与图代码保留；本地来源引用显示名称/页码，不提供原始 PDF 在线下载。
