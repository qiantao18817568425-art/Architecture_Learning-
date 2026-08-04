import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import vm from "node:vm";

const root = resolve(import.meta.dirname, "..");
const archivePath = resolve(root, "app/fullArchive.ts");
const outputPath = resolve(root, "docs/index.html");

function loadArchive() {
  const source = readFileSync(archivePath, "utf8");
  const expression = source
    .replace(/^export const fullArchive\s*=\s*/, "")
    .replace(/\s+as const;\s*$/, "");
  return vm.runInNewContext(`(${expression})`);
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noreferrer">$1</a>');
}

function renderTextBlock(block) {
  const lines = block.replace(/\r/g, "").split("\n");
  const html = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length + 1;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(`<li>${inlineMarkdown(lines[index].trim().replace(/^[-*]\s+/, ""))}</li>`);
        index += 1;
      }
      html.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    if (/^\d+[.)]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+[.)]\s+/.test(lines[index].trim())) {
        items.push(`<li>${inlineMarkdown(lines[index].trim().replace(/^\d+[.)]\s+/, ""))}</li>`);
        index += 1;
      }
      html.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    const paragraph = [];
    while (index < lines.length) {
      const current = lines[index].trim();
      if (!current || /^(#{1,6})\s+/.test(current) || /^[-*]\s+/.test(current) || /^\d+[.)]\s+/.test(current)) break;
      paragraph.push(current);
      index += 1;
    }
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
  }

  return html.join("\n");
}

function renderMarkdown(markdown) {
  const parts = markdown.replace(/\r/g, "").split(/```([\w-]*)\n([\s\S]*?)```/g);
  return parts
    .map((part, index) => {
      if (index % 3 === 0) return renderTextBlock(part);
      if (index % 3 === 1) return "";
      const language = parts[index - 1];
      return language === "mermaid"
        ? `<pre class="mermaid">${escapeHtml(part.trim())}</pre>`
        : `<pre><code>${escapeHtml(part.trim())}</code></pre>`;
    })
    .join("\n");
}

function buildLesson(item, index) {
  const content = renderMarkdown(item.content);
  const description = item.isFullText
    ? `已嵌入原始学习正文，约 ${item.charCount.toLocaleString()} 字符。`
    : "原始独立学习正文暂未恢复；下方保留当前可核验的档案说明。";

  return `<details class="lesson"${index < 3 ? " open" : ""}>
  <summary>
    <span class="lesson-title">${escapeHtml(item.title)}</span>
    <span class="lesson-meta">${item.isFullText ? "全文" : "待补全文"}</span>
  </summary>
  <div class="lesson-body">
    <p class="archive-note">${description}</p>
    <article>${content}</article>
  </div>
</details>`;
}

function buildPage(archive) {
  const fullTextCount = archive.filter((item) => item.isFullText).length;
  const lessons = archive.map(buildLesson).join("\n");

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="智能座舱架构师成长计划 V2.0：全部 Day 与 Week 学习档案。">
  <title>智能座舱架构师成长计划 V2.0</title>
  <style>
    :root { color-scheme: light; font-family: "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif; color: #18212f; background: #f6f8fb; }
    * { box-sizing: border-box; }
    body { margin: 0; line-height: 1.75; }
    a { color: #075fbd; overflow-wrap: anywhere; }
    code { background: #edf1f6; border-radius: 3px; padding: .08rem .28rem; }
    pre { overflow: auto; background: #111827; color: #e5e7eb; padding: 1rem; border-radius: 6px; white-space: pre-wrap; }
    main { max-width: 1180px; margin: 0 auto; padding: 28px 20px 60px; }
    header { border-left: 5px solid #db5a2a; padding: 12px 20px; margin-bottom: 28px; background: #fff; }
    h1, h2, h3, h4, h5, h6 { line-height: 1.35; margin: 1.35em 0 .5em; }
    h1 { margin: 0; font-size: 2rem; }
    .lede { max-width: 840px; margin: .5rem 0 0; color: #4b5563; }
    .metrics { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0 26px; }
    .metric { background: #e6eff8; border: 1px solid #bfd5ea; padding: 6px 12px; border-radius: 4px; color: #174a76; }
    .metric strong { font-size: 1.15rem; }
    .guide { background: #fff; border-top: 2px solid #1d8093; padding: 18px 22px; margin: 24px 0; }
    .guide ol { margin-bottom: 0; }
    .lesson { background: #fff; border: 1px solid #d8dee8; margin: 10px 0; }
    summary { cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 15px 18px; }
    summary::-webkit-details-marker { color: #db5a2a; }
    .lesson-title { font-weight: 700; font-size: 1.05rem; }
    .lesson-meta { color: #52606d; font-size: .86rem; white-space: nowrap; }
    .lesson-body { border-top: 1px solid #d8dee8; padding: 4px 22px 24px; }
    .archive-note { color: #52606d; font-size: .92rem; border-left: 3px solid #1d8093; padding-left: 10px; }
    article h2 { font-size: 1.35rem; }
    article h3 { font-size: 1.15rem; }
    article h4, article h5 { font-size: 1rem; }
    .mermaid { background: #fff; color: #18212f; border: 1px solid #d8dee8; }
    footer { margin-top: 32px; color: #52606d; font-size: .9rem; }
    @media (max-width: 640px) { main { padding: 16px 12px 36px; } h1 { font-size: 1.55rem; } summary { align-items: flex-start; } .lesson-body { padding: 2px 14px 18px; } }
  </style>
</head>
<body>
  <main>
    <header>
      <h1>智能座舱架构师成长计划 V2.0</h1>
      <p class="lede">长期学习路线的公开档案。每个 Day / Week 可点击展开，保留学习正文、文章和视频链接，以及可渲染的 Mermaid 架构图。</p>
    </header>
    <section class="metrics" aria-label="档案统计">
      <span class="metric"><strong>${archive.length}</strong> 个 Day / Week 档案</span>
      <span class="metric"><strong>${fullTextCount}</strong> 篇原始全文</span>
      <span class="metric">当前已同步至 Day 17</span>
    </section>
    <section class="guide">
      <h2>GitHub 使用说明</h2>
      <ol>
        <li>Repository 用于保存课程正文、图表、作业与版本记录。</li>
        <li>GitHub Pages 从本仓库 <code>main</code> 分支的 <code>/docs</code> 目录发布本页面。</li>
        <li>后续新增 Day 或 Week 时，重新生成并提交 <code>docs/index.html</code> 即可同步公开档案。</li>
      </ol>
    </section>
    <section aria-label="学习档案">
      <h2>全部 Day 与 Week 内容</h2>
      ${lessons}
    </section>
    <footer>来源：智能座舱架构师成长计划 V2.0 已创建学习任务。未恢复原始独立正文的条目会明确标注，不以摘要冒充全文。</footer>
  </main>
  <script type="module">
    import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
    mermaid.initialize({ startOnLoad: true, theme: "neutral", securityLevel: "strict" });
  </script>
</body>
</html>`;
}

const archive = loadArchive();
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, buildPage(archive), "utf8");
console.log(`Generated ${outputPath} from ${archive.length} archive entries.`);
