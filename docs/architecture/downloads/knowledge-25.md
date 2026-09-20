# SRC0356 MT8668_Camera架构与DDR计算_最终可追溯版.html

来源：Camera架构/MT8668_Camera架构与DDR计算_最终可追溯版.html

SHA-256：b7e058ab2066bf84a857293dbb4709b9f451d64331fb970b4b82344f1c989057

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0356.html)

## 全文 1

<!doctype html>
<html lang="en" data-data-analytics-portable-artifact="true">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light dark" />
<meta http-equiv="Content-Security-Policy" content="default-src &#39;none&#39;; img-src data: blob:; font-src data:; style-src &#39;unsafe-inline&#39;; script-src &#39;unsafe-inline&#39; blob:; connect-src &#39;none&#39;; media-src data: blob:; worker-src blob:; frame-src &#39;self&#39; data: blob:; object-src &#39;none&#39;; base-uri &#39;none&#39;; form-action &#39;none&#39;" />
<meta name="referrer" content="no-referrer" />
<title>MT8668 Camera架构与DDR计算：最终可追溯版</title>
<style data-data-analytics-portable-fallback="true">
:root{color-scheme:light dark;--portable-canvas:#fff;--portable-surface:#fff;--portable-surface-subtle:#f7f7f7;--portable-ink:#0d0d0d;--portable-muted:#5d5d5d;--portable-tertiary:#8f8f8f;--portable-table-text:#5d5d5d;--portable-border:rgba(13,13,13,.1);--portable-accent:#0285ff;--portable-positive:#00692a;--portable-positive-bg:#edfaf2;--portable-negative:#ba2623;--portable-negative-bg:#fff0f0;--portable-warning-bg:#fff8e6;--portable-warning-border:#e7b84b;--portable-radius:16px;--portable-safe-area-top:env(safe-area-inset-top,0px);--portable-safe-area-right:env(safe-area-inset-right,0px);--portable-safe-area-bottom:env(safe-area-inset-bottom,0px);--portable-safe-area-left:env(safe-area-inset-left,0px);font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--portable-canvas);color:var(--portable-ink)}
@media(prefers-color-scheme:dark){:root{--portable-canvas:#181818;--portable-surface:#212121;--portable-surface-subtle:#2a2a2a;--portable-ink:#dfdfdf;--portable-muted:#cdcdcd;--portable-tertiary:#afafaf;--portable-table-text:#cdcdcd;--portable-border:rgba(255,255,255,.12);--portable-accent:#66b5ff;--portable-positive:#79d996;--portable-positive-bg:rgba(64,180,99,.16);--portable-negative:#ff8583;--portable-negative-bg:rgba(224,74,70,.16);--portable-warning-bg:#302817;--portable-warning-border:#8b6a20}.portable-static-chart-light{display:none!important}.portable-static-chart-dark{display:block!important}}
*{box-sizing:border-box}html,body{margin:0;min-height:100%;background:var(--portable-canvas);color:var(--portable-ink)}body{position:relative;font-size:14px;line-height:1.5}a{color:var(--portable-accent)}code,pre{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}pre{max-width:100%;overflow:auto;padding:12px;border:1px solid var(--portable-border);border-radius:8px;background:var(--portable-surface-subtle);font-size:12px}.portable-fallback{width:min(1120px,100%);margin:0 auto;padding:28px 24px 56px}.portable-page-header{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;padding-bottom:24px;border-bottom:1px solid var(--portable-border)}.portable-page-header h1{margin:2px 0 6px;font-size:26px;line-height:1.2;font-weight:600;letter-spacing:-.02em}.portable-description{max-width:720px;margin:0;color:var(--portable-muted)}.portable-page-meta{display:flex;align-items:flex-end;flex-direction:column;gap:6px;color:var(--portable-muted);font-size:12px}.portable-status{padding:2px 8px;border:1px solid var(--portable-border);border-radius:999px;text-transform:capitalize}.portable-block-stack{display:grid;gap:20px;margin-top:24px}.portable-markdown{max-width:820px}.portable-markdown>:first-child{margin-top:0}.portable-markdown>:last-child{margin-bottom:0}.portable-markdown h1,.portable-markdown h2,.portable-markdown h3{line-height:1.25;font-weight:600}.portable-markdown h2{font-size:20px}.portable-markdown h3{font-size:16px}.portable-markdown blockquote{margin:12px 0;padding-left:14px;border-left:3px solid var(--portable-border);color:var(--portable-muted)}.portable-markdown li+li{margin-top:4px}.portable-content-card,.portable-metric-card{border:1px solid var(--portable-border);border-radius:var(--portable-radius);background:var(--portable-surface)}.portable-content-card{padding:18px}.portable-content-card h2{margin:0;font-size:16px}.portable-content-card header>p{margin:4px 0 16px;color:var(--portable-muted)}.portable-metric-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}.portable-metric-card{padding:16px}.portable-metric-value{margin:4px 0 0;font-size:28px;line-height:1.1;font-weight:600;letter-spacing:-.02em}.portable-card-description{margin:8px 0 0;color:var(--portable-muted);font-size:12px}.portable-metric-badges{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.portable-metric-badge{padding:3px 7px;border-radius:999px;background:var(--portable-surface-subtle);font-size:11px}.portable-chart-summary{margin:0}.portable-chart-summary figcaption{display:flex;flex-direction:column;margin-bottom:14px}.portable-chart-summary figcaption span{color:var(--portable-muted);font-size:12px}.portable-static-chart{width:100%;margin:0 auto 12px;overflow:hidden;border-radius:8px;background:var(--portable-surface)}.portable-static-chart-variant>svg{display:block;width:100%;height:auto;overflow:visible;pointer-events:none}.portable-static-chart-dark{display:none}.portable-static-chart-legend-wrap{margin:8px 12px 2px;color:var(--portable-muted);font-size:12px}.portable-static-chart-legend-title{margin:0 0 5px;text-align:center;font-weight:600}.portable-static-chart-legend{display:flex;flex-wrap:wrap;justify-content:center;gap:6px 16px;margin:0;padding:0;color:var(--portable-muted);font-size:12px;list-style:none}.portable-static-chart-legend li{display:inline-flex;align-items:center;gap:6px}.portable-static-chart-legend-marker{display:inline-block;flex:0 0 auto}.portable-static-chart-legend-marker-dot{width:9px;height:9px;border-radius:999px;background:var(--portable-legend-color)}.portable-static-chart-legend-marker-line{width:18px;height:0;border-top:2px solid var(--portable-legend-color)}.portable-static-chart-legend-marker-dashed{border-top-style:dashed}.portable-chart-data{margin-top:10px}.portable-chart-data>summary{width:max-content;cursor:pointer;color:var(--portable-accent);font-size:12px;font-weight:500}.portable-chart-data[open]>summary{margin-bottom:8px}.portable-table-scroll{max-width:100%;overflow:auto;border:1px solid var(--portable-border);border-radius:8px}table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}caption{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}th,td{padding:9px 11px;border-bottom:1px solid var(--portable-border);text-align:left;white-space:nowrap}th{position:sticky;top:0;background:var(--portable-surface-subtle);color:var(--portable-muted);font-size:11px;font-weight:600;text-transform:uppercase}tbody tr:last-child td{border-bottom:0}.portable-empty-cell{text-align:center;color:var(--portable-muted)}.portable-table-note{margin:8px 0 0;color:var(--portable-muted);font-size:11px}.portable-notice{margin-top:20px;padding:14px 16px;border:1px solid var(--portable-warning-border);border-radius:10px;background:var(--portable-warning-bg)}.portable-notice h2{margin:0 0 6px;font-size:14px}.portable-notice ul{margin:0;padding-left:20px}.portable-custom-html{padding:0;overflow:hidden}.portable-custom-html iframe{display:block;width:100%;min-height:240px;border:0;background:var(--portable-surface)}.portable-sources{margin-top:32px;padding-top:22px;border-top:1px solid var(--portable-border)}.portable-sources h2{font-size:16px}.portable-sources ol{display:grid;gap:10px;padding-left:22px}.portable-sources li>strong{display:block}.portable-source-meta{display:block;color:var(--portable-muted);font-size:11px}.portable-sources p{margin:2px 0;color:var(--portable-muted)}.portable-sources details{margin-top:5px}.portable-sources summary{cursor:pointer;color:var(--portable-accent)}#data-analytics-portable-reader[aria-hidden="true"]{position:absolute;inset:0;visibility:hidden;width:100%;pointer-events:none}
.portable-eyebrow{margin:0;color:var(--portable-muted);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
.portable-block,.portable-content-card,.portable-inline-source,.portable-inline-source-content,.portable-source-query,.portable-sources,.portable-sources ol,.portable-sources li{min-width:0}
@media screen{.portable-fallback.portable-enhanced-hidden,.portable-sources,.portable-source-summary{display:none!important}}
:root{--portable-border:rgba(13,13,13,.05)}
@media(prefers-color-scheme:dark){:root{--portable-border:rgba(255,255,255,.04);--portable-positive:#04b84c;--portable-positive-bg:rgba(4,184,76,.15);--portable-negative:#fa423e;--portable-negative-bg:rgba(250,66,62,.16)}}
.portable-fallback{width:100%;margin:0;padding:0 32px 56px}.portable-page-header{position:sticky;top:0;z-index:60;display:flex;align-items:center;justify-content:space-between;width:100vw;height:48px;min-height:48px;margin-right:calc(50% - 50vw);margin-left:calc(50% - 50vw);padding:8px 12px;border-bottom:1px solid var(--portable-border);background:var(--portable-canvas)}.portable-page-heading{min-width:0}.portable-page-header h1{margin:0;overflow:hidden;font-size:14px;font-weight:500;line-height:22px;letter-spacing:0;text-overflow:ellipsis;white-space:nowrap}.portable-page-meta{display:flex;align-items:center;flex-direction:row;gap:8px;color:var(--portable-tertiary);font-size:14px;font-weight:500;line-height:22px}.portable-description,.portable-surface-label{margin:0}.portable-fallback[data-portable-surface="report"]>.portable-block-stack,.portable-fallback[data-portable-surface="report"]>.portable-filter-bar,.portable-fallback[data-portable-surface="report"]>.portable-notice{width:100%;max-width:768px;margin-right:auto;margin-left:auto}.portable-block-stack{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px;margin-top:32px}.portable-layout-full{grid-column:1/-1}.portable-filter-bar{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}.portable-filter-chip{display:inline-flex;align-items:center;gap:8px;min-height:32px;padding:4px 12px;border:1px solid var(--portable-border);border-radius:999px;background:var(--portable-surface);color:var(--portable-muted);font-size:14px;line-height:20px}.portable-filter-chip strong{color:var(--portable-ink);font-weight:600}.portable-content-card{overflow:visible;padding:0;border:0;border-radius:0;background:transparent}.portable-metric-grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,216px),1fr));gap:8px;align-items:start}.portable-metric-card{position:relative;overflow:visible;padding:20px;border-radius:16px}.portable-metric-label{margin:0;color:var(--portable-muted);font-size:14px;font-weight:400;line-height:20px;overflow-wrap:anywhere}.portable-metric-value{margin:4px 0 0;font-size:20px;font-weight:500;line-height:26px;letter-spacing:0;overflow-wrap:anywhere}.portable-metric-badges{gap:8px;margin-top:8px}.portable-metric-badge{display:inline-flex;flex-wrap:wrap;gap:4px;align-items:center;padding:2px 8px;border:1px solid var(--portable-border);border-radius:999px;background:var(--portable-surface-subtle);color:var(--portable-muted);font-size:12px;font-weight:500;line-height:18px}.portable-metric-badge strong{color:var(--portable-ink);font-weight:500}.portable-metric-badge.portable-positive{border-color:transparent;background:var(--portable-positive-bg);color:var(--portable-positive)}.portable-metric-badge.portable-positive *{color:inherit}.portable-metric-badge.portable-negative{border-color:transparent;background:var(--portable-negative-bg);color:var(--portable-negative)}.portable-metric-badge.portable-negative *{color:inherit}.portable-visual-header{display:block;margin:0 0 16px}.portable-visual-header>strong,.portable-visual-header h1,.portable-visual-header h2,.portable-visual-header h3{display:block;margin:0;color:var(--portable-ink);font-size:16px;font-weight:500;line-height:24px;letter-spacing:0}.portable-visual-header>span,.portable-visual-header>p,.portable-visual-header p,.portable-visual-header li{margin:0;color:var(--portable-ink);font-size:14px;font-weight:400;line-height:20px}.portable-chart-summary figcaption{display:block;margin-bottom:16px}.portable-static-chart{margin:0 auto;overflow:visible;border-radius:0;background:transparent}.portable-chart-data-has-vector{display:none}.portable-table-scroll{overflow:auto;border:0;border-radius:0}.portable-table-scroll table{width:max-content;min-width:0;table-layout:auto}.portable-table-scroll th,.portable-table-scroll td{max-width:none;overflow:hidden;border-bottom:1px solid var(--portable-border);text-overflow:ellipsis;vertical-align:top}.portable-table-scroll th{position:relative;padding:0 16px 6px 0;background:transparent;color:var(--portable-tertiary);font-size:12px;font-weight:600;line-height:18px;letter-spacing:0;text-transform:none;white-space:normal}.portable-table-scroll td{padding:8px 16px 8px 0;color:var(--portable-table-text);font-size:14px;line-height:22px;white-space:normal}.portable-table-scroll th:last-child,.portable-table-scroll td:last-child{padding-right:0}.portable-table-scroll tbody tr:last-child td{border-bottom:1px solid var(--portable-border)}.portable-table-scroll td:first-child{color:var(--portable-ink)}.portable-table-number{font-variant-numeric:tabular-nums;text-align:right}.portable-table-center{text-align:center}.portable-table-positive{color:var(--portable-positive)!important}.portable-table-negative{color:var(--portable-negative)!important}.portable-table-note{margin:12px 0 0;color:var(--portable-tertiary);font-size:12px;line-height:18px}.portable-card-description{margin:0}
.portable-chart-summary .portable-visual-header>span,.portable-content-card .portable-visual-header>p{margin:0;color:var(--portable-ink);font-size:14px;font-weight:400;line-height:20px}.portable-markdown h1,.portable-markdown h2,.portable-markdown h3{font-weight:500}.portable-table-scroll th{height:30px;padding-top:6px;padding-bottom:6px}.portable-table-scroll tbody tr:last-child td{border-bottom:0}
@media screen{.portable-description,.portable-surface-label,.portable-card-description{display:none}.portable-table-source-region{width:fit-content;max-width:100%}.portable-table-source-cell{overflow:visible!important}.portable-chart-data-has-vector{position:absolute!important;display:block!important;width:1px!important;height:1px!important;margin:-1px!important;padding:0!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;clip-path:inset(50%)!important;white-space:nowrap!important;border:0!important}}
@media screen and (max-width:760px){.portable-fallback{padding:0 24px 40px}.portable-page-header{position:static;z-index:auto;display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;width:100%;height:auto;min-height:0;margin:0;padding:24px 0 0;border-bottom:0;background:transparent;gap:4px}.portable-page-heading{width:100%}.portable-page-meta{order:-1;display:flex;align-items:center;flex-flow:row wrap;gap:6px;color:var(--portable-tertiary);font-size:11px;font-weight:600;line-height:16px;letter-spacing:.08em;text-transform:uppercase}.portable-page-meta:empty{display:none}.portable-page-meta .portable-status{display:none}.portable-page-header h1{margin:0;overflow:visible;font-size:24px;font-weight:600;line-height:30px;letter-spacing:-.02em;text-overflow:clip;white-space:normal}.portable-block-stack{grid-template-columns:minmax(0,1fr);gap:24px;margin-top:24px}.portable-layout-half,.portable-layout-full{grid-column:1}.portable-static-chart-variant{min-width:0}}
[data-portable-source-host]{position:relative}[data-portable-source-host]:hover,[data-portable-source-host]:focus,.portable-source-tooltip:hover,.portable-source-tooltip:focus{z-index:2}[data-portable-source-host]:focus,.portable-source-tooltip:focus{outline:0}[data-portable-source-host]:focus-visible,.portable-source-tooltip:focus-visible{outline:2px solid var(--portable-accent);outline-offset:2px}.portable-source-tooltip{position:relative;display:inline-block;padding:0;border:0;appearance:none;background:none;color:inherit;font:inherit;line-height:inherit;cursor:help;text-decoration:underline dotted;text-underline-offset:.18em;touch-action:manipulation}.portable-source-tooltip:focus-visible{border-radius:3px}.portable-inline-source{position:absolute;z-index:1000;inset:0;display:block;width:100%;height:100%;margin:0;padding:0;border:0;text-align:left;pointer-events:none}.portable-source-tooltip-content{position:fixed;z-index:1000;top:var(--portable-source-tooltip-top,8px);right:auto;bottom:auto;left:var(--portable-source-tooltip-left,8px);display:none;width:max-content;max-width:min(360px,calc(100vw - 16px));padding:8px 10px;overflow:visible;border-radius:8px;background:#171411;color:#fff;font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:1.4;overflow-wrap:anywhere;white-space:normal;text-align:left;text-decoration:none;box-shadow:0 8px 24px rgba(23,20,17,.2);transform:none;opacity:0;visibility:hidden;pointer-events:none}.portable-source-tooltip-content,.portable-source-tooltip-content *{color:#fff!important;font-style:normal!important;text-decoration:none!important}.portable-source-tooltip-heading{display:none}.portable-source-context{display:block;margin-bottom:6px}.portable-source-tooltip-content>strong,.portable-source-tooltip-content>.portable-source-meta{display:block}.portable-source-tooltip-content>.portable-source-meta{color:#fff;font-size:12px}.portable-source-description-data,.portable-source-query-data{display:none!important}html:not([data-portable-source-tooltips-ready]) .portable-source-tooltip-content{position:absolute;top:auto;right:auto;bottom:calc(100% + 8px);left:50%;max-width:min(360px,80vw);transform:translateX(-50%)}.portable-source-tooltip:hover>.portable-source-tooltip-content,.portable-source-tooltip:focus>.portable-source-tooltip-content,.portable-source-tooltip:focus-within>.portable-source-tooltip-content,[data-portable-source-host]:hover>.portable-inline-source>.portable-source-tooltip-content,[data-portable-source-host]:focus>.portable-inline-source>.portable-source-tooltip-content,[data-portable-source-host]:focus-within>.portable-inline-source>.portable-source-tooltip-content{display:block;opacity:1;visibility:visible}
html:not([data-portable-source-tooltips-ready]) .portable-chart-summary>.portable-inline-source{position:sticky;inset:auto;top:56px;width:100%;height:0;margin:0}html:not([data-portable-source-tooltips-ready]) .portable-chart-summary>.portable-inline-source>.portable-source-tooltip-content{position:absolute;top:8px;right:0;bottom:auto;left:0;margin-inline:auto;max-width:min(360px,calc(100vw - 32px));transform:none}
@media screen and (min-width:601px){html:not([data-portable-source-tooltips-ready]) .portable-table-scroll:has(.portable-source-tooltip:hover),html:not([data-portable-source-tooltips-ready]) .portable-table-scroll:has(.portable-source-tooltip:focus){overflow:visible}}
@media screen and (hover:hover) and (pointer:fine){.portable-source-tooltip:focus:not(:focus-visible):not(:hover)>.portable-source-tooltip-content,[data-portable-source-host]:focus:not(:focus-visible):not(:hover)>.portable-inline-source>.portable-source-tooltip-content{display:none;opacity:0;visibility:hidden}.portable-source-tooltip:focus-visible>.portable-source-tooltip-content,[data-portable-source-host]:focus-visible>.portable-inline-source>.portable-source-tooltip-content{display:block;opacity:1;visibility:visible}}
@media(min-width:601px){.portable-source-tooltip-heading{display:none}}
.portable-source-tooltip-content[data-portable-source-tooltip-mobile-portaled]{position:fixed;z-index:1000;top:auto;right:calc(16px + var(--portable-safe-area-right));bottom:calc(16px + var(--portable-safe-area-bottom));left:calc(16px + var(--portable-safe-area-left));display:block;width:auto;max-width:none;max-height:min(40vh,280px);max-height:min(40dvh,280px,calc(100dvh - var(--portable-safe-area-top) - var(--portable-safe-area-bottom) - 32px));padding:14px 16px;overflow-y:auto;border-radius:14px;font-size:14px;line-height:1.45;transform:none;opacity:1;visibility:visible;pointer-events:auto}.portable-source-tooltip-content[data-portable-source-tooltip-mobile-portaled][data-portable-source-tooltip-mobile-positioned]{top:var(--portable-source-tooltip-mobile-top);right:auto;bottom:auto;left:var(--portable-source-tooltip-mobile-left);width:var(--portable-source-tooltip-mobile-width);max-height:var(--portable-source-tooltip-mobile-max-height)}
@media screen and (max-width:600px){html:not([data-portable-source-tooltips-ready]) .portable-table-scroll:focus-within{overflow:visible}html:not([data-portable-source-tooltips-ready]) td.portable-table-source-cell:focus-within{overflow:visible!important}.portable-source-tooltip:hover>.portable-source-tooltip-content,.portable-source-tooltip:focus>.portable-source-tooltip-content,.portable-source-tooltip:focus-within>.portable-source-tooltip-content,[data-portable-source-host]:hover>.portable-inline-source>.portable-source-tooltip-content,[data-portable-source-host]:focus>.portable-inline-source>.portable-source-tooltip-content,[data-portable-source-host]:focus-within>.portable-inline-source>.portable-source-tooltip-content{display:none;opacity:0;visibility:hidden}.portable-source-tooltip[data-portable-source-tooltip-open]>.portable-source-tooltip-content,[data-portable-source-host][data-portable-source-tooltip-open]>.portable-inline-source>.portable-source-tooltip-content,html:not([data-portable-source-tooltips-ready]) .portable-source-tooltip:focus>.portable-source-tooltip-content,html:not([data-portable-source-tooltips-ready]) [data-portable-source-host]:focus>.portable-inline-source>.portable-source-tooltip-content{position:fixed;z-index:1000;top:auto;right:calc(16px + var(--portable-safe-area-right));bottom:calc(16px + var(--portable-safe-area-bottom));left:calc(16px + var(--portable-safe-area-left));display:block;width:auto;max-width:none;max-height:min(40vh,280px);max-height:min(40dvh,280px,calc(100dvh - var(--portable-safe-area-top) - var(--portable-safe-area-bottom) - 32px));padding:14px 16px;overflow-y:auto;border-radius:14px;font-size:14px;line-height:1.45;transform:none;opacity:1;visibility:visible;pointer-events:auto}.portable-source-tooltip[data-portable-source-tooltip-mobile-positioned]>.portable-source-tooltip-content,[data-portable-source-host][data-portable-source-tooltip-mobile-positioned]>.portable-inline-source>.portable-source-tooltip-content{top:var(--portable-source-tooltip-mobile-top);right:auto;bottom:auto;left:var(--portable-source-tooltip-mobile-left);width:var(--portable-source-tooltip-mobile-width);max-height:var(--portable-source-tooltip-mobile-max-height)}.portable-source-tooltip-heading{display:block;margin-bottom:6px;font-weight:600}}
@media print{#data-analytics-portable-reader{display:none!important}.portable-fallback{display:block!important;width:100%;padding:0}.portable-sources{display:none!important}.portable-static-chart{overflow:visible}.portable-static-chart-variant{min-width:0}.portable-static-chart-light{display:block!important}.portable-static-chart-dark{display:none!important}.portable-content-card,.portable-metric-card{break-inside:avoid}.portable-custom-html iframe{min-height:320px}}
@media print{:root{color-scheme:light;--portable-canvas:#fff;--portable-surface:#fff;--portable-surface-subtle:#f7f7f7;--portable-ink:#0d0d0d;--portable-muted:#5d5d5d;--portable-tertiary:#8f8f8f;--portable-table-text:#5d5d5d;--portable-border:rgba(13,13,13,.1);--portable-positive:#00692a;--portable-negative:#ba2623}html,body{background:#fff!important;color:#0d0d0d!important}.portable-page-header{position:static;width:auto;height:auto;min-height:0;margin:0 0 24px;padding:0 0 16px;align-items:flex-start}.portable-page-header h1{margin:2px 0 6px;font-size:24px;line-height:1.2;white-space:normal}.portable-surface-label,.portable-description,.portable-card-description{display:block}.portable-page-meta{font-size:12px}.portable-block-stack{display:grid;grid-template-columns:minmax(0,1fr);gap:20px;margin-top:24px}.portable-layout-half,.portable-layout-full{grid-column:1}.portable-filter-bar{margin-top:0}}
@media print{.portable-source-tooltip{cursor:inherit;text-decoration:none}.portable-source-tooltip>.portable-source-tooltip-content,.portable-source-tooltip-content[data-portable-source-tooltip-mobile-portaled]{display:none!important}.portable-inline-source{position:static!important;inset:auto!important;display:block!important;width:auto!important;height:auto!important;margin-top:8px!important;padding-top:6px!important;text-align:left!important}.portable-source-tooltip-content,.portable-source-summary-content{position:static!important;inset:auto!important;display:block!important;width:auto!important;max-width:none!important;max-height:none!important;padding:0!important;overflow:visible!important;background:transparent!important;box-shadow:none!important;transform:none!important;opacity:1!important;visibility:visible!important;pointer-events:none!important}.portable-source-tooltip-content,.portable-source-tooltip-content *,.portable-source-summary-content,.portable-source-summary-content *{color:var(--portable-muted)!important}.portable-source-tooltip-heading,.portable-source-context{display:none!important}}
@media print{:root{--portable-border:rgba(13,13,13,.05)}}
</style>
</head>
<body>
<main id="data-analytics-portable-fallback" class="portable-fallback" data-portable-fallback="true" data-portable-surface="report"><header class="portable-page-header"><div class="portable-page-heading"><p class="portable-surface-label">Data Analytics report</p><h1>MT8668 Camera架构与DDR计算：最终可追溯版</h1><p class="portable-description">3840×1536双Composite最终基线；合并Camera DDR历史讨论，提供公式、场景、算力口径与决策追溯。</p></div><div class="portable-page-meta"><time datetime="2026-09-04T12:00:00+08:00">Sep 4, 2026, 4:00 AM UTC</time></div></header><div class="portable-block-stack">
<div class="portable-block portable-layout-full" data-artifact-block-id="baseline" data-artifact-block-type="markdown" data-layout="full"><section class="portable-markdown"><h2>最终Camera架构基线</h2>
<p>四路环视Camera（各GMSL2 3Gbps）进入域控MAX96712，经两颗MAX96717形成<strong>前+右</strong>和<strong>后+左</strong>两路GMSL2 6Gbps组合流；MT8668侧由MAX96712/CSI接收两路3840×1536横向Composite，每个方向为1920×1536。Yocto Host持有硬件、驱动和Camera HAL Server；Android Guest通过RpcBinder/VSOCK传Request/Result，像素面目标为DMA-BUF共享，避免经RPC复制整帧。</p>
<p>P2在“AVM四方向+DVR左/右/后独立输出”的业务约束下使用PQDIP 6路+MML前视1路。若App能直接消费Composite的stride/offset/crop，或AVM/DVR共享同方向物理Buffer，DDR可进一步下降。</p></section></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="metrics" data-artifact-block-type="metric-strip" data-layout="full"><section class="portable-metric-grid"><article class="portable-metric-card" data-artifact-id="metric:metrics:p25" data-artifact-kind="card" data-card-id="p25"><p class="portable-metric-label">基准P（GB/s）</p><p class="portable-metric-value"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-1"><span class="portable-source-value-text">0.59</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-1" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 0.59</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></p><p class="portable-card-description">四方向完整经过一次DDR读或写，packed YUV422，25fps。</p><div class="portable-inline-source portable-source-summary" data-source-id="calc"><div class="portable-inline-source-content portable-source-summary-content"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 基准P（GB/s）</span><span class="portable-source-context">四方向完整经过一次DDR读或写，packed YUV422，25fps。</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></div></div></article><article class="portable-metric-card" data-artifact-id="metric:metrics:e2e25" data-artifact-kind="card" data-card-id="e2e25"><p class="portable-metric-label">七输出端到端（GB/s）</p><p class="portable-metric-value"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-2"><span class="portable-source-value-text">3.24</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-2" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 3.24</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></p><p class="portable-card-description">Composite落DDR、P2读一次、写七输出、七路消费者读取。</p><div class="portable-inline-source portable-source-summary" data-source-id="calc"><div class="portable-inline-source-content portable-source-summary-content"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 七输出端到端（GB/s）</span><span class="portable-source-context">Composite落DDR、P2读一次、写七输出、七路消费者读取。</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></div></div></article><article class="portable-metric-card" data-artifact-id="metric:metrics:pqdip25" data-artifact-kind="card" data-card-id="pqdip25"><p class="portable-metric-label">PQDIP三路利用率</p><p class="portable-metric-value"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-3"><span class="portable-source-value-text">88.5%</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-3" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 88.5%</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></p><p class="portable-card-description">按会议约250Mpixel/s能力口径估算。</p><div class="portable-inline-source portable-source-summary" data-source-id="calc"><div class="portable-inline-source-content portable-source-summary-content"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for PQDIP三路利用率</span><span class="portable-source-context">按会议约250Mpixel/s能力口径估算。</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></div></div></article><article class="portable-metric-card" data-artifact-id="metric:metrics:fpsdelta" data-artifact-kind="card" data-card-id="fpsdelta"><p class="portable-metric-label">30fps相对25fps</p><p class="portable-metric-value"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-4"><span class="portable-source-value-text">20%</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-4" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 20%</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></p><p class="portable-card-description">分辨率与格式不变时，像素率和Payload线性变化。</p><div class="portable-inline-source portable-source-summary" data-source-id="calc"><div class="portable-inline-source-content portable-source-summary-content"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 30fps相对25fps</span><span class="portable-source-context">分辨率与格式不变时，像素率和Payload线性变化。</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></div></div></article></section></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="definitions" data-artifact-block-type="markdown" data-layout="full"><section class="portable-markdown"><h2>计算口径与基本公式</h2>
<p>必须分开五类指标：图像吞吐（pixel/s）、GMSL/CSI有效Payload（bit/s）、DDR流量（Byte/s）、Buffer占用（Byte）以及CPU/GPU/Vcodec能力（cycles/s、ops/s、samples/s或macroblocks/s）。</p>
<p><code>PixelRate=W×H×fps</code>；<code>FrameBytes=W×H×bytes_per_pixel</code>；<code>Payload=FrameBytes×fps</code>；<code>LinkPayload=Payload×8</code>。量产计算优先用HAL/V4L2实际<code>sizeimage</code>：<code>DDRPayload=sizeimage×fps</code>。若只能估算：<code>Stride=ceil(W×Bpp/alignment)×alignment</code>，<code>FrameBytes=Stride×aligned_height</code>。</p>
<p>按packed YUV422 2Byte/pixel：单方向一帧5.89824MB；25fps为73.728Mpixel/s和147.456MB/s一次读或写；两Composite/四方向一次读或写定义为P=0.589824GB/s。30fps时P=0.7077888GB/s。</p></section></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="chart" data-artifact-block-type="chart" data-layout="full"><figure class="portable-content-card portable-chart-summary" data-artifact-id="ddr_chart" data-artifact-kind="chart" data-chart-id="ddr_chart" data-portable-visual-title="以下为Payload模型，不是DDR计数器实测值。" data-portable-source-host="true" tabindex="0" aria-label="以下为Payload模型，不是DDR计数器实测值。" aria-describedby="portable-source-tooltip-5"><figcaption class="portable-visual-header portable-markdown"><p>以下为<strong>Payload模型</strong>，不是DDR计数器实测值。</p></figcaption><div class="portable-inline-source" data-source-id="calc"><div class="portable-inline-source-content portable-source-tooltip-content" id="portable-source-tooltip-5" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 以下为Payload模型，不是DDR计数器实测值。</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></div></div><div class="portable-table-scroll"><table><caption>端到端DDR取决于Buffer路径，而不只取决于分辨率 data</caption><thead><tr><th scope="col">数据路径</th><th scope="col" class="portable-table-number">端到端DDR</th><th scope="col">帧率</th><th scope="col" class="portable-table-number">Camera生产侧</th><th scope="col" class="portable-table-number">端到端P倍数</th><th scope="col">关键假设</th></tr></thead><tbody><tr><td>OTF七输出</td><td class="portable-table-number">2.06GB/s</td><td>25fps</td><td class="portable-table-number">1.03GB/s</td><td class="portable-table-number">3.5</td><td>Composite不完整落DDR</td></tr><tr><td>OTF七输出</td><td class="portable-table-number">2.48GB/s</td><td>30fps</td><td class="portable-table-number">1.24GB/s</td><td class="portable-table-number">3.5</td><td>Composite不完整落DDR</td></tr><tr><td>Staged四共享</td><td class="portable-table-number">2.8GB/s</td><td>25fps</td><td class="portable-table-number">1.77GB/s</td><td class="portable-table-number">4.75</td><td>四方向物理Buffer共享</td></tr><tr><td>Staged四共享</td><td class="portable-table-number">3.36GB/s</td><td>30fps</td><td class="portable-table-number">2.12GB/s</td><td class="portable-table-number">4.75</td><td>四方向物理Buffer共享</td></tr><tr><td>Staged七独立</td><td class="portable-table-number">3.24GB/s</td><td>25fps</td><td class="portable-table-number">2.21GB/s</td><td class="portable-table-number">5.5</td><td>P2读一次Composite并写七输出</td></tr><tr><td>Staged七独立</td><td class="portable-table-number">3.89GB/s</td><td>30fps</td><td class="portable-table-number">2.65GB/s</td><td class="portable-table-number">5.5</td><td>P2读一次Composite并写七输出</td></tr><tr><td>输入读放大示例</td><td class="portable-table-number">3.69GB/s</td><td>25fps</td><td class="portable-table-number">2.65GB/s</td><td class="portable-table-number">6.25</td><td>输入累计读1.75P；非上界</td></tr><tr><td>输入读放大示例</td><td class="portable-table-number">4.42GB/s</td><td>30fps</td><td class="portable-table-number">3.19GB/s</td><td class="portable-table-number">6.25</td><td>输入累计读1.75P；非上界</td></tr></tbody></table></div></figure></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="table" data-artifact-block-type="table" data-layout="full"><section class="portable-content-card portable-table-card" data-artifact-id="ddr_table" data-artifact-kind="table" data-table-id="ddr_table" data-portable-visual-title="DDR场景逐项结果"><header class="portable-visual-header"><h2>DDR场景逐项结果</h2></header><div class="portable-inline-source portable-source-summary" data-source-id="calc"><div class="portable-inline-source-content portable-source-summary-content"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for DDR场景逐项结果</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></div></div><div class="portable-table-source-region"><div class="portable-table-scroll"><table><caption>DDR场景逐项结果</caption><thead><tr><th scope="col">场景</th><th scope="col">帧率</th><th scope="col" class="portable-table-number">生产侧GB/s</th><th scope="col" class="portable-table-number">端到端GB/s</th><th scope="col" class="portable-table-number">P倍数</th><th scope="col">关键假设</th></tr></thead><tbody><tr><td>OTF七输出</td><td>25fps</td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-6"><span class="portable-source-value-text">1.03</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-6" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 1.03</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-7"><span class="portable-source-value-text">2.06</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-7" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 2.06</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-8"><span class="portable-source-value-text">3.5</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-8" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 3.5</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td>Composite不完整落DDR</td></tr><tr><td>OTF七输出</td><td>30fps</td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-9"><span class="portable-source-value-text">1.24</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-9" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 1.24</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-10"><span class="portable-source-value-text">2.48</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-10" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 2.48</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-11"><span class="portable-source-value-text">3.5</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-11" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 3.5</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td>Composite不完整落DDR</td></tr><tr><td>Staged四共享</td><td>25fps</td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-12"><span class="portable-source-value-text">1.77</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-12" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 1.77</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-13"><span class="portable-source-value-text">2.8</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-13" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 2.8</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-14"><span class="portable-source-value-text">4.75</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-14" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 4.75</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td>四方向物理Buffer共享</td></tr><tr><td>Staged七独立</td><td>25fps</td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-15"><span class="portable-source-value-text">2.21</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-15" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 2.21</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-16"><span class="portable-source-value-text">3.24</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-16" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 3.24</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-17"><span class="portable-source-value-text">5.5</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-17" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 5.5</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td>P2读一次Composite并写七输出</td></tr><tr><td>Staged四共享</td><td>30fps</td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-18"><span class="portable-source-value-text">2.12</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-18" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 2.12</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-19"><span class="portable-source-value-text">3.36</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-19" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 3.36</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-20"><span class="portable-source-value-text">4.75</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-20" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 4.75</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td>四方向物理Buffer共享</td></tr><tr><td>输入读放大示例</td><td>25fps</td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-21"><span class="portable-source-value-text">2.65</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-21" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 2.65</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-22"><span class="portable-source-value-text">3.69</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-22" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 3.69</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-23"><span class="portable-source-value-text">6.25</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-23" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 6.25</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td>输入累计读1.75P；非上界</td></tr><tr><td>Staged七独立</td><td>30fps</td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-24"><span class="portable-source-value-text">2.65</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-24" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 2.65</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-25"><span class="portable-source-value-text">3.89</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-25" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 3.89</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-26"><span class="portable-source-value-text">5.5</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-26" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 5.5</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td>P2读一次Composite并写七输出</td></tr><tr><td>输入读放大示例</td><td>30fps</td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-27"><span class="portable-source-value-text">3.19</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-27" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 3.19</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-28"><span class="portable-source-value-text">4.42</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-28" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 4.42</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td class="portable-table-source-cell portable-table-number"><span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-29"><span class="portable-source-value-text">6.25</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-29" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 6.25</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span></td><td>输入累计读1.75P；非上界</td></tr></tbody></table></div></div></section></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="scenarios" data-artifact-block-type="markdown" data-layout="full"><section class="portable-markdown"><h2>DDR路径拆账</h2>
<p><strong>OTF七输出：</strong> Composite不完整落DDR，生产侧写七方向=1.75P；加消费者读取后=3.5P。<strong>Staged四共享：</strong> P1写Composite 1P+P2读1P+写四方向1P=3P；加AVM读4路和DVR读3路1.75P，端到端4.75P。<strong>Staged七独立：</strong> 输入写1P+读1P+七输出写1.75P=3.75P；加消费者1.75P，端到端5.5P。若多输出累计输入读取增至1.75P，示例端到端为6.25P；这不是上界。</p>
<p>一次CPU完整复制包括读和写，额外增加2P：25fps为1.179648GB/s，30fps为1.4155776GB/s。系统总量还要加Display、GPU、Vcodec、DMS、CPU及其他DMA Master。</p></section></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="compute" data-artifact-block-type="markdown" data-layout="full"><section class="portable-markdown"><h2>PQDIP、MML及通用算力计算</h2>
<p><code>OutputPixelRate=Σ(W_i×H_i×fps_i)</code>；<code>Utilization=OutputPixelRate/HardwareCapacity</code>。PQDIP每实例三路在25fps为221.184Mpixel/s，相对250口径利用率88.4736%、余量28.816Mpixel/s；30fps为265.4208Mpixel/s，超出15.4208Mpixel/s。250是否为峰值/保证值，以及按输入/输出/内部cycle哪种口径计数，须MTK确认。MML前视一路为73.728Mpixel/s@25或88.4736Mpixel/s@<span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-30"><span class="portable-source-value-text">30</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-30" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 30</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span>，缺少正式capacity时不能给出可靠利用率。</p>
<p>CPU：<code>RequiredCycles=PixelRate×cycles_per_pixel</code>，同时核对内存读写；GPU：核对ops/pixel、输入输出Bytes、格式转换及UI/3D并发；Vcodec优先使用厂商<code>resolution×fps×stream_count</code>能力表。H.<span class="portable-source-tooltip portable-source-value" data-portable-source-host="true" tabindex="0" aria-describedby="portable-source-tooltip-31"><span class="portable-source-value-text">264</span><span class="portable-source-tooltip-content" id="portable-source-tooltip-31" role="tooltip"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 264</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></span></span> 1920×1536为11520macroblocks/frame，单路25fps 288000macroblocks/s、四路1152000macroblocks/s；HEVC按64×64为720CTU/frame。macroblocks/s不是Megabyte/s。</p></section><div class="portable-inline-source portable-source-summary" data-source-id="calc"><div class="portable-inline-source-content portable-source-summary-content"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for PQDIP、MML及通用算力计算</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></div></div></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="buffer" data-artifact-block-type="markdown" data-layout="full"><section class="portable-markdown"><h2>Buffer内存占用</h2>
<p>单方向5.89824MB（5.625MiB），单Composite 11.79648MB（11.25MiB）。若每个方向6个Buffer、每个Composite中间池3个Buffer：四方向共享输出池141.55776MB；七物理输出池247.72608MB；两Composite中间池70.77888MB；Staged+四共享212.33664MB；Staged+七独立318.50496MB。DMA-BUF共享表示Host/Guest引用同一物理内存，不应再重复计算一份完整图像池。</p></section><div class="portable-inline-source portable-source-summary" data-source-id="calc"><div class="portable-inline-source-content portable-source-summary-content"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for Buffer内存占用</span><strong>Source: Camera DDR可复算查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></div></div></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="peak" data-artifact-block-type="markdown" data-layout="full"><section class="portable-markdown"><h2>DDR理论峰值与链路裕量</h2>
<p>MT8668材料给出LPDDR5X最高7500Mbps数据率和最高24GB容量。容量不是带宽，7500Mbps是每pin data rate。理论峰值=<code>DataRate(MT/s)×AggregateBusWidth(bit)/8</code>；例如32bit为30GB/s、64bit为60GB/s，但32/64bit仅用于说明公式，不代表项目板级配置。持续可用带宽还需乘效率并扣除其他Master。</p>
<p>单方向GMSL有效Payload为1.179648Gbit/s@25、1.4155776Gbit/s@30；双方向Composite为2.359296和2.8311552Gbit/s。30fps双方向即使简单加20%裕量为3.39738624Gbit/s，但最终仍须计入SerDes编码/FEC、CSI blanking与包头。</p></section></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="history" data-artifact-block-type="table" data-layout="full"><section class="portable-content-card portable-table-card" data-artifact-id="history_table" data-artifact-kind="table" data-table-id="history_table" data-portable-visual-title="历史口径合并与替代关系"><header class="portable-visual-header"><h2>历史口径合并与替代关系</h2></header><div class="portable-inline-source portable-source-summary" data-source-id="history"><div class="portable-inline-source-content portable-source-summary-content"><span class="portable-source-tooltip-heading" aria-hidden="true">Source for 历史口径合并与替代关系</span><strong>Source: 历史Camera口径追溯查询</strong><span class="portable-source-meta">File: T12T问题分析总结性材料/T12T资料库/Camera架构/camera_history_lineage.sql</span></div></div><div class="portable-table-source-region"><div class="portable-table-scroll"><table><caption>历史口径合并与替代关系</caption><thead><tr><th scope="col">日期</th><th scope="col">阶段</th><th scope="col">输入口径</th><th scope="col">主要结论</th><th scope="col">当前状态</th></tr></thead><tbody><tr><td>2026-08-25</td><td>通用虚拟化模型</td><td>4×1920×1080@30；2×3840×1080</td><td>建立1P/3P、VC直达、实时拆分和Staged方法</td><td>方法保留，尺寸被替代</td></tr><tr><td>2026-09-03</td><td>会议材料解读</td><td>1920×1526@25；3840×1526</td><td>73.248Mpixel/s；PQDIP三路219.744；PQDIP6+MML1</td><td>分流保留，尺寸被替代</td></tr><tr><td>2026-09-04</td><td>物理拓扑确认</td><td>1920×1536；3840×1536</td><td>MAX96712/MAX96717；前+右、后+左；3/6Gbps</td><td>当前几何与链路基线</td></tr><tr><td>2026-09-04</td><td>最终可追溯版</td><td>1536高度；25/30fps</td><td>重算PQDIP、DDR、Buffer、GMSL、CPU copy和Vcodec</td><td>当前评审主文档</td></tr></tbody></table></div></div></section></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="lineage" data-artifact-block-type="markdown" data-layout="full"><section class="portable-markdown"><h2>变更影响和决策状态</h2>
<p>1526→1536高度增加0.6553%；25fps单路图像吞吐增加0.480Mpixel/s、一次DDR读或写增加0.960MB/s、PQDIP三路增加1.440Mpixel/s。1080→1536高度增加42.2222%，所以1080旧数值不能继续作为本项目带宽。</p>
<p>已确认：3840×1536横拼、前+右/后+左、Yocto Host/Android Guest。目标设计：像素面DMA-BUF共享。会议确认：AVM4+DVR3共七业务流。待确认：量产25/30fps、格式及sizeimage、Composite首次落DDR位置、PQDIP多输出读取方式、MML余量、MT8668跨域DMA-BUF接口、Encoder对stride/offset/crop支持、实际DDR宽度/通道/频点。</p></section></div>
<div class="portable-block portable-layout-full" data-artifact-block-id="validation" data-artifact-block-type="markdown" data-layout="full"><section class="portable-markdown"><h2>校验结论与签核步骤</h2>
<p><strong>总体评价：带条件可用于评审。</strong> 基础Payload、P倍数、PQDIP三路、Buffer池、GMSL Payload和尺寸变更均已由独立Python脚本复算；数值与SQL表达一致。DDR值仍是Payload估算，不含协议效率、缓存命中、内部压缩及全系统并发的最终影响。</p>
<p>签核时应：导出全部stream的width/height/format/bytesperline/sizeimage/buffer_count；冻结Composite fps与同步关系；在25/30fps测P1/P2/PQDIP/MML；使用DDR硬件计数器按“只开P1→四共享→七独立→AVM→DVR→Display/GPU/DMS”逐级测增量；验证四共享相对七独立是否接近0.75P；做慢消费者、重启、断连、ESD和泄漏测试；高温降频与最坏并发运行至少30分钟，记录平均/峰值DDR、P95/P99延迟、掉帧和重复帧；由MTK/PVT书面签核。</p></section></div></div><section class="portable-sources" aria-labelledby="portable-sources-heading"><h2 id="portable-sources-heading">Sources</h2><ol><li><strong>Camera DDR可复算查询</strong><span class="portable-source-meta">T12T问题分析总结性材料/T12T资料库/Camera架构/camera_ddr_calculation.sql</span></li><li><strong>历史Camera口径追溯查询</strong><span class="portable-source-meta">T12T问题分析总结性材料/T12T资料库/Camera架构/camera_history_lineage.sql</span></li><li><strong>已确认Camera物理拓扑图</strong><span class="portable-source-meta">T12T问题分析总结性材料/T12T资料库/Camera架构/camera-physical-topology-confirmed.jpg</span></li><li><strong>MT8668 Yocto Camera Driver Manual CN V1.0</strong><span class="portable-source-meta">T12T问题分析总结性材料/T12T资料库/8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Camera_Driver_User_Manual_CN_V1.0.pdf</span></li><li><strong>MT8668 Hypervisor Camera Manual CN V1.0</strong><span class="portable-source-meta">T12T问题分析总结性材料/T12T资料库/8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Camera_User_Manual_CN_V1.0.pdf</span></li><li><strong>MT8668 Yocto DDR Manual CN V1.0</strong><span class="portable-source-meta">T12T问题分析总结性材料/T12T资料库/8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_DDR_User_Manual_CN_V1.0.pdf</span></li></ol></section></main>
<script data-data-analytics-portable-source-tooltips="true">(() => {
  const RUNTIME_FLAG = "__dataAnalyticsPortableSourceTooltipsInitialized";
  const READY_ATTRIBUTE = "data-portable-source-tooltips-ready";
  const OPEN_ATTRIBUTE = "data-portable-source-tooltip-open";
  const MOBILE_POSITIONED_ATTRIBUTE = "data-portable-source-tooltip-mobile-positioned";
  const MOBILE_PORTALED_ATTRIBUTE = "data-portable-source-tooltip-mobile-portaled";
  const HOST_SELECTOR = "[data-portable-source-host]";
  const DISCOVERABLE_SELECTOR = ".portable-source-tooltip";
  const CONTENT_SELECTOR = ".portable-source-tooltip-content";
  const INTERACTIVE_SELECTOR = "a,button,input,select,textarea,summary,details,[role='button'],[contenteditable='true']";
  const GAP = 8;
  const MOBILE_VIEWPORT_PADDING = 16;
  const MOBILE_MAX_WIDTH = 600;
  const SCROLL_DISMISS_THRESHOLD = 24;
  const VIEWPORT_PADDING = 8;
  const fallback = document.querySelector("[data-portable-fallback]");

  if (window[RUNTIME_FLAG]) return;

  let activeHost = null;
  let activeTooltipOrigin = null;
  let mobileTrayScrollY = 0;
  let placementFrame = 0;

  function viewportBounds() {
    const viewport = window.visualViewport;
    return {
      bottom: (viewport?.offsetTop ?? 0) + (viewport?.height ?? window.innerHeight),
      left: viewport?.offsetLeft ?? 0,
      right: (viewport?.offsetLeft ?? 0) + (viewport?.width ?? window.innerWidth),
      top: viewport?.offsetTop ?? 0,
    };
  }

  function usesMobileTray() {
    return (window.visualViewport?.width ?? window.innerWidth) <= MOBILE_MAX_WIDTH;
  }

  function clampAxis(value, size, start, end) {
    const minimum = start + VIEWPORT_PADDING;
    const maximum = Math.max(minimum, end - size - VIEWPORT_PADDING);
    return Math.min(Math.max(value, minimum), maximum);
  }

  function rootPixelValue(property) {
    const value = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(property));
    return Number.isFinite(value) ? Math.max(0, value) : 0;
  }

  function tooltipForHost(host) {
    if (!(host instanceof HTMLElement)) return null;
    for (const tooltipId of String(host.getAttribute("aria-describedby") ?? "").split(/\s+/u).filter(Boolean)) {
      const describedTooltip = document.getElementById(tooltipId);
      if (describedTooltip instanceof HTMLElement && describedTooltip.matches(CONTENT_SELECTOR)) {
        return describedTooltip;
      }
    }
    const direct = Array.from(host.children).find((child) => child.matches(CONTENT_SELECTOR));
    if (direct instanceof HTMLElement) return direct;
    const wrapper = Array.from(host.children).find((child) => child.classList.contains("portable-inline-source"));
    const wrapped = wrapper?.querySelector(":scope > " + CONTENT_SELECTOR);
    return wrapped instanceof HTMLElement ? wrapped : null;
  }

  function restoreMobileTooltip() {
    const origin = activeTooltipOrigin;
    activeTooltipOrigin = null;
    if (!origin) return;
    const { nextSibling, parent, tooltip } = origin;
    tooltip.removeAttribute(MOBILE_PORTALED_ATTRIBUTE);
    tooltip.removeAttribute(MOBILE_POSITIONED_ATTRIBUTE);
    if (nextSibling?.parentNode === parent) parent.insertBefore(tooltip, nextSibling);
    else parent.appendChild(tooltip);
  }

  function portalMobileTooltip(host) {
    if (!(fallback instanceof HTMLElement)) return null;
    const tooltip = tooltipForHost(host);
    if (!(tooltip instanceof HTMLElement)) return null;
    if (activeTooltipOrigin?.tooltip === tooltip) return tooltip;
    restoreMobileTooltip();
    const parent = tooltip.parentNode;
    if (!parent) return null;
    activeTooltipOrigin = { nextSibling: tooltip.nextSibling, parent, tooltip };
    tooltip.setAttribute(MOBILE_PORTALED_ATTRIBUTE, "true");
    fallback.appendChild(tooltip);
    return tooltip;
  }

  function clearMobilePlacement(host) {
    if (!(host instanceof HTMLElement)) return;
    host.removeAttribute(MOBILE_POSITIONED_ATTRIBUTE);
    const tooltip = tooltipForHost(host);
    if (!(tooltip instanceof HTMLElement)) return;
    tooltip.removeAttribute(MOBILE_POSITIONED_ATTRIBUTE);
    for (const property of [
      "--portable-source-tooltip-mobile-left",
      "--portable-source-tooltip-mobile-max-height",
      "--portable-source-tooltip-mobile-top",
      "--portable-source-tooltip-mobile-width",
    ]) {
      tooltip.style.removeProperty(property);
    }
  }

  function placeMobileTray(host) {
    const tooltip = tooltipForHost(host);
    if (!(tooltip instanceof HTMLElement)) return;
    const viewport = viewportBounds();
    const leftPadding = MOBILE_VIEWPORT_PADDING + rootPixelValue("--portable-safe-area-left");
    const rightPadding = MOBILE_VIEWPORT_PADDING + rootPixelValue("--portable-safe-area-right");
    const topPadding = MOBILE_VIEWPORT_PADDING + rootPixelValue("--portable-safe-area-top");
    const bottomPadding = MOBILE_VIEWPORT_PADDING + rootPixelValue("--portable-safe-area-bottom");
    const left = viewport.left + leftPadding;
    const right = Math.max(left + 1, viewport.right - rightPadding);
    const topBoundary = viewport.top + topPadding;
    const bottom = Math.max(topBoundary + 1, viewport.bottom - bottomPadding);
    const width = Math.max(1, right - left);
    const availableHeight = Math.max(1, bottom - topBoundary);
    const maxHeight = Math.max(1, Math.min(280, availableHeight * 0.4));

    tooltip.style.setProperty("--portable-source-tooltip-mobile-left", String(Math.round(left)) + "px");
    tooltip.style.setProperty("--portable-source-tooltip-mobile-max-height", String(Math.round(maxHeight)) + "px");
    tooltip.style.setProperty("--portable-source-tooltip-mobile-top", String(Math.round(topBoundary)) + "px");
    tooltip.style.setProperty("--portable-source-tooltip-mobile-width", String(Math.round(width)) + "px");
    host.setAttribute(MOBILE_POSITIONED_ATTRIBUTE, "true");
    tooltip.setAttribute(MOBILE_POSITIONED_ATTRIBUTE, "true");

    const tooltipHeight = Math.min(tooltip.getBoundingClientRect().height, maxHeight);
    const top = Math.max(topBoundary, bottom - tooltipHeight);
    tooltip.style.setProperty("--portable-source-tooltip-mobile-top", String(Math.round(top)) + "px");
  }

  function placeTooltip(host) {
    if (!(host instanceof HTMLElement)) return;
    if (usesMobileTray()) {
      placeMobileTray(host);
      return;
    }
    clearMobilePlacement(host);
    const tooltip = tooltipForHost(host);
    if (!(tooltip instanceof HTMLElement)) return;

    const hostRect = host.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    if (!tooltipRect.width || !tooltipRect.height) return;
    const viewport = viewportBounds();
    const centeredLeft = hostRect.left + (hostRect.width - tooltipRect.width) / 2;
    const aboveTop = hostRect.top - tooltipRect.height - GAP;
    const belowTop = hostRect.bottom + GAP;
    const preferredTop = aboveTop < viewport.top + VIEWPORT_PADDING ? belowTop : aboveTop;
    const left = clampAxis(centeredLeft, tooltipRect.width, viewport.left, viewport.right);
    const top = clampAxis(preferredTop, tooltipRect.height, viewport.top, viewport.bottom);

    tooltip.style.setProperty("--portable-source-tooltip-left", String(Math.round(left)) + "px");
    tooltip.style.setProperty("--portable-source-tooltip-top", String(Math.round(top)) + "px");
  }

  function closeMobileTray({ restoreFocus = false } = {}) {
    if (placementFrame) {
      window.cancelAnimationFrame(placementFrame);
      placementFrame = 0;
    }
    const host = activeHost;
    if (!(host instanceof HTMLElement)) {
      restoreMobileTooltip();
      return;
    }
    host.removeAttribute(OPEN_ATTRIBUTE);
    clearMobilePlacement(host);
    restoreMobileTooltip();
    if (usesMobileTray() && host.matches(DISCOVERABLE_SELECTOR)) host.setAttribute("aria-expanded", "false");
    activeHost = null;
    if (restoreFocus) host.focus({ preventScroll: true });
  }

  function openMobileTray(host) {
    if (!(host instanceof HTMLElement) || !(tooltipForHost(host) instanceof HTMLElement)) return;
    if (activeHost && activeHost !== host) closeMobileTray();
    activeHost = host;
    mobileTrayScrollY = window.scrollY;
    portalMobileTooltip(host);
    host.setAttribute(OPEN_ATTRIBUTE, "true");
    if (host.matches(DISCOVERABLE_SELECTOR)) host.setAttribute("aria-expanded", "true");
    schedulePlacement(host);
  }

  function toggleMobileTray(host) {
    if (activeHost === host && host.getAttribute(OPEN_ATTRIBUTE) === "true") closeMobileTray();
    else openMobileTray(host);
  }

  function syncSemantics() {
    const isMobile = usesMobileTray();
    document.querySelectorAll(DISCOVERABLE_SELECTOR).forEach((host) => {
      if (!(host instanceof HTMLElement)) return;
      if (isMobile) {
        if (!host.hasAttribute("role")) {
          host.setAttribute("role", "button");
          host.setAttribute("data-portable-source-tooltip-runtime-role", "true");
        }
        host.setAttribute("aria-expanded", host.getAttribute(OPEN_ATTRIBUTE) === "true" ? "true" : "false");
      } else {
        if (host.getAttribute("data-portable-source-tooltip-runtime-role") === "true") {
          host.removeAttribute("role");
          host.removeAttribute("data-portable-source-tooltip-runtime-role");
        }
        host.removeAttribute("aria-expanded");
      }
    });
  }

  function schedulePlacement(host = activeHost) {
    if (!(host instanceof HTMLElement)) return;
    activeHost = host;
    if (placementFrame) window.cancelAnimationFrame(placementFrame);
    placementFrame = window.requestAnimationFrame(() => {
      placementFrame = 0;
      placeTooltip(host);
    });
  }

  function eventHost(event) {
    const target = event.target;
    if (!(target instanceof Element) || !(fallback instanceof HTMLElement)) return null;
    let host = target.closest(HOST_SELECTOR);
    if (!(host instanceof HTMLElement) && usesMobileTray()) {
      const cell = target.closest("td.portable-table-source-cell");
      host = cell?.querySelector(":scope > " + HOST_SELECTOR) ?? null;
    }
    return host instanceof HTMLElement && fallback.contains(host) ? host : null;
  }

  function isNestedInteractive(target, host) {
    if (!(target instanceof Element) || !(host instanceof HTMLElement)) return false;
    const interactive = target.closest(INTERACTIVE_SELECTOR);
    return interactive instanceof HTMLElement && interactive !== host && host.contains(interactive);
  }

  function handlePointerDown(event) {
    if (!usesMobileTray() || !(activeHost instanceof HTMLElement)) return;
    const target = event.target;
    if (!(target instanceof Element) || target.closest(CONTENT_SELECTOR)) return;
    if (eventHost(event) === activeHost) return;
    closeMobileTray();
  }

  function handleClick(event) {
    if (!usesMobileTray()) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!(fallback instanceof HTMLElement) || !fallback.contains(target)) {
      closeMobileTray();
      return;
    }
    if (target.closest(CONTENT_SELECTOR)) return;
    const host = eventHost(event);
    if (host instanceof HTMLElement) {
      if (isNestedInteractive(target, host)) return;
      event.preventDefault();
      event.stopPropagation();
      if (document.activeElement !== host) host.focus({ preventScroll: true });
      toggleMobileTray(host);
      return;
    }
    closeMobileTray();
  }

  function handleKeydown(event) {
    if (!usesMobileTray()) return;
    if (event.key === "Escape") {
      closeMobileTray({ restoreFocus: true });
      return;
    }
    if (event.key !== "Enter" && event.key !== " ") return;
    const host = eventHost(event);
    if (!(host instanceof HTMLElement) || isNestedInteractive(event.target, host)) return;
    event.preventDefault();
    toggleMobileTray(host);
  }

  function handleFocusIn(event) {
    const host = eventHost(event);
    if (!usesMobileTray()) schedulePlacement(host);
  }

  function handleScroll() {
    if (usesMobileTray()) {
      if (activeHost && Math.abs(window.scrollY - mobileTrayScrollY) >= SCROLL_DISMISS_THRESHOLD) closeMobileTray();
      return;
    }
    schedulePlacement();
  }

  function handleViewportChange() {
    syncSemantics();
    if (!usesMobileTray() && activeHost?.getAttribute(OPEN_ATTRIBUTE) === "true") {
      closeMobileTray();
      return;
    }
    if (usesMobileTray()) {
      if (activeHost?.getAttribute(OPEN_ATTRIBUTE) === "true") schedulePlacement(activeHost);
      else activeHost = null;
      return;
    }
    schedulePlacement();
  }

  function setup() {
    if (!(fallback instanceof HTMLElement)) throw new Error("Portable fallback root is missing.");
    syncSemantics();
    document.addEventListener("pointerover", (event) => {
      if (!usesMobileTray()) schedulePlacement(eventHost(event));
    }, true);
    document.addEventListener("pointerdown", handlePointerDown, true);
    document.addEventListener("click", handleClick, true);
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleViewportChange);
    window.visualViewport?.addEventListener("resize", handleViewportChange);
    window.visualViewport?.addEventListener("scroll", handleViewportChange);
    window.addEventListener("beforeprint", () => closeMobileTray());
    window.addEventListener("data-analytics-portable-reader-ready", () => closeMobileTray(), { once: true });
    document.addEventListener("data-analytics-portable-reader-ready", () => closeMobileTray(), { once: true });

    const currentHost = document.querySelector(HOST_SELECTOR + ":hover, " + HOST_SELECTOR + ":focus");
    if (!usesMobileTray() && currentHost instanceof HTMLElement) schedulePlacement(currentHost);
  }

  try {
    setup();
    window[RUNTIME_FLAG] = true;
    document.documentElement.setAttribute(READY_ATTRIBUTE, "true");
  } catch (error) {
    console.warn("Portable source tooltips could not start; keeping the CSS fallback.", error);
  }
})();</script>
<div id="data-analytics-portable-reader" aria-hidden="true" inert></div>
<template id="data-analytics-portable-artifact-payload-source" data-compression="gzip-base64">
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
OAAA
</template>
<template id="data-analytics-portable-reader-runtime-source" data-compression="gzip-base64">
H4sIAAAAAAACCuy9a3fjNrYg+v38CilTV0MeQ4pk15MyyqfiR6e665VyVdLVjseESUhCTIEKCNnl
WOrfftfeeBCkZCfpPjNr7lp3rSqLADbeG8DGfmG/m5eZvl3wzkzPi5f/sQ8/nYLJKf2Gy29e/ken
sz/jLIePTmd/zjXrZDOmKq7pN0s96T//pvNtmCjZnNNvrgW/WZRKf9PJSqm51PSbG5HrGc35tch4
HwOkI6TQghX9KmMFp6OtRWVlUap+lc34nAfFFWI6052cqas6lxa64C+PmGadV5IVt1pkVYcpLSYs
0/vfmmQDWmVKLHQHek6/mZf5soDCVVlVpRJTIV9eM9Xh9P3lLzzTg0xxpjnRLpzziZD8gyoXXOlb
Il38lOv3N9LFH3FTS6mI2g7xjs15RUSQ+EGVuoRWvZ8Q5uIXLnIwY1WQnZQ04kTH9GUE//VqFfEo
0vSOf4XBr5K79Toe2ADRMeFULosiJtpFxqSCImRMX94VXHcUvVuPJ6WKoPuiI2SHxzpSRJC7KdcJ
PxPnhMvlnCt2WfCkO1zHY8X1UsmOXK0A8vR2flkWA12eaiXk9BObkrtrVix5kr7FYU7XMVFrkkG9
gpSkgrrFJBK9HnSxnHQEpWmJPU9XqyBuspSZFqVMY9fCjKpIxKSgQ7Kk2aDgcqpnJB8X+8txsbMT
5zQ7K85Jlw0yVhQRJ3nc6+VdSsteT0PQdCvi9KU44+fx4FLIPIIxInnc6GhUURkJksfxalUN6pS6
/3xNChpJogiDyWBUUhztg7t1wiMRyTgmWaRWq66E/4OLC16ZETnQESNpzidsWejUDZdsD3TCCJSx
pGUEDb5zw9HRiAR3MCCScjsKYz5YLKtZpOMxS2C8xsN9OTZQisr+6OXLlyPCKD9T52MxiYb7ImJE
xzFEUE34mTynjEiqxryoeOdScXbVYeu1r1ZGPL5znbe1UkqHB9DrhJ8Nz2tYBbBiEoVwsUOcZVGM
oVmaQiYCfViUiyiGZskupTq+gwQqbU9MF4bQeDflJWXQn7HaL20fK7r7n5HaGcX9EckoP6vOSUGr
nRFZUn5WmC6/FFEGY1rss14PQkuSxQcRjsCSABiVRNEiTkxcRqAcjKtiMyxiEgW5pR2+MHNr+Gyn
dT02ojl9Van0a5nzr31df/tFhgPMByLv64HIE7nGQV3KSgOeXMjyhl6XIu8MiV04C64mpZozmfF6
WfmlFqQOIG+4yLBFjAYg41ZNDjbyeMCglCher6HTWEBJj2DrrGhpkn6/DAvYr9Zrs8bPYOrOzsmS
jkiOa4pM6B5Z0O6IzOHPDP5M4c8FtR2ruP4k5rxc6rBPB3V0guVcO/is4ExtyxEmmDy3QR2v53Oe
C6b5frrE0n0Ewo79JF/CAvAbK5VREY9F1+wQY1waAveoS5ZdURMdKwByWCYGlWYKW79POaYRUSMI
FbClC8WgNgAiOsqIiAPsG5tqgxX81a5KHD9oIenOY1h0URbbtsVz2h2S09UqOoWP91FsirwzCxb7
oS1sr/dL9JXouqF9Hps5PIUKDml/RG7oE/KJ9kf1yBzXMz896A6Tbgufo7j/af8mrlt9FGGjcb5P
Y9uQdp7xJ6rHZqy7w7FWt3csuTPI0uuZDl9HhzE2KgZUGo4Nuk8Q+DLBybqMdAwoF2XxOPe97EZ5
a7Bf6l7vGIYmtjif+8mEjcbiS9lcXjWMw+l8sFCiVELfvuHX3GyKFS03qtunGjfHzW67VV/dW1VF
sFM4LGZTulzngHFRFvd6KspiBMAF3FHYcUyDjcYNQYy5PRosDRosG2iwDNDA1Ddar90uOBGSFcXt
nV/NDFfzWtjNa+0hxMH7KE5OMTei0vtgQG8bvXwf7iW30VG89ovHwr/lVcWm/HDGpOQFLFkzX1dU
8ptWKnlFrwZAI+2Oze9oUMq5AaFHpFHZq8GirLTNj+SD3QE7DbCL6IgM43WN+r9Emsj47pBeRAGY
3lgA8ZrIeB3Evs4L/sGiCn1CwhS3//jkUZj8przxCY/DhHewxRc+bS9M+6DKiSiEnJrZClI+V1x9
V5TZlZBTn3c3hMjg3CgOHfb5bvL4jjfxfx1mm5Qq4yeKzflHpnkj2/AlX61Gu0/2+UFWyqos+IAr
VaoobWbqaHbFqw7rLMpKaHHNO0LqziXXN5zLzrDDZN4Z7T4hHcgm5LQzgZwdxTSvOjMxnXHV0TMm
AagzWVQdUXVkqTvVcgHowPM0Tm7ocJ8fvGV6NpgUZamiEd/7lsfJk0ZnplwfLpXiUn8Il/eWo2/S
yCf5V93oenUjdDaLJvFdxireGSX4s2t+9hKzE+6ZZT229GSi6WRtaIvJeEI1bm+Oaotiv9AmVK4b
tSv+65JX+gMTUodNndLusAm4lD8JPfPzX7cYyBrbZn5Pm/Hnsfl5kjRbzule0HIetlw/1HK4KwJd
vYl1cJFhbo/eODJsU+1mwUJyiR1EjLJBzgt2SxgNQORyfslV2usN99lBucOSMk4YLYnyHTa7eH9k
58X2v6K7T4Zh1JOkoqPhs71nj0fPd/fClMeQwh+35rWiT/ieIycrynYqouidyJPlzg5xKysRpHGk
JIr4bTlhpHmsJBXx9ETSH60Je1keRCogMhjRUUFUTOBEoG67V3h8FDEcrAdRfawmMyAZ4DBg/TKO
46RRVoUUiorJfLVarFbRJqER40UxnNhZuSzyL4IXOT0OE24UW2zdY8ySmDjyOUDj+5bEgC0WxW2k
Z6IiTE2Xcy511UK29ToGsqCMInv9vvMXarqMYkiduFuaaYG9FQNNkSrOMj3QiknYl0rJigEvONST
xkRuAYWCWZHGRG1JnCg2tXnFluRKK5Hpi3mZ8zQmbFvpuLtzlcak3JIMeyxcQ1NgFWxN1vwr1J5t
a1ypbpjKLxSfpHBN39K+ZbXgsoLGLbckz/m8TGGsN5MK9tttCgO9mcQyLa6FhuSFSxaaK6ZLVZ++
8+D+ahc07wachy43N9mI00Wvx88W56sVP0v/679cUem5I7d448pgaP8Y964ZvRPV23IpNc+TjQ2/
O1oTLn9d8iU/gcPr8yKHq0MA59M/8kXBMn6q7wM45XozcU2mjonEqkpMJblADo8bg2tAYKBBAN8B
FRYV5QQDdmapNkHFJxW9MN9LbKaicrWara8D9pSoPsIEHJbzRSmBTXe3JmF6ZdvYOiNqCi2YAH9H
hTg/uL0e7xoaVM9UedM5Nke/Petlx2TuAAkMFXWumRKwRVQdXXZMuzul6jC/FXRuZiKbdcx8PFzE
II3HYf8HrZE3mwYMaOo6msbNAZjUs9zYp7YVG2CEKzkN8qchJXkLk31bV0SDShuX0H97tpnqfKWX
QU1AOt+Ov+JGodUy06Wil2QafQ07HpOvA1F9WCreQhB77zqlr5RitwNR4W/d5EPoGEDc0Lvvzf37
lfn5ZH5OE0M8fvo9Zml44+REwgFt7ocKemtPiLtHjwzWJRrXdsLJFb9NJFF8kghK7f3EbAxwtpaL
KlHr8HKKGG23leOID6AYogk34x3cY99v2X9CmqPb5b0eH7gWUUoDptFVfbrdfUO/SVI6TMk3CXzs
pmvbm/RRusMHyuwc0bdnNDn/dkpCvHPVn/HztdmwXtFvf/5259tpeEsJu7StpdjOK35rVubBVZRC
vVf8Nk605wRHe0+Dzr8N6FkOV0W9rAzFlE6WxUQUBc/TxB/KyBJFaihVHGqFVLMDQAdZVcqaMGqQ
ca5wStMK25Ee8IGecRkdkkNg7Ln0dMFlDunEpvtxAv6jL6WG6/WCzHWjiW0t1fGa/KkyfM+I6xOU
Ecfkv2eA1msbrmfhXcQJ0sSkdFxTN2zjCBu6lEbWkaerFUZclmXBmUyB2rPihLFh03VHcDXnjnuV
OR5Bx06Ia/4lyFd0ijS/mxMTsLR0knnmhOmRRbTE44tbE5bG1ub+INsZO7kboIzywQVIm8i7KIv4
4GLBbouS5bHv/hoYHJnjSZe0BHZYRhn0OT1IB+kOrIMhcOFPozI+iARNU5J1LQ0cCZr5lfaKpI96
36bxTvptGpN3UYm1pOm2pcfXcZyUvpj3UQkjW9KjqCRiJyphGZkRXa3cOqOUYvxBmiaw1jAQb69+
JwMy2sgCyjgmo3FGzZ5bBJ1L2E6apDB/pxGPvXxlSYfj5b4XKSx3dmKQGCzPSUWLnV8iRpYxyXbo
u4hhFytS1hzLJQUKy5FIyw0BDqdLK5YB2m847kbA0IdLbxTHg7yUfBzDpQtRu65wZ+f+KhFDLbY0
yApc0Y0W2OF/F8FO5LFgbJaIonbP4jGxFIY5XUCcyJENcM0KkXcYMBjwSOtkM1HknWhSLmWedNKd
CK5F6ZmlJkz28/TANq9zI/Ssc8Vvq85dumOPLghGPB78UgoZpaQDU7hOExXvpPGg83rSuS2XnTln
UgM1o7jMOZAyWVkU3Cxo4GRDOxSXpLOsONAzDE7UjpCV5iwfpLG7M2b1PvDBEQZmARvus8XPsRG3
nJ0TQYdjP2ywcaTpPUitzcRKwonY2YlR4ucr49wLgy78jtgf1ZzcC8WrZaHHmmrgaG7uxo2cw9Wq
VRBuqi4G2F+2wI0d+c+Us9ssBzblELgBO2zCtro68kPrgAb26Bq7DdvG44F84rZkxeEiiOjYuG4E
8Uk4FzX63wiZo3CnTVqbhAHmPb4GemxDAKSRwNsAjFJkuqXk7nJ5CcRx0h0Sw+yzAktimaXJPRSD
X5qOqVof0G7xuaQ4qZcjVpuA3FVMoq5tVy6qBdPZzDRNx3aE1y3+70KVGa+qbXIwkzLgc9EagzAl
SpcyY8vpTB9/zfgCIQh3EuB1kx3J4zV5Te/mbJF8IJNSHbNsloT3HlhvsPBC1u893Adg/5IMbpHJ
JnfDL8p2YTs765joNdElEtXJloXayNI4lFars/M1KWVx20aqLhCuzesX7oCDQ7vzDCBXh39dIBli
tqqMAweWdSohpwW3W6Zle5gtC25Xvvr1mA9e2Vs8nRDuy6avIeCvD9eED04sB4QqwgcfLDeDMggs
Fa9hLwkfnCI75G2ZcyogaLkPFLjaFxeHb14fv/t08frdp+OP7169Ob04en/x7v2ni8+nxxfvP178
9OrjO/j+eHrx6fvjLxeHr95h6oe/fHx1dExvTBnv3354/eb448XHz+8+vX57TO8uLvBKcnFhLizZ
tnm4GXw/WFb8LZ+XhyybwQ6JPM0MAnRLhk3eseNcYSUB7vhiTsVUsm1cZ8d9z4pS8mMzJ7SNqcHJ
0Jj6TzPecbV15ssKWOz+TLQTTDqXS42H14JVFc876Q7fSWHCzdkyjYCNYS9IRFAkclDOY+/6QC4w
0EbR5pphr2FIdqXpDsbGRMfdT+bg0YTFqxWSN1f8NrWfFxcVLyZBqFyqjLsw8Kh6PQ2XQX/PW60i
dcbOqT5j57EVEPqhtVRRfxdayszGPnCnL5WeKBnts1r0W5qLbsSAnTYcV/tsXO3sxCXoFfiSz6qd
3fNxUFi5bl8oBVExzhlqJh3a2/u2pUzrO21FLjIjiPgRVUx4M7wLEXqmOMsPca8Zkg+qvBY5VwZ1
Dy0vMHEY45Ipx1VpUoMKS3JhGQsJXxNeN/g+LEN8IAL4RszIxltYoLZiAWtggUcCBRLNrkUC+2mR
oA4ZJABUQsWXM2VnurxnpkucabF9pst6pis70yVcI4bjbL8cZzs7cXWWhTOdwUwHhVVILQCdb2mC
D7gofNdBbBGmkDLGdodLAsIl9qPGGsKICBDmI59sbgR3FhnM9AKw5d82oD1q1dOcEUOLJhxziepH
II7dHL8nHJm1DxaRE3clS+4sqZT0R8QSQoA9eH1LuKkC+MItJmK7xKVj4GTlfMEUT3SLfaOxJCMO
8cz4LdKDm8EnIoFrejP4RCUKC8y2xSPYrG4Gp16To9cToAHmLz0qJDWUpzbUxnWk11OOKXESrzNm
RWYncA440UOtZiFxD6h8ONImgtqEmEBTdVMqtqw4Hi0f+UTxarblHLCHUAgVIc4sq61nkIVHSgeB
XiHEJocXVnYzTwBpAWwRW6Q4AfPJt9AAYZrLeP8W6HIZiLq5R/xyOcWdjzYZ6iZxwpXieSt9S2sa
kGGTjicTnukH8xqQzUyGGL+/LwFU3Z/X+f2T+jr3U/l6vgD5hbjm3zOZF783VW3w5ny9lhVXkPkP
dLYFG/b6Dbstl/oPlBEChgW8vW9DCEmrMMP7hRZzUWmRPZitBgszf+T5MuPqd0bOQjUHbPteWmeZ
1PPZXkhtYLt8PPitzI6/aq4kK051qX5vYjfgmw3dtie2i6hhDHZdc1VBhnT0YrA7eJoC83KxXU46
MXLSeVNOClqfTQVTE5/OtF5UybffGgFfzq+/xVtW9W26w8eGyGqd1nABoukBU9Pq7JymO1xmZc4/
f3ztbwRRfQyPzmOv9izp7lhuFDeWOzsxlNj7YyXKc8doSd8KKSaC544ohoZ3/gfSwOPOtaiE7qQ7
eicFTZSOnvHOZFkUHXv3BWkVMHIgXpayP3eF5fy6w+W1UKCWJDVmxoxmYFC/heW5FTF3ZrxYTJZF
54YpKeS0GqShdq4Vsgh6lyd3k0QRFYoRQ4JfRk92d0Ej6ShR5DBR5E2iyDxR5O+JIqeJIm8TtSaL
ZEgmQuZH79++K3NuCUb2gHC7nvayQQzSvY2p6PXqYd4793TgQRhr1C/bNAFDaY6yitlIBaTpjiKO
/EJqQWomJFev5aRMNBHzhaFjUE0ikUYLraL6370v1h3OvBQUmOfppARpvsWdNFB30zWLxLGQNPLo
K97PFM+5BGOKKj3QSZqu4TJ69P7tv3qbFZ5W/IAz1NolzdzsPjg3u1vnZtfODXAS9GqlB7LM+afb
Be9SOoILWBB+0QqPRnETF3dfvIg9mWsRB24q5nI0KZbVDLa5LVRdhVSdGCyQoAPeMVB3kFcMFsDt
i7coSQGMRgBJxCAfwCZmbq48K6XcPLwC3pedOaDWDiJNwaikrKr3aG1CNN2c44P7Jzcxoxon2jU5
HxxijbFtzoTrbHb07rQpZd7SGsh6ZA+RheJAZN8vnQ8zak/Ogm5BgJpWtQZiiaJZJEmjr3GtP6UH
Qmo+Ra2xoNt1rO0nKesc2DGvaxbmaqTYnGNQmE8rfVvw9AC6egp9cmXBtMHIZrxRUB3t6r8L2p8o
UrePkWat5TpOTJVo+WPH9+8R/xNFEFlC1b6VGGw00ABYVVmPgTB1xqDkj0xg3NxXaoaogccpNVIn
8+275OY3Q6DW3I6hu2/b3ZVBd//s1P/pwcDLuD44sC1xiA1Xyz+I2NtG5V9FdhyQN6hwcC8G/G8d
EnML9sCoshHCYrIFbSLiv7jkQFUC7kPqQ1mILCimGd8op5XFFiTmbMpPVXbKdTBGdWRzlALgRn7x
G6/a2SFuS24EtZlRjbrOh8FGFgPQXoSAZn9yEf7+gprDgmJBL0IUhCOSAS/ALdADCLtu/Dctw7U1
CLCtwUVlFYRPSjX/yMEetCEnGOQD5e4mjgVxCXwNnhv9pWr7vYtH/pYFJT/ITKjMLcTDNS8wLnpZ
bbnA2Kzfl1XA/DHQ919lZuFVJrimGLGIm9+Li4/Hrw4/XRwd//jp/fs3pxd/efP+u1dvLr5///5v
Fxcv02Vt1fgw6CCb8ezq6PA4VICLY6BX/mDGSAbMpA3x1FpGgSkonZsb2bR5I8sjUEpdRKB9Ogtv
Z+L/v539n7mdsfrm3426HMTUTZKZt0hm3iKZ1+HVyovZwc4SFXYGrEAmgObIZh7DdgyVjWOgUu03
Gvtwqsd5iZn1YFKwadV7PHzxvNeLpIcEI2Of62YmCuRQeL0AzaaU0r0Daa6EvmWV1wkwEKO9Wh8A
mL3iN57jGjd2T57zyWnQfsIDlmg7YxwTx0H1t6dBzme3OZh85OtQGBZezRrN2hv9X9GswjYL5rNL
KW/cikQ0ev48DmZ9Gcx63SpzATMHk9F2cu3fVto4uHByq+G8rtckJ4rq8djZjEqHAFYyhqUavSxz
e2bNdlQOBlqjKLPZiXIjcwd2yHA1F3LJjRkZCEqYEZxQSivzZcQvUD4Gx5WxrcTy3fAWIHzz1apG
tB5XtBpU4hLMndbbRhXMI23zuhR1RxHrJWVgFWzWSW2e3gV7Y9eYpWnMEhtzB7pqxGXzPVpik0yi
Qvtrl7ikS98wmLrM9HXpur69eKBK2X3FV1D/vcW3e/8iNkpysp47GIE23IuhGyXNpl1K9x5CJ4ma
jRx4RAMrfYLmH/Ak0HWdhPir2dSttSerFfzsPrW/z8zv01p1yaiZcTtAvGFvq+kEkb69+MaQwY1E
uPqgBfOWNv10C0erNua4+ON2H9cP2X3cPmz3cfm7dh9fH7b7OH3Y7uPwQbuPm9+1+/j0sN3H8QPJ
F4WooJKj+21D3t9vG3L1sG3Iq3sKvUB1iYsKWC6SwwT8cr8Vyds/bkXyC1iR/PKvWJG82zYDheDS
Xp2AVxGyUD+4Y6uJ216gvqW+WiktUDh/Z305oIJVwdBfCdIf+LuluBZ7ko9b5n+3ViE3dUo7qVHU
/erinf6Ojb908bXijk355FMcJpn443b8G8Agk3bl0pxqUbpuNt+pjt6naHztm2mWpin2sFbDboxT
aiWOFuzUgoEyoF0+98DHO6nXprCZbxK3ARpRu1eVoo1KCV+taAQUWKNkbWcsTQm3Or8nXrSfJkEg
QsI3TuGExIqPEn/yt7qHnEdHMxx8sJop8WqVgqwtTbQp4H2COp1Wuk+408QOre4+RHDts3eVu/XG
tst50z6EnFD57/LfyWuq/i0WOdGc3llF/qQ7IjnTzOjJzLmelbn5ZpmRG6AARHLQo1W84QBB8EAh
wqlg8MCmhHFj96w4OPjx56TkZ4qfE/Nj+MCK9/sB4ffG3ax3dhyYz07qgoyeacmpsMbrpAq+s+C7
qL/r9luht7PmeBNlECRvoooTDr8lJ87tkLuY2PX0wijuj0YJt1hbZnhDs7ojsSWlAXurBcvgOhcf
/JhHPE6GLXtY3O7wgoELAe4ujWya/phH6APp+zzSoLYZGifYFqXV9TRNOA2NddM50zOI3B237ZOH
6zXjUel6yYOxz3kU39lExqPK/GQhyIQbM/jGfcBfFd5EBZRoPeOU9cRJ2wGz3Iz3jV4vao53SP8v
sJ4qpLA4KE2FjYO53UwveEx+mAwaWmJUc3MofSTzwLZs5rS6P3o1G+RUhMRfwIxwu1mlWXY10ErM
o3gwx9Rvf5ZR5z8jpjvxQfxtPP5Igft6NjrH/WsOi2ffZRRgSvx+EqXo1YvpND5IO9E+k6W8nZfL
6mWcJtvA/wsA/2spr2R5I5NhMkxBZGY39/9Idz7u8J05x25OOVi2+H5ecM/Pg7v4lNeSOoA0phWS
YoeBIQiqR6dQ+SfFMj6+J96OWKBcdHfENVdzIWsNVuPaoCx1QzZrpFeei3iP2DZew0m91X1ZJGub
OfINKmF+Q+4qrpN7y1p7DaePfAK2ByGv3EbVBoGmkRvRkSRn5y2UUJSvNwE5OTtHDxhwuYKypNHw
CzJDRm6tDgKzw3Wd5x5EhIyRBF2u2PP4oXidzZoKWjYy9NQBbF9fkNHbU4FiO+LcBlF0ZhOIMr/n
Fu3OcAeHP+fr9VgNHpj/8Bym6QOAqXWB8zvu6aIHayMp7KNpPBYgzcpKORHTJbol6/W2I9TDxX0D
xX3jvcI91Py1U7p9sMQILNcZuA6rKDsboW+vsterDEpltBxUiwK09/8DjdCrIIg3REEVKNHvZ16G
3c3O1PlAyKxY5ryKHmxjPI7Vzg4WNBb7RV1GcSb+RBliZ2eMzA/qHdmtVmBx6ko0OqA+sT8iwqf1
R+PRPlXghIKKXg9a36UUGjCORb9vGldDjFW/T0S/D+KHANZwX4BnuFqBRuMozktQa7XQZPhSrFYN
eGMjBhsmDpgzQEs7THfAbCQl+Blo9oeo2+stg/EJNm00LgSGhC8wTCSNQsAj3trwGesOxpapUfsR
wl2c3Lf7SrsGYSM42HrbSdI0PpjxSMZwUNT2803aB9kTlrbZfWpdnTxz3k3sGMBJac9uQ/08DVLS
N3h1tSl79c0CWRjgDK/XcywLaI+/5nROrFJkGidhvC/rRVhL43JkIYaWGPMNvXANJd2RK2W0kWgv
JAHMlvxDm7Y3Clvhr2Gxp6ncYRqQv7dIWbiTUYPZpTR8HOBF71CcAwlSCo63ixbv2XMugz3fnvOI
Dp0pl6jgKKcd3JDBeM+bHu0Actsd26j+XPLfdcv5FQjRe93RkNNGctNDEjls5q09npCbRkronod8
aiTJ8oYcN2Lu8UBEjhpQG76jyG9h8jZnT+S7EKLpRIq8b5QeuJ4iV816A29W5BUkFeWU/NIcCK6P
RAWfOBhIiZK3xgCZvDO/Af+DNw3gXvHmWf4LpJN3tRXaO+ubwlsHhZwRQL02QPQWyX13YUVDPU7R
E1RW/La3e1B/Jh85eW3ToGNv7Pebd7t1iz/y0Gbj5cuXYESIzh73dpO9UT96DQDfvuGrYbwaYn2/
cbr75Cn5ke4+3R09fky+4/Tx6MXjveHjutgfeUBs9x7vWnOK2vmm9hyaXr/20WQTR85ZkQ3vOn9E
NvzYhJ+78PP2hjZ6ape9L2LPlvHUF/LUljLa9eWMdm1Ju0/sJvpkZD1GjYa71lvU7vDxc+s+avjC
gj0fvXBwT/eeW8C93WdPLeTTJ0/2LOhobzR85pvFe7tPR8+fu2pxQG3Nu493nz93lT9+/uSZ29eH
L56NngQl7L3Y2x09HdoxMjNhm7X3/PnToSvk6bNnz3ZHtpS9vSdPHj/eC4p5uvti9PiJK+fps9Hw
+fNgtGzYHRCPd0fPngUj5yJcR54/3nvy+ImfEB9hfU7tPX3+bPhi5Kv3EbZ854/K1z9s7dSdkFHx
PW+qbvKBZY+8YZJXjrzxuDe01Knx5GpYvjnPEZiAoctCyKkNI1f+hqm5CRkpkuq5/j4be0dYsGYi
SPsnIyZUGq+0q1UkIZoTkNwY47Ef4USP4wS/SvtboasqWkEJypRX9ig0qS6nerAc+6FiMBCBTMNE
G1j4ESAH7DFwoGWMl0SvL4ikutfXhL0ERysgNNvb7fVkDxBp+Ph5fKATUY/0Zx4qTUTNge79M2oP
Z++fjdGMexprrwv8if8Bd20OnZPWEtY74MvMrX234v2q/j+0lP/lpat3nvC9f2vZ9ket1dpana3F
2Fp725daf9Raav1RsNT+wq0PM06/4w75v+P7+3REutF39TYCpHR9MsQk8P7xNx46pdXAmpR0ON4b
vZRGn8J4jQhJKJ/3V4svTcxbgf+gLojkbFeNf5MGKqJ1fICLGPYrmw4DxtVf7X5CWn77GrtKM0gl
+bMVEm7cq7qlgkWAwjdYKjfigFz8yLPymqtbS42E6dWMF4WhrI0BJVfW1UZF6xJRAQVcUreculak
oHwwE3nOpdWQwnubpGXvnzLw3r2ke6P+CWw4JKej/f3luDpbntMhyeCnP8IaJ7Q4W+JNeOIEnFAY
RBqaybj2mISuPbD0BZ1AxkWtsrAYFEzyHu07jN2L17JH/5mvldnTvnD0BjGMCTMRwuxs3EqAh1uw
YEVZ759R2funDjmVX/wBsolXG1sa/ae29sNmPDT4lm7Om8nXGHkwjtyMWtXLbyWBFnixF2yO3zc9
dG/U4eXMjWLHtbt1P2ECJkyNRU+vwFE46JWia/EV1TGBQRXBGv87D+uF06F2Ay57j3cPRsk/sNRI
bhlgHcfmvEqCnvyDh36X3E21xfDuPE84fRxG7CHI04YHy/8L9/N/bQvnFOjNsGt+o+a0Jqg2ef+e
AvLD+0ODiu/RPie7+/zg+T4/4DWtAiR9XcfzZLcu4FG9rb8eLGohHxIhnFp3F/waBTi1PevebjJf
OK5CnAQt4o3HAV5bcwdb7uvBAlS5AgMHiLEmLlqba4piMi+BOx868hpUhch4tBsTqcGKGkXSJ+KS
q0fpjtZE1bFopmxiRR176MxsTAqrU9Co0WYo62jgVMBF3aZUdYoxS7TxWR3/kRvbbptS1Clvmbqy
NQdiLLCkvMt5wTXv8DOpz4kPqDDAwkAZBiodPHmQ6+DqBcXh3au+dwXKUwNgR0kNWjC4aaB2ijwT
+ny1kpAVo1DL3OuUac8RMlr6MrAODlOsq6UclF1aGjDStMtrB4wtWP1GAaeSNNu3XR9tor3CARYJ
Kg5Cnz+ktWOVdkZ75ndvtF2ZZ8+rEmyveaH/VeWgWvNo3FRQ2tsLj6R5Yxozfe6JodXKRNC7WSkM
m+IUDE2qBL2JswWp45HR7hPWJKCkZlgBPyv0OXhWRpGTcbpzyjW50E1/nXY535pfAr876SFb6KXi
KRio1mwzCwrzfwEO/uAspMMx39f+iZCdnXiqByzPIwAwYr1LTT/y6fHXRZT+r7PkVf8fF6z/288/
L4fDw2Eff4+emp/nJnhigicmuHtyAj97zwzw3rMj83MCwdEJpu4Oh4d983uEPwZ4d/QcUw+HJnhy
DMG94XAEwaNnmPfkhUk9OTrE4NGJCZ6cHJ3/f6u5P//cHwz7L7A13z3Daoe2FU9NtXsnptrHw/P/
fARqXOhQ9bSJEoc6OHMurQzsFATc8JqCi/hqIkbJpR5oXkGeg1PEiu4wib7aL2Di1hh0owPnL4fo
Vwl3DbuxAKd1Xl7zV1orcbnUhgIDcVvTA6O0ovXalWBi3RhaBpv1BIgaTmmytVjL0zX+A60HwsTQ
VuBh8k15w9Uhq3jkTqYheYIeotDLB2hm9J3LD/Dm2k+Bwry3nvUauX1BCknTHRk+nfEpHJv/3UPS
7PZDDf/ddh9rd6Wyurb3tlxubbn67225vKfl707haQRovQpbf6QD8tXJWbe5lfRVNv1KbnicDLrh
VdYaLid97AMCivfNMwhc7jq+DDW6+CiowgtRiKqgiSXkYqnRKBRCaLdxWX5NzWGVKpaLMg2W5JVu
cth+T7DLQ7e8gZjfvB/SbUsuIm095jhnMt5hyZTrJgvdp1R8i9c48Ko75ZqA5Lbi/t6yXVwMPboL
5crgPW7a1D+wBQjr2mcmwCtaQ0eBg5I4OJ4lrAYCHv06Jg/UGzyypRrveuHTYMZP0haXWVh5K9W3
YE0qXS5AtAiykjA7H1yg2BvTwKcyPjXm6Ed9Dr7l/WS/clRVt5XNIRsi3oHBGkDhFIHScbsWizXQ
tDN9Hi6oX+oqYueSfOz9MIaFWHMBC+TUXBD1jOMTMBBKU39l6fUiZRvIB7aFB6lWS54m6YQVFYf9
AGsAnSyF1xkJJ1SkB25s8UmikCP01hOaq5WzCXY6Y/gEkws4+7f6ktRQgm16/AcxpHNJBQLfyzK/
taIdD4RxRhlX02/Pfpbf/Pzzeegm+YNuvIfmRNfv9BYHe+nPP4NUER5SPCxz/kpHw+B+NXoa76Sd
dB30+0SHnDB8Ne/OCKZBHOrdx7qHhrrblirE2n25Eef2ygOzd9Fyyz6dQkqKJiIoeS7R3nB5ORew
eWFIgQ1gCsO3kdmgZZwAA91txge44yGXyLhLBrVUyI2hLjW6fzYtTXeOkP5IfLqP2wbm2+ne4FNu
hB5o3RsY45IcaWDlByFtuPgmP/Oeer0frkOD3LTbZTERQbrFehq8bLh1YkQ9MTGpWnNZbc1SbZnL
qjmXFjlgRKp425QarZ4ax15vwTGwsWk1iG1tENvSIBY0CAcE0YuhzYW/tHqzny7UFCAVC5HKuYCL
73BTdESD9I8spqDAt4NzB6qfbvoThxKkMkeqRRVUpHVuuomfSqvguFYHB1SASZM95LZ2WYVd7nbB
+6Sb8are8xKTsoEr6r9p1eLA4lyXMcHBCfR/PbWgafhUDeyig/JGcnVkt0ugRVDXpTEQuMgkjlUj
3hCVtey6SVMC0VOic9QKXWA0nhSlw7HYl+4CCs6B9Rm4qZdn4hxuIJblPRzL2u00yCIE1W1aBb3b
n8lzf4jAd8UL9DpqxWyNOCpiIlBFz8TbPp26ZDhpvP2WpAE+GScb2HYeth27C2pebgsDzjWEq7pM
YuoTW+tziKw9H8dAWuHCagUGg6Bqtdaht7cqbHI9Eb+FlxLdrW0O/SqAUiziB/sm8J6pW2DNuTYa
R20ECC8cjYQty7Fu3ndNPNGhzV+wEcjuNivEF7sx0qwcxap3aFSsnGpcC3QPDMyoghdIJVVreXAA
p6SmsGGYcWg3m4CwGmwvDs37wij3lfbGaG+Ofl83g6Y2ltuPujb1r6UFE6Eqje5r8T3TXk/iNlQw
GwsMO6cWjwyvOxO2Ix1cSYP2WZ397z2jKEqZFHMUJr1GwyJRSpRBdVgFfng/QkznslQ5V6/B2cH7
pa64DmNO4eIcRvwEjzR3LsuvJwX/6n7/osrlAgLvVQ5MYxPOymI5txWa76ozgVwTk+UGPz64l9gg
cDpTQl7h5zs+ZT7+PdTfmSqRv1Kc4cfH8sb9HsvcfZ4umPTf4MURA4dYe/DpcpiQz2SDmA88Lv3E
8UHpAhQ0CzZf4Nf3JrJcsEzo2w4OTadUixmTVQcfre5odgl+Izo3Ii9vqs5v+LhV57eynHfgkYb3
Nis8D5e7ANwO6m9VXvEjVs2Mn/Y6XE4mMEMm4i2YixViLlxEM7+Zqrflb6/uwYK35W/f2YmsP83c
vS1/e+N7Pa/uK2FeYe559Q/omwnhzJpPP4cmaGbRfPtpN0E78fPqL/V0hQGcIhPxEYv/SzDfP/HL
K6Hva6NJdR39iV/+zYdMXz1AA3tN7GGAw2FMZUOuTPuJfa+DvpN1lO2oifBDnDr1404aB1Y0n1s3
e10bK/T7KYryxtK75LFspOA9jtVKGssudYCslPpKT9I0Ruen6aQomQbaMKuqE/imaZrAlRB+N/PJ
2LkJkV1PPZh6hqvV93ggRzo+uKdsaYqOkFqwJh4mSu6ki6+BFu1PW88t56KktqZs7fNP3ZGAdiS3
BSrkmGPEPxMNPnNl3JVt4kHFnqgEBypbUiO1OQOtIVI4tOqBoVUwtLXzCuPDOlboUJpsVMviXk+e
MdCvVr0eYgQDV2ZoqOQ9SJsyNjLDuyGfzaVFn5Xnwbn0F39pDnqEHeqP6lt/yxCKSVkan3f9r3PH
ycvKolR9aznsOH+l1P0JyzbC/UplG3FLJTbi8HlpvRGN9xMTORcVOI7vT4vbxcwx5bptBZnu0FzQ
/2ZOxbdsEZ2dpSwDV/2HM6bgKkFsuJ/ZiHNyls70vDiBxwzgfS0boxfHvy7FdUrwu88xAEmBR52U
mFBpQpAKpUttzg1bmdT9mQkjQCGm6BLkO1ZxOGMAysX1L10kgip2KTJwYwMwGMCxwkQHeToTE6jJ
hfsVRmBL2cI3JGOLsBVZIRYfwKyN4Gd/Ad8u4eOy4C5BwTcmwNS/Bp2WRVkw8/SBxQfRiN0OfCJA
clltz9Of2FSf15oBe3CHch7gIyqd43NNFkT5GADKy7mQrDHKLqo5yFwCpf0dy66mCp5uSYmN6l/W
cQAYnOaAKKIo+pYu8Ml24DDNDxye/IfQREiCQB8bXCcGpWJyo9hS6hM2FwUmm7WBIZcIxIdLquA7
THiV/7KsdJjcZybKQ2kFPrw8iA3WybdFXTwGXNKPIEiRvvBrG3TJPznMw9SbGvVwDQNDPCXm2yx0
n/ReCedt8/tSid9AUaDwsGWd2p/Vydty/wjOhrN78l67RFztUNCr/PrvsNrhu8/y6/7XOs0s9zrZ
LHgLgb7DQnzEiBY+Flxrrk5hZhHGhPuVjUAQGCIhpw5XXDhAlzkqLhwjlprvPrfoaYJvRZA0F2ES
krp1Ivo9x2RQZ4PlYCgYXNcuqr9wcSHgp5nIriSvqhBS+0gAXYBZAtKAKTGBPhLPNlGWFe+PMMl+
YnyJu4JRAIFEE+5zEwEgflBf4zUoJXUMbikWAasZWzSmBCNaUwJUuBtr+A7GOSDQXWK4KEGEdMWB
GFlOZ8GwNeKbY9dICgewmac5iq27gYEur3g/91FNMHNlaMLZuBoQKNGMLWqowkY0QeARqiYMxtRA
9ZWkBpvXcTVgOJII1RpLd3+pAW4wCMlw530lsxnOEgT6zIRc4hHPSuXOIwTI6xgHFKICwjQxAX2y
wMnqj3Uf0w/OdhAWtleKj2tOt48Op7qGbU7zUgpwVfadyAVCYah/CcEg+SOTUx6kKwxbAF194Op4
bpJ11V/AsjGEwvWrYjFjl1yLLCXpdZ/VQUz+nsmpGZnr/sx+Y8LrnJdTxRYzm1EEYQQA9TAO9zCz
yV7352EEgnCQOxpv7QCBwT43YQOg9Kv8+gsmKo377q1PqbddTGzsunX6l1a6yX9TqrzebiHU2Gxv
lIC9FR2KEBfqo7scSP46L2T190LIq5SYQPIVQ5joqaqvnqY6j8mvmn77v85AmwPUOJbD4eikc/6f
v5z9rH6WP+vz/2T+63pLXOW/Mv+l/JfwXwv/pf1X8q2oL5J/DeVQv1ptDxD9xQfpL+yaGdmwfRsS
6GRznfqfxv3djFWdSzDy4nmHdQL4zuePb8xzdxXPlmCq1QE/uWwJlQ7+Z5yGWodftPMo/nfdMs36
R0NMhjpbaspR7FapzAvhjKYjsNRLpXi1KFEZ+HPlxHTWMcQ9qcDgC3lqB6EKW2Ls+n+wbN1H7Rby
8OVwlDbArRQr1LXSWOw5fKAdaJ3hMP9EZQhKjJdVe7EyEn9wV4FCPWnfN5QNjuRm0IoT6oRDH4ES
fYlCAGRW45eNr7UI0Pakvh2D9z8ZKh7GkjbCBkgOfl1ydWt41qV6VRSR6cEZyhy+SXc+IHbpeCf9
5vwMq/wGK/zmHOWFw7Gu+f3aaZkrKs+MRiRwVsFuHlwbzZEzCh/OkZwKBhdkRKzN6h3G8fhER4q4
dyJZc+A2gm4cWXscmRlHZsZxjc7ttjTftJy02tvr/aIjFRvPdB1mdEjgpGGKszT57f6ZtqbKLo/h
7Kfg2NuCey4Film6XTmYLwstFgWwTEBfy6rryoabChk+3KVl7cwc4sYAPGwIwcHrqlMCxhxgLh39
UMslHnlHab1edL2MYvKDRtnCD6BW+EjDOnJLikvkscfmIVEziDwcRFhiLU0EJZtK9rV2ZqhgFcrw
HR41MERtg5RUAbb51antUizlYSGyK8tksCGnTOkij8rlZcGbgEFcG/xtCU/ClDdyM2Yr6NvyekvM
VtDPi3Z4K9gxEM0pWLB1lZckAUOLW+0komjXPDVwudS6BN4hr3WRbMAiog15VIbXiGlXeaSt9eG7
I3y6qu1rTNZeNRpubJvreHdvRDTx2nG1f0DEbSZpt/mWpfGi615/tELM4Nm2Vkrr1TGvEkJKaZ8t
ZjJ2FuYVPva0XWWokuQbeMNOXIMHi5aOEhQ2BHUjWzvLc7zLONX1KIWzOCWVJJX0UEYu/wCg1UTB
puJwZMb8nRT2dylbJ1huXRIv/bpfSlwu4BapAJVupwIMsn5qNSCE7GTyILP7TpLJhkCMUeFWsNEo
B01imFzQHKVUnPFz1Ce2b6fJvjlBFB2N1T4tAVD2lQFlfXU+VgDsm0eFVdzkZLSvDkZ95d44CLTM
Zahnd8VvQXfGPXXudGmgG/zAen00UcaQutcz+uZ4kI/2QJeEGiOK0dDFkb3dfZSDI+QBD01nFrX6
VzeIngfRo0CrG9vqgzoKzNianNyZqAbGLAHduWhiYgxZ9FpW8K4lRuHZKs23RFmLeSVK2GTMQJkJ
WY9Nn0yk2ZVjvo1njBLm8hyznZXnVB/oSMSJAB6y13WHIkV15B6ewxs5z2kk6sfoXJwRAHdHMNPW
F4PRk9uEjQ8WMpnbLokKmsWmzHjiLhcLnlOb6HT/51HgdYHcLUxBtllNd0Wi2myaVVvjtD2GYyMN
b5Z30I6IvDyEhx3rwivp6EjKKGMESbQ7isl9g7cAT+XAWwj6Hfbhwaa28h1sxISNNS4mvsOHetut
DdNAneCBycAGL8AvetUY7DURcP2scPfSyULis7NoyCDpHXb3w4xVPBkS91hw463gIdFiDu5Y5ott
b6PygU9erY6YBtL+Bpy0t+c3GRJRfVLLCr/X5ELSmYymMibXks7hjdGpJHfXgt8kQ5JzzUSRDNcx
uUW4axmTS0m+SnIqyaHNcC3JXZUpzuXfkyExX1+g9eh88+/+C+IWbMr/bn8RRqvib/wW8gFL3nyy
wn7MuWbma8rBowS4DVfoAS75IIk5mHHA4AMGTPECHEKbFb19nBogtXUYH0xUOa8Pv/CmBUp/pf1O
GoBJq7w1gXNqjt3eotHoE80GzAc1dARaJKfgow7+cH8vAXc+ePilB9El0nxmpPun0n2Sr3X8lzr+
S5x8lfRS0iE5lZTDxMV1+7481L4v7fZ9Sb5KPLQRCw5lTD7hF87/oSR3YD2AbwRMuAJ8iclxDQAI
0pwZhDiqIQDnvG4GbPHJkPCCLSqeg9kvIEzFl7mfBMz/vpkfRDGXJVP5EfiY3NK7BoDrYTOXJTca
kWuo66pZF7qxxEa8kvTuuMqS9LjK2IKnBPgp/JKpJO2k5A2f6CR9pVR5A58p+bywwc+LlHwEtogN
fzTcEiCBbQzSx+SIF+D+C5SfU/KTkEn6/jQlb7lcJs4VKgRS8mqxqFpRp5kq4fUu8/umzK5S8rb8
7YMSEi2uYGmln6XAd5PAI3+6Jr9Ievc8SUHWg14hU/IiST+xy5SMdpP0sOBMpWS0l6SGgiajp0lq
xWujZ6Z+VRYpGT1P0lcFxL5I0g9sWfGU7A4TMMOqTEt2n9WDtreLw7W3B7BTIOLJ3mPzbYZh7wnU
mKdk72mSfl+CYGTvWWNk954HI7v3ojmsj4eNQX38JEnNQ4spefy0Ht8R9PFkBB97SXqyCx+Pk/Rk
Dz6eJOnJY/h4mqQnT+DjWZKePIWP50l68gw+XiTpyXMYqmGSnryAjxEUOIQvLBrK3oWyR1D448dJ
+m45N+MxglaFU7W7+zhJ33LN0jV5K+ndq0InqdkbU2IHOkntDgo4oVmS2i0zJTgpSeq21TSwhnoX
0IgbR6f3r9/ecg82o8DFaMTpWwmGcQfdLtC5SUjhfQjMAd6Ze8pJc1+At+Zab6cj2era9wp8AV7x
WzCXDF68pk289Raj6/o8tBvoFb9dKOAiA72L1DGxlKtF4cRolOO2fmip4QgthMMyckAcaEMQt1yk
B7/Y9kEucL7ZaBa4QSPAiE6GpCgzQ7388UNP8QVn2uZFGmDbMego+HvIgo1hwDGAo9+2+nfz3dd1
328o7GYmstmfa8KfrgT229fNc8eKv14DXYMCkWRIDLsZzgyobamQeAJBAL4O9yGIFAWSJ/ALxIi+
AaJtSGyhwBhFcumDEnOmbs2G/6aJv7pcZjMk1szd4pMPZyAo4HkdsWWGt2LClkmGij82j6CFvZ/8
0dPyt9aBzQvNthIpJsWdjxYuvZlxXhwFSX0+COIABRD0y71FfmkU+SUs8suWIhsAW9J9jf9AQrXQ
7K3Bkjgm3zWHSvIbM5BDUha5/QS4HyU9e0FGe2T3GdnbPSffS8pkr5ei90kjqcJNEaq3zPbPlo+A
cI518tbeqV2414s+S+oZKyGYufv/ZCv6xL/qVg29XvezJH8xAFH3e7lafZa93vN9+DsavaSfZUz+
Jimcl782+Zl/ldv8E9mV5Kz0fpRewUm7tQXvo1j3PH4tesc/Dghc1uy+8EBmKVvVIyBS85qfNymz
ZVUuvWlgt+0Rqxu66fkiW9IOc+0gmz7nYcgD2s07EzdSlOZg/GP7YGT11IJWgOvlF+DGtvvmRwA3
N/Q2dRDBmA/J32RsXuj0TOzXRmThu6GxeXjW/E32er9K+0xA2zeYeUe+9o5RP4X295ojjXaPzZav
Vt3vZa9n5xwON+BoAZ+rkNRxv3BMCLdtbQ3FglWap2E72gNgXuwa2F0KXznEPQy+7CYGKoIOAF9Z
QwD7PiIcTb3eaN98OUV0P6wQiee5GWCXsO08diDrjdbeM6F/AbbbwBycQC5clal90R7nZfssABo9
kvQOlRzAwBI8DLlfuGDD9zcu0MfSv4E4Pod7cndI5qXUM/gwmqDwBaxQEK3CN8qj4aPiTGUIqHlh
fr5q/LW1LBVG33B+lXSHAfEGb2XX3gp7te1s+N20oQ3fJbIM7INu9xFQLrDGzo3iq2df18ioVW2M
8IM+eAT/jL8rFSePND1T58kPyHujn8DdOogH8NRLYzL0LhTw6SsQol7IqIYgaWY/jE9nokAgiYUb
dkgiSeH8mSR6HRvPC9LagyrV4ucKMy55xEnID2XKUpW/6Aj9YMTxpkuaUjVfF7Ytq6lKZHmrmg1u
nCarMFQompbSjG5wFKBErrDWqEtFt3PbozQX12k8XqqmbbovEXR40LofvDN7m6ulGliA0Lp4nSla
KKMQm2GjK0UzsLDpbj2SVqsX+9vPqsBRCzx/LaEMqXB/zmZ4bkELHSXi5nOiYpweM0Mhb1p5Cj+k
XmDEDXcdHkaOlIodfp+dj7WKNFGKcIJC8ZhIGQkFTjwCrrPyHrHM29DZshIyPYig1UQqqrE9RKoB
07/XdGB5u0JKNDuHUgJetqrfjXESIFFKW4IVBZkjtw7g2ejQyfQxYIO3sQ/FaAF06LFk2gJuyKNa
eNvKeqGaj0hSa7bURVX10bec0tG3Ol6tuBE3wzXLoP61xzgr8RFV4xkeH5tcBK/+3NZNvTaftWV0
8KRM8yEgr7evG/G6aXktnVH/Fb+FV/GIakQYy30nksYnyBpnD9AJKHcBj+Zecq2c4F2AwBQF713n
GkQTEa9WXejHmTgnGszNfGHrTYnHpXJuA8e4MQcGTjFvGjxtbkdfVSjmxaLGIEvyCvvOAVLbKApl
u3ynIZRyQiy+D7OtXlI3lHcSH50nRvct0X2+HnOq1iwx7a7r4F/1qXnrC4z3GxFOxrluKkaspeWr
rrH9De8apy007PX0AeIiuGLh4cuMqJXSHSU6fOEcI00ZQYVxktpH6SvP2bPhSMNVE8gEpriz5XTa
aQfdbnRvIhhOj57GSXfUYGoc4txyymt76Yad6D3RXqNB8BsDcvAAhGVFjmvPk2iQ6rbneKw7Avw+
y8yIL77/9PbNa3SWb4+Uce0OXNYvg2cGKX4yfE7HkxjMFJ/UjzBYYaq04moZAzXbyGmehTHe3tot
W286wrz5N2gW5/bDOwGpWQT4DlTIMzBUVSNK86IRXqpm2FFnaWzdiXgyCKBsp49zgQxTTAfvDIYW
+aTo71wD4b629Wglx5aOObK/7+3vlWrcYl6ppsWTHBi8QD8Q0heZNHaCF/ByaBO1xldqtTpWTlHl
GDSK3mprw0OPFalPMqMDLWRH9Xo3KlLxgaJ3qAmdqEETinCZh5HHMl+DTkWkmrWD6tK9mO4UEWJg
L566otBVxp3RY0WFNDWoA8R8vjc7l0sxQYInt83iv02szxCEwPOJ6vVuVfReERyP94oqooCiPVJA
0po2IUmrapJWBySthXCDaElamLYWSasDklaBBNBJpI9VHDpU+6VxAtytvarHWWuZnLddOxF5lhpj
unSHn9P0xn5rSHhb/mZi5/ChieHIvsWBtsIXmNFfVJR668GU1N/AgY+JhxXOsPD+HN72MMxnkOne
PAYBY1K/AqmWpor6FeqUBIGPS9kAr8u/J8NmDUbS+lCeQ4RoZHJjdU8OHK01eafAIdkH+Itco+jD
79wCrJ1eMOxNDtFqFVlvOG8B9euJqwNkC4CfrYfBcPDqYNzoUbshdf7GqAShwHrzxFHO7xTIC5xY
AAJIa70No7n1sIORRBpNS2PVhxyDlpKGBKtASP6gGgVTfSbPaxILynyt6IkKTME5IvWbVqwIEPdj
K62y6PObiW/gaRqT79rRDv7HdkLmcOr7dopp1GfljPTIT4qm7LJUusOWX1GprnPJJ6Xin8rptOAd
UxT8fCjYrfv9ZEwmOnil6GRFCVfCWkTYycrFbSdb6k6u2BT/gCW4+dVcma+vwqS/4eya49f7a5tm
TMNzVS46+dIaGeMdpMPnCw1vfHOZqduFxq8c/prnREr9wTDZrXZeB4/3jpDXrBB554rfgqQOfpFf
Dx+fFx14HBH/cJTM2k8QfOUuaFpUlFW7grnTMDRfoEBovt4vtf2AXs2N0mAHmWOdBQguO/DODf6B
508WrlgcbxvCcu03lmy/oWz3CaXbbyhflVPsGbxgbccMHbnAX7CVrzgH/XL4sa+uFAWE0fVLx/ox
7gC7yDjC7qAkwjYLv2Eq8cOMyTUYaruqKpQzdrRBHoTCdt8wVPLvIJ89tMIe/6TMSZaarLi51Wv7
L/bA+owMDON38xoUurzLzL/VnmI4PNqLWo2NW2QQ3xYJNvQaQ35wI2GAeY3C14a3NXNebwBGKWJk
Su6c2k23oXcDPD3zyk2yjR/Ng6fMLFxNRx9YX1U+KU5cTEyw2oSvjZM5p4spqgXQ3qZp/sJseDn1
OCxUmfGq2jIQNmXA56I1BmFKlC5lxpbTmT7+Coa+eHLVHoPAHV5ZWF/u4L2D/KrA8f1fFR2SL3Br
rt1vA1/I3VE4/SuwAr8oCpCgzzx2JMyvqFwMf3d2jHN1q5p8T4K4L4HZBDGJwjRSOx8R/j10o2Wp
nJf0ceneYRV4haUiiexXiT+ktPEx8ZmoWFuH7VxEEnUTg7vsPwIG6a/q7K8K2sOJ/9T1p6w/Ffmi
VuDNDZ3GV/gZvjpPeOhJxcEE5OEPQbX2bAtaQrRouFx51LxwI6R/Rw8Waguei9rBvK1cjt1jJfWT
9IG7F+Xh4sCLUXeEb5ZYxiXzbpXtU+/WMTy4lQleuieNYhuAMZgfsCk4Kt5FZVQWmI9w6p0DDS6u
RSUuRSH0bW+0WkUCdPZA7M8Io8w1qJZPY5l7BxELVerBC1LgT0jU/umh4sYTBOAYB7hCTq/+AEL0
TJ8nds+EMcYhonLln7SICTNymYDfLux+92S4Xyyt+nexpEOyXBo0rx+IfxLHAXPAD7P2w4xqsnXC
RneDvtZCNCkafnOVqBHNKtBOwRs6fF7xW6dpa1+CN8okOGfm09Rpvn1ltFbUxS/7vjveXQ1GonIl
yCjpkNhyJqB5JJcLV+4kALUrFX2oO9XgnKObf5kJXpk8jQdkTdQSp++HJV/yJowpqq4BTN6chnG1
vNSK85OCTW3JE/wcuooLjjRfkL3GYpOhsG9qYMBjPm3ighAbaxwOsGBGAiGHaElQa/3fLr7A2uUD
UX00PuXtw4pB9lI0zUqCNe6eUrCIHUkK7QI0IPBqxBW/JRyHJyayMZM8DDk7K+7MsGpkCFecDAaD
Ex4OTZzAk6XNiW4X6uZBNudoiMZE4azEHpib397TJ8PR6Nlol8hwsngQINJOm90THaQDIrKFPbwZ
DtINBraeNCaygY48DOEyDjEaexQiuJsflHDeYQMTbRtqWM2G6E/0IAyuYazs2uXui1gFAWo9oRCJ
6w02kon5dmuRBwEia3yqhHv3xowutcP7ePwHMCwcdHx3xgw7vsWNA2709NtzzLct3tYYu8hwoG1U
YzhdDR5JEWmSZtNCTPGttEhSt9Uix5bmtjaKjfa30GejKy30afWqgT6W22mNIMFqroFM/L8JmRrv
JmV+nwI3mWZvqejQmJ/xULejplFxG+v1ooqO7MPjgZgoeCO4op8nQMOQ+sHv+GD3qRHcgZ8aJw+b
cZa7b/BNmx7sPkuemKJrM1T7wstVrbshRLQ3IpJowoCDF+5rV36uS2LcYHduXcZCRHbCFZfoHdTq
lHQuk4o+J2xFdxtPxnxtVAnbD1S52m1X+nWz0k/NrHvbW/tpM+NxM+OL7RmPGxmD5+O3XoJi/7Tr
o0cGwI7pYVLR0bBhvdk5TSr6ohl1A2CjZtwRxD1uxr2HuKfEiv6d6Kmiuy+IfU0cSKO9oacGD1L4
m/qrG/iiim1+L6eAcajcMOjmKWbNkuHw9+MRCDaKzUMah/UZgcee0MS6cC9u1bmWnsAO8zwl3FPk
W7PlopaiwNQ9D6j4YS0wCQ/XsK2Tdq1YymO3Vynu9+Cz86SOtKe8J2GhUWEdd5l7pea1nJSJl7uZ
MLFn9qEtLTFeQucLM8iGe8wHzYi1tYxZCLyz/8TZ1Vu2qKnSuah9SG5FR0vJLASIFIK32WRt7xFp
ah/X5sQ8gZPAgznwtO0tGvqShahZGTpO3PPHD+fCds8E3Jan8GjjhTDb+zUEbjH+Ej6/2vhTQUfk
UIBT8FpaZrs3E2dTAffFa0H894WAMjkUGMztJz+3t+LsEgFPBfHfh8H3VwGVc3uhOxVjTg+FvXPv
7cIVR8X90Vj16D+j0f6+iIncoSN79zYAOt4RsJHvDff9g3OiL/6fJ2NGI9WDbGXcH4WvIe3GRL18
SUsi+rTEXu/v14Wt5P6+WCkYCLbDDbfDwLAgKVgKx7gU3N2mvqXh0I1iguMxIsNQpnIkapE8pfRC
jOMLQWfirN+finMzwud+trbFj33mr2IcfxX0FoAuxbkZXZv58J740+3xwRMJdt7/yBSegq9fkUNl
egD+hSZFeYMTixj42QoTLZb9BHfxVzbwC97M/+L3yyejF6GPxbc4TObq+UZEcxE5wMej52S0z9QU
RReVF4X5mLPRefAsQhh9YGS1SQpi6tTswqDM85e69+9EaLgaXApqg+wWjeT0GTW8pgR7HVi5U0Xc
wyG5YEU5TZNHUWoZ7bCUIQR8cAgEZ3EqJqr2pedetsAAn1+CLv+jKAUGczvfNbh8sZBsCU4kkto9
8zQP/TM/iqb5mTxvFWD2ESzfsiJbDZu7hzjQZ5b9RkcrjTzkngYabdoKgQ2/d6MGo7r6CLxWIP8d
i3sN7FtlHSyoposI5V1EqLaLCGVnyzjYAPfNYV+t54ZmVSFE7Q+i1Zzvfqc55nyJwZlxfXYFVvWW
eGxY2ntn30GcfSIF1FpDX8LOzXd3SEGdqFouUEf2+9vciD1+YkoKOV2tfsmjRk4i44NIDRblApap
9zf9KEqN/KaeEtKYIOBBltLYA7lcjxz3HcHr9GOZb4CABMlBobyodnU9KCUKhOgXONqAOZZo2BP0
agWrv/maxAe/bX6umUmfx47k+wy8AEvtPUnc+/X2icIE95rwYaLO7jMLhGlDl+YozM/088A5c64F
h44tBnzRz7UOFzDOf3LiPmwn7HTwQNM4eOyMSACEl+G6lO4Zpt7uM7hnQBy8ghajhqrjI9AueNcG
DUA1T3s9/LY+IOLV6nNuFVDaNzZQTaRdCS9U9q5Er4f7KDGtMkb13vF76+ZGeePGBdexGaIVz0mX
t5xA7I2exfH4StAlvkLnb0n4PNz/thrM63BANF0J8g83BKh1XkxIMfHHDY+TK0E1/v18kE2iYCtv
KJIZjfRNxbnXIorvIHN9cgWP8XqL71fCMzTr0/9L4br5paA8+VIg93XAFoviNvoCxv3uEGxcVd8g
er0SLvMrQcGO7ZVwT/vikfpRUMEjk/k3e5R+J1pKyD96OuxN9FEQPbiw91PjxqYdQQOmyfeWpGkC
fBTuhksYjz6KYGF+9nUZsqR+tnCTVw8LIORemKet9cE9zPaejq1P+yYLXreYIPB07L38eh0bSzsZ
m+2d++0jWNo/BRcoQ2La8pHWYnXZjm1PeRyIEizxyRocDOht2RACVdTKHMYlLRtMizHD03pcNovM
aDkuKfMM9oIOx0X9JmABjy1MomxgZekwlmfFeXxXekEIyWgZSDWyuidZLSwhn0VU2o4RCfipVqvI
Min9/bakGS6dtV/tTg4yeo4rvvJCDXzMfcvDAHuPR3E8rurWlTTgPJOybl3ZbF1lmmWaZOqvBxOq
duPsmf1s7D0xV5SNq8ZrmtA8eJwsuMCDhiGjXoZAmJ85P+VV3TtmM1U+cs1oFb75HSAUr6l2g1ua
lHAesUabuqV5wsUyK80DunEJh1M93ibNPLQb1+128zCs8ayx6O6bjufPjFdu6EaTz1c1EDejxuPW
+FpFrMH/toSQ/TWei5z0iZ5lcIPH3SuL4wBvKKVFzTNzuFMjwoPtbclQmqEupeyhdBTY1Q38YeJb
+MMkjte1XG5db+g/iUgDUwRlmmYKVtTMQXAmePqk1qu2a7v5kisqb7sV29xmg7PcbNS1ojq+TgeL
b9N9za9Y829wG7cHAeFtRn1Dkhs2rm0b8ddQhPN3Ef0mSCiT/SIaMtzf3GHV62EryN9NevAudkOm
0+qvef/1LnN8XNLofSIJ9NgIBaFrwRsk/B4EGT6P4/F3Atn0DW6y5R8PW5zjNeFuQs2CMzj6naDf
WZG8brq3+odw6iOvQAvKmr8XXOGLZq24TQ8xZ+fE2rpXYipZQe9QmQqeHhqRtg+qOrt7Zh3wFJTY
x0ZkB1lp6ElnYEsD6hOd3R2zbBZts4aO4nW8XpMf4N6+lObl24sqm/F8WfBDVhTgUZs8aiS/A9/v
xQclSnApSTijd47PmhyCJ4AKXuQzrLUPqoQbqQ01Zn1L1K6N0zPFWY7POiShsZlm3n4fscUOL3Dl
/iGIsb+0CmogCrL5ayyUzPFpTGK/T+qAcTj1g4geCdJ4/q+uyYwrjhkSNcy+MsTokDD4U7IWBVYx
zxtUjIZ7qaSKgUWRy7zMoxjyg26zXlZJarfXlBgOn30cT8+4bD5f6MnCtWMhC7azA5ziGZdRxkgG
fORAFMKMp7F+XzDTZ1UfcmVA45RGoWFZgVCkAA/p4NrAumNSbOy63+y51wHY8CAYDQl6EIxClZWC
hRvDGWgt3DcCRrGGs6q0fNuHxiJQMIBhCJ+D3NIrd5On9Rvf1lta+O5yNCToWgL5sWG9aL3ji1X8
F3zpCUo1zQXx8QPFOa9pMVGIV0tGTwan45PBab2qcZB+KOgnUKp29hMNjav69Q3scvPpT4uHZFnP
79JErXFCc+avEzXyTpjfsHLmjunwgXs8Pk+KwQIeNMkPWTbjoUvZhZ1bL8J7E+WM1EXFCUZozB/a
tNX1QhM2ajSSQGNtk3DWOjyhsIRb1jfzfMXHT0HpZhpEPHscx+SijnjyeDeOyTWjd03Eiu/WwR50
y1rKDWbaiTHT8xhlxXweFwJbLOYuSpZngW+6nxMZen+yejqJtBcfu5q/aGKYJPDEma3ZshfrqmtD
ccRpw8jyDbFehMGGxiAnuWGoALhFrOaqCISdjYaY14bxHD4pAuJiNBzu80E140VxajRDcYflqnVO
P34Oz8GgTz+/evyib69cq3rpm1SDerJiLLetbesdkfJ1c9X+idLqJS39kl6v47Vj+f43T8XaJJzC
FWHGgt3yKyKfM6TCB1+FFLWXnIgPLhbsFviu1gdlzT3/PX3R9qZxEJ0yysmMxW41nbZPt0N7lJyy
7XTY4yfAyzcr+ZS5VtpiQp4H9tsRdDNmFs8F20CXPWt2/ckWccxC7c8jVvPsj311x2yHjsgn5knU
6BMcvDG5ZNEnRpp06nu/ZaHXwgUqdxkigQbu2YzpfvDGs8tmRtrLnSml0wO/v+w+idFBkbUN9VpR
XjBljTtjUjO/zL5yZmbM2ruepwd2Cjs3Qs9AG73q3KU7TZvTAfj+j1LSSeOddJ0mvGHS84ptOrs0
M1C/ZuV1QsZelTAKYikKDxzdDJaJqiZNa5orco8HdpuOZpHRofydSCMcUcDNtsacoTOEWgfQHbi1
FjVIY+vLFQqIXXu1EZpa1SEeJy4CVcVivCG1qgumlbUslK1mGuFeH9Dn3kDpMmoK4u3jYKBcexDB
6AY6psHo2tF8+mw0fP786VN40CuCMTEdUPvyHiCwFK9TRsPHz588g4RADSpqWrkG+mzBM5WtopuU
44Z2gfZqrmA6Nu1S+hS4skvQTTaKeOay7JhlILmONGWIbc34gCRs8uCE1RRy8wMXwNuD3ADZReol
LIpIdNeVNN7eDHUoKBXeqFuEe6Ho9US4cN/3el9ZJJAz6fjLtumm1pi839YR6GAGqjdWDxAwzeYg
TrfKDsz7hwdi+QfG+zF81jzthrYDDEEzpgncVHNA6GYUdHjyR+bST8BqBTvrPf3J68eKH+gR8vWL
sFYi/jQOTUJX6jW1XEvduubt6iDNP5YXxFnpm/e8AZgNnvNd01oNGDdrq2lzT+vptkrShXf5Akij
rU6c0XHZgjQSkUbCJiTriq0w69qTGzBr9zbS6i552K8Mjhw3YmvzYCs4Xnhbm3x0cErqIomRPNzX
+Q1iwhUDtRxhfdK80RCuuMMQyrKYAM6eruut58GivVs0FQa199JXv7/osUA2sUBuwQK5iQVeMmP2
QxDEEmUlSM2KPAIExP79CGDPLXFQb4C1U6d6cmu45Ta49zVCfWVgH1APkJ1aiVMr443+1OvTaJi2
e3TvrJoqjrA6ZZ1dbJtXA4czayBxZuU9MzsPt4u6GSqcQdWcQbVlBtXmDMKpD6pYMBK4ujLk7Kbp
DtQ1btblJ1H5SVT3TqIrWYVEiEww6CorsDKsqTmzfyTzspXZT7eC6VYxCUdt7R5fhglX8b3dz12h
ZuLDAbh3zl09R1irGTW1ddYd5BfYQAzsFcPP7fM+i+At+4pkNZ1XWK/55ienjMwocJ0M2TXO/WE/
23eKQOMZ+E/JDeH0cnYQTWlOcqs7PaW5J/ug/Au6iATJSXU2OycZ9uXCc+vymj7K6dQKwta818t7
vYstVJSGomLCaBldEEZmMVm6ySzoRbL0JOMFWdILktMpzBM4dKtaPsmkKemnXu9GRAJKwvWY+6Yh
Dd3qc04nkXA9IXkgs6RllG80KA8alJMlzT2/JawWn1bJqYryuF3flM6jnAgy83VOAylDrzeth8jH
5+YWwaNpiOqzBINm6KYbLZ0GLZ2SJUxFTc7mD7G5YUY48NeaXfJOjCJEN2JkCtnWq+zoySiwcPKI
iD8zWpEpBT36C6uwZ0WkUTye+T53rwd5Kfl4urMTAMR3M4ui04Pogs7IzKLoBZ01UPSWLiJGZuTa
itrMMr31qDCrsXRGLwIsnfV6t1uxFMe3omV0SyoyjYlDq4MlvU38+qC3JKe3ZEYvAEtNH2r8xDLM
qDIoYzm2qBzg5z0dv6aTiAXdIdc12kCrrjdadR206prk9LqFqqYFiKozqqJZfH/V82hGGJneUz3v
9a63YO3MYe11iLXT5Npg7Z9tNMzNw1jLQqx1vfN8xAi27BK2yXq/LsMDq+z1SudZ5ha+61YDe5+W
rduTZyw3S/HHXrl57FnvTGaPxgqCKz1KPWylZm0BDFK4oBpzawGM0PpZfAdcbn/7j0lGWaTIZiOz
mujkNPN6CV6srFr3vfrx7SLsV9HrFZv3vSJGhTrz+NdDDUJCPCPlve3BzH4dotqSiQlYHOt6fg6i
DEjsdncdxZ2R0mBZs7Y4iTK4ONhhRRjXwsbFIbuvvf4QBsdljiCx0/p7UxpM32NwqnPPPZRSWjZj
msDNSydCN6PunYnmtfOeiUAm9R+ajQzuTWUwZM0SN0fKU18lUF9lTOpFaWmv0lNdM58Ee+RbSDFL
Aj7dyiseeHBp9GRYv7JU0sJwC8uYTBuVujV8L+Vm2niE7TWNKbfSbQYOqXUDidR6WXvUqjcLT4+X
TXr8/+XuTXjbRpZ24b8SA4FAfunoSLJjO1T6CJPF2WeyTRb7CyKGatmc0KTSpJJxLM1vv6jqrbpJ
2Z7MOe99cQHDkrj0vlRXPfVU1SGPV04en0QV4Fgrgtoy42l3EnX3eccMUH3LMjidb+69mNXIo66e
NpWgBjbtWCzPzlGvrI6Tn+0d0/RG+ZxrDbt2/dCa64ZqrhvtqJDn0eg2JONmpE0u1X4sEA/PljfV
IeL+SPkvaQQxXp6rb8OY/Zp6nFwvtFGbOtydQ7xsxSwdoi8R+AAhtpW3uLKkFmn7GoSrFbPkXNtF
zIMKPqEczg1AoNbgjMz/TSCzWpPa8iT1So00j1GzuSb2e6sWGs3iroRVAhcm776uHpip4EtYdqJL
ekwsfogfSQRr0mMMG4OmFtU0JgH1y0FWCLIz9dnTvLbYGAkPr0tTzBdFb2Q0HY5KIjzJNxq0Aiph
xSGhGCUMmIUySoBbPnr6M2RaUKUHvS8laJCKPiygZniVUjUbb/y+JRpYCK2pyl/2doa3dwY7+7Gz
M+CgAhcfYQqlfZxXxNGtZI+UrsBl/yP1HcVp7i3AKQWGcuk9C1uOYXnVyClt6cI4hmVrbJUWLzGr
NOZTDQzlcIujo0Swtx0hff1t4zAZp5YOhKe8SgCCpshAmCG5XH8/yQsR2dz9Vxr3SqNlIbg6Lukc
khfMoTycM6mZJLI9SWTffl+H3r6GuEWgA7LXcs6GHzYqh+hFqvQsfE3zvt71F7632vp4NzVogSod
a1g+OcEJMmIepW6dV6mpPvdn4q/2DkTQCzu/gqh6wVoCofCwheyMpGDU8/Cu44/JeM0KfTAZqw81
AC05TMqLRBPBwNVsrM6fdHQv3dBe8qU3tGu+bBV2i0NsPwsGnSxbXVEktckxfJ0DghOwmx4wdMZz
N7DGFTCE8IJnqioAk9XzZM4V6Ld30/CObLMFn29xfR2abTGJHhe9Ocjh8ySS+lt8Ple8NyCipGmv
F0H/DWIWVB6LrSbjAOdh7c3D+tJ5GI/TBMt6wgWc6sdz3mgdUWlcvI6Jl8kwwRPvsU1YizknPt/R
jJ8oee0Tm7G5Q1PP+InvVLydnGg2CP3Zu7l769b23mo42ldPDMIc57wrz4mXYXLC5rrHbBxQFS+N
Fkc7xSQwAwA4x2s7zdncw45qM+EOW9Df+8Pbo5gteO5WB7ZwNEf2Ij+af0wWyloMeFtcrha63+ZX
6zdSNIIPtfqiqOBLvmAZn8WJHRgLVq343ECdcUusKZ60PZHdfeU2sOA1q/lCvbsgEzZcFPiCdU77
tV7Fh/F46Q7jUExG5hDPWN6elu1MlozgGmx+mtElZr8XK/CYd77zAW3DjKyNv6ctN+aLDiO3IZBD
PDaE1EQqeBdsy7bXcTs16wZCpMmI0IDlFkru9zQClBzYfyDBhw6oxp7i9wFBrH21cubbgj2LnoIC
hT2LHqZgSXpbcLFqsI1RviBoZ9hJ8PG3hX7+oUOpEdgzPPe24E9T6gbzMI3h42mqSvielPAwRMy8
TKlbqVvCn0WyYrIyyfaGUIz3WPxD0sPOWurKt+UMqCEE3sR+Pky5x8CFhQiy7M4weFNU6qxheK8m
0dVTiZOm8qTHpoo2leJ9V+uXmHkqovepTl6otFVbpyKSlQbmVuHAyCsfNiIIM5UCgmnXiW2HUfda
k45dFUGCeq2Vtl/SOZpVKvhwxlPnGGfyuY0nHc/Zog9BMdPiNzkTUnH+y++pnNVT2rWdT8IMuuKj
FsVdiOM0O7v5N15tqmPRnAg5jXWTqe1pONrvqieqZqyQoH9bCi44c2i3HVAM5eVSrPUhWuiVFnXH
jdWd+r2l03FD317wQUYNN7fWNilbCOPHg8cTrQKiFikYCF/5gD3RZ4JKi2b6swbvHZbh/wL/L0Hy
mcO/hX7mtKIAtZMqMhgxi/AaDSks67hyi7B/GNRBAtTgBGduF8+kdDjrUrmCqcgAAM86KklkgA4H
x0+VsxdCoGNd/688ZU+gm7ooi5o2ZVFjWcQO+o84Zb/z39eb86918qLWjZbyMkKIR6HbE01V3yoT
fjmO2Qc4naZkHYbJDBk9r7Vrbep8xlIlLZvpDcyMgE+veFrxJ7TnvI5qWi4kA4Smmooc1joa+wZ/
mqeaLOiwRnY/V9ZvlTtyPNFEF6BdmlVobILa6jLEqkRqQI1u3eFpq0xD5aeFiEZVozaH1JZHN+mf
bCqUHx7M5yIz54w+UoHX5lfdVFLYX9B5COvecg559poBwcVr6IqDmlVcgfi0hJNVTlvp2uOssuDu
g/4j5BJbaqEnio8GH110oI1gksmDCrDRDaL3vJdZlFYe/COt/AEYq1gi0ROHlBvteCC3z658SxhU
AxvwHDqHhsWojPKjuYgrzZCO3RwNbm0bUazH/yK+tq8rjX6tK+c65u8+gTsttNpX7FEP50blTIVt
RLUBDvd1axZkZhYsyUQgcSVcQ5x7hVEnJqdTsD+xxurnV/eVqDjMaLB99CRYHqqKi6SqeKVPvIJV
ZOh8r9SB3/axKd8TIkm1vcu9LNQOJbheJfTysbFEiS6JifOJuVYVb2A3EAT/7qkcnrTsrRPnhrAX
x4nD98IqA0mxViuHQ5e0eFoRNY5reX1ZDbyv5tJXpeNyR6S/0fxr22OE3KeKiDbUrCaqr9VaovXH
uJKo73bNCFWiDyonD88rM0DmFSxwi8pJkIsKIduCf06jRcUUCxJ/wiJXmaa752LuqSEd6hYWLYo+
3LxRee759yufBDrkeiJ3NlpgsNaoquo0vKDz5TrAvm/vM8vWTPeX30gLqvnGn4R65ZKqYku3giMV
hJtI0ptIFyhMg1s2PeYIRRquolJLjG/XP00Xnf6H/brIM/RCZLibYCBMZcaaTHQSRx/tPStoowgO
I5E98YWRmJH6gSpRRz480vhr6mcTK2ac4AH+i5TpmYriBAGZBEZighBM/JexD+a+cYPyTH6pPLg4
AYK6nQvov6jjwC8VaY0/qgiWOJZWnrPtH1VoNvjaMhiEnBkgKEjc7F+BtCLF7JWYLTMhNXcyEBu4
tYKyUntsBS1FX61VzOO0i6m6XjcuVdBiEzMDTnxInFM7jnUcCQXFSq2tjclPK0vVELdwsIbNQFVr
tYvLULsI1YG5pW5Moq9WsWh1jKpiC77E845snhk9JDhHxoUb6gUvfPWiex7D5NZA7K/WuxR7Lln2
1Rd2ktYP0mMTQHfZ934zQW+5H1QpyazaE5x6HR1l9LW3gFos4nOj5EKFG3nUnq8UEUJX6WnV/7sV
YZYTBeAOfA6gmTixLTtnTwzhwwKVV4sxdKrOvKh6vTKq2DxmFQ/yntAME/VUqFa8rMbLvv723672
Iqj2wlV7jtWej01valnaabnhmwooZ9OseZXolDIGR7+Wos+eTNgMV84qdTasWC8e5bg1BxmZqrxm
ZMngBfOXF/2GERiI8kc6deRRaIyWNsTAR7fePSc7Gq6HsETbJa+8aMkrO5c8wy5Y2tzg0Gk1vFWX
rscte2XbalNzY2obzyo4ZEUVq/VYARyYUi2PVdeBvSWNx9gtQUbAk6EOjK2DNjzrWpvI+K5DqpiV
F/TBUcUkadVfg13kCUtV61b8HS76Krye2xwD+WMAnBslLyM9rUoO8EbVGjDmorRardI4pJFWvCLI
mBNoEpiuOTSlklHzOnpc9T/n5SxSvt4MNYngI81SDMdVpov6pMJIkKtVvVpV7thfBeIyKNp6Qw1Y
MmQdg519dr2KbkPA8bqR1Zl2q1+zgzBj5WOBB6mDYhONDbg3VqvV195wtLdavagiZSe3WiTCW1a5
KAbWY257fwfkflKzpDHO7muQbwPabesm1iX6NOgRjKd3aLEEJRt1wYpNE/pIYt3libBxQNQV2msV
GVZJGblkz+AA3uu98hW6j6uA0tXzu/feIW89q6hKnOSDZCfKb5aEDrT+4KjjgsZW4QGtaovAE0jK
GHViFJPz8kJB6UekKD/IC3D8HftifhDCpeS4UgiYE6yo4vMXApA6WFiYJvO8TIviDC8PCT1DONXp
nAaFwVcFfOnE3ZgFzMF2gsUu+VKx1pqQiDVVcdyt2jTBpAwlQ4kzrRjxgiBxcZIvFWmzt06BmOJs
+4Iwq9Bz95bSXEFt9Z4qgsAo58bWl5rtl+ygLK9d3C+MWH1FjggX4A44V0LCiKpv7xPqiIP+GzNf
qj7NmG8NkxLRWBLAczDBzCbiGOO1LOy0MRV7BMrMCjw09U2F52BEY6PFaQpveVT5nDm63QAxY4yh
ueEmVb5UtKyGwOyg/4ZVEEUDalXZmVRzcC5A1BxwTThCsAz2spj9rrq1Nm7kZXz+0ExvO7IdmYTC
n9aUIA0vaLxvHTPI3oB0oRCpKYDOKe3MiZgnnbqty8HKkWa21YVlwCRQxufvbA6MXjbR2u3dOHFP
OgMn0fx18A24ZfMpLHmGuh+WUYdwovAo6FwcDyWy4AlP4Eii0g0XNXgYjozSUwM8bB0SyYHOT9Ee
3+NzOL0bMabpYDswxAS2Lo0uqpZtoBIyXgs9NgMN4tNKR6Z1s+yK/DDOoBucqYnN1llK3pk5clAA
nv60ZbCLzzWmQ/InY/UCLFR5fP7Z4ddzIJNM+R/5OLfRS7c439d0XbC4UaL3z3CYzXk210GbDJMk
IwRV/vNrQBOBqoEBMIvz6cHWdLVS36aTPDEn5BwZJ9sJS/26ftUB35/nEQBaQckrlYrnaPAxtvtN
iXtZK+JHSZb8Bmh3fnLD+dq14WAsD7WRSSDDr4l09QT9/K0sjiGXflQIbU35b/6TW0MmVTpQf6xH
rgiCgOrcL5zdNWhF1uZ9nrOSv6281MHPrATcBS1LGBiFHcHutjUksvQHqrV53621eV952EitxPla
oZlC8F+q6Iv6/nfJfGKzhEuOdpCQ50NRaEw+pYk+8kvejNVJSqPdtIjBcDzqmluyBZCtW1x5T64g
QR/Sts2hXdXxkh2hHE+a77AyAVn0skGm9cv24S+tvLnsmr1BNsgxPtaEpWalqzIc/bDK7ep29bb0
e/t6h7jEzwGjJJgKmJpA6NJFnUgGQbCThp78N0nxOFG7xHglVzjNOhXeifVOgyUF0EPo/aE0RhN9
T4Fn3RueHlvUVo2PhpXATOJQGnXoYI2SsR0RguVBG16vouGqaQ+QEokuKIMKDRpVtvLB7pO89ZJF
ZvrnPWj6MbEDOyX1MZzLQnMKGHLreNJR+AZPfzJOossrqZ4k1ZC1ZoKpo/3t24PdW7tsP+CYyfUj
ZR3hdArvpyBAn9u8d7SNqqXVtwCBjcdBbdqFiLaoTTWSpLo+JgPLPZkQEjVHZlL7szLQlxilTx2d
SzHX4//x6QJ4uGJKppfPIwSwB6eDHeLY0qDvj2ZJ1qR3lruflqmuPdGgrKMdNgqaMut4Zid4pqhD
3FsQqlJwodcROH46xw3KuOhEUiJ2RnHSKCDYeq3sh3QBw2RZY4BOXDCPwtFcDgxmy9psKyUvqZ0T
mT6ytIlQXaJrWtDdtAFlCpVjZ7AEEM6Mmp43cPY1bdIju6B2DoGGTrqGyaPhx3gijwYfIWCaP4OO
BGs+elvm4p8UgBhoaeamtaEMOtpT+7QuOk7rGzaIIwmlloSloA6VHrbAqBga7G3v7Qz3Rzu93hYY
HUa7w9vbg3gSKlubJGoF1WKCz5c4s7V2WKB2WHi9eFK3tqdvEilCJmXiYIJmrm9FX3s7o/jCsmld
cas8yF7VXSLk4ubYGMjj9E1F+XQKTtrRxzWldlDL+eP+Yvy4v+A6vOn+v9NJmuyPlW4ADrG1OcTW
7Dd4HyIEgH7RiEMZz6Fn8TjrrDZFBEQCRsjKqJCVWSEra58Z76siFuAzKWM2W6LvmL4q9W93YtU3
2syBVlFBWCG1emINqcRu5GHtCfl1HZ6p9Vma1/RMXZHF4ZM/ob+RkYGnQEWwcytcfvd2NUtbys9g
odfKduyllDWsEU4G+VTT6hlPQXiLlXAKIb18VlPF3sbZasGD4yaEQHigBw/qQEAm/1FFWSPWFLCi
VqLztduclAEwwMNQMMz/QCFLWsbWLG0uit4bPOojn0h/Yd+NdXWJwEoSDkwZTE0BfEOfL87tCLeY
KSJ0PsmBa5ugoK4okN674nPf6wDy245J61iZnD/HaMdEBFGdDzUYC/4YyG301vMsVUTgMcVILJZa
+c9epfobnErOM4S9AHMxdJVW3Fk66TUBqBKITe0rc7AMpbZjysvtzqHBcmtIbZQBKouhwnbyS42E
WqBuIvGcWenVsGToaftHDfsLCL6k/x7YQt83607Q+/dbIv5/p0Zjq4XGSuWxk37T0C3Q+EbgphOl
Dsftrsd4o+kyLbrwAPZUXgVPqsNozdOo0taw3Dcfw06bE7Mxr2HzrJnzHNfBtHM2ILaoXg+CnbOt
obZ/rNF699I8SrrOsi+1+49tDTqY5H/z9w2pu2nkGdCBrrqrp+TfH3tK9m7tSrdjG+4FqwXiwihm
F1pwvtTd/hWEQvjJauWSgMXtCYHjaAk0q3iNIReMD4tRppYbPWz9Mziqfa2HLcHy1EQr5Hxhf9YV
Fl57XvNzRZeuyOyf5GxZi+R+BR/GQzs5UT/1M+qXRu6pH49PFwJiR30Tj9JyVgh9+Vl6Vi0b/8my
FhJq4119Lk4r/dVsXubXXH9TQ0B9vy8+L48VD7y5MBdSGs5/dY2YfHQKZ2X24E/s1OI1GDJNkWb6
y6Oqbtxbr5XspW4dGM2w/v1LZh4xV35bNPlpXjd5RuqkYIu6+eD7KzGXoj5JTqr1+Hndt+2InP38
pMIx8+uVOsVn99Zj9F5rT8OjUngM+sjEmnapykF3iaw7u9QnO7jkCNnUEQzP7cH+poNka3x01sdL
B4/eXYPIf7Uhh3k7uPxH1My8d/EhUSgb7j8/7tFhHbaiysrYi0sbc9A6lEdNVylKdJoLbcTacdtS
OofqaOLAzXP282Zi0SFX5k5ZLlTsEKMWf+Nr5QGUIcOoXh/XZrZTCysxpjvdqT6Solk6VMCu3UpB
0xEcjfNjD/3etiw0RI9ElPot4FGpSktWoVndXoU6x/NpHaEdwg5Oskq1An0ou4ar+nHQkLoeGCUu
Zh1TX7Aj2EFVcdvLX/dYBGyPGY/v/h6uRz3cRJehXh4XIealBfDRZ3cdobZkHsxl7ehP1IirmGzB
fyoL//kJCE9FITzlWm8TrR66p6wHB0U/n4myyee5kC+kmOd/jqlp8V7OMDxtCSFlMRSti04b+6Fl
b4Chd/ppeqO5MX31CdhBS76sbtxggzslHKJu8Omj6Y3SeydmcPnT1GCrTuF5m4r8FD5/Y/pp6kJc
BKe69cad8M/a3wmftHbCJ+FOuGEyXwhiMefmn1ybWjec7EhO4mrYQFuHNsMBGp/c/G8Y6hrX/pb+
W3tLb2s2Ombkdy83tQQQCWBDg7GSn+dKIz7egAMq/6amvLxEU75mL64mhdQb5Yi8W45Y1l1beF23
BIKstrv3oqZ76C9WNBR1x4Jv21+ZSX96rT6pjW023K2usngTG+1mq8cRAYh9hjgoaTmdiARdPMyg
a6/bvxqx9XV95cn6oTVZP2yerKQR7hIDNRWoNk6De/V6/KIl2VbK1/Lgf+2Yen7FMfX8J8cUMUuY
vcs6H53WeLZu4uQEvv3ceHv+v2u8vWyNt5cXj7eLGigqPZTjkWChSf5jnNytsO3+xjA96BqmDpBK
FBktHTTQKoHsAkuzOQY1CVKioBqvwxrj6Yo8P08Kn1QcBM9qfi5KrOJr0YQCrYYCQwAXKdKseVyq
3qrHTuPHctA6Ap+2UxuCUseyfRjyDIwGxJFdDBU/jaeza5TO51Wqv4EeUpXrlVgUaSb+YdmA0GDI
/ltlPKhkZvio/NG2qYBKZcukVtkqQsERa7ZIXFhTqMYWSiK9WatQpS1UCZEr3dB6VVO/eVa1QkKp
cPHWFbA+qZbF7F51uqhKUTaavoVanDY8A9AFVkHgEhsvBoJ3uOAxef1iKcUraAj76mTrTKIr9moF
38CzP6Fe/z9qGpZUx4SwSKR+ZtJ5lxfFK5GJ/JtASgg/qNgFD6pgLjbB3399/cvBg09XTvey53Xy
qtzKpftZ3e8Y1lFjnmJBhMu7nrEZHXynUsyneXmtiY3VQF7LSzQAsSZGqnl4AhCb4A3YHMmPGtQs
TAB4FXvbQgrV6yqEV6nolsAsIOLyKP9oj2SYYP6Ri6P8o5PuCMQalZpPpQe2f4QXs6qsq0L0BQqI
9P7vXS+9M+gUi6cX/ar8vczS5fFJg1LmuIw0gJWd2/Z/3cCmji2ZfVkTyFktmjf5qaiWDYX6G+I1
Ctd4aDWfDr8Gmd8jWcuo3JB1qbJmWM+71bKcpfIssWwqExLWxPA3/kQZn7Zt+biIMCTz49vM0vjx
c80xrPXYpVtTSB66udfUS/Rr7cWPe6wifun0ifnqSd0dBgc8JO4LmX/T+9KBrE5V6zkAS952Vki5
DnE4dkaotmiURymaqboq87DWEY2U2rnipWvzsbNaW/pZ24P389k9PId5kzy6JBezeORb/muNZfhq
lhj96bVooiMIhPoxTpplP53NIvhlA49JNXRUrNRWoSK5YcRZF/DpFFBM1LD9oQ5cHkqjndge7e3u
s87gEbZlOkIqKIhoSYy2bid6mGODpAxAFCV3zEiEhdLGFnFmzO2hMmMOtw1FsSVkmrxZRnFSdnDC
Pyq0bPOo4Nsw6i13xa09ZisJdHS7rNTCUKpQfemk9PyaEqxQp/tS6Xtsmy6U0H/YfTJm75a4J6cx
WLg0K93IRUDxSvJ38wff9MYKv4ahIJVfgJu6btIyM7QFUjTyTNvySTFhuvuQTeVs5R6nmE131a9r
qesaVLbl939LrT6x9SqzjzPoSHgFFVWWN4UMEVdn2L0eognfpjzajtl5lsLpTa5j9iyPTnGsxbHi
DtGJUCiB3/Bpj99MjVS8wpFwmkcoSaUc1lIiCGF5kbA1jdkjwOfsqHE2AreYLcsmhSnHNBTZ6NYu
ibetcm7c4NP1EqReo456KX8JHE1q9XJR+Qb0cXSFhGqAtZY9sT62Twp+VH1MnhQKHVmFlWAhXdNg
7FoD5ItZ1TlNN4xpwdPezdRMshXq45/WUem1qMAWBQy0nSTIRtnorYJ5azTbMusUUnZBExvxbNOW
Qhep1eon1ni7WK9WWw26TQPtuTVsl13jqXTjKeVf6yiN2ZMaQiGobQFrnOKwB8cYjZ0ImXGtURsZ
+WoSBXYYx+h5SohkX9JjomIlcyQyzzHQGJqtARP8B54G1ENqN3Q4cQ/VpgoH+ksNrYKVYE7FTGk9
39bWLaa+hjdqImtWR/VHLo/qj9oaXnFpZMSvOfjkSG5JvCqWApNWzT+jhcLFHjmsJ5EmLMpjdi/T
3+Iketfr1b3eA0zJxQ9kLw3SDWOvYXUpD2AWxGYSHiNPGoTs0+Ml9UfHVgriRq+XesIzkYpLHF+p
FCQ+Ip42bzEVKI2nrFElSRVTGGAQSew9ZQhAFjOYAHlsInnaqJ6Gjc70uuK25aaDt75D8nlseir1
GfIMP7QuplIkqKKeSYhbH1VMxr2eypWrfM3gt53g/EJt62OoyRSG+2UFJkD9Vp9s+X0i2oU/k5hL
WMJ8jqjNoXNQVF0jecpMiwizlmwPB3sjy3ymmClsjdQyrbcI1qpyQctMfAGyUPaVLiBGejHB05iM
RjhK2vWPOtG7i+efvuV1/jkv8uYsGbJPur7PURzQYsAn3MIdfxH7FIoPELobxxj4Zilu/GmLJBHZ
VHjqAnuljot0Rf1hMZw4t12sx2IObDQWupbzfKWZFVa6cRRSxAugyvPeX6nxAhrYUYNJGJHfTCAT
Ia7sGfaUURyaKM5tgZMBQ2TbC4i2rYGIDpgDi2TqE7H17eOxuwXEq8lXfDpmAryZvPFjETHcFomZ
8m5qRqwGJmIfiYKSKZMg5M0ayDNOIlViWkZTqkb5PXbwINqjul4rcxVpEZuYOIRkfhBZWxTHoupF
5bR0rv+dYeqYLp0/StZGY9O463TMXh55PW3b9MmoKcmoSVtDhnSMUK6z9Bik9iNFluEGPFdB64j7
jN/gDf+WRecwNxO9DZiVJGnsorI2QTnQ43WOWNG52eZxuXVxLolXTBaoC3zhQAdSEDzNoiZYSmMn
S49YuXGIUYVAnflGfj9BlnJvsdnigzFZf/jN4eg2E5Tr+p3mxgiXLauawGKjmi2cgzJT1k9FYnYd
43lGgn/J40kkuITwnX/keIggo924rvbAXKFep9yFwZBx5LoQbUMKa0v6M/cHYz5LXues+ibkvKi+
J/cAxALzAFGKrsgqNTAsgSRoApaUfIaRL8r2zlqy33nDvuQa3pmYDvFBEc9BbhoH253LFXMx00g1
59rwcrZ2rSpg2qoIw7Br5zQm3Qpno8Y7pTfcjsqxI+PtJIYONxgnf4z2mXI8Ukn4J9Jbt/Zjlzbw
ouq5WTLlwhuVPUEmKFBuDhg8l2o46UFBGeRq/l6oY1KtXD8wQEHfdqLhkiCXeM2Qz6OOGcKu8dv7
eoznYdIChuyx6pMRxJRzde07V0NnvwMo7i86AsgfOQhAboj+huFvIXk3L4yH3uD2rose7kUL102r
1h8ZrD9OqFn7gp7tGSrykaUgy3xmCH2wsNRIdNpJMd9qx/cGRN7+cDe2DJbGg83XtpGrWpMVABJG
+ztxPI4o4a/OMO7KjuhaPdHv3DvQlJywEmtgQw7nnL91qpGbTzVl96lmmXVzIetUWqTHpWIpliq9
D4oy8IIypraM6VXKmHaVcRZK+aZ0oZxrT2I5qgEyNfiB1GC8IVZglPInOZzPgR1LfL8G1tG0vS+l
1uqi+Zbtb43A1Bc0Klw3m+TPaq+UKUtD8x2wqnLyDEtVIDsMjVVrmJFvw4WQWXPwDGMvcHUMqgoi
nfrFOys9wQonZb4xA0iwQz2i9lySJtV6PFY6bDj7bUrXqrc3p+4rX8wRmhIk3RXzSoq2KZE83WVI
e14tIWpAxzxP+xc/uFpFlel/dsE7fnt0PRHF7PIyhslsfBBYzIBlTZVsoy0wNb2hBc1HGIVYqUwg
mNClnZV6Cq+OMvor3vZgH1aErYGlxXeT0xvomkYt4N9nGb8Lls46HpuJoKL/FNwOawiJ7M3tCia8
Lu6SjvUlhvx8kkdLbRmZXTCyx0szX2Y/PwxZHcioEOaHLS8ZndTMe5VBuun51SqqVyvQ0VZxr/ej
jpSSqDLx8xRhaMj8Z0bAvD04itbaUK9WsNUVq9Wv6STqajC3GMxgMSjaIyvK+K/pavVKPZUxyeas
AN+fSbT8b87j/1Wz959MsDiJ/sHsDKYcOtn42x2oK1rbUEE2lopJjEL5z9aIoYZf+xugjpvoUVSq
tWGp1obKlW7JZuGZcE4WiiLYGTOyUIRxcaMMFgrgbqkv2v6iwqwS/2Cziv/n1gPYI2ZqzmZ0Tcj0
msDmHfLFpvVgrFiDwwWE5LGAdWG18s7AJHiEFzrCuxPbxaTuXkxqWEwWHYvJki4mS1xMFiyLf6oQ
8SQqLukb1ZtX6ZX2kxvXoPYQaS1CFhm1IL79FxXxKmuRl+iGFakrNTKfyVtXGPn0VQxDsWkR6Wo8
AFYGCn0VGy9QLKAe8erl++eZ6IAal66ri651dUHW1YxJvvx/qEnUIm91qpLpUzyTLc0dS1crOYn8
vaDkkpAcbjLZbnkMNErzrsyQkXfKdAuCnJhoTbytv3TnZHVTG0LhjO2fpTvPiEwYKwboz+z5nKoy
5lmLveRxTos6urXLiIHWKthx+c08RaFyTiS6Qgfi0K7lnVpAZwg+zUikX6e0FkRpfQqO/IR8JVQB
k/Ajg4SqwXp/lQxggGLFnxZeExxfptjdGrKqPUbQgBcBkTiIup6qtTOUxdYwiUiEuREkEjOkZga9
l6cpho3fZriNj5IHtre7NMnp5GWKYXmqK6uDt/6fVgdXc+BVMErh7VGyQT+syGucMtC6fnLZn5sQ
l3DAwIaFRUGpEZ1hw+junWoxW4PqRvIijxSZtTrxZq5i0n3NbJA1aeubMWuBbFEinmaAiaRWR47z
oFYGsGCdz6y5QMIOh4OEfQIdKoSSVefZDm04CbyQ8YIG28ss58I58pYTZfhEJx/qxM/MFAOIWefs
0K2beW1umlqSpkY7XCGmnWpcaPQMGj3zGt1aerxGJ11h2j+z7S9ZpzHpP9cpDfe6xZg5LzUJONW/
aupqHmWxDp6aUZ16r+f9xAlfC6AUVhGM6/7suG7GcHCRDp8zvB1DLRCyyadT5AkFmgleA5BL+5JK
VldLmZlA9Y0J4wv2TdfX6402inqzjaLWVTkoWE2j3LwXEbakVDYK+CjaNgpyiUtlo5Boo6iVg8P7
epxCe61W2lQRFBZvTojkcHvU7hPVDQB1KTrsGtlP2zVwTrrBHBg44paFI7140hS2xEtemBHOJJhF
CrZp3fJMIrJfLz9DDQ8wHnLh/ezt3hoMh3vDEQn5e8HUi5MMcl7CgaF7FeyehW6SkLmXmaoFp8XM
lCRT0zGJUp45UIEDLaQc5IgkKnjLiA7hEJSBnXNeTFJrbi+UfR0GeUZN6pkHf6Dm9bi1SGR/b9U2
HUgW7tL2KjAIm14toW1LdpUl0ttdbQo8lABAdzgThUDwgg3CDFPDXuUYFtihfuPEkrjHZN/utKtT
Ar1PGwEDHTVpfKiABgVYpAAhXwtwHzzPoxFQWuhwk9abzAsqeHZFSMGnNqSATFyCLbgMVfA5c3Ep
NO7SkmdsCAZmn4vZ76A1MFFUvUb9M7CldVu9rXtgKLOe5/VdE5k2aZg6wVhXcvvzdZNKdO5IBugw
nkjWpHmRlPjxHPowR3HxoJJf7oEuLknXwMJPkucQvsqmaCJftrOA8InI7MQlq/qQPi/1F8iI50yZ
mW1WPKXsZhcL+YBwI+F2GbhrQMrAf+sEQ9WIToiHjaxSkjyGWZlEFa96w9XI27jjpOrxIcNIy1Xs
kJ0oTrybfMuTAduqez0qnbujRpqoiJQmXK/w4iYLFzdZdKIMej0cYUDFYAUH+9LtuOumHzlY+JGD
FTFJO3IwCHKNDW2PsYNFZ+xgEcYOJhdcAsLSxa1FGDfYjnh09dNoKo3tzhWu28VuTkyMOQPiw5KU
thGF5/bhWg0DVpPQ7hjZzq244xL5zM2qmNsMKMQvTuA9t0h7i23M/oQ1ZGsIuDVQg8aKUB5x5CSi
NLqRXBA2WldQaQs6izHO/SHD80tr7HDYuSrVGt4yFcldRRi0Q87FWlVmoHf+Vn1s7OrE1FqtpfBP
IwzsCxqNnHQtnQ6rG8D87mWE2Ms7yVKlahA/OEbyVH0sZFHZo8C2GLnnPBxvPo88ObbzDRrBmoIp
TTRkVzgXpFvPqADcMby1raK2hNG8vRVBbf7C8Z1pgJvbgd2G7+YkmQCCiBFujHamSVLyR/PGfvnu
bcOG7q+HYUEHk3ZE562tKAjqHPuus29sR3eQR24nS+JyCmo7VGemeQm+RfMqZm9R3E5D73IlJMYM
dF9k3F4b7Sk3rlvJXIBqgdzauSwv+vBwkGDOCjcfqmeVC5z3wrbyJOlGjrUA66N9ptBpLuDF2Lif
mf2udcKXQXKSHPIdbYAZpeE4N0d9q1dEucgHhusREidWxZb4CgJVdHWsxRte2W8nCnweiTawUvJw
8uERUq5W/OI5Co/FGrsjTdWtdDCmBVMRRkKTVO4WlzyUW3Itl6jvQazvWIkATnyImVQb3pguEYGz
nYvsblH5AZR1bHhTLx7ba9/vgQqLD7oWT1z6/HGKsSm8vNHpwILYlLsGQM+2PHWpJdJEpwY7g8fw
eyvyPRn0SVw9+g4WSX13sLN/a2+313sDtfyWMx0DNh7bdcA0FF0RhruJjT3jl105KvyZRk1f+xKD
XTY2ri2OO8CzlqawJE0iydF/HfXhioCh4bPM0vOhdAdaHbw5YA0vwpsudvVW4CViQhJjGETO+XfY
jTETyOV67Sdkw9AYAQ5euW9f2YGgR9mGV7SvY8NfRBALUTAX6X6XNWw6jR0zX6OG2SDxXUfsguaJ
02Vs3OGIJwE+mELDyRYaW8PqUFeq392Gjsvn0WUruthAk7YPxGqtTjcUsQHshFdmEFibvzY46zNf
CyLkllFeqxlm9xap1FSVutzrvYPrRyL9CEvSQMNZ4DWTJZyH7tu1N0YXSOvgLhm9CXyuitJY57r2
kZE0PmVnUEsHXD5v+DyzZ5HWOJIYN/M8BS9K59u5A2d7dOoEaOLGBMzmLPjGnoMoKTrMk56rtxMQ
Bz5Xs7NAEoTL8Oyv6SlC5R+9ef4MCDuq76WQ96sMKbfwxUSsQThSqjjRn+eybu6haNWtiRuwkjsP
Q0k8SHg5Lsex9pDkxnPz5vYKlHFUUrK0fWg3A2foFJrWLrO2XcjBD2mnlaTkT6/RrpkxxjrpNOQl
/wISgXOtCycd6uQnLbE5ebda4REI3xTh0Vfyu7Mos+7GcV/F1Hmghh8qtY/K5iNo6I5k85EL9mIG
eHFQWp40kfTBr7Kt4XelDraTsAItSnOyH+6ZdkE5jDlvsneoHqZFmNv8gvRJJXE0qAGQQtyxw5l+
B1AXc55qZa6kIyhOvuQ8tQf4DdofGEJh37VBRzt2nI21fEkYkl3FopRLsOOpOs5x4eyq2R+5Gnla
uQmmRq9TjPEsrJLWRoMBEmDHqxUa0GKmGjk1Y6YKx0y90QfQjKnKNcjvswgYdCZSxdNzan28UXtA
9e1RSxdKYhoaXPpZRY6PZcxezn0lLvSS6QOqbvGafHdDkwte6iYveTmPyq62tid/0Wprz1DJhGpZ
YVvWDWnHDGGlY3Ow0Ncv2/laWizhWA9CzADUP9nYFkO7UV+vr7Ct28nYORVaqe9f+Lg3c/xSjX72
xQGVO7yy0VOYph5xY2RzircTCxxRL/c/GWBfmIVLRLkGIKofjcES98wOH+9W+e0QEFeSsuzq0Vzp
cVuZ1/7A27ajoPZvEOqPy84ggWf8kzwSKd3ElGsjI/HJU7D1VbxRAHCwsYgZOlHyCvXAc1Tm3rhB
IrNE3nPK9MKR9aJqm1KM/UZquSk1vgpGXENnEKuZKGNlYYw8OdBbbkB+g8xEy1ehDV+0piQJh4aq
W1JMN0iKaMAKyy/bDp6p9RFURW+Tw3ZLiGlMShJfZWfzhunodqIPEN4L61CLtatPZDQUBSJ9rJ1k
hwQ/CB1sogYUAGDy0UgY3DAAzKWjhpGA3nt7e6PhLovy3vb2rVs7O3D45Jzn6ixLF9LTRSEaEdt3
94e3R1YH/hriZnTcUhV7nfJvKTvWkrJwuB2V/R6JhpC50GY4JQFwUzdnhahPhGim1vG4D3xQYLPf
idvpEdV8WNGtdxC4Ib56kV2kBV20hkancaA8eyYHLh8deca4S08sfiZ5CMG8nOGKfQV1KunmP1wD
bL2LzZnA2my0sl5boROVSV5YNg6l1iYBYwgZjhe+V8WfdLp5a9Wy6pjE11dS3XRWFUW6qMVsmpRh
CWRoLyi7SiBD64CVxRqwb2AhOoqkvnvlSqSvVnVN+TzrjKxBbEYuMpDa/K1amZWgGdMOyY4cz9px
nH2gXPFc92bukRrA9W7rP96a+9dyZy3Knd1ADUjI/h9lTXLclJEl5qbvQQQPijkB07Rr3l8vtA8a
HdN97ezn6ZfMHqz1I0ag0pKSloCMQKOliWCbf55Z5a2vNwlvOL4iD5sqW/Z7yTdouJuuyxBG2uN8
gqAo7JHavGcCoxfr9tBoF5h3Fioc3mw9rfWfnp+qGaR4C/ZbaNvJfahwQp8LoowSXQhVM4JCI8T8
sqcR7GphG452E8MIZE83ncEUndSCpWKOTFcl+VumYpUa+TpO9I0vmYo3HyfVpGpjk837TWupjxOd
lZ9OgnYS/4il+4w+rsujFYz+6TmfRwuhACTuGOxOeNQoRagwlDdzSwls8nWKX6k3uZYXbCAL7O46
/nTXL2vBK1coNRB+VbgojHg4B5YcJX64DATDMli9dtjNt1yd/7dUExV7YU1jrGlFgmTVgUbGrD6V
WXOSCnSOVE3z6+toetI0i+Rf//r+/Xv/+3a/ksf/Gg0Gg3/V346nLPWtWldNYHj79v6/nqfNCf57
/owkZHRzumyp3ssht39YvOlp2pxM/wNFVAXKZL5oOpKLprP82zQG5WtZCgk6RT69ox7/953//1/6
25RVyIZwWn0TqDSJKqpB8bISBbhwJRW3VJN5jRIfWIimk1YB9AvsPK8TeHYNEKruZxBLtiyafFGI
SWW/8q0Bigw/BManhC9c/Q776aqFSi8qTRqv15XWBlaoDZRjBVCpLUCl9tAGtRYbb61W5utuXEHQ
BFHOVHvWbjo5GEqtg2XuYBxO/Drag+++Jbz20Smgmao70Cl1G51Sd6JT6hCdUnehUyATjU6pQ3SK
uYMlMSpiumJU49RMmhezqEKoBDPT5/OyaapSgz7ycrFs9HczthSaQvzZpFKk00TyrS3ZT5dNdVBl
y9romtV4zE+P8YmBvWwGA/jCrM3ytvZX0N8ypyG5WMvXVvu41XcXVl/xk+usGalbdph2MYl1Lrpo
1MvCJVbhXnxvnqals1TIFf67iypoFjcan9IiAmRIR7cWemoIZdYEk4XSR3JerlYOw7c1AIVAv14u
FlLU9SPjDPEulWVeHq9Wf8zo64qzWqkQQS1gaFXuziBYrJqhb8SfDVQM9PGmGN5uuWmbVECDsqW6
2CiCUTSM5AeKMYRe9HxTtmRolxvum25qZxmON+J1sCXikAcHDHy6rqpJ0ALjm547tCFKFnUK+bFq
ElDlmvA/Tz0OkU3IujCeaz/wauEIidjCc9eWCFAbyl1CU08BgW1l+iUeB8R1Hfw/m3pzuJ1gt/zd
3mxVkjQ97dtUd7gby3LDk/4oSDeNgrStM+Mhcx0dBe2EYBSk/7FRkNpRkP6nRkGKqapRkF59FNiQ
eBU9KwxH+5PIBaJU1MemNwIXr67yslLby5RmIFUXZYdCQW4KNXz5Ew5yT403V3gc1brIIqNKtSnf
S3OruLwsD9C7IpyannnVUiZ6PYwUpoULolSL2S9qeyQKVXrCDE04eHZ2BqY/Z9EF9pzWZLZmjEe5
MU+2H7oNMz4VkdQWIX82SZ8WmS4YOPtabo0VIqE1qskeeUHFmMZ/ZJEEUJXdqJGDeeC7t7vkLgIu
VxzxpqzyQI0eLMzkBmysPpO4RwUlVJegasPzVxmAiwSz2F+ixKtzxdrsqexU+wQQLQBzxwBD+p6j
c44HMHfOsBSJrIDjtkHeiCj+93XPBAyVQ59PW0MzoY1x2GIKtpBuTkBjVTHz9t52clCKq7STynYA
RwqimoR5ZcH0jo+w19uq3MTt9bbexR3nd1gwR/8f1PWm7MDuYwNA+1vV8d9rj7GkHgMTPOko4T0E
PFeoMZCIvWvbQysHSgTeEOVOUNml1msPo6Wx3l7qLiP148I0ocPQdlWfv1F6cs/ZpqSOBDjs0kkJ
4y0pe8MLxpxwRjn16XSCuFN8UOiibiu6axJP34dLW9K9zoe6QbUMygnhqQ3xfr2e1XD5SuNWOnGi
G9m3UZGw5zhoS8Lij9PW13ZeVabp2ChKftlmpM8Fm1AJzeV5tDqjnQc83FbAEpI3Ec1ST6W34zTB
oe63/Lu633Kj7relO7WmZnKCGNBrV7H+vdBmoc1adYfN0OViQoUmsM6ZXPRuwpW9FfrGxkmHkpwq
sFspwaAVOFyvkuZI6/nJ8U9HdRdd56lm85nJyHNh+I9WmFcINQmy7PqftIU6EKg8O05cHi1Nlxj/
P1ZOh7BQooy75QtTl4hHHoR68/rYmlk/VWg3CfVI2zhRrOKFTBQ3Hw4umw/bCRnKnia3NSwXbT+F
8KXtYbJpNcMmChwI2tduJ6qTAg8H1w1eEV0/XNAB3hs7urqkiR5nYeQsf8OQjvpfm3sd+t5zdrCE
9uCmDW5cEBkEYAYYFqSHLlBAQqLZNMcmnoJSsyAfZV7WzVhyqAZwBGMUZC4xHAYkSoJh5PHaxcH6
fRk5JmsmaO2eZe3gXH79ci69+smgfnkQbCBX9ZM8NfWTXv20KyPWhSmuY6wH+jGSEOqugoYIVvun
ZrxkBa8xlHoRxV41c5Zh/dZSt7NuEgUpvlqTvPLs3aQpUDvi1bakIf+wQO8Qs2MK1WBGjswXQoKR
nH7Yxi81IRJg+zsRq2AHVUxJoSctRpQPWLLKU0Wvp4tR6mJgyUggvKwdE84QCocRpgRVRLamvnEb
dm1BJ/0g6brnNMLk3trQHAUBEgGMBQFPlwsI3QkhlLT8yuX64kq+9RiTFb275DRFr75EB+x5X0Ab
ye4GnedlWhRn534ptVLEd3i0epvgScdY0VV/zLyM1IMdBVCqQ9siPin+I280Kwg3b6Nmw3FsLQXN
T9oHSmcbgPPdHL5EcYeZoOzXMptI+M/xu7ryWjSoI6llVouGm2t2DndOLRcDMeuKOeiqeABActMc
SMWFNqXmSom/y2ggP2dmMl+33dfRLvm+1+sdzvT8jt11AkF7iCkru9Z4rDQTV/VmhlLpazF1BaUe
zagXuYpX81ho09ctHa5ii/Nd93W47zuBt6umdYwh3ILUOjZmMnC63ujqDTY056g1sjWjawYJ4xhg
aTAz5SqDPSTRCBgEaoUIxcYfhHN+e1Iqh46yw/Oj7PL8KGPYzITU5HG43qgodP8sWRDVibVSq40U
dfarqmruGSWeibsLqL6qzIo8+0KDiehL/END6PuljmEmW92nz3GkhbTKWjgGEEvEBCPqKXHDJCPI
Kr0675O4mD/VaWVHm5dBe/1EZTfX8usltfx6cS2feOswNQeG0ZlgxXIoQL1IgTdo2jQy/7xsRD3O
+4Uoj5sTACYqhMAv5iba4vKjwcd4/GIWGZA3mikEa3CZKy9a5iDbDxk4Z7zH/4f4/2VmrPjvRPrl
tfCobSf6WvJaNOx6phrEhQwrLBQT29ZzxXo14/UCXHkhXC37Dv/xSb2tqADksoGoaSJWe/h5DVdA
n+Y9wkQ5oxcflLO1GgBpcl5y7GZvlsUQZ0xLIW9z8X21+p6Xs+q7JkFBpsXXJjV4lv6O0IYkYWuT
aXks7immZT6A+G+yn5bZSSUtw3dqL/02nwMVFgjAuCXiI9L8Une1SGcWD1bZr6rfzkuCJL2WrhVy
Z8AyfnPICvi35AM24wM254It9MPepgKvnI4xXMNqlSrc+dxms4V7WJTx+kYaM3iqUkbkrqcKXt+Q
MZvTxW4beHxu8LmzJOvxGrPolM8pjMXOnwWfszk/HZti5vMI2TU19uEztPeCo8roxg1gfkqRIA4i
gXDOK7gKuwxoDAu4ihlRRiwzm5X4OecLtuBzDZPHfWTOT9clByqnm8PVqsBPTS6ohlyGY6xYG2Mt
SlrlamWG5ADvD7z7WJ8fM36OHSxmAGhJBLPD9BWMnqRcs3oB8+x6xpvx9cxF+4Kgjtczx6cZajaH
g9G+Y3CJSdiQ6xkXDvlKE7UEBpAygBCJkGq1EVQLMFCYih0Mt+kfD9umc/FNlE0drJ4lH4zLO2YY
jMsbN+KUi6Pyowrk0M9PF0BuD/31+HThMwkMLdCVXlVFArRlr+dsOcKcFkuMKVEFgm5FrhgzVRmI
vjA3TpBkWzsOx2NQwW8giY1OgFpH9j/5IS06KYCFd/509Bh4/qQnJle3NoAkWEBL7rxZ0Tvsdizm
dO+Da0OHgDfChxbrHz345b6W3VEUUV/v/nb/wzRR6QQOsX0Q8RFcWzZ8OvXKrZHI4flQ/9zR3biX
+Em6uoawmu04XpvqayOHIPRAZqSbVsQBr0hjYBoZoZcESix8SUP71o47wrMGaOrhreS4QIYBJmEa
PM6iW9bDlgxI8pAyn5WeHGX0mBJOiy22+ECX4Y8Pi9HMydAMkETxuGkhitt56XGbg1f+VYbtRaVa
y97uTq/3SlFQ9m6BReZuRh7y1X9+E+2q9cQP1iw8js9GW6x88J3tL3Vq6IJIgfSt7nbqJIZdD6y1
Agcjt19tpo72ksZZMWFkPIGm8FWkbuwEzz66WrMNRyaBQJfqDcm6/chw238kazf9Jq285sex8BfP
yPN12f+cl7PIuKXVcxNlOVC/ohBfdmp8V6sPGQNYc8ObTSYt++j7jOX8Q6ZlqffZ+EPGJYveZxyk
uK108g1rxiBMMt0c9/f2lOOWbYcPGc9BsE3XvobKX5L002TpKItOJ5ix58XkDBaqZQp0vBWEEYsJ
wmKoL/hEiEadoF2fyOphc1o2Ol3i+6ve1SuizYnwT+lrPjl7cJESBfrxX01RwwzDyFgoi0rDQ1N4
wZZTu/pq4rAWOqIyT3gsBy7qYkHIYn4VlhP9V9GvynvV6WneHOSfhdTqz5YKbcNz0XNhNbbn6469
YLSbvM9Wq7cwQQGo5UoZeFeUoZUTkr95MyGbgHLupuc/IoF6YO8yDvmgSCH0GUUC81pejA9nekdA
f/3CywB7gZZ6MafRxGMmCy7hqXzsbeU0NwestXky08suYZsQkwXRp+Zqw4tk4etDZKH0HPq6rxGR
RZdKRBax30akHsGK3ZhN8xqqbou/9R5dQ/cTSSzqeYHM5gV7aYCytj5C84BcmTCEed3w6wLOvsnL
WSQL705gU/N7YKNcCN0+6Oocmloo5exYaedZFo2UZhTGwbMs2mH+4Pd3U3goMhNE+lKPAf93mSj8
qBg/MAHwCO7OZzRMuq+PkvcZB65mIFju3m9IU7zPuAzEWnuTLPl1QXxou6jD9Wmoi9IwatlpiGAD
pxS6uaKMht1/kX2KBIH87xRs86YPO/uVyuhiPOJ22WE72jZDbTuhVGveVmf5pgmJCfc2H/H92kuI
/xKSBARKQi76JDQyC9Ijt0iKlgPSO4vsbN9SW3NMa7ksqG0J6ww0bpV8kGYnkXks0m7IZf8krdEn
oOyns1lkV/EnVJyCBMdNvzkREIVRxus1jQFZ+OE/rSzh2bCc8nAwlndKc+aWN27Y0JBH8iOruIBA
bSzjtXalGbdVBJkvXQOn+gwuwl4Tn8uCZ+FWY9VS3m5y0ZPmcGAWOO/RrmXNZpFxw+gN50RZbPLP
AKBIVUQVqzE4ApVPGMQ1dDOFUD1UVJyKUU9hf66VM56niNne39/FtrcUS8R/fFEYsnUXhxsD0RWB
tnRR+PZKVzTQBXvnVXHBedWt5DOd82mBYUpRifMsi7aZ0/vG7DFeiNkzONeSG8EyH6aFB5cIFn9n
h3rrnWPMYeNDppeXrrOe9hrONJN8TYMEo3b+JJVi1le40Hv2qU03HCBDJugqnKXAFhUeT4wz7hwB
yT9XtR2DZwgxIB1kbeG6WxKEs+SU+rAd0TVNzuVm8y0wx3sCxmqVjj8bC67Uqp4mbwoBPoIY8Eg7
1tV3z96kxyCtRPqB+GjwkUVb1WpVHRXNR/go8aNfpqeiXqSZ+P3VY8TpbvarhMdP0toaJaJp3ohT
wDhM4xhR8mng4IcRU09EOvPtOhVL+1+XQp4pzXsloyk8dO3f13Rp45ihMxuaOSpt5jhpIsSkV769
ucjLL9NEqcvfziP1m01PpJiD8yY0SyRvRGUfrqxWwEKIqBSnM8/4YJzdqc2Smt24oTjz6qPsI6sg
AVJlTBdQLzpFM4zMLz6dmuECF+JeL0xBisIkIEXhjzApio43dKuod/CH/xZe6ngvk1VdVzI/zkvz
Nl76DS/5aZAbMThC1osiz0SUsaGx739erzt72PWU7mtqr6t8V1zRpNMEPSihq/Anm2ZK8ej3lr6o
Okz11d/qJ5OoqbdWbpI6T6c37PWOxoOJYd4uUfCnzQVXOl6CySBkc2ZeNL/9l83VjgRg+t0UX5fg
S6wHWdMsHsAFPw17uavfT1JZC1f3k1Sicc/rb3Xxv9LXG8St3X04Baxb83lNF0epznePwEnfoqZC
j176wmPlzh9Cq9SDFVIlSe5wqcR/1PDGZVGbS7AMkksiS9dQdqTxN87/SWVUCI5jb1Ntkw2ViwN1
5c/scw4Tj+LDlVrBVyb85AYrXCCy87SFUXoLPuPT6YVgOyywCF2B0SssrAFWK3UMe2kS1gmKrQxO
EVjFB14ld7sqqe03l3sQj5AyttWorTqXxLdXXlTxUO1+d268jOcFmxf8GMndfTcwU/p5wVMqL7r+
Ly8gRTFHxDDZC0p5mOmmHLITyK6l6rBlFZud1/w2nxf2cG+U594DgQq9SzqWgZgqqY431HgyPATK
QLgcbgcpC+rR1wMPlE3OI1s82tjeW4605rBA357/YJlHo6TFLGfOLypY22XlYkv+IWMzUNDn8+hD
xperVQrqltlqVdh+gt+gh1/aRkeHHHUEDXTe/U8YiCcv8uaMpxPvd+8mBNYjF1ZDluL6apYTNDKA
9WC1+oTDyzjwNFxoiEHj4HuNxewpbwkrfBccwg7A6EYZoiAFTGNAMCOxmlF01f1aNC/sZk5QMt4d
IAGpF0V6NmXTsirFlE3z00UlmxQkkaTu69tc3VWOjxnNXAcyLwJGf1WYBZ+bpW4Okvhv38t2zvFk
brLRvgXqbZv3wrSkrtuC8+ln4D9My+lkOk2i6fTGIu43Mj+NAnR1wQpPe2UBrpaLI2xk1cSkgmSp
SyG3oKZ/K7vh/ob8EAnjNWs6uT6LTsFNMbk+i2hvQxjXq2SqcgXikBHYtPT3bRhiXeq61apBoAuN
y+HFQiFBKa1qgZKMNAQno0lGmk7QaBOCRskFlwBSjihBRbmqO1t661YIJrXqQKrouHSJKtH11/jZ
EXkjotfJ2tUyNg5v/7eWcmscNCpoX3D1ciW6wVPPYKj0NtADvZHCJFumQY1Gh0azwbZUb73LQGsB
eDKNapBcEnVXeYGyq8uKtZcYjxI31hG0iKjjgKhJYfor7+HSSmO9XvS2iSoQvlhJosPGjCRYBbZ/
vamr4/dGw8X4qUuhvviUMNwdxhfiwR2j5fa66QF9uiOb7PGbO4Pbe0S5ihKIFtcChNWO9igXbY9y
3cPjk8K6TinzrQsfAQIjBfBIUYsm8nGiJCgw1e63rdmbFIwK20LUhT41JQl6h9W8tD4dMW4utBbt
MGcLiNmnIvTcSt5mxFqgVN8eleDYRri+kqGIWB668hvtJQuPL62FyfDL05HCKNlkXWk9uz1I6DUz
XPHaurubv/nW8F6Pd3Y3xl/u6G7rquU6POdAYdKgQtvTE6cX4pq+FVGOwS9ACbwTLAMIanJPSJ5i
wLqWdS9vo5la5vf8UsSTtFE5YT9FtajKz/NH8zywaloau6FnQMnZqRuGNTijhpJ8oxJZxTUbjPM7
mdEj5TduxL+nUXaUf2T1RWVfl71eZaBRaczuZlFqLQjhQH0Cj4TD0zV62es5rUSlcUMXpjkcudeD
846XbKVxQ3nY69sdz2Xt5+DEsGGKuPc3F7MFu7EvrenKRWJkerYR5dzyP+OKL/6xK7641BXf+MNb
HYWgHOSluVqmoBoicTx1o9gidtAEe9bgDR763eVD2JFAL31SGEEKI2hh/iwMh3bXBjYcAFnqph3s
tXu3e+ciD2gkZOMvdM2FCx0pG8t7QDaAOM7bLNypyIO+BNOVQvR/sd3DSQ9gGyxWfE6LKvxtVq+R
aYuHDjaOfMZqsCaVL6q6UVgpszHX/h5cR1UHl8Bkitv1NJmqNXsKSLK0rvNvQrkM318qiip2c3Ah
lADPUpt6YmMfDbc33RltJ6Gug7Ly+Sj4DaHiU0/9MJqQrJLIuwkBeO/Zu6x7ImwBgdHWMI6TixL+
rua3HXBnYMduQrf1rqH5uYh8gTAQT8g7ZJElxc6VcJJ3CCdeDTZLKCnHpmXAGAaQzYJX/pStLpyy
9woI4MJqlrEc5ZP94FTR6lUVYb4i473q7sto2dFfLrM4WQZ94t2GXoHQMizv9QrSMRRJEHaRXxny
4ucNL5p+8l7csDV+33hquHjRNTgD4O1BUcvrHUnPjyOotDfAzopIUoBCWOPw+c8bnjcV1c/7VYQC
vilUYAEXN5BCQYPz2pti42ntfnGhj569vcHr/YF7XR/u3lwgeDyEED7zFr62bX7yjt0PugBu3uEZ
tOLjS7XirqyhRnw0CvmWuAfDIB20ifhuy0wiyd8U7E3h4kK4bN8UEJLL/g77+kEH4u63DSBrwrug
N9XQQfPcCzs8qxSgzPiMBBBr3owVK4R9n5Thi1cGD2DlQlOoeRbirZSPU0N9nMwx7aj8OL4OC+Af
BTiex2us6rpT2aBna9f4fR+JDUP3/Qa8XXtN/aLtEdqjGifmMxCDCOzHH3tfQrvJcNS+ptdeH8gn
NsrL3tqqKRE6g3Mbj/NtJEuir/Gb2+wXVOt7pTED7EugkPvlf7JjN6pXrOedYBdLq89gs6MKil86
FBR+LIay1aplV4M1rbn4ywV6ij/0xtLyIVQNcz27mvcUVqcM5Ra9rilPkXITM9AlhyvnzXXR+Qp0
q2YtcxL12t+w4GzVHcJWe7KodcfFL7aYQHA+k8bdWPk3CK+5JDSVYQAyK1NqFboI4CwAN4Fn/fjc
uFEbqKPHtGOjj6SQb24fug6OLWrLfF7w82PRILz1oJKAUk8sItVOBB0lC7GkaYPAMJhJluDN0PGo
Q3IECk58DhSYih26XKvoUK/z4zItXBaWIENlgduTrIpCQO3h0fWa/VpQp/Ln6aLlVP48XSTP0wV7
UfABO9C4zUP18RiuveQD9kxff4V4zh/4/y7+fwuPPIJ/v8O/d/DvIfx7Cv++wr8n+uUP+vM9vniI
acO/6wUf/mvAxFIf8/RnCS7WUv/I9WcKFyv4V+srmf4s4OJyGWA9Z0vXTC8KmLGPkdZ08rjo3Xxc
JAf9N0ZcvS6iOFnOInLWnsPb+Tx6Wph48VvR48JxI8ar1TvVz4K/Hb+9c4cP2Vb0trd9e3sEVgJQ
4vPR7mi4sxNDgwh15npaOK5MF4/kfWoZI0VH4CaInviUsM4sDDnNOdIxH8DDL8G2ulq9RB9VJAZJ
y0wUL0y8FjhrEgP3Z0hiELNP8Pm4YE8LsL/F7KtQnlzRVgRtFisO2AN8x+al7/V60bsCA7Q9gkba
6fXC1MqZr8A4XRLB8kXR2w1J50bA+qwWnC1kL+wNR3uxjn7WE33x5yKXgoQrX61+V/QUMNsnvy0V
VcUDlQ9woVZcaqasFDvy/AcQtUtd1oYNkPhWWYAMOytorHR/0JNDr7d1vAT10HnKTQ5DyGFr6BkM
IaORZsMFL1ABtXslsuqbkGf38zr9XOgq9KpY0wuoxa3m1jNM3b9pBss2xB3A+Oy1G4MkYtcgqQ3F
1wC8/gB0rpW1EAb5iQEZZLZim6EmkFChxkjG6tgSSN7ajVkNNc9YjTWH3FRF70KjFvF5dkFlV7xi
MF4qlvIdu6hW/AMuDykFh3+wZK0fCl4lH4r+YlmfAMatOIs+FBA7Z53yWgVegUCnWBDbB6YThvG5
N86xtw2uaJ0mRl6QeI6GE6e/wSYhJeKt2BJBoyG6B0S2oBHasmEkDFzpEyitG5wJrwqfmenaKNHr
Yccp5FZykVFue3RbeW1HTW93dHu4c2t3EGurccoPixvbg8FNZKUdDu6kysvXLwl7JCKp2gHHiilY
uuRISpufimrZPErLWSH401l0Qt0nIDzwh4KJJXtfqCTfFewr7A2sYtM3J7JqmkLMpuzmABo9dUGS
T5bRhS9j8viWBldparlhPMZFhBgSl06DwszJvWBLNmNztjDESV41bg7ZjPsHdzZDXMxqFc16w929
/Vs7AwgpaL+ez4B2wkT0qxO134BYkwxYfnp8z329e9aIOoFdqV6IshZnj0/TY1EnRx/Z9zRv8vL4
oJL62taAXANalDcyLescKgYRwJelSmSWfGjW7H6BcZ9makU85VHq9Xk6OSywr5MotQMRr7/U15Gb
/pR/nUczdhqzUyvhpEsOMMeOLYKfRgeBwwzYDLCxVVNDQ+MtaG09saAbtgoj2azXB6qPvBdJFx4v
jZHU2EPHzutG0xMhmGSg4IvDof68FRPLrw5huJliWGNBKylqF8kivtSBJ1cOPMC1SFgpxhCIDuPK
GqzS1jcZAVdkbmiztobazdX+XOsQHN3cIqoCtmQlBaKULmiKQ4/8PPhEl2gwJmiTq6FL1uZVYuNe
OktB0+N/PSwYfLxDH2Y1fu2SD/vfIi+PzYbH/2qYRNnmeypPzUMxwjRwc0f1NZBr12MX0bAZD+7k
Vum5Pbx5IKIcdt7hnTvpWB6lH2GO5z3+V7UuFZPOBxRkGI1a+c0XCHcnW4MkkrMIRQCEHzlbmJb+
Diln7ksUIJTId2hOFjpmyyG7m/MfOjr0a6TAf6ODMDxIkbL+UPWeO60COyz1IlS6B53sYRgn8vPS
91zyVjj08r45xHZtLX1fEe2MaNeOCU/nS/eKoCRyDI0LcjY0DRwWBJwUeJVHLiiPQi09LnjTfXIw
opo6Pnwt+NOCPyz4u4L/XnA8SHwo+BPvqND0wArUrHgDMOWxYe0SZZOWx0ayMESwA6vaMffRCYfJ
Ho4gOTYTXI0gcIqBEZSPmxUXYHWWPf5XaviO30I93kvgJiYmON0NT1QhD/qP+PMafR9PUoU0+5RO
oobfg5XhJd+OkcHimF7biZOXHK6+ryf7iT6igUG/+vwHcD32eo11vleuit7BbTcZQss27NApFh8V
fMjeQZTfUwyvZ0PMUeEbQsnqA4s7b7RiIsKceFzQ/eRxMTk0oVvwHt2EHherFT0WTSChwzTZGhKb
h8v4oP/I5Kibzmb8vE4E0bjTd35x7/zCnxeMPPcGnntU8B32Cuj4SMm3oHC9nquqI+2DQ+wAYsn8
XvSG2zuj4d7eaA+oLqJ39MJqdVDY5fTTMjoo3NnGleDB0qe9eVGMXxQrPtLqCKg8SznUZxwdwAFU
QIuhwAhTTh9h9fQGi+XWcKzQYY+KcZqAtlXtNy/VwnYYIDQOWcafFUZP9FKLsPsJztOK73b6gfoB
S3cT10rUixdkZXVseDnG9c/N6edQXpS8EMPwo4jPKz4IvFONDFvwl2zDy+v1fVXOR1oYdoAzPdWc
IGgcl9Hl4EQUxWu12aAsJuSNG3QNfgEe+TDGcgajJqXTxag6UMcBMzxmFbFTwJDCtfrQrtW/LKND
0ue/eYux1+PS63G/wye2u68rfPmNW4OB7frErZAX93vDD/UIeVY4R8SXlmO/1dQNq6xH0djv/3we
naVRFcfn9K0/llYbum440TpBWUa9Hnzchumhahe95Hv6sL9mlfKubqw20g29l3zPv7STvOS3/Et7
CZZnErXKEydRZ8324g5spUIYmVlx6Fuaan4YuJB6BFsKypnxQzxRT96Bj2KSdYUZp41mD9iGvBJO
0abPDnnh4oAurV/1eGlWv0O9vB7yJft1GS2NZxE4gHXW+lbgHtP50K73kF4THhVkUdjkITYC7OeX
peEUvnxWkqkHs07qWfei4KWdepP2zGOPijghsuWX1uTr9bbuAdF9OAd/WTpF64NAlGJvi3gc0vH4
pDuWr2DyKySUHHISNfoPkraKKejMZR1oGBckuuFLxbIRxFDUcRc1e97jIg4o+C5+T4eeQXPFPHz7
VvIaifxNTx5onpCGH/IapIG3CDJ/oNJ/C2zYP98wz4no7wu8jS/wjg2ESA90vZZ9ABklxxQeg2HR
E1xKKrhoPbQ9UtoBSFX1atQe8pw14ysn1Vig9d7u/iR6pzhwhxMMuvqjLc9sDZPoVcHhNlMct+qN
2+pj23DoooGXaHKpfVe7SWzTwGR4/kMP6yWC3OPkV1jmSOxyOgq1EtMrfHyOr75yJ2/hWlztTb9m
PkoFZ4ZHQX/Iy7GDvZOjH2vIM0ZQXB/yhgs9++0DY1QAD5QkeotGhNEb5awye2V46PELY+HuUL89
5peNkGnTQ77Tku/t7rMyDBZWBpxgMdtqNFtCi/YQaipcTQUv14EtG2q6qwcUCfThdFJWIwUcipuO
U2BDvwuLqw4pscTDy/gipbgXHcGoBewYD6D7e/oNwF1hxK2V1kHgcYlVK/5BsifqhGyKy6x6/5DT
ZToGA0wD1hgBB8ASTDAVmGBSsL9I1gWIAe3D3P2cRI5+gvKbmWsvZF5J8EEbsA/L6C5rm7neLnWI
mDVGTb9iaqBWcAGstvf3VCi8NrXI3v5qJcGKeNB/w8AupJ05H/cX7HF/wUes5i9ApoSAksj5WITx
CV4UvMZnU0xArtflkg/ZYyj4M/j3ahl5gU+0hqFcKkU1mLzG6sAjl6zh+ZKVHYUfd1KjQPkhzoVX
fi2OPu4vxlgHvSRraVXVQxOnaOq/HzNWIVd0CHcB0CJh2GUZT/s+xy6Oti3O614P/nzCjF7vtYyC
a/2Z/qKd2lmttNWZndnfZQTXrFiFNNQgO4kSTRRLaj9d8iJmHbTWdVwHTNa8YLXHY80hwHj/NC+j
JauVis/wKTuZbcbrkATEVIDN+azXm3WSXQPNssdsreoD1Mg+3zU75TUlf9UlYCeudKYJTmN2rFrB
NsDkJCGPiRLUveOtRV/82Yhy1uud/PsYaUGO2TGHNCvV45/4nzKq2UnMvqlvx7hqfOr1vvV60cLn
3h6uVgvCvL3F+Sd0IXSXFb823qjwK9yyPNwQfMa+QPi48bp6Xvf2GZ9pwgMcWlE8PgOTOPZepDJl
JouYLQxFe1Hg43UUs5N/H0+iBfBAqRTO4DHVGJEqBHN5JhEm/6DjHvPSACdExJ7M+NFHtuD1eMEX
hGBgHC8oZ90QBgXYraJzocZ4smCFmDfJol9nYK1/JuYNa6qFvfCmWqxj1BNad1dsqQAbbOJ9MDAc
1ndmRoVdGxX2Zz47qj+OP/d1xiQ//rkPZWDhvTfVgn/uN9VivQau7K1XM/Zjxl/N9E7nVrkcVzmp
lpn12u5BHPR/fESjH9ElbnTZEmcccsbdrlk/ucB1OG5dUJlyybdprCJagZ3VCj+3VUXYdxiYYW3S
JZM8W46vsimWS34riTCtfMkN2uGHcrOjVmBtEs8D4zCGh9JilwZOxOyliEoN8LfIpQvIPCHQxaVM
nvAQ0Hg25vwCJATaiuyCQ3KI92mJPr3QXA12W062U9uF1FkT/OOrUtuOwW6M8gwDvVJ1R5pBXplB
XnN5VH0cp5FetNm59YB63aTZlwS8tdPsyxq2Xd3lkG+DZcjX63TZ2+717qJogQFAwhZmZW+0O7y9
Pej18t6O0m0ul5NieeNGEhnQiYgT/GoMCTQClZZ+I4EgKTFDvJA2hDSx6Tvu3Qax2+rjyXWth08j
X6t7lxg1fGGDgdBEQjXZwQyBZ6zJig7hajmuzBwt+UsRpUsQoaDzUBbC3oLG2x79u5xsj5LSCUsl
r5cGmKO1U3IJgsNyrGaQN8rRktAl624P9WjPYB6jQLziO+x9ZGOqxuw1YPRdjNUa8CovCp7ZLmiN
eOduccmo73gQRn5lx7WzhukRRUQ+pvubjIBHVjnccDyW4sH8aR15PAxsBNL3M+TGxu/udIN4nFEb
SfP70oNo69BIMeaHRNUuNEGz5dsJzbPnj/DcacHQba9+5wfpQKcuipbWTRyL5r6Q+TetSjuQ1Sn2
Jm1gS3EgPS/Fe9Cm/t4GK5lRuW81SyR1lIrU89RGd/5aRxCqFloMDl0jGrc+elIDzB2ZZgHNJHXr
SaMlXK+bLvb6d8swTg6YLXHmjSmF3Ll3C6ktfy30+gw/XotmLBHB14A/gWpTFeAAdCQ5FVrtG8y9
EY9zrHQZr1bRXaSZzZHQEmH1D0PbfIle0aBwhcM0GSAPL6gP1Uzg4RhjnXqG2hUPbbk90KlYo22P
/1UyNI+AG9XjolfGKnpIpLBgqxV+bqubvsWo19seDP6NQaUPi4kFk2moTvIQMGVgHVTPRgAkNFgy
EoxKr62NXUUfImGL4NelsjKGs6hpz6KvVMPSIhAcUP5xbR6XZ1D9mGH2JUnqiWcSGIwvZmdtxUxj
LXKYcUozT0nmATPDxtCAwNxK71FO1gtd/7eHO3G87h4lrYp/0BXXe9CfqqkRJfter/aH+vPlEoOw
4H8xQ/PujA8cYhO75xz67XAJRh6IV+KsNodWWf5+yQ+XXCSH8KmeEjGmO2Avl2CPwK/FLKKdLWfW
iWdLzHq968v4HEoxAG2MA6NvDZnk75cBW8RWg+SRCl5ngMad0lisRJmBOztCOCJ/LjFwrCazbZzy
aHjnjjJL74xWIr4xjG8C4Q7Pe39FVe+vGkxKaW80GG6Pdvd2hhPyfTVM0km6GiWDtQ42FJVQ/wzC
8KWxXoRS/hhUGgj/kqjqmaTJgMkLgKKrVQAIQ5QBGE7T3naM0EvIYLXy8xsH4UFhN4LeJqttPovi
89QD3MKv8+tLjoNESyWDcTNTNXo4ixQEtZnFY4ccQqibph0Ke40GhIVgNVA6MK0hijJS143s4gZW
nqhorzzHtdqNPWCMAyoVpkbBagVt0OtFOOyAKYrna6XI6/WUjLVa4ZDDwPe6GhEMeFLpaubw/zbk
qT9UzNJtfudtpAwuHj5uVK+4w/HgTjo2NKpqfKVwbhzeuVOxjOcgQauYTJMoqtUqPlitoronFT4Q
tqmj6iN/J6IarZTZHUQb+ljcFcSESnv8r1opkQ+gUR/Dv0ewHoDg3ExKCOF04XATncONstfqqG5Y
SKGBj38H+qxXKbK22W+vERFyVd3iGBHhpZkHCNfXMVV6N0um1bPBayb7xroABrnj8c0YKhNttSv5
Dw8oCp4pd32y3f2d7Vs7t3aTkn8Jl/aS3zWIFsnrGZUfYOr8KZQXYUcdm1ZjsGb9NxrQJjTqbNUR
IYN3S7M/hVxAyivqj+3xowwGDfQXnJVgX6HXofReQE+tVDDmomvSDeED4Dz+2TEMq46y8SIKHtYi
htNfEc2FpTIkBV69OS8nQRcmysXO0de7poTqelU7tbB4wiUPy+6HWUR07oiN+1NE9wXLZ3GCyzR5
A/wkcKTPuN0NBU/TsdCimOA/BPshtEvEDwGH6P39fVhKfgiEkcOCyIUZS82McLDPaPTXgCBNcD6t
z04/V8XUu2ZJ07B9yQ0S5Dh50gCfGhUh5zOf793XT/uUqzoor3PeUVS0DX6wUmkgeKM1EaKfz8C1
qvbYYOeVPJ3iPRDaCTGpx8mMZ0R1sDio5On9tEkxOOlmJlOKh1rMqH+5thNN6+Xn0xyQZRhpkdJl
5gZUOZtFUQ7xK0HNVRRxP1X6aqakF3i/EXJcoagdNbwiz06Abx+Y+U9/US8lIRGuuzeNSaydSDHq
KNvbWOM2xPdrn8poqvKfMvtFI9BzsOxrtSrEwktqVuR1I0oh6+ToHAKfw+xUiG1zh3pOwWnOKOtf
SExDzPSI3iIjuprMZ1HOqjjx+iKPx9/giHmuN1zAdIPXViLYqWhOqlmS99UXpkqepGumJ6smXtAj
NA2OvnV/oYpzXxUOSaw2loL9/VKkeERkWnHyJpXHokny9UfUkJm4lSCRn87uvLMKt9OZ0bidzPg7
eXQ6+zh+KKOTWb+pnlXfhbyX1iCGTatyeiM6mR0NPvab6vfFwty5cTLr10hsPATV1UMZPZbw9C9l
fppqI8w0Zg9l9My//rgRSspRd1/5d5WNB+9MZ58LjMI7hSfuV8vPhbiHv9Vt1JfnJd7FoNn0erVs
8MbdYinV9R+YkYPmv1rqEtwNbpAivA1u3cMtQt17FNxT9T1romlVPq+WtXgA+LUpOwJ6j1qoAqmv
34ScfvSefSbSb+LyZ19UOSRqU16o3+p586PrDZv+RW98wzfunYBlBIjD8cs17IJrurGvmca9hkvn
tS/ibFZ9L+FzubhmDXDq1SlSXzfR9No0Nqkr69iU2V66hhzhfzanolxem8n0WJQzm5ufPDYI/sZv
V8tQLcCPcaFnR1PUVKkOE+VsyqZfxNlCirqeMozErh+cLtK6EaRR3GsP8DU/HdcspMSYbFj0riKS
xNXY85JH++B/LIPfNcUMzUE5WvxkFrjAH8/4NP1cyeZalpZAg2o+QQWxPD65NtMUNnpMidNFk4vZ
NVFm8mzR4LcZ/AddxbWiSmdiBguf/gpM9vanao9FuqzFNcwK/uXl8bWFrI6xuODvpjOSos5/iGu1
EF/EDD/gybpJiwJ+q0PZNZDtdCN8q4rlqXlbe/XQ+rJPM6Pfi6afcWw11fFxIa4p8fFaVlSgHCy/
pUU+wwJfU7Y4/YH54Rs0WRNy43gWx0518m1m1GHglYZ2NN+/XnT412OEWDgi466Dx3a7lRr/wVSr
K1Hxa31nQChQ6d2EIyavxtXNm9QsA3Fv+mYvZgWv+96ug8hKXtvsGJj9014v7+c1oNDSY73EV4uF
ADWOdVPjNcv9tLiyIsGe6CiPnkpkgAie1LCObG21413GJSzbFSrB/m/WgIasuu7JsUdp83EcOJfj
RTMarRvFjemnT5+Xnz8XYjoutap9tYpez9AuMELNhYqmJKki7Wzmq5YHYziFyxXfidnrGSjp8XSD
KsDPMz5VQVCfYUPBHLmBWAWZlrPqNIr7TfW6kXl5HG3vxlpOGJGR/edME4duiaPPs4/xOX6Avum4
OxoUiJfTcLnv9aJPMx0iarU6gxqCEjJm6usAJSPVMA0PQ88lQYS5ceO8rKAwq1XUmEKdzaJW5pBV
48W2ej1zOEqtCjhdYPQqffRXyqts4eN3c14sguN9zpeLdclzciiEdNGaqc21W1W5WmGrNNUyO8FV
EbxM7BU4TJgL30+EgONVlKOPhJw4i8VEwFh4AGvFMz3q0f4CXM4bbp1n6aJZSgHiqSYqS/J1nFwh
0eHmRElKxMvEO/nouPBKS9P0hujd0aCdwdql04REQ7cGHgKfBC2tdkesFdITPnRUooxyYwYsu4Bj
wsOV6iv9vuK5rR0rRe0rK2GBMd6PhcoPbSkxQD42ZIW5mOR4bexaYbwxLMGsiTLQ/fkVBZi6ypgV
iqodPnbVx8h87oHhK+W1dXTX8cFIgHdKoFyWVKGglgkgGz1s4Lxa86OPzj/9d2mIMTT8Sw0M0yaf
SrZ0jLkmsraVxcCDYV5GSnEZewGJtHCio26jZDJNCn5Q0kg45miQLLn6PmUFf9B+BMRgeOYznBJa
j6jtHe+p3NJ5I6T6HT6rDiqKk+XzsmmqEuExXtHT5Z/6MfxpjzfqpxOvyG+cxOQ3VNb9wuKTnyDH
q99EqIayfvfKClK2KYMSuL1fjU0Ff/+ZN+RngQcJ95vkCT/VMmR+V9g1b7zMcW1SspJ+Dq+4QrjF
i/zW6Rb8GU3s2mOp1KnP9OcrmRT8vvfII7j0yiuCEsR08lYqg9TPvOfUqpkU/Iff1dXizDSz7QB1
XkgK/pv37HHV6EOWXjP140VVd9+wF0kD6WtkbOgrpJXIuc6/4PpHX1Hz5XHQKSiQJmTYm0sFv1uu
FVjSCKFszrdmmjrENKZS3JPWjNmCzyaZF+MtuzG9Z2s7BsCdlWdPuWQn41N/7Tzmp7B8nPBjYlM9
5se4rgHF1a1eD+ME7OrPvdXqxO7iC/stOuayjE7ZIoa3lJZKo/i+Q9yCY3YCkP25XtlP+alZ8gYW
h9frRRnKWkUE7vLKxASshLWnt8qI3mq2BvFAb1Z7MYakw00Em8pNWd12tMdYQR9aNuEzcEbNlJv5
+waRshjdDIg+lEwJIdPmgNpQqk5Q086aaBmvVsujvPnoJFfcl1arLMYK5n2FcYUdaJIneMWTkuJJ
5mNizW7xDt9L1OsMyCK7itRUBhkMnnxLvpxgqZReb+lUiHNeRcuYzfgS+xruzFermeryGXa1+kQP
DY2Ti5OoMEFVZMzAT2up7Dcz/r1kxzzQtix4oKo51Q0+/T/UvWl320bSMPr9/goyx8MHiJowSUmW
BBrm8Ro7sWOP5ayMHgEimyIiEEAaTS0WOb/9nqreQVCWZzLvve/JjEX03tXV3dW1Eq8O7YY1QphG
b2TDLqOljDa4NQtdO/bJLFKh6SZhyb3MJ/NoaacsfSLQbeqdk8VOLM5dInEOQoziy2FGJi6QozmR
Pvum3Evh/mQ4TNFUCU2JEx5wGJqaqqbmZFprakbOoymM9ZxACHX/LLwVirIvp6SMMrKIlmQe9ch5
VA7Ph+fR1Dv3/fnOzvDceqieRovh6fA0mnqnvn++syMM5nuP593zoV9GU6/0ybzbVcnn3fnQX0RT
DxSiVTLk4zrCll6sVguNKJhgFEHBw0epg6zJ1kVra6n0io9E6fTQ+Jp+MfWEx5Epvo8MJs7cIjP0
lAGylrXazGxUQvA2jfnRREez7nTM7xpfNYv0eyYW1JgURkAdLh4p8SyFwIQAxcuokK7SQGGBeRMf
NBcq5l9G50wqJUQLNhSa1qUM82aPhbQhuo87irbuFfYx9AopkzmdXJwV13ookMiSaVrEI9bpfMc9
ptSMP8n46TA8P7yM5kibX3Y60aUIC3LLQQP9ElFN2xHfdDo3HiUT4Wg5igwtBtHSrPnny8UZZbHt
S1ME7EGBjDrJ33JvQlRZMhGZvopKf1NfIEVsahoR4HkD70cVrvDlNOWgqQpD4GxJcae/ZNENecEi
Rt4zaTXUSE2+Z9ELFr1kdVdANn13wXRE3uEmudZA7WkyDWr2yVMAqgGppGpq71OgRT8xy39RM+ms
2xIve1i/1zls9RptXudIiqCg11ET/1LtwGG9Js6hXgcYqltrSJfYG5UkH1Pv9Wv5wBCI/2s++j5H
8X2n4zX154e4ugoiIEC7oDfPhfhsMDhqqCbFAsPrTsf7DkVuWTFJUBYcXxTAi/g1X62u4bOh3ug6
ihrG0en8Cup1Z9EUfHGE3iSPUpLlUYxIDLYuk3w0kZLIcJLb1iTk11woqdxEn0AN5tonvcc3hly5
xkP/IveuQR90C71ybdErN2ufnI2u0V1hdBZ6Z9Fv8AYjZ+ZeVpkQS4h4Z9Ev+eh3Aejwn+KvgDgO
qMZ9h+Fdm+HdqOHVmfSSABUH09aB31gDv1775EaPjJRwUlP0awVoPUUdF5urcKV5XYLMM/JFaoSL
vCZSs/VKP21o+HBD2hIGhC2t6yxRdD7k6NyC9yEgb1JB16SSlE0lKZsYAjYFAhZ9+KXGJ+cyr+bp
jHs4HQg0AewhLMedcorQlYV8YlSLlTrE0HipkQL88YnlDUNx66jLZmgps0fLx400rQQtB+GGdt/8
HBxoUTsVUmbLQcO07kNdedwXnEa8wwqArBVSrx1Fyv+LcJdeWUYhwABxwF1JjoixRoPniToiKzHW
Si5CJRfBOAvxJlFG0pGXAYxziIqeKRgX9lrkJCMT3/fDdLVqLqwWRJVEbTcF/kJuEaEx40rFuYX0
xVoc2e+n0cM/2B/56OE5uYDfy16v11v9sXz16tWLh+eG5/rU0sLwbOULZNSCNgWqUgSMllkyod77
KYn/n9h8X0wxcqixp586OqI8ejoFXVLsBpS4LAPzqW1Jq5mjubpaQOWB0TxWWh7MGhWqOpwV05tY
eOJBKV3CaBKLGC9xvFr9zJHaCD2rvqQHjJI6NAPxlzlc58gVxVY7HawdxzuOL/Z4kiVVBUgXh5+w
ACbErsf2mCdnb/IpvVaFeAIcW3pdLzdN1SucFfqhfZnSq2fFtfy6Sqd8Ln/PaXo+57LRWliGGD3Y
xeEvOGnXZ34MZyDe/DhB6XvIvxWDw0zd2Fo0xiaqTwi9HUqmaYxa+9BGEq9WsM9kaG4wgJameVoR
RNsaiMqOds8Wi4EGnR9m6fzc2QuLhNYPqqU5yjh1SEklk1CSaFpbJTT2Ds74oNtag/GfyWVSTVha
Kn1quLWETvX/PG19hKMJZE6L1lVStZY5vS7phNNpdtNS+jXToPVm1roplq2JEDtCcal94/mtRZIv
weiEgCS8SqeUtYAuPRfFGP1rSSt+rErDTQWRoWWTf/zxP4yCTxmowIsWCEXxqAAXeaUlssKqrUQO
SpRpzVGZjVk9J1lV4DChPdFQXX0l+B8/doxLJCSLmuJLLih7DfSRwCf1ypFngggEThKhcpVIb2Mq
E6q/zCfwzIAy1mdj0XeoG6NKvpOaMg0FxZWuCkrBnyzoh54qSk3XdEu3C93lork7rrvibjf+cMt2
+T+wMYpcKNKEzDJLK3JkR0e/8VrZY8kv1YUfeIrtR2hjWSBtG4qjxgWtHVj5OXBYquzmmPI3eU7Z
60/v3oqDqG15RpCwaOtTbbVqe/Hp6ZwvMqCTmV+zOoNIh2ilFrFAFFMBobDBJFDXTrspJiSGhAQl
PjkgMCS1H3PLjKclHMM0UL+B02IN09oLVqpcXOdhuOR0KhridPrvtlItS5SdPHffsL8kDMWzoVPo
NToFTovczVaMPXx7OEnPgSdAFYs+Ncsk7jS4Oexzd8kLoZFlp15naX7x2rpl7nlRKNxv2iRN+0F0
FIr7Sm6NfNvW+PHYi+ecl+HDh1dXV8HVblCw84f9o6Ojh9hMTOzm3BgjcY1foIBc0ixDgFmv93Or
wKUFXwDVR3pJWaVSwKKd5Un2kVbFkk1o9ZH+tQSdfH2PTZaV1RosKGVgKl/OE2vX3ReJRpt3HsAp
3H7QDCUSUC3qSbKsuHq1zLLjCaNU3bhJdZNPrHl+gADKRj7Fiqxyscx8GaGSdDbtfn5IJ/DUepPL
H27uR7ooOIXeQMfauv5/LH4GrRxkKAiaBwMYaplMofgtefGumC41iPN6vaLUtUD7qHqTZ2lO9W5I
pu/z7EZ/OsvHxGJPtfipKM0HTRYZyj8FhDldHEN+HLL/bD2/vJquFAqYIqC6FIftHjyRmtts99vI
Xv4bUO4e+DYx6MKKK/UT1Lv0vkvyfwP/O512Wv2Y/Ogxv9PpP26a7D1Gx4qrY+xfkujIIfs3iGE1
lFFTh+EXrvWyKIW874GrmwaXLnngxdbXFb4IVIVaO3jiPZ3wJWL8Syx6r0MykXUa22MT8fb5mvZk
nab2Pn5tY1tbOp4XV1/VUgUVmlr6lPKvHBTHGo1tAeX5VU0hqVpraZE9g79b2/n13Vto6/Ah0N9V
mUxAN/R6kYVnUG2ztbcJUAtf3VoG1TZbO8YiX9+c/O22l1ZxKNA63XinI8XyiV6rK8Zio8Y13/xe
2xtoB+L+apWPeyf4mAYusfz9Hh7F4z7+Ru6x/P0jigry6AeO2i9g7p2LrQZb1dYV+/Fulsjdb/z/
K0nmO7k8X8/Baeba/HcfK1/zbPo76PEv0dlfgdWghXDKQVfy/VUOfAHK+A2YJQoxJiB2pJG8j7/x
FZ9EObieqn5J+dzTLG7wd5ErtU6SjNR26R6EUs+LFBE1xkSkiApbEaQAHeVmvoG69+oaggXwUBuZ
Nv6tasm96q3QIzkwP+gIVKOFS1YKkLCvVtOxnQqvhQZtRWYHwbDbZnfSS/ogsNV8P0xrARS5PAKm
6aVD2Iifl+da4UhzCxP5V2cpgjZ1sWVxjpQBKtkrkgCpPOUsDoWLCfxToOC9gKnlPiq11TCn8DXb
HayNRZQaPBRUlFJ1kgGDsS7vrNjkmPI4TOpyUH1G3H3S1Twj7h6AJq7Gdcl6AR+IOZHBChPDcZKd
g1NJ/KUKQQgDq4wsoHKl4EJtPGBiATClor8G4SQqoiqSPlO1NoqIYVUwj22HKJMQnWKkCoDo1IUo
kxBFjlmYRFOHEY3UQuUmTtSrPXPT64/6pZst36dFYyXFHKj3dL+Fs2bVvIbuqSWXg0F0ErWSb2AX
FTI8TEUSDPVkL47UqkA94ATg7S4TYVEVFdJHQONKJEIXKh8nJyArEuw6uQiJXAQNo8l2GFVupuEZ
sWhSn2JCNKateVSA5yVisZbabQbW5+IEVZfPR4AE5Ahtbf3JN0CiZSYIlKoBKEWUROwuoFQKKNUm
UCoXKOwuoCRupkGcOijvQKFJIwod9bfhT2UB95kgqYDockBUlEI0AADKtu/STHgEzsfZCWE1MGTq
yEMEFDw99fvfYOvVJiECNYlJ2AOfpklWnN/nzffAi6VeqfoCW6U6kZPOGB4wAiqCcAztm8I+KdIp
LTSHBzSEEH4iCM/51I7C88A7n0IEnlpnEEHpjlvJQSOepMACcCZll6CLM8NKQd6Zvgjzizs6EcPH
7SEUYBPNjDszCtWZlpMZBZpzfeKBiZq+mVmyUBQZMxyoK90Y6PkAc0dAa7kd25YK25ab2LbckJ7+
DXfmchPJLAryO47WLKgEKAa9MeKpGvEUR6zNleR7Z4rtSxrRhJaCFidbWpyoFicaBvqenpjhWoLp
V5t2OP89okpQAkJXQZK6+KeS0SwbKAEyNQTBQswab/5ZlI8XePNvAGHhoyqiTQ4s9PrLW3zzBt96
CGfRTK8r2+xrtZLwXSj7/JllTF628O14K9W2xyUOGQZfnpCN1kpYvkVbMsJmNSQu5SQE+VJEC3s/
K0Jn0UjTLN30Ok0zdbMv1ZW8uIumWfybNM3iK2gaUF6daQwuyUKC9xVX8VNQxxTeO1vJGiTMF1EV
TaLSurQzJMZJA7He6WTN5PkmphgyZRFl27GkMFhSKCzJRBTnRCAIuiqHMF6A/fCHNRJahcKN7G5S
q4yKu5auaCa1qqjQc4AHoTk7wKc7DplHEyS3WLQgpQqY1GbtqC2ilcokSV7lJB+NT8I4RmM2nYgO
WKzv8gs02ESsoL16iTjjGg/ARB18bbaZrQA22bqmBpUbSYuJWsBELGClFzCJGBB8haD7WCNRmKgF
LO4mC8so2b6ACzezPuAv7sDkviQhOFMrNBLA+wH4a+vPsHAleNjeRhSirwx9VZdRPp43LNbc73TK
7Ys118CZ30UstvvNNOBcLVQpFirTC1VGDEjShaRMm8jWsh1FC3ABrtZr8TX0a6kp1bKRfi2/TL+W
hJGFS7wiT8Ki0b6OFLMJvq8iyxzq8D40GlojicWHlT9vWPnzu1cesiUkzs0qDjUBqFdxKVZx2bCK
y/us4tfShdDt1z/Jl7XVbKYS0QDEgO20AWynck6KUNyEHJSQ5OOpclatYTcVsAPATQXgpidks42p
L+zBFuKP6myhf69WmkIVE3NoUzTBMPO4bJjH5d3Lf2mW/7K2/DMzhZmYwqxpCjNnCqKfhRIwyqZn
alVMRApU+qzr8msRs9Bs0yLyXP00+1K+0Gxi19qvOgSpphN0lFTjMV65FpMHBWUgi4eHKAhJXuac
pbR6diMs821lPAV5CuE9wA1cdFddL2ZSYyIGHs8Xw8By8Nwzo+w4/QyKxWmQ5ilPE14wVPSqojRQ
XkuAvk0wBsabKXI+pZMJLMRoVRY52JBNCduJ+o39TkS/OuQFeHhEI+0nlVQ/VjHEnGFNo4k7rOES
xzAVzJiJ03mxEy2/9SaPq1E/9Kpu5j/0Jl1QNAO9zG6XEb4THX7rJTuF/9Azk3vYp7s+oTs7EF1a
xqRFq0X4Urq9D+nDPn2kfLvlyWV6DkMCi5lcWJ2gPWhTRoDKBGl+QSydYynb8Uc03EctZhmTAMIT
iLeRdoXu+I77gg8HyzF6E95vShgHvV7vIb7/ZA/94ZaSKIcEHxf4Dxycssaghvutnu0q3DjuQ0d6
fu092tD1At+g2xu3Ynv2Ox0utSxpep6/F8yaUc+OufmTq6VNHRVqadWYF/Ic0LI2rkV9RkjXnFmX
0jmZUlxnZW65hpxAqdsKaXnO1hJSaimOYcSrX+r4BD5npS84YRCm/ORI+KC1grQ/K4sSDQhiDBLw
y3QEUcN+mUYU+a2ebBvjA0CLP0wjFeGD4g4vlo5H+pFJlmIy8peuMslowpoq2Rmq2ve62gdWLNLK
dYso01Th33ThvyCW9rt0wgqeVBdOHTcr/N4KQ/PD1DjaM1vxe7AWrYrsknrCtaDwV+4HwtfNr1N/
bYD+q9iNevq2HwlBdFDbPuf3mr/IKJ7TZBqbAv90nTzicS+jkaWRcPV7bAI2brhWTMGjj3WSHCLz
DQ78hCfoiDZ++CAW4cnjh51Y+xLpGX1D0Vjqkx/BxYuiFli3qz3uY23dzIOR/vUv/autfnVin+3s
DJ2qKKb3Sxj/nUGW/Fo1ABVEValXgwxSzkBxyZjX5MEsZRXH2QyNU+HEhiFGilJ2pMNknIFYFzyO
xMfPP7758ClWX59+e/tSfbx98+MPcacDLs5rVqdo+Qr6DdWcUjgccgekCTjFLqRTxTwydhoNkIAc
f5hHqXFKjctheVFyMIUOqcEUtokpuRPqZ8RHXh6cVjyp5nT6Iq1A1w+jz99kNJiKb1L7htM0pzG4
la5lbDS1WsUgZHSdagrND1/aYOSb2q2ygB86gwWf/M5wP6EjbCyCT2xi/Y5AGm1/u9VgXCgNZQ2b
hLmbxLraBB1D1Q5Ao5EHsbDSAvRXv/6lfwH6052dYR4xvYBm6ejM9uNvoSmGUoJbwF4sES6A2yvq
D/lQnxE6xKdbRoIFMFteyZa+xeuXT1/In8/ev/gtDinsHrIEzR7tM0fc2nIniMJiI4RuCdwQwkHM
l7aEr2qu60eXRVrwmeFyiyD0Djy03WEujsBmO3QIYOymCK9cDFVbVB1YrDc/fvgJdjrVJuFSeVa6
ktDHXhtfsty2aDc3qqojXTmlwuGupRkSxzsiEe0j6/WgKXe7II8Y4Jdor9JiJOpLH45tCgdXnQAT
DALMdlVCUPu2BBc2coKaQhha7x9kkdXHxNBFaFJbVBi72wNspG7J6IROaQ7PltUKuFPwpECX026r
Qp+9HUVeGsBv9fRTX1EsXSWLBH+zhQkrqqpgQJOphjDpPSbZq+BkNLQktBZlG/jh1sakZrhJzTbE
yS+Ao7m+fLE2Qh7UNnwCzEAYWMUm7rAqNmmaDMge1FwQ35ypgIuDvw+WwMvdxAShKQ/uzO6PhbWH
AV3jQTzBvW6dgUTb7EojIWO5a86SfGYFHsKtGzsmvrXzpR1Fu0PY5Z6T1gcw3e/M6HTa+Wp193id
EehZmsgfM2OD7Y7t8D8eG/8Px5bMnEcrWqYrGtD6/JdF0hZbqrTdKiM8R1wqCAwObjC8DEwDxNrw
XLMc8c8cGqjm9hB3ojUkn0qL648QVybixu0IlmprWnZLvz73rBCbzA40D86v80b9vvjF+3dSc/Et
unwFBd71MN/UvmssSdwxM+uanCBcBZKIdyHautvLelt3EDmUu6AvTI53jcc/joSQ2CUCHhgUAsl8
rteL68XmmuDngsyXP17pYq9it3Xx8uDq5WFvV/30x9dmNqu9bJc409rkrLAqvSEdyshiDlmn8QKm
M1TPiM0HEAZlUgPa2BtDvoXwa99FAiJAdnbWtVE3n1JTPUGwSU2LZfWfTvLB5kus6Z3WBABam/BD
PeOH9qRqI22e2GxW1wGNnokYAJpxtcjEnRltxtht0xrjfm9/4Pu1axNfhaoFfAk2VNvdqIZPL1UN
Ppqq7dnVmoNP7e33HfX3Uu9KtfcSdedVQxUnd+hv6OSCKwePj3sn/nAJ3iVxJyxm6ErkXVKS+UzH
a9N9ndsnq+JBwnUOgQBFxAQ7poSd44HJzRdYjijjmEVvgunwTTCNbmfh5Yyw8GZGXoTHM/I8fD4j
b8OrGVmEn2bk1/DFjByHL2fkXfh+ZrFILmeaL3U6C2YeqFhfQjRx4zDDYm/eWG+jGbrZ5BZ3THj3
2MefypUUhKkYnYGn3PB0FjAFu7OZYg4ptHoSLyUhqVIst70z10nw2QyNmLUQkBtuYafD1QvkAwiE
hmmENPOY0Sz6Jt6hO/E3J2MkXb+Jd1L4ihWHOLeb8dKdKB5b9BaUz7G8T+YzdP+bgofj+Qy9Gqdw
Td8ymoWUWJRXmBPoLORrwoK/lpTdCFf0gJ6+iQnFI1YPEoKUvk8+gE9h8QEKZHOM/MdwLwVJCX7E
xSMNI3laToFxpU5nwQsI+HE98+JpXgGZO6N8Mo+lax7b5a28rU9nwXPhygUqAV0sWOpQxeZwXOk1
OZ0Fb+XvYW19qLUc1jKUjMK1/c3JOKkArLhSCNqheMCh8EdGGMGPY1SZHolFwZSKTSrKZW2nlO8u
qsxKP9Nqc31FU5jntgRJoiHwqAJFFc58ALwXg5WvyWGduy7eGkn0FBah5gIUXxFJ9AGy1guBRxj2
jEYLD/EnluCJJebcCRHBLA0pSSrAsdwnixnGf0xQ53gD5XRoIa7fiejozC3358xLfF8VEoPeLPVK
lvr7sfeTQcYF/pJhmARi5Z0O1eFEzSEQJJXtwCVIqlCNnTjot0Aj2wYkZL5zOpiVJtYqK314VDy9
KthFRo031jTnbhLYSKcTConauLiaJ4xOnSQ3v4YlwCbQmIICL4UpzkwkvtA1bF4bC/JtB4+vb/7/
c5NCTlQTHvmKlx3l25GJucjEYHIbyORaury0D6rjbQeVOqUW0GgwL9IK7aaOkZFC1Fbmq1WkrcZl
ZOIUbe4StGBrF8o85Va+S8IekcuDzkbXQ6Ge1rjf/CqQtaJ98ZQxK21xdOQyk29qnItv5AHg5dFi
JgfldzofZ+jBS5uJbNmqwzl69P4wBa+GGsaT4LRE0kYKd4wEBffnJCjQYDuiBH6innPE11Bv8wUl
cNR6l+nprqL+ljpSc7q50mAN3tn05x55O/MKsNvw10WE1lku3LS7tYJMimXOwz5BOVtYrUkqt0vh
4M4Lcw79evc5tADmrIU3iO0QYBG3MElk1N7UHyarFZq3beyB1PdJoi6Cik3wUL/JJ2G7h1va42pd
U1jXz2JsJNncL3Kv4RZJcE0Ta00bdgz4cEs0yNSZqcCV1MCFiCzDDKNrNwti7w3E3v1/CTEi5iIO
yPj/HvhdWOx1QV54STShOmD56ByOCmwCD5yk/izae+T7dQf3ljqaYKGGNh/Jplnc50oemNPFIbFV
tmAB6zvX43BOimRwLrcA8G0cpnDAywjWbLXymLNVLbAJRXaEXM+BXC4DXDOIlOqHsjpQQveoXWOj
o1Rkg2W+ZYJWRhNggElg5i+vh2YYVFFhBSqoEMET94W3WiWkuvMYa5jitmtnTQoEGiWVTzwQtG5c
QNSHXdEugtMS48epbqKCSIeG5nZC+gLoESoC9tboVqS8xGriXSUg4j6LbPY0Af/U5xB1M8wD/Zss
6DRNwjzAv9gSuAGQrcFPAs8Zxij7UGTpBCq7CWtFBqELy2K1+nEGFBHJ1YzAByIXDv0aNBH3B4dg
QKvfwiIerRX0o178yClubS5J+2iXhXmA5xT6XwRjz6YHqEXZNmq+csuxicfh1Myb9pw8Vrduuvph
9V/adVv4M3t7GCzHnH9PLa5JXCfELebyn3Y5Q9qbffLNyRhf+ydWpXc2S2bh3a4JJbebZBS1djcx
P8VMrCfwj9ZZTWsbautrF0eIg+MwOH/E9Lbqh8jebSZ+WSDbiTjh96GulI9Vl8ji9yKyNusCrWU/
5nL1mKONjznL0NxeqDHIxpyXlWU+ZRcUaDnGXXIS71gyjjeOzChAXNvZIdycV5FjcSJ4Ue7LXIas
qi8Z5o4RHQDz/qVZAnieC2YAvhe0fqLplMnnCJNMAcSuXGEXNPCNOgY3Ec6+TuSJCftoA/VMGOG6
SspqBSpQNSpGaGzIgYnHkzyVEx9oZUacjqlvQ5FZdIG4eARDw73daONDBh85BkjO5QF0Orcvlzn3
Cp8UQxa9wyPMS+rPFzAQIcW95iw3C7Ypwy4V+vi++y1TmbdM5bxlPky9QqE9AxhtzAffHXfAsmi8
Bgo8s1E6TFCovEHfFr7vjzyroURSpIkfgm2iBavCF/aKAu988lmADZiSm2DDGO/3p3lZ4y5PnCkm
0p4V7wOHvNx28u8SuTV96c9TM40dUqzt1QDe2RMzNZ1vWZIN9Nb7x1S11MX1uaLEA6z+5HiaZd62
u6a2p0+IdZhYyTH6ypaChhEbm8iHJ6EMx5eSpjiCJhoiEowoT6ood+jQiPsQVUsJTlGpQ4rfk1Gy
NUg0JY7aHXjDiXJX/CCePGEuVtyuyi0NKfvY/yjfgdSm80ajiDt0H60RbFjATQKv4fBmwSz8ZTr5
/Dd2oslOzNZfKK14Vpd5/mxfQs9m6spR+n1SKpRGz7SIaCgYDOiGRSxQ9GxGmOQe5Yoq01V1aXHj
SGLbOE5He3dF26IbkVxQeHJDg3VCcg5aBx6G7+sNU2MfkCqMAtu/9EQEtpMKlsk4hz+4EXH7gzJl
g6JRXXcMiml/WT99fIOqDdsV343Gp9M2BFSM42ER0Z1Ch80T59uwGklX/IkfiqkXZJyc+FpAzSwF
eL1AjeefPM7qsdJRSR0fyKMN4gAqtJ60pApSWJOe/GQjRC5l+AFo0YAhTdv2Xt/u3/d53u7VdZc0
q9ts+3aTojxc0U6GUdZy9HlUD/o5rFtgNPvaluGjyEE7QvzCo155uVfEGKOZTYtJykLrXPNAed4k
DXO1n0dSX6puAdRb17nNXLy1HDnBTT5pflPpPOOlUU1K/sRZgYizYnabqPSlGQF6MNouSWPKLxaZ
2/botkuP1i69Xftw/c56eCAPo7ER7dRMPKDtVUMXmgvQmH8HWZ4s4geYRiuMcJlv3LuytzqlLVnn
T/GcQtYPxE/YIAxTcZYlEFg4CU5LYklvjRWGBVNQ7a9596aa4KfR9zMRpxRpLWEGAJc8yTepgXyD
hFKa8zDS2vEAev3vgMonXupwDJEUTWF2yXa6M1GkcTIs7iY4C0NwFnWC06a97MGvaWDWuDLyYzdZ
3iLodNgkyytFcEIVkOSjsnHBd30H4rkL8W1P0PzOR2YOr320WplBtC6F0X/NXHMhe9ygeYZjiDA0
xa9Q1CkAEV5kkdUKfqaL8+fwNdIA16oDzcYgqLjjdNnUC4VwGyJ2t1He0klD67cw0OGev16TR3Rv
h/tDOa5nN5xWnc4PMzEZ74dZ9Giw3+t9C+aKAnXSuwYpY4O/KtgbFF2D1zQHPF87ka+YiWdm8OSH
2Wi/Fx72ev4ON8oidj2bn7DRoG1dBDvN+U799Tp0VZW+n0ljznlaidl2u8R8yKljglp8SFut2phW
h5pvGrMB86tIIxsZmqbGnBoW0MhNHbqfYsIUIIiI/1udmPxVU7HOHsZappm2tdfVjvzNaCCZ8NW/
z+D1KXsh388CiKsAtKNl6DTT5oFNzyultfbbzOJR5756EyHBir7pUEaZ6zH8ZpitWjUurb9rzSPq
/k+mJOoNk8epIl8TRb4WUTpOToZeoVVstQnQalXUqFa84VBpOs4L3kqyTHhNFZRkw4OKFGDQW/hr
BkoXlZw1EPCp/fiUEuC7NMpRxiSo2NWKoYq+22bqS/ZqAT8NXu/sEKZPXUj2Sbr14GXNmfLgZT65
6xGYbjwC6UbocvEIpGSjKnUegQ3PcYH5/5xFtw8eiOs9fE4+sAIceTHx8H1e5NVyob5OpbwL7YRC
Tt2EAabwOWgCPxfMZkul7cHMhHRCdysVmYC9X4phmKK+gq8d+ZqKxDLNz58nk7nc0rJP8QGbELKV
mak4GLFVcW69xrAmUVd1kGQZOIJHVT9MAfi6bYn4e5EekPlAh2kfVLHFIuVWh6rpDywt4JEKhuqQ
Tq/LVFhXw1FaRT9Qr9uX+ERznuTnGZ2+TXJaiV6qOc2yY3G+IBwpExmIMx/pBLx037yQFLlVETty
Uq4StrA+AZBuV6IXJ01CQaT03GHiGxYm0JPjF2ryIv4eZohXrzjypzTn6Syl7AOjs/Q6YiK9yH/K
J8nyfM6Rao9SlfzcSkxUopwvzFXkFBIpIBDEVKCFWQMr1ZkAaDyicno0kYPLIa5gRjn9BDb2IpSh
OjMts7NyE2uFTybLJBVqafQutNOmCrQ2+wSdwCZwD66iwR6cOmnq7cpQdjhwuPoVUickMXHKYANE
PAH1T2CNPFdEtjN57mYmOjqmmO+tjM4ZMpJWL+gcnQtT4BpNoDpop3xIgG1ocXB4aZsfjMCWPyXU
D/PUshJxIOPfphEvQd2S6S0j7V5MQhqy+h5LCYveJEL9rExukPDWI87XQNQb22PUQ01IYi5dpjdd
lACv5W2C/hy5T0xcOK9cejmqSZKPifxl3bqstIzyqQs8QnUrNJhq2LXtF1Yuot2xG8C3ofU7ykXQ
tvwxH+Uht6RpqexSdk2wYxO2ttORGZYJSali7kl13v4uGquIwH19RS0+YB4ljw76vcPDR3u2FnC5
9DixsggOQX9aYyvu19MUlJF59DvwhqQuCXbOfSsinwG8nLG4cKoSHP0am4zS1a1Io1fBp+Gr4JMg
yARD7E1QDjm7uX0TlNGALE2V9SzNIWAW5iQEqqXWdLKvbfzwKxq3SgLEqlL1MS095ouYjhJVnivf
tbMSnmLPS/RwrgnYTyXc17Itn23G69IlZU3CO3udTrf/+LgMMMbce1QVEKYtqRttMgGl8FS88tuu
GA7iUJ0Lzk9rV1jRWccPSdSx5G6LwD5IFM33M/US5+4Q8qY22skLnmGC9Kd7w6yiAalfg6toMCyG
yldK//Hj3X73FUVmo3sTjfsnq2hCik70r8k6R+FH2/uQdTAO+IMs+kQ9f2e/1yNs6vXAM4NvO6Fv
7faRvdfq74YVoG9CBj6pbPQFj2ADn4DqPeAwfKwRSrjCJNFP/dr6QkaqTHmiZJ3qRhvWVnCedQvS
B5yFZ1PnOI5+B+KflKXS2p+VtadLqfawzCE0mmId6pxcPCrkK0Kd1T6VNlHKYCuP0H5Amcj0d+U5
WaGMue3G/wR7ehNVW1aBI0PYIt6/ihQiazy8DxZqGZI8qUZOfZuqDKXZl+kXzkkqXNYIr9KysVkZ
CTa+WYpF2eBJxvG0K92SCde68kPECZC/C+3EbDPQ86QodVAk7VwpWV7bLUzPMudTRYPWXzLejPzW
YYx0iOtajOoNZ07KE3TYHCcaYxS4YaPrIa0bglaXSaUDJpXJUsOgNGGgygLkO8wBnUyzmpUpumFY
fhXkWsZFqLRKNKN2SCBKTdQyEfpQ8fftpePFcjJ3BoEpBsb4aQP5ssiWC3cQzsdGMG7tAvKNBfbN
mNqNAbO3xcS2MPEsWyr97mTGKbO+7WjKMsVkzpZZVmHMLmegMxG8TViOJdXcydRecULHL6n1ocIf
KR9GGk8dBOYmyBd8X6fc+sxockmtbxHXyGAZWIXZ3wavxacpLrHHqiBTTBWVcGkryWMUEbP6Vv2r
OdWIgr3Zc8EEe/SycbuMTJKlJJgOpfsnWlXocU2eOC/RJwNeWi+oC9LWZ7du65m43N7rcruy4IWp
+ehwb3d/b/9R3X58d7DeTMHLZl4Cb/NcXiyn8u+l/HtTarbTmfl5XUbjE3JcRuaMaMnToWXttpba
Zy2zw1rq8GupY6/lHBMt64Bo6aOhJQ/Flj4OW3AQtty91KrvuJY861rqlGvh+dbC7dLS+7UFp3Rr
suQtPNRaYlhiV7SsM70lTqKgKrOUe3Er9s0V/Vw+AWo3ybYzWsLb8ZjasG0kDp1ulq7vA7NNLjcL
b+4Ae5PclMGUwsPZ44FMfzN17KnOC64XyQ4klxXVRsZZY2sW8XNVe2dajqCEyRQN8oSn0oa8HUUJ
vFdvz7ICXD+/z0NOpsUCM4EVGeYEXXwd31ScLl5lyXkVMmK1ECZExGZ9roiGKhynJ2tiXlMemlly
30pKwNEQmOiGHg3qHayA8xHRoN4uSS0zTUXFoxlQF5y5CbE6WDBaL8FPpR0ZvWbiptFHAum8jK5K
77wkpgpRwmULf2TpUyx92ljawh9Z+hJLXzaWdhBIOXfRq6vkEjeltO64Kr2bUuqWyRBBplHTagNa
yZac5smZ1e7Zne02CIJflsaWFohmuWiCTK49/AtPpOc6HWnpHOPKc0Mv86gCXRJTnQYaPSNOgDkf
lJJpaMtnihKc/Bjno1rcYehqHk3+/qaRCf41xLfTa65J8PxuElz1vXZqO+T2C8ON0EXcJ0S7P7QN
x+tbbNh7bAzI5bLBc8o+M3z1vBEQBIaOlTs02kM5zKLibImycyHfB6nKrzwCrTbRN3r4Ank91oZX
4q/cemtoZfMZtxdOniDEAQVp94c8qObpDCR9WnvBWPWUSr0F4QTLps5S68S4KD3/Vl3bursXcC7A
M1leLT45dTJPMfNUZV46mZeYeakyb0ot5npf+rD/rE9LibxEIZSDLFGEvkJrCEDmJZhwA5+IcBC2
odL8aTWZUzAcei55fp6V9yN4gs0U651clGC6Ckv3Z/11/A5x6s9SPvr+hEfev9eJtZ/+BGe8sjkh
hbO9UPDHVCEh34H3rWQcjvkJYfBnp39CUvwxQL2vpuAwuA/K0mOrVa5NRbVXMaFQqNk9uT9MbNkk
0CAT6nGy6xPejXbJZeUl5FZyYsAyC8RjYUpE4HI07xARzLHzkK3Foble27zTHxGUhm3sGV2BpyVw
HP21hXJPxVXkYNpTceE4CPZUXCsOXnEHrbgBbx71hvnj61LBN1dSSBZdl+P8ZMgcbKPINHaxTXhP
H/ZMKxi28boc98C1s4OsuLT+yxKtOjayOp3rUu1Xcag0akc/eIDuaV4VbPGRCreBUhfNxMuxvAYr
hNHuivMxA4QBOasOqmdhTeI4Ti5Wq3cwXM1B1MawqloCSoKuoykQlzzVEfWQkZlAVCjTnw+2UqaY
br0sjTm75bkOcqGGQKeh8ozqONsQ04oqdJYo8JUBvrJutOsTnIQTKw/ONSOoQW8wIKF7gxQCLTkw
7VMQI0ZRjADvci3qiUWmLOndzlFKyMJNa4tmTSGdnUbgrJQg5fUR6P0wXiT5MsliIp6N+tu2UeGg
N2H2ZwrsRXmYstXKUjTJyaBn1ZMKJ+CRry3dK4NTZTMvpftgZcr7G9xj3wzRo+2SZco3uVVO/qQe
FiC3wk4IPaDglQ9jhLt7E5Zknla8YDeQVWYQjHXto9NoZUClOzE6ZWqTtvty5kPXnTSMaFNqrsYo
LD7vU7JaTibAr0KZ0H0qSME894mzDP1ez3dsceBushps9GO1bbh3Ft4y4jvrmEE3Y5W9b17hoY1C
0FPcARBevih4RNdvyqBkBS9g3QIGgmEWvWpIs/eBuOM2m3P4yjUrg96Rr6RGXOHnMC+9nIBcSRDp
Sjzqr4kzrGW+QD2iV02J1gJZOkAb4zJ88AYwaMEQWn3ZZCsMUdPDZEDki8IMVQgK+DjlIrLo2tJ/
eHNPsG8QIjocrAP21PL584CCgMh+8wq5MtKjIRjLCYIl5Ott92anw4W0kj/Ga1M/GvBCHcK1Jk7k
nPQQmYVuF76W1msE19syygMIZy995L+FGz3uHwWD4FG8YZR5QN6WROf6wzfBLM2nL96/Q7n3JoIp
n25vJOgqhV8yfJhoXzt0kohqXy86ksXhoY+KNMJDenBBb0CJP/izSHMvJrFPVMnBo0NQXTWKdNES
afRIMR+ERBoN4+uJ1BKjUQGgj2V0e7aEewaUd8IekcAKFRiIGDVlH5LJRXKOqlPquJ0Wi5hI1Hsh
XxiUfaSz8BVBb0CTNKPs51qLa4ssOD39+PLp80+nL17+/On9+7fHp9+9ff/s6dvT1+/f/3B6+jhe
yjP5cxndXRQNEz6X8ASUOiidzucygPDFBePVq/SMMh/kqe9oBMVyALP3sfTJj5CwRp/gt/DsE+q6
uAtcJVy0oQeBpos2gyNzcLT7hEVxTIroZzDcfl2RSfRTpW2JdExmVL+w6XvO0gl/V0wpUnntHhpM
1VRVrBAkwqaplg91amosdpUi2sgWNZ43l6+iWqYoXVd9satMoqYSoOYVoc5Kn7T7lo5JrgSLQoPl
A2gh4zGlz19yjRrEQO68Qq/Za98np1Hhebgk0ZPbDSrkfpgFLsS0qcLdRQOM5/bi+Uvn3YO4dM+K
QCMKn/PAUi3yqsio0JvCgypHVRp6jYganXs+TPIyotETODKQdvEeeuOk+7nXPTrxvfHT7u8n/sNz
Ej/odx8MYt91j0xuIi8IAupD/VkKGhyefJJHT9ptET6ApQt0rSw8eBthPVqGyVOnBS1jQXIW3V4v
srwK77LTIVfplM/DwR6Z0/R8zuHXZUqvnhXXYdxr9VqDvdZgLyazFAhQ9EFOKs6KCxrGcr2fFxmQ
DCL1F9Gc/Hqb5nSSlGHMiiXEPTepMFqVvCbXUeaVnu+T48jrkWt4DlwlbPqRznzPu51AByGN6h2m
n2nIo8Ge03UeDUhyVhXZktNjK52RSZZUFZ6EKWx3FU8iTEg6KXI4X8OCBEFQrcnEj57gQBwzAN/D
wBrkFix4J1D0TIKPK+hxBRzqDIqNfsR4Fl7ufzvYeyg/uA+6U3pUN16cLSfpFHxk+HIg4yAIimCR
lJ43poSfbBkXaiJBlaeMJTdBWuFfL/FHSThOTk58nzyP1O7LKG/ljXDWQ8mhLbYm6Zb+jgUMUgM5
3jSR7oPbS9gtaDSALVreE5QDe1TrjR/cUii2JlfRcy9+ylhx9QJEtWQ8FuEzye00jN/1B639y/5e
TC7oTRhXj46OwPvLCbELLfpHrf6ge9A66B50D2TRfjr9608oeuKTT7qLn8qPsGz1Xg5aB/N+77Lf
U5V5epkf1ft5d9Dq4/90H5cX6edE9PHS6qPW/GK/1R/A4Fqm6jy57F2eb/TQH7T6Rz/vy0LXvcVf
R0y0/wLaf54sKEs2YLQX7Lf25t39twetg9d7yaA1aMFO7nUHrcHlkfluDVqDef+RndAd/HxkV+gO
5t3drDsI9ru7nzU0Jkd/ybFOUjYBg/PbyXUY9wcxmUCB3ZiwMN7VYDnfpUsx7Pc47HnC+I/F02ta
PS8WZ2kO3nY31rn/6FJN/PPnZDC52oTOo1Z/71JD//yod7a5SINeC5ayr/Hgr+LP3gbKDAat3e5h
8GjvUQv/TYL9YB+B0O8GB73DVu/tUbC7v9c6hH9Nbg9yD1q9t4NWX422P7s6vN4cyF6rf3ipYXJT
9qaTjTKH9oTy3cnV50sBtwsBNzq5qENq0Gs9ah21+gdZd7+rh3C+mA0moupTWfWSFXnDllpA7Ufw
X/eRrP0XW+ZVJmr/adV+S2f1rbLo77f6h91HXbt+/yqfne+K+u+s+k17bXHU6h9C3a6pv+Dz+dVf
ov6PWB+UWaAeQ0eVt+LQjeEckOcu/r4O48OY3OC/7DqMBzEBVsJADevgzxuaNK3Lo0m3H/QR34Mj
QPqf9yY9SIIv2BTzfm+CJVqDVnAE+0ZhZnp9tJyJoX6Aob5IeILRBWG4NMvSsqpvj30xuiMxOoUR
i6rKrj5vjG63tf9z/+jpUWtXbdG+fST0rzKaHTTU6g9qddSIF5cHF3RPjJhSGPJLHGVa4ZCbN/QA
N7TaQ3v9eZrNmg6Ao8by/as/s8O0ofx+c/Fy8vlQIu8rHOB1meT1I2Ix6LcGfcCaxaPWo8vuXnC4
6LX2gsM5/FRNTfr7l01A7T8KBj8P+oteqzffCw7f7bYG/czC4FmVfx5sniX91kFw+PMuVoNuIGU3
A+TX5/jV56O0oUNTT3S3m5lKyyNK+wMx4Tcw4VdpRhtvv/3W4PWj2oHuHuBwog9qJ/rB72pa7K/Z
501s6e+1Bpd7tVbUHcvzv1h21ngzHV4agB2cP0o3AAabe7+1C/919cmXl9PdQkyWUzVbiA/z/+fZ
9lpHrxVSnfUXLGONt9GuLsT3aK83aCx0oAt97i/nu5JgyBEW32XFGf3yRtSEyeIctN4aFmeQIBmA
//TURHutjcTuQLe1W/Q/Z5s43+oP5rrQUbpXLuXpwXDEb5OSF2XDrdR/9POBS0psLObRov+o1Xu9
h39a/WBw2BoE+/tJv9VXd+9Rqx/s7b/eDR4NnOQuJL+Fs1sBPGGXmby0UhzZBwqsjI2R9YP+wV7r
UXDYNy32urvB0eEj/Pfg7W5wuAf0BxS0RhzsB4e7Wbcf7A76rb1gd39g0QGt4NEABjnIIGcXS1k4
FhzudoO9owNNQyWHy2q5Sbnut/Zbe609vbwXB5/lXknEnEATKOeJ4JbXZtbatRaqn+SLi6YTbPey
39cj68M6vN63v7uDn9VeHVwcVfnhxigP4ELZ78JY1T10lpZ7V5K8fgsD/UhnjFbz51f1UcLVlBy1
jkR3raPuUesoONgX/4i0R8HBXmsQHOy9HfRbaq9cHs33LyfNE9qfG8rnrwNe9JqK2d1Cp/Vuu9Bt
F7vdNWi1u0xn2W4Tofbo9a4mUPuTy0cHh2L6BS7UJ5ZU88Hm5B/N+2pG097Vovfn5uY9aj267O9N
YEh9ONFag9cHk64gT8T6qMHtJRnjew2DeyQIGLG83cF8byJolz4cdpeKFLjsHVQ9+XzKUnjZ3173
xelyPRB/b+C7H5Mb+NaU9nI5Y/ub9fZkvb0t9a759cVUAKlCIP26ceQfIimqQdQ/y/ZnmwiIZQaG
ppkenl08kpTyhEZzzycZjU49S01uSeux/0BHVUWqnCdAzxg1eSwM72Su/f5rE2jJnaHRkzYNUvSF
gc5bgnTqYyRHtI4X3xi93QrIYA3iFtg9JEtuIP6iGIwdyGBrSTFUyxGPGer4BJny4n0PTHlqZNlR
X5QCJYFcqAjkO30QaouGNRQ6nXRUTwMfVahCNmYkhbsKmgtV2ox6zD9RaiUtK5zAwgF6MMsS/g4M
kIDJJUYWRdFgRJHBUVKIigC/Zo4x85wKTq6YFi4N0Y50vBxr0OjJGABOKLA60shlg3B/xFUxZDdS
zUUE9ypKjmg7tRIApUPXXyqwbx03G8JvD8elR2b9bToN4VMt1xK0EcVvGIRMFS5vRLVAqse+xazR
SKGCbyNam/rhGAX2Ahu9VM0H0Qy8p+V2+cSgpK9KejA2ao2Nbuna8GgW1PvoAQsqBe5NcWIvyzlV
6oNRW+JWqoeXC2/ZaQA8utWqTUdyvY11hR4VYDf0CS0kel1pw7oCM9yaZGpNklS676IGmgmoDGfg
jELuDd6ChRfKCGb9wNk14jMMiK9NID50z15ZBbWmDDRGo2KcnYA03LPq6+3KRomwsRdrnUlI00Cv
gfix9kkGm0ookGSPC7VzM71zZU//WS9qk07MQp5SY3smVpGiBE2BELnLYjmNsY1YLPswpLg3gBFd
X1lSRDMqzcbAE2sM1gerVTv362iWEMAxbBxig8Io3gCX2xqKwKwKNVvvqj+JsCu0WohH1U4/rEgW
YaEThd6ZEkVOSA+cAWA7mY3kl9Sxy0MptAuEO6AFeB9UBRyC1vC/Coaq1gjvg1BCFPRntgCHVFEJ
sCbu/IudfljcPf+qaf431HHbIvym5eJiKLJpPKKhnVYmKesKw5BYBIwBufGb6UjAMQBN4XM6fTMl
Jo9IS5LY32xKjP7+LYnybkOy9dHpVw9Bwu70Pj1uFEIRGWK6Bc4zqgMTC0Fk/GmeVq2ipEIu30qr
1jJPLpM0A0FcK81bSQskTPiVMJ7OkgkPYn+NbqxaJoAOtdSMQF2gln9s5cMg6vnPv5B/9YX2P9Xz
jRb01pwXJqfdR33DzyAjhDtaCOqP0UUXyCg8Ibq2tJOSLJC23TGoEGwWnbHkXGQbGhDMii37XaW1
5khDQTS0g06ZLujNRgam+gSs1eI0b+W+jngMa8Ui9M2JseygBIh8x8lJlIMXO6HXxqJcC0AiBtb2
xLjM4MKpPUWiNiXoJ7Zms54TiNpYhQyE3q/kHCPwgfhnBW4R8G8VgaCFPLNFrkZW+RlllZ5P3tPo
4FGPXNDoYECe0qh/SP6kUbBL3tEo2AMR+yH5QKNDA8BXVCqMtKk8xiSh9JIq+08UsapY3sfvfwSH
JBWqEQthvVLVNtostOYZShOGXGuUoCEEu/FQ69ecs+P8ZBSkU8jXBKtIlBSX5f2zfpBZ1yUY7yQT
/h0rluVo5CLpR4f4HJ9gSHC8o5mhrtW9CZ2AXqW4AFKRnCiy3KrR6ZiiYN879BNxq0OaT9hO1B/m
8p63RwcCN04XVZjY9Mn2XtrWiBq6UAQRBYLoI7jjbexUeLDBfuH+oCeGjMgtX51UK1zwxxgX87GJ
atcfCgC+S/g8WCTXXp+In2nucfFzlhUFyLx3PlD/4QA0a4TiK7aV47WqOh2Kh0xO0sjLu/wfuf+P
3Ewmyrv9IX0SDYbdLlUr59Eu/wf1/0GH+eMUVTEoaLT5Da4lfzYPKlRZfAYyanA0kaU05x9BA0UR
yLdnBefFIoQYdvBDS4ED8YNkdAZf8IcwmYV/CS/KEEIkl0qCHOBfa2M8o0onX77bUJN3xkfiT5eG
9EkuWhvRrvwV9kga8cc5tDzCf7s85E9yOcAR76qfYU8dRAj++U1ZcHR/Z0GitjVbyidSMWtJUXCn
027TAE2RK+4YC7w2x7vXI8/gXNLy828SliZd4fHlmzDmbEljS34cJ3mS3fB0UnXFRu6es+SsKzRr
uyBydvURUGUWrsgwniUZyFuUVAg0F5q0GaQACX5qNQA1ysr3YhgkXjaglwxqCqi22j3qCbaDb1Ub
W7NrEm4cBvtqtK76AgPJ1Non2+ornu+/38DRf9iAEs/s/6dT+A9aOLpnC3Ao2f5aqXcLSPY2OcOI
fajQWIGWAhp7Kmdljv4FuLV5OU1RoytMUZ+Y08VznZ/I5xYqZ/9Ab8Ii6pEiF6/n52i0GVakBMW5
ioMDCnx7TXRKPqFKqy6LIHpCAYZz0NByjZt8PCWzE6GYsawoqkr7nudHT+YUbQLHJVls5At10fGc
nG9k9UDtSqW9o4tCtKae2LzhiT3mJ6DGpCqhYog0zaklKheUZ02Fj5sSnzclXjUlfnITK3+ovl/O
ZnTCxTxuP2lfR6ApU50gGmExAXunsLgbLrWScAMVo8vxyLqStl4C4sT2h+f4AoMbCp5DvtCUBPUw
wTT6iJ4D3p9BUDXKQIdNXWRXaT4trho0yKWzAfTo40dPZLlGvW1TVF6xsDBulx63lG4KkQhMNMQF
0MKRESA9f03G9wHildb0yyPgpSnyS22MdhQVkLqJ+O0oQjtbg/vtKFoOdYPRbX2LNe4ed++QGT4a
xC0JW4Xko8lo9Ip6Sz+keu4aW0YBRErI0QILYOcTBoYXY648blkwcGZ/podZrsm43FYMMKtUmGWZ
lSg2jm4GQrG6+Aj+LG2czCPB50mrY56ARnbI78bGx+8pKPHyKnzh+euhGXFOFp4hd76IedQnW8tI
JwaEAncbsej2Phhqmmws5rS6BviOzHN6C6ix72M1R6WoK3sRJ/3TPF3g2/oVA1/purDAdQTyy+gj
9abk1HopvtCLpdy7K0tjbcSqLMg8oaMJ3j3R/e7PGB7FcYL23tN0KKIn9YcYCcPGyJzEywpYCaSd
djrLTgcfT4LTnM5uYO2MHaYgy957UzzBc9jG+CKiI0CXXLEF+TrMbW7O0zqjD8h5Bo6QWEorzz/R
mqdjCpqGaNxgFsEPqoJx9aKk4/6JoC/lj9UKk5A25eqX4gM73N9b3WRoNU8E5yVEpslacsfSce9k
LC3UUhNLAZIqkdk7IRNdLIv6DzWjd5wTdlLMWqmarqSowaHWY1DozqIU+MbAK/PxFbWMJmIbffuO
kmnEn0QTmBnYMkQTRePPIv10mUg6/9s/IT6i+P1w4JMymkIdrLwzIwv8fKJa6GKovPJ+wJCcKaJY
TmGF98vifrUFe6peuZ0H+kDpdOD9/HiCq7WzvF+zNp/vy40/mYi3SfdrWm8eOX+cIEwTA+x/D4oS
dUSjTwpstPjKRgWeosd0dPrxBp7IdWZw5W9I09TrUsJcotzDwfA+vdLHfKSm07S+iMdzgbc7Bifv
1TZ/PL+7bROdC20kH1/QkTxsxen97Ma7hYdtt3+49kOqCJc0zyl7jSPpXlB9QLt1nlKbfn9ns13O
nEtSMeCHf3qS6GHRCzRQM+cbSaIb6qwLqFQX0RvqJSJqDLwKMcMfud8hRuXDY1T2+gH8QYS31yEl
YPikoJVKVjFxahfy+mUWrhnuteAuWddyRRZeZdtBi3k/NwSR7lZfXaNRpC/Sv5a04rU7zr0VIy3P
pJFuFuRV7zwaXBMa3DgPpw/oFPBWCjCocoYhnQQL7x1o8nq25BwJut5qBYwCOUmiJRzyBDc3JrDc
GKyCS/Qkq1VbBZMaosN6IAxeCNGk54MXUyrWAIwl0F3HKPCo7TFGCIx+Bq99E8SFTIRfbKKTyFJc
wlOfzKLbjSUOJlj2V3Kjf/+2JmbbMGf7W4RZZggwObL3sxlY8dqtdivBC7Ia71awVdcuFi0lFk1I
VSzZhMLQw4oYdA6XBr/qODUjC29mLSmVbJwPNVegrwyjy+ywDWrKux85RVyE88lz55ucuZ8L+dKj
GBHivcfdPWmxh2GQujJ6INjAkB89s2warjbhw21tCskbAtGcAq3DrtN2mYgUwXVXo5pY0OAamXe1
YjcbxW4kl8npqM7ky6l2S1ITrTWoI7j7hm+UABvYbVjPkNgD26QJrxpJPjQuQQeGfwfJx2oCfyVs
oVvEhXDWNEr/pLxBn6FNahpyVoKnrwtugRIEBmwew0hwars/UsWm3flRqYDc3sWeBJdg3TSfppOE
F6yVVl301BULj/fhbSNbmHUFI9ewgrvIsF2LOzyNzFRGW2YYOgHGRsG4r2W76egrR8xowaaU6THj
GHs4OGfRFKxSGGuYSprWF2OXKJ8rPBdnE0KdRuUop17p2y57bJ5rJTwbavZwBqy7b0J6J2N4kuSX
SdV6cJuO4rTq0mnKu4tiCvRLvG49uC0xWU86OT8HzR2ZyUajOF7Hyl5OxG3c0sU34NlElNCdfBOm
I8G81oznItc3FRyXIdzFr7x23zc574pLGr4x3z+VqlTPR5nfpcVcZnRksUan6eWXuecMjkD5IUec
QlCMrhAAdun1JFvC4GVNsd5MRqdYi/UhL4XRmWMyRl1R2WfqzSFWAJK9creLyizKR7ffdC1Yyord
CTi4zKtvwnwdCrnmcENGIGZ516qDAP3BbW04sNCqG1ZcxaE7NNQ0gzJAg4sC8AUqT/i1jiWwNoc6
Gomh1gqcQ7cQTdYVIMqyEqxmLdVwlCKagOmpkUQ61K19XtmcEHjlA7e2gFR1EKjEKsqlvbqneHLk
tqJSwSvk0ZML7ArIAL9hC34Z8jCFlvwNKyD1iloPbnODdbitWg9uE+RrUK3/NlLbDgBf34yFTIXr
BafVEmdO93ORgyFhOZKH0BprfGnXwkCtPat0J7ooCOim02+EKpzIlXXuymPFVRctbr8JuZuDR903
WscKtzAHifvIkL6VXGPC/dCkShdbuPhra9OnX73n75SYxfc5BfRxBHYnMH6KnCpUYsWgdWH8giXn
LV609E2xITrzvdeU3IIkRpwDX7WpYcW6GLHCarkCyY4YBvBoa3sI06Xhcxgj2638O2A3Lyoe3//s
5HCtmTGLLV1aVNRI7cryDk6BWyFzdDLtXQyXhThjNKBB+AVaKL/QaNwjwWCfBPskONgn/RPyHY32
yQ806tN98hf8/p5G/R75jUZHluv815IMVWqxEEQHjZTjTkdYKwdp9SrNUySljQ6bW8UE77ON1dUj
Q1o9C0WReqNcN8rXjepCv+IrBlzAy2wY8mhkaRv/rgXmtmAbtA240TbIiaNc/M8NtfAHSIry4qey
VMb5kPzT8QtLQfwBtZUEHEt+rTIMtZbVtLVIswz8woLrglpaPIrfxaFOPWsoeaZLPrNK8nmxrJJ8
6hRVifEo/iEOH/7vHw/GF4szfvLgYRpwEM9Tf0SDCjX++r47xVo4LowK5YAxOQPXJk+iH+ioHw6s
pxXHZVEqwFLFQ5QeWo6v3uQ8C8Sig7eyhHvynrxdJNfpYrl4xYRHrxfpecqrEEdA8kKYuoS808mx
81hetnEYgy7CNGHTGHSlRZu2f9OcmzX66kGJIxokz7Dw5H5j3DpAeU7EqtUtI2b8flhVgq+xnKu1
l5/g3dmKDCLWRY/G6JG8ljuQ1RzoS58zcf4wicNj3MlQUip2j+SOVs5y9CA6HQhNEf/DPFj/jdXu
KwipVg2AmFKmgiFjoMb/aj9iLqtVKk7q6peUzz2Ynew2fnDLofD6HzGU/ye1R4StCFbbA9R41oFv
4geqHjo6CN3mH8S+UyLVuxSIHZEuoteq5fSBZErX8boJL0Z/O2jEyaPRd5SbRHlNjLhIgpG2bUdz
iX2UFPDRrrlmxUT78mnXA626j31J+AG3A8OZeg//1/tjeru39rvwd2D+eqPwwWr86Y/qxH+oyGsp
19ta94EsSet9j4GzfIJ6Y7fnLMmXWYKusOJFkYNlEv4J5SXHfHJDExZqtx9rabzxAhSJ4J/gp0/P
vTSAUiQNsHK3T/rG+AJV+n/69PzVMst+ownD21RUWK1U5juoJ3NkG0JRNF3jkNHV9UmUkyK6nSY3
ajyJT5wpTJOb2gRSdwLMX0sTC3cChZhAoScAgfZuzCSqpkkUchLVxiR0OyYT+xN50+RGTK4wyFOJ
c+52re4fxCZ9yI/ywJqo4GDDapktAu2Dc776JkFgxNW8YDwmEAHu9yKnYfzTp+exgAxgPmXpxNoo
m/DJBXxye4H98Eudw0rp5smXhwJa60iYAohHumaoyMSvGF8u1s8P9X1gXQYG7BO+YSFHctsAjQkj
G2Ebx/zVSprFoWo1KpkyyxeMFWaJuzqHj6ODEQ1/p56lkcMf/kZ98hc1VB0l3ztk3ZILUhAUnNW9
B0PWDwfgdlqGF5s0rIrLrpkHPTT3EnrIiaZWa4X6JoC7uDczrrOJMF1Jn0R13iiTohLDyyPFhqrs
hKaZlzy0ktMuIBOBCOqWxyhg4v4DPJX20AhkbMw9qnFlmIXtKJp0OjLg+sQnlWX9qM7j9ibl36TW
y6N+79tvrfXBn1lx3u95GK85og+V/aQ37pN+sE8GZBDsk12yR/bJQbBPjki/d6JfRPnjCGj7fs//
1qLvZ7ymEAvPagj7Wo0C5MWA4h5BvqkOl42ymWcJ6/d6gq6XOfOCpZ/BI2N2vLXMWQKvH2Y1BCVI
0tjBF1tvaNqz245Xq3pXkvKRDGjkh1bhLxqJkcTT1zU4bEtBx/EXKpQnimjcq+1H7otwbO7onzKa
xKtVoq7GHjyzdMUUKubqdH3tsXEazFKaTU8wQJsUEuVPot6I7kR5yHdArbqQyubAaULDB0fXPFdH
BzRHdXNa5iRrc6GVURmFC7BCBLTWu0AkZOBg35t0K9/eH99R2CBkGVWPeyMLPauHmf9tFvbIVFZb
NlWbRZMnshpuvcnDqf/tNOyRcmNrohczz5tBQ2BxuIiWURTNRuPlSSgsUWesWHi3YvOF5U4fYi3j
Vl3uTL/V6nlqiRe4whxXGHgwlxATVVwRepUXtrEw19LysY4veYL7A6Q8w7rNpQQ+vKjH+UiAH5hz
YJctUpmdCmqIE5GeOukVQB7TEyd9AkDH9MJJz/REUant9PSsuH6XXIdL+RMC+ObhRH6lEHADf/4T
jPfEr90wE78+orrtuCLZydqWXy+cN5RlcTymgWqXqJ/JNRgzG/TqgZkrRJA0S6ySUsQV1s2bcCWJ
chfF8oep/20a9kghqyVN1aqIOSjGHhb+t0XYQ1faqDsid2SyU2gFjmKRpHk4Tgg9kaiAv4XQaLIN
NysYQeHDgjVg5MTCyGSnsDDSdFep7jIL8+bc1tNQCAc6Weh73MY7j6I3OWkT04R7RcRIFRU7iarI
ooooVLlKOGWzJMte5lPEBp3wpnqbVDxMLYuhbt8t8AFj81zSMHkS9ewsiUUaAQrAaQ1C+DpxihdX
Ihyx6sjOPIYHXVjYSSK6cbKW7LlzHu2RUx4F/YHhvF3eibBu68RJeplPHSKmgU+HjyTLvhRjKAqV
JTGBxwNbW4M5Jy0nPcB7+6zFpMQplfs2sSISqqjoJqCW12X4lvKSJ73Vqnjc81er6jGQUpOH1eNz
R9U1M41U355yMuVetblnQLtuGSXdjEyjYicjM9xf0+YjvLTVuJcPZ/63oItn9tsUk4ZNlE7pr1Yb
iQt/tYLoDAt73PNtW27RLf2HM39jK4ESv9xKDVtxbm3Fcmf2LbcjGN1wE2FW7jW5jk805akz5KYD
5VTv9vS0TCmaC4c5wY9XsPNCefmKJGSHK2I/wMsIjMixhC+KyHjdAaPT5YQq5Ve+Y52Xr73c3Omj
Uc8nPTA43EBUD5BZNek/6SkFdusUqZ0goLop7co5sWbErOGDFdKYBtevRP/2qJ0x8trpAwN1R/na
HaCiTbYM3jLybSBTm+cDUajkiVhEr73UvXZhSKSKPBhrD4T79VwINt+3btSUnJ7OlnlOMwGWRH8L
K5iKe6kLGpH7IUmZKBE/uK0VWv+x7PV6vQe3KcSud0gRAh7GUw7ePVVLTeejyDmeJ4yKTuBm643i
fq/3jziEZh9WFhVragBDE218wtxLiGrRFEDQiybvGJxNG1zrlUHNkNorjAZ0UfIbtJ1ZreIfixYr
rqoWsolafE5bIgghnbYEjlRBPHRX2HZOkYODA+n+IpeOKsRGMlxBdwt3OlppZgS9X6ZVCmbfopDu
PQDBtqbgJwkXJvJtLlwNcEBcewe0TbhY6YpA5M/sbN8fxceirVaZFbxq5ZROW5KR0LpuJfm0ddNC
AFfOCDBgwzlLFk1j0IivMbc+Ln8Uv1YtYJ+V7rShszIF3cO2PAY1sD6kFILmMTXsUl73pgnr0YMO
i+y3WCKeP9ueRVZ6mbALrA4BkqS3Ea5odXluWqCHfer7PiLB48EIXNw29jGK5SuxhUMJ408MVYud
OSW8ldGk4i1+VbSuzcziGEmLYx4pX0xiQsTpguCLk1gP02f4bb1fSe21TJpfsWTr05nEGU2mlJ0V
KPKwwEU0nhILX0g8pwlfJGVMcGFJLPZ1TGJN4sDAi+sPWcHjE/KcR7cwtzAWczoDJhyOSZYJ42fF
NeJvTERbYfxKtin7CuPXqlM9ktCgYEwcCIXxa/3ZQgg2Td4pJYG4vXS/1wvx8GvNt9SywBjGb22Y
AjTD+C3CtExpCJgP0WEQuKHawTHRoA/jY7MKFkKELsqRyprMsT2WqmHczmD1UoXxL3rV1uSKQxCJ
JQ3jy4R53e606iI2d8WR0IU8PyblkpXZ1kIi1wcmZ5YVV9uKiVw/JgVDcn5LMZHrx+Qc4tJuK4WZ
MLI0v9g6rjS/8GOS0yVnSbatlMz2IRjDdFshRqd+vCafYPsCTGISi3HGJMahwOZAMMQkZuAnOYbe
YxKLWccklv3EJ+QlbJAJX8KYRGPgiVbggSpFUILE0gpiO6iWQaNvAo8oU6zMktz6lBFAdMKavIAh
1ycFmNHt+zFpzhlszdndmrO3NWd/a86jrTkHW3MO/fiEvG+aFCjZ5zxNsuaZmezB3dm7d2fv3Z29
f3f2o7uzD+7OPrw7+whgc9EAm2l6SRlocXVzeo6RDhuB0FCs/4Viau9sL6Nu+S80pYsNYBJPGyYh
r4bGdlTe4I683Tvy9u7I278j79EdeQd35B3ekYer+GcDAMRd2Th/mTXYnrW7PWtve9a+H59YgRRr
Qp8GKmyT297I4L+L+/4Fvr/Fl+cuX57X+fKWvc72kX95UBsd1zuyzHIa+nGJub9r8twtaY3hlRKq
gbBVazZc8TE9GY2ueID3fR6USUY5pz+k+RSnQxdJztMJxixRHx+LDGu+5GM3EYhmvLpOmlpSB1I8
es/H/B/v1ROuobA+AOLRBZS9sMtWyjyxTUcvIPeFk5vm5xk9xgsaSXEspyZ4xcefoMonXcXMHknx
Nzwa30qVSawOAdhuSlqFd1Pohl4+WRPVwHN9W5tGBClvE9tWhRdpJWIvpnYVm+rWBLWp9JFmqMJU
zdPSGq1FtUuiuTayQoXtUzWAjrfKfGDFOUQ/d8o0UPkn6xPXOSiW9clbOKz+m2+WE/JRy6+9t9wn
n5EQ2wQweWYy5AROyM8mDSdOXpsEa3LkJ5OsAUl++dKLzX4/QWXrvPzO1qlp0r881hoBlSO2/4E7
Dlm1p0bk9YXPYStLH2ROdNa/3NPnB+69sQ3Jvnezv/Jp/CSy1Al/4zU/XXcxNawh/KrOphpTpc6E
k4pVPWIxbXPDkuGaScKsnumY19klltbpthGbLmWTnsN4AYbjE8c78D8dSYAzDcMy+jvZGKNfuMVc
kWjtGmLJxNEzXmPDuMUm1mEw+tkua/aBW2NKnTqv7TpbpOpfJ83/anG/2pqrFX/SH/1kD+hsa3P1
juxDY/SZNzLKRvZ5fGJ3I0/m0dgc0g3MvpE5mU/Cscg/sXSTeU0NGl3TYKlRuxe2vRoWgHvNmixh
tfIcJLPxaxttZjPH2t9zlAyodgxq1WEkkwyW+I3Dsbl/v6u2N/mPv2IW6atMwx712r+parKUr1uQ
677R8eOBIozkYmyW2LfNbHMX7sACNqDXXGAfFsEmNj9y6VsYivmr1VtzCKkqji1r7opc8T3PgVMM
NtqVcrQ8UqfwRglto4XnjeJZs+gJzT0GQUj90QOOv7gfguVaGr2xhYjMvlrUydlOrVQxk06n/VG5
RpcJqdQKEd/kB1DntRS27WjIrgdv0FwPxxaSM7ssGBGbS1C68+502g1t3FrStCSveZ6UGw3cOAmx
M16F3KpSOMBXojK8zSz9aLCKx9VVooXvwCP2SARTlTIDdSeOgoKlKqKDbMgJDJhaRVHL6RRMD0cj
bik9NdQzMnSXnJfq2tYjY7T1dAzvrryl5ma1Ue3ADDeH4J7tYa0b60IIEbCW/qezIiz3UH2D5V4e
0HxSgB10BUDEFKUvBjJswCAroQDfrVVUQLHLtFqCayhck1NAApL6w6rTqdA6GhIgNKfAl0r5m1Yb
7jxHyXsGPbDg2hcXvgpUntlk2gS3R+Z3Ohm2LMgbbFv8jDLR+lI0diMbI9Moz7UI2FdtLzfbXvqd
ztQIYMDbFjYvakZjwHPIJ5gdLomgBKeWcRLmRFG0RKsklAmLFuXHci39KM3EIIGmq016tjmwmd/p
LGHtYvQOBQq+MxyZXjV0woGrZC0kxnyUGZlV3ZcTmK3XYjAlrOciSu3tVUNLUPKv5V5SxtMJoKyT
JTbuAqLbW6ntKFp0Ol7pNLLwpVZA6uzW1GxWuTPHMaYgS1dhOrE3xYk5Uec+dK1baEfRHDvWKdHc
J3YQ4tLXQkVcbIHlCNEEFJpKcCJuafM6J2Gb6/AI3IRH0IdiEATfcXVdjW7FGYlf6/B2jepSKlqC
RGK9+KNbkRKqLF3DrLE+y600c6qPbnWiGI4pVGtnrdquxYJQm2bjMh/dis9QpZvBKQBaY9MwtYam
0uTI1KfbBo7LulKy2i00agAFbQIFukVWyWN+0lR6zE+sAboZzl24dI5ROSa5id13Zm7v5VzeevJu
s3SIm9obNt7tuegGHfGIX3cqZhvjQt+hCGa5q3ah5oCnVG0OzG6OqTmw0NJDL2vN6ebB6bBqG1QM
RiPBLrwB+EKC1Lr3fW0ypUik1Yq5l7TZ4ambAYOJH9yydcsDMx/fuvAWd1BJFu6MAl4UGU9L3152
lehAbm612G57X4OB4gS/BqrdE79vYn+1mqqf6hVuxw3JrYA16sqDLWLfaFpPf6S0j3RPRPcDlXRP
MhlDBesveI8cg1WTThG3hfyYJRPKTWFAFNEqwnhjDEp9BxypGB7HPXHVtwB+6mz5+PRUzPr0wS1f
nz64tchKFPPXSTsTX3r8vzK+9A4Elj6Nraz/Pd1Zne48gPTY11yPPdDAk62uLaS6zOtmsFWRpfp5
Nk2qOTVfBecUYz9I+xKjn+aeZXwE7Y4CMLbYKHtm4UETIV0jZ9OZ9/CPM0+IN1fiT7WS3kyn/h9n
D4WNq7bMiEWZWNVUotDVGc0n80XCLpoqqVK6mhB8rs6LJGsqL7J1aVpx8I9EV+rHdKVkq6uSFX+i
Bo/6lRZ5U5Oqgm4URLEr+Cen09XZcgrj+WtZ8KSpNpSzFvb666DsWBNKwZkSgCjRnfkWomD5+Zmy
wur4OLd0rQTN3NZvXvPtPgx8FQ5CPpLiB7e58hoxs/Y34DR4gKhjSNt6m8bgY1REgEDNKpMxTZl0
NVPPqdLzXFt6ylGAI2jXUz7XTLpxfiL0W7kwlpKgwOMwjdo90r6GB4lpUZlrpgZQz52tdw8W09/C
7FLrYCxottPJZqxXtUsRx07SqJSHM1gKJPLrBkyOlXbi9dPrtPqEQgEamI/RyGOjJARbQ7vAjVsg
DRNbCfZTrpVg23h1KQMZFDCGlIDaXsjXUp3UXBwsMldHGpmbI4ncu6OINm4PNMSpsZTF5BMzedSE
1pOPfxZn99AZnSChJRWck7vgUoTJ3XBJwgIC6SHNmhpevngIUfmSo8QWr4V46gJvX0EJo1uxbSB0
zIU0Fw9c9sn9nfjKuepNjpeheDXiRQDmBgVACNEG3DLeCQt8m8jpjOUsmJzFTEGV+UQvS5huzM0q
569PzCSFGdEYXMUqh77btnRyIk3cnQ3txPzSnB/uDytzfABzURrU5coxpQTEkHU6bfHwzX14Agtf
wdLtbKajnlW216UxJZJSOBHWiJusYAX8e0M4VRCu6giTCUdEvsYbA+eJyroTlWrWRaI9deeMEynz
0VfMSAwOHiIQkmQNIqe19ML7pTXCAIaaLQbtDpcI3NRfrZYI3JTcjvOTkEt2QLF1PAWQrpiX+mOw
moL4KDiO6f3BOv2vgRWIzaXQbAZ3fdY5+NJ5Yn1yn1h/cS8PcLQkD6AhiwJ/cVdFnm+v+B6vKgzO
hHH/4rjZ/4uJrmj8A/hsJ6IiBpJbR0VfTGdenV+rAjXpQDuAD2CbyB+nQ76z41N89np5BCMDKhMu
Xgb/34niVoxhbnLLADGHKE3UBwRqKjjcDAZzkXv+rQryJCSMPZw5SaOEnS+BwNBCuvxxOsx3dnyP
mrxxfuKjRgkCr2F83OoWOnmaA72dn1NWLKvs5pjyN+g+99O7t0GRPy/KG/lH+kKFryUX/5qkD0nF
9V+rpJG5vcynGwmNBdHyqCGpsfBP5TThjWmm+CsI16L+muRn2ZLJP1bTGFZD/7BKoxvCN3mJc7e+
TBGVWUvG2ALqr0k+Xp4tUq5/2M1cJlk6Nb9M1tsimco/JhEju6m/JvkHegOutcwvJwviOlfWTyfz
p1L9NclPzwpcFfxrwSvJP2TJjfm1kfVpzorl+XwjwRR8sRTR6DTs3QRrpouSp3RqfllZ+YTdlFxk
qt929lRmTWkNnnT6IuGJ81Ev8I7yZGoXUgluQYW4+re9PZaV/mslC9C5cIOvND83v6wsqd9i/bTw
DJBegdB8WBhH6QVCQfxwM0SP8peVxZMsE5XELxuBq5Lippa/TBa4mNA703yYAj+Dr0MzWvvTFPol
SbkYlvxlYePy+nmWTi6snxbiyZx6cpFzes3f0XzpflmYWCzPMqrqW19WEZacyz9uojjf5K96FqfM
/l3LvsZzQP10M9/S5NL57Wa/v9Qtw083UyGk/m1nF6X8YxLfgbNteWjo37VsNRf8UIPDD/Azav+u
VXyPZ6P6Wc+8NI2688AkPJDkLxttwUJJ/7DQr1hO5sIhqvtVKyKWTP2sZcrp6N+1bAVb82FtU+PZ
0P3aKCI7sb42iuDc/1/23ry/bVtbFP0q9r05vqQFM5LTdndTQbQzN83YJG0GVceiKchGTAMqCDl2
JH7391sLA0GKctI93bPfe/9IJABiXFhYWKN/3sj2w2y8bxRzyxa+bhRyyxm+bhSySxW8bRbBpa5f
6gKPZcuzeldaiFXLzfKbiQFIoIt//xDgklOGs4T/AR5x7sXdcjYTOgoamAlfOwo90TbAamdiAEk+
vqgFxfDdFpti0FwdTZMwtOgnca1G3uiuCLUmUhvw9LnwUuMpOqkEj1wXbMbKnIlZJnRiUrU857l9
XmoJCh3gOdSkHC/LK/OUnzJg99gXWeRgi+nf0HupfysXmXAvQitZlPbN+ibFF+iI4sdsdnzlEnTG
XdEZx6B7tj0G5M45K8vsxHaMXS4yPOfxbV7Iz1qa59OsXMjFcpEEnjnNM7fEFr6AKBOcHuVLbZvE
S1TwWNRdK9iFz+IXtgvncpbZxPNloTlcvoJXY1MJgzCJAQ/MJnwWtmVkq4NjdqZsgiy5AErSvMHZ
74aqWDaTorhybwW78GsJIRu48iVlwcwkL+pGlfwcrJySn4OVgxuZXzlvEmrfNEg37AtQh/iEV8fz
7DJ84yJ4ExDkyb/BIVx78k2QJ2bdlid8lhSZOAG1yeQcnHUk50yfyhm4AkgEFEcXctYtsfEBnsAQ
E50dPzGDyMHM18QCgZfl+bIAsiSbzZDZnGQFPxFwc7pnOfFJBnZOr43P2SQrFqfZMdOwHc5hHy5n
MOLsmOdg+JtksHN0kmmjBI024fUb6D8lsINegx+nkiXZF36+1KcJsP0fYTQNkV8lTgjw5pTPNb69
UnLOC5YcH8vL5JidcJEc86xMjq+SPCtyEMEnebaw48oLvsCfV+hqwD78Krgu8e31srAz+wSw5kIa
7euOpEfW0hhzXCfw5TU6lAVyDPYvE/oNAhGO0KXAYpiEpSqlSvLLJL9KZsmM5awA5McSg2p0MuPz
OZDCEiN8wrvlkUN8uAWQxTN+waGSmTznIgvWZ7ZUyewymV0lbHbCcCoQ4vFrJmB33cvysxN0i5AA
hQrOdAW0yi41UyIrXjMTIqF87XYHRHrEn5eLLOf6Cp9x3oy8zf699kbXZnbB1cMMjcbNo//aRQhN
5lLoR9k5L67w8Q3sGPdwd/ZpWWrzqhXT+al9vrIf/gb7RJgS78xaG89q6MMhmV8m86vkZJCcHCYn
xdXiFKEPn17WmKU2Ft3I+s2qn5iM12wOzutmkP3WBSP1KWbAQKIDECC7/u7s4r15eqn4CRfvk1PF
5gmfMdCQXJzyPEFvxjXscHGYcIFquSpnC52cDZKzw+TsVnL2XXKWnDElWPE804pf2hdo9hmyOzAB
KjljV3j+l/D0ZgFAgY9w0XC8ETu1aKKh3sCqiJOkgBmEewQuWMHPza1CCnYXLDCSQsJcgKgOKKSZ
fbKbzLw85y7ZUAzm2cyNeX6HWOg8K8/w577ZG65Eeeae9CkDugBbBBgWy/OXuc4uWJlIE9BDWmAy
4drhjo8oyRwaofwEngFFyAum4NjDB5iWV5Yj4hPenvL8TMANcpFxoV9ihYtMyJINkkWmT+1UL5Dd
Kxqdt2k1ZNgEm2sJywtkUOFbeVe/908f/NNHCKiCYtS7gFzrt3LBcv0aRpQsFC7OBTOVqwSAcFlC
/PL38PPBOrjm4uQJdhEE0SzT6A3CPj9YqsSdfg8vNRNgFlL6pEcsA/IKEtA1KvwvC52Y2LuJukzU
VVIyNkvK02wRwHBZyAVLSgtT0Gnw9ugxmUt46JBOucBKFnBKPzfnFzZow7aUevaAXXCzkKVm56f4
e5GUmuv89C0vQKVfy4WBWnhyWAaIvTOmDT/Fr3UjtV5wQxnCnzxj9u9BVp5myASt36XrFiSA6Xee
LYI3cH5uX59zDVAFXCyTEPRLnjGzEcqlArWHN3lWsKS8gqE9y8TJEqg2pIR+M54FzBn+3v5/SIAu
uCvyU6nw8QHLpSWp4dWCKTzWC6Nl4mMoJ8tBsjxMlpDX2Ak+pZ6ZpeA57ED7f4/PuHtGf02oZVO+
YurheXJxtyYIrE+EC4zsa8JEJhcmZCj867uziw/44LBj/fwhufjJYtKLJwG6hIhEbw01g+44eAHz
efE8xBZI5pTJZ6lmDrF9VojJ8Cy8HCSXh8llcgnsFFGHHk4uLSK7LLg4uwvKCprZF5Uj1YQvPwEK
x6fXPu3NqfxsnlAaaB/hpL88L+Bghn9YVvgXpfl9D4XgEXrJkqtBcnWYXCVX7X59Sb5IeX5XzF5l
EE1iDqg8yQAhh1ef4O7z4it3n+dOjR2uPbVFo/iKDRNruEhGX/yh5eUjsek12MoS1mvvvXdVDVFe
QVfV0LHxrRTA6ksulNQS6oBOvvwMjLwFUxoJuwL9J+3tRS8ESvdewR+y88dignKoWm4ShKxyPWNN
D9suBBJGMuXlb3DRsWHU4wjU472u1ULJRUvTD5N2bYVGBkNtquvCI9A1qDZn9BqFeJzElures1rK
80+ctfX60zdN3uuWJhL6oEWnv1umbQT9NRMRp9826mf1qGFkXwQdT130BjDdgw2NtnqwP8GE2USQ
n5Kpvxihqu4VemVAW8cpmQIpHRrp3QPRkR3IPUHtxGUlKJmMGm/JMYjN49R9CjPgpl3TwVDf3hA1
gfQL10gEoiY98aulYLVEHK2quHOFQKgJwdTGakIFSjzdlFfknkiyxaK4whBtxFcf7L3fahWMJozb
7YZOKOlPVrLI55Ed7gnTQU/eXJ0fy6I048jodWXApTMMDb0K3s68VVyvFwuajdWEgMHjjF2+hMC6
lNKDwd7eqkKwgGqelA/RrRBeAUIQ5R4WO1RzfvraMMP9ocz+4PNoVW3ZFCo2CMt3VYHa+8Gg1i6A
pUAJtI+BgRD6qzAB0edSfc7UDIOiu9BMF5la+dAjwgbgUsSGHOPEAm+aBSFPpPX1XtrQLjkB4E2L
ijKypLi6X0RMZjRbr1cbNV6mfXKV9isyp2cC4jsbP0UHlrSYor6D6f5lkiuWaWb3azQtL06m5J6I
VhV5JqJlHIaEmW923nXTDWJ6YzVLLkEdbJZcmT8TaQwfzWfV1ITgqWKy0bzdqwjYeUc+7mGTXcRE
QECZdy3sUKOA0CA32OuP/5P2+uOv7vWn37TX//hP3+t//E/Z6z8LGm70bfs8iPdWYUwCXKd3AvSt
GruyyK7AhF9t35MnU/JYRMFGzHBz8pis3EbCnfDBYiHzuRXYxSaQZ70V3ocHuIfy+kivcJQfrdfd
XJbkF/tcckFuuOc/wNup9Uf66smQqZuHhpJT9HCfKSJ8HlGQJBThig7YwQ8kU1SpA67qPkmIOrTS
p7xMjnqUhX6xNR2g1bjba7fFsNfTsSsbbrgeqJgElmeqFV/G+Bk1wVV2I32H9uMYrn2fd1AVIJpa
5vbOzETc2MFQICaiyp3B945MlMoqmYFXdec3fSfEF1sHosKBqMZAAs+k4Zj2RXxTmIHhuuSKIhys
crg/qyXcCOomL/vUPFy5h8uBSxmYwK7mDRRkzFO2AFE0dZScVCnOWwXauW+l2XNhyenzG+3GLge0
xyri0n3bVwPa09W0ygtZMuCwRr6fA0spA7XZ7Odln/ivXX2Nrk4/TuMKL6RdvXvme9fqlO3LH8ts
Bvfi/P5SuQGiBlmzml9urMzXPV3XAVWKZpWqmlbH7AtnqlUf+Phu1Xm/Waepqqea9fNm/Vk1rTKV
h/VaFNiDqBo90HfqgapXD5B8jxN+u9+EaacVvmM4QqkJSxPbiAauYSL9mkEYkQMGoQkONClodgAk
hzzQZEaL/aK33F/ihnA9trh4C4gMaHMNdDX1OmazO1zFuBV99KflfnmQ7xcx5KzXuzzeurbd1a6M
maM4yMiCqgNJzmm5X/by/Zyc0vn+vLfYX5CTGoNF5zE5Cl5nMbmg3IRK0JmIIqEOTOdyWUbReW92
cBrfjA73T/aPYuPs+Ipe3Dwix/Ti5snQj+PqYABj2Ntr95/1rvYL7Hrvan9ZNTfh9C6sDcGfPukD
dETL/fmdYn8RN6CE9Y73y+YE9I7382paAbA0QXATWDK6u5sR8Q2AIhygSCr23XEAEUJK915yAe85
ZT1JCqp7JVnSwX9nQJqO1AFPwcN0C1ZGbVjJYShFNU1rQHCfHOQwj+t1K+NqcGCAZHOGXWVE7O1F
s9t9+KWz/1Kqp1RMZncyNWrPOW5EAXM+IDdWS3hjBxLn96Csugv4MeWNdYBRzDZXvlEHLOvsDhUK
F3XZWtlgonncWuNg0nlcTYFMyvUWDPZn0fTpjRVAR3WBOOn0xupAVB+nlZZWI7dmBeFHVVWf3oWK
Gr5lclUVquZA0Dx4qb9aBsfzrdp/ijl7qT9OrTPgNtHtgxGiPb9DQvhXYwIWnvvCnvssOPeRXbn1
8Efw15QF5DjEdjRDBFaOYVzUrBa04qpHOFPdHDTP+ZiasUyBWB2x0Nt46BNoHhzwuSHqKKvm4Qyj
21Xj3z6g6MwncFTSfkWgCPjm7y7wIntRWdXnzlpQGAHVQJlWNVFdz3pdP4Mve7cPzOcQf8el2JEk
AXFAgv4MDuqXiuDnwZUMjv3yM7D7A+QWtBSv8qxkO/00bH0Q1D9qdiIgJ9JmTkAGDY8Vy86GWPOg
UfPhcGZi3adbqzUfV+G2WYTgAUCFCx0Ykob5QEoGFqHNrEGQdaLM9Jg70XtholYb2o/ThYJYGPAs
6VJFZTxkNIBMVwvYDoIdg7EJHJ2rFG8NRLvCulFYY6Q5W/gUC+vgxlFG9l6Zk4JGJZ1Bw870lCzJ
jO4OyNzcKUejKKM8mlMJNpkkp/1hfpsWw14vj3ej/HaxtyeiJS3H+YTkpIzhfgkOGaIZ3Z3Foyzx
MBzFqXl7CPf5mMzARB/XK+qxaIlfk562T4gc5g6r2Dma96bT9Rr5kD5c2mWNmmpDyjZ2GkVs20y9
F1FPx6SMU1aRMrmi4cVha3V62ypBdQyr01DdjM25YLNvq1RcU+nurqlVQK050LbfVienjCgfdQiW
UsVYEceKLPr6pqrclURRsxwp1kZNv1QVRsQ6Us7uDW//Dtot9HuIX0D8EsNbAugv/gz0964DfwD4
+oN+CivsZ1c0CotUtPdKTwSbpYis+GBJZmROFjQqYMMU9YY5J6ewYU7IkQkVA7GNL/wjbqNsNIpK
KqMTmuM2WtL+cHmbLoa93tKcp9Hy9mJvj0fntBgvJ2RJCtxKp0CQn9Ld03hGlwRUq+y5EsWkDPeW
OWShrbLeZM0iZE6XB4Ph/A6dDQ8O5rGVckdH4/mEXIznEzDOCr+1J1QUV+AW42i8nNAei86xc+QC
X7V7dZWpUU/ZtBS+IGLUEy4BvoljsKA7cTvbrv9JvbNrgqSmYk5UFLu9FPHYbIBIxg6Ao8yzqIp/
FkawUFsgYiiSy/4/p1pf3+Dbdp2iDaHO9WinwI1Y/LOwmPBToLHW/j+nWl/f4Fvx4p+bAgGVAyC/
71Pz8CHouW9oGcXJJfgtuALa0X7yYXB9SeFLvt9eUtV1/qkDgH/tACgQbxd/5gCQlJHMHwCAhLIY
K5JY0d9zAGTU7NoUa6OmX1lFjHTwopMjVjOGPMlsyb9LqqsArTWpZI+C2rRxgNdaFLHHYP96Otig
vP/p1O9lq/omf8xfSv1Tj8U3D0mL1wdsQNLRo+7K/Neu1qt+T0OtrK43oMJ9H+psqkPS/KpNml8A
SDXCJh93FxmYSGKXiq5mKvscGnLeEJG+yVQ8ZG5eBUTrAvXYPAJ+jyB9olVcVeTNts+/j28e1t8f
3NoX5EBAHXYNDzreb+2HKV0J4etGlZDQLN98a9Z20JHQePXVBQBfVeS+ggEObt6KyWdF76v9Q/J2
2yR8Vnha7t9X9VT0m51WZmbtW7/ZBZvZ7MDDLa1BUwcCZx25LYooAiOoKvJA0eTHv/Z/HNzq/3Xw
/eFfD3/8/pC8VPQXETF1c9CPb/4ior/sm2dyhhkaX/ZfKnJX0YOPYcKnLT3Yf4DjPVP7gnB6V+2L
a4bN41DgMNS3v0cpg43qp9W+vvk9kfSjgBDTJfQoA4C035ew+LKxfnJfHZT7nJT7qif3eVy1J+45
rtytmLzo6P8BLlj0XO3fiuOw22L/MFyS56oNdkFKs71Xih4k35NHttmbh+SJooObAD2HMXmmaPRE
3TzsDeL9W+T1NhB6ZkDo5iHhVOw/gVuxIhIfe4KUFKPjybrDMLF13zJwm1BPGkiq/dsrta8OHql9
Th6pfdV7pfZ5MzeDXAm5GeTKZm4JuTnklpDbrrmHNUOlUE61au5hzVAp5GatmntYM1QKueXGzNbo
74sKJ8x6I11CzPHtFyZgEKzXl+qbb0k/fAfXpLpRHllnCcjRW68ppypC9Ijyb0DUgfw7wWUVpKe7
82PCvVqXvQ5uXOa5cdfwD5PZEH0UqWyOvhX/OUQrR6KV/zmKSVA2GpnRIlkayM/vAZM20BDyN2a2
7XCNDveZOZ+BdxzfvEVMyhWmXJkUU8KU9ClXNqVR5jtTBs7lH1yp70ypnohv/hCcrT91cjx/+vdy
PC83RagBx/xF9oJ8nTNqqbRN2uxW+psyIOslcK7q2NBYh928xI7ihqb5/5mwYdZhI+sW6Wwp+n7f
06BuXhE4XfqVSwdA/iH2dK5buy6SsrVAINMhG+ATiLhDvPtrm6b8qckRfte5L95t2Rf3lN8B99Sf
g/TLQ/dwyz1817EJ7IMrfOUKX333j+6PQTcEuN65+TuMyVZA7gKHVnW+vt6hg4RbiLFc9T79CtLj
LWDkPq1rOQxrqdOvDjtq2dLlW6bL5sq3bdyNXAflV7e6cr9zud95WcQ/d0dfHtaQfkj1NRuVeNjy
H9xqftC9fS+/qz/4jmpy7ZrC4eKgGm6YP5D6auhyrsxp5Ob9X729H7e397vm9n7aub2f/ucde3/i
LLr1f/Ms+vsOE6tuuB3QFN0KasOvnX4gyO9GVujmahNB2F599y+H3j/a0Pu0Cb0/d0Lvz//o4XQd
nAUlroGibmjpBJNrKJKoC+d1ECiNi9SH9pz93Jyz9w057u3+6GCQBiY4H1tiLSSgD5CcJpxqfBqQ
jCI1jRlX/fhmpNZrDoovB31weBiJA0uKR+Dg2GWUNMr2eU/uK/iix536afReRVnce68iGcf7PpC8
V8DJYuKfZUyS7/f9awkhOwIPsr80RNFB5522hxhFt/abnRcHwLdLA4OTGx2TAMPHD0hm6iUS3wc4
rAMV37w13HqvUb2S8F65r0l2UBJ5AEwPuNEHkUJ4Fygz/j8IEZsH3f9HCa0/ec1wqOdG4/ai++SX
VkL8f/deYkDuRfZi2NB/M7F13OBMLD0/wmtm6X/EHcbNuZtqQT8GqB50wFt0zMYitb74R08HXzEV
DcUW3bF9APkJSK8iHe4ja2hgVNajcIvFsSFgaQtvB0VMAaPRb0ZKWBx0RHTuY9HYx2ZdWuDTffmA
yokHyc0d23n2GIi4tn6357D+Bq5qfNZWK94iEiEMOdQZ4Y2jSPHWUYRIrsZ5vJ2vm/lZ51xm/2ac
CC5iLQDS8aQT1aEjSAfLwIw0xUMjAmAwxl6J+ZptDIFX9Lg/2baZfT4BpY7DeEstAyg1mBiliR1v
pEIlN+6ZJY/QMXOfSDoYSjRxyEivJ+PrVlqN+5NxNiHc/qvxwL6bfzaW0K6cxMNrkbD4e1FvLVC1
K4LM1U58bEsa57uoSmM+sQm6Aao4Lc6NqV+1gwEaMtmYFDBd/lH6RxR+wITQPsng75BI+IOVAp4k
LgXKRcTBACUjHEJwDEgGf98RiX/7YG+BxXVvMLF1ioMBVJeZh78QaR5+3Gf40EOvt7ZurFlRqPtm
NtYHgwk2cABCBvO/LzE5rNtUeNM0QDQVB4dDMFIZHhzYbkb4McdexVCx+d52KYIe9ExlKFFFR6xu
nDhANyRbh4uXwEkW2s20MUHWxAQ5v068rqmu8n83VnAA+G3EUP+27aqDeX170KZFDtv7oUkYOfiN
yb+AvrkDn0ZuOt2O09u2YfwfpB/rka6+Tfvx9TO8hd2GTaH2mSHybPn9yE9U3GP21q2HWy7Zfvm2
5cdVgziqKaHmpbho7xXcHEkYdnDZWSRUJZh1lhiEKuDcGz+Cgo3Tgb8ziL31Px0Y6oCyMZxIEyJJ
SbPa87Ec9noCi3Oa2WJiMiHGirMc9noqBuPN8WDSQytOQJu8fJG9iLhJjkfcJKc2IQjGw5tmsq6H
RFjMrGPAYoDMYgGIyJvNBRF9znkz0FLDmO+UB1FpJnU42DN2BWsT6D9zTwO8F9F4AvLIBSeCzjlR
9JyHAkfuzF1DzftueSI55XFjSklODwakaLpA5zjBkvZJr5cPJU6rjKNsLCfjfELHfdKD2yy8Q89J
Tng8iRPwnUHZ0H2LCp+gYxj7KrJxMZaTiTFWpdLPXpSBMmRWSzTBJd8/LtEM5kPHtXQTHbh8qxrh
V8WbCqpEF03fKjF1CmELfo1SXsOKopajGjc9f0KMOuebQtSjYB+qYB/2a+A35tbImBj3Jw5Y5JDf
zoa9HjcFJRW0PxRoAipi2UOr5zGHTbVe94E+lQhJYam6yE0qK4sRAnfzF0Hf+Ja+oW90hyAAWaga
QWTYii8LgFjS/lDe5giBJXRSTqATppPKPPYoPvQn9KC8edjRr6u6X7vRbhN/QbSj3SjKKPTYdCsO
MuN21wfQaSLB7BwRls8uaR9sBUhB+8MScV1ZZy6x7nIyITO6NKhrve6TOY1mB9FyrA4GNgks+siC
9ocL3HYLgx7O8fPFZEJO6Xn9+Qm8+E+H8x49PTip8h6dkaJH5/uzirv8HrWP/QkVJAeP+Ae0uJnH
24r4WYT2jzmVEQZuqG/Y7WhQR0dIcB0dTSuW8PJXUWZz5kzeqa7imFxuqcYxPeyGMqSBiwqQ4kuJ
hv/T1MfdManGEVDqTbfqOD0JBBkLE8bthMk0rrCrDxhbPGW2j2+uH+pXIhnYbo5YarkKvIToVoi1
Xs5HSRSTg348mh70p6mLMwH6TFr6Dtzf0oENrwPbQis4pRM27IqX0AjsruMEnINFU2KtLOuAtd4X
AIb66U/39uoRvcCVgYujH4zAQZiPzTg++3GYA/kNj+COep9HgcaNsiP7SjfN/MTt8ZrJtmXHbDJk
VPhewBBMgJXxhPDGzRtCx/ZdE8raIcPNdzolJfzkLqATwzgX9+WM3dVRH8wTvvsBYjOYS+MUIgP1
evEwu82HjfAw5QiDwvz++3RvL+sNbvNRlPV6BNFsBnd5Smk5grZS2aM6zU35/+UiZf2f6aikxqZp
OpmOIugQsa3KGHsamy+xyNgU6RO5t0ejuhxELzElkuloMw9rgBG4w1tCqENXQOGSwtWAKljQt60F
PTYLegl/yiwvp58by5tFjIBuWoenq3zY3PWl3fVuS1vPGC08Agx+X4FZXTYuJ2EkY6vbJeqNHZXx
CHrC7XCiMiZ5nOapqrYjmpXrVx2fBJXJlYFF6MjQLXjdgUC5LE915e4cmyBej0PaOQLALGm9yUqP
NjqQRhmTb5gc0eibCPsmwvii0oawgW4Ku082twi39KExa+0P2W1XdsjA/YzZWDYk0mbnYIPGdY2c
8jEkedcmvO6eSnnFwPMLzQDwHiLgOScnGn3DKl3StzyKoRSUecDpdzXcvazZN+giI2oTWHcGe3u1
j4vBZNe3HaamDzhAeOAXg+3r+Ka/OdSLJXCF+mF00F/rLkCAHl/vxEZaHMS1xbFis2XOIrsMdodx
qvE8bgUm5YHbPNbjPZEGM8d6ImW9l3CvAOcOEAMPqjrjtIgecrBBfEchXiWs7qifsjv90SA9GJC7
nDajU3qQZ7twe//Uzg9c8DnvNdP/mgKCDJhlj+GjaLPW9ZrtcPS9mUOOOU4g0N5d5EY+x8YeRxDp
frNJ8gJo21dYxs5vr/eC21ma3lix9Xo6rSBQ5rQijzjtEstswMNhCA+HnfBwOEmBANz49Fb46a3O
T29N0t0B2n4/bnjx2904tAWK9lEB9RPH+EZ1pLFmGRA7hlM/5FTvLzJVskeFzHTEfETPLI5vDvp9
E+OI0x7zQXYBTjAOoYgJOAxwRjP8jsZkUCutyBMz19D9Lee0PS03bt6ryl7uNfpmghrE2MfXUpN4
Erfe6W7fsKhtxU5QuzsIWB5PnTjWudPCSX0c6XgEO78n9iN9wODoC1wW8iDY5G60y8ADpI8963ei
j2kO7K/Oyyn4BYz65IwnFrvHRugOriXMbntt5qtzRgCC+vZ2hrz2m3DHOYA/e3mwlpJ6uOz14pyy
8XIySvJLoPcL93YFb6JHc4gOBXrFNN8vSAZ/OZHUi8wl6IWX9j27RD1xBJ4Z1fsZ9HhfjPpppPf5
gUAxvN7PDsR+EJXxnItUksvz7DItSZbOyHEaqYMZOAXSVUW+cItPUOX3Hr59AcAdMfDEZugnpJ0S
LX9dLFwozgryHCKspvXa/hZyopgByEAtF1grxt8dp+MprNDURuw1f+DhNPS69o7Xlmrv+H+Q17V3
/Gte1x7zEKOFod3ZNzpZU191sgZoQFHnSj3q4Op01vDAxiuwZnAJ897W4KwWSGK64UGEw01O3FP+
98+/ZdGsqrSxKvq/DkePuZ0WkNns9mPwovYwy08bI/vDogqIFlfF6VdGWDowMnaPtgCHIB7ka5+C
t9M07FN3h7oauMI+fm32BaoDBXBV61LxJhKNNP0ZZIAxegLZ3uIKidJUkHpN090+yaWY85Olfwf3
xva5ilNgpFJBguZ/Dii0DxzDbtuDsEXu6OBWrVPdmwaxZj/UfJ1rPfzuMKswx8YGtuEi4NyVYyxP
4U9tb7/vvPTp9XpqMf00vIGquqmaqjU+XQAJWZcuf/tb0NTO+bLUO47nt+M9pu/gnCZTt04mWrwj
8sz5mFoqqam8xb/F8eJH/h/uePEj/x/iePEXTlcGGO9zlRcsvVTEvitZlukb9/qAZ+dSzNK3LuHN
H8tMsfShf9eZSj+5t7cQM+KkYOkLl/LuiqWvwTEbdz4Mbw5+7BOWwQH7Cx/bPXFjdQ8lo9MJGD4R
DYp4uKsNvYZwBJLNgClkr93C3rdz6LjnoH2/z/bZzb8a7trMDMJnJia39lV2K7ZsOBxczYbbZ449
l6lpavbT4Mf9G45I3xkkh1jXfuT9nKn4oH7eP4z3g5z9/UPbkrYT5dsKO4O9+84U/Hzly0SHg4NB
fz8saYr+6GWCYWWvnph6qooIM50wmV1TTnVFVObuIcgwSDWd5ggaUwLkSCroD98RR5ikyq6GdcfJ
o6cc3NziNv6VxzFZVcTWYz8Pvq1A4cDVPgzRo7uLRRmECjWs88hdIxllGahMavoFXErAd2DXD/VG
OoPzFy4IJji63m3eNHQVOt8tSX6Z5iS/Ai/AnCwpegAdeiI8RyK8wF8RjzaciEKwiil5h0NehhU3
XQQbTDMF3zg+NkA6xUeIAxShg7Ud8LAWT8kslRGEwjWuuocqSxQ74SVEEMF6qMjMjQrXaWocy6G3
q709hE+NcURcChOz+p1k9frDpYE1rqP+StBIPZayYJmYNhy628PnWsfuIPGxLsqJ89qyGzjqCtJ8
yxuNKECETcIMCUJR0xUArRiJrK5yzCbheIDkgyS9Xkea3oFsQ0eAg1dVERkgGUXvRCwyzt/QJ3JM
yhYOYtQzhTbO6MZN+Lph4WPHwFg9MG7hHaRefDL8JPBua+vP2gNcr/FyOuYTKrMow/7a8eUIKu2b
LnA67IW/Hwjfs/8X0+DL7F9CgxfZN9Dgs+zfSoOHffr30eBukAENPs/+fTT4PKtp8EX2d9Lgi+z/
4zT4eQMFLDM43RhIRHQXwtJxwOyFkwWDknsG7t6eGuuahYjMAT2hkBhDrZbDdJp1yQgDe3n2eed5
tvDsekOus5BcX1mWPtDsGdURJ4qweGjisGTxei2SkukIdXgdu7BWaxA+3DxIL5eC/3HPii9Ptnat
7aU6SZKahdfQeRGedYnGLOCexNZ+lF0viAZ57owJzZ3I+SJrCq3eNuRTnX7I607hpo4EKEVXzN9h
qICKr7KvicT/3KGHkmgPpabzx9e3getxbzmfMwUkBWef8ZzajRrcdYiODXkxtgDbYoYfWpH89U18
5WxyZ5KmdzaCvlx35dMINidM26qs6P2bpnQU+MWbjs2c7vwqrNepyTT1iS+WRTGZphs9cxJi2xvb
lbeZFVzf991gtdQGcn3Fd70sZ4q+c/wytEr59LrcZgnMO+YQFO2H7+5ulLkX5riyv/KthYMsU9oQ
pM1iJg3zZxY8GgUczLgSrJ3LMAfjuTayEONi3hyEELcON/v4KMioS3aN5lGQYUpasGiWsolYggs9
+GGzpic+2ZXq6tkT0egXF/rHzkI/1mXOs0Uj93m2wHQj6GpkmbMDc01KI9cAKeYqdsIum9W+ZicP
L03NJWt++IaZr8xJ1czCJJNr2AyNXEzC3OWWafuVN+dtuWXifuXNmVt2T92vvDF3WOp+kZ07jLRZ
OMydTFGrJNicJ4U8zoq3p7w8cqp+dVLo5LhO9fgYAubKz2Ehk+ILlKyYh9nw7jNNhZtNrNfRpoM8
ONKqOIrXaweqcNv1WdMYL7Dkbeuk+pxtO6l0OPLEYJiAZOjKTnhpHgy6c2/mKHvYavkqQ8WO4wwV
Oy4zVOx4A38ZvQ9/kr5tdK5sHPDg/d30hTBiKRHQJKu194EFh7p/Lrf0hB9QJTNajhJXBsm9WU0a
2kZmQ6sf4o/MUGsIMjMbUc471MXD3FzLNsSYVnfHvjux4DBDGgiZp46UMvqQnpQSvV6MwcpytH0g
AtUDy7hF+xk+JJDYyHKcYowzq0prxbgx6Si7WGpfdrHUWHaxBL10cCnaPuc9rQ3z+gCt2fBk4+cs
Mu6FG18YrOLGDt+YFBAdY6xdRM7ZST0anRRZqZ/Ybvvnjt48zxoVAzG6OZljQdQENf405gmSR8pP
YRD6rV37G6bD2t8w3blUO7bubDaL8kg4qOyqXoY7pBYHl8tjPLYNe0w0CKgAbgT7HFz1XzlK4+Uc
yiQNr5D/RNjanJeA5PC46s1ppmyPTc7t6RL0Nhrz2S4TzIChxDehx9OVwUK4tIglxwbvuM+BErnS
zARQtS/P7Ez4DeomhBRoQ2hGa4DLDuYRL1hH/yE57Ae8R2M2gZM4O2eWp8qQ+Vn9qQbvFfK4o0FI
DhuEd2zw72ipUTESUK5mAzVLxWb3CylYoJQZVKiTc1aW2QmjzD0RjcOmdvQQ6zXLzygz/wTMVZcl
ZOM/vNcQSln49rXuWkqyMRUmKWK1+trfMQ/2ph3U65RO/6FqDUnUwB1W++TPVtsVTGEZoISmVfFW
5PD1tjbZRoXhGlFmTHFNdBTQMWsyGkiSJCq4ZEU6nrQ4AnKDI1BSCRyBgn6dp1jGw6hw19wicdwm
o9FQAtYCjXdSGrwVhwr5y0Drm9vLF84dWm5ljWtX6tMMidh499culxpcZ1xSfQMKCrHgtXVVaSTX
9xKXHNK2QVpNPweJm5WaC4N789cEl+BvBi7BXwZcgqH//Zuj+n2CI/RdwrKrv12kd5i3OZgm6Z96
7aymBG13UBnnnIKB7i2E5aUlaaU8OV8UNIdUubiqWbW0QD3OFi368BoqeKPWLsLTko1htwzV+/Jr
jCr007BeG7yTGDs0gO5Ggjbk9MM/lllRvsnOTWzsj0xJw0w4w1ZQGPcyM4T+3a+wOYK4ZBs4plsC
Zfpgdqxp9lM3SQ9dGJ7Bj2Gw3m3MbksjZKczeIBhWdd+SiKNdLo0et6AQgoqGokOxRU13ybDAgy0
sHd3i8otVpyaLsB0uXVr6JJrwknpVCKpI3d3+y1dcmtc6iYtDTStTQ1GRuwHlXYzap24B8e8SpIE
rLgwIkX3ihtiriVTVn5lQCluU2prFP+n6W7/2mo3tbVtGDbRkNju9jevN6LWCvdfIjXbptddfILt
pYDudqtZlzL2E01547DW1TDa4F33tCzQNTdXtg3dczMgPsLLXD0SbjizqG885CN7ewBhmbpauTNO
ou2YV1KR9RkH1o+ojtvuGXBPS6NAsl4LOMXqezUcav4e6nPNVrV5Zri7Cg9AIszxB/PEa03Zyg2s
mnORFcXVio+SGSuYZuBqv2reqr1evjaOXdszs7t57Wrq5MI1C4zrAeoSJrTiyLWHlTW3QwjimREO
/lhA95zS3UFdQ93X8PIe9mrLil2jKWwED+7e5hYro/1hdtvVN8zcYkmqwZNESevx7JiQPP6elDvr
AwSSPK7VeAw6YhCpZ0mNBraICiJJZoe7txctKQRogZgk5p4ICrO7feegEIZSdq1dixiD+fAHk1up
0W4/bd9bR3kEpBqbEPjTE/wUot4DCn+e6fwUT00OWPx5C4t/ah+GIbIOP8e9GWJRX7k5+160Kn5g
jofn2YZtlj8Lg+PWhGG6I1ydxm0MMEN1fspKYy30qtXEG9PEfcNUerhx8HDflmoe7BEj4O0ajxJ6
x54wfJT4RFjVYoNBVAw7iXQLtZ7kROupFg+2FtCEV6GGhoIl8mtti7ym31WLsEFyHj1068qeU18V
SVhKWLQpRNGm+ERI3gbXGtbkOow6rjdd/YQ+2nobNPjGeLd87NCB13jXTtrLNVOZlqhW104itaWU
qb6qqniDkMQt8agFVq++lT40jM8WDfikVdvN/45GaX89Hhz8dfL7bD++cbO13ejh/v73tw4GX7NZ
tX3wpOITodkJ8pb29oxzDXZbDL/dslUnmpVAQRiLVcOBwyE869hnWyak48a6u8uQYdy1HQIpFzbq
303Dr1sNXxpzwM/GHPCJ4Ro/y9rmgO7CihbmtHlKZPEoSwONHa/YpgNjvgymcJSMM6djIpxZXxan
cFTIjjPJnDrlhgWbbFiwGSCXY6OPEJX+QG9yZkuQXwKlsGHTt17zcKLAIA8sKu2CRRoUkm6XLauT
3cGwpKAdU58uDJoyxm9fsk4z2rdmmp+baX5kmPOvG7MNdKLcBqiONO4yUzb2hnCNp2BzGHpV8QAO
B4IxhGTOiZujsikPjgoZk1CLxp79SHcAxhhuGv8Zvj1kprJOrQukyp87HFwm1gePNzaXMHH3WhN3
ZA6gC3MAvTAT96UNn12mqtrrFAy7J3PjImH1X1v3j+0qZeDtZ8Tb4zDOvcBhVJwqlwnz3cAQDSTS
hYSEF8U7/IF4lzEDYL9dfx31KOxNNmdtNIZ4wbBxzb3zp9ak/7YVGzFna9alDGF2vKm4ZplbLKSy
q2f8jBks9Gv2reb6Ic4L7stYFfb9XavvPxmA+XUrUSQalRiVyrCHTtbmE+wNHemjx63WTk1rJwY8
jwx43jP7+t3mvqbKA2XtRWSzLbxzWv2cplsSAif8VcQ9NMBWHcRxOp7UGj24kZ5mtIg6DXAfZ1Fs
i1agQhx08o+szUyAm0V/FPXJ0yy0nBNx2mlnt1FQgwcYmKufWzO3aBPFLRYOIDLwhbVeD24ySgc3
NTiC2KWUocUj1ZVhhthueIzY6I5PTSECjk6WJbgC0wx0p+Dl4XzOcg0xzOHtWXYll9qmlSbtATte
nuClfti8TDnVMY0rz6MVXBhSr+MHDFyRLcpTqVNdVRCQFNzuJVCKLCm43Bt6Bkcgfc6trxxB8iSo
g2pSoKb20jaUV3FFxnBhAB2zrEOAvVGesLDUZnVY4SQmcGMnonFXcvqGLOzTEGQR2Fu8v/vpcNdP
hXBS5YABV/6QbLCTg0XXkVGSm9GGrP/OdDldr81zMpM5HtG0vs+3cprK6/VBtEzzIcPlvxL5w0vN
lMiKN1oqZqFiI9l/Oku7S8Am+5B127j/bJmG7zeBngj6oY2b/j7Y598K+xi6t3MMDvJfs7kDeAv+
uXl7zs4xPHtrK3RPJRDsb1jBUCC14YB0aYBoRiUaRxoNAQgQqMxKYSIWmdPVaVZiS+nugNgthZYC
9QdzYxg9pz5pOKN5COEBt5PZWOD4l6HLDcoIo+gNZRloYcwT17ID+bkFcT6Plkjf1AFBvZSnpAyF
S7QkPJJBGW21Z1UgBAybgxpFbGIfgqtw+C+dQXIG3kPwskwDJxAYz1A4B4yb255FGtQ7SW6ndGTp
r66SEOO1mlRkbFdoYjjMCwrHwAzImBl6H/UsxnB2/UzBdNpZoouKjBcTkIYtYrKoYA983LJH3ts9
8ktG0bzC7Nz7xqFebGCE3MjoRzhNmUSDZaIbJjL43bKsP/olq90zjEBwKhUEhi8XgINSJisibAUV
UeZJSMKlMxjB3RcchzXm62qKCJ8M+yRGgYEeaWvFtdsgRxkIHVIhYbKZn9OoT25kX91McaRHGrQa
jByPSwFMrxes1Gz2ZnmcKkmwAA4XMDSccdBWd6ogPHRa/jMMnk7Z5YLlms12Mq9US5ALxrLZjmI5
4xdstnPDeVhh1bStPl4zWtrK3KEeUSbb7YkdQ+X9yeYcb+i6xuRGY0WxwzU7L3e03DlmfqhlR+P6
FHzuFoX8zMUJEqVlumO6scsSdsHUVdT0r1HPgNPpNq6QtpQaTWtn9Ssj9l+vp0sBD7NpFcVT767O
u3zamcabuvLgNmN8YyUq9I6Ffs1klznMiKVwTa4pGVk7R2yVBefEI/hNveMJCU6ip2afOtDcMTNb
mokFLaeD0mZ1TPHxUn91ekOfjIUM9ePHE7Iyl4pUVQFTgIMc4rYacrBnNY6QwJgotMTXNQPN2IQu
ZVfwV+sY1uAyVs2YYvOmSqDJqyoyl+74fceys9dsDvomI/ucLiVZgCO8c/DLXPuilL6yVZkuJLlI
reRT4vlGFuaYC5xSGvhdVW4OoAqyUqxcFhqlTlxf3T9l+RlMiUb1vH546fBKE37qZFWb/IR8FSIg
buFtUTNVQtsgw1zpki164aYIr2tWuQTIKzlktBaOJgCYGMOGZWcg+HAOoaxsaBh4g4q0GS+zkiKN
frEUnvy++kWz+oWt/u+sujIcJ01yo6pYUkrPZQzk0IVxccLnUU5Zt5sH8MpFlBs6SogUQwdyoxEf
+sszkHxAfUNFEPMYOIvZwQHcHe1c5uFc5n6K82ZEePZ5Zy4jcIrlKZGkpOeSlMkFzYlPlUlesEzd
z/JTZo4/C0gyUaxk+jWCU3lfLgWQ4SbZp+AXWVdZU1cG3pJl4OsSYBakJA6KOlHf6pydSzCWZcQ+
vcSTrUx1lTIIhQPyFic70M4FC8nAAhBcQS4kXCFt3TKcryijsi4Sk58juR1tiR251Iul3qkPqLlm
CrET4rMW2kp3xv5QkoBvAcj8YMr2YHLAWpk6KZ/bEgU9kWGCK7iEgjN28VzOGG7oMp3RVVVREGEL
mM+sInNawnqTBfwvY3JOEYOTU1p2qTCD77ot/kigwnlMTmjR+LDXGxrYLWR0HpSvOX6nYYUMPQ0l
SbJoq84a7yzRicNVoESdSjc7s9d14imZsQUTMyZyzsr0vH69es1yeb5Y6sxMEUCbIgiFD64rs1Lo
vzsrLbBiIidqs6QmFqY360Af4PWyNpawiqvu4Sqy+sz16Vs8y7C7aJwKB84HeiSjExmTC9n0Z4Ok
Mf2AOwl2joNUr0W4AbNzrkrtvc/aU9ZTUTufT5liOyzLT3ccC3GHlzvZjjuYO0idrElpWT90LctY
f1MXxr8jvcPQws3t1NAjGkqlwUwOfDJMKMqZVhVcTFozdCGrmFzJbq0eOgjOfmV8KswLiUQe4d7M
uymNZh3SaHTv2KRwJLL11QhubLo3AP0Q60Ox8qtrHG4TcJM5LzKtmbAmXrJ5r29q6AjDhDSKOoSj
VKUlTgEW/6aqiYxr9aEsdOcmGgxKKMa9eAIkK5kXifijoiGJyUA5QgJTsVtXRWLYBy/QfmKZi/ez
ojDs5kv5zf5VrcXpIHXH8ugwDdgpt/CFjfrpdyDZk+eLTJmelLT2pAfsfNDMcLIHaAwNHo2OCsgV
sr094xEUC98WceBNcjpjZT5FJ3mo0nKnKxdDZm0mZwc85QfeM3YfL7Fv/uz4W87yjOwUJ9d6ODBG
ay04eiORQXTz92T9+zgapeP/Hv8+meyvo/H/+j+TOBql0Wj390E8/u/ff5+sf/89ifdHvw/i3yc3
iaI3//v3z/uh6LMpn9+4CuwO0i4ffx1eEdbrhk6QGQBW0U+7nAtGysk91+td4Z5BzOYIoKZkjhPL
cgdvuigv/tyal8/WaanEbXVfbqghmB21IQQaT4YZlY4FkpH2JKzXkY8kZE1jwfV3sxiHYpxaL5mj
MfxO0jGfxIQHQkt0vWcy2zWAYW6U0czVMAGJJ8Bz5m6H3vltbEWeDrXZW2RLAOok9nt7wkzpsNdj
saBirME5Z33VIbmrSbsldAaZOu0Ss0zP2NU0NGS3awTa/2fsKh7pMT5MUpT2JeAdJN7iVD3ScboB
dlZIGEgPbNtQ8yTVpKDczUp0rextgLJOvKiSDcPd5g1lc92VATdzJ16dsauUERhLqp1cmgF3atjw
aAxdWknFT0AFLGUkVyCG4VlauAMxNyzCKo6tDUWclFLpqH1SGUXuosO0WzRxIvgytq0YP03hG/wY
fLgb+H3lNeqKXbdZ4roNOw1959+ze+1ta69dGRx0bPba5429liQJN53NKPcDsLIs8NAqWicI7E/g
JXITCoKOJ2kGnjs3yvlShI8PJ8bF5Zijb3eiXKdhJt1hDEpw42lW5tMJDAtm2o3qodwm/nor7aI4
8Rd5YJiLScFOmJjBhVBzcVKSl610/oUNP0TjMG2RXRUym5EHckJcU+BVCFhMb6TSTKUC7uVwCYVO
B/5jBQjLHspaWKZAqqYqQ0OcNRgHd6WPTbHhyLQfOjLtdzoy7U/S8QS5vBPPsURuYBytThk/OdVp
nxRsDn9aLtI++cxn+jTte1uYsSaeA5oVxXGWn8UR8wd1zbu3t+174HeXi5P7BWcC6GuNlJBrTSXm
wTQKsQTmGlsGP80L27pK8L8a1jEkuf3uQNuH+M6ZXK+DfKjpQOPfRp6WiwPY3ouNHGzoQJt/yI33
9oSfG97oLa97y4Pe2kqquAJ+unkhrpsEmyWmXwQVCeMgRsknWdMS0+dc8Dlns53XbLa83EFr7Z3/
fWPFquHOBS+53jnVelGmN28CtX2ZfCoTqU5uIiewHOVyxigUhmhhhsW2LIoda2K0I9XOsmSYLqQ4
OHdtzdjFDhMXXEmBdwr4GD/E5stkZ4qXmOee6WWpmIb03yqIyeOSqQswKlmvp3/7W/06JS8Mz924
Zs7ETJ6Dbyvn+v3WDzEyuc3bX+KkXBRcg792y/xMpjF5JenqyYsnb9Pp3/6GE3AT3m6sXoBHqSl5
/fDVs7v3H9a5NsEXePX65b2HR7++ePri5bsXR3fvv33y8gVeRPwXXSXc54E720fSipWudaBidZi0
PcKH3SZFOrZqyMNY021FhhveHZpWScbw4ZrcplPWJzJwrXsNF9+wmD/J6DAOnbjo5tp/lTO4WTZ0
tEyvabd/XbsiUPWOBISWdBqlJPRME/AurxviIGATR0+kUWCoLBcRuHOB9bOkGTHRQ3YDTF1E8Uqa
2wkEa7FlM++cyB0SEvmOqIIbhzGfIuxr3u7YrbpjgYfF2SYEbh3ad2YWN2r+3nvE3+0Pi8hd/cte
z7P9vZ4+CVhF0Gx3X3+I46EG2WWBHEavJA9zh9ztwJeRk8ziZmpX9Bdr/YxmmX6d26V+bICHKRx4
6G6v8F+2zMNfY2OGgAEZOFXmVuKU/WGRnYuhjMqmYzZwjByHLpoWf2JdBgDeAF3zyFihvpKJxVlV
6K8oclzlmXPybOWBxyxqOHLSDTykN9obxA3FG8+nH7JEsEsNJDb8R0sQDvvNEJPVUvgWU2P0QMbP
5aTlMqFy3wTjAQxdxWTlJbFzUlc1I142uSSKLYosZ6+Rj6TSBbaQngcg8wzR7hZvcrq+MYHfMjQc
sBKWVme2gtPAornND7vOBVj57VXdQg9ivuuvA2lbcwDE+0KtLwe643Kgx2riWN4g4mr5xxOQBOkO
ZzWtewhHCH8mI6eWg3BKWdV2psSAyW6gittRcWswBDoJYWet8M3HaanNdcBNH+gugD1NgTEtyJLm
UWGd2i7b8wZRFXH3knoGAWtJMNlZkmy9pqA7UbjeQoJrd5e2ZtRpsmcjmbIAfL5Iw62sPVjVN/gR
UPZpeMO0AtC28y/0gUXvgKoFPoYY/F6rAU3vRJap5VhZ6HYxM8KTNsh8DyxSSVd+T3Avuid++zj5
Cr2TuUfPssyoHaK/+kE89jjiXg8iRqs4XleXhSj5t4AWNTTO3p7x2G6cbTbwbM31QfLwJ0ktDQjQ
MeXn50wdCKlPEROTX7uyZyqbowXyNCbvugqUMPZpgLMe1/KlcPam4ydQfrLjiVpDOguVgnS9SnYe
eYJ2J9OpJ6OPuU6Kq5u38vcPn76b29gbTx2Xnvwh6VPZoqfIz5JOA8nxlHyQdOoNQ6bkvcn3jv2m
5KOk09rx35T8IunUGV9PyQ1Jp8iAmhJWwq0TVfx3d9n4nQzk9boMdXFHoP8dr9cz8welf5UT8/Cz
nIwS8zo32Qv4Aw4vsqhL+lSOP8gJFKwp8JioMhTOBjf/0h3VEILhvNywDdP0D2n9tOjadyiltp3a
zMzg56ey08uzJj8jXx66NTR2knYdmnZqp4FZoe2Aoqr0gt52YCF0xukc+bTsdiCKRmlpHBUD04NS
UQYKK9akDyzOVrI0tHR/FInRazYHiUoiP4unBu2kT6XDQPWpJGCfAwEF7kCA4EtZTQ8a3KDRgwoL
EQm25KNTARg4jDIyaPIoxYUfDVJc4dFhiks8upX2jQpIaV26UqwKdJ1QY50ZVX3oK6zMFm/bOib5
1grQEMA4pySFK0WUL7dStqAhcoGvQSm9NWJorCecW8vgNrUsN9UgRy0lyHRDBXJWNtVWyBw3T9u4
kiw2k98wTc7LVnwcSzeR03aGP2XJSTvLccnrsRwFK1eHbdmwKgK7ErvvNJrE4pAuTFfRUOsIQt8d
ZyU7Ilc2+VzOELkdjWyR1Jaomz8uvW/PeehKyV5G7CZdtLPeeD9LszAL5xXhBBmaztTNbmNeBnt+
t2/joKFmzZEUxRUo7ns/IwaNbvHnysAGG24KOxqB3dTf3mGB2x1DJYkuFqr1jgkOhbPxL3KC5rGg
F4AvuxDh+z0+xCRCB1PrNbpoQPEb0FAryAdnrPAB/n+UkzSDXzK+IScpEFm1c9in0nkMQRwId0av
ohLiRe8jwImj4CBmlUVfdS31Xf+prEXLLDQzvsRFBqtft2U+GzTP7GGAR8WIpRHuSeDLPpVdjnZX
JdPp/ZJksxn8oaIIPJjFSO+XVUyeymSuGPvCcHB7e4gR3U32Ejj6u/24IruDmIQ+Vt+UUbx6DIwD
hOz7JV3h5L0pg43/uWyFpLTGW3jEgITpKTh5eqTkFwaGKFjT25JOn2eLN0xPycOSTl8ZI5speVDS
KQLsc6ZP5ayckpclEquutbNga75ErSaHVNfrxzLqG1tKaOOuPYaxFPlUkuclUmyfSvLCi2eiFZIv
5RHwV4FpL/RRyggSLkepJnkm7i61fISTdwSAtBR4pQQdiAf20z45zcSsAEG/PkrtViQLJXNWlmz2
SCo7vjrzHAf/qliecHGU3i2jt2U8OsM/p1GWBdMQFHxgCj7wBauAsnplMQcqoCdIHNpP6VkZPSxj
YlNZeQQSefBrdsEURiIPErHIM3DnLpg6oqE+5iOc/yd452GJnTx/GL4ug9Q2uwq/BAD5VO7tRZ9K
0O8xM26A4hku2KeSviijTyVYqdUXr42j1J6gFM+X+mUw0oliF/KMHUVx6p5nRzS0Hf/iZinZXEyq
/aAsXrIqUC553Ee6hgVK4FbQLaBjNX7f24seoT+gx8i7IbifUeJ1z4jQjOJRuEioAjhUYLt4AlOf
afba3KeBzebWKDINmWOFOVy1Y+utiaffjAk0IEnTEe3XHi5qzUWO6kyMJdKAChTP0Z+8HDbglNyr
z6rP0EitOG/nDVcLI5C5rA9G8BjsGWLQ6+6vJXKp6jrwu3pK/WlnT0yT7ZfwCEFklVv5RnmU6ooK
RNwYU3moa1fysTbKZYDZ/zDNel6JOZeDG5WnHwfxatdDLQbhQ0SRZDWOgNQm1tjbuzQLE8TTMnsh
6Docaiwpc7lgRx1geXBgom95xOXKAplF3pUQGb2+XwUuLMyBelEa9Qtz6cOJC11X5iX6oc6QAx2v
CvMqiFfGr4zGNG6BZzI3alZHfke2M2rfg1ATWhFZSRNS/StzXFo3z/F6DWHdrdovQKmj5MEa3Wr/
tFuwBOxo9K5sxmGXMfaeYe+DuFal45UbAsjAh2nTM038dBnA4+s1QCSHO4WZhiGYgwaIe5TM+eUb
ptGmAAyPvVeWK3zGheCm70ejESg5iJj8YeoMGUt/1LuIhRhkNwQRxOkO0d0CytJjPQC6rCieiBnP
WfmaGZKDzY5APyLxbyMUgY5GfQyxvdpAPyDpxEubWyK0GLbCdMBLwuMlj4zAX6iOK4TogLz52U84
tGJg1Sh9N8EAiD3AEHaiQS9q6/rEK5UDhDw2rnJwjqFtiwA11Gq239YKgu0wDCZzxK2jm729D4AM
VAM7qTjFHQJYCz9BWQxg6eZRcQcVGurp9kC6O0AHL33sHOAWbCZH3QB4DWreaDoEkw9l07pzV3Qi
INGBQG4PPGWprYdWR2Ou158dqWl8dgKqQAIR3Az5jcu9jz3uVkybIFLgk5woYrzf+YH8hMeBXxpu
5pZj/6smnfm+DK0E8PZCFF2ZO3Jvd1cQC0BoDmMen5dRTPxWATOzeqfAm18FR0856k4TPDxSRsy+
NIr75iqGj5Z+MC9g8y6WWYF1BieLpb1A0EAy+rEcCqPtgBeXX0pztpuaUgm04OVVWlb0FTwgVZID
3yjiNY7dseB0REuiHBFDJRmXRE0Q+38ska1YB36glL6TtfddZ7BiT5EOAhLVGAKssekXC4+GvT0x
cjfylwvY71wKU1NwxAt72zEZcClWOfOBT4bhVkN3Ps0t5Ludo/qXdpiTW75/iPkMpIISloItJJtd
sr19juq/4iS4PkQbZeO9vaOQTMnQ/xWl9AZsRkNS6dgiGj+hNXXZ0ynogmR55KYZfRqJQM8IIQnc
xyrP567IadZkj2jQ58S5qUjNfHK57UszFowrYn3dEI+fdW7yLEdeoUcurykJL/a6b0GLYOiXoTnN
a7LK1naj9LUBXI8SR7txQMs4ORhttTVUE98kQHuGZwSXSdPWsnQhN0XgyKsMZryGippLaHC9gN9q
s0VEwI36cEptibjlP1C0/QfWNeEVNfraWPox8SeauSub63UYH6ZWCMaeNyBqs5+YM4q65w1HDVzG
OtNKYRHD2jPEslvqvpPdfkWuDUdkUeyFRbEO0K4NouPx097eyrNTgL1iF22X0sF6DbyRqTkHp4bb
ompuC8QTqmDOGjF1kLcwGMTY56ayg5tKYL2YqTLgH5Yynx+CGPOXMpRoAZtw52PpjquPyCb4BX5p
ixQItLH8Bh73J6iTCLpsOgyPAvTNL2XSXPhWmGtbyS9lvffMt0R7l5jE5LYMrP23Hze+xZ4Adxk0
JQNeyI3GsRmymCMxuiiRTRvDzNeG1PkG/ghvjGp0Q8LcqZHCZUM3tqMmCvFsh1qmkfsTaTcy0O0J
ZtM1w0DDK5gYupn/lvhNeBDUBxzW1HDWhxtlFeAyJHj9m7lV+fsalPY8h4D+ULYWy7Kl4a70KiDH
9X72R6ylvlAbT/FcvznNwBzyPuIgw9Xg+TV2igHZBl3FtM7KQGrbzDWKl1yKOm+hJEg5m3HgTg3b
AQQu2hu16iHoM1kYOOUe+AP5sbB6ov4wsbVHYHZ/pwnbWDKuKmwD+XA/hNo7pnXAwY9BJ8S0i9fy
0ntu5vRZidWhVnWOVzinByRBswUE34pqCKkoQZfDKXbI0SMgLtMn8OsOildAa4iYfCmRhq2c3V8g
+4K5UcYsoSVlsik/SXxznWivF97qFZ4Mnj8+nhDQjh0aXtu1PBwgmFeO45Jq0uK4pLyKCSht12My
VpMgPB0AKmosOdia20/D0ImngRwgQrVFgIotH0agegUicVPOUj9EeQXS4DPjLtY2BB6xFZhDAMdh
UpETdGpVTxWIA+HbkumaKwJbrC5hv+kC/eDrXzuyI9b9VbtGv1266vOZYW31F5Whc/EmhVvX3Joe
g+oSYZ6tJ3Ov/q9raBYAzbqGZq+ehkw8f72A7f8EL1ACQJuXp7a5AMGDv1PA8dGuQLsM/7HZWX81
l476ru2cTMB2gEs6bAd7GVJx1VqODozEqq2Tbkt346rmd8Hktr8KcBirylO5LGYdnzXNtzs+rvCQ
dmBczxieOMC6NWTJwWAo7kCoh4MDf/6NBRK4Cs0gGrYgKpELEIVZhaYpsK6VdSVinZSKOxBmOdJU
W1sB0RvEzmbZ4oCwa0eexsD7tqHI0ta+YvSOsqG6gqM+yxssPXQtS+cAL1ZqkOAV83m2ODLi2sVG
HvATTN77Bp84EiN7nI1GcKmOPVcDmSfgpjbgqFAxCt5GIzCOBYH5EVUEWCK19vpToPozYJ5k2zky
5vC+lqeWdfDJNTCSspBTpo0/xRZzKiNjI7AngdIl7tNVuBS4lwcoOyrzRpRBfEXKJmSVNK/cViSB
8nNz4bHEkN7kXGvLudYt1q+gRuj7TYQFYNtWwe2bx5watv7dGv8Au8uj8AI54DB4gDvQbtJoix92
Eq4lSNHkOdJEPI9iB7eB+mwwuVGtL6hrHUFRmQC23AvhecPqiGNcWxanCg50dPWQ0yKPYjKDfzLP
mw6mTJgQ60bq6Oj1wwe/vj968PC3ty9fPntz9PD924cv3jx5+eLo/svnr16+eXh0NPoTZdOmwmzb
diO02tlQiu5PAtuoLzL9ss2Ue/h3jefomwrVK7OwZHqgOmpCQRqAtQjRpCGHQDXUId8UqMdtxd4m
3Aqx1jOp8nY0SZJMz5nOQNkMLozwDF4Umc7QznyK6lsuF19SZSLaec3Tdu1i3J9UtXTGKf+gNHcK
mmFTIow2GyPCOGykmt75TRrPn077mFn4PbcU+Q7bYZeaiVlpdCQaFLpRTyuXC2afXZio1iXUUMC1
S+G4AnU3nu+cMO+Dt1wwsIwPFG1ZlUuRZ7qpaYitJSandfFcKLSXt92qw0IFpnRNEzmN7l/QJTF+
BK7rbJtIl8RpndfMCI+d0xBVGoWEHMDIeGCKQ0HgSd66xzotpUDbyGkTAZaxiYHXibzbHtep5xjl
mhxXPTw/4HDQp0txlmrU/D4/X6JOnnGqAkpfpAR7u4J/qZMVKpFgHfeBuJPKpHMQFFM2Gq0qaylw
nnsNg7296Agw5Cgzp9gyh7MNH2d5BAZqWmXOC20cxySryFVOp6/fPj0CuuoeQOaUHJsxoC2iA3Hw
oaGzdDW+yoG/Av4GL3PUU6J3QMEDYonJpbU3IG+8UaiwWqkKLoHcaKSq9TrC8eWgKVXcFfwcz4JH
KjtncH9CFRFXo4R7BiD9jDI47CUNmgO+bEXuQ3OGHZ9OVTafVmiO6tVom7iDcJxbo2e8OyCl8zlP
cuotAaaa52fT0R9LtmTPea6kzsqztM6GVkbb0aJifyxZqZtDG73Jo+vyyaDfj9PLHDT2g6YcbTId
sQT780JqPudG0gjFWaLNdMSkMDOM48rQTwkMMLQlgIhv25xLgM8yEmj9e5UGldSJ6Opib48FHsNL
J5UxCsdRTBwXCmVuXg8YCWy4JjtXH7tshJh3lABcwZpw7LZcryOJEBIVAKcqCaqo4yPAXgAZLPmM
oNhyKLzyII2brKIad42yuybwN4GiMtwm9/No09fQSFiWEvQkQD5v83qGLnLjNclYFQhLY5JzPpsV
7HOmWKrA98pbKYsSNzGZLRcFLCJ77suYLY7eAxeKwb5jM0OTSFchE6ewaVSZutiIFWXr9aqy7oQ6
zKHinArvWOgR8KfinL6Gf5PaOkTdDaEYFo6OUQ36B/QKU23teJb0ixxyDJcwz6OVVlmOLhUBbdfE
kzf+BsvZoYnl+DmPjCZ7Ecdk7ppqepgso1mcziJwR7OM0J+MW7InMsqJJIsAPz8MlmNVEePRA0xC
s9nsflYyExbBooINpwIjF52tm7Q4tEZACtiHeiP3r0HYwLECHj2vQOHtbnkl8reA/IGhEjKrGFqv
ojogc2/Y/oT63BjlbJ/Qr5wt6V59UZcAZefLYs6Lwhf27760T4HiYIaMha1fkpVxJa3MOQhZxAG0
L4w3FRjZc1O2wVXeqMd/r/13D4wxslmQekLA+K32ioKI3viMDJjDD7YcwHWsbF/0Ze6v2WOMRjOh
D+FkJChPw4piYx8BFASgskCdEomKocnWjfg6FNytaB9aTYwN7TYxIdVs0Otg/JWx4YiNlXzk8YPJ
iGsHve5bo5cfN50+SIquIGRgJOKYpyI2sm/mlVYMn39TP33EUuXZjDq8JCLBxOgd82UwE74y5EQ2
TB2dGmV90WwYStzdwWARdrg7wB9Aa2BvirGDfIqd82Wpd4QE31fGc6kL1z0NuIqeJA1UoFDP94ng
moMzy0wzmhGJBNhZTqfP5WxZMCBuneb5QX9weOu773/4y49/vXvv/oOHjx7/9OL1b/OTXPNfL74c
Pf3jw9ufz55dLj6+f/Lpl3dTchcpisNB7R1sOiXOSwYwaIax7tGzfNwwNN7/4bt1v1b4rMinvGFu
ovTZATJiDgzDLgPsgKRhaH3yPA83Fd4fboL7xQC8X+TRKjdkYZmyynvv0xQYmx7njJLxp3yyyTs3
xyP4gEyF26KgRJNC4F+jAbMr2jhu4A4GTmtTSPtxE2vXydETcACb1gkxHlXNoFBI061wXgArWMu8
8t7VC+jgqiIdWeDdCbIaFHLpC1vkVILTclKGJ0CXy7jOE2Bz/M5sDz0dJVs6tfFVYFe79SMQxmtS
bsWr9kM3qmuxbFkR8ENRsrubUj+ZNOcLBI66/iLoWFfzm4vjvq+GtfmxsjsGFCXUBFbW9g5XUxEk
0p/nxkTNbIMX0vhFS68Fq2r4OodIIPfyCOI0QbCN9Jl9jkMd49zITscBFWBR18SvurkKve6CXiAj
mtlxOm6lgBgFA78B4t+6rDWVDVXyAFsRFnhqQYkkj9FyBaFUE9Axqe0QNOoNNmHAFHfAom0UCEW0
m7vW5+IbPkDdldYRjfpdNlwWuEdeenHjLDTjIvNhaJscAM98vaZAG8+NpXvD3LhdpI3Uo6A8RJMy
Cq7NmAsGI6Ex7kbMkL09o/R0kkczosh53GCz8kjTwnfiJI9O8mhp42OF7kNt4EF7JNZifBc+zeIy
F0MNiCfrnhbuG3EMVqr0VR5ltiLsjSbncSjY9qYeqxAfG66kqy7l8Oqd7JX1DHJYJ2Iy3gCYpNbP
6Altofl0YXFmmbaxAckDCE63bnrSWqT0HDbBaaRiwgXMxBOhwX6yNRC4etcHFYfLmKp1ksyXUeMb
Xve5AlkpbLgT0xZHFZeaXjwJJO6vAklEsNYcHVz62HGg/eoD09TwooxTBfDZwyJpPql8bMGl+Kyy
xYLNkFoFauNRTl/kof8iOPAafuHrrbA6suN5ADQOhwJ4jE3rA3vqWIp2TVJjhlrV+kXetaFh0fhZ
Dijj1p1+bNw+T5qsOcNYi6vKZZOt3bPJU7hoA5sPQoJ3HBNf+x4luebzqauncXZVpJ6IhkX1szxy
HNfwLNHt40NUJvolHj8EI0n5zgM/18TF3Nvb/ZJHKt44qcFvQ4Y3KvwEY6nYfhrCOaNqyJOalsji
ZPPg1HWyPYE1kSPkbcs4XeDNIzDYb4h6ku4pBCZQACOBnci3ft2xBIGFxJbprYJoort8Y7p+9PYh
DYjNiL9jgl6pucimJXH31DQn9iqZFkQ617QVFWRGOTquXMZD1Z7BWUwkMGnc5M/qmyyRMSmbebZV
iJOdN3NcLyDqXmGz3Jk487feAm7HXUu7Csa2Xv+W1+PDt3qM+OrHCW+hmvRvgCSMPXtOp8BZnJJf
czotrLHLlLzLwbr7fAE8tNmUPIZXZJYW8PrUfnVwY/U4r6bkj/r9Hbz/nNPpjdWveeUKfAgSsMT7
65R+0MMTM/obLob89Mbqp7zawfp2IsWyUgpj9R5PK/hgiJHlp2+z8uzusVQaAWU6tN9X5GMeKn58
k0//N0V06xA4v7/kLqTCDVML/SVH36+J8TEBOocxYYU3mkMy5uEFE9rZD0XTDHo1JZqspAAeVb8y
/EqgNs/lBdtSHAyjkPYxtg+YzGa2r0AmvAfizkxIqPsmivC28Ytn0sMnr5Q85yWLnP66oZeRsRq1
q7QOaly7q8yHv6kEZQWiIWIFocUVcmfh+Er0KRNGtyhuZK6gM5WRW6qCIl7xLuxq3mz2OePadRT8
csviggGLE6RHyzKdyrOpjZtiigKxVrv8cA5kTOGGWfT7fBTAMhwPZtNMiRG2Aea3DF4Nfs2rivDC
Shpu5JGdVzM+4PHrwmgEgzjDLJQ1AigCDi98HoVTr+mdltQCPQebQzOVReWcM5QFXCPyot6dNb92
Soqi5UcTNJQKK4DSZtXCtbRyZ7vuH/NIEdy5Dy9ZvgQ3D07LHPqK+wjUDJQsCqaGwqoa7Eiqisis
HC6bmYEiyhLofVY4HR+zMgqkOMuSpTwoAerB2VWahUnmP3UJVc3SDEvpCgeX2cH9kQeOo4xW1c+S
CzTgQ2fHdo/+ksc+rECKawOSHQMIUbxy1T3Nga6ryLI9sWa41s+JLiKvwG8xQ0bHja2la48oIDha
LRSbIbs9FYRhBKLU8dHAHKWWb8RERxD2yntFAWeVqAVq/VvaxAmYfw1t++iNGWAVeHrOB60VvYXd
Yg2wAx075KJZz1BW4xdXTYCrCr//shwEY+GCaPQH5SQhUe1S2vmQgb1iOHqgDO53hjnqdZNzkgri
uAmK1DPF3UxlliukY04XwEc110cvVRCxpkbCTcC/aDNTxZwq/7ZJSRwGPtE+wjVpasmCxJ+HMVmF
vbJD8J2ryLyg4DC4OcSOJVcVnQV4YcVn6V24erps0vGpO+OdlDD0UrXhYQfGA2dWteGGfF5UMVk0
wNp0tO5cOPXY0ZqRG8boc46EY8TsM3QaGwh+PDvLSRBFCvJ/WzOllKMRmmmUUgpXx3MDH7UkouF9
zO7Nn3MM4XZan7Ohw1m0brQsvTg+L4wFG4pyIeLDSRGo/QKwM2Ny6o+MYF8Es8oqAjc9coQLvMgh
Ek1eVDez2QygojnFRzDFFwWti5mj/W5RTGNy1arC5G3WcgW1HBd1eAigkWTBjBKI+9qoiaCnzbgi
lwVKoKuaX+zYJMI/qeBwMpFOWTwa9YfChYjugaUB7yw1GGo07xG1XDX13x3AdytkUKUZkQIhMZX0
uIBt+xF4ZFObOnXenxlSSQEoG2mHrz7hM2fpCs/EhPZesTaqBGU7FOLnml+wvT1cdwxGiLguWhR4
uI5GcwxfHQ9lEeXtGc+reOh5TBbf2w8DEW3UxtNss20Rx2R3V1TQTNFupqiczNJRPYKUpHBrtuw6
dMmMLqHHS3/+zUGBGgHYbxaQfi/hAADDxE7CyW23SBBZgJy9JKv2kZKCkZ+Y4cUttTtsFhA794ye
SUx0dgZO7fwJXvfNn/N1kgMLe7i7DDKX6iwt6pJkHjcwW2OlSRvjhYBRkXAZHAVtg1xsYpQaC4Bb
gqWxSHX4hQQAjsjGVG3qWgbl6npt+SVqnCv5+cn8vqMuU0ce+ekAV/sBzmkRpuv1SQHR9chKZbxk
s3tX6dSsGzA/3GHbXGGwMoCps337kMeEG98Tmx2syIyeFqFu6ypQEGCoLaPMTWP3Nxmp2pIxUngP
OCrM2Rpk5ZHXbcMiF0GR1SwKDeSvNr8uwq8tKzUkfKwPORsQoSw2zu6G21BS4sbg86ik0GVAIPwL
u9OvY5UFdTvPSnio6fpQazKuS+fsb3eAlUMQSX+YoU8rHh4ioO+yuYj+A1jH0kRFVASuTlUVqJOU
3vNfWZFSZ8reB+H0z0mp5aJ+L4yWUg3us1Av7U2x3d8y6ICcwY3pK36XD7Qp+G/1v3y/oI/yyDCN
p/kpTAHGrJ2SUH6RrgpMNQy+U6n4Fyl0VkydW2/inX6fZ+qEi3QF3qy/JwpTvyfHUmt5nn5vHF5/
X5EyzwqWDirHgipTIAhM2+YizZK6TYABA7VodHcf+vmGf2GuJPaiLmR9ZTPrKzvIMAlYyXPsqKvB
dBt8ageltVyMRmCwZXNVqzZ8b5Qw4wyKmIRGGZiCoAS8jkZ97NMbmBXXJZyiYOSgg7fyHU8/F8TP
WPq2aMxL+rDw1aUPioreLyzzvyQvC3iz0x74MSpa6pIdkRL29nQPrKj64IcNDQw0ARODUO3yfVfM
8EcATKyhyH636Fbu8BFqGPihv66GT0UYNbkVWYjPo057PiOeL51r+evKQDUaTa68qkeocbbhO3u7
kWtSu2mESAJGbcbpXoPpi4+uUSsF4PQAZjQxFAZDfbut7D3U4KHMDL/W8gZbZAzHsarSMHWo/+tw
9Kmw0xIZs2F/Socje2FBAYSSVZx+ZYSli+vR4Qrsa58C/ZaGferuUFcDaOFMvsVmM67dqgVw+qIF
75Gmr+ACFoehSjpa9PG46zUF++PQNSe8O0ecyHe0zglDh86vghjYj6Ar3r30sLkndBABSae6Nw04
+Y+K2vXCdS7jd5iNIsWcBriWrxQ/50DAGa+YgWdzszOEd9u4Xk9tRIlp6BdbBQFTnVRzM47o3/4W
NGX0fxzHcWfh03FOE68EhI4k/L3WKNenBhXEDRTwsYWzvnC0ifnCQSlapM/xP+qTM96IIL812LzG
exYejE+KptmqxgiUEInDxpJwRx4HWcYqK4CPmJELgP08K+7iuyTmDANPG+jIJoLoj1NXaLpe43tw
oO7tgXhyasjEKQTiAjP2nIEzi+ne3uMI4o55cu55ET3H6wXGQiOrcQaOBLNJL1LrdR+0JHybQRu2
Vd+Lvb2M1o3Ee3tyt+6CaVNe0yY6L5STXsRNm4EC1y9hGOTmMHGJL+9e8tJEg2r0BzOvwswcxe25
y8vEScHCfJXNeP0pvC1LzCfPCu9N1C6litsxeMDSWqoZFxDBBPcKxn+qY+1GYQkbUJ2ju8dWhjBK
2K2MgGher6VhE4Jyon8RMZEVed2CuXoDYyQHAD6vRfxAnmdcOA4WJyoTJwzuff8Pee/e5bSx7A3/
fz7FzPMQr27c9sgDBJCnxwsGSEi47QAB4uMz0kgtW0GWhC4znox9Pvu7qvqiluwBkv1s9rv3Dllj
qdX3S3V1ddWvcM/PWCH8BPd/5NlKFpcnfiXmWQFd7AYsaN5UVgkDHXh0w+nW+Fy6IUvjQLzB54j5
q7jE7HKtNZZ1K7i35Di5sBoP/TSEGT0889MQl83Eeib04NA9ZAtOqvUazGBjqf2O9br8bLql6+gO
XfC8PSF6PR9EsQoBiR9O3hF/6swGPjgLunl4c+Eu0JgsXK8jOsEfAPxSKpuNxx1wsj4phjG4xEMI
CIBh5BlGaxQ53pOYTq6akXbj/kLdkwiWRRFgYS4YZgJuSBGBkGp24teYukGvl0ySHYXLkoRVUtou
KbVKUgWYEneVlA1xTAE/tderpdB6ogJJTb9NFUKca+TvLA3wIMTs6wrdsD8S+ypyvwLEKWMud7he
7/8grZPU02hGu/sman0u4xTjMYyinUcu/ZUdGvMpwmOI6ch4TSP7P0jv1+s1/BwhRhV4oeIpZfLj
SH4czY4L+XE046BgM3Vmx4WOjQGj2VGqY6SoZP0w4Vd4i9V43DIOKyUExhEHdDXNAjizSetzqhFS
U4yneU6Fhjvu9wsTFnMwpHFYxp1xdlSN+/1M5lty2AImQ/AmAOIA24FTwEvwwJVwsEBkNX8Qk4BO
EjcY18eAeo2GiTGL+7xmEJPH1JWBPvNNoC/vicQq99PQPY1ZmqXCjWJWxskiq0VVCfc8ZhfxfJ4I
9zJmeVYic/HtumXsY5f4Mk/pItR0SWZ3SQmdkKH3sgz8AcDjuMTeyExvlCzTvYGBjnxHRajNhv1q
bxayZg+TaTqbTKKYxXweEypPQxWVsha93CQjRSTv5FBKpSM0ksd0KNcRQTbLbFldaPGr1A6Jdfk+
/w29pDOwiGAOHXddFjZkGbC8gbEAwkzlwwjds6U47DBPUhx0CN5Ic+nmqPpj0gb4RUKmkECN28OG
SXyrWe0r2L/cSm1tKYMdBU/LBQPu4tKNFT3xWehX/s/iElyby4swyzpL7U/apBrtoB/pbTlUu+wl
XIiqXEADKSbx1ATMqJ4Gz2KSMo3T34qBy4gag6uGDPaLg0NzYNRXjylMNfjTiSjJoVyFv5GY/RET
dNpq2gcmZJUUNSD5Dcyw/0ASWKUmg3dSWr+jHxXxLZoOjVWH+qpDP9eNBn4igxZk7Ra4hq8o+W+g
UalrznSl9YYCLCoU8UdMSrrFlQStRpZWIwM6CQbxwaEqa8N+aNqJJ7w4eIDN3YC9Lu8W226VEl7o
M5TZNlI9o2GDMNtGE2rUQo/AACQGQuC48ZEziV1jD4FGx+xnUzukZ+gB8NBsdz8Y73qmaGkrbMrE
19mGfcJ8cK+Ci6YDKNBsXJzzgQ4azWbspw5fqv3zaUwsfYA3rlK04UphUwegDUha/ea8CL1cVn7w
UYSP/MqHiQI+sGzTl0LnEPOfE/IxAeQQ1uhW7L/HzRE27/dEOoQUbtN8IT1AgkdP0wdCOoQcgcc8
Nh0dOAxaO9vuO9ywinZi3MuK7cR0wz4k/OB/YH4+j9Ppf5ezmwP8S6bO4P6sT6bD2dVoI1/olcNG
G3rjgL03ifwVRv/v/lek+q07InDDizPTPDQMc+NHsfNBTl8AbymODWxAsZH5IYCF4aIbWVTMO14m
K9Y9QTEfZhTLOBjbGo+e2VE5zrTEKuDxNAOmIJ5mgxE41TW9ToKJlRmcKQck6QaxRk/XNxPYuFhO
9XbgWNvG38w+AIL2Ks4fA416rXxzupUh+mkDI6D4zZihgBzVIrrH4Eoeg78isbUn3WgkN+aMZ7au
jm86LRgyZkbotrNuqdd1jtfNAbcQiQ9c0HvtUqE5Zm9H+rBhVW25922O3eBnA05YYNqDZ2uW1sqV
KQo4lMS9aAcqV5VxOxQnIfPbgVI2zrKaf1AHcr+oRBn7KVDfIQoKYJ5tu1Yur0lyeX2SoOYejNeg
EHjlUQ7Au+oA9yqPJdd8DS2HHHX9byx7Dut/iOy5rr9C9hzV31T2bNfp28medSMt2XNefzvZc143
sudl/Rdlz8v6P1P2DDVcKNp1VsBaklSuoQ3zmtgQKjY/pCgruM4WqbRi4IhSGoGxPOAzxVB1fFzE
oZiIvtkJ1CWnYTInKsT9HtAjQGuqQS750zXAm8z/l1U4t6uQfU0Vqiy/rgJ6J+mUcfmny5C3sV9X
DAz0Gewt07RmRc38mi1qNq/Zac3Oa3ZZs0cZe6m8dEvTCZAZs5IFUscIkaL4Fd54E3ntC5xLP1a3
4kRdKGOgD7oiYU3CGngKvD0neB2NXzN9gU70FTMGgyedGjSU9D3zWD/0OWgyPU1IiLXBJZhzMZDX
zQN1dc2WHJ7Bi7XJQXWnqgrO8Iey7GgDZhlXqOgIg25Y4pw5VN+GmMAlc+TJfQV9eFYzhJdZoTPE
qGKXYHtrXF2rG3ydib64hw3rNSSXI2Bc5Kxch10an+JCJ8P4J7V0SC5thRC0bVVRhLii7KJG/Rbj
eFx/PampPNKwN/bSZo9x/N/U7AzGXw811qFTVbZyfyBiuAJ0oZVb6UZC2CWEXbrosNvMsX41tPp2
AJh3zcCqhkFiycBP1INbaZ/glD2qeUZQX7MBvpW7hFL9SpkI56IEHVhjhqc85oKtkxYdgIg7SOpQ
lMRLhB9Kz4olL7T8y45QFX6cyBjKRsM3LqhArwvZCsCQZ7FGMJEl0o3Gqil7PdDAzUFJtJa1CeWX
WlephQdUU1bzrrKoSphAJoAIFJkcdGW281DVyGXUiGzVccOW8lsA2S4aPGQJigVb1cQYZig84Rjh
agGrSOng18rtNqCYZHiKgtzMbcWwDBYC0Ap4yBZKn5HnbDGMkrpc8CWDIq6zZcltW5bFRgxDcZbV
aSA4Tv2XZkbIvf1RTVqOeUF+4YAfgw292t5Ikdu8kiqTV2oiAHLNiOlBl0g1S3/1zo8rOKoXrORT
xmYICIMSW2sG+Rg2mnFr0mAfBSyRo1eDEyPVAmJ3dkWvAJrJQhxDqCM5Rim7kvMaqF/IO+n0bqCn
Ekk4bx4f+ZUYptkF2Hs2z4PkmGd0QnaV2cRi9VBbL4B2qBpGQllAXVJ3EgbNkId6lHV6FqrBRlJU
yxfMh4X2mKYwph87Y/ryM2PaGTinPXAbbuxvrW4HndgmkRnc1EoL7kyGwFyBdZus1QOslTEjQtu5
oir5x5pQExUi/l5DPZ7XHVRyyRFOwdxWnxKUN0ByiHze77XxBaG0sSXcllbNvvCLFJFOLZ9B1ifi
Pcvmb6s4KfcAeSsuRLnnp0oDT2vO6aI9yvYFpep8rDjRdm5Go0+swKOEBO0M6qIQ4fjr1e+M7l6n
Hmm454dSD9hP9hYiyaM62YOSQTAx9BREi759aFUNzPkRD5YcfFcezKUx+7To90EitWEvaq52a2/k
ON95eqtUb3oagN5enL5TunxK8+9RvBRpCcrJKovBSCcfjDYb9qpuX0BoxQj+om5v5zGEqG3SB+zB
yvVhpv0oP2egQFHy38GofSIUrw3apAGExXRS6bDGhhuueEE/jJSTgJcHPlyjkpIHN32kuoHZSY4B
NDvgGRgjBX4S1AkI6WVLwQJeh6i6BJsNe2L6zFJrzM5FESXZheuB5iZ42N2wp1ZE/f29HeFZza+2
cvhgx/ilBmuzP2ojclbbvC4Y4FlYAf2ALjB+j21ftL1ePHlSu8Xkae3Gk2e1+0ttibse6lPeVp56
EMD7EYt5BdvfLjAFvwETInEzqn4znNRt4k9iDo7ijh0te9MJXN+GM/e3Y6m8NF8Z64r6G2TCf615
Qh7UxPYy/2PdgCH8WPOWCfyk9TY8A5MZ6tpoOH9NtDE2V4AA4JFScrWhO13dKt8iAoHBpsXM1oj5
sb4Gc7W5rvp3Fi29+8eIlt5+jWjph28rWnr7TxEt/bAtWvr5G4qWfrZES5/+qmjp03+waOmn3cfX
F/Wwuytb1PCDLQgBxWp1bOz18EXRV0tH22wNwSJOwkKkbqXOnKkmvmpz0Efl52KZUTx7kautmJQB
6F5zjfmhhm1bN+Jxgp4myE/18FWRncehKPR0i+H01lwx/3bN8fynmrK/qY6JsuLCL8JfRERt/aEr
tael29wLMiTdUNbdaxoGKIP4+g2CFW9QWjxLwEzPJQ0XVUNK/cbi0A0Zoi4gvkbEsvQXAfYxbs7K
6jIR7pJfbaCbF6absVlSVjFvB9LxfIgcZ1rxnOlPT5fSndi5+BGd9MFtHKIc6rgo+pmesvOZyQ4t
OigBM8fKj1OACUG+TW3vJlg1tTDCGHZp8jhRGLXWGKBTeuveu8jqFEFiY/u9sXAFr6Z2BcAyFaAp
O+WD/eokdbdqu1XPGJFhpzM61pV8jKZcctai9xHTgUqyoZa8HJWXZ6UozkVx7NVm5f8YI4URzZ07
k6pCirgYjZ5dSsHYEpFWv4igGl/iXTgjFTfDSE01JE2aI/rKZjOukbMV0Nm/1rbics2uzLFs32H6
2LY/ApRVSXTBpLHdHhiC7SXLTWfALvMQxiZO5ydJrCpsDMn25F7OqmEmM2y6UeP/AlhvkKUpJtts
2PSS1TOsUHfUzrZG7fWGn46f13gJnR47zHuzEHtyLZPvSipJ65nYmyMpgTOUn+79IYps6IFVHZbR
YetPttn6iw1/VZMz9nqbx2SGcFiru4FCeF6TE32YODl21usL/Xahayuv0qGycJKT+eIrHF7hAnFP
OkPYaobD/mtP/pcnAvAzA8ADxmMi0oc9efqV/cX21AkyL7K8vLZQk2VWwKFyz9/TlExWqdgzBE0H
wPnV6vEqw0KLLIHidHayBCwMix567IRdGJF3SlmX3HthfO4xsLgPJ96Nq3DjaceXDU38mAJik7pl
LUSZZ2kZn4uBabUHZqqSWL6ryTsUji9tIfROAn4d0d5QVojIXWyuq6ws6Y+abB9F6Hai97WuxYmO
d7FhgO6woezG5/ervZT/Vkv9iwcJSe0NO9UbtuXXUG02492k5qGp8DWCdD3JwY0YPGx2nIb97WWT
4bJRo6Z+torv5m11OGhbqeeNpXLlo8pfts0hNB3q6+yzDWuaT91uir/V7EecFGJHxWCsQTBqg0WK
UPlP0UwkXkms8D7iktV5rkmV1zx7yDuLofVV93OSXZgEzbNOYH3VCT5/34FcUKXE4XLnuajB7J5/
IqsafDd9Io/B8px/Im9qOhnmIDhK51oXCryJgSumYlJpoY2aWoNC3vwU6uZHywJUyYMCb4EKdQnB
Vm6hrzDwy2bD0pDjtZSj76IcaczpqOssZ9sW1L49cjaskA37RM5qOpmkIYt1QFpT5uuXoqYsC1va
IY0lKCt1tCykLGh1VRnKBSW27F3EbsWXDUvCljrdVnFGa0YrwqzXlWVu0ujksFpWBepgDh0stLOv
MkCWkQO6YxELcNsL3zKUq8eWqItk3JfDeOxM1JMLkXw1fBiss6JsJwMEWv8PEpJJIlOCIxLyONGE
I9M1KWHBSCzujJUzyqTUPQpbyMbo5WeQZtVCCvvzXZ8N+rNH2XJXBICLEjYU8gLwD6Qgv4UvPX0K
8Wd7RrwqJahpISHJhntPGrGqX7nGrvosrobJ5cGt4P3jn99FnjxizUNLPmK5TmmqcRo256n9fdHr
7e+L6TK0oMnPQ1sFeXIWot1Z12R2vYaEeTjDh6GFvTYZyuDHMuEj+AE+Dup3Q1fP+HCxUxpvM4Sy
yxYma1P/M03kgCBsH6G1S9uRurLa2RtaD40bLpXzrYo1znGlvb/6vksoVjHPaoWHfnCsAGSoTQlN
vpaPgxZ2XKsJBb8METol3QGEjqKuJyqh6T0lqYM+RGwL4HGlm8UbzSivQilMAXuuq9fQqYDQPiHp
pOsQWRh5kpLUNRKfFF1kgLPUVLr+ckVXob5CXIMWUCSWpjG+Ye4Z+clEqhufut3ZNhm5OJ0mhy7O
p8kt13KKehK2YHp1aw4n2i2OuzXrdg1jG9T3Imy7b8Vcx4XKVznXoW6BLu0RpA99wKLYqMnlTbtq
aF83AbAQZ70eHQjQ7qxceAet1H3OLYz+x611aKN7PPdzy5PAtdFeCyu3l61o2vuqcrLaRPsYGvkU
lk8tqL/n0oQJnA50P71GbB/k+DojR1sm980A4I2Y6nft/BvXtl6Z+47aj5ClPs3SBOzm9o3/zy8K
KgUdK6fNFU4yWUZ3dlcNRocyf9Gi2gJEtRJHJJWu5ivQ8vaHWlAIlQSfhFYIOOMZ2oJFNJckPlRz
vfbRYzg6tIhn/OozAkhbVOlbsmhtkTaNZ42IVPWE5B7JPJQYghvLC8Q8tGxeKqNIkE4Ah1hs3DbM
bjs/BKS0EGwf4AxB9GoNhSAJ/an82cf9YyJcgivmeNTrXS9tBswH93kIYPHwg4oN8CAHzn0OPjpU
6kj7zgQLx67eq43xhRXcBwc3LUSFkNCrRUgO5Ub5PORKTvd7aF0svQh3IDe0BbTgwlwVH5dPiuwP
kWoB56sQIbWNCbtF516F4BdbZ7xeL0KCLhClxvPTsEn1LGyuf56GFrxui5JcKb+R7nTGlJNlMBlE
B4WAJuynjb/RU5hQdWr8Cz5SSR1rVP9QucPtyZOQeMqro4fgP8rDI8DPA7x1y3muDMQoWqfjlNt0
9CH2wq+hBBLS7i71eL0NrVCpBdFAy2JKWGZPwQvM05A3DqWbWD/aQ/Y05L+E5GnYGvq3W/uN2mY4
kuHmZTSBK+fz7KM4JdTVz+g00rrm0T013O5SUPpQDVRERCFp6uBp41JDWC6b4TmdkBQqZzvaJA9B
qsgWIblNKcOFhdKzH0IEFGOV7o/1+pMMkmFyaHq91kh+1kWyLFp53LbyYFV3wMEHhqxAChJJJqto
l1p1pgP5bHYMBjgK9Z2pfd9jduA4Ii+gGHMmUayR+LJLTrgExjGXeI0qgxXUnxTMp/z4ZygmZoCi
5IOwBwSCEDtWbj9hc24Kxmy2fY1+wkxUBwLNV88qfuPbk17FHXekupwd82kwUGxsLDds2IPQ0ds4
NpP2Fl48600Yh0IBFaIvb8pWIfF3txXgpgvKPsl+RqejYGLzpfljJk0MnF0ztlu0wYKbx+pbd2lh
W7OUKliuluw6thW4jDm+Av17EYLKBFqzlvgVsziFUA2M/4NsrK/sfbDD9rHD9k9CUjVu51kBbgaV
Y8aCag9pkPtFCHwsdNRpSDJKEafvge1JfiThQBU0GT5nIOsHhlDW8Bweer39Up1b9KRtOTgXO4b/
aLReY9VxKpkHuHvnPO71tA3lWLYUDK6r9Xrf+KvVxNLoG8EFoLqZ7PWAwUvpJEUeudjBI+eKqXpa
PjYMSKMFQHs9OekRd8zcb5pjxYhe7Rt6De3b3ep2d/Z6D0KJpWly/Cm0wae77CWoh8kjQ39/P2XK
HzccJNQjbKfMLFdw59asPngzkwAc7uidtGLY0a5gSLdP8RqP4RyWj2qXkC/GNTicclnMC+bzD+FY
+uuQnON7CUl3JdMBmDx4iQbolFfwgDtNAP2LCqbmoCe3jVNeovM0LJJnrESe4UPIr+aiaq6TOefL
sO0tOeUvNUsNUx6v1lWEv4WoH1dpF9qp5XVEWBRKMnQFnRR41PktJOrMwAB+porkto5dA0efIiIF
bENusWEwr+zDDzqHwQptWHO41F+7jDlGRE8gVfsgdiOU37Q3rwly1abLSqHunBRbccpQb2Isl15D
uFVuvzW5wdBNhnqziHs9RcNBTEDbJyelHNCQEAjYH6ly3oRaT6a5pF+vT+yuo40YQPUh/N1slyJh
V+x8sBtVDLpeGxixF/4LAvALrYAmJwqMK/ls/R10RaKYb1uFwgxSa/i364RfJmS7X6w2Uledytqx
9CTq9cxnXVO272zYZ7V1rqzJzgpzxvusjomlanZln7xapzJhdg0gxftozwJ8nWcf0IrtAxqsJoDI
bCuj4AFkBAi3W/Io47rHdLCc+nYsmfwQriHf40ljFZIPofEr/h6OGNzyoa2FrLaTbPsFkT1s5V5L
ZWtD2ftw2J4JHUVXDWUSNktOelBmlbpQoVBR+NpKaWFafdhKi3UCtgIsk62z1G+tXcCWGpF08lKK
Xih0emMSG26Rjcr2UjRR0ATgTWVSDBX4CsyZSZt+aH7AsnBthCT7RE59anMnqTpwSwd7Y6rA0L9G
82lsW82KMeaU2sdvXENXFiFbr4n1BovY3nXB34JmA6xNtVK5KDEQ/9isa9Hxdl9rpvr1AuEgTpDu
4BaURp/xvOHbTJIjPXDszAvpQ+urYd+blHmRgfVTB7dsh99Mw+tULZmqdmkwrpQ1Q4HGDdv+BHkK
QvrYdm8qi5aOJdsTHWPSzWZXkb3eIiTfU5Za57xd4l6Md1dtw4pd1C4wY/5jKD2FMx+2VqEXFrL2
iCELrqB9fB8Z9Nds8hBYTvdX+Kv3lD9C4NcpexdKVxoGxH63HB3BxHglCWpL3qxCohDfdIW6Y46c
XIFHISOym4Kvuels/PXHUvAqUAFnC45zYsuRJtYeyCGCNttTBB0DyfS7vLTwbUk7kR69QFi9Ox9S
AWC40PGUuJJpm4OpnQwnqC43RQ1nuJJG769MV2Ji9ZTldb3Xw5xKUTUsMWym5oVaOexaSzvzersj
IuCl7wjemb9ZjZ/PvTlzix1p6UaKE/Fkgxp6Ulq4CMk9PFspyYaPLII69ZrJn7Ymv9GyQpmF4b6B
VvyKwogUVkJcLlRh1r7R68mtA3Vy9tMmMcVleF9y6eroUGwa3fE/YDJXuHrU/WdBN52B2kH4xOba
AVCxd5PEdjqra7upLFIpNtdLQQwLfk3iDXIBero3PYZbGMivJNszGI3TY+6A01jjfXqaIrsM2NvV
ouXstxhmufTYhQvbA1me2mjHZ4XwP2426fFghLYulTKRAchdfSRpkwm7hqd6WHDiTCQT6HaWoeDH
8gO10ayLyJ4Q8lIJCnru569F5dEhnsye+/mpzPTRNTFei0rFUAdUzY50zp7USAQ1GKJ1O+TbrN+p
WREjFA1nUQvqCV+R5VBL54V9CaNN9HB6A7Xh6oJRQzltSayUMGFcdcRRKZd3QF/FBgB160S8fhJK
oq3y32/W8QqOS5pkosAF4AVB3LdBYRxMkFYlQVC1AYlXGhGqR7wZ4tLuVSERoiILCjwRc5GGXRTw
UoOlKDzwNha4xEDVOKIdKFSNJ8oATOM12FAWruIuNwy1YreMbjYGSgXc+raBwrF6NgQ4ZHEtDjh+
/BwYuMpPNc/kqd6H2DIrJb4zK4LsDhvVGwPsKK3usGK2wu0ETUdZsZtA9B4s6/1KdVPjHFLWXyfC
VVVGxGRDG9eO7hlauyr687n8QPcsL8S5m7JUrFCJ1GQIyJjgnLCpp4LNLMFZEB3HkoaZKsHdXglI
rDsqAl5avlAPQIu8rjirkWNJOpuOKHNJQNmoW64GV28mlptE2zPDraPtbg+j3d0XRTtbk0cbHkQG
j30ZwZt2QrmI2vaeOaHjCgnLZRo8XlWiQPchWQHUR+qGywep6yOfQVlfPj0SZ/X8V1hloCK802Zz
ERG6odQ2K53Lk4/tjvc0IvqIhvK8Slo5q4s2JUy/an3csDSr4giO9POIkMZVjvKqXo2pPCmAIjkq
uVVDmFgbefYnFkfceGKHNGaT4CkmsBywN+5izJkWbg94xa90SXr6Yk1xPlebBuoQAibyB/PmsSt4
zCyJwX4h9cmkGJ4UcDSLMe5E/mBiLvNwK/XAdmWNP5A/PiCuI4z6ecSvTNdhX6Bjk+nM2qIv7S0a
HF5HTKJQ7o+aSBkMI2iZyo4shk33CIryZ70hIyO+XpMUD5OEMtiVrRM1+h4e6kptWr63l8Msxf3h
ZAEYxL1eJ8COn1gilyYUjPnifp/JGgBz4IfhC1FWInxdn5EAVGaaqgewo8J8tPKF++B4MIC7mVgy
ViRFbTvNiJr7HugqKyFMa3+9RsxmVrfyzOGThHMeyf6Ablyid3lTOTdTs9yElG7JFmiMIZv/Dl0I
F27A4vK1bgQ4QwXwMeNmJ4LXt5Y/nhzGve1cpzDzdCnRSSLt3/wiTsPsQppIy+dhmAUop7JO1p0v
bVXaRmlxZbJN/fN4Dv7iZM7mVbETqHnyi/CD6gWaoHjsdcTPovV6FU1Q/1A6p5CUybU0EpsZehJd
r/pTfZUG0EVk5Ewqs13KYx39BHOar1rhVVutrGt9yYpWgBREpQ2UcKEem1w+ozUDHOdXaVyBxWKB
+IbQvim8AMQq/tKmKN1onBlvopa2ZQFjNJBOZgJpVOVR9tiM8zzJzvzkzSIuYaAnzatrq2o8grUC
1e5ap6lNYDOW+8PjaPommk0mxhFaJf0AkW46S9WDVLzzVVlBSS2yzjfppRVb+jLiUC/Lj0mkFBls
2zbVaDdl0iZGsrMFuPgphFa+NXZuysxNfdR7Cpr9u5cRian00m5lNMHlqWWglE1jMIdjWSfP2HaH
NI1ndPy62RivWuWIDfebq6YWPeVi2CU5TAxtagLX2vuc28UBF9RNRZQBDyZ+23G11i5StWzDpj4D
oFV5v5yu1y8jc0LpqOaXW9Z+PmK1wKg9iPjHiP0emSv5qQeYss/iVHjMA1xZ9eijj7GHfmGeH2WV
eX7mn4nEvL1e+DmmgaPX4zLwc/FrLC4eZiuPebDzz9EEzWNeUBclOPPzQswsUdkkskwJRegxTynX
wxNiSWcQWKpS0FREVdZjnnQUX7xWoRIkET4rMAyJ6FJ6M2uqPt8iflLlTNmnwV3ULsc4lgWtxuFC
urle2xTSxTDL34kqTNtew2HZqCUCEkeH1nVCKjpDiIzfI7wKT6UqAei0mlqbZwDPqOK0li4CLmQ0
IFkWvWpEq893fm/oWeMyJWqYh1fRv5DN/6voSzb/T6J/Y5v/p9E/xOb/SfQVNv/Pom9q82/X6dvZ
/OtGWjb/v0Tfzub/l6ix+f8j+os2/39E/+GujB7aArlt32vPY+lCQj0hzPXw9yxOibf3v3seuGBD
rJSIX5Ug1kAvz96eu+cxZYaMW5N7pfzzOUztbu7IYc3meJIlkO7/RlHksTP0C+B6o3y1V2ZJHO79
3yAIPHaxiCvxOvcD4XppBjuft5FiPVlEGJc5uCr1zpIMNkdV0pssd2/rF2UVdpsFqkTHcbwNw61Y
ZbNhfhCIsozP4iSuLp/5l6IA7SELBaa9gep9U7gdhGqh+Y63kQHaaXqp4r9GQ/Pa7q7Ualdh1y6G
RM27kVT64Gh16Vcg3sxsWWfJFItwYqxfA5lhE5DIALeWv09MTuGuroigCtvhwMzmxo2n5QuHKjO5
Kz3yxlmjs2Ep/zEiPiuNY5bGBxFYQBiA+ywV3ha6PjgRNc1er7P1+mGkqUsp0a8DqFbCS1bzADWH
ZG1CHhMAzAQ1K3+HbURI6TRh9YyHxqF4qMzuEx1m1QYHOeJPI/I0AqvQX6OhGT9pNSynG1zqJ1mx
XtsRZBiI069jab0k9thVY77c2C4rRHFEivbYR3HpenbQ4MZVuvGUIXO0Yc9jUm+bv3pl7qdfUcAA
etTbsFpCZ/y9uZmp7xk0DvaXM9MS/YT+9TzqNK48sPuFh/Xa89CE97oxqZOvyRNcy+sBEBtQnrSn
DVu25oxNAuBqni3g81WzWuAIyMGpR03ZKZ9Patfz2DlvmbMr6qOr4QG+32U7iq6hOoAkdDzv9UL0
+aYgC095SGrmK3iHMx5NroosEa4HppNwwPg/fhH7gyQ+F//H9fyyBH7lXHgbOLlf12No6/4qIlav
nWtEkg072zFyeauLL1VktKOPy1/9JA511FM6OXW9G1enGw8xPumGvYv4dpMVMfTYDxG/Qjw0pGCu
t4jDUKSeReV/jgxaTeMLqgKAwrQEa/X3Eq1QvnxA4Brd9I8peRexq6l34+pdtBlIlOOZ+wPqAFZg
hV4NV7TXS495NVwxHQ/xmHdFO7JjKTBhiFc08S4pwJvxanhpIgKy8a5YR9Xw0nYK8Mk0dPsIi0KM
xhMWkphCe17Rzo4y8EBYCNQvfxQXArN1M6Y6vYHEKdm5yjbQT83HRDlr8aVjnqJxhwUvYwlrDGec
QTkg8TE4KXEAiROC+jGyVZBII3FOi9mkdsOxJM0BZKEVitR+7bgYyUAH10fRJHRrFlE3MVHCfnkc
9RMrFnw3byGzpbo/mZ60Zkllz5KU1aV4o99vhfa0kYlgQ3OLiVc1kciNq2qTr9gekHP4dajnNhE6
n6lnCdA//ImxlaMK7JIe4WdgaP+VowwZlt3WmWHG0WU1C5kR3JTGiLzXK7WZORi+kZB/ishXTkZv
5f316aguak0dd0xKDXzMoj9TqUuv8U70pyulsDM+WyuDjVTznyJiT7fQnm7R1oBswPsA/yFiV0FZ
NidNt2ZBWSJLKEr3589maTd3Q+Xd0fuIX4XiHHyOl49TOLaFcIaLy9dl4e6TL98XfOGawHxuEJlb
KqggowHEKcGqLcQp4EnfR0Osy3q9rzJCF/XPRRj7k/2RuxVIPJIXIhJFOZB3pOFgmeGY7cl36lEZ
XRi3TtcBQG1lrlniv1QqSyWXXYFuqarAppHZbqM4ByhLBdwiLXeV18PXRgM3b2A+Zh22//bvLCm6
8Y+RFP3tayRFIv+mkqK//VMkRbqRlqSoyr+dpKjKG0lRmv9FSREm/E+WFBW5VnIDfRpJpX6RROo5
0ig0JCsfpPESlcoe4O0IOsmtq8yjOz9DoLxGUe3yDBMEECtDX0d/VEtVtc2ybH947JdxOt9YIxVb
ww0bg0SJ5M2WoC7awrhcxmUJO9WImZcH1Umzv2mXDxtQY7FoOzHwPxWvUK3lo7iEpkrWwOv1ilb+
zvX52x7MJsPVZOIgKJQdeDmZQA0aaHe9RW7T+o/iMswuUo9plDwTdyfNt6IDze/UhXWqAag8Q9OQ
Xo+Q7cqD5ZEVyW7tcIX2EN2WfS4FnlfIjQj+v4Ljs/R5Zg2cgiC8sriXmLVZG3/DP+xm3cRwO9Bm
b+zK2iyxJgDKb6l9I6aCXP0wXFl89Z9Jd9kwjmKoH7c5SNjM20E2Q964C0n80sAtPsxWmsnUuGDd
z5Lr7XKPqD1uBRgeVQzV0wZun814oWbBq6yo/ORJkS1hTErYKlUEXOqyiUVOrnbRFLdiWzTD3UFH
mK8/+eq9SzjcHcSEdaiIu01X6Aa8isCsy7MYFEzlhaorRZLNGHn+WZkldSU8JtHKJEgZsCCQ2BI1
7LfWkK4wPEFnSXnuxGC1N5IJJob2bS/9vJzlarVM0tL1AJLKPTi4uLgYXtwaZsX8YHT//v2D1aJa
Jh6r/LOn6Cl1MLLgEWMlaMkQyg5Mx1NR/CKiFiYesv1+zlfDJegZxDllWa4w0hBDrciyCkd8h7CY
Tib7jqUVnDdXrGX+L3TFWuZfumIN8n9jxjnJ/yGMc5B/BeNcf1vG2a7Tt2Oc623GOfyGjHNocVLR
X2Wco/w/F1Y9z/lVUBegSlTG5UmSAdPyQ8GasJe5SN1Pdoj7Vr/Vy/y9e2m9fXDP1BvoKfmFyvBD
K9DN1evzLM2qLBXv3SJuh3xwYxXywq/qwk/cUr2/rkTuJtbLgwgvAq2QhyICBbU63rBlDvea79EB
Wa/3Hp2OsUWuXJn5pdAXCstc2bBS+UzZXMVasVP1dMnO86+0CjRTxcNa3bh6GEOPezDwCOfntZrr
rddNIPQjwgDqOZTnIDBPNzeu2n5qJ94Hz/XeextPGlE1jorVQ55P09l6nRcbdpkjZBhAUb+ok6SE
EwXU30XlLh+uuM5ycweMXyp+meP9JkPGonRT0DiHPoJhxFtfNHWJWStjH5LZISBXzfh5jkaYgM05
SfVGsMypm25fbhbKDTw6xNL3rtDrSU6SHPk2ybRAZdwCLLeN22twoNzupdOC0OElOc3pcDUic/hx
iJkAwxV1McYKP12OMOKlHeOSskDRsJAscjrEYSIZJf4k0U1Z5NRNzMprVwHuCwq6uyIFdZuP3ToU
1J1b4RBMTU2Wdk1KgGFuBrBhlSozegxs7EDc61eLX0SktTs1OKy2alR34r3efrF1n51JvBSFbKBz
Bu4fHpq5ITsOHvUk0RCy67Xfni6iPVdYCZAVuhaTs5xk1C2u5SShLR4rcU48AV6L+T7iul8DpY39
hWfP0C2VrYIGjyqRmYwR5vV1zqcguAc5OTrgZNIXKfPw3OExTx5PQGdSl+TNLPVti188+VfiF0++
yC9e/Dvzi2/+Mfzixdfwi4+/Lb948U/hFx9v84uPviG/+MjiF1/+VX7x5X+6oPVj0wFKN7sxdcAW
AzIbfyBjfR1N8L9IE2BRSnMR3zYXSTlcviM0oLR0TAG9F6wbrzafASEDPS6A2ALdbNCybtDmLLDS
LzUTATttoitAE/xqcw1AcCF1w5uqFiBZHIwatXCgxhzockOaIO/fc24j3lF+7D0HeG924yrenN+4
KjbPb1z58FptFlKj6nnDC6zcioPIFvxhguSn4Er2A3Zx2hGdMS7OuO2HApm3gOOAv87B7+ebHNwM
A/59KnNTebFt/wSBXlT7P5AK7HRAbwR/fPmTyZ9C/sR0An3sXrPJn+Am/ywlyWe29yIrS4+VsL3/
niPKJLjhQMgSal/Hvsh1h8rpF/Pi4FBrOZRVAThrSoAWxUnielLBc+V2IfQn1XA1iF3pxbo/vAOi
8W4UdFfdH95xq+HlQHfUVqzCeCQw3iR35KS8EozcwtKhePXvvCU/+cdsya++Zkt++m235Ff/lC35
6faW/OwbbsnPrC35l7+6Jf/yHyzC+UOJJ4y/WzJ9MPhtRg/mgGLiDeAyssqegcuVE78Eq2OPsod5
g4Yl8IgNcW9c/QGjsdmDnQTvMdONR5U6PfMo+9UIQKYds6iOTZSy29cHd6HpBqJgGbfpglLKfjR5
tvMwWUhfAE9y8iS37timxcwVgKuDJxgIsyzI3v47U8R3/xiK+PZrKOIP35Yivv2nUMQftiniz9+Q
Iv5sUcRPf5UifvoPpog/2cStT6qBoDdT9qFhiaMiW4Laa4Z+pFu+DTbsfd52371X8B9zQhrkwA85
mnmCNl/B4hkXJB1CjgwYPZYOz0WSBXF1aYbrXU7e2aQLiy+Yjgcyp2aZW+ii6dFo8qMRfn6AKdjr
FVMxk1Lricm3Une4OsOfclKZajBI0byllGH5GAerjd9lA2BNgxW5+z5H+Lx0MGppMeatcwj2TsZK
XnRodbfBQKtlq+Fw0zQcDiQuEPCNJOAswPvZps2qhiWcPODLftt3Q0k19f2QU0X5WC2xVkJe8OOr
bL3mhVKxJsUgowfpMKzGJX+fk5SV4EUvJrK677RkuaIsILAzgcOphND1mtTctxQ7wfpmYyGEbH9m
jfetMRG8Ni4tYfu1TtJ/y7tQ5pCmlC0IeNzpV3VWEdqjSKMybuDPfUXhU3fXIExj5oPzD+zshNU8
Bhv79ZpLf54hJ/EgoQcFi3gzCD/lBFxPsRTaDac60IHf0WkRpSw8GtGSZ3Zv1BTNkbDu+c5sRzLb
XXnmCMBmdfVW5p2uLjtdjY6jts7PcubyX3MbfW0vVX2HBcWdqqiCNtQF5D+4Z8pFga5mJmZZZJi9
a42qDNkwsTSMk8Nu3RTs1s1q8D3+isGtm1V/NGOViSNsYzNxs7p5M6VdjqoPWIUmRcqPqyURS3xF
RwSdT2DJrj7bNyriZkUVet6IMmcGSeNl260rokNVxCNeF9jjcL1Op85sH6+uzuJgcCb+iEWxbQhX
cFLxFKwzDT4QwvbJjKlHwYSzLY43X5ksttApi6b82zss7grNzeZ+UYonSeZXiAqp4DZjAAmOpyP4
cwh/bs1mG+YvbexjqfsMPWaYJNwJRYNQOKLlRVyBzxio+VXgl0LfpLmqJIc5bMRGszF+BD+m5tPw
8A4bjhj82N8HcdpEuX24lX6Q1VUnwvDOvW4WrVhOE0dt1K5kLOKlrLrE+TNAUUZL27T09kS4pi0b
li3NWmoIUrrEucp8eKoAdy/jhQor8XRyPJqMXHHkTBwXBEowvxoGVn1lKa+YFPHdG/f7SjQT8Jik
dFCxhGfgxyyOCBq3+GclCQYVPRqJwe31OsFfY5ADMVNeknQQHJhrOQw2SoqBtYz3RyzYsHK5AwE7
WwKZ8uVfcx9CNyzozpmrsoqjyBV85Dgs9Jc5sCYVv8fCyk356O6Gd7l0MCexQbUNpzWxQ8Hit+Ck
Q7v8PhmQYhDTm2Lg36zozfRgJG7B/ap86ptbM9Nd5SCW3dXrmbBMhkymMXNm7rRk2WzTuBCwegiw
osKKp6zYsERSiPYduGZS9cJQq0JO/O0J2pnV7UWwYz3tlUs4deGXMsei9JdgSaiZ3rhOG4oFuOXX
kSfMcdNx2GTf5k+E9MHecED10vDmysxBunRAsDO5bfs8UxbCBbLf7btt5WtkP2tjIqE38hLARYIZ
zyxWumx0MOkV2BNbm58vLw8ls0CZMfPY+KQEhwSfiWyiqmKyZgARUjUD0GRqIH3hs/GmsvuzhUmd
kWbTBrSgHFG6rmASbVhZ+QWINvF9xOJej5OYSHealPno4KFB+xL8mAAQsgRiMx2+Qagh1bQT6ZU5
EQWWI6TBT7hU+OJWH5hj1dZCHNkLcbRzIY5mLgCc5qJAk+40AOCgC0ROk548uM+Pr/wB2ExOBPGp
1qYtxKdalJVRCH1S+MsO7DgIEnbFAoc0zXK8No7snkIrswRQuaQTqwCrmWYiR8uGxNVLAoA34VLp
BC2lgVIblIpES0vAslzaAhZtV2Ti5suuyRFgPUmDo2oywZv6KW4jM1nmYsmvzoQEYAi1QizQMyH1
XiUZAVVbqUYLx2o/fYgp9h2Wpaa1j9NQTreNHfoaZ50M37D5kl8hjuopPtjQCefNAudLnwi2ALfa
pty0KbZoKhrravpMNiLr1qjcrkzADBBXsuEVq6UtQMhTY5Iw2ddmYb3efu2mLOLLJTgf0jk9DZn1
9txP/bkoKJvmbLllZRZO5kv3dAlG2/oLOt/Ghfc5A7FwvV6S0yV4vw1n1zjRBZIWgoNlTVt/lCcK
wW/kZL5kp0uWLAFrPmZLFg13LV7S6PBEQ6QSZBqwTM7tBai6gCcCDmw9i9EDL36BuFlOKDNRej3z
SCgrCVoOhPqIxQI49s0oS0g+tH3NXS7/bvrgmaEYeCxtd/OrGClm0Q4Vlr8eVWeJVUVS02JMyYqm
B0BMqF4k3uGSTzWy1oytWm+vl+xkyS6W7M2SPV6yR0v2csk+LtmDJft9aUFuLf+NBaYvlv8Qgenz
5VcITF8tv6nA1K7TtxOY6kZaAtMny28nMH1irdyny78oMH26/A/X6nhmcQTPlv9COmvPll/SWftl
+TUKK38s/8UVVv5Y/v9AYaUB7lq2QajWa648NxOn65j3M05+C//CVXSinQYsAqnkHn9dWgI+fUT2
+UuQHLAMfgsQREhQjDhtBAg+PThk1ln44BBk0NkxdyYjMDlKuG+ea94n8KXXg7D1OjuCxyOA+IAp
U8Jhvn3WA2+SursjjkIUB2RsOXfYkt8e50fLca4XxoLH03w2mTjjaJrP+OK4nJTuYhPyt+T1cr3m
D5dk6j33GP7zwPidVf3gZgRCHAZ/oXwS9vlbcmLiP9hTCbBor/nnqUTyT81EP8GsUNCJmVyYTJ7t
2aX20wFEBXklZDGyyn3zmXL/a0/916rAaCb/QAVS1Z7RTFfh8bVVYFW/GEDkQ8zm0KrEoz9dicOZ
/FObxh3OoABdjZfXVQOi3pJRGTw1lfj4pytxayb/1DiusnG3VE94v3kGFhSnGaiX98HH4LHaYubN
3C5ZTMcwax6oOnjP94ZsaEqF/x5ACFYIftvfnv0zY+/95mnZzdCjeo7PGfyTk3TOKjVM8KTDUxWv
mRpNGhW3X+j0/UJ/03GVdxHotd+btaYHaG8BT3vne83zb2oBIsUZNI7hwg37ccm1UTbrOu5gki13
nR02oyALKd/moV+JHZ/MweKhOiRvm4+O7jjOlr2oPDdv2FtLpi/PtT8uafeIIkUw8lKzc3gcjOj4
uoNf2hy8zCOe8LLKT55JKRd4G5PnweuiEDoWvR6ayQQAGnIlMT7GUoXRZ5dupvqz1P0Z6P5MLJXF
Gs7SV91+CHd0WNTt1XzHsCyvHZUFFDRv92AJsGetkICy83aID3BnrZCMsjN+uSTbshLy5aYDqjYc
awEtMJlRBtqQlZ/OEzGQLKa/z3nfX68B+bqfrdcl/JbrdQC/wXpdSk/mAfxs3ae8bgOzmbw9VkvP
sAo98YQ/g9MFbNdYrYsNP2Fv+C9LcsLOlvQLBhzPlnDN9oZdrdyXMXYQ/GZUtfplDB2rWv4yRkcH
shjFPieWoXqi0MatKfGahe6vS2J6iWq+4TGf69nIHvFT8/ySn5vnj/zSPD/gnpOv9m5cFciyTUAN
M1957HfugRau/IQhz/nDnEw9qUr6yC8XPnAE3oxFWmYaWlx56P647Bp2X9tn50trej8N3TNEdDqz
BFPHlgwt0qKpsBGeLZSUKt8wYXQcfiaPWQlXnTH/mTwC6EnAbvqZvGQ+PIb8Z/KRZUzQsbXeiek/
XjDTfzxmpv94zUz/8ZCqq/jlRBw7E9u+/jnr9JX7+8a96oY92BH2+4blndm32PCcncHsy9nqK2ff
mUn9pyYVIIaBZCmhaD6UKsv0F0vyArONwKc6huGss7Up3v07y1x++MfIXN59jczl528rc3n3T5G5
/Lwtc/n0DWUunyyZy09/Veby0/I/V0ntw1Ly7K+eHozuOew9Mmji5uiec6DC2W+tu3bgBUQfvwVZ
SQYfljcL0Gu7dCsZWsapCd1Q9rdlx+dyZ6Fp0fahLdo+3CnaPpy5VxI0pFCMrMT4NCgi25zuWVGX
CwVm7WxaV9GtE7gYEGk8sV47FJ6xBHihzcG8gg9Vlus4snSMRA8ON+yGUXZRFi/QKwj4fLVyY3YJ
CDtVqw7lp6IiJIXr85uHfVIMfHgARZ3FtVkFkFcgMwMQmSUxn5tycIZlR4aV0ptKxpBvgr6QKl5Y
+EHGAjkNfBjTsrkNOAYPSwE/vKkmwyBotjed1/slsEL4/DT9xQ9jP3WDDXi0bdC84R7lAcaumEhD
+Qhaj6yQBUdJlhWkOrj1vQN7vxWWyjC/OVuCdKW5121yHvg3b33vWPnLgM2Gpe3utBKlTXRwmPe5
omVYgWEGR7BvagVqEVgcK9qlFSJB/0sAhKufP6jBVF0Zq670N1wsrPEEZkKiyuguz+rKvJUwnQCs
+yhbr+Pjcr2Od3HPdnODprlw27cAdqXmvpQdBUc8kZvluD5OxrQe8FvfO9KzW30UjGndx4CQ18c8
6PXqI57gkVWnCbppknaaBNMEehsJJz8syQ9LS3W00x3pgtQAuUW7+g/xwmAOI7AomIGptAWzmhs3
zfUtAFllMT79bUm0tI6ZZ5/O2J/IVeL7LFi2YOWCBQuWLFi9YOHCuuReNCLtaPEvJNKOFl8SaeeL
byZdXZpV9U7qUm9TcQhmt+7cH96/f5+yRUN/doynr4YSut31WVxq741uxoKsaNZcqV6fNjE0Wv5N
kqFQlvYLVisCCttfeZDQgw9LFvJgErtx379Zs4irGZawkLKcm/kWUraEeAP/Zu3GxmUjemkFFNm4
CBLxBjBH0+DSzRnoI5lXnedNsyHXNz8sKVuCN3NR+W4Nega7OsImK0WLrMT2XPebuZ5Bq0u+XMAR
FgTUfr9kiW4IkD9QHtBvARzW3hJ/sV7zfGELsv5LStwageR/WWLI1st/7e2BhCsZrlgyvGQxi1m/
Ge2SHo/uOZT1iX8cUFYPV6weXkotTS2RjLi1ru1eD+gYRaSZqd+zVv0ayWCnnh2x6c5AKZjLhyuW
Dy9ZwYprqn3EA8qi4YpFw0st/INKlduVklkCo20J+U7/7MC2Jjb6wgjEiR2WbU/2kl27fwhW83ck
QaagM0/D9jyN1HTMN3yxINvrUVP8QK7HulvT7VpttstctstcqDLnXygzkWUOvq7QU15OLM3PRIGc
67dBPpjDDDw9MvtwNnlLgmuWAfzn26L5kXz6mo8osZeTh/nw7+Yh/g78m4fUnbea/JWrvTW8Ukpy
zt+S5LpFfM21Tvej1/73pbTdhvVJjfdbwxULDRk41asIvy2HK7ZsR18MV2zRoQfdGXPZnjFnasas
rpkxRXeWWrsGHl7//Jx93a7BiarBxRdq0MzZP1+FN1+YwavBBfTZG7xYtBhK78bV+eYZ2GQysMj8
zRufA7GqG2LVntmfnR1fnB/Xp0dKeDJcsZP2gL8erthrQ2/fmPlx7FB2OVyxy3b0s+GKnRm6i00J
t5qyRXXPN+x8wWFgHBgYp7WynNbKcuyVZR1LOqPk7CDDoAjeHbr90YZdLrr3J+cLikfCFGpTtGoT
t2rjt0vNdpS6i9Ox25A0bagtEWSojiH+UbxeJ5zzekt+H7Xl96UIwJ+NZIT8QcyW/ElMMpYzB6Rp
bMGXcL9opmUyqOnRre+dyalcE3+2sYZTXLIc7tb/vqZvDHH9inpcm8cXpMHRQuFMVC2ciYiF7qIN
InG20BI4qXDRwmpQIzEFsAxYAi4KMFBQYL33NaLDRhqYtGDDrCykiAREPcNLzEMBTijICPUB84h9
EAKaKgE7W8SBZw5tBXRd3Oo6v9V1WroAh1wWAOMmNSfRCE+9ZY2yOVQvwBYFqm4JviVQIaOkssAD
BczI1aLtyP11ZnupTS1nbxWovqK4jwg6eeG/UCI0kKCBSbt84ymIpF93cl0trstVTIjglUkOmsjQ
UaMDR7ovH4wOnAkBU5XByB3RmzLa8PmD96e/Pnj29jGicoiJcB2Kjw48Yn2exGlcCVmfk24rF+h1
+6zV2AJtLGN6FRvnpfG+5dAUDM2eVqLwKyFOlEoOiymK9GMt7mSyNbJw6YzZSPBIwQUT3KFuYUcq
QNATN9HEUYGnKdeKE0tftlr4468kHx2IOCGkGAh6QOL1Giz3HFCxkQovPjWenSvuwKEZT8kZSI8F
E32uT1l72UYMC/SgW0B3XWB3adlNNRSrPCuqkp8sCJXxINabhUQ6QGL2yK989njBP5Dpm8WMNV1t
fTdOcqwwdXwfjMyBT3+xY7EgW+Z1JUL9wXploV/5j9NQAhNX+Ioq3TIAkNDZo4Utui0mj0Fu4r5Z
IFTCojEwTltfPmJzHjXNsSq3VU7aroft3kk7/JvOwIwOhQIpK/ojwEl4gGU8/oeW8Xt3WP7fl2Gp
Li8U7P+2c0jLjO1QGmyDxYH04vQeranfw52NcalrnPA2qsOL9i3LXgrmcGZbE6gyhSpYZp0I1I0C
NaaZpSG7aG46zGKHyw7LCORr6o+OAgTQY9mGlNKYp8YHoPZPvwOSVMYvKPV50Y1f7IovzczQYhiN
7hZgu2SWr6V9a2+D+2Q/NY6aKb0OJhV9MWMUrRhScIEm9qqowhT1YgEgH2CartRCvnKkod6APMpK
3BUbNw+VcSKXNZJtsESm1PQLoFHRjMfdjopbHQV1t3OLSTUZwmQwdd2R3FhZfUiGlSgr1BKUho4f
kqFYiQBoLwiFtcFrMB3N9LPu2UzR7sa0OuF9iDjOOMzHQbKRhWdc1gn5xF2dUDYUfqsTfEpL7nc7
wf9MJ5Tcx04YXd8Jvt0J71Un+KoTav5edYL0elnrhtc7OqHc6oSQ9yHiuOSwAPuh6oSSyzoplnia
sVLP6chMNE1sIvfFgkRyykmW5emCJ8Tan4gtJZYS4JG4zwoOHgKCGD1gHTqsUO4K3Nusyh6v8hdi
7g7uyudXWekejtizFyPH9Q6Ht5zDO/fuOPcP79+/7dy+8/29287o7v37o9t3bn9/7/at728fOne/
d0YjZ3T73r3vD+/dvXt4/+73zq1btw7v3nec+9/fvXP38Hv4vXvrzuHte87hrTv37989dO449+7f
uX/v8P69W7dH8Pnebef24eG978EzLRh1+tybPhJBvPQTvPGc7XkMjEu9p+k5+C/c08Jn8JhbwofH
qzxLRVrtZXUFvtJxe0Z/utZtDUvkS55dsJof/A/577BP/nv43+FNOlnDb58SMe0PZhN4nNw4iMHz
Gh+Juyznd9mS33ecu6P79w/v3L5727l/f8QWPCDLgxwcTF5txvOhdmfwKwivOb5v23CDWVu1iEsA
mS2roobTD4GA5h5pWPZ6fMTEhs1xl/cLEb7JQDFomfPuQBsMAQ6ZSJYdyvBbBQAM7RDUrMSwNBbJ
w3K9HoghJvKH6JF+KJqv4lgMxf/4w/JIqhsr9XF/GGpcC7DnNC8A6Zfy4iieFG48ro7Scb9fUcw6
nFYzzB0emgLg7VgG2sUY20LO44njFsex9RX6JJST4xVgS5V8Pgzz7W6GzmCVVb/BCHQLqwE08WaO
l+6qQqyieEVVfTdyOPCIB3zk0HQwaEBPwEg8xaLj8zgU4cNLjs+t0VCxz3A02c5xFmClbXJ5kz1N
KzEXBWYXd/NTrnIwM17Z+eiKPSJnsEOJCzxOgFAQNWH0iseyxKfaT6CXxKcdtd2XVUR8cYytVtIO
q/PXcpZCrDmeUos3Cz/l8+G82tUNVsbHTifRy+Ix1Arn9LwSX0rOMX1cqt6CvirjnXXEVOIYf8zA
H8rUL8Qcr1sxeSrm1yUvj1Rxr9BPiUqQZ+W1CY5Vgt9EkV0bCc5lEC0RZak6LvlSxx21Uti9lnyx
145wqSTZ3C/iarHk+LyLesgZhtopzQwDtIRmIrGSZ/07WhygTnmSzBRk5DT7sw6DE+ywPBqBP2rx
CUBapBaL1GDx+94L/4WG7iiPRp2vEDjBKK43eJpGcPy79BpbzFTmOZFlOdQlMdhtV/yMvAEIHcre
EAE/aHK+77BHpGKZXHrLOK1hNZT12TWLzZBhSaq7ZLSCoRTDcvKSVExQ95RUDMz7OVBSphb4Mgvr
BMZpmYV/sc/H7e7cB8K9sxNNp5STph9SJpAcDKt4iah2siNS2X4Qx7iPiMwc7FGw0qn0a6A309hP
OBKEHVN61dACleqZPdHSHUneWElgJYqQ49Nf3CGxu9drR+6SeYKD6ofh3zmop3JQX+4aVDM0MH3C
6zbiZhs2aku9Hjzv7wv5MJI/Tms4s77UsKz4axLT/ogVPG7vXcXNXAeDtVahtDMKtWsVZteS2zRE
c2bj4piPzMd+31zo93rVcTqp5K5Wfqr9QvySZRU07VNRbQ2KwQ4qEaMJp2/I69amBLwxrmY8ddUN
o4GW/MSh413zdwPVFfw14Cbh9FVHIFSH6tcgyUHTJpSHTUjFL0k9BDirSnVOX9DvDjkYQZGqzz3H
o60sKhBHBYSI/ghsqQYgR1uvxXeHmDPkWXHvjvD6wgUUiSHywnoBEMoQFEgqMVgWcp7waH9E+yjc
ku2DNaWfIRupY0dAOZWHFi3NeMLT/q3xGHijkhes4CVOYHJGaujf/iHV63Z4h7JLUg5DauqQgG0e
dkMxDKkdLo+2prrJ4BZL+iNsZoIHYO/2/fv3PYz2iJQs7Y9AUlaqskoKZLWm9Krg5fisEP7HTXNQ
2ufefUyNH8ZJn982klRJYgsmGQ7MDUhfnVyzRozWOzg3lnMp52GLFC55OAwBFkAuWNjQ6BAVk/ZD
WPf7oj29cpheOJOG5U0eDkvsdNEXQ1DOWDZAbAv9mBzVeEJesiVfsAUH0LiEJbxmNS+h06YzCOnX
MD7jYjAY0wyVjHVJBa/Hg0FxzJ2xXIrAAPs86Rdj/7gY04BnU3/WX0yL2c3l1B8Ug9GsX7Fs6g8G
Mx58F60dVvHgIFo7Y4jJCcavKHzBVTHez6aDQTnDkgFQwAihJv1+6mbDchFHACgghiHPmBgKnrJ4
8ogIlltcoIskssoeddjmKrMZZ6OPWcgRAdiqHSynnOFovdjwApPCJecEdpwUFowJrgAuTh85z0nF
HHaP4lQR/dekADJXSdraWnW7KqUIK/N5vKtadl34RxLD1dF1dfJ31Cnmcjv0AbpEYL2YzgjeASZB
1vNJvBLh7hqqMxgcVr9Qx4+AxXJN9bLPVC8DSxToO59adcR7Mcr2R/gJdg847SGTS8Briq94U0In
3sDrF26h+rxhqKusw1B3TlE7Dx+4lcL2+ZoIrI+pucpfXYdsMQN9yFdGeQUgwHwOp/JrqEVrz4na
ew5b8NEhm/O+ohMR4qoBlejQh4iESngj32rKcIe6kthMWyyo17Cdur31Bjc4yc7qMAkDF1nkXbRj
PCI1K6g+bgoEr7O29YRXxxz463pYsv0E61MeOTs5PUOMScrncBk0d+f0iC8l9cm4biereHMxUhzk
/dtyZx2n3x0iycsUxa8pe0CyYYgWtikPSAoXoqC37oxpzWs7Wo3RxjbJF3go16XCoRY84zwimWV+
UfISVAfgoG1keiDGmvVGeJnF6mHJR3rjF6rEN9Bp/QVVXGvGV2B5lQ1LXrJMzRvDjP2dS5EU/DWi
wPCPxGfFkWYBXoj5el0c69dXWUnVkh191ZL1W0tWrlWrIHHEi/W6VRzwmSyWzXsdz9M4igM/rR7F
87iS9LoM/zS9tlsqeGxNVJs4X9uyHfQbCHizB4BKrqwxsjt8LoFQX0byCav90+uXL66lLUA7cFXs
qPxHaOURT60RgeXSjIh19X1qWRRs8Rhii7lonbP28SyxXzU0o4IAAIhEdg4HZgKnyCV1Ub8hgWUM
RGkYApzgENxWVchrJIr9AhaiHCCAKi7PI5xqCcv4ADTsaw225gIjAU6vWMATHaiRAXAJo4gx4OVx
MCn7Izfoj1h2HOBKDpiGnuQjwONRfm0JHWfAsBSGYbE+IWvRlMUyUxcWDBBBQGaMnBBwRAWMjzPO
xjTlJJkOBtmMJ9Ns1q/hT0qBg2EQ8B2PkDNKez2SDOtUsicpZf2+T63mjSGTYIZkJulwNsOQJ6wa
Cu5bPd7c7Jzb+g37nP/v/4r1WhxV67U4TrcOVBaSUveUJhoa7HMPBMxCXUmgBXuEdJdnTGpax3hp
XHAwOup7AKSUD3TPM2iu3+cXcPPF/D4vxhlGZAXPPhvZEPTM1qxyPKkxn6mDHc0O8AinpKb9TAIs
cWKtqMZrfGsVcMdqqWSPjUo2HccwRcCAKZ7dRFv0aTzjKfKlBU+RL9VMH1BwPZ6w6i0/8R2vJfIW
MN3nBfV5eixv8aV8CMoHRDpnHB+l47jfhwMQFLrPq2k8o1c+1uUYXmQyeQjRLd/YyhNyFhjFdu6M
4ehLAYdkgGeqPoHnowqASRg88uJm1MfvECb7eB8GvbmqOx6NqdBctS7XdLPWMtGOAIGysCVbsDk7
Zefskp2xFTthF+wNe8xeso/sQZsks995AXKGeFhK+I7nvBiG7AUc1ZEKFW2e5QGRjMN+vC36eRSf
I/XaO7vc+0MUmafUHHgxFIN4KNhL/kJPuTf8uX6cc5nx76C7Oh+GcMipuTN+Ma1nnJPn03oGJkxj
2u8jawPhxya41xsMErbimbqWyviDho665STrE+DqB8CD0v7Izdiq0XyVBTvYohVfHeT9w7UDhbOX
gF0LtQ+5w17wF3CBver3x6Q+erNeh7TXWw0G47rfpyc8vBn1TX3YKVT75ODF2mEhP/nuxVrdu8nM
ogMCefVHFL4DXhp5wQV5Aapmz7kgz+FhZz9RdsFfsnP+3JyuX4KF/LleSZdHL8f0fHrZ78+4M/7I
Xxia/9EsE4eyx7ItLwCRhEcHh71ev/94HGZ70NCAV+QFO2cvGThzhN3hjJ9D9Jf7/LLXI2f8DNp6
Ph3NpOlZyM8OHsuWTEh4zCNA9uDRYAQ2A6pZi+ao21QXi1qyc7bAolAARcLBgIEO3MujxeSj+4It
KLA3oZSjBDzkmK1pWCvrxdFlr7e0W5qSc7ZUuQNuEOmUbjUUC+/3McnLo0ss/BKgzZsk1EXLfxXx
nKMyw+m0hu4OWdDrQT9NVP8/n15AB7nknE/hecYu+YiOLxZxIgi56PdhEp3bSLZyQpn1fTp1Zuv1
qTlMz4eCJ+wRmTOY0a/JHKcy2J7YilKrbXYjYGDZ4SgsHdE5pyzbLAewPcej71vruuy/vu78soTz
ixQyKEBwZJlrvqBujUpxMtbQuTU6vEPHQp4J4XaFDEd0TIVhrgPK8j6/o2QYyGYk2Zwk5BCgzaWl
J1wC3zzs34EV2ucFSzlAyOqKMKstvB6PcTcGftdvxM01MA2peu/3IwQx0mIun6WshiEngS3aAkx6
fgknEjtMyTlzlMDwR0SfXjIoRO9Qdo3gKrLpJBBNZTC93WyT8cDSEnndtqgSQ3Ezl+cz4ARSFJym
KDit+n3DoDTpTyxepDoW2GlD8F2qBlVK3MGeyqpcSpkh4pBgz3zaS8B0d0+sAiFCETYHT8luCyJL
AOB3y/Vluw2eNxbQT1IQuqPOb9rTtuGRI5azJYc77ZHD5lzI/YGdw62zNY9X/Lw9j+e77m/m19zf
YPzW8Rhadq52hfbUjviKuhHgmUCKkdMoRUzkuFJ2Qs5ZhEmjPl8wq2Y8Yim/JKdU3rEs/OIB0qmS
w3pmlv3NkbO6c+f2rTC6e3g/cBxHS9WP7vZ6xT4frdcFEkyTy4ge3xpTOOiYuQ5FzUEm3S5s2e+P
VYEF0Gy5+Z4Tzxl6fYAh7/epqwOLvgehBvheMYdazsCxrf1DttKi4bLveaB58IZckwGLBgsqV1xN
W52z2logc7ai1J0rHiLgc35G1F0ZrHd5wQJPEWhpPyK68XMMyfgtRQQC/ogE6luO32qe6FUfMFnT
TPplkHJ8s9AjufiTdpgedDhXyWwPKQM9BtgdEp337s6hoB18RhJV7BLr8/l+SLAfkjGIgbM+P7So
xeMOwce+InAxb+4EAB/qGLc/kMJr51feEBC1wFkDaLyWwi+CBTkQBzGlx86EpHjiSvGU1ed9Lb0H
lUJ591CfSdUk4gD6navjV4ZXAea3wnl3koXiAXDoAJJ/D7i4Aqvpm9jtiP5gpKMOBv64dX2ARnJS
PdAf4BaQgggbpcwgKcql2HkKxxyS9kf0u5zJuhV9nlNWHPlyLeHhIZQn0X5zlwJYZv6A5wBGCFx3
N0bBMB86tqoEbc0Hui1qhQy4HAspo1eUD8V6JksKmN5EDMXxAm+kjwYL2tl5U7Xg4NLPwUY6sn2O
cWhiO23VpF+Km2D3l4cBPArAFoJVqjlItYD5GGe4neBRjtb9vpQbVoOaFcAi93kOAgQ25+fTU+7M
JBsLpmPc1nGGK6wc1pthrk6PedYgUkCZcw4lngJfP9oqtfgOCyoGeR/Fmal1R0kynpCRw+oBTAsW
8vkBHEHXwMxUcGd2Pj3tWzjD6/X8u4wteXp0e0IAkJnivITLupRzIqWDt9xDSt3w+M56HXJ+R8a4
vV4vMdL3MFuOnYl/7EzmB7p06jru+fR0MJrR70ZOb2Tnd8+9C+u6AtWCfehY3fjlhGRSlnRuJCKw
fgbZYMQgomwcyQfVdzn9DmcvTORBdZBTYLBdYiXEBBABpwNlQrn7cCZNrFOW8RE7HQzspKcgnJFF
5YOCMhgJDs0jVvu+wyefrh16M3Nhp5AKSHgjeAqigCsCNejzjHLk87E+I9aH+yyqjsV6ikARIKmA
330eqQs66MDBjIPwdLSRrJ45vpxPB4MCfBA4Y3qu5C8g+PjSGnlteS2xV8PLz4je4IDc4YXnfPEV
4rcJ3MkPqmHpSikcaqNLkdC8JYRbohCuQPFbzUVHCFfyelDAoV2eCcsjh4UTkvKElXwAMrdlI4hL
+RLFXrYgbqe1wRwlcrR/yEoExSi5z1JLEJc20jaQ7I19lLQYYZz1uYFM8BuJXFMpFnL/KGAhnsl8
yMwZ+0fB2JfCk2Tqz/b5curP6FXI4e0IXtQEKbm8Rgxx1YEkD+46U6Y71hbJMd+UOQjG/rEzHgx8
mkwDecSVFdQxxv5xKfd7EOSpQvUthD/Oej0lJZQSvmk2g2PqeDCARwbV7PNoA78DrLy87NRCQVsq
qD44MjjRZzQ6GBgZMXydkEZuWFiThLpy5ji2p+g26Y4l0fD5JWwYFC8MNDSu5jdRoFnwdJDBju3D
lYJm8pDp8g3T1b8gBXUzlDV8Lh4U6PdJfORMPOG5nuh7tB9TFwKIz5FDvCCDGOAEfGYXr8WHBZzX
42OeTeR73B8NMmqiQkoZGfRjMTdMQUAzpD+iR5mqYbMdt6oIu3On2Lg/4pxnsgLA6zBTEXUVBJeL
vmvJ6R404L9awmYc+xj1+IrtO02S31uCWgvlo6PPg4r91V6clhW4lgBN9tahIlaIZS1VHx4z0U5y
BYsBdHwqJPaCwURCKWlIJ0ZU6mrzj03beKDxghIRcdPZv0anRxw7FMoZNXpyR6A/NxByLcpwrIqD
FXGwGg3rsVGad//7v6BCdDQSd6HiJp4w8VQHPAYtJlsFpavwDmYeGhxrZ41tLtFBHvHOxBIej6iq
OXWxYayWOvOCUixbaQRuyeNhlwFE6SqDivA5i4e/vHz74tHp21cgq1Yvj16+ewGXgur15PHTZ/zQ
vD559vLlL/yWef/xwbMnkP52OwQzudMOe/zr4xf8+3YY5n63HSaLuMfiYZBkqeC/M1Q6iOI5CG9F
xZ9byg+wa3JwXieo3GenntndPObp+zOPefoWSz++ykqPoRTAmzFpnabvCYAjbiO0wBFhWvX7M3D+
h/JsWAcg3TaXsqqOuFE2K+q5skXaF+v1NqRZV7AsIVf2xCoXQYVSCLkYQfhdtps2YqndPIfds5sI
Rotgq9201GGjA2empFjQWAu3ht+C/YygI0EOmDUz2sjr4GBJYpiFCDAM3/ujWa8XH+Hj4YxiVxQz
bR3TnndF33P3vL40YVFFqF5vFxJzbqRfJkutjQgmMJ/N3FLB3RT8dzytDBXKGy+GSvuGF+BORSrO
GmdFEganbY0kw4b+MpzIR7KtU1mAb0yLhTdWipPGXrFwiVivufbdJJLoyKu9Xg+e5N8h/OEc/k7g
j/tEF+RZbfIoKhqZZtAN4sZRCk5SGsT+hW3XiraoI9dG0RIXe08XuluIoEpOCRLIkUMbG1i4QLDQ
8hfbNz5bWbEYFbCms3ExTCq0pYuPRuLOmPqS9Srs7BlgUPphCPeTcSPf86UDa2Nbr8zzFAQxvpmR
PoYdUn1IWTVTQMUb9tAyp1S7XwUgSPYGZVXdocojIfReq45xt5XQR3kGuy7zYZOKz0FhKeNgLDGa
DEfu0LnDym6qhnP1lZqGXQpV3QAae/AJfqz5POlkVtpp3WtLakWjG/brX+yT6YgdssPhHXZnhpeZ
Ta5tLLZO+vgzM4tl13Wrj84Bt/uIBQhYqgxCCboP5OVgJAYjR1vGyYsP0K6BDgRBbQBHx6DPUxYc
c03ZqTKNs6oeHJiP4+A7E5PpvK6pbKLAsOpua4ppMJtMRnpAm5Gsrx+uujNcPy62XA53q7Fjegp9
YYkGGqB8lmrfFA28Ih37RyNQhrimXUhDBruyt/osxkEqOhMZGgxCMh858M+lBz/vSuKDVOpzcUk1
QN1h6qbr9RdzNWhrGd+RB2yiM5gZ4+CoGgf9Pi0lcYrlKmxnHQwy0yi7pXpIyw17u2jpBFlX8du4
mrdtXM3bO3E1b4NLOX876R076Z2dSe/M3IcLHH8FUBCXynIfwdgOCLhu1uv9qqxE7m4telbFwcfn
cXrdF3+1/WWj7IL9bu+BH9n6DDYZmCtQuoT3K8fiCATIFTjS2CKWIAoq+Y6NKgQdb8wKh7HEzLvE
kYLJB5glS/oVcJsiWrVpk2Btm4jxdrei3Jmu5kE/6Rubufo4nbxdNI5H+iNw/kvqI1TJ4dWxM0n6
JB3UFADq8T1wAxlCmRyTzIzBzhYGmqw0I1LumrqJiQfOnd8tutqdemMt/qpns+9Z/FeRY/d3TvFb
dtpbO9PeAodqYK2sTQxALlSwQ8qmJQtm/I8FwXYhGSwVdIcEsh8dOJr0q9eJ9K4pLcaLwQg9hycE
Is7c6Y4vkBllgc2ATJJGluQmG1VqYFzeLUiJc15hf4rcrc3whmYAow1/CzEDdA4NnQMG0amfjw7v
eJNfF+7DBdz7/LIgIYt2DfZQbTYwi5pLWahfbtUv37AfFtsajAZB4J84nGh/jcMHlZGIuWb4SjV8
Cl0GYugIWmI5zWZqve/oO726pfLrIa7aHYQDFlsmV3mC2x9YZ4To9PmXRTc+yHq6OcCle2n7X+f7
qG3BQ+2AGquBRzbcqhgoaIXWCIUb9v+R92bbbcPK2uCr2GcnXqRVkklNtinT/BPFmWdlVrRNSoJl
JhSpkJQsxda5/q/7XfoF+lH6SXpVASBBSR6SffbutbovbJEgUCiMhaHqqxcC0SSOohT3ngmy/dCL
O/5vBr/WPva9+Ik3geebPrS9lI2ieIERvm6KQDS/rH1JUm/w883ZWcJS+Lb2VXDboUjxkMXwTsSJ
JtivEg6ZghBJcG+d9iIcPBsCG2368Iql59EQ0lGRHpuxMD0Z+2nKYghH6wVJuMk3xCP7chT7Q6uM
/pb7XvzQG/wcUX1b5YYBXsw8Cz8NpnESxe+l6wqryqNbNcMgDDirjo5T5n5ioQeVZOBh1lYTA8lf
wkMvJleknM5LTGGa2ddHUWqZSDLw+iywqqy2BH9kX3pBEF2IDRzhivGA6STwB2iQJ9uLBhR98lLv
zYzFZ0F0wV2+cMwy+n0w95NnQ4vzSSxs588IV265kyhYjPCoIIdIO/eH3LFMOAimQ/bUHw5ZiAGc
120TQn/APviDn0k21cY+C1PuO8IlWCgXRCcYYoJk4AVMRsYpDRnBX8kUPmNXsw5owy2j/hboLqMK
cr0EL6ui1WL/Sb3JKlIqZa2sshLWippVQqHMhD/uCti/rNqvrQLujcJy/zEYDIoV0o6mYWo1ipVz
Q41Eowy8mgOpMLymybZsTGJsMDkoh0435VgzRq9npYp6djJStGXw2lGgfsjdn7CYVDzEbb2jvB13
IKrXteSBa34wMBj9f9hhRTD6tzisGIzu4LBiOvqPOqxQefrPOayYjtYcVgxH/zmHFcNRfqlxNvpL
hxVno///OqyYbJyx/VFlLXBlDs+iiIDrZ3SToMBesIV0tzOMxp4fyjd/SLRyebg+2YeI1SiiZ3O2
P8qmTDF5+6MKPfAJ20cNq8FPZdYWFFISF/IF526MupgwmIZ+FmtVsCxhvLGqvNuryrtrVWUR1z7d
WoXeqKIKt5U69EaVQsDmGvXWatQr1Ki3VqMihF421Kt3p3o9HyGunCIl06IQY5VJFHgxFizvJt20
t4Rg2AMl3Yrwk6M1GWkpuFlKFyacLd1RBGN2Fz7SghFihU5G3IcCFSRcIgDeSGVU5SqvebRZ+ROu
8pQujO/C1nidrVOxnCZ+3vAFN8yI13AK8RT60x68G+uwoLDTEcxGN3H42NdYRUEShRQMzKf/B8kV
6FFIId2tHCCFuaDAEQTXHNqiL9Ve62YHJxKfFI8Ilnrrq9Y9H8F81INoxI+LOpTHbASLEfQFo9mJ
+bbMMYMbI80oDmu3Rnk0go5CuU2UoyGcCuJA1Suz4BBSeUbbCk4rh6ug1vYCdz1zUpEV4HoC0TXC
xf4NYPFphnQ5twjt1wefHN0u8DVBaGZ8VRFhwwIibHwdbRgE0eDnZz/BBfYScS8vskVsCh9GCs5l
vjg9GRXQWCv+UFH1GykKIwpoZGx3e9yv4zXzoZ9Ne97SDsWdwytvkoOYyGWOChSKaRwnFvoNWXvn
WIKGLpd7xHUrzchoKSF7XnJnPp5Mi3hcQhHgm5aCB7ypEEeX1AQEl3jYENgR3jprie5EuJ7SEt26
XLYKbkm0AC67Yc8aLMkiFyOR+0Ksag6CeBZHYy3idqAJKh/kimJKPbu0y382dH1CI2EV8Z7vKQRj
PIDk/c+sKfHQPnW2DWt1SDjbpsW4wlDKbbsIpY/A9/IGfzAquCpZB28shqRFOEe6ac3fBBu2omb/
Y7Sm+YIRsisguaZHu8rwKLPQC6VNXIjHVWS6JvE/W+uIoEjg1UgBAY/wVEcBKi2gPzvunGZqKy0g
OjvuQgmWQ95RJI6lzvNLeC0m7DSKgtSfYA9I/XCU0Jbx2TCv47cjoXggp9isj5OsJUuLvhcOOVx0
bAv0XQ3vfboqCmasIJnSqzziuhQLCY0kGn/R0BEnov8V3Obk1or5MBd7L44qkbuzyTQQM5Pm9Xt3
VbdmCemSHKP6IudXgiMfjbl4iDcXIWYPEMbsPRU0W/tTzNDGz1nrHdmhw47tFPV97NBix3ZIj+kS
skqzQgfJylW6Xlwjpk5oH6e5q3b5dexNLK1wsYeudUjBVTYUddssm52dUA7KsDKJuHdMecekxNP0
VnLhp4NzTY02QG+/Y384DJhrxSXb36ty/cQWfWHhkAeLQLHLsAT+TKbosBTAl48LRxJysSXyZSI7
PELzYtfCSfTVOYGPZyOOrH/RBDVTifflDtojO9TWF81DVWbUVM5Unb2jkKs3e6THr3w4jjn6tafn
W3hFJSPOz53p4Fi0QtbNsgJntjrKocmz4jS1NtchADk7ShFJgR2nDv63U8ewXnuv87no5R2IpEcM
iaTHzMH/Nlsl8p4GM6Fok16eCm6LoEw4/z0bcbjylyOHWb9HOMBxWOuIq/RsROiL1OuwVAjLFKIO
hgjDAHRarer78ZYiPQc5b5KDM49vdtFCQN9WfJx5rWHEWbT9knd8fGy2EA4ZDbH1I7zhTUum5dnp
ktsGIqEMwigvqfc/nLF955wjvtBYyRnpIo4vX6ahan4GWI76J7HGulEZj9z04zK94KMTlU0rEnlc
kkNEH4QbqUh4TPQU45bfo3xyU5QxH45WtHmyDlPKjzF2PyknEDk8YIa6joCsTEH3Te1SqtPMpi18
Fgy3Uq5YRSUNbYEzii8xT4qGEloMpVKICBkZndguxfqxHWd0YgHn/3Rkvx9pz0Y6fBzZT0fcfWPr
6Yg7LHg/0h6O9AqvDFoafx7Z5FRhi81TFg4TXKRdFgDiILWfjzg2y3RC+iDXHXeRNLk89ZF4KN2Y
iYXfEk7RLbIITHHBJEWjKDEt33l1EWYkS2l4LHEpljcE8UDLsycjniEC1OG6bTUOhqlxkKA6F/BY
GPoii4XmhUMWMELuL0YUwb8Uispk9WSkZQVnvKjpEtfN1JQ2nuzlS1/kLEYNWyxGrFvKqeeLf4UO
mongE04uobLy/PXnRGm6l4RxncxLT5rRir9YdYgoqsHiVGxnhzlMQqKgInGe8utIY/azUeYX49lI
zidfRq3iaZ4Cbb16tibwgbf8ZCuM0i1vK4/bkgdpXNbzkgpIcylXae9mE4AXAtmHOu0wyjhBo5DF
F2Wa+FIQJfl2dFtjxzbT9XK+Y9nW0mM71UlZlUuoksaOU6Gy9G2kIPQ1DB3eqQGoO3VPDagqgoGd
yv0YLxDXLckWiISnVXDcKS2cTYPazrPjPdPY3fVR1f/Y/jZyTMPyju13I6eBv/dGTtUyuQFLdpWK
avmBjcnK/l4k0VnERepuoEugaR6SYkiyFxwxtPhPYLAXHKcInjCAwEYfS4KWv7tKam+NFIYkuzmp
XUkKbemTnZ1K4whXhuFR1ZE1gx6/usS/gvafnqrWynYpBWaXEI6qFMK2Fh5ninjdzO2LVNVH/XIx
TI4YIIo9RD07xvxSoJVl1iZ82+od275CDtMm6NqnZMJAuOVI+IJTJ8+0ubBgttFiR0mrVGL6oMt6
tuZh65ajHEHk+mi7UaZffzNNv3QnmhhtN5J9YKDAj5yueGBYqc+sOrpVpQXiLFUxulK3vh07YVar
WTZyIMfC/wvZjZh7Zd/ylSnOFwhIJEZbdxTGIULnhIouO41abmCqiOVYFcu+EMu+nWo+lBA5RhHL
IXp+Uin62BuIor/pksv7K7aP/8fZPv4ztqPTbLUWo3II+cxB5lUPxmgavjoTyUlKL3o7zv135MBE
OF1ta+ERrpXSIzt3QMEtPQsOc76MrK8jUts9DrltVlwOj5to0M6d5sTlkGwTU/pNcuAHgmaqNLjX
UDafaNXdZK+Gh0EykObgZHewq3nlgb7n6btaVPb2qtIhkfR3ikULQa2AcrQ72PNKAcGXKD6b1Tgl
zStHuozXEhWLpoO+vuS801o6Ipw8btCcYCS81wOfvNWCRzZKIjjWW9FRIlA5KQxhe6BUiqBcTlo+
XyV7+pGBJtIRtzLD0IQTQmvoZOnTOQweiqKAFKQT3dJwHqbXhFooofbRQjshk+0jO6HFaVI2N105
JiviC4vWoqtByo0DFSn326cFh16Pg8hLm3XlnI0W3yF1lG30rST3DVdXfvLae81X2wIa9ghtc+Oj
arZvOZVGUse2KQN9CpTGcaR9tpsWVa1J49w/1aipPFJc8mhWN8BDqMxsg1LSMIv8O33Fxtb8sqcu
LAI5mh6OpM+WPyxMSXi+MWCtSPQJ0VeB7NfvUjhK4vXAA6aWhgeXzB6WE9jGokyzFqMZnub60NbW
ldv0I75zRm9YYKLtX80xrVKYe2u2y6ZcyvBZQ7EFp1VPqCO0kSdkqq+3SqX4yG/pHhqusFK8G7bW
wbOGYsIVZyZrbNERypZh5Yc0W6ZF+5FYHFutHNUo31A/lh/DZWbKqllMfmn9Vzxs8NrjUOa0sMcb
JA7nfTu3GZOg3LDfRDTVi8XcUDi6kD61hXs41x/jjYCP9+VZscenBZDzzyNIURs85CgKk1P1+MOX
EzffgnDrJS+XjZf8wM6enOY373zzQ+CXQqlcV2ahsOvdl1bKuRs8URf5KafwmrTWJrlptsCPI95l
SYqb9lCXuyi0Jec7MsFSrCtHGP4SfOF0bYM3g1UW0G5bmfrQ4ke3JOKJjqSm4c8wugjvRgw90fm6
FS/Jum+y2HDQOz6l7ZKkqyFw7vBUnBz7yrGxanB3nrcyNniWWHrHo2seqnQ6A6fiC6w+kxvPI/7N
wDYgsBEhrdJo8b3nFpO08o4yzPE00dhFWo37RzGc2UPHt2LE1iaXLJ6tTcpnyl7JBFYelIJdVGcn
c2BlGvQQQKZEKcrersbKA13fneKeaVczcfeBKc7UrcpZhrvO3yOhAj+2cUrUSQV1Q7uclbxdlrvA
DLWhM1Y0Use5EF3rqTc1LhmEIRaThVB+wP6kl3GTLmyTEoqJks8JCeMuQeo9FnIDvfXECWLLDDkX
2WH5hs4WYQTU0d7wzaN8r8lyQxESdDfA2U4w6cQbDgt3GTclHuRLNUQoLsmaHCiUnuHV7F+Q20Tr
DV7s3o0WcsMJBEjAC/zRHTvEdE2QSoYER1MkeM08cH6qITQcta0u+neiF+oCDSPU8qABBLGnTdVJ
Y4h2a/ltUzaOR6f5fRBnIz+Pko1XrDDIJgWVjbVQHvfako2oZNg3c15OTwvfzyXvuFVSmC8W31Qv
emf5Ikgx906V5xAKvk9sJfvF6QadTu4YV1PI5YZW8ZYfbqV6iKuetBtnl2jKdq2PReLOXk/tyj50
Tm1zb34K7VPb/f492dW44y/0/IWvLlwUPmiO9f37cPf794pOkTTH6rKTXp7IEck+/Gmy+zzdyam9
989/aF2jfOiVz3qXNThY6vf24NGp/Z6NTuYTzf1nPOp//67du2yfotPt7P/37/o9V4c3G2J+oDjZ
fxHzZzGmt4ko3Lu8yBI82JRghXYhwQ8lwXkSUPyLjby8Ksb0NkUtkH59inps/oD18RDdbOwfVmsH
NfDC1P81ZRfnfsoss1mv12v7DfB+TT2r2WjU+OPYi1Hp+aB2cNBo1sH7PY05ibq534A+80eY1jQP
q00D+n7yC3No7u8b1Xod+oE3+GkZ+BsOztnQC8ZROKTvVaPeAOKn2uAPMz8KWGodGo1G1ahCP44u
Qss0Dqr1aq0O/WkcLC6iaGiZ9cZhs1ozYeANWUokmtVms1E9ANI0idk04QzXGlUYnEcDXI8yy6zt
HxzW98l7uBcgE/V6db9KjqtRh4/FnFbj0Dw84P7DEz/4Sdw2agcHMIj9cRKFllmvV2tkkbDwQlFV
Qy/+yWu3dkgv9K3W2K/W6HUUBUMWxsh+Ff0Dilij2FtYpmmah4a5L0IYC61qA+0WxPtKjJ/n3k/f
Mqv1Wq3a4GTG3gg1361D0zhs1nmOUeDPGKfWaBzuHx7yqBG/6cfS7zeqhggbnPtDNLKoG4ZZpbCY
DYlcw6jTe0JtZ5mNmnFQN3m6hHk8g8O6eXho8gwSrGyqivp+rV6r7+ehVFqsufphQw1lxdB0Gv+a
RqiN1Kge1nmY7BzNw8MG1h1jk4kfUuOYzUPMhLFJ8nPBMz40GyYM/TFl2Dw0DqrNBn9nyns0HIk2
rxpGzTw8hDM/Zv0YNR9NrCCz3oSzAHuLHCP7+43DKjmcZ0kqmqrarB3Uq3A2HZwnvkccmYe1Bow8
P0z6URxhh9mv15sGjM6jJJW0amazuW8C9gxM1GzuVw1Q+km9Vj00MQgLcVCvmtgUPM9adb95wJ8X
DFWpLNOsGzWj0QAqoox9HoVsMWQXYsA2DTiPUllvtYP9OtpZDH0vxNY2a/XGQaNap6BRRLVYqxng
z1AzC8u+j/Yxovs19g/2m000l5mxcMhiy2yYtSr2DBnSD6bJOaWr1ZoNCLyLkHN/YB4ah/tNCNg4
Cgfn/tkZdiys24ODBgR488iHklk7rFUbdR4kRm1jv2k2ak0RhoPMrO/XG43DQx6UVaCsmGa9flBF
tugrjbfawUG1Vq3JIN6DDw+qjWYWtBpLVlrjoN4UPMoR0dxvVPebVREoh0TVrFcPDkW2smMeHBpG
rS5yyYfE/kGttt+oFYLZanDKWCCqpXGAQ4uHZ8Xc3983DzBwjHNY9cCgR9FfatVDbErU8QipShrN
fdRq4dNG1mXHXhxFIc2dTeMAxmzoT8eKFGju1/Zr1ar4IIZOQ7zKWaRaNbFni9DJNJ4EzDpsNqvN
g5oIzGqpdrh/YBzKuPnUcWAc7O8fGjJ8gmpDPEWzbjbqIjyfKOr7+1W0A+PhfLLgfdqo75v7NRj7
wzDvWM16/dCswtgPU1wjjVGCVc2DhgFjP0kXcZRIIYZJo8HAS/xQhFQPIfRm3o8omxOaB82DBgYu
LLN6AFEwRAxLy2w267VGAwP8GaMxWdtv8rdh7PWtfaN+sF87hHxKbtRwduHvxH5zv3pYq9dB1m29
Zjaw6SdewJSpotFs7Js1gwdTNZkGuqI94EF5PZlmo3p42GxSsFJN9dqBWTVqMPEm3sK7OPcnfOAa
+/swYd7gfDI9O6Oy7jf3azBh8RTni+YBunSVY6NpGrUGTILpGGV0td6s7cMkuhiKSdY0UbIiyB/v
EtjL9mtNiFmfDQaeCG02D/cPDkwQxTfN5gG64E0WYj1QrTX2G+YhxNHC4+OhXj1oophIPNSX4tEO
zeq+ebAP2Ritm82DgyokXjiUlJpGrXrQrEPeGY2GUavuY0ByzgJaIuzXm7UDSHwWhmiF2DCa+4f7
kPjBDKe8arNWxVmjML5rJuQduXm4bxhNEcIHe22/elivgzLOZUgoBnLjsGZAodM36sY+5FNAvVk1
Dg8MSHH6q+FgwRfmBVatenDYBDxbSwNmmfWqUT84OIA0GntpRLP+vnHYAGXkVBvmQaMJQsCajWbN
NA6acHHOvJRWdjUsUS4A96tmg78mYzSZ44u/gwYoM1HzsGmId9kdzXrD2K8vW7NTrX8K70/hEjdX
yu6zqDC7yZ8hCA2KJQz9ZBJ4C7QTWnEZGo/6GpoDK9+XcM7m1ttTlNpjL3268nJgPc7eksB6Jl/e
j/rWy1OQSovWy1PVW/3b040ZZ1Q1ZWP3+Ja4B2rkZ0rkb6fchWMlY0+N+fImsu/xWVFFO1Ug4nI3
NxpDzN9KGvtjDTESXuIquO0RBqOW2ien3Ic303U8RkR14Nxx8cSLE/YsTDUyXjSbeG9n203n9yke
/OJzjVBwPp5q6fHxwY7ZuEqPj+s71boB9IAB9KalO2ZDPzqqX+EDHutj6gPnIaWs1ndwh5AeH5tN
+XRAD1qKP/oe/qMkdZHErIrcDmRuN2ZfzF/SQxUj1MJ7pFSCLA8316ziv1oPGdZS+83meLvVRmMP
NwsYX3mp5S88/U8l/cO1PNJuvUfRHqxHu0MWWfIfSvIvSi5ZEoWjV3eKy0m/Pl2FXmM6doXXp13W
00nV201jL0xQ8SZMXVlFr73XIP8MXuuKht2pMj+IBCzrB0z2A0b/TaW7PzzNYV3kQT+hl2jMTu3Q
fu295lAAH/OIeepParYF7MP+Karm2DSadGAc3Y+GXUatgudGIzy1BDSG9wZ+uhCQTx9P8zyernO4
evxG6FTEi1VkFWGKckpKES75NEBXaPg0wns0euqjigU9CZbsUrycnWofT+HpKSxoTr7sk9Ifiwv6
i0JfyemcWp3T3V3UvxCdm/LalVnJh758kGVf0v7tGqrzU2v+l1Sp2tX5bwmDwBtPtNUe81xS1UE+
jvLHvg6/xGPWWpsFTBnVhjilnR3+e1RtNCqNnZ3800h8Gq1/6otPffnJEB9EvuKzeDuyTS64PquC
63NBcD1RZdULRVa9OF2qAHOfc0nh/uPe5desQpb5y0h96etLxVr2yV8kpxdN3ECrleuIe1H5jlNU
IbcXmBtXLlptGCG43HuXjAaHi30AbS1GfU9zl/cu86Zewlb+Oiq+EnuCgu5aLn5jS91VufilzgG8
GEyXsHybzsMV7UY16ab4OFsVQEXIV42i5FiYf2yiBxo7MpuOa7iW6+olxZjCbCpJv2ye+Jxs2rNC
0gFARx0UyBXZxdSYTYv3Nk2L306lbYo6Jd47VcHoMGHlHMgBdCVQZsDWarriVJpbXHMqreuzYa1s
0m3Jo/8YZTZdDI7oCdUg+vTk5/covDwqOLUIibDgQNp2MLA1r+Tre9UMLQwx0lG9ynO0sBzre0lJ
C49ifbdJSw7P0eJyiqFVS0vLIT7VIdmzB0eVhuOVfKtaRrrRrt00dCuxB6hzMzgyHcOKZF1z6O+8
svI6f3dHMfEtExP3rhET91bFxHkmJpJMTATXiIl7p/Dub8TEPTHizkVGIpd/QUTcmSIXD7nXxMr5
/VrTKInUR4a+W2uiL2E5tjN1GSKrO4YlMuB+5ysBOirBpq80nNAyyyEqwfh2dTfMYbWFwAlnqNpb
rRsOK1frhsVKeIznY1fDT/nTkVk1HFaiOOUszkpBNgg1bMuZKIkO6UwynT0GdxZqmhRCiRA/yRH6
bynUhZ6LqkDECo7Qv8vtAkzZuNx1Tj9PApzT8WKD5vS8pDSJ56XdNQ1jeV8NC0TYdbN7QSiyWaG7
IeCroWMfAXaErVJrGqrmeTq7ZVY3ga3M4+FsBSmDHTUNJ0XkuFTfZXuYwZF5YDihxY6wu8hPWrVu
oKpS07BSEpB0CRfP0IiQ7PYUnZdZwThBVUiRRSuFu6mia+WtcLXFdndp2Nvp7m4pLKOCrbkXQu7C
L+e/FO+mOsZS6EVKxWiovqVj1Sez3JhQzSwsp443o5mX6VY8k0sE3QmtVFUJS2bqhWZaZtkgc6jM
oZKa6U5qCXiLwSx38riFWkeCQjRDDaRcsVj1BRtqGrOfkiSqxLjxfYp7WB1XjL6N2qUjSHHN6NFL
H1JcNUY2sij7MaSrPXprA+YNq8Q2qbiyysj2+UPf9viDnHIjekW8ksySrzLyxmMPFSSWumYqxQhE
LaVXV4jhK8BKnFzmyf16phaIIEiZcxgd/DVuhQcaX7icLJV8PUYnl+TyUjPLnl5Ci79dr5XbGeaK
fOooIbWjh9OzM4K1/OSzCzIT3i5KdjQMx2/KwBkW296RpSDeldKFhWL5QqWPZDx/DHXgmqoR+mI9
ilulUqT76FuhPxNmX92oJ1wmRFTaSPfwO4avVQ2T/hpyYhQZKSpWxKqR2FmhKDh5P/JSlp/ASG3H
9dG2FaIO2Ad/zDSG9R7rpXQXBYdCfTJbMVNcI6cOcw2lVindVSmMC/xdLiHGfz7Xld7CHrQZHycD
cJcR0kIE0itPKUKqI50t5oTYi6jefax3v6db1LHIfvSaqqakIe+AmF6p5Zgbrp3P7L1uucT1Boal
7xXn+3D3in5KutQdwO+kOrA3gtGMmkHcoJ/PKkk0jQcM3JGqdXiqduQNxsxKFc42RlVaRUt1Gs25
skah0s9nlcBLUoIRs0fqi8ERJtD9sSkxcLscDJ6V0AEvOm5yW1qMNORRDWH4jsR7qustXfNsnzvc
0gl928vGf4j+qpJu1HPwX8n2rKRbKkU9YbEbo68g20ZFXDS31h0lqi+j+pYmnkjVZcA1Fi999GRq
TWboAVYn8K5C2bLZPDMpLjJ2LVty2XtUdQbk0XKm4W9lrlunOMXjwdVAznqr3UnAB0DcCo/SVqkU
6klXi+0BggZU/J4dV+ZKD0sqPyI/1FwXkRpyrZji5CR6P8QKhkCG9GG7/SgKmBe6TsyZo0CByOZM
ZrSHyACbtBj3QymetqZ2DIOZbi1mVsFhx/tTZ7AShBOKczazppiDE8ysVRwGZziTesCpNKvbLuDm
Z1/lrlL9nK0GdWc8syYzncqfV8j8DyahgglYNh+pcr8jJZrqK4JrfPdnufoStyFJc7sPn6Arspk/
PjIcw4r1VngUo243wuZqPsUqlRT/DysAu1vpRo031IFXEat30a4kn++7aU9j5cLypX33+eNCiVpi
NKl9QP+toIJvnBRWqwrSSqHytbRs0xLMWa97LcQlZbq02sqiC7f/lYaKNqL27kxMHXNjDWyEFFL0
x3ld22LFMVD33LpaLT9nBU9C5D8cEerxaNnjLRhx2JHMijDGYfFopvl88x5qEXg6eYB/xCcXCkSf
8TpsUmrUCGFc4eHBCg9rVkSQYY5Qv1pbVdCRgTCSQkOaI+4QW/UTrviyyl3xKaFodYBLCL4YeSQW
I6wblcyeDrSoCLVULFAwbNOiko+DjxxrBy2fymbeJcOe5uO/tFD2H8WxmmZK/RkSiC5tACSyiK4o
9TPCicrfdL3Ct6dM/Oq55namd11As3k1y3blH2aQ4r/Q7s8yQXcyE1ak+ZJSkyW9oaEye5Nt2z6Z
kUsB7MnYn1g3RK94iD4eHledBzPr5wydeHFxpYAWDdF8IMcBFkBANFJQJVl3PEsbXF3ZicZILxu3
6ti9tViL0Hl3pnQ9rPghYsXYGwZJpPmaFhAVxBESdCYzXUcQR9ykr2lspzco6DJVtz+Fi5kOU9TL
ZbmC//BPtLjTFVsBIpauEbtOj3trNX1oz2dIBFNSD7kbG5HNECDoZMYZ4K2KNJTOd1fjB8ZphJj8
j0wdcL811C1vCUX0bbn+JPTtlEqXd6LXs3ySx76unczgZKYMgLdr5wjk38Euokwf2yarmg6jO1nE
4xOHvS4LXT3zkroHeyN0k2qpx8Gq37bHswxlYjtzLIBnXeS/ITtynQaB2Dri/RjlejKfRCELU98L
yAuDtRpI84Lw4cpcnY5cpV+0zPq2G2fw9A4uJkuxiFPVrRhKMgV6QlWMfp8VT2YezzTFDwZeu6G4
WMFrue4YBI875ZrBt8Pcc18XJY2BnktwkkDfEj5ZQ5LbtkEpKZnHMXkpVCw/YjToAOEYJ1S8zPpl
OwG/lJBJoTYokVnjcYyLb8wgsrUInb3KeSuTbl4uEfhas7CGeH/LxiJ3l7uHOtC9vRFs2n50S2lv
KWA+fs/svX9qjqVVdEfrHh3b/+zharNb+l7Wtnr4dO8f+GPojkYbJg3wqcKf/xsjeOXf93u6c2/P
z+fohzPpL0tL7d/5XqTgKMv1w5kX+MMtfiiIHqCEXWGqHqB+mmmXiNxv0X0zWQNYdA+e8KdaDzis
q4U3z/CbxZGVdhs94PBOabfZg0E0HntW2t3vQeZ7y0q7B72dHfyvOGSL/bGVdg97HL4y7ZoG1tXD
maJ1/0l5yYv8iYpMx47Irc34T2Zb7G65Fg8r4UYN43HDC2mAkcc8xpgUmEVNeMykGLGMEZNCPKoJ
jMkf8rgUlQKzyFhVaOJCDzyIm9Uw8Zul5j9WSXwAoYmDZ1CYnp54YO4YWnXYvoFQ9pGnw4onWvgg
grCyGf8plgODcAettsRNUGNZq5Tyei9l9VpSak7cB2CFZHdrmlIzKh/KRJDHwBNfkYJqxXFBpbKh
SlzXQqeRyjajGFOhiHXjuP/NCWZ1pMDHPKVOGE1TKwe8zhZHoW0CN4fNd7sC8gv3uxz1q+Jase3b
oQovZmAY9xYe24QMEq7Yg+JILxEVCt+KpmkrPuYJjBU7T/RVzFSXmfIFXWpafL/zcaZcVhf210KC
EUZGKAXWx5moTHLY+FbWHB7wigNdvq0I+bbCL2sfZ/k8Xj7I9ycH6rbO36vpur5b08nmP15xaYpm
pJETW95x5MQlvhPwyjivi2MCw0UfSoYTZ4X1uH9QGeDpFjkp5WnxJDVPWaKCqp2ihLBVetdQBOOT
26sGx8l6JaiYLAoLZV/lILYyae2XTKUY2FCFglDLyTrwyzJZqaqQo3Z9MbMv/+v+f1kCfU5jeD+D
imaP/TlDz0DQt1Y9bORLGcQ2xc9YJhhab2fArAyLd2WJosOZ+i2jP1JD1Z4C0Q05H+gwkQmx0ndJ
0UmH2Hoyg8T6PIMvN6Q2m/jycTLJdOnmN8dWRvSv4j4fK/H5TCyq87lvjM5BZnbXXbjg/nbB9Vxw
z1xwJy646EDz//o/XXDHLrguuD9dcF+54D5xwf3ggvvWBffEBfebC+5XVzlj+DJTzenQBccE59cc
t49V0vNoijq0ST6f/ZpZL2fa85kATczSgcAdByUVahvSNf1gGscsHCxWJnoZjEtF16U15W0xTYqJ
mIpD4WUxj1jBmCIYY6FdOAefD4oFeK8WQMYA3kDk+o5VJixG+DOF+n2kLoKROjrBG/vhVCHt/t//
+//AWBSMcQbIgadKg9fea4wReijUlYsdjUGAcAi0tGpxl3V8PQFDuYaAM7FGgEm2BICxLQR8Jtdh
ZEuZfaqKaZjZQv4uhNxtLeh40nW0EdrfLmw8FLdezLqL3tUVelnPj+RObbOqwyyPBtr46mqK6Q30
xIkPtoun0WOMM8VgGFIYlaZva8HOToDcnPnzHPBRhnAhOkEy91wntOjpH+7Ozl63H82/9Pa489yF
jnK7tCgqr2JimNtZ8tja696fKGkiTp44SKZnKxzwECLSsan00Lb3ukN2NprEyf2cTuvUzivFaVp7
XYyg5KOsGXL1HxNOdX2jJlHVwE95L7iQAzK0+xDbc4gggAnO+NRQA1ePyRU34vLgTQCB+OABIFXx
hc2OjKsrc48dGRyfKrsuHVgddVMFpzrM6ASLVhQ6XOzslBgtAc4Qxrrk7uxoF/Y2umm3tQvnDHPX
XOfMSix6LrtXVzLQda0zvRQiTiVxmbg7O9sy552dj7O8qr/Ougelj7M99CmFEqikXezsZHR0WvhA
W966ldGwOsP9xQO0oIVgWNj5FdfLkQ71g+PJ1dXkuLGvX8a8G9Sbjp8tPSJaesgXnddfvkiJ5BJm
uRzt7GyPud6oxtAXrzDQ/5DtJUuSo1Lmg/LE/nB07nDxeF7+kC0RptgxJd7raGdHEj4pMTiR5w7n
mTy1yHXZiY2VMBTrtSPXYnZYYqW4dKKu2WwefoJf1PB/YvhJVrIPtszn+NjUS4KQ+PxhFfaD2Sc8
SnFF56ErCfF8cSPkLy7a4UK5HlbXL7cvyJ7hjYZYlCFiFELJheDbAd7X08QIYr+Awo+hMz4+cqlf
hXu13nLjQb9cDWnxLtPlLful2JYGQmnlLZ+Gpnzj/G0G72Zwb9ZiC+0yk2eWCy5IgWfh1lTKJavr
3kPx21ONBphq7/BtZpPAhXcz+9tMqO3DPeWFcwDfZooWymKzFkr5WfGQRNVCWRSORtamnbs2wA1Z
xIuVGyB1aknzt1QvF9a4RL5Mxz0Fz8X+YtUrZ4YDB54cPzH2gNhxXDjD4yfuSYEPksS1FF+imJfK
kMJOfpms7tQ4upmYsjw7RNSSiC5W1WieDvfwAiLS+UhzLY7NLH5H4ncifmPXuimTGDO5ld11Jspa
LHfMeAynq2P/TGR9/+asU0RBupHwfVffra5s696hI1lFq2ihrh35EXYOxkDg2qvOLPH2VMuh1081
2rCE3TC71OsBcxw80ARO4jENC9UZYnaJo1DyF1pMMOLZ6WNGCeFNgVXQI0nhcD50HNs0WhkpAWWc
p8f9IKotJHaMEFcDCGCKKQgs7SgiR6ERqgRBYgcQ2HjT6IFnB3prWi5vITwaHo8Fdsi1PUOEilN8
TpKCQwRI3E4AwVNRYAfHhl5wiBvtBfpuIIHouINUCspAHIOjLAl9jnYDfS9LwakkFMaTiO5iBzns
mopqES2y6xo82c5b9BpkDLpfwkQqfAdTMX+ooyhqXnm/yefJsIigrN7E8NvN1GIZQJO8bEFwDHF1
Eq5eefzhFUpYuEAJ/+zaAO+qQ52Qcq+rJSp0dj2WYp9cQzpz1IsU5MqiG2EgrSYF605MvcrdYyu/
H2fq/ThH5rMJ+i9D6PSOfLotQ1ilGGLqxLLzRjqH1ktzlDdGcCHCLbqu9pRgTTIhTqLa1NO1GAic
qMYYKjHKGY2yGuVsLQoSKUQpWBUqtx5OSXNNhofOFiPtAIX78WIFtNs0nMmCzJYokxNH5mWl9jHb
3S0pjivOVxOrSYJoZHGCOzs5qi6/ganmQVXShlfqDVJxYoCvqb6nlnCkZCiQistMK6cF9ObTRYY+
bzMtWMB0gat3eeVL6ym8dG0pWOrK/ee5uPIe02+o4UkUIvr69gjlBXj4i11AGy7gDE2cskzS3B8E
uvm8K7BYiUGEN3XxEtI/gq0iTDpKGpJrCSFumMBvTm10cBFx7YLETrupIhYGdnIUtQY7Oxr3ZttN
ABUCMV1g+7iXmNo+uokdwhnusoVSuoln2jC2OfDvthbfN/WdnWk5OJqIiV6Zb4MM7JN7jdchOjb4
pqYVHNnTVqnE0cyHttkakmLhEPc1Z3ZwZDjDPU9D/OPhroeUtrWzo4jDOZ4dJ/z8tTXmV1Jn+nKZ
4fOuko7LZmt4bJutcllSP/5T6mNRc7vVownt7FMuzibSLzyFBDDN15PTcoCf6abbywTIoIhXJhtN
CHgS7MJfFElmQAEd82GJqztcdgudpbCoyZS1hRbi+hAdI66tfLRQXD8YOCDeUSxgBX/FWxxhOCrc
/u2yPdG3MtS4XCJmnY3teZpy1Odz//ZyROzGR3EZjb+0FJWIEPo0crADW6ghCClfm5CHEm2w0LDn
XlIvwhNEQVjMxtwbMXYp5Rv1MP4Jle6UWWq2yHTwTxca3k1nuJNdE0yjtyrdkQmS55hSp6FMHk5I
f+Ua6a4iUi1uvr3kKLlo653qu9nMOMnXvuleUW+n/8cE2XwyNjV1Ab2rKl7NlTWriceS2mJBZ9IL
dWsgILe8cKM+x9psxInYpVDSwZXAitDu5KuquWiKu62sOtQSkh/UupGP1y64FJW0W+ovRWhiTSuT
hj8CguKPqqdWEHMYOQc6LjNxoEVvqqz6sJaK7TKL7So95UTdOwiFCby9UrX1c61osuyQ0Uh/stJw
mHaxgA8LFEJtUvtuLzQToV5zUcTEdcFd9UZKDGKhOEJalIrOXd58J3/UfI+o+SQjGssfr18vK/X0
ZpHTe7S4Bl8uI1lQ6/u5tvaigcL03UJLPLg2Wt646hmAolhW3CggRistV0OE5YxVjNZU7ukxM3Wg
CVUr3Ymt0FFnUN3yc+TVVdUq1biCf9N+0rhDhNI/UqWSs2FKEKm5RtwGuNXwRjpcca6oSxXiEp5L
wZ8LnXJIVRDWm9Wq/AyYV9TJtsFT3R3cMiRwS5/6s7+qi3VzvXDVPlktQtHv34Ec+2OhKCKi+2de
2PAGLcPrwWUJ3FlRPMw7aLenQgirfVOeJhgqhLSpqBniUiqU0NGIySvAo0PCyrYJkjve8/UNENLe
bZva2Eq7H0do1KJnSMOe6NMn6GVH6fXZwViaaWHFunrL2xWgCj2r6x8baHtRNnsWV7c9kicsZJJh
sW6+Tez1luBtGjY3oRvnO08mzRPIMQGCGqd65gdNHDih+wZyDci1qJSpM4nilFwQ+di9vH9Fb9Ff
0Vv0/ryvetRXvcqvKeIkBizZ0GFDNYdrOjV2vBw7O8f83tiDvY2S+3Xed9Fk1RSqHd1KAy/4xbmA
uo9TelrmGvLIZo6PHSwGBngS1rOU3ploskcJxeY4M6FCE7CjsMWNcDS6/N9Ny5qPJrBM3yPtvUz/
VnbcaBNE9vXgwQy4n+/MdiAh8GAMXkL0Z2jXml/sDHp+CEJU/bzRomuGl8crI5J2M2/OlL1LVBhe
0ZHpdBngiWPPio7t0OnGpHEMac/qxtzPWNyNelSQP+iFZA+DG1tMl57HLDmPguGmXhirBbqmF75W
eiFVq+yJft4TvUJPXODmd1NvfKvMpNgDM1GPRworaOxyRpK90D+yfYemOTSDRnWgnhXeCKt+t3O7
MPMMslE/vGwK4bUqce+WVfrnWRWE++ZOlp9dZ50sV5wVzhfwvK33x6I2tBVJv7k/vL1lVgqvk6vc
oeQiM2WEZ/lz3vgvlRuc4tovN4qzNyAZGI6kZckHDd1X5GdKPt/+2imqE2mpvRJNxyIzP7BD+p6b
XGohqlNBqoVg4qkV+TrLllD59t3nauucimIMxsrpUVhmTsqrNTo7S1h2UoHI6QonREEcFFnKlp3O
GfSs76F2Mvcfzc8a+GFSljdedkmPxEU6Hndxg44C0HFU5oZqK+J+o1rDaCvi8jVR2ApF+T1e/hZ3
rJgckSusWJnDwUdFE8QXD+3jl7id5Y5D0V8QHS2RK8ptUrjT08xMFfXEl+gbO5aHN+jgDF0uCM9S
tFqyjRZ/wQt1HC3b5PhCzz1Ltcrl+LgQTYm11AFtGLFjT8PUFv6btceLjI1SqsMz5RVVkLTHC/z/
bKGr15uh9ngBzxZ4jOJX8DRqQRb2TD28YzoUVefRb5uhO9gqFjs2HVlXWuyk9jFad98n7Xo8KBZc
ojqfCNUtH3OjUfR+Yb9ckBvcy2XmXp3ljLNSqmcf0HdJ6/3ir9kUzZi3lupOaA83gpiXcHuXKpVZ
CtVPBFCwx3Tr/UKH9wvek+nG4ffCNlkNHi7s34vdpgGfFvZDeni6sD8tdqt1+Liwny529+Ez/dYM
eMIfmg14QVXBCuVnZfLi8coPAj9hgygckmPsa2pq9/ci/8Y9vfxeAHldHrH044d2JyPReqHy/euu
WfOwjEwhw1VmHq4x8zBn5pUfTlPy8t36pXLyvMiJwrMBxl/m9fFDW8nuuZrd178veLlYjgILq+x9
WmPvU87e02gaE2dfVc6+rFWEzMqAG6vixrw+fmhn2X1Rs/smsyNqPA5lhO7dM/XRhKWPuAXcSDzp
ONMouZW1FL8hO7+jkL0hESGrbzWUKm3vac4eJ4l7ym8qc+/W6qLI4EpdfPzQzrmUL7o6kfB6eVqo
lzzvd2re9/6deauT197Tha637sm8c4WZvrLOUWcwIp0q1SZfFppe2i8z/f6+Dul6c65wvN6gu/tF
bv+iTT8u+CIp7dusr+EdAz2YOsT0UNXBp4eaDh491HWI6KGhQ0IPTb2V9oWXm1A+xPLBlw+efIjk
Q9JfrcPBdXUoWygtdgLlfa0y/7YHrNZqXklB3x5QJU3pwdRhSA9VHc7ooabDhB7qOozpoaHDOT00
9VYgyz2VD0P5cCYfJvJhLB/O+0onH/ULnZxYxhXirZ3nVRSm57yo/LHQ1VMlvFyIxCv48TQIvjIv
ll/zd33XrOaygifSWyOV59P+6sAssH2HZlKYz97W+c8/lVejZt1ktSCFoEJZ8tR661QtzqxYHB7J
gDu1QpbXSi2uleX6Cs8YVPhuzfr5UktZWRXXXCvrLHV0ZbTUdVYxE77q4iNLKfPmaUtdmWUkVgjy
pZoOM7VyF2t9ZbV+79BdirVcaOJNnebGPqH2B7XGF/9ijavkViu9kJVa78XquHaSU2tfpbVOXLbB
Ym0i7vflnhjVLqST+m73xQJM+L3oAT41oLErnxELOX+rGVAz+JsHJjzkDxhfPPLo4oXHphcfTPjE
H2pQ2xWPTWjKR7MKZpW/xGDCU/5QheouPYZgwkd8QJCBz/wBCdEjAxOeLHqKFUlS9NWZHrEWGtLy
I75uCkyoV/joglle4osdsepPMLQGmc6n7TvZFQiUUtTe7mZGTbGjmNGqZ5oDAfB4ybPLLq5oCxOD
hx7vtS4gR/YxHoIgrqEWQe42MFo76aYeqsWnWrr3ZAEh/kMzXxE/Ux+QG7XcfW18KuEm0dkn+q1P
YNCzo66/F3W9stnrVntHUdfD3z3f8cqm5fVyJBpObSDvMykxCtDuvA+dfs/u97VFH077EPTh3gK+
LOD5Qoduuw8X/OusD6M+pH34toCvC/i1UPSSP/SF+a5xZLPKAg/nF0doqSUuZbMjBHQFWhmjX3dg
lafAKq+AVTrAKi9zDYeVSVnVB8rosMriWkLKvfBd2cJ/lY8f2jfxV2SwOKVt5DEjehOz6q1wv4ir
d7mwGIytFIZWCE8tA15ZBnQsA15ahnKr/qZfUJz1UoarSjKSwhdS4ksxxOdGSH40TMiQaegtErJM
Ss6jGFe+CbdAwtksIUMj+vCKvwf24z6qbU3tZ/Q7xHdPhzN893SY4HukwxjfIx3O8T3RYYTviQ6n
+D5Ag59n9LuwLz3rNTyw3qIJH4OH1mMYWBxSw4rnwPDfmTWYw8hazOGJNZ/DU8ufwzPLm8MPK5rD
SyuZw9gK5vDKms5hYj2DX1bK4J31eQ6J9WQOHWs4h6l1NoeP1mQOn6zzOVxYozl8tk7nMOfZfeE/
C2s2h69Wfw7frM4c0Orw43wJfeQzZPDAihn0LR859VjOahtZbSOrb5DV38jqJ2T1Aln9gKyeIKuP
kNWfyOoDZPUl/LKiIqs/kNVXyOprZPUxsvoMWX25zup7ZPUhsvo0Z3WOrJ7AA+sR9K038ND6CQPr
AQytX31g+O/MuteHkfWxD0+sp314an3twzP898N63oeX1rs+jK0XfXhlfenDxPoAv6wnfXhnpchj
iDx+68PUet+Hj9bvPnyyHvbhwnrZh8/Wpz7MrR/wxXoFC8zgK2bwzfrcJ+7YfNlaVOZ2RwthocOi
8sXuaDF/HNgdLcXHvojQx0cegR55hL4y3XSuhazk5+FdvNUqm+DZBnVwccIucGHw3G4V/urqSj3p
xYNOurSKWnrBMshHMLPaPld1x9NReSHgAZ7KaQP7Z7+bCGuiB6mG2IcIgEYnsAM74Ur2ZNqPRtIr
MUEL7LSb9HSCjQi0EBAtQuSUkBRTbso2chDniGOK3s4t1fWor5mHhgHCJBrvH+wLuuULCSTO0BFZ
B0UUXsOsSDTC/vDPNPed64dbsb46C8aVdyTd3OS678muyWolzX1JEZy48tIyuERMEevR/cYTUqV/
sw0djVQxhAKe2nHl6X2zWoork100KIwrY9XKEF/dX5LyLwuTf+IEyZdv5dOReXUVVz4dN2qFIrkX
FOvqSosrF7apg+ADYV1O+tqjvhZXFoC1haqhnrrlRc3n4/rVVUT3EdO+1Ha2pjRTeva7hTj+1zxA
FtAh9j6yvsgIKatdLIJX3P5AXBkqedIeGfksNXGrbWme/WEzixv4C3P+QsHft1v428TcGmdrbHEF
T839LCrW/Zg1bLGy3alsr+n9faskU1ApZCusNIFa/daH9W+83MisQRwKkk7GXSmufN7dL2tRqaHf
37cwOK585CHEvYQZ/pYlfFqy48o3dGFxhURf0et9NPQ+6WuxTnzE6ji8UK60MkQZg/xGixkqygFm
Ehi0/COPm33Ex3YkemfZxJGRoA69Mi+VSghPhXMTxZef5aeBPe8miIT5s+8UvlhJD7YHWO82LpaR
N/3IyLJaSquQBAe+kmFcKul5rAxQM18QFhHSAgEmmYEz5rMY6gdN7Cm528Y78KIdrg5hiUIlSmtZ
sfI6KWYyuTmTC3v8N5k8KmYyvC2Ts7/J5E0xk9ObMxnbs7/J5Gcxk/PbMhn9TSYPRC+S0uZigx+A
HxRWjBNSiKJttYIxjXFiKBoovFbOJaMuy8a5AnjxVr3m3hyFMSXOoKsemimxHiuRkusiPVM17rol
Tb2hOEZzdyVuqmZrlv77vwsHgXs11QCTrRdUTnYKxZitF3ZDNH9DeXPJokT02HqZN0Z8uanY+WXJ
asmjzSXPSWPhiya16yCbHQFgu1C2ZTcZEi8hXQJ5nNpArC2IbZt/Qm2aDh7fxl7/Dwm+vY1D4w8I
csPjn3378r/K/2W5Lpxa7pYLBq49l/Cgb+/983uy+31Y2oMf+HJ/D1717b3u9+//vLdbcq6633ua
Xrlc9vZG+dr7dX8FgPOI40oRhoYWO2VmMZ1jZfgrADhxSfOOQmHWHpa9zKw91Uu+pepavlWvHFiG
UvaqD+737/d2XBWhTo2aeTXWHMstcXTEt30JKnPl6iVXd8H1VQLP+is+ol55EwHQKA4lu2zFs1na
U/ftL1dq5EF/ZWYFVHBblRM0hd40k77/C7LT28n+vgPZ6grZj7eTffgXZD/dTvbTX5D9fDvZp3cg
W18hu7id7Me/4FaQLWn0c9w8cHAvZlVZ7UY5+3klq71/at/0K3KA/n34fYjA5RYi8H0f6rqzt85G
c4WNb3bcNXuOYZW1uFvtlbS4W+tdXbmG4d4s8J/8RTf9RcDgu7Vy7SbKL/6iNsdEuWzeRPfXX9Ad
3t74z+9AtrbGLiKQ3YH417/g+entZL/8BdlXt5P99hdkO7eTffcXNfzydrL37kC2uUZWuSBCynvm
LQOWzYu5/LhtnBRoFUil81sYXmH23e11EP4hyeR2kvG8cOyE64b8WABSqCoi1N8cVywgVyJ7N0a+
b1avrszqSppoLY1Z+rYQynWzPgHBYD7qsjvZnE9RtWklzaCYRpAouYZhKL7hgmsoi5txc4X56XWM
CO2plejDzdE7Cstq9LN5AbRNbJAUZwS24exbih3oZI1+2ldrEu9QVjMZ35zJsV2/uuJZeUjC8vpS
fVaxkp+vgMQQUXjd17z+SkuW+FOWEcI3rbI0mhfWmDKqYv++Vs7w1nLONtd9fmBG50PFNItry3V7
2v7t+bE6pFBX3S3MVRCl9dZgdkjtEW5sD7hTHp3V9l7VdGpJ8IFjvn1Aa+ayCW7J1fUSdqm9Jh6r
IeZblQfcb8pX5WR7c/GzQ9GV2rq4NvrmmebDbfE3TzYnGyabd3KyWWyebB5dm9WN882bYrJHm+eb
n9cTv2bKeXADO5tnnR/Xprhu4nm12kfkYcUNc8/rtVyCvlqxm8bk21vzUaafCXX3yYbp5/HqMH0r
h+mkv9K2Jf6k5rVpBnq2NgPJ2Mrmcq3A01sL/P7aprhxLvl9bQHvlPzhnXJdmyk+rc9Gq+1TnJBW
WwjumtPTee6FtmQUR8hH5dt9JfzzvOBaJd/1zFftnKUiKq4DOXTtHH7N4fm89XWuXcprecu9P4et
+19cwBDLvV8e790vD/fuf3Uh5d/Lz6z7r6z7na37ExfEfb3VdR8gAuvbV24P8N7e6rqdaTj0EL71
VSQePkxZwp8+s2Eonz+cT2Px+Dj2+UPHS6cxPvYgu/znJDk9TowT4iR4ap7U7QFXErC67nMvnHox
EWf9WDy+8uLBuQvug0nsB/SOoc+nIaOfAN8eTEfTJEWCbJIycmcE7ptBGvGn19FMBj5iA/4omH2l
5M3z5VnyDNXseG48M54Tz4PT56SLAHtf1XZ9MbdJuQJ+ze0Xcwmw92JeoXNEeE6h2Skg8Bc6wYMX
c2WTNV85YOIaLKpj3Pl1/sLJNVOJWSXVNkjZEc1VjTDgbmADPpim3I5+aE+F+Ric2VOJ3TOxA82t
3H/posIGusu833FRZyPQ3PvY/1xU3KAX7IaovYEv3tb9oYsqHPjS5y8Lenno6tCnp6+qEzSlXBri
+R8xZ2Il/GFsRfzh3PL4w8iK+YPPf06tmRXyx4XV1xXQyOmaFf+GGiY/GEuY/gkU0JlWQM36Ntd1
60zjZvdf5kRtBYoum7rOlAlrExJdKpDoptcg0Sk4GtJxrRUQttd0BW+OrWepbbOrK+lpjyu6qbA2
usAJvRYgD51inBFeDLqitqaY6fVAFFO4puMhs8rGOp9UtzJTwHdzjXTKYE2fDF4s4Nc8NzLNGrLK
anSTCyshVb232cCUdTZnTKpukKm5vRNqbpjxcyXjTHEry3gl5NqM086qnXXBLxFCWQwKEM03G/QP
rEjzSehVGpbGbA0HClpN+5A41zoSt7DbB2u9PrrVfDqC0PZ41hCjU1Eb7VN8G+Vu7BiWuafFZQQe
zAyrgz/xyZMQgESgWwkmzB3xRPGdffpg6mipunbaDEhDwyP3qLehwCEgDh1qB5GLFypThGYEkYau
ZOREEwi90qnWn+kQqCgbU21OQX9kWDvgZRgoLoGUdqEWwFkRcfS0zXWv6BOEndt9canVXPC9FcV/
4Xwrzvs3Qtp0yD3RHcBriFNMrC/h7GaQIT/P4pRncQvK1DW5+Z11zKlbM/c6Kq4SZX633LzOTbhK
t+QadVQ4oD/INercBAd0S66JMklGnT8CAxp0ilAoJzMVejMkFZSNqB1SwyrVNLLgR1PqsqnvaTmA
SI64FP6/DiMSIgTnn09UKoDnCkiAst2jC8aQjI9TLS5WAYGGbsANSYuukfky5VIcEaclcwmC4oDj
yKSc0jV9aNBBg/3Mhl/pMeHGHhMUpVulIWBETHUNgIJuCkMUdWd5r5gUEDVzCYc+N+xKo4R43CWc
zfWyp+8irPZRvOs5iTXQIdCGtwi7yVpPCW4RdhD27AB8eyrEnWdPhbiL7CnvGpDYKHs9x7AqjT3N
K/uoR8WduPCgqOyRoDzynbJpmTDhchHC3hImfyIZhyQZJ7o1xIR/3uECm1IHimQc3ywZc7fdm2Uj
oFtlCGxypioCdCpggEIywPkAgoKonIi+PiZROVFF5ZhE5eTPROUZL9SZIirzVp1S69H237PJe0tk
E+DBnzea6ny8IN6CPxNv0zuJt2FBvAUF8VYx4U8k3PBvJNxZQcIFd5c1Z/+KhJsUJNwf5Dr5VyTc
WJFwkztJOPIH3rET7TJBn4kPvXBoIbzC+SlQwCN/xuIRQvVj6LSzEvoy4h+Gqx/eRhf0YbL6ofMr
TunLeO3LYhwIcmfi27MhOitKFxSYLETgeBL4A59TmQg+X/oh82IKikQ8ydtMvL+Jh37oBTxzkext
5Iec0GkWwhl/JFK9EzKJAl8VAn/zwNci8L039AX5HyKow35NubslCo47q8GSR3/ti+QjWvtS4Giw
9jmr4GT9U17DnvwoY7+RLOdxOiLog0RSotC3MhQP7zDg3pwHfEwH9M46kO/3eekW6onTqJOfTp93
yMsKKuqmuU/tLuupdm3ZGqrLehlWt0t53rt8iEcnS5dgYFbJhNeQCXuFW6+OvAlGBXxxorApIR+4
OQhQKkGAQtLdF7hh8kKZionhsQjPrBjWk0OszMmzTq41TUjJodwpx/whX1TK4w+qi4IpIBaKBxMh
67SjrSqlLjq5NFqpTeW6TYnEU/jh1nmH5o15xxY1J7BrlArg04kVcyeR/tJmVBVoDuJN0yirU5+c
8ngpG0Xxwt3ZCQlrOHOTisO6fe7Fqasf28bVlfLpQcy8az61o/EkStgw/7yzs53qjjvB4e5axUwd
t++FQ9dyA5pDqCuJmo1zT/OS4X5HixF4UNBaKiuQjtidFh2uZ8Y4PvlNPSpgB3Jf69RjPFXBQgtL
sb5X1Vua77Cu1ztKLfw5TnUntL2SacW2l+0alNvBTua8NncY4TgKQmRsh7QOR0h29GbuGDqZyQnP
1RyaO1TQpa6upFLjUTXreGgaLdQ+0WiJ9/P0SPGP2zUImSk9XjefUQ/jWsJXSTctmz3HIQ8S3RSf
Wmv+fsu+fqS4SSl7uhNSOivspr2lanbQEVaQrDD0XH6EiuYMLJslJARqYfTIwErfJ9dzFlUsN7Hh
MvNDxw60C7LLz29BO+rFzpv+DzZIKz/ZIhETgQgZsfTNRfg2jiYsThcdckGWyFnjpjhIJiWHkbEE
UNqwT9pI4RFLBrE/oSMRRAll3GNbP2AIeR3SjjDbCcX6hq71iOo095lpttKj1SVsKy2VZPGzb920
J053L5eWGtpK71edk46oFpwFtw0d7xxOvMF5oWRvxIzYTXv6UrduKWHiiAhDduaHTETwGVpZ35YU
1X4sladrGNqQAYdvu632Q8Adqp67DskvtjtFAwAttX/idhUnXOZcn+PlzAumzAohb1Nr24BBFJ75
o2n2fhH7qXhe6hbrcvBI5cZckcoPkJVs4msVpQ2OFO43z3VSC934KZfo+fwjh9e27UbEu3t1tc2y
CURIcdblfZs8TfpjP/VnjEO6ZR7P5MgIhbNBSK+uXOFuy9XVyTrPKpO1Le5N+cNiwoRH5f/1v5Ss
tsbTJN2SG7KtSRZOdVpxZTtpqZ1LAofroFvCWSMKTOTwRwdBHbl068Grjn3pBUF08chLvTczFp8F
0YW1bQIP5A4WE2wYHjDFNa2XsmFbiCX6FI4CZhl4c+q9YAtLmCvyyVy+nTO0wbdqBpz7Q2pqf2gZ
4IeDYDpkT/3hkIWYMW2yZ15guZOYJSyesZNw6MLYDz/4g59PvInVgLGPlYSxQ2/MZA5R7LMw9bCF
LbcfpWk0dmHiDYdYC5cBO0stAwgJwDKWIHAFhkiFLwJ4ndCiENnD3zbe51sNZaGYsljmR/dN2Quu
H3JhDdPQT+U3vCT6QJF5Fkt4zZckhD418OKUJb4XPpj7SWWO/7tpD95mUV7z3uo4rzrw+N/fXj86
/5kWwgZR2ieNJpYBvNn+be0TTvnV9U2tI7yNN40lPLu2mRaymV5mUZ7JZnrcgfcd+1JUpzLY1mpS
LeMNrbqhEc3VxqOmorpG76q4SrK6zTo0672V2luvB/Tk9/vakv4WJXWc9x14qC6lhbe2VLhmo57r
WhKFtEMAmtxd2aLw6aX66Xfh02/1E3XTwufzkfI59ob+NCl8H4nv0sthwUf9x5DNJ2yQsuGWN/cT
khPW1r3LdIk22fDpf7Jof8PA0//xuv3PVuDHjs3hf2Jvcu4PvOBZysZJ3pv4axIhFiE5bRYu6Ppe
7OrogXglIR60xtcliukQ4yEmVfyLF6/dwrwe2aZ65G/PhrjQRqDUini3bTvdULf8TYm+WI1e6Mv8
TYn+ezX6WvPkIUoyJSxPut50SpCSWA2k1LJheaJtU5iiPblL28GLjv1V616M4MOoB587OvxSuiyT
a/1Ql0/MPk6dSmHWs21723C2DWubVVDK6PCciD7BuQVedHrwqwOXYzaO/N/szQSbNbEuY5ZMg/Tk
19QL/HTRPmeDn9aD0XKpw1dK/bzT49BTecZ5V/Fi5rnk4VrtcDLqG/QC/UUUP0++rblJ6g1+8rpk
1D9FQAZioMO3LPcvHR3eCSq4b6UHnKKzjB5GUcA8rJzASxHP7V6RddnHt0U6HVhbRnj3R3WStuVc
TiccaByOyv2eRV4RkHgn9eL0GR5DWDEFnIRD/uov7TQ/ABb+ZA2HWRIPPyaf8UsIiTnWhkfnPUjb
OsTtvC+kTkWIJ7GlCnNSYbF+XrAFr5JXYrcvP2tiw/CNyrLU8UZp9RvuCq3NKTLiuHH0JW8CoGut
ZqINNZMUa2awtGMI7LgtSpm5ZNjZyYsrbzK9vLzdSqUSicpLYICmlbfxW+jGFEecD0ClUgl6VrAE
j6o/bOOoed6BR+dwrwOs3QO/rUyIUVscMLzyCTl4TYNN7qT4HkHs/7/gbk5uppTjikRS41ecfsLt
RZkuqXQxv67R04EezJ6ewVy9QlnmyDXXku+qiL1WfiUtMu2GeFGX32m3C8q4WHlRO6ujT6p1atBW
TzaIPCpstBHNOncyxJtIHFI6hiUBvct4XCUxucNyTFxOqaK9Nh+lTt55qV10fiUdtNXzlaHg4ibZ
gzohfswoAc5Jc3eTNF+JtHA3zN/5BVJbOR/eDq+utleOtLr8GCtW9qK4SRZrwZ2d7Qc+tbydZj5H
iy2d6tKTxICq1M96OZ32ZFfBlUrFz7UFZJ12e9agrYXqYBcNVRwA5LlwLe9Qd7o+eD07tHzbs0PY
1ra/aD6CBn7RPF122G5c9iEueb2lzre7kzZOyk9xZfCKnC++HpEb9DG16yRr1yz3c/rwlcYUfn40
0mGUzx9i7iD/LDEbTgdMGiPTaUIuJNSz9PwYIYuQjQz0f4cea7i2Q4qOOPNIdPYBl7mva3G+guoF
J2Ea42mRCGLi1dflwSnyyesM1alimom8ngqoJ10S+HBJObIhzYaf8PgiIjInIwLTL64LrGhJ9Qun
VFfnbfjagS/n8O28B6O2DrO16rpcmVv94tzqodTh5+58cOKxilhOSX8dzwNyLOGJs99ITrVR1+jZ
5M8+6pr0lGPmL5ewIBYfSim7tsvSoU89hI5h5QXGtuby3RsX/pLeD34LJE6pi9clmWdkRFSinac4
vxUukuWdAxGQKxEx9OT8iTMdj505i8h0KiqVSqqDOsRSvbcsUMsOH/Sid2ZqSH4YlB/oOYJfx/nR
WcI8q6V+W4cOvc3bsGj34O25Dm0KOG3Dh3O4GEGn3YNZ+25Lkp+0JLlo86URw53EQy9O4EO7sHQU
cwKuGLus4g97G9ZNmVActrk2LJy01etp6bikUsmOb3urVHgD8mlrG/tKZn5Cy7K71vsSHrULKsJ8
aSFvSFYPnI8bOzv5kXKjlx0aOmqo1e2hrg4JRGVmDbOjXZbNmHztJCZWz8Iy8yB0exrzGnSKNeZj
jbVyYqEgFtvf8LRXToB0C5PNxPZZm1xZDKjisvnerhbugkQ9+ej5uigEWlokx5R3FOnkj9jTQUtk
aHCcCFA1Pl1P7aSN/q6mcnhrkS1IONOu0bOyDCOY0lIjsZPsuym/e3MtAXynQ2wd1ldo6t0RDtL1
Ok7aWlEw6a1wA1fhClfhClfhCleh4Aq+aFghX7Qkk13opnYJb5Sl3bcOXLRxyP0878GjPxly+XLk
Z1ucmIvlZiouOV+htL+6StfWhNnSD+vhgTJOJbAI93XXLqxTxfyWSTV0g1rcBFxdpZVrzrN2dp75
CMzlaAZ86FTEIkfX0AZfWjBfm9iJLdWHD7vY6iA6EsqnH2LaidkZi1k4YCcB4+NyGKUJvGpv2L5S
Av9MygcCBkT3PsNHXCIUdre0dCMx5TDl+CC0mHI6EOrwmtr0BzUlbp5ftXV4ey1zuGNN4DGleVtI
8+zaNHgpnMBLSvOskOZ9vh1cvf0PucgRa9qV0mAZONpfqE6YGybIsDhBhjRB/kZWXhMn79s6PLyV
C0UGdFdYMZEXE1ZCqxha7f0LPH6i6nqMTPbgobpzeir3OqwyLwr6QVvrssq8xxU8UHIkbIRtoOwN
5qqlpOz7iickvhRWHY9+zPNbbMpvcWN+i7vmhyQ+39QSRVGs1DdViEVs/n19P8H6/t2Gr1r3Ja/0
z20dPrUhG4YnbQ45puvworhpR9GIvpMd5/G5hgta23bx7htXpe7OTpLzyvET3fMo9n9HYZp/5psr
56StxYConNZJm9A5YeO68JdYE8G8DZ02tNvwpg1P2hANifMXf7QAet4WrtS+rpZKtMO2li8/M0Ua
VUjpOztRfvSkZ6tqvANI+LH+YIlGDPY7LYXcp11AhSdRtDa7ho5U6nQM3RoU1U0etAlpNNC5Hgqb
T1D9ZGdnO3Cety1cW3+RNRQNIWyD18ZNwMUIfrWxnDp8k98/duDdeQ/meEi2Ik8u8+uXWO4CcPEf
RiFz5Xazj50XPLu4JfRx5eDz5T+/3bi68vkeQCjvIDWuzJOE3sSsNlxSTrJdb+hN8AIV7a9SKdS5
B3C6UtrZeXVOBxuI/i1H4udzWg5kkUCKJHHrBjG/5l1b3ov0T25PvywoH+3s0LZf6Pts5pSzKPm9
K6dKBWxkeYXekz+gt1wu4R41/Jc2PO3At3YP3rV1YBeFTaFs5/wQfGeHORv5SPWdndXDgHwBd2xk
DlPRhs6zcQGGKjqRnXbNHiR2QZMnV9nJpyvcVeazFc4zmZfWdAnphejFX9pwj89a7EKHEIO/ah6t
05QJdVvbTnH6xZJsK51AzrDmHmpbKSsWVQTLYyVdHCzJO7kymRzFvIBxN1Y0k3Bdnq2xi8cO5p7R
4ptnr+xjxEgFssevUk8msY1WcpSTbSVSQwa3E0kPDz67SYlnt60NsuW71PQThq1BedAK801BCFM9
U0MP9yKcCaMhPD+H/hSUbZN97BdfqSK/KD2QF8Sz08K078QVoVYQV+jWVtSG7Y68Sb4N3vX2qtmX
MCrTR3Gs8NjHveSuh0t2HlEixJSjspaUI33P2818nxpLHeKLtRXxW37x1CqeeGV2n3FF3HJv58oZ
hhUicqYQWbzoMhp6llzP5OXfZ7LYnImHXfhtB+ILtQOzQida1ZvAdriUl/YhbiWKajehooDC06Yi
bboUShi0djhLUeaU5Ect5D4aeCD1E2TuZQf8m5hbURr4I+YwbSrTInMYoIWVNJoI1sQ3Lazwp5y5
hOaE/hS8CziZwodpvoIJeytdWeXJW9qZ7aPvdD2qCAh55y17vA56FqlenqWllH8Xb0xES0W0pQ4D
yUc0hOhmVvJrD8lMtLRzYxOnK8dSORLFRee00aRnpSurKYdgFyclJhPI+gEeHvJkXeUNrkmBZQiK
guHGm+/kQqDYbjotHxQ/btQscITrlmvux+d4OHzt7Xhn5XacBy+XMJUiIrjoQTTSYSgDvtFi91sb
0osePB7pML3owayjw9maOFQUqMPizlms9riKslDn8JY2nTW+I6ecuBBSxObVlbedLYKy/fyqkFku
YUJ8RkNcuz3tkGw7u9BhTMHDix68Hekt8XjR0YEeYdruQZu/PRcHFD34oG6fzi+KiCUVf3iUVvwh
3rEgDK0/PMZXviEZXcgNSQqnyrwXwgz5iKYwuoDTC7hmr64oFeEVd/H2jOsh0SacS9TzC12HBdJN
/ufp9rOSaJdci0iMWan9looBsNRhvhZX3snwJHlrOiLEamZadCyn08Gy9KfwtgP9Cx3aF9drkaTR
JOvLNCB5TxeqcvJLWGZidK509C1juYSLG+iTRpel3B6fSXUF5LWQAYVsov8BixNPcYEwuyg0kDKf
bnn25RKi7LBp7VAzsfsX5NmpFTmO3cZnUv8WKxocKlgZaHIqdgSiEnZ2/JbXDfH81I7K4lp0oO8m
osIhKtnagAzU8sClDt5ShxNkPSTWF/8K63OF9YtNrFM9K7zz6r2edd4Fi5xTmGD8kZQib/OVLF+s
yoXN2h3t1geabNVBAqEYFYrTsFwAyQsy9bjBt0On0o2zqzBfKmDj2RNJvoVlLC311V+i+H0jGX65
yvDLaxk++fcybMDCojFF/PrZG7L7UwzRnNt/acjr8ODirqpiHSq1LlbHG4TmTxGBE18XbT/W5FSo
ms9cp6Do8xMJL1NTjJZ2CInNxRUM7DVpBIE92HSgjNuWnZ1kZ8dbMcHx6dQ4tzIaLJfwSpFnD7k8
+3Ghw2sZ/Ikk8vgCXl3A5AKCC7mjWwdN2dT+AfE/kGvwS65Im3IdrVwvNq3IR1UpNq3kLwVN2LTQ
KUm9le+1FRXXwua7oOyaVgrvQuuVh4pzIb4Z5cqeaQV/ABX4PtCZEYgqxQ0VP+LGVpMtKkJ88JN2
Hs8KFK3ZRKibRhAzL+iQzR1SDsVKJaYx8FY2wVPZBPfaWP+8IW5sgm0tXbMsKzQH8KXRVJR9qNTb
2dJOYUJgHW5mOepmVjVxBW2q5ODLDWuUcE3fq1pVGNvTlf6nxFmJP7GM1tim4zT1eMNb0w6yq85n
zUNcZA9vhXaru2NrTDP9uT28uspW5+fOuQp7LvVbnCizJWO6hX7EYoqWKyehhoRzSZGsFAZRRLal
KbP80hiEDhVwjzLWeEk+rJaqao2Fp4dOsiFznhNTcgp151LJIVRykAzclFPMe6wjfrUz/T+TqzQ5
+9dyi5yoy3p3yxSHw2NlOIwvbhoI64Ng1c7y6irmh6AxXS2KVQQOjQiHRjYWBktCDshM1gI7Wu2i
sVPomgTZHYuu+f+Q9+ZLaiPdvuj/9ylcsb0JySww5W843xZOE7jAM2C7cHugOYVKEiAQEpZEAQbd
uE9zHuw8yY2Vk1JCVJW9t6u/bkd3uFAqlcpcymGNv4WrHrfhhnlAKhGtp5IqzJIqLHvHPoxX9GF8
Ph34X83S7+atR6fDd73NbbiF08E7Mh1e4nR4SqdCRpUoTQJxLqS2da61zrVdghiTuwR4GGtMjd1v
sDHJH3DBF4U1KZJ+OhNyKJXw/gfe+V7M52AF0WoIB+yJ8IJT9Aipl1vq3y0iIvQG42orcVBhYgXl
evGScbuMl5GaQClbFLfFuHt8mspAyPzjBWf6WVsW9aCyRoYU/9N28y/Ps0lUSFbkyNDxbSd0bHpC
YvBEdeAPqQsSVxE76FCsGHekkC43H6YnRndKqaV1ES/HybheYIipW03nYCXW6+ZjGp1MTAiJm7rh
NRijhZ3FBr6tmSk5YMYrYRbqB4EXu8v2lePHeIzD01y9K9NzKWhmrmKUSv+/rRVPxKzG7l5c504E
jZFJ+dCRGzuLUc49sxEbvnAcj1ggs4I1+yKrXfgNZaRva3Tue7qm0IKpWXWt+I5+Rae4F1jZ4c6B
H9cks+NDKDxhY+5m1kS/hMOlED4htYZcKBp69oUynSAz0Rk+o7dweYXnnJAxIxzmKo1dfxLB6zXZ
mRZaT1h0Fe4YLIdlNsQn44T30hbFygYkXvV1TZ5Z2o6FA/H3jQCzLiO6QoxVd0j2l8immpRUxs7y
kPN8vYZpcOWExut1QrnEm+rMne1lYIa2Wu/1GqKtb2Uevc0IPfPS8Y6OC6JgFVrOb66zfhpsrqdK
AnzYWPrW3HqBiWCtQxBUN3bR1AwdScU4dCcTJzRGdGQjNnSMqUr7zVcIc1nkr8E4NXQCDSNjZ9q2
WBR+HG7P5Zt4FTZp5QRQe8YzSaIlbsmK0H1lGTpLM3SMS0vT8UU0184tXkGVvKFzZfjgO5uYGlZF
u+CSAAE/C3shuMloTPMKuE8qp4hPWVR34A5JNGZuNvl+LoKrW3YTudjb9EYhS92nvSomY7TkKRtO
D7oVOWJvE92hC0F8FDEvUkrRR5r063eCVeSgZwCdY9gt+Vh2mlfZbEGMrcN7menLDfngVAsWUKaZ
3EKt0gkqa9SO1qDkS4fDn6C9P/qMUDvnn2qx8qPP5RbhwfPPs/ePtpOu+YMmzuStBBb4Pd445hUD
3cA9/iY6ISVz21m+htou9vNWzSqz5Aw3x58xQ/JdoLtwZgZ87xxiLXzfDGHPfP8MYc/992cIa+eW
MyTCpB180VJHvP/hT3L9VLrNJylu4fpPUvzMzZ+k+LnvJCWd3j+Dlt9LqcPpX1zj+2h52+ld/Nzt
aXmeJcoROuaOodeHJBIPXkO9fE+O0Pp6OhU9cbvRomB7lCl6tb6Wofm8vo6P+LQ+dpwbX9bXHdvG
u3Vukzfur/PHieH0j23qRtwv3loMv39koRhhv+CzG27/yHc1zH5Cvq6r7CqCoI9XnHFKZayo/xcG
8bH6PwXEJ+rfAsTH698piI/ap7sD8fH6ByA+q/7dgfis+imIj93/QRAfu/9rgvikAZ+5j0jT8jCt
SoMaPOjRhK7yhWeWcYQvMLLPFrJhxhG+WAEW7WeidukZw+wfVPOy6OfNinFWT/R6zTHX5CgVT0el
Eg1LYkePxOpjQV7HD8Y0Pq6gDnu4mK1BsTN/RxmZAnedrcSdF1MpU5zQiIaAL1z2NTfnbWz1NauP
2laXaVuFHqKW6DL5exayMa1SoDvJw8Xw4P8j2pN6vhOv16wXqglJYQMSXcEXnPZ5LIMCUplzhWbT
uepGz1AphTlXGqKnAmizME6dG4t7SkqPfFOHYeZpcPuRR3y9IWCqlCx0mQOWjglC5mPsUs9iRWUp
ovlOTg3/Ser+il4fpZL/OA2KwxIF0bOv6En9vNqdh3jX6iJKr9D786SDEOmIqDHpayFmYcfqV/2C
gGWnwSZrwULC33yScmq5TAFKY6vlumIuszWIUDtdj9Xwb1ScSJh07qyiuFRLmpgQ6WjrjwfWMDVE
8cFc9DWP9plve5qlM3sJbPvFYROmap6PCAYDN/BAfBtELj1AWbxwlF2gEe+g26gO+HhNnR4Fls7t
Ff5Re8VuY1jK1IetoYXUuzHWHz5KcqaB3QbvMvdN/eEj2GaeTdBZ/rJoK+T7uBLJe6jtYjtVkRpM
MSxkQv9Z1gqu4mzcUplj3FKkv37jzE24owNyRQi42NzQUHLNVi6sIcVKypqcY2aKQjAwpXt/MflU
Rz+xYzcONBgEjSuw6WfNI7w93ta5gwm3nBDO+xnlf7pZnv2V+fj1z+Hjz27Dx/fvlo8/+0P4+P4h
H9++Qz6+rfDxrR/l41u/Oh/fK+CX+GNp6rBDHkoFRf2+FjJllwwZoajZ5g92rH4DQDkHdVZSlB5/
UUG3OqL2ybEJIxhiZgDFf0dsQfQ1p4qXuuCDGQAi/stqICWph5yeZ5xH/Aerh6SRwACiKteEGSP+
g1V1hIYsNWx6QWiM6B9WBcdfpdeyrbHrecYI/1Wq4KUuTY9p7tV+1tu+0WCx+2/75CZfIjMTYZAC
YkVgBYvlKuaIMFYeHMvLArisMBpBnqkpLo6v4r+06D5k9yianGGnptgx+oYuSbev2RBh3sNstN9S
b8w9bQkerHRjCVMybqRoFSFM8Bo/KupnL0iYDxZc6AhtlC1CjAYWT8vl5TeutqBe2oapLSAGCyZy
D8s+e6E3LuT+nrprdHDbRdhy1hegrsK8lxiU2JAG2ICs+9qaSlVjJlTRaRqyueg3mIMmmyR+g02L
RmPMf7GJ4VNwD48W449Er/N0Se88bRcX6UwDOZNdOVFNEAhkNAya9SPrxcAZ8RBxyfAMuOEtY/mW
qXzLhXzLBUz5W/D3RKf9x2tkKJwEBkMMSnnWZ9BMatjwS1qGiHM3wxQWVUnBJIfC24mCpiCiWowJ
dGicTmcCXQZt+L04hG9o/172sziEFFzwvbz1fTB+37JNHuIDPqUV3vehzyH4fqMFb7BAQle9oGVP
+zjCl/TOtz6871OgOPjQFyBYCPvzkV596IMCjFUQGM8ggZ6LD/IbrV84cgUSqj+FzgQ+9hE4SIfX
Sqf4wwiguD7DSrPvhTqBr6IvM9pAlwNfdCZDCj3xStx+e3D76ZkOn8V0C2x42ocXfex3ZwJ8Dvbh
Yx+e9+E1HefXPneke3nQ1kf6qiG0z2iQa4diBOgsEv6TeMdn9jwd+bM+i4zu8IjiL1RG8NZZqDI4
OdXhnXj+S58FmN0XY6LtwKc+vOsrDn1Om7vjsdv3+/CFvhgdTum7O9wzPl+G0V+dAmdsIZkqkWjc
nRT9TCOWQEREAR94Wx93lUbXaptYt3atXhnSfdUmUd591RUe1m7WjxVBAiou92O1DRsQN6wR/JjL
r33Mo9T+GQ7G4m1mwyz0KLULPUoR8ohOgW9reLqG52vFI/O3teZXmfMTOBRpw28Xe6ZVuVMUhMcq
qC5R4NI3nvchboPfhrA9hEVfB5MWu21cXAtcAUO46usQ0GKnDWZ7CB/XOkS8nnSTVPS0/FDBiNdr
auUkdIwtPezSZV+HlegSAi2tIKTxs5crcLAKeO0hbPu6PCgcMascRXXTUC+MWAdb7ZjT4PqJRgOX
77jNV6uHw8XNcHEGQRs22LEhvMWXOQV4LDFRkAGEB9Q1qEsFOEgoOapoUMv2X1jfsGj/FH3Dsn0L
fcO0faf6BrVPd6dvEINU9A2T9t3pGybtVN9w0f5BfcNF+9dN/nHVJpjo7Ku2PNNhyy44buJVW9Mh
Jl81p62DT75q9/uSql886rF+4gupYNHWFu2DUAAfjx3VEnT5V95sNj9ns7m8zWZzfrebzeUfstmc
H242Z3e42Zwpm836Rzeb9S+82fTbhajJY5qrjDyh1nTme4YwCtT4IyJGMngjujSluVm7W1gNHc/E
7n1O6uJBGRKUPpbW+4Qh5BkDnKxUo8HmCbT/O70WMUTCKpXp8I5BimAotASB2bQ19v8uwbjoLwst
rFobCKvWFgJAKZ/a/mmcsQmyAUbgKNc+q2bdsnkMsFWbt0TzkVyNO5EpyPICa/7RjWgchIXEsrZG
DRzfbvIaru874XvWQA2CVaxcheJHhApE8YQkeXpetNLzYic/meGD/MwYyiBBffwnhAHkUBt7LCBz
qKhYKoV4Nw6WpVL4mP0qS/QNJF6vTYrAGWIFEg8/rvmYnO73uSCmWpokskj6lJFZaYjW4BQF0NpQ
r/ztnzX9MTl1Kv/UxdkRkFo9eGzWA3FYRCTATAmDAAHLVDnDH5i5IrCIPwiyRR4JnhCzckqxaXPP
B+Xc8yuS+l2cpMC8hxBf7lj7qFmVSD8h5KPmVSxue7UxpTu9iWUEb6bD1XcrwjwLxsQqy/K6jRGr
0ilgDNq4HGEiSbARwE86DqQ3qM/LbkWY6X5JvKONWaAty1ZBY+kN5oJEBuozK/6MWp2X0eE5T1Br
XCo5j8licDrc750nxBYl+KI0cSR+DrpFsE6zeG75rgg8HSZEgQRmKAfOE21K30db1Cbs3QWNSvef
WM6gC1KrXzw26xdiBl2ReHBB+32lCpRbLC6fDuESf3D4uAuGgSyhkfHtV8oUKW+VC/3ho/0enzAx
CudSPvMk+8jlwSPoJXLxOPvU9paP39wnQacrQSN2XTlNYC543ndTHZrtFGto1laxhjqZfT+ELsrs
Thvlcq0G7SDFzXSYplN5vw5vhaKh2YZZGzpc9/GMFr/N6z5etrMZaeNsSt7zvqITyjv1ceeN8Ppg
ACO83sHdyLZ1bTSQEV4fC5Ik8OZw+KhneU+LcxqWThveMA0LfBPked9OtS2qkqUR6/BUKIqecUXR
b7TgDRZwVcpTqkppMlUKvBCtPktb1XZuxBy60e2R+6RwsoPi8G5QfJUP7WOGMyYG7fcn4X5/gt5d
9MgKZNR9r605K/pORJilkwks0m9rMbgQgZNChyjv5DaWSIe8D71hoYfQx+u7Q7uy35+Y2DXZk3DK
wMrQ+0lAOfbaWrzSIuxdACY9+MAjbeydCRZE1/XOKuidRx2YnrfJEXUx72CsdlIJdc6yedTzTQV3
/MD4/7RR42M7R4cEXtNlitPmG+0u/9MxlxLTRwHEg+uWHYoABYmw/QZiJvpBaC5MDrdthFWH/aLm
h+NdSBMQZ4VfodVbmmHkvPRjzYHTmq5XrcC3zFjIxZTnjrRwot+g4TsAC01uZz6ZZZHiX/2VxfXP
P0dcf3Ubcf3T3Yrrr/4Qcf3Tobj+5Q7F9S+KuP7uR8X1d7+wuH6/TXZy5zIOtqBctqPPbe2zqgEc
xENjxzfF1B8mu2tK/xc/wi8dofCHT+sJOC0i9rOCzU9+n7ilRhW0qlMzEt33WwrmARtHDvLgflsJ
1g+diRvFTviF1nwbhLHpyfh0Q82f940HeClB9HUn3eMH/rCRvazKAZYJZi5Q75FdOvpTuBW9knwk
+8r/n+x8qaRVKscGAMduPEaJ4SRuUShu2/Gc2LmXrVuAC3DYaTHSa/suyRSCG73lNKKZCo99Dzf/
RXKUZcgFuU8jjvTCm+p3q8kOuUIfTh85+H5ugzX1Xd/xViS59nOmIZkpuW4iCB/HEYrwjSw3ALp4
C6di2Do2Sd3WtfPAbN1AlaCVEL8lgyOjFl4dBEdaLZHyhhMsBmvqenbo+BQWGkKysjWG/c8Hx37X
wCXrlYa5BrQabKqryHnvjHVNJPwMssV8y0Ls8DjQkNP/ilzda3YSuixThnjijbkNVnF7PHasWNc0
wSKHInFVULVWYej4cT2bjSjS3JYmBuJQNyxwqpbnmCF2VDwl1DgckghhE8Utuk1irh8t0sK0LSrq
pJVM28bTGix9lzZq8XMu7Vw2HRVC3CNLd9BJ8KtsW6CAPOjWNYgoM28NdbiGJHla8PMLb30HWejr
hjqchJKLrzPEQKvRMHON36OZMSynaoWOGTtswumaj6kvqG9FGjbZ0uTp47UEr2tGkTvxG5mr6iXq
i3UjzRH2o7ynRH8K72FWX13bJTp+UIU9Y4yFz3CgEYmI+AhHlPJo4LUEc0zlXdG84oK7av2FeX+7
9VN4/1XrFrz/uHWnvL/ap7vj/cUgFd5/2bo73n/ZSnn/ResHef9F6xePQ5jKU9NahVEQ4qlJf5wF
i6Xh8wv8fpFqh6GbuRv9hrhw/JjWMQqTllte4DtpKYS6wcrpVitv0HWbunmkHVFcrKQ/sS+jV7kP
nCvAvtAQgy6H5+43NJd59HgxAt5zTJOUA61D+Fv0ee+i1OAhZ7AiMdjEhzGheXJPov3+ZLXfe4in
f25RiF0KEjEqlayTfJieDKNcwgJoMhKP5J/Tl2QFC9JBR/ZwUmVde+P6jky6S595aqb1u0vMdkhT
OMCCfFioT753rJgaoeTj1KudwxeWSq6prYR3/8aYoN3uQhjkrlSD3Da15l0mxJ1qK72+JMpDR+pm
LH9XGcvfVQILsp3mB8rsF0uyWwauH0fG5ZQNT8fqm0O6IEHPCV8oEZELpVQaWZ4ZRV0e34FAtbJA
yFRnxG5p8v9dFIfB3DFG/2FZ1ghoB5yQTofIYDmnaMD1UoeXPmZmpLKtmHi2mIKM6RhD+ra5r41C
h86lqMJnWYWNYQTneprANzf1NasFkonhzHejMU3yS0SbtmAnp7GyLBeZZXmWqOiHF8q2uEX3Hp+E
toZRChH+ccm8rR1mjjuElxUw5/iPke/YpAVeiyoCYMfXoy9WXli4MGNlzbkiT/NViygbw1ngx84G
Nwaa9nzboiYcwTbKu1ctHS5bxNMCLedZy4+cZRjEAc6cHMcEIRn9v6NUYHA1fZfwZ1gPMKNG+jjJ
3OO9Qu7f1fTqxQWtd3Gx32shOTlVFRamOBfjqRtVxz5xgP6y2BBIzC4D33IImhVO068XcF23C4F6
KPknakTVwRHRnzr3PBSffCdkJ8Slc8+8lz5RZ+YB7Lyp+eDu9xQn2CJhIyzHRpyG8Vw4dF0MLFRw
pBfVsZ+5JgP1CqKhkanNkA11Q8s8g5oFfknBictlXT3QI3YUo2JCrUWTGcoiOgbXkNoH0XysJo/X
OOkzz4BaxFquJZYyW+gdnKBRQYLhIcp29Ow+aEVJr+VQxt1Fpj0mak2dMwMxRQfgATVhw61GFLvw
VDfcfLrvQo6aeiCr5oJivjvWdcNJQB2dmB/K4OQ+gbMAfdv9TJ+5ZeTET+PJaQ7IsSzA3wpSLalh
0BNnrSFgEV00GP+xWXfLZT1AAEl/4OJ0qst83YXdZKT9nq5Kyw32qnFqiI4YtewbnIUb59M4M8OS
MKKxV9CxZ14SCXP/ySnHEsjdBu8gCzSsgAbJW0g2gYts0bVfKtHHGeTVGz5uxLavjn3gJ9lJTQeP
oRLcO5U5j6pjPp0ssaegKEIRje89uqYWKPX+dm098NOaf7+hJp6dou4/bqyL/Iyo/c9b1MZ96qSW
4CSzySms+KzyEHHCfuzV7XJZXw3syulQkeDsYZ02yQTEtM2VnnpnjIklvtGyzpqv1e3HY9qi+FAD
e3j9t8IKxz4Xv8kHhhfia9UvQ8eciw92tB5ka/7tuppo9lXq/v36uuCK2gK6Amf7ivqWLPNkXj72
6ktK5mWWzMthXbyFU1p9TZoG8CS3BAM/twClLiCg+yuwVXmCgK7Z5yzndk/Wck9mP9zB8heue0eX
vik9fbCY3ZfAIuzNpk5PGI6XknuaZjTBLQD/IUx9hqbxgI4JVTjoYBBIFgHdDEsl2TLl86UuwyI1
8PBIWpFAKDKsx6u6VS7rWsBOa1TR7fduqXRCC/At+71fKtEr/pYT9haPnUZ4R697whMuNwDipQAj
pw0P8597huxfohCniPBNz3tz/PyR3EdDSzf43PYuiYFHm3a70519kNwUGuO6PzYxMlVN25YTJjsL
aTVn7G4cm+AzVJZoL1wU+IgFqoJZi6vOZhmEcUQsDKfVdDjVhVsRbJgF7LIF5y0iZQmKp0LbrEoc
77Pi+5fhKpqOYN1S0zvH+WhoRyYi5ShI0gUhRhcEOp2bLiqPxJcY+Ji6ua+a1zjYSR5SPGXrRyMo
BkIxkI8XyJ8KqWS0fTEKvcHkbBVtm0shahtUIV1Vm200COODUulMfWLEjBjtFulLKwIUtdxqJViF
mx1S9r6XsUem8XFZEBwq4MxVAspA+0IS0pB7aSxVwvAVSAIlFr+WjcWvqVSKnPhMNCnVW05VvoZk
wLVB/uROnzsWepe+jCDcqvo6mU4kSc1OKSxUti5uRLlKHGA80+JhHQbffaaQQqCfquTJYaa2RMdF
w06UehdHKflQ+chJpwKl133hnKgdEMHXIczdlb0PuWFMpbzRbB3pkTFr5YdmdFoJmac2rm4Lr8Ts
fNsig9FmBKPtaJjOw2d/Ze39y5+jvX92G+39m7vV3j/7Q7T3bw619+/vUHv/XlFTfftR7f23X117
/zQlQC5JclLnyU3AJb+1ZH7Em/cE88Y9ARdliEfAY5HTrB6Wy7pPzEE4hFimcPAxLgD3+l2C3BNt
5mXUltNGENinmWzR38KhLiQCeTAd5m83DZPskqzJ1MHIhV1SaDPFZIRszsiuhhjfUDnVkTF2/ZVT
R1sqze9SsDW9aEm10Fft/pQFUMYT1LRSh4AQHQImqGplcZUm07wGJLY1vS70mXmfgFy0yQuX6+y0
CCzwUudVgp7zhJCIDsHKIXEjuOipvvM1t68p2VduCQ1KDcWZfCzfk31FOqwmIlCGtsrjolY8qaMl
z9AVkb3XReFKcQQvldLRZfohQlDS22pAFOrot8YyITYsyNOWZsPblo7FU9gaE2ApNi9Ehs2rhBx5
C2zJy5b2kqq5F8wmsDGC6qasXTS0cWWqP7wwavqDgGda3RpBdVvWrhrasjLRH16xeyJ9Z93XZGNW
1sCQlqcsWQ51dZtQJB5qQvE1S6Wzq7ozX9bF3pRJbHhJ3EGouQJOlvPZjPtJB8/j21QcIJFPNltH
BzfibXDv+vwszDjX/9AbWANv6FRMb9KpCRlwfuWuBF468KcvmCeJPjToHKVb76hU0i6JKwP+uPu7
SFNKCMl1QqcqdfUbbZSJhFN9IwwpgWCr//hFefmTu3JsJd3YN6TlxjiHrXGWkA2s08Cpc8AlxxeZ
Dv30zhngghNLTIc22W0MM5+2Xg0qMtawPazRN9Q6ST1Dm4OZrbTWlkQ6nIOuGkVxKWa1Vziff4yG
ab0DBBQURqTpsVUNfO28hRhr9KjBgvGYlaDH1FeeNy8IYmpOTK2pOvgQgyPiLoZqirXrj8DvPORC
otF3YCU84Ux2woWlkq/NWgiSnRvOWQtDbNTh0BIcDu2y2tWPaVePd83RWi0Ns1oNnKEOeMADDjFt
5XlLDUJhDQbkKybwftnWfI6pE5GvmtVmLoFIDY9TZ8U5Apt81XotvZH9tDwgaXw9f3Bil0qeOCYt
ddd3iDJhTXWG+mkmZj4jXT4HlXNCZJ+WoG9GmJuS44PJFyV6fdOiphScSR5gRl4kvw0+TeProtMf
gveBCWP1c7z+KwutX3+O0Pr6NkLrq7sVWl//IULrq0Oh9fMdCq2fFaH1048KrZ9+daH1S1Z/KgJK
03icVgbZNO9nhnkDsj5mtLpRBD7byDuu0Jr5wg9jRLCh4TAtNKs4PcJy3Lcjy1zKbXC3QVZpa2D+
N9N3FzR1e2sVsoTuf6/V0tK2GeHoRw6iyadpJandxY/P463nGMjxM9+eE4r8GjthF31tTpDboklQ
X7i27fg0e2bUFE1zlntkruJgBBijex6EqK5mkLesRLyAbvbyinvqnNaAZ8ltuaHDM3UqY4vQ3d+M
Ea72nnFvdJAlcxU5/dD0I8+Mnb/Z+Nw6NJdLJxQvUsAd4p7ipIkKXKeny7QWPhRQOSygrXtAWVPQ
0ghU2kUFlLJkHmbhyfXBd78+3RorWPKEAYZ9SJFxfpzL7DCFD5YxBZ5UdCIpdZFLGwpLFgixFVPh
EmEUz5m64Ex4uV0dHsZXunFVzBGca1/W2q7gzeINIImc6Qt1FoPBOUzgAi7Bh7Mh8w5aU/YD+iRY
ashMf1hrE/mp2LMtkPHUvYRFPbzAqIc2XMCZrjcauwTmrPw3pRyarOypWjZjZd/Usg6ZQ5dskft6
S/xGo4dAejBwHHg2JM1AG3Tg7VCHl6Sdhsc3RQaR5y0N25nBS2jBWzam2CHbRqNL9z+ZuHctfrSP
pMPwHdJpNO636m8xy69D7rd0zIHui9zNmGfZIV9NzXcyWQPofqhYCKaujZESJ7X9Pq5mlrSuwwq+
tJgQeS90iGz7SQ1ch3xtaV+pSiDOqgp8h7NvL8XXfQvZD6QwfzMwLcuJIvfSxeDfN+bWCY1+ooPp
kPwOaC5h999Yi0WLTnYw06WpGXHjoBE6ysL8voV4xfu3zi9Jz4zip8HKt11/ghUch3uqOmPjGX05
XYjPwmDBfCdPTrYJvGtpAbiOftRfc1N9FpoT/AmUVS+KHDEdiB0d3pZK+acvUi/O6aEzcjtLIOVT
M469JZwl/R7icdJZ6veqthstPXOLchoZnTmepzg2hr0DLsnt3R2X5Cp7vtn7QS6JPviLBuUGPUKF
cBp+GIcri4ok+i7sMReIkWVaU2dEfVE75pK5OSCsDHraEieZOHH6BZjnKT5QZeXyI2S8FNJaMoIL
lMLIYbyTDnEifu+ENySrwsJy9aKWpJu62qL7zXlC1J4LqUipRAVDvYoJrTWdbbCpifbwTb6eFPQ5
4fFhO+WeCBnDXqThXbnuqYxM1Psrp17s/ZzUi73bpF7s3W3qxd4fknrxcEde3eGOvFJ2ZPtHd2T7
F96Rxz1i9TRqlcHdgUY0PHL+Bo6PZD/DMkp7WPaoQ1fQ08a9qqyrw6KHkS+cyRmZl1HgrWIHHaaW
xqjyqFar1ZabESCanYGYADZyMEYNFmY4cX2jBpdBaFMhD8NVYD11Y+d8aVqOMVqGGL8y7aX+YRcL
x4xWIeU+LqKl6Su8waSnCtej+zsn2d/fxdVx4MfY1f1+NEpLnpkL19tmyz5SfXu2jPJfaZHnoAMV
9s/1J2kx+hxSRm4chAtaPKLUvehJ77U43PI9xg4supvgcuOc1NPtS1ub9vS6j4x5WiPLbo3oiHHj
w3y+cRy6l6vY0UauPYJp77DcDF2zMqV8+QhGcbhyRjrIti8De4ubp+PbZxhNjtsGZKJ+EVgdhw+L
HvLrPh3mGZNOCSXwqC5m+cSR7OmZ5zp+jJFcMhxnx2yTIbcocgtlKIyIiWXG1nSXqVsTtWoIynTV
K/CYz2/kT05LpXSrPh3KxdhQS42dQNdkwtKncdWNziMRWn34eupEOO5VlSUhVuoFm3N8W+AzEEKy
7FGWxOeJBOS6ZsEE4ilevOzRA516m7sJbHsK4vDh7rq5w911o+yu5z+6u57/wrvrWY881CqN3+2y
1jB+r/5ul/XGwKx8a1a+/Ofwga4NHjwc6tdUeAjrm1ooV25ood8jD/+3ttzsrcX+arq/Wu+dxT50
Fvv/3C8We9ffL+P90to7m7013V8tXH9/tTA3+3f6/YfQLni7rsnmy3rjIbR6ZGctjP/658NH1X/8
HRbs5z+qf4dljD//1yNYWvjjn+D6xn/9E97hhYaVH/y9psNyY5wm0OuRwchajGC0wH+WMf5jjWDk
4t71Dq82qovgvKeoWns9oYWQ+DnNHhl1za5yPsx62bRSD1o9jK3Cyh0ultxz0JMydq171I2Y5wcZ
oHFsSNq9qrNxLIwFbgzUdKmUS3SqXbNr4AnpaPThZ15gUvYwbDRGIz3JSDzYD8qS+6uFiKHDPEki
gO6wuOlq1Jk+LRuNdOqPPRqVSif9XjV2IkRPE3Wwia7ZhewD816uCqeKWm25GekJg8/IiA/0Lvq8
4o8GG6popxzjv2krOicF9gBHH60uY3Qf/p42Kze0uVihvsHbFrXJ6RJnLpSbmRfyBo3s6x/kXo+6
LtqNxHavXNv5Sa99ePS1ccB1pwqPI55K+E+smYwSN+qa3VT6a7qyeT1J6tse6fTgsqd1ekAXCZW3
tz3RIyXgs9vjyenkcemkS63Zk271zV49FbKcepxWGj0Y6YqaMNJGD0d6PV1Y4A7JWWZpgUk6PebI
r/l08UCQlrisJCLUx+XBqGFW5UQIdMOs8q8TMKzIKieF0tGYxNXQWXqm5WhnPcAkp4KwOo3GynS/
jN1/WK1k9sCHYrWJgVCL8JCsswOx025brNvjtGTFSpaEBsiXRw2bYtaMdcOuyuUypqNY3jCKdQ+W
mVGIecny5vXIw981bfC/NX34QP9df6g4WufEYwf8uuaTt3IY3H1NDBOxWDJvftuDbk8L1Vemjs4K
9+DIJx7+HpUfTnCapaHaz3BXgph02V/FlZc2gawzr0vbzLCL95o9JXfge+Wd+DCPQv0HVE71DAZt
s9cYjQxGoG896YQOI8/1nReU9RuhOmopf9PkhcASQfWDZy6WIUPc9K0phsVLqE9eMISn2K6NDdvY
MsU1wEZllD+MaKRa0/PUo+23Xrpyf+v9iWB5fuvdBMvzoncbr94PvT+5V++H3r+BVy+2/bFHHg7u
/T7+3f89/D3+/er31aPao3/Rf/9rWH4Iz6nmnSfL5IhiMYhJafhA5T8GjyIEWJek3M83lwFxYXrI
WNmBqtHSc2MNT7eC4o89RKJYB6EdfXTjqYgW+UgFL1eAyWq0huFwv9arHiUEkyBR/RehkoA94zdq
eH/0+6ZZG6WVsvsExb5S9J6vVQ7SYbw8IpRQeHwyWri27TniyvFt8dP1p07oxoqE81Vt6Rsyapl8
st+bupZ+uVc9Fb9bTUIq0P0ZeUxOniAhLkTEGTgyzIjKTFGpFEjLnQTFCPf7iBGpHJT9x9xXNdZ1
ParS78ICJ00dRDUSlP26jDC2CPt8mHxcdkDk7LTUPWEw1OFzj+Vby0JuOqzlJzzFQYOmHfvUI6P/
+//9nxF86RWiMLOXP+9pu8NJmoLiiW2/BrFe/tRLWBygJYL70fQ6HHIEtVc9zaoWz0X+Wj7ZByJO
9Im733/uaR6fZk849UwdvGEC73qHiRh2C3OD2C8RWvdFJwPe7yhdbxZC9njkOba1InzVBOhd96qH
aEMsuhnHgjAm+/2JJqPTTNonO9enUJcsgy03nDGpwZKs5DyBBanBtD5+TJal0uKxcocd+/c4uv/Y
C4JQ08blJc0sMLiAqyH50tNWMKmcIt42xeCmaozBVtzJlNOuX5RKJ9tSSRuTSflUh4tSCa+WZFI5
1QHvbvXdlFyxIO5kUS6L2TTd7+0E7tPJNODzj662xgBBOoq2GbF3MK/cIThzud+xOzGk5zliQomP
E/KP46YfxwT5FQPcDxELMd7v8TQ4kTokBrSA7GB2kpoFTbNpyVwdj+2GK3WbsxPi1SOyAovYzGWe
U+Y+smBiT3539L1p/2UXMG0KxHBy4stFSxtLIJ6T0X/8q4b/jcCfE5k8RbaN3tWCPzJGter/OnUW
I5bQN55DykcZI3pDIfTJKaSck8H3XcjyTwbdc2VaFQjnDFFnHIRrM7QpYGUWJId64fhzGhERYmYc
tQ+m0teAdTJSu2SpPfLyfcGE0GCTFz3Nh289ZOOF60rHWQTMccWZK3S3q+Jn+gHsqviZfgm7Kn5m
O8O+j831r2yu2uLsg4HSvNKq0pgF4ln+1FCHnb0xlmBvjQWwbzlVEJ8m6Xe9wACTKxysDU97bNF2
XC3U93v86+r7/TgNma8deJlsidx9ytpzzHe9NGo6XIpilxYv9MbC4BHan7QtNv5Ju9QPWjuvc8SK
FUOf4LPFOCfve9rIMj1Lu78LEn2kgkSI0ztbSxunIbgPHyX3Htyr3N+Zyb3yPdrEvYf3HulpOwI+
ItNE2oJ8XD7BNH7oZrcmY0zkglFMpdJa9WjukzXXgfMNqJ0Qu37GDk4mW2j3d8+1tl4qPdf6eqP9
sG+c4jvkLlgqiephgFHW2v3dNIF793db+u8lVoaz1KPnqhoLywQ5q84C19dG90a6foDJRaWZEfxG
zUFvfO2K4uGOjRg2xha2xuVRgDD63ETPLiG2xhRJehV6I70Rz9HHGsYF+WMdznvQPl6gfIYdPea6
MoqpOQRX+xZnNYNTOjdMmGN++/s7P6nc36E2BHyW7rsezrPeJX3suAKbNf8LW8LN+U+xhLvzW1jC
g/mdWsLVPt2dJVwMUrHVRPO7s9VE81TzYc1/0FZjzX9dW42X8obCCy9O3fd84dIXIvdsIt6y8CV0
cV9cLA0TuXeMpIStEQnzoQUrdONjDJwHXrAWF6uEOKhjB5sEMCZBWfMqK/3hI1gSzS6P8deCaF6Z
lk2JXfYePoIJsZ6QWuPUqJzCBZk8COGKTJ7UGpRZkpzUlpXxk5IxUpfEk09uyOWDEM7J5cGTZ6ws
8+SaUHg4mmIpDpYjcZLtNgbr1NaIKheQRp4JBo4fwnlm6krGPJml0rpU0vrcDqwkEausq1uo6dBn
pyXxdOgnohOXQRwHC94PGhw3Lq9YP8pW+Tt6ss33pH3Qk3V1W17z0ooWlS0du9Xm3Vrp0JbdQhcH
3qkWdmpZ2bAu4ffLd+n8gN3lfcx3qcVfJXvUqm4q6+oGu9ES3bV0aMl+hFRhyTrSox0pL8rXdOXs
tl3p5buyrm7KnJ+p9FiXekqXegwpBqPe1g3O7yzkwkjQEJ9a0VCxErm28wap2DDnGu34D3Ub5rqh
tPie0kM2ufixz5JrtB8sRZNyEXzf1Ms1+JRNat6mMqG/b2kddlMlqM0JenELcm4L2sqQ0i57laPN
nd9ywGrvxuJzV27Tv6viBjNdHJdXlWvaPD/SZqkk0ElVeF7tueZXN/p+P3PpD50XbUXRVtf5e4Py
M1oHw+vx7fRqi/Hxh5+S7rFFsi/tC2tvenzGHpsK6sRNYDUngxH1sH/vjEdDsPGaB5qotofx/DYK
+uX8T66gX87/nWA3Fn9luWP6c+SOxW3kjsndyh2LP0TumBzKHRd3KHdcKHLH1Y/KHVfzXzxydDtP
bb7b+Z/I5rudH7H5UtSW+TUo6JtU3kJJa2v4qqgUqqKSyzWgpmAeg1SrGqHUZRXoY7UfaBZ1q4rN
aXhU+XQ5r74NA3Q0CcVCshLEnYDzOVEy/xxgvF/O0dGB4iEIIu73WtygoqAhM1OdXUe59fWvOJsz
1IqzifqOOIG+IuHSLseAWkGazUEkkkKDitQo643YSK9y69nPhCP7FF4hgTZ9hwwWLApdhtZceEV/
1OKKoz+QyCcywzgWA+YWh968wJ7GZXFT0UgGVPq2NphPYGtYmTwOXiaPw0rN/WCnuR/GSl74JZpT
VfG7NddsGGOm62kqgMOVUE7HXDnNONFzJj5fELs8eWDCFVmqumlWp41i9wUZV1iNk0wVh9/MPS5U
0mxz4hvTBz9aLTEM17HvCXXFPar41JMrMn1Mao0r4+SKq+a/LCjs1gIuUCOfXiG+Ew5Kf/C3f/yX
Dudk1Lm/21Y3CeCfbfL/3Lt3717z/m6BBYsEanAK93flk6sE6K37u0tW+bK6TVCPQCeSa+uNt66i
KmaJPCpomKmMMCudax/X71K18naO6ugQdnawcH3Tj5+akYPPGyPL8ePQ9EbH9NL8ZZdmWKGs7whT
7BbovW1nHI1Y/OPBvaUZT0ewc23jDGzjPDmmN3/L6m0815+/QK356D/u786Y8llPYD5XUmTz7CUh
TlQ3M1HNzEQN1IkapROVm4mpNuLhI6mbCVYxTiwm+e82xgq2aDL8sqAYNEE5xszsnM3ld1WN/eoJ
CXOan2MihVQ14BdA3FnZKrO7qca9m8STerYtlKt/pDnW73xrXKj+kQapBFZnlOSwa5ySmlkOcFNQ
qUlrfNe4E2hmt8qRtcG0Lw4afpyqtdFhplhd+Y73D+DZVcIJx1hKY2/EG7EXT1MjreLy0plzb86T
Jv7KMFU4I2OckX5mDqLrD7gkfPAoHWxcQTL6lZCfn656wrrZE5afrK7io9ed55ATZmizFTpXP6dd
DdMRusCOrYwThUBLiJRdwCKjHBk4uBdGS68SmhNpPdfQjnuOf5ZEuHG7yqxujA270Rgbzbnm6w3f
cDBEBjMhwYR05tqS2S6X+/03VzP1UumbqwXoDFCYQSrS5WEYZVKe5O2dF2Q616ZzJUZeUGaZpAkY
D5tnq16O8iohF2pGq2zmqgjGc+0CVnNdT1JGOFJPaZGxilF3i825Y21BivJd8ebsuc6TIea7t5Bz
bcEcFxakjzIKHfEleYPCETbfRLLSGeqmep1z7palFLWpO5YrPLNE4705TUy/gEtY6vUpmc+1JcRV
tnYQDZrPJJ4rAT/f5NDgTLy5Jok+UacfX4SyxexMbc61UBfwfyE3CqDUVJ+Kb7oxzquojzqvbtXN
4ryaV+vkt43zarYggXOujJUxTrvE4DrWc+kocC60sZlafE2eSwzH5OZsTjHP5nSYyimc0zMaz7zV
sZOYH7+WnsAlTGGnjP11T7usptd6Q70ypspF6qHgJTosdD3p5uy5FFWRxaS9VQ9c/NDOwYcOiWLo
kQvHl0ppCjlaOwDa6bLxUiMzfariLpaea6FLICqCjI7LgXxu+xjf1hz2eOECcvSGU6WpmwjpzouS
0TkwvbZX39Mfsep5j9rz7x1QrgEnIwhwWftYgzT11vFxUDdOxYNdHCY7Dv+mfkmZ1O/eW9wZ6F7v
6/s9bQOnwEtUg1LqNymiCHXbfoOFHLuJumtzoQCDkWzu9C0OlhGI5NyKEvW9Isy//zMJ8+/nNzlw
f7uVfvjpn10//HT+b+LA/ZsU2e/FJJf6gkO4NviPAf+b+v8avAS/w1caNiqDNOBFsYJBZIb+MCcv
FBXHx+trP5+Tj2ltxcU6XQgHWooXc2Vafb2m4ke14iu53DOr1ojJb3PkVH1CZ+hL5CgFQmSoyPUu
uOgzneENA8FTR+jlZ2ELPryZI8glDgAxLvGPTbz9fsU3lBN7vz8RzrfFmQSVwzNqNAS/fnh+vvJh
lx6buTOzglnDRgl17Vuq3t/3IpSwQ70R00Lji+YI2FREEPUIZUrpce/a6A1lojeUm6RG3YLt9312
P2f10RXM0WmE0476dPloRPAaDYoR5eWYIOyFcs2PtihP8StZnf+SKJ7fRNoPVHfrevKq6IzH7DWK
49bn/CGg7PxxIy4+x1/N1WMGW1SOGjwvc+B8GOjQRqb1u1qSR2GcSCC/+JpD8FX+K+Q6hop7bEYg
8MaUK0BS0ZMxl+H7k3ISffoznUSfrlMrf0n1mKnQGiq8p4tbgUkyLKgdxCNIUxE+p3GwzzWf/hse
ftSR5YYWitOfKE/yjC4C08R/leVqgtID8RESeMdE+yyAcVRdBp4Z0p9wf04+a4N3c3h6Dp+1wXoC
/ckQPp7rQ/h6roPTxNuftcH9+RDenevQng4hPtMhpjecJj6H98IzvZ4pkFyvL4HXcKV6ZtxhcTW+
vPBRSc4W6Bd8TABWNhq++KmDg1rGVrAwXd8YDHFJChviUxavohtxQ1SXwdAyhoeztofNGAeVMn0o
ejE7eptESboUUnI8PYfABqcJcRM+TWE9AVa4OYPzM/CboFAI1mdYoTkdQutMx5uBDevJEF6f6UP4
zMj55Yy3ENJnwya8OIcvZ0N4d6bTys5aH8KzCeuS21RyIdFvjAli87mQWJZivIOIlVSvwy/UDEem
bb+XFUVaoPTRQZpNyLWH2XRH2Aym/Mo/LzOKHmsmAdNmqkX1pbKHt3ln7mn5yiONsJxCmbEaZvOg
/0bQzHTNiJr59xlWMyFuU6YX8pp4xemZnhCrphrsVSSO5NMvK5VS4HDFmKeUGhkwoeZf2Jg/bv4U
Y77dvIUxf9m8U2O+2qe7M+aLQSrG/EXz7oz5i2aqmp02f9CYP23+uk7EkyY/1rmBMx6CDHdUEVW5
Kme0dJ2RLpNzoDkM0TB0HS6aGEhy1Uy1WH5DCbppXDQNH7b0be0pTJpw1VTOfh7RK/K1hTxeLVZD
UVzCz21pq6VXKdfAro2QKp0xpeeJy2/qpVKaTs4lvjjJx01t3KSaa8wiGTl+TJFTKSCpDg4VyiNd
10HkdpGSd6LDJR3Mtnk4GFTfpQAUPIg1tV4I0SgUopELJmHMBB7JmLSC/UIciUy/kelUrl3eQVHk
MkEHq7E7VRbcVnB2OKUSAwig69ThFekfYTdhK/S+p5kql2MFXhAagURHdYBy94g0NnF8G+dsklCr
ZYY8cLkSFGLjpjSS8b1OjkZfZpqwmYewdJ1zJ45dfxIZMXDhiifrc8ByPC8yfPrO8yYJNC1VQPBl
ivv/KHRMK2ahRVQ9bnpVh7HOiFBWUJUhRY8QHuvw5pij0I4wudThbVx0VnyxCNC8CWZR62Ewdj20
RUJQcBvRd3BjpMghhbeptRkTXBR0joUcXoTOeISidUH/VtHS8SPs3Oqa2xdUmkdVwmGdhbMIKEDI
4S3P/LalSCGHt1B6vkg/wkiBbllwW1/hdGVbwII41fv3WQXhybDgSZ5jgxc4hG1X4PA7oUH/mOyP
y/547M+K/VkacosXPguitVJJealsM2LPWezPmP2x01bodXDYqrQqJbSGrxQkTtWNBLpxBj1O1NFo
/qMwQe7njE51CdYnU9ueNzWe3HbdRJnuMK6/4Ri44hUlBYLk+PTvCKN5Ax8nNiaR7TdZQpQ2/9ui
TXItI+k389lt2025gttNhvutgC9sqmfcDCrZEwewPQ5BgJbCs6ZCBGpGQPQWK/AtM9ZaTY3vyanH
DwI20OhCBzkU7GmM3XYgVpTuvQyPOxhCqHQrzOkpY70RiwNijfyFbgzWyNMMATuQ8lbpPqPVYO6K
VMJo2hjR9MQKiRGU50gtmiyA8sihVLfGTN1aKvlicIkOPJEt/QbHRQJ32Qpitq2fnCDTTwuQmWrK
3TFNCpBbc4V8z8lpVg54K/Iv98ZsRipH40lNqZsmahax7pwbwtGNBuxNnPUfjvSd58QIvZNyV+yh
vjkZKlA47MQ4uVliOGxGb1QFR9k4Oc3E4BOlR+iMNBwlvDtUP1QvHj79TgxwKCbHqtQPZJwDCsZ0
8b/1TNdntUiMi3x2ZJE3m5qerY+1O03oNuFtE5414WUznf1v/soS3vufI+G9uY2E9+1uJbw3f4iE
9+1Qwnt6hxLeU0XC++1HJbzfmr+4u/aLZqpXf9H8E+nVXzRvsvB+aGZgMuP9nkg4HYkPPA4d55uj
HV+Au9BcG3zKZp+J9UTkffjYPHTtvWcSdCwLyAet09zvyYemNhh17o2A/jca6qBC5wZl8kHrynpv
MvXKuAiBVnl7tErFfPgI4rLLKz67tmIlVKq+PKx674voIAQJPG9i8CWFL1Ed5Gqqg1wKMwxu9GFp
m7GTTzhycprmJXnqMMzsw+Qlp/84mqUpgddNxYpMXe6eNylMig9oHj3mvae620tdZ4Tuc7v8m6yC
Lnn5fq+OjtHGRlNQFQruwnzdB0tYDOUNqkrXNUQKmmZru+ianSkxdbjIlgQ6XOXeocM2WxKiW/R2
QbnJ0Fw63wLXroxSx7uC/IXjqrUK0eZZKsmfeDL0g9j03jCFiQBPc8ixKpped0qlRQpvmDDwLNwh
y/5+H+LfcL938a+735v419zvA/wbMGe4WqmESUBrNDVrATLLedYkJgc4QpQrmolRP+aMPbneQfpF
k4OGxBnz2DnYxsemJgMqdGnGOSNTQQhYk4n83ScX8nebXMnfLbKVv3tkVFtu7t3fLam/R+PUWCaI
MT9HUHL8eY/9GUGTPF1qA9zRg7nTMjGpVGhuR0PwwDoa23G1UOY3TTiF1thLsEw+j5dPamCns9wR
S0DmkLLhkk34BBxprn+tnYELaEknr7U1mPjTI6+1PgT4c0Vea23w8adNXmstCAFdX9K5pUmCkQgk
wYgFkmDEA0kwsgJJMGIzmi+J86TW2KXqAqMJOdIY88TY5ct6R30GbvX1V2ADS/UN6CQ45uBG75va
e/ocpnlhYEUMpiWBr03iabOmpuvwqkkGo2DJAkdG0dRcOnjKI5wmS4asgGm6fDtJyxSnrM/N23gu
fWr+yT2XPjX/nSJbv/yVRaV3P0dU+nIbUen+3YpKX/4QUen+oajkzO5OVHJmSq6p2Q+KSvTBX1lU
8mcZeeJdU3vX5MENarUwW43hsbJFrlDTFZ9kJ08CIwZud2B576jXby4qDxPuMfRl48hB9mEBvs5i
71Ku6Fjl101ZOXIQ0P9oze00rckHY2BGkJmG0/oYsxWa+JQSDmitwqvjfd8ssXpOI87QblP0r1mq
+D7uYE51wYaKaSXpzY5gxMuUhPchdwQbYZqpp8LuVWh1dIXJHc2Gq9RllZjTFj2nXzV1CI4Gu8S6
HpACF/gY5OwydTDpVqFkaEsXaxrkEpBYM8HkaexlXa0GX5upajlOg3fikxSol6N9Eh8/p6nXg4Ps
k+4MdirBMjM1SngcCgO1Nb/3eSvdNM2q4D0b17uXhgkEh7EA2Tou1qECejTLRi3eC1mmeT6PWGL7
ALPMN6oaY/Ah1N6ttUxyVa4Sxk9CS1vcLzcW8yfNEulWeRbJtzzohld5nsvS7iOjmIA1U+RatWfM
KOrynjH9AsTa/bVGn/N+aFxx/47GpbgtyfUnsmv6cbhNrbfM5Zkm2w3JeqWh9fRQiK5nPavfmNtg
FWek2BAxvKW4wJkTX3u1xiVkyDuYwaJU8rXPa223DJ2r9A5gIkODqs3TdmLMx0vVO0MeF1b4diZH
p4IO0Xzt0zrtD7JjOIwEkOeFrIerLSnEDOYiB+vPJo09LibNeHx70uC8jL+bNMvxLUkzvhVpvmqB
/cO0OeHRkqFrjUolesmCrkd/NqpR+XhGaIsv7UZDEwgLA2dIUt0TLcaI9hVVC6UAC4lqeZ+pUs9y
lmI9xPu95jRo6rQKApSODJ/ttNPZtQEWE7nRoTd/zHxEVLhqFqW7mCnaHdq+oivNb/rT2QGEhZsA
wvPqCVzMFJfWrBdz3q/VMsPYiVzTp3eNwRBSN2d03M06t56J2pmtz9jxSsL5NNsoM9pmHE/1BJYh
pnN3jEtLo36oNL/IrdpHOtLp5rNpFiZEtgwuCSw0S+e6IOTfCKV1ve4+QXFdy/d04FIH2bCof+i3
etvu3fNv7IVCi7pPe3NANsRBtxzNh9OD7pi2/RY/0/WfIf2St/sEOMQbm1WHp7zghqEpNa8ZFp8F
t+nDzTOguHOZr59WOfrlhavzkU9/Nbth6m5n18+dy9mRj7mZHf8i57NrSHU2S8jFTLpUr2d4xckH
fb5TLSjQTpb9Av+HjhE/f1DE2tWMOor4ykGBLhradsYPCj97UHCljWjHoYyHc/Mp4aunRKxdzjS/
4JSIxSmhQ/tOhr85Mvyznzv88xuH35qRwWjuoAq9hz8DvxOgSYQCJsAo8M8815rTX/TGG8e8ckZD
mGNl1x4NoSl+KZn5Zqk1dTb7E1lTZ7ObrKmd2W20zt3Zn1zr3J39O2md387+wlrnZ7OfonV+O7uF
1vnl7E61zmqf7k7rLAapaJ3f3KHW+Y2idX7/o1rn97+61vmbQsVDaED0X03Tpvg9HQbpNR525CsG
R16i5RpjMnCu5BO+FsZ8j2eQE7bRkT51vpoJ/CUlnOEwAVimMNVV0icPwpIdPc2xSPW3DTXqIDNZ
ONlikQ8JmWAW0a3GS6fofuIBXzzAIAlQSkb2R3A/MtA+Bh5vgTm5qGI8otmO0JpsuPyHcC2hLw7o
E4iW79oO5uBhWi6q7fQwVH/FFWXnqARFNxEHxuTpTLPRHZ6+uEVXot2jIo8RCk9jSROheGPfQ4xy
nIsmwRUkHn02057NKA4Jw19iIRpj1uMxNVEDOp0KXCCHPAkHPLeNow8bB7q+SOjrdtfTooiOlD73
PS1Cg4mgEiOPCB3BnK/oXT7JKRNXyVG7/WoGxRrFJY37eDETAI3Ok1hiwjmPY5EtQECNfVAUqc/c
QhU7AhToOCTwH1T/pcPHnO51FwdLhOV0xnERICeJISLvFhrqYEUkjbUxXITURpQ0MMHEbGTW1gh5
2RYCCLBMRdajt5QCiBCtXkU6+zCjq10pgkjHTE38PsYZ8d/7PQWqjL6GsWY+MMvBAwSESxJ4PvsO
ZMvXsvKxhZ1+PcXOIVnFwk1C7OuazEqfcflZuo4ElvARK+5w98G8O0pwq86wDVBABpd00NTRmh1V
Km2WMKNrx+UwBTSfqhmqGI1UyQ1fZ1mApu8cPz+LjtGBcmdIhAPzkZoTL2Th28dIxAAoaejw0QGH
cz5gdIrz3ImPpSlEpVgoqnVFR8YulX5epTZNvmfGwAxxPkTTYE0BLzgQH8e3cIFDQ/iIQCC2jSBh
9DgJMVRvvz+JDxzAIvLMRwbPIi99dJnz8C9NNsiJ6GaiH1jIGJvzGALhSjOYW1XvpQktMWhOvbPf
P6qBTeKCbE+YnFfCW5adqoC3RGjFELEW6fKm6zmzKssr8NFHim3TcrPGAEO2X/NNduQHPjo/WqyU
4YvEKuzai5kWVukrNqg6wuCro43SLZo1KU40FuWXoF+T+oJl4PpxZAyOjwD7Hw5Zmiq6DJOj00sB
kZGIjxmEFpWICb0WdGRXCze9ormwCmx/THotlV7PNBMxbr/ONBdswBDKQNdZ5qzi7h3DrpFrKELs
GoUD+vwDkx2ndZY5ycxSt1QaCYw+OkkPTKCf52lbBcZPtLFe3xllAJ8KBqCyKD64vnodgul5vXjq
hG9dh9ltXWZDN0xkcChscUS+amYbl+VXLWrjsvyqWW0ddqp6xVgBV68YNqjqFWOMYMVL3Jtd6M10
WJBopq3AFVGmaL6cEmumUfxib6bZmXsHsUCxGmhcyOduqiKmjE0eub5XfDd3Gsq8ZJ6pTkNOTVYg
XnNCyOnBTmVjWnTWHcyPjhmSuL11hVqLqFTSLFHBTeFHiKWXSjZcEL9UGjd8I2qEFJIFrkierZOr
mP2A2LxkC61yCgNrNTRWMPBWQwQFv2b64+ZPFySbDrjmGvkl2bhmTa7QRqO8+dhq4o4mCUSmtgQk
dG52LCj1sxNjKsrYtJnQywIE5GBGx8F9PMxG44LDMa0Udw/h65K6uY4TuKLbg7I+vsj1cV2Ysc/D
jEMBqeky9O4gVLGQFfTjIEU/juSBZ0k+2ctIDhzhNWW5kANjZwuMyfOZhll9ccGICmNcMwIv5zE5
bdQwCtK0bdef0OcajRpMia+E8OPmaEEN1VI1nT+JHujLJ+Rv/6w1pgYmmXywwJmYy3vMj78vWkwb
kBZETIpJcWYR/72Grur2k1qpdIH/+NUoWDiKXCNejyrn5zTE0qjpDy/kUj6hK8x/sHxsJ3rDxigE
sqxMH1xVJnCJTMLFEy7Qb+qXPICfavqku7J8g01/enhoLcnHGUVYdaj//XMt0hsRfTFM4DKzwsJS
KRz4Q/Yvj6vHjGMS7VhEy19KnuKSnqeK3HmZCaOfEL+xkSup/FEb6w8WD7SI7lI141Q3Au5ZPmE3
NXnvSi9PH2x1WBNtUj5DBqNPtKUqDpSX6gGNNdpkwMyftsQwEzH6l8oMpEzuisti50ySOz8QxeKq
aydDaCFbs0SmYIlMQR/W6daSZz0KIRRw31o6IZrcMXurulw4EU2FfkszjJxnXmDGmqkbJvDhZCVi
ow1iPzLWwPhV3mQfcpKs0UrgUkeHbYpLzMmSEkNZsJN0wZ4phFMXlSE+D/uUuC+lCrlLxc9WcfqT
h3IsNQyHZvBDhc9JvN+f+Jgn2j+ApmIYiSkAgzQDpqiBJ6c5lDuOPiVQ7FAipbyetTUou6dKnlmx
U5U4c8JmSjyVqUvpmLJ2ma4lbNJxblTX0UMiPp654vlcfLm44QrFDkokqdttuoVTfgWZIufKDVbR
OSM5BVdF5oWxaeJDuHgy5AJ7zHwMUFAQKBRBQTiRwkN5OZ4KGSH5IooOTTkiWdT2beSJYlhiJE8M
2ZN0xDZ7YT8bTGFyEGB0cqoGD52ZnndpWnNur+MrbZyVN8eaDhN8MIHBeKhGGhU/bmcft9njuPcP
7ONf7x11CJSr4GQql4F7yNrnA1mWPCwlSKNXovQ0N9NAlgPyXuXJe0GlkGUa32IiDEBANLdUcge1
oa4yQY1GTYzHbUg9vpbxv1uUSouBPwSX+E9qjVxofwwjdeMYQU03aGC8SLhOXmuhXB2VUF0+cVoe
Z5YVstvpbit4wpTjKLvp0gvKURnztZvMDcJCkBEr5eqEF+dOPuCpy5nzI6+1GniVFTipoHmbN9vq
m8f45nH65kQ1+5pHhbt8+SdF5jFvWGsH8gv3ATbiKv3LNgK9iK/8fHy2ckErTjD4R6JPUAWz0yG7
3K7x99p3xjwiLOPoH7X/HOGWzH6IY4rhPY9SEv/tnzW2hab57qmi9eQ0s4/XCra3kbmKgxHTxmD9
VC1zUoMUwYfy8vEIBBtq1CTnOqJwFZljYfQv7G7mpKxBGARxX8gJNXV21YQ+YvQf4/F4pCSIMEPH
VBRNcUfs6650AqT26flMhx0dcgZEM/tOmt02+AFjCgq3DnmyYcEcga4r2ZqUQE/vQAunwnWG+33E
NfWaJSd84dxGnYSUqNQMQXg4XofS6xyFuP9tlqIJO1JyFp/QkTBTYnZHkBcuVX2/KKRX6uHNGDTW
HJuCThX/ZIQbadHAK6DegOp6darKVcGSvIY6B3Xvz4CzAHK38vluJQaa6EXMgUX7ReF70ziQTi7r
h9PRaV4dH3fHkGmWmzN0RX2GyaSOnYCTGXuKcd4UQI2eQjepKPL32zOhoWZTDaG3GN4Z/cByuwjl
92YrhH0RiWv5EmWrFFiTXtLPGLLPKCZJmGKRKR8zzHxMZcMIFfwvNkVCNkUwbxDnNEPkNJWNICzk
GtNzMbulhBkBN92aQiksZ3a/8CgXG2a42IxMElbVSzgQaAxXsa/EqX2lYN5+m3E9e0g/v1OUiCnu
HNThSANhh/idetjJQkm/dR2WLMLtkMGI6W1VvySz8xf2Iwk6P8WPxOzcwo8k6typH4nap7vzIxGD
VPxIrM7d+ZFYyn7rdX7Qj8Tr/OJ+JKtO6pq46vyJXBNXnZtcE+3ObVwTx50/uWviuPPv5Jq47BwE
VNqBiFwFNU6PIbYei388mtkLN5z6sWhHsfA1X08t3yEodVUngFh1AjCJ32hQ9SMzbwYJMSEidkcz
we0c5da+zGHVoZbUbIShyhkuOvnQX3q6nJwaceOkZjipNepUARmWhOQdooTM0hBLlIBTydKZcGlG
XJgNwHcc+8xzlzSDHKpF4+lL27CEHOWRcFKNLJoklX+Uk0UnE78rjVYrMm9q1Dj9nprZx6nhO0w1
60FHY//vQuNvGGsJtmpBDoFqEzcNnkqMKRW38jIdxU0KTEGZ4wasZYdnrrCDuHJ/FyYj4PPST+dl
lPVeSKjrlXQtikolS2LoLquChGS0Cj3tP8QlWrpwTuGLosooub+zEn10yMIp4lhxqhScTZlw1qUO
Y3U2Tf7KTNvFz2HaJrdh2q7ulmmb/CFM29Uh07a9Q6ZtqzBtlz/KtF12fl389U1HiVuU0XBF6Tg2
IhPHVvz4VpyO4xMrzkXGbW7OjFEYmVbU2nXBaHXxKh9fIb9HqaRhwQkhYdW1SyWZcEOpDOIqFL07
GpZY1Ktck7mMIQfRhJ8LybT9QTJ9/n4ybb+HTNsMmba3JNPn68i0vRWZvhSS6dsPkunL95Pp2/eQ
6VuGTN9uSaYv15Hp281kWlGMQEpsqiNNx0UVf8xHOBexKT8p3bhcIY+4LBXqCzeKg3C73w/obTNl
Kf9WKpmD2pAQYg4eobsC/XU6ZNHs/PFSSbqKhBUN6zcaNV1/LP2W6EYakEG1WjUhHHK8zMrf9HRe
DslFR7ugvLDL2D0+DlB7iN5GiQwZZcvyvJPdPM46mVW77qTLr9/JLqB2JzNzW510CvY62Uk072S+
XrNz8BmMWSchm46MC+108ErEhXY7PGMVZiag9nV07EZt9RIuaRpuw6myH8zZG/n6cQwhdfR2qiFL
RYuRhhCuDtI/nDjSV3+/97PpDXYb0diWv5CRljlfmxutBnGF1ajwF+nCw1yp41fowxXRTQQqhbcd
mm7qq9bt6PBMXIzbSrj/y78yx/nm53CcL2/Dcb6/W47z5R/Ccb4/5Di/3SHH+U3hOJ/+KMf59Bfm
OH/rSGgOKm9jNkA0fjIh1gfMX3dGvcNCgRMUxBllhJCRqS9wnec+PzlFP9xN6pK7zSivVJf+Nx2N
/Z/qEHy1eUzeTQ1GcXULofF3bk9qNDLu7GyLf5QzJgulQnrUct8hpnRIdKCBBDQzopuadvMaK1cv
SlntQiRzYrqZmCFXiw5NtV/mCFP7nZ7oHIaMZn9UCI2pyNMd/MWhMin9bL7y2UJwY2chgJ7ctEVT
qIsCVBfJB7LO3c86Gpu44qtaR76pR2KZE8qqur7lrWzcxxRYDP7IN1fz9BvzzwYFJu0OV+VhIFk6
X3kYGw18SglgywGrpEgHLwC9P3QOcLX8RoPpzGi2WjHSZy6qHQG9nT4ePoMsEpH5snoT1D5m02dF
sWnNX9qcfBAQt9jJ1hnEoq5MeeE3GuirxDOBIAyhUolujhgKEokjmaIbOZEW6Gpo4SAEdyiDJnf8
cVQ5MlJFhiuqO2myp0szPHe/OcYHqj8EdJRqVHkh5TYsYqb+iaLRrN4vMgayxaFKFJ5SK/8SJ32B
nDbIp0ZQrVatobIKnv+V+ZjXP4ePeX4bPubr3fIxz/8QPubrIR/z6g75mFcKH/P5R/mYz7+6ufNT
R0nIwEXoUKwOKoeZj095wHlAMKYWfKjhxEeEb8Kk609amNnYWHWPnJzCivgPTbBJmNuunbIWi/r7
fU3HuAi7TDQTgygCsJ9gPI9mV2RJQDAygRavMEBC88hJDVYPSPW/wCbmgxUzcI2JSHunaX7F1h8+
evKkplcCiHCHrCX16KArfP3L3VeeDekGLNP3RSACzwzxnjEPfyyPq/iOMn+V11gZcoSNRg2VjFRd
4IA/TIPS/apoEELKo0h80CVSOxbUrvuVRw+WFU6NxxjroSFJ6iyrm5a5rT8064sniFe1ePJEVJqS
T8iVyfjkBSaRX+TpQU9l1s0fJciyrC3Kgf7AL2uLyhQjKyhBpkkyxAEKKxLDFvjSUTKCUNxNNdt9
gGEuAVjkU4dheqKupmEaLjgKZ4gJEkzVKGURSxyqrzva644SAyZ7m96QX4DV4KNIi/n3rbgPHyU0
nQFYCbzrkOz0aU80ZjRnmgv/IHkli2cQbENCYurOnM3PiTbkVJvFavMAKjMhLtVk6RIBNk0iOqeR
cD5VJMH9jhplXpRHU/BKSguSvyLya4v8oK+draCs5EOilEdNU1vqfB/McLiSjCrKqdPNGoCP5GJj
zGw+NzMrVSOQP2miFDGNOQsc0/kVd9PM8TI76iFUaA6zS4XNChvUiT8xNF9rtvB8A4akhVd8x0cT
qcQ9ZQnh/W6aC2adz/zCHfEMqjGrcY1YTWjNakxdRreMrmLduAxX0TRn1fC7iu0icuKnWEdE4WXz
+ghZQsCZdFMZj+kf848bbjchYVeq/8wuXgn1X9BVV4BILUPjQzaGC1ucsXFd6uvkvuOjNnSbXocI
3ayo71Dn6lb8rL4OC81KiFC+UfpFN6dGDNtTw4fNIyOE7SMaVShTBXW1HYZnbw0/wT6FsKXW7HQa
Wl0FI9v5z9N/1cqn/6rp+INOHq+bySKJr2QdjUXnEEcFQmJ1tTxridtvyjyepqr3hlpq1DhixNuX
D0//VUO8BTrc2PQ1/2GMclD4xC2Vwse8VsVt+A8ZFgXSTjdidmUFkeJCm9IMlevqHAqdsRM6viXE
wgMrGZrrEdITXcnpD4xXL4D1RIlQfH+nik9x8eogU7xaU0WCpM/gDkTXK92G6PYjnq/7PIUjbz4D
AolJ4kPHVLpAO3ysD5m6aifYU7frBaub7wZ1/k+7QclVjJ3JupKpr3aFPXm7rrC6aleEBQGpbXcV
0o+7kljLrkqORVd2f9pVOzfpJmSVLvuLLl6JZX/VvRa3dqvutzxIj263aA/JxVyN7u8QWFdobkZ6
UkENA00Y/JZrTsJihYnYYvjGEYj1GCUkPJrlp3sAf+sfqkmQU4+OpT4SCpAR92M/rMHCPmT3RLdE
Pyn7gKDGl11qWJARY5KOXR02XUIVWzvMYRyHK4tKwTrfZtmGRpx6PHUjZqo9t0zPITHQkm1a4ieU
C5I2QsH7+JmdOdcO45yqG1Dr6xgPvTVyL+BVtwdVE3zxRzeePuORcEWdgDG/KaBm0BI3Ck1/4nRc
hBHKvUzc0XRDqWlujtU0N5qOmdMK293cut1NcbvfTT/z9vRzk8SNXvrv8XWHHx5CkgI35N6dPhZj
XIWfqbctquenETelkqsyaefdv7B26Kz7U7RD591baIfW3TvVDql9ujvtkBikoh3qd+9OO9Tvptqh
dvcHtUPt7i+uHWp1U2f4VvdP5Azf6h5xhseGe92s7F4/AkbmkyIcslx2mSwYm08hyGgdKnx/0uLq
5lTf7+mvrfy1eSTLHmW9iv2DlDAMMQpaXQ46VmT0kmw9RXmrcIwpZeODeTejaEnFtoDzJhH6d1uE
WzGyR1KdjcXSqRKBjGw3sszQHpVKJ65yllh6gWFrgO8oR7A1LCqGBfSXkjyekBHKu6OGVw2dKyeM
HE1HX+BmcY+3GW7vp3XZgi12m3aZ/s51OQ6WBz2epT0Wk8slA4pQmWWGBrUhFHJCKZuCoHEFD55e
/6C5GSW6mutdHbgrMWVOwqrKYHB7optAp1usjtttDPoFIXJohCVGjY97V0449oI1hrsHCL+DRlwp
grqapTfmXc2CFYRg0rPAsBvNrhbREtTh+brhCd2Sl7poPWrMuppHa/nO+t6GCvIO8k8Y0Ev1Kymb
0lV2ejWnT4EqR4u1KdbmGpxYm9CrRM8nUnnblWwXj/GMmdcoZuzhwfDZyGmFGjxummagichlV2Mw
Xw558vacbiEM7sshT96c04AWROOj14s1HlQb5rzKIqdt9c6W3fHpnTGJbSYjnUT7/clYGpcpfhb7
sRI/7CN25yXpdGm6zrGiBwWrGoSuiNsEL3PFeL+T5UFTC7LEaT0ly8EpPfMW4uXTozLcBLbGRUIW
uMiuYJuQKVySs6521kWff2Fsxlk8dW3bwSgVGmRwfxcl+khimbzx6UdF7e3mFBs9NS5QJXSFKqFt
gjBEEc6honu3wOE7Hiae9UHIhLNnd2SMbE+g19VChNM5iFye8939HHZKNuZz5ouoZmvmRQXhss8k
5J3DUAMTHdKofBEW+6xLdspUlZsDbGQs81b+UhEQJeCB9BaxLGtEq/SWpuXGW+M041dymhoGJCam
gmvo+o6yhl92c6Hiz7rHAUdvCPPudmEnxhBX+S85vrjKf6krNq6mF8CcZ5jvjNjt4ir/VUD4t13K
A7/sZkON34vvjyqVUTrUNwpP+Vh4kzIzGm7XpylLKfggH50XWAidk4bQkThrNFBce7mjg1sk97zP
seX3vK7GlZoOm1vlmE87fsg6VfajHPMfiAmguJPJBjlfi6uVNqCoQQ61NI56Rp02GBqKETZcRKXx
bfxVDgyzHNHsxPweKxH3DVNJd/i0q9oxMfTvQfzYeRDu986D+InzwOV0PTmt85zzaY4m5wFi9D6g
6d71JxS58IEWl1mJqz8mtfQ9v2UtF+xrlk8VgrzI9ER8RJNoIToj69xTWOcAMAznjuVYt0gNPII2
UzxNJSctFkbYqA4sOVG4NMG1EFfGG9xbPD3hw7NwT2cqJpsoXt828WnqQhqCtiRx1ZI562BBLJZL
nBJzCWNYoZVtsd9r2DXsllcmpzosSiVtRZZl54E21vSHj8quDlaZYOqQcd17TGSkJ8ZVjgkiHY3F
vB5Xr4RPyjAl2ofuoRk6RzDFKG0quc4HUmAoIuhp3XpMzLqFoob4FB6zKf+nxQl9UoNxAbUHi6Hi
uiW6X+P0XQCaJSl9A5W+gaRvwKIBFfouyYIQ4nH6jsFi9M0cpzYazU/rS0rhMVLY4hRG13tYEK++
eGxi4B1B/KkTbcmA/5Z079DrizKxaJN2OuApbiAT4tUnj836BCvQMV6QcDAZ1i8EAzZl28aF3Dam
SXL4pT7+lbVCz3+OVujjbbRCr+9WK/TxD9EKvT7UCn29Q63QV4XPePWjWqFXv7pW6PMtT7hAHgTi
sKO7MmKmGRb+8kgm3JRSwMRFc2j4OeWieQgrsNm+u1L33RWhce0oSwmPWxJUTlmrY+I80DxlKy47
D2zcViuWXscXEo8872rPKQ/Owb1j15rTfK7G+EmtoT5cGT9wDLWAZ/W9d2NL2YfqXlXeEnswPRmU
crDRzUqnPi1KccV5oNni5KWvzb/Ujc6nwZquAzQBIy3qqyekVl9VKngqe9pKTwEMxORQ/MK6Gd0L
9//Kf+GIBLkvbNHT1+PuLfzBFQkHUYVJhSvV4wW5kRVElVM8K50H2ir3jR4+qnh6PaAPk1U6yFXR
N1rlv9EqQ25YHSG3Uk71AjZY4OnUw2yVIzkjOO9PvjcZkidiWSyJ2Ygqp0YEi4LZHlw3200SQgQr
NtsjdbZHcrZHcrbXBEmdB5qpksJ5sBJzHV9HzLTnZp6O9uNaI/Ow/cAxzIK5fmNL2Yfq5hHiK+Ww
EoRHp2hZjDzQSsz1IDPXzaK5PiW1+vTxsj4tl3GiL7Tp4UQPFPhqVX6h/TdCwD+IVSXgXk1Ey+q7
1vy5uTQCUPQhiKeJaNxXpofYwK41fxaEC4odYXgsUcuKYYfRXDaU2cNMDS5fN/v9SZgRAp9TleWn
cdWNziNxC8UOF/BWwzJqeqMxGHJvR0y+SiKhkKSYeYjpgX5EowaXw4wRk7tGsCArxiryO42rnraC
3TjwY+pBHoPnYNfPUaT3J6hHNXZ57yUksYpv4YpUEl4mosPTBE5FqAvICkF/tQvvu9pVT3Ov7wUs
wNaNm+sNlsMEJgT97OGCuKguvSKC1k/Io1JpIqYf53sbH7ULdcJPlAvdOIUt+dbVTLiCpeQRUEoa
OV9Xru1GsYnJ2Z3ICa8cipw6arzoalewhSm4mHn9WOW2b48aHzJVtTEVwEbLTHtUr5crpA9/Uh6G
4jq68Vl9A4wzMRVs3XDN0LvUcYPN/pjrfHz29zlTRffpAiH/oFOdfgWX1OhF5/9n702U20aSdtFX
ke7vYQBWiS35/DNxAnI1Qxtt2pTFptRy27wMAQKKJCQQoAGQ4iK8+42sHQslWm572t03pscitkIh
a8vM+vJLJwbiTgfvMf8npWtNzdVhHDuL+iCOxkaqFE3CswaoVFZDkh5F0xBwcccBjK8uKKfmAXdH
/BpR64ofQewED4YKG+G6Z+ui67rY33FQgKMddyfZMcJGbO3lwVIxPG4EUmfdy9CLPG4q9EhMPPj+
p5kFsjwor6s/rGN/Vs7cTy5ZameHOajk5JML4u6FfdjmSgAaKoBEX1WqXpqIzGaFSuxfvjzSqXxN
2snwC4UNCjtwJLBBcQf3bHgj9Xkh4QaS048tfaVw0vfgT8oEaos685+tXL5Qv7MJc5XT+cmZq5zO
X4m5Kuqozd+o8xNt/kadp5jQks7f2Inhdr6LEyPpbODECDo/1Imh1+nHOTHER2pOjGnnxzkxph21
bHqdZzoxvM4/N4B70HkEmi8zPKy7I8up/0LX5qt2r682yP7zn/+w04IeXKyM8JsaGtt7aOzDx8LG
mmZhaNrVf3Td6pWyNaSuB2qezgA+9xNtY23SKeAHBZeK+Bw/9zWOqE+kKpugCMjgL2ZDRg7nCjMm
qUBOuB2D/beiadiaoZGYpXRqDJzhKKPF0YwW4THYUTfUattR/qZaLTIPxNuU00PGA+xMX/qwyZvu
0KgAepxpsVWeKJ4CT7TyaSTGY8XveC9jGXLAj+AFvpop1uB3IlbU2g1jyV21C6Lnu8aFtAiJrkIV
8jCNO3nkBnUcsUA8xHb4J2iMRjhp7O5b+2gImVJ5L3t4iNA1fmMQZXVDII0y5olmFB0k937qjsC3
4wLxPrSQFeAp1m9CAxzubO1sJy992MraHb0cojH2dkcvXTTB1wc3MXHuDujztAksDw/yBUxxygqI
UYCntIAJDmgB43wBrM3WlcAL2OEF7OQL4JJdV39e/R1e/Z1c9Xl7r2jeR+gcAXQMDzrGFDrFIGOj
fDW3JmhhjTNtu3LEp18uS8JlyWQhZnGZh5XmYM19rLqFpWdlN8rPYZfFvrv23uFj7y2/QJRwoFp6
TeXyby5WTKvBdafEhwpSEoSobIlkaX2QA2yloSIlRWtHCxSxy9I8mJVwPlidi3C+FMkRzmP/1NAE
hoMi1C9Prerj1Njgee453aTmB+I924qWlRq9d6ERQVbSFKIHfFyRkZRNLjk0SsTSjpatjJlsAWHo
V9qLkFfpCTxVXKBnarz1LcM3SMcQRa/LvaRGWm5uQTL4kv3gSekIM2BAAZZWsqpzJvBcvpF2jFX1
HRCg56MUEGUiRA8aZtFhQSmDKL53Yo9mp9AtafYZFIGhuQbpuihSOltOwe3H8zMnMsqP+QUvyZzT
qwa5NXcq1lwPza0BWliCzGos1uiRUgeGujpwjaQrbFZwhS0gXzW12I+pdmndIDIDbd66UHI5FtK8
h9a+xJ8/qA59o/y5CXXAzdDCRKeQqeHGRCeQRTY20Tl+f26c1lWGVbOhH1mjDoDLTHSHh/zXIZiw
VUk9jUPsM5fOrVp4T8u6Azo00Rm+FB0L7gPCjoVFMkSXQL7OoSkaIg9dw5D5gM90Kg/+QEpD23Kp
0DflmKkYwzbL0kqH84uVYMuhPzVHOD2W6ypkZ/VrtUcVhlsUbqoy0HdX6g1+SW+AAdHhYtE7PBNN
yHo7zdE4Vc0htTs4nIGp5joBb+o72Vpa+5+jXGpehihzJB+eTKDLOYdCNPMT/yYgvOdOw9S6FBtM
xUEmR5fUz5ibPWjUHZaD6lT8gI0BdPIYkxDIesOGZmlu9eYWmXlD1ehhodHDfKMnjnGBqIEJaROL
9bnuILE4xtriOOWLo/1CZBSLcg73yOAVQKlpibq8WCUPD7adUTT4WgnYQ3vjjp5syasvVscZO1eR
ZnjWEdPHpZxntLkH+p/wy++VZVCRBrki2u4rqs2zE1dUXuQtRjEZWGmGOjBjPFK1r3srBGpWvhQu
2Bn6QIfizRPrkLTGKgw4TelgGWsibowmStyuaIKADWnqUI07Jup5aFAOzLRN1JugceWFUUUupwNx
qjWeEMjVNSNvndALCNDT0+3L1ZCkx07gTgMnJR6DiMKF3z4IXWEkE/TlYKxdMmjkr+g7EZqlrMwZ
fY1kZ9kBZW+gS8ywIlVf5Y6EiJI+WkhaeWMzJVR+Dk65ByXt7TGHifCT3PuhF93Da46j8WSaEu8i
XQQQkgfBkHWxuCPGyKIt7wcGwD29hwdnG+MJ+EFhXwCNDQd2niGfIJqojILRw0MsNr3i14Dv88Wh
/3pdvudvhT/nRWMjCEQvcdF3ECXynFMWz8XjrgmSQ6FzlQkyK8MPpI2PvLeiCc7oCtTuooNWMN6H
+hjhKtJU6VVeUY8iRVhsQfGalKq2/iPECkZEYqZSEjG6CrMuXFj/2El5rNRSdgF+rhsGa4eM0lDZ
BXks5xOq2JI6/EE50DDS21FONZVI94omJ9WIY6Rh4UkZC89PZU9D4ZGYSbRJpQSPN9G8g/UZuMAP
RHHpg87aNfSmo6wwtpLQFXfeyePCj3MU5XRquIBts/m+jewF/DN/Bb/gnzuysPvoGC4ze8juo3t6
M8Ow2zwkBDbL0OWaC8oZePp33vU4+T67Hqeb7Hqc/9hdj9P/yq7HeXnX4+4H7nrcabseh8/d9Tjs
/MOhm7fanu7tz7Sne/vknu7ZRhiBDz87RuDDXwEjAGV3OhIwRM36VOwLpTzilpr8paA/PWIsRJyV
iesBki8lQvEiFyW0nmeFPQ+3lwupcD6kKF+Bx+24Yex7uzdDO8ca1Sx7sMGYa6VkzL3YlKRjnRs6
LruhwydczTGmCbxk0un5PsRV7VsO7DVEsNeQUHeEm+EQBeCjO+sYIbromCZL4cXdqtMMBxCn2zEC
dAyazLpY81uqyHio8k16WCB7qwo0j1VHbeW2HlnbhGgUxf4yClMnsGKIvFHHHUbE7ItuFANKUkNK
lsNHeUifI0MWI8a+TGeC+44pQ8MNgnxTpi0/6Rgn9PuS/K4hYVt6IXwlYe4dGkz/YuVnNvdE++t9
KM0Oz6ylPSS9OPkO4mTf5ouh3VJJzqbEkSrCUAp+oRGVIeGvY3IXR3+y1C+/RuoEpJ6C1AnIHET/
LKmvk3KxtD9D6kJuBZl3pcxVszSr5pu1E15pICT6WHHx9p5oIvfhAebY7VRCiJO1rOKJ8HtrIEey
4+/6pllPojiVdKy7sCZuYxz09voQiz8Nk5E/SA1OHjrFgWjTRLSpi4NesrPfBw8x16D9nWiXWO4u
rej0tQzSU1XycPKvVC6Vj0/utPli4riQqS7JbLAZqQC50KZSilUTfc/rP3eu/9ZeAorYhCT5ITrV
g2Zld5GjMtVHJe06Ya76MVoXTFscy662EG+H8P81YxnwGn9+/0j1/pF+ff9I/xU+p3+kmY0YSYSQ
0FRJqKJ/hMX+Ef/4/qFNJlMGTTrq5Ek1KZ64CrTDFnRHU5HagfH5g8GmWTbTDjqm2JhmDpwu6NhA
3bwG5KRekNG9VpZih/3ZcbgHBtjrrvLVXPyXqwkJgOi/O45wHUEt33awNh1b2viyqjSPXr84knQ0
l6Q7EL0oN1Z7fVSY+Hv9Sk6FZBG6wnudAOxLbXJAz9DUzN81g9eHEOoQOx4lrI3hj69WVOqZetsR
DBgWAHkoE+6cZpWnWZLg3ALOLWgKerHHDKcZoL7Bf1hx3hkHd7CfcAs/GQsqABNVKQRIsMWwEgM1
Yec/39OEdgUWbWINpFz5iUmGfTRmbCojRobyQadJcdDYNNFQv8JpUiK4QifCw8AIgG/pEKLeHh62
3xgJ+1PB/nON/bqowrHcw0vekBA2NqL44eGoQ2NKVNWrb7vqoFWpjy2KXeyG0zob24uHh+2FmKkl
3fEsZwjQ7nCBB7XaQGyLHuOZwQfgsCG7xFAfTxeNgTWkHt0kM0VyCU5k22jI1gkbjakYsXGGLiAV
r2cenE0NFsLhJ/SvcWwi+/GP30pG0TTwhOOCPrZ1M023/DBJieNt+cKpQbytntzOPM76tomKL6vV
jAU+NjMqpJuHh+2bkpCuy0K6x5NabSKEdImvDT6ZjpSQRrqQ7hsTa/TVQrpfJ6RLE9mPdaNniuiy
QkSXIKIbfLkWgKjt5fhr93I2XLoqNno7HY7Q8MHrG+QWVXaKH4EGQz3/vvT8+/nJxhfTdww3xYuK
HYRuh1unftXwgvWg+MRSe6I0+irub2n3i5ZGFSOZ9yce9DOsKqpdVVSxDhUFmWb2+7p9gzfQCnSq
+tjRApQIuA+PnLgUnFTgbT7l9+UChiDHEaW2EqUUckj2wv7DgwF/cK8P+XPCPiOLiFVmyscLpvkp
Y5afshTaRJ1+3OdVSqKDIUcl/025oH1Q//woZBfEUcO3iCJZfu5X5mqix8pJInxVmYcHrTLbucqY
io9Z1uRNpySp951idb90MvyxI8Or3nXgSIRXfYIdHrFlpW/s/LGR6/Pzz+76/PxXcX3+1qnkwF5B
x9AVP6aj7O7ZUjViugmcgXvpDKD2dBlQQui6bNtkD/Ypee84ZzPIXqalonwhLck83XaIaaf4tH6/
8rdOFR12qlmppKnvF34xUspglyLgWos1BruUolLDRt0JgugeMiwIMq1G4+yifBYADZU3NytuFjzL
ISHeceBPLP/hwUHi6A/Ll78/5Qih0uZjFH6CXE5BXYFwHK1UuY5WbiR/U6d0k7lsBfOeX0FsB4yR
QdEO9UDXW2c55qnF5eHui1Wc2Y8RjTsN13J3p7+8ApLKRmAFu94vr4RnpDG1pi9fSS9Tw7O8l69E
8rawqdNVtvLkg7GJ4tz1Zum6X/G8pCiMTeRUPK9fj5qQQDbyUNhEfhPFTeQ0RRpYyi2Cf/1NvdNs
fA4MAPBu75vWZzARffhpoqSJc8/4WoKHpkrwsEXqoETRqA9Kj0o9IBVVQJ+M3psLlPC6gPdDLAVu
09Rypvg0XQpQPTXRyUivOYu/MEuJR1w67Gl4NtPHAnrilFP+g4M+4VmXCklbtIwyEnXtyzOKOhPQ
PbmjSNxEtoFGUXmkajV6RvogeIYakfmPJfuxBkCxOsEDgRgaSGBcY2C5Dc4EEqDpzj4dEZN8+pd2
01gFziKapuC6o/oNH4bgC4W/zBKM2clLzrugKnHjhB7FqkSIq0M8H84kozHgKiquqczlFuxWohD/
HxTjV3QHViMdWcUSus1wJJCnBEWYJ0L0gdWE/3Yk+J2dqPvJB+eDEZkPD9HrPZPRfZkofxVMy4Rd
TXBsolUsd6I+cqJdETkCmRb1KzHLieQ1cc/2AdMxgF8pi4pmYoQg6igMiZt+mAYAWrTF1GQjmxKT
2n00gcdk4kaIqA79sZOSD+SeWdXylB+FR2Toh/qJk2lM/+rnTp0EtpZLL6dZNkUot58civsP6ctp
rSlY1g7IkIQeD/Auo1QQ/V7VmuOm2qceN3+ifepx86l96lHzb4zCGTa/Cwpn1NwAhXPd/KEoHL1O
Pw6FIz5SQ+HMmj8OhTPTZtlF85konEXzH47CuWluYq/Nmz+5vTZv/kXstYumhKoIzSJF1G0i1l/Y
PJYrlOUzHL22bdFb+SFbUC0HqTJSdrfLs32zMfYioONXRrWQrJ+h4yae18dkHBnlmlBFS6uJrhL4
PGaGVTdiFeNAXBelURSk/oRWOkC+BwokQR6mhZ/QWcA7D2FL3AoBydwRlMxvfZSILG+rx1+clxj8
4s5RWqMXgRHBx/J6pawmQiC8msPYmYxAyWwxD8w0y9bZQdNbtOJfdQqhSDIXnQf7bui+KTaeIAom
m8y3XqxINplrBMuXvNcp+mTBmvyvVxjvNYjF0lvuAalyr498YCp6nR7s7PhmzLxa9XpdS4tDu9Bp
s5zoupTSFPJbMxSFmFrum9Relr2c53cbBBGssb/ENNH1v2IUQU0SDExFewfJa7kD6u5gI8BhL+nT
DEw7O4kM6aZnNUa9Ws3dmf7qmKuIphkNuWq+B4ALZ9ft86BlpmFK3j4mk94eSvsWrLYqXfRlk6Xq
q9frEfzjSdeczWVu1m8jPzRstGXr+KgTaXlrVnaKeKJ1cAUCOoNlCvSiVFP3lc0NoJKYWsKQ0Qsy
qYfGTdOIkdc013o0RiLDObyFlVzl0KaAEMgoZ8NNx4/cYWs1u3ESwgkQtFrqjoQ006b4cymEZBTd
t2mEkZUi6aQJhTy4+0HEo5yRcSTyTuoxi1spZsB5loiL1BfwQ3BTaED5PR0ir7FWCKENm8awSTOJ
sN2PfFyunLOEV1TuwUKUHoSzXPFjPgnQSYLz8NMg27i/tn1+vxOvSxu+JO/XycTv1nQdJx0Bel8J
jU9VJ04ycmATxPJ5t6LJF+huiRUhbnkmSLda9PYLeC6HKVi5HpayadPe5qBB0yzTV6zvVO40ntHr
PHNBwNMVaM6cVOUtUB/zRHVL39poOPXCyWxjvvy4oWWoLN4c3aJx01hRqdBVxebfxDFWU4oKlO1R
tedx0pSjMEb5ZhTgN63FD2mLp/FCywVLI68uo9QJ2rSi5TOG+fCwl7lO6o5WkrBNQzmv6UacY0BU
P6a7En40TdhWDJzzURCFQ5KkzJQlHnshXGJdi39aVGqVBJXsXwi7y5nZVoBKZjblh8yZ2ZaHiga7
NeBjfSJG9BhFoXzdaehZI/0EdTFZQ8CDwoa2iJ+b4cXYiFCh29omWuSD+mYm6t2gi1L83/a+iY7x
9g26rwigYzlVmJY90ndka7WRYaILeDpDvVHfRJdPPD7MPz5kj+/B48M+hKEfNo1YfBWEo+dqv2ce
LMRFMBBqNeNERuM5UhjyHjxjIKZzLG9bN5jOm3oPUDP7cYZCGU1UDoUdQ3Ayb5qWZ83QDe8NnuoE
fiI7DRHdoNDE9+UmvqQgx1mGxDoR4PfGOTrdOYeM11Ms0+wGEJ7tYbeRNE6bxhSdIpuC6mgS0dT4
pYf+36S/88vQH5ti3Zk4cUKaQeTQbFimdd80TtHUtDjcsMGmMYsZOgZjoiUQMXtKE7TLbocjJKXO
K+TMDdUQU9NE10yvGeFrPjv9IpmFh5jQHBGRFTGMWU4L0/Sp8OWI1uEaFiFOTQq/1y19c+u9ARvS
kO+DQE5iOFwgSPxBNOt70Kh6cPLylf7g+JdX8kGrfL9MKaKjx5SAhqUucwcdTcxXrMMNUeWiWF4L
vfVcRBXFRl9TbHm6/ySD7UKRd0YPynh0JmbJLMvhxJo+xAc0cqqijtd85K32kYXXFqf7eP1070tR
AFwbetMHaXwYQhfjKzlXyPhRXqWiu3dXTmB9NpRWlVL+hSbL87pF5ikJvWRrXodA4CgkYbpihKMG
BxWDdUWoTqsp0koPieWWoy83uRwEycUjlktcBEe4Yvlg1qLShDwBRBtkmCYLpQKkI7oiaVQu1JeF
DMQmsAuDt3uUsyOHGZ6Cgwpd4ztgsEEzPHr5ameIFtgrq0fXDdu2wKuc7NrZi9VYaUsb5GkaPBWh
PMmQVxHP/0jG37SJ9J47rpJzZqLt64pi1+3o0a+Db3t0Wy/ZnbEtPfqXt97OTLbfzozmEi4W8KKj
EHl6X+A+hopd5w/N8gZzqdgzOaRU59DH1riyMm/P0EpuQ2hP1uVJ1ZnHjh8eU7eBdh8Pgwbgxolw
Q6ir3DhT+vaCMq+jZhNrrwXivaI2Jc9JxWyvQjHb//feXkk3swlQYeVV9O19OjS3Rcqs/xkMBjZz
iWzvV6iFtjNNIy2nluZ64gE4Enb6f/b/76sbzy6k1qpCluaTazGbgpbmxLaeaqtZTLXVNPVWCsvS
iovC8iuE5ZQkFeWFlFAZuUwsQYVUplwgni6PgfzWifzWMcxdI9i1G+IbcLBMmtrWPSSUI01jgsYw
19Bt/QVOADJ7w1CkFwy6EDRpkqMxukEjhhNdlHZIF7kd0oeHC7GZOluT0o6PzmM+YCGb2CVaWKcZ
nq2bwDpNanJlaEjniVG11L5PA1U1Am+fjduCj+ALYb4uUEkIdAm6pOvRKdLaSdcU2lJT4OWkSKDf
2X5xrO8X+/p+sfJRRmq/OCnsF7saBt0VsQquKbXmzwZBkUymoHcDU2b6/j1g9GKcHwmqob2P01Dx
mCU3A8XQWPpGwNNrxvVEJv0OIDKPrjhMWQg0bzEPqNCeDHNPIg/Ligi2cOfRiojvLqaDZKWv5sBX
aHkVVclMsYV4xPjo9JCnqokkpENsXVcf3tIuntZ9T5ufbGq8fG2aP+8WrVjf7PDqXoCaUaGhHjeR
crbLRYMuiOxQzLapWG/0yVacpEc8tIjhXKn/O63DHzZo0jr8YU7vlJFk6A76tK4dwRRGKip7ecu9
V3whgNtydS0nMiwnO1zKRaH83XpN/aTjhFHsjB1K8VYCwoqZKaXNRhgwFVp8KXczuk30YWAeLJt5
tGoh6eFRM5c1j9RzOwJJXWKM2WEJYtMQHwtcXioX3zeXulClwme91Zz8OTgUrz+Eqfyu3dNcc8/H
Ujkc9nSl7nlTKqd8z3uBTnrbRB+b6PcmevMcgNQXWsybCwFnSsvAJioWAY9yYuLYlUCnd3Qj7Tcj
8gBgI9/Lq24JUXyShtI7mCSgTHZHg3+cJYT1R8UXAv7qSxNJ6VwfGwTRgtAnKRv5CTTNtthflHAp
DmZKUse9A8AfszRPhxxjsW0U0VSmcBgYaS/sN+r0SbZ0mA1NFHcMkExL8fNYJ1/4TXo0vzPkau4z
HPD5CL1voi9NFA7LKDGa9KaEFJsWkWJeHik2yHDEvsTdFOD17ViyJCdcj8GwMPDpasEWv+41JtZU
IMM8NODIsHFeWhetZyPDclKBzio3CcFXLtsN9IKcCjBGVL5HTkKu+FKnVk0KJ0OfJfTqt2oM1Z8D
mIL1g//hsRFPoKh09BRbjyphVBqC6oWGoHrxMyGoXjyJoCKtTeATaesnh0+krb9SNpCw9TeGrcWt
7wJbC1sbwNb81g+Frel1+nGwNfGRGmzNaf042JrTUrZK1HombC1q/cNha0krr29zBYNuijeIlVId
2m1tgLVi4YK6b0FQl1ZCrqIi5MrhCKOkZYAa/BjwKmj984BXVCyO+afDrzS0fWtzjI+K3KG+LM1b
A9CeBKA98eaYHqcSfgFa4OOYHnGHnXMWCUxPgrRarsP0eK2vw/TE3wXAE7eMuPUVAJ5K2I5C9RQA
PM/H7gykdLgUUipfzsoqxZvDhORRO9wciFhnlqwdbt4jCq7jrhMOOWoHPBMe/Bhg0jIc9LkJee2b
oTGADak2/N0UGZM+hoxhO0l8oyEu71z5aquqvH0yn6AX1JMyZvVFUkSFT+NfrglOCiXPYbJ2EFDj
HfQeV87N5Y+R9ZlUx3zTkjjyp9gqhRrrwCjxVcXXT2u1fMg6KL8/tk5h5QbVtIVUb2VdcZDrnzkX
9UT2cCeYjJx8By8g0/hcDv3awXFvr9+oL1CE456wr3f34RQ14f8wHKCj+MOIynQUCU5fUoiDc5MY
zm4E9FoSQlGv12MVLz1/eNhT4Mg3Rmg2tHtD5JpWWNUQAmxKE+/qZYeFspFrmiwJ7fptS5jbnNdR
w7GcXbnpvGP4DQomacG9jNlrf8+09k0xvWkojgS0YJqgQ0UDfZvg52XBz/9MwS++o+AXmwpeCV0R
5SQV4n2kMcqCH5UEz0eeJnbZFKWoOrnfAqH6yg9V+ohJC8nyny7WLHGVj7/ueS1aSX6eXJ5SffhL
PaYSKCjOgT8JnPUVGEFZiT8VHFgCgQ2KQLEJaFZjAPuVccVGVfUAuRuhpG+iwoRLCf9d2D3tDdF1
JSBwhreHGoCwGtE3ySP6JoaJrjkgcNKHrdnHHx/kHx+wxykgcNCndtJoDQfehQZ/PFbov3U6gddC
unY3kyipDMWbA/zGzwT4Lcpte0MBfmMG8PMHxgUPAMAXJaDcdHOgXEBldqEB5S40oFxRxdwQKAd0
UB4GcqXGe+MYJYiY1tKnAbGHvji7B2eTzepXpgI61mp8/KfUWJRACpjFqYZZ9Mqaw0BpDlM1jjz0
xESiOUcewUgmZhWQieqo7tfhl4ogJNlJj5XmGlYBkUZyTiWoajrj60Ae6xXre6WVCldOi2Y6dHWV
zIo6aTLP1eVJmZuPAxfjCuDi9aZLQz58Q8MwFhCL6zfFW+hPXH7Y/uysVUIWdqYxeTa6EJAbPoNx
6DE6cjM6kZvQFZxv1OCRzTUQQKXJ00DDcR5oSE0bABqOsAdAw2Gu810LoOGMAw0XePjy1c41usFR
2Vyb5YGGo68CGk6eAhqOMxR9E9BwVCVaABrOvh5oOHqCP2R3QYGGPv3LW29HonimO4vKkXytd9sc
hniEikjBbA02sAL8l7SMMv5POwOmnfkUIPAJzKGcgG4yUy+b+xWKqvqgwljVaj/4L9Ye0I6LViXa
8c9FNu4LZKPAI+okb/X/bIB1/FqIYw6/qKCSjyMfYYbQsI43ynxRMi3KJ6yQT1wSjp+Xi0PFEjGp
JDlpPI5wVGLwhAQqYXWwrIww3en8rQn8lhTBeI3vTnWaImumsI4Lhm4U3fJGusku1OR7nDEapz9o
WCrAsBacIv6eIiVhGh6WYATDAozgXmAFruHCYUycY5ig7VqNnqCrTEI8dnIdRPKSTzWnaG6doIV1
nmHB9ZRjeaxOTzVrcWfRCP0ZbasE9DXNLD5EIiapSjSsbHjVGLkuoBoSyXaT3UIIiK67J3QRPq/s
KxyVNW/liZD4znbYaKTQsG8gPZjYDjpgaWlJAevY8MGRgiMOOPQimNtYv4gkPiike0OcaFPzXCQA
e0l6+30TBSrwSJ0VKyvNtA2z3Zkf2o3AUsfO3H54cF/vNVxLllpRENqTanS+LLglX1wDHrDgvDYv
XKh5QUePrHJtz5xMV3z/UWwaxFkOYuKLVneK2BKuHIn1G6ifcmCUoAhlmeqoF09HvQwUTGUC88IY
+7WaQOagEZ6D3ztCIc34jYbYKTQqusbb+2imKLql1eVQYI7pYL833Qn7esLizxQxcJBfCiOzYTgY
koVv75mWg3sjFPUZkRZ2GvXefl+gWnEgJolxrbad1mqsPHZSBmQ1dFCtSDOmkT5NCljWkIJqZ2xO
cHOo2Byc1tH2AAHfyp9Iqp5YqBq4vAaDx2tQfoc0I8XsO1NTijF+eLhuzAp7QXm58t0bYFimP6Ab
lwTFsqalItqf1BfsZ0MXRMo/iz5e3g2i0kh19G9S8TBPzlZ+GmLbcq8bmbkCRialKRCT3bUWk3vc
KsCFF62vhwuzzY0/By7stqrhwkHrp4QLM+OoBBcuf8nXAYgFgvJtYKR1fmDm6n/jxCwFNdtZVJNm
Wpe/c0jj/BIL6ZHVYcUn3oilvoRCvpdb+8ctikK+b+VRyKCaMKrcyxakVzhtYbsVzpzYd8J0a+D4
AfE0lPKJAnhsE/rnsmUyjAXDV5y2TJHLsyJNTyM1TCtFMQ4b9ovVaSuztqhzxTptHeilxKY2LM5b
CqZ33vqJYHrnradgenctjXyxgmjgvJUjGgCDlOZrtrkFVLmLT6/s3oBN4HPtquo+AR2hd2bAWEp7
zGEL6+JjoiuKDXZ/lbj2+xKs09DPWsJRYDB6yxXVsIiZBwH5GLaDHh6WvqEYZfwGoQ9ZxrZfq520
jO19ZI/9kHp3YCxtudwJvqUQasQl/ox4Ww6D72zd++mIopa2osGW5AcPs/rWMfMiBoutKAwWW0xb
S7aimOrgv0xDhrPytpyYbCXTySSKU+LVbROiUjN021LA9BCdtb4OOw7yroSOf6AFnbX6MHsT4DaZ
H7GZw0Sdlk4UGqNmi6PC31ygoya6aqLbVgH3noq3p/jXkhIrpzaMcaimNQrcztVaTUsYYz9/DSY3
jPH2vrn+Q03UapV4gRg43scC4+7gK8XktW1IpLUj0NTCh138DAp8F2EBDgpNi53hKHsf4BeoTWXV
bKFPI5RPWMrqEct6+Pl6FKHfagu0WI9DPcwhNq1DPVzBN7M++nhmom5ZEmcKghvnt2f2+OiolFFJ
QrmHIv5hCX4/gr8r1ZMgyCtGAYROuWYD9Lkp8mQa5OJnGVOcC/IAeSIPN4vnTEveqbWFvFM7Z6LP
gTFFHmA9G40AwkrQ8k/oIEwlR8nBup5iRBWfklR+SlTxKcmaTwEO2yxDR7SL3UzRxRQVv+VI1TzO
A/xzFYppXy0+fPXEw4vHHl7/5ua3vLlZfvMno/fJ6LVb6P0IfRmhdyPUbaFlC31o9dHnMxPBpPbi
zESRB5EeyxY80GrR07/Ry6jTqo77gP6JBuXoj0nROBznoz9GGXZZZ/FEZ4lKhMFJyZGTFBw5j4SB
SP7hoBzzMcywh67xUFgiQxX5MbQmIvJjjEY88uO6EPnRlpEfCdUeJcYQTSLY2skj1lJljAVfERKq
W+nTgu19LTJ4EOQSUEIHJXmzcJCrFoSDwBk9tOKtprO9/Zl0trdP6my/bxRa8fFnD6342PqLMFO+
aVVmEuDgcPRegqm3UoWQEHe9aZk6ubXY0xZmGt1Ty197GwCgG31pSRZFqTHfOPEufXAXNhh2J2yb
jGQ8tdq7r6lJMfZOoC3YLtyL1ZeWEdJ9eDvL0CcFGGcuFp6/gHbFqxZoMO/AVF/nJXgXorctoxIy
qL4Jxn6sMbPFgF01M/QHDPAoPIumCTkNU7hHHLaJQ2Ov6Ma0e2f30We4mWrfNrJBPR/ShHk2srml
LlDeED7WEoFkLypfwcosvEybY0hbzTGk/RPNMaT91ByTtv/GkURh+7tEEqXtDSKJ4vYPjSTS6/Tj
IonER2qRRH77x0US+W3NcdB+ZiSR0/6HRxJF7U3UjKT9k6sZSfsvoma47fVBWdRH/b3pr4P2+igs
7k4vpMIQMWK0liI6jDnLk5yf3AWndwA6w7Qq/Iq7pZ+KwVrz9idjsBwZg8WDEVwuDl/UtRh9FTwj
+mpaiL7SJqEvhnNqsh0LfZsSKf0E2ICC4DwdEeD46mgBN7pWYkVI10WsBHElBZwqDgpw1DYc9EcL
SCWTWyNCMXLqvkc5JW+NxEQDHNwarjhNrVNfmpgVHHKt0PDNDcBW5IPho3hYv3HiI/lNJvBtFnYz
V2JfTvv0CBVUM5rACbmYzkCfmdq6HVUgz6a0ZICasR9DPGA/rnHYNvT/RP5xXyF8OSUmnUlSyBSu
cQj/DyFAeROZaGKixDECRKi/Be7INcg43yAj2SBDrZn5riRap/4qWewqB/v6MK+7FiJtg2VW1h6F
kjhQ9BrWZT0orv1UUBy8V8XEVbNa8x1HhnjgmWj1oDhxSguNI/nUkSI3rRxcvHGeGScH57XjYsAc
dX4H3xgwp0kOSKhTvu8BeQBDLTYx5lvQPm/sXAAlQQmfAlz8xUhOAXoR1mq8A/r1KPaHfugE4Peg
4wm6ZEIjTpTjCLsm6k2RVwnv7w3QpOrCgTh1OhgQN+V4fWhUGfcRNAwPUPqI4Jh8mUqaTT8Km7Ez
JuyRCQXym6Y1oe+j51wndElQuJuAM7IX9E0+RNeEDAC/FQ8tCPowgiFtFRri4OFhiq5x0AAH9/Ze
I7VCCyiR14yBDMWI5dbkwozp3q1Jk3nKkT4SzNjX5dZBUXgZOyGbeADeD0gdtaX/yJwHUDbRF8rY
zU8txE3livbN0Mw0rZkWtVbqZqprhbxriXlEo+LXwnfWCijMCygUAoo1AW3vCwmlFS/RZ5KxrCjb
wM6zxDZDiKsCqBrsAvvg6HdgFo/Rby0T8W9TgeKJNphcoMHOz62BnEyn+VnWg3sHUHCIXrQglDS5
NQKUQJT5GFY6j/aoW2NKz0mlv/FkcKlYrsDtUtGiIFEmH1JuVMRT3fMJHBwzjfo8Y38X/C+dbYS/
Zt16oC0CsPgMEN2ByAtnwrYlcnIZi3NMaiN6mJnILX34oK1aQ2sDrdc5BUxNqlqtIrpropW3YRlA
Vl0IZJN9i2OTJXy+KwSSMEZ7mpUC+l8soF1+BaDPKSINowqkYVJCGrrFgJ+gHPAzBWJLD+w4HrU0
gDiuFOXb0TZRb4LGlTP2CG9P0PCJiKogH1EVGCYaa7Pm9ROPT/OPT9njNCBruj4DhNfORVeNpG7w
ZETVgEdURSqiKlH6liMiqkoCHpYFfE1H00BRpjs8biq2uHaSD0zyajWvF1JzW+Z1KSoXEG8U5+ON
YhlvxNUaOMVUlpT/JTL+Fa7x1Nep+AEOUr4dmuej5JV+b+zpN6MIvxcYHeLBjih8La/COqUIVile
BRE7kvCCZRXdNeXOHylXxJ9S+slikFWoyPgZ3gy2QDVI2rrYp1LcZ1uSEjPME11PHov0SUWkD0pl
MJ8eD6rZVZvTjY9oNapmE7GEES7a6zbeQ7M2zu/TPwEF3O8LpfVAEpEqjVl6tTSWcYbjWLSfEwPE
Vl4xlz7NMa6FgGhmVwI2uVsK8FH0fEV7K8hH+lB8TwympvuI21/z+Qfshd8YdTOtpvc2n4j2WbPC
Jtp+Q0UE0vQxwohpG61KbZETcMmk18NtSuUN21oYiknjRm7aIm4E1uft/U3iRv53fdiIVrnt/Wdy
X7OYJB0JZV23nwj5uHFiDdk9bz+W9ZnWquDqyr3N0TSWqCiQpEIgbkkclXEfeR4cT+aQRgMW1zFh
sRtjfH5oEBVmHJ7DYk4jNo5aImIDgj3oujDI7ebXaoPtSt5iNciG6BqPGvXensqIga9lLAdfSdQx
ncP5vLxnDfIx/OL2X15Z/M5fXj1KRq+3A+3Zoyoy+lm7SEY/LA+ORZvbH4ozZqBnMuDF/7V6gKmb
OhftEtm1DoRYqTGfq1yMRk5yPE3SaHxBNWI/o5AJR0+TXAw70CASgQ6RmOYgEl4BIjEQEIkJh0iM
Cw6SUREyMYROfo2L7NkN10rQDHuN60JMCUOoL/CbwFhR37rv0hpfZ0AHcK2hyhdy6R0II0pgZrau
0RxdoGN0jy5hTHhs+T7FXm+wM6Q622nFknONl4FximZmBhEPW9c02iE0UX4pvjYfHoxr3Fuga+5z
OMGHQK113TaN695+Hw2qCcNXLJuQDpS/7u31TXRXOLfPuAvOxaC7q6jrHH8sRkgEenvzdnLq7EfB
LhpkQHh/12icy/QkwIKQ+Eu2t3SIz3fvoA73+NA3Ds3GnnWILvEK9ItJPY0mXHk9FmriRPjZkGRH
OTFBrZOH9+Zr7RITxi3+aNw/PJyYLw3t2q72jHlwsYtv0f0Ovs0yGYdyhpOSED8UznEhngkhfqgQ
oj8w5vgMXShZiliP6dfJ8hh/2D1D91yEVFIWMN8OUrSwLkSSrrxr8n69rI4rZNXBH43jR2R1bJoH
xzu4k8kkP+LLZXqCY/FDhuoB0tg4ZjS+9/BHUMsLxZ0wxb2g5ls3aK59mOwF91zx9BrXFh0J0p+q
KwKXJe/7am7Nd45pvPHFzv0vr7LSrFLyfYClNq7Vxr1Bn/3LlZjHuOmP24Vgk5s2BJu8b+lBDPFX
Bp9wKPmfEnvSXhN70q6KPflLxpswCL4MN+Fzy7ey00vQUGWICUSU0F/5ZTGt64dIwwOnGsxcj0Ep
LaRpnbqYGH6p4rs132xaX3JHa6kfCL1Ej1ThoSpy//O4zUJV2vlQlSMn5pEqbYALTTiftPBw6NCg
Uw0adPozQYNOn4QGnWyECzj/2XEB5+2/ErPznVRGlaNeONa48522y2W7EuPC0R4VAT6nam+0eDV2
6FU6laQZfID2TqRFBTEITWLTe6zHX5JuUgaLA2oDoj2PyDbxryfg1hYMmexPZKLSbTlke1p5S/Pp
W3IQ9/CRUqpuMfGvbXpxKYDq4PhVkToyTsZ/Il4ncanhVR2zo1fIxL86ZRB7GbruFu2CIA9dB1uY
hpNrWFHIR92ga4CAlEf0SOHK2bHlCnB5gKYcXK5B4NMSnD0s4drDRj6/gX4oI2DetY1V3hzyCikK
YraKAc6cCVDabpFucIX55AXMkuKpBm7bAiF61t4cIYo+wM3PzEWwaYYBYN14B+updiySD8Cwqsw9
wPtiPgtBZ6MJvfmzT+jNv9SE3tIUhNbPpCC0nlQQ2n9n7HD3+2CH25tgh5c/Fjvc/q9gh5dl7PDR
D8QOH2lW6dVzscNX/1DsMM3P9d+Gsf7+CIxVkpl9TTqBrwCyhg3FCizcKqxuZg7dKqF1Gvsu032M
FIc9JlKDmH0zn8Zb2v+ipGzjTAUFbGyhbaoyFQiUrMPcEbb9PWCyH9slRnoNUrQCrQZ6DFdugMtH
13ug44RUw4xLOykRgyOhBFCssQmhnHKn/hYKsE0Xp6K9WLZod66Rq7gLdgCAMOqCFk8PfPotNt/E
GvvAHDsfOzTVFaAggAKo6wO/4RgGw+Al2ZkcuLjHsziOjalJ8QgePfDMjPHzjHC3bbD/VhR8qgCp
jCedt3AEujfFNqKE3cRlp6WRDPC87idXTuB70p6j1NRBFCoLD41MS0wbOZqMGFhjKtjfW21O6MVS
fHzNvitXwnkqagGWqriWoUDTJt5UY1cVBaYAsXLwagp7dYrXU3Eqh41NUz2sQa1uhnWVI0I2ZA7b
yodfGdqqwKt5b6tfzP6Aej4K+xthWh25dx1rEn1fHnJio/qCtUNHG4EM1hXzLTe+paVDEEPqSIvg
R4I7gMm7bTOkKwW9fxWkjz5+1paQPjCxi5A+h6eA3XYdUAtKG6gw7JON80kUr39sl7INJBSKoiED
uWrnC0PY3wYKCuQAqNfFGHOoZQpzT1irOZSwLcgN7qEpnPkCGtcLpn0B0owewSyDl5MOHqZ8MFih
K3CGrgAaws6HwBlyp6jTkJBVIOJbB2t4F9JR/tgQ5nrPn4NOLCFX2/T93F+kA8hgYjAL0PYvGmiw
yL+bX0ok63x559cvbiI7FZvIUWkTOYFOC2uIQAEGgAIMUVlg9iPY7cE6FJ8ASPdhOKy/Z4/fM8bb
03Wd5k0e0zdWSXBQuDljesDxfY7C90WqeXyB70uK+L5BGd83oQtAoPB9/uP4PrdWcwHfJxTaRnF2
dcHp787z6hIg9lwA/LkU8efCLoa7qLgHUIAuhQHCuKHn6NZhyv4Ays8qvpHfuaffVETRya6B/fV0
4cXz79UU5K+ZmZHemE8B6sIK6ux3Csed86GVE3ozH5pf8qE5ug8t0n1oCfehQTZvRvQSir0js+HU
JW5CbijRPNpx1T2x4nZjfIricID9hl+PKYNd94L9QBM8qNUGwEA5xiIdN2wc03W5UTpjmJC6Ccel
O+OqO6X5V1oJBhSZEED4EfyYAjB3e+kbnskYFT3z4cHetdEM9xgUvygRZh3RPw8PEqcvbmDad0g3
Ax8ebJvbPgNtO1eIi+cmcnK7hEWlHUK/MiRrEpdqEudrEhdqEhdrMqyoyXTjmvQPKCHtrk3XUbag
zqgjxmB19Hl1VOPTavjFalxXVMPbuBoMO7LApfTxWrr68Vo8e0DxMKWM74l6drT22SkMXlwUQsPX
8ROmNUEXeC6BXhRnkHyJU0NSsM7RnvkLPeq0zJIOSuQsuYBp8AbNrcI8uNi9QAvrJn/yZlegCl69
vBD6MPykk98chZFHAC8wQAtriJbWdYbyZq81q4IXLOBNmWa2Izq/p332rwQPUKvoU1uRMwkrjdtn
vOW5uUw5seZ2g9ShWnW4k/5YmCXkrWaA/iFnQrabXU2ur2Wem0tcrdg2j8ApwGMWKyDJ4Jp5Ckwr
tngYoDbZJORy7RZ3EXUrAa7+owBX9hHI/5PQuZp4qqxEHXaoS1KLkS3ADj+VYIfVyuuq2rRUG4zF
Z75IiDqpSOLgagiBz228qkS6yl8KMguOiwJ01vVjF6gTpTeD+yEKPg1JqM5ML/nYk3jd54KDxfsU
YJcLTQPt/lZE63xum5p2+HVU3sznV/EhkS6vpCAXVwku4LJR3U2BWAayOSB7BRqDUZmiD22dkn1E
0b1A66XF4ChXQRnh21PHNPCGQoFnDPZ7COV7aIAmDPw7hPhbMYJHwrE3eyx64imr9HcNc0TkOih5
jLlfiFSBj0gZfEQ08BHRwEeMTzHn7yQlwBFdLEsV/KPNXUNjNawrm0Rvw1Lz6m0vGviRvvLM3ifF
pnWHHPL3RVVf/1oaZDGj/0lotLdr0GgK7CWXkBK/8NcAvtI6/1UB/NLhXjpy7RGEmkYpXFH530Sv
KdEGk65w4r9gWCzSzWOxuD3E8FhpF/dshlm2kU2NAbuPwqqzakaLu5tse/vdn3zb2+/+lba9nW4+
PTWAWBrbe1YhvsoE6nQJ+nhVzPaSmrVaql1vABk7FNXb69dqEI5FD/b71va+RmiTkwQWOtk2pSxd
sY4CVAjUqBRUCPSZLpB3sOsOvx7B2pLA9RSFXTEvbDtdI0Q0YaXTNWIUmY3tfevDwPCBpZNG7kGn
hAFr95FLOygUF0fTJIA9klYYkvjt5VkbCMvAhgA4B9gBdh8FXQZGkWc0spGuQhNMuz8RmmDafQpN
4HX/xmiCQfe7oAm87gZogkn3h6IJ9Dr9ODSB+EgNTTDu/jg0wbirNIlR95loglH3H85ENtxopb7+
2Vfq67/USj3Tum4aGaAAVyRQjFneWaaC8oTOtLmSLgS7J0MjVuTWsB9WNrZWGtBUhJB1jUEX9EKH
ua1o6VEGGx0OiuTepyirTePzchQ3iXAlaoHsfMJMjYszIwH2CXFlm7LtpMbxmUF3kdQVFJJ5Stkq
UKhl/sxQL0Fp30Tra0BrIZ+p1bCRGvdnqjZQInxxhmD+pb+pfrDoSviMio1U3hyO9f5iXEyBnZya
oQ4WEo7wF9jf7gDq2EEp8k2TUg8R/OvFPe1cbGOW4F9PxHHAjj9csGMYPomwWd0iwXQxT9ga5QXc
vzxNEFVVrAFUe8J6hgvalA/5d9m1UYYDNIRrAQq66zduO2jaZannh4CdcGl4vSsJqZL8pn0iNu2V
7HIOtxcrJ9uCf2yIKRSb77F0+oIflyFM6E9oBthAQTddvHKCILqH7ZLzGYkHQXRvnV3USycRO0Nc
f+wEibqFn+CXp5PAd52UeMdOSoZRvFA3li4hGrJOb4AftGIsX2enLn7LbOIXQgDSbRS6wdQjb33P
IyFcz51APmzczpyAXWG/lTtr7IewufPGmcB1dYTGPqwA7CT8gtgwEqbM+j67qGuHaOJ4HszxZxd1
/hPFZEbihHhwTvzm/eLsgnnAaZPAEfylB8fRNEzFGXpATwtRiN/0JHW+85M0wojOJfAs2Keh7xK2
aXV2UZcHKpo9Q/NuAU0mo9W6z8YYzLqoog+lT3ahdMMelD7RgVLefyoyKDEjJ+UBwKIzpbm+xD0A
vu5QyHeudF3fSlXX0npUWtGhUtGfdEeD3rfSyq6VlntWWuxYqd6v0mK3Sgu9Sjmg2RV5zKcKdpZD
5lLWrfTwPdXFUtXDKnwhiy5VYlHUNQ/mBWfHH3R6Z6nSNfvx+Ovsx/v19uOlZj9e/kz24+WT9uPp
39l+PPk+9uPpJvbj+Y+1H0//K/bjedl+vPuB9uOdpoQfPtd+PPyn24+3G9mPZz+7/Xj2l7IfPzzb
fqTNdaHZj4uvtR9PusbJGvsxQs4324+Xa+zH0+9sP548YT+qiD4h+9WiyobkFlPM1Xsu9orWiapO
Jtz6dJn1GbDWnWLRTB4zKO+EgTlgx+fieKIZqVOUItcE7CI919KM0Ecah6VGA8AM3fd+eNj2Hh5O
7wwfuGDgsTzw3aQXxrlEXQQ7QpKU9UwskAQG9LETuNMAFOePDP11QHE1lC/D8JidCUNBOwujMzBu
zwy6C8gFHNLk7xmQQHooQD5KUYzGfaDj5nb1QCbg/UoDe8S1zyHXaa+hDWds6BxzA3vBr91keIwu
4NoY3T9qYF/SQTNDF2gVk4HlsA4CKIgIza0BtbgHQJnou3eXZJ5y7mMsWqLBOQU5tNjih3HGBeLl
bXTvSRt9Cjb6NG+jC4KdibLRpzkbHVqyWWmmN58205ubmunNp8z05uNmeqVV3lxrlTefsMqbVVZ5
s9Iqb1Zb5c0Kq7xZssqbOau8WbLKm99glTdLVnlTt8pZH2pe8E60UEZ6a52R3ny+kf6hC9j8st3q
67vmBYNSMwGLlvRm9n7ZIn+Gjf+oz6Da0C2bz48b9FXGdd4cvufMN6yt1hvuRXN/HQuO7gbIezHW
ORKK5v16Q35TE72jmeitgon+iZnoKgh6E/XnaT2kQvs4P4MMtjntg4D2cbdG+yB57YNkqEeeoXwc
buC87nbxSmHhCuhsNla6F/pg6bIRr+HMlt0C9qa7fgi3u3JbXo4z/3EIi96N9O7F6prmqlo1rNcN
x+7FE+NRH/ndqmVIDqmuNufmR2G3sDpkZrYsdMPPylN01BX8KZCKFxJfHg/R2RD9donIKfpwim6m
ffTmVIPCXnVVMmh7SNKjo2hug5kg2v3SiYckrdWEGZk/X+eP6IGESid9qzVs1YOgRvnh8DiAuQEo
emHMoBi0M1ovU4SJVL/UMA9C7LPp5te9Bp94fuFnrH0UY5+rG/QyZ8YU56x9xWfnFN9xEGLBNvex
UH7uPH2LOPO29K78FWs/Y1GqBqEkMMYqJoEDdu4flqZYGmQ3pdR15i+hicQtn3K3+LuAupqYv8Qq
AMVOo6k7IgltvwaDzwziaGwAoo9eMUU4ZARgRyr2P5D49ck0rerztNa/d/HENewxRHcxDhQTfezi
eWCYBx+7QN8Wp20/SUkIEQSUwjYKj2HwRrH1excROtlY+Xg6FQsZ46OuQZuWxkkZJnrbBbfPQdzg
AWwUqSpstJSOASd1R0Z8aay0O6xYv5/HMJ7wWYHDnnki8yiKPT90UiKfUaeoHs8iBN5oX34WzYht
ovfsw9GXLq0Pesf/fmJ/D94/JZA3TwpkBR6TNA3ICQkcSAUhjr3TGaGBQhnW5VUncFrE6iAH07hl
J4CEsn5DzCIJ/44x/Y6DL91tLKzeytweX7ryI030Trtb8/WwTOZgkzngsHAD4sSX/phE09R41zWF
cEyQDm1UHqutEpPkPgSF+C0YihKHWhfx7kAGFxOexOhT11wVxM/HQQZuK/rxMDEKt9UR2EmfusUO
JdZY1Z/IpQFZ9NSJ8Lt1sEL9M/phjrmKJOo0o5ZW7AzsxpfummwtUS6gm7dGrfaui2VrvevihKSi
USJKuJWLiMhj9NItP0xS6A/RYAuMT778NmztYOv1i1VaT50hLEPZFjXo8P8D56Rtl/0/v9oW6DH3
fuhF9w17GEQ3TlBnh7ZFqa4EyNqWiwx4NrkDsVZLG/br18dvW+2T7umHX6E8hssHa891SZL4N37g
p4s2pBIFB+uNE4uFGBREe3/vX0CDHcPB/0rOQt5QygzlJzSWQn6Gch/y8AMRlL8I3ZYnb1iE7hlJ
R5Fn8aTENCHGlR78zZf3C1pW7EFN9zP0Wxc3XR7zZMdRxKxrG/mhn/pOQAeE9bmLYuJNXRIn1mo6
8ZyUnNNA2UTOHaReFgVOxVRScRFBpJsuJu3u/AV2Z+mON86k0fjc5T/ZTSC0/F3UziMa2aN2WWOA
JHVNxtot2lm4hwpdv0xP8CusAQpX2Um6kvFm1m6Q52jteXvl6s/PIVIvNZ92X+laBjRiL7r4t26d
NxwqtBtZZnCVLQkJSpdaN5hEgRPzGws9gc4Vxb7Q0e4XHYJI00HU0jIIW5EOwYDKy5ifRKROQq94
XZwCIc516c3hzEI/s4BYCHBXdR3PnybaJe0sIvVomlbco52FuNrMRFUfGC4znC6l5OIlHAkp+0u6
UN+RxUl0H9omctiJQeROE9tEETu8CaaxbaJkydZwd8km4YD/nbK/B8nyiTXcXxbX8OlSW8Dd5RNr
q7uUL6dLYmHFD0srfvzoiu/jWK34sbbg35GFR+VxECxLC3iYW8D90gIeLE0hGbZuO2zdTuNFxdpN
Hat1OZNVTUvAm8B9nvSj78jiJnJirwXeFiZgCnkSqz+K8XRJk7yA9/cwjqP7LijTdq2mzrTJQJ5g
VH3aK7Z8PLs0QnR0aRATjY/h30/w22RaEh0pu/siptAHJ/g2O6j7SROGIDEA4O283kMJJqcGzb7C
igs2UVZow/B60b0LvXZT3D2FYGJkj6IZBHPIcGC6mJjmgaaLOFIXsbZDrlMgXTnhT5U1kKlKcpYx
bsfuvUFgJ8oGW2M3jXZjKtfGvrW7jwasN2nyZucnlCSSKVVjzIQ5wlSckIvxpYeuMeXWcWSeMRb9
yr+KmNJEFylAC7G5YmVWVRdEKPDqCd7dR8Nf99QW+AzvHcxeu2LHbbazA1tcs0vj2pgBBdAYgeee
kVpO8OzgJibOHeMy3xJlLLB4fnf/YPEr3jtY7O7KYhblYha8GKjR6z3enMyenGBnZ/DSo217gxPB
ZPnwIKvoD4wbxnM5+RXfPDxoJcBD8zUdYrK+K+zl+gAQxPNnzHJHmFNWAODyDharwuSXMRXUN1eO
UkFDqYK6yzUqqCNV0FBXQYOlUkEd2DFSb9PUUYNNnQ3HMC1DzMJiYmQJ4TOYrp+Yjp1ltUlVnJ/C
R+cnyuvCNtKqZqY4w6EY6oyEig/CWi1mIw9r/Kk+tvds5EB7hujtvRGicO08UWxtf9PW9stN7LBd
qE2kFv1wqSmJrfm8fZS3ttZMaHHdzVvrukHjLcH1ROoTEid+khpsgc25eKxUy6UYkvutThzNAcqx
gosiga2wJXOPSlxDesCMyy4ZBBwaQB8sQDUKRFsMUEVMK854wPuAaSaQEioOnYCu97aJJlxFGS8x
VPDMmaCR+jmUPw8mTzXzoKqZVyMn9AIS02SwjpvS19IwKKHEcASI3qNj7hXF3tKIzYPhEnqy4aPq
wpxMWPvjJZWObx5EElKyTjMCBqhl3SMBSQkdCGXtKClpR+6j2lGAXTTFgdKQAs0n4sP+7EhW0NMr
yJswyelJ05KeBGRVxSpvDXQfx1CWD7oTzB1E14PWtgVy8u6RSOSH0hf3U8MxC66IRDvH2aC0M5RJ
xoq0M5dsfOq3+gk/yeNvPTibHYS1WkidCHIZ0VsrJwc01A746jI1VwO1ujDwOVtgWB+brFlkBubB
WPS2CU8Ro1BHiVp4qI61PVoCyAXagr6OKSzasjNAiXkwEgWOTaESGGwqoVlsluBP/2T0Li77SGd4
BFWFh+kmJpIOd0laEfbVbwqo0cdQjInG6i3XgYIeBCunyfVe+exKZ5SEZKuU3jCPhAESQjr3z9ik
Qn2/3G+54BPKDV9l5/zvBf97zG2fxVPzyWz5hP+ScYCHwvMseb7FiRy/9+p4CdNJWDXQv83xqZlB
9MXc73nzlG12s5RCMtF8+dV+z/nSFMI1QbqaNz4seePfdoF7jXrdLeV/5953eeYTyi9fYX7HIjNz
flV/YBwv9V73HCdr2Yt6sWSJyphRw0ovdCbdyPCZ2zU2D/yn3PhFL6v/DC+rX+llFRMF/Ro/JWOZ
qvN4KdqCf5MXuRQWWyfMx9mMozHlBRH918mBdrjA1z5lOLI1HbmbwlLbPzxsR9Aeh2ka+zfTVF8L
thKcv2a4FHxVOGmDIbUroTPwZbu+Z5syo1SAW2CXFVMIuPmIn6AQ+qMvSoqwCAfIw9dLCPNCbk4z
/e1eNNyJZILSGzIpt5PHT70pmH5AvJIVulP2uFf8Zvl1XvG5ZpLAHv2xelvRJDleNiIwScQkeSNN
kthUa8T9EhdmLFqx0qzV0zZekDYZIZuSU5CYHyVuHAWBjez7ESGB3c/Qpe4ezE12Bf/g/VLzDiaE
6RCSvU1M1Mrllqu2RD+S/Hm85n4gyCxe4N9aURS/ghMAl655jAkVlWt+uszwpXL6nSzhSDj9zpe4
Gxmrm3iajCznA3KdOCWJ74SUxO7sDKkcGB9OJJ1QYr3roJwsrZNl3hWRWPe3Itf0ecCZSqzxgOdN
T6zTE0SdtfRFwSHSPbdWDG0xIDEJXQFeSKzrD4hldyUeT0TRQdKssl50Ba2GFV0KZp7kJDPR3RLr
wRdsR70I+v91v1ZTsP79vlRiG/pZyz4GedjCQrl0YReaitI6XwIZEjQN8ViPAqiN5wXk3okJMFgT
Y5WQ2HcCfwlA5eMRce+oi2c8nqbamZ7tRuNxFN5CMApJ/gO9PI68KbOA+tqqDBchZ5gbha6TGr2P
3bp6JXqfO0qW+tEkd7TQj/omIuEI1vU4UcTbytoTYIZ8smwjxcQwaQ5iVpljl6fCoSOaxgJ6ZAYq
cWL9MaiL36chfLlXq0nZEGsVk0nggFD/6GYozHOqUopWMP2UvXq41DhN9RZIFdtxSEf3/CKNYsI4
yhhhBY8IraYh8yW+9EDCXxsNfLc0UliW2QL2m7MOb3M4QCvAfgOqKEIJvNqS5YBvRoPcL0vJM8dO
TFl6WAQrxUT5OqeOqHIe6vvwYMTGZQAhFyg27gOAAQDuKKZw2lBHH50t2WePKTT8dkl5YxQefZkH
ZD321tQgcDfFNyGiv6OTe4fqTU+XeFpRYr6GTSkzkcUsz59D5VYByPar3l4B6ooVoMs3nBNDvYar
Kpa8o0DcYyLWGEakP1W4hzFTszYpMcgNbbRKnRv26O4+TIdWjKo4hlnxu0BJGl+zwaH1q5aUkRwJ
VVL6Ynw5ZbpVDNsfmnmR89X4KmYL5rPXezB0cqd+3dsYQOoLDb54Y3PJOOmImMZJSbwpcp7/NPMa
tZe4p7bPtdi+7nKT6Jfl8iePflku/0rRL0dLFVB5tPyJAiqPlmsCKqHgqyXmkH57fw+QFBw8x484
EtGyb4LIvbMz9JbPloMovndij85ZBQ51iP6JsePR1SCaMP/y9iHM8w8P8DcuUbyroe+gCLiRpRUE
gfupnwbAH+eRxOUUxEjyYkdSGw0wX/ejupiXlGXQUCctv7EnTMypeiaOAqIFn7ETQLAJwgMAKGgR
/LnydPh7iI6WNMcDWuXri2g5UyRfH4hYEiFrSO+xCIh1RXVKiHhADsy9vy8lcYSaGuHzQ/zFOJ0y
uYYlWYpQIF66jxbA7Ezp/NdmGAhR+bE5cEADRXtqZujj4+2uKsinazpFtZdyqgWtoJSs8PdlNVC/
tUQrbUbc3qO7RCWKxbdLKnMmM6BZfaqcfbbbpC3Qb2BQc/cJqC89WOyKlO4iru2L4U8fV20KnkC+
zVIFhOVg01QHmx78QYOOICQzrtWIcUJVo4wpGCgGFUNL+bD8GwdBf1l+lyDo98sNgqDfLX9oELRe
px8XBC0+UguC/rT8cUHQnzTN/Y/lM4Og/1j+w4OgP2sayeefSSP5/JhG8tuSeriNjycGj0lR0/UL
2m+0Btc2hWRj5y+LjsV728SJE9IMIifl86RCAn1wPmjZZ1JR3z3GXnr0lN5TYcaBSVtaTai97fih
SDIE31SnCkCDx6EieQePK9BvYcszqAdOVQYRXiXfCGWiDS2ugIBKph2ncryF9Xy1MF2DtLOsKhhj
vxFaxW+IS1X2s4wnMYkqqkn4YqkGueangZZBWixUMWobXNNuFIY8oESGQTGZE7n3wArvEiC2P79J
SDwj8Wt7ynN8FdWdjAUKV63VB44BWX25MwX25POFak4DwjcadDVgVVT3YH+LOl3YCw4ctgxm5kFU
j1iZORHgiOkA5TD39RFejZyUgGWtwoZ/krPYk2phoXvIbyl2kIoYO9vzZzb6zDW1CDIXUNdC+viQ
qhAbAXeEs8mICisHEQTTVPZH8VrnrzNskmcNG/J4v1vfxSPeB6GfRf1nh9iqHuOv6TH+V/eYRPaY
8Ot7zLd/iFbcUzVNZU3j59dUA9rxtevhQdvpWpf4PT2i1cgQQbwuZjVor7xrVior1Moq2aqy8B8r
UqUE+EcqpnGLNMiRFR/RNdo52tRGzSUCkQavyGPmwC/mFD8j4dSKUBSeRFPY/qDXE5EFDWDolotK
+fC0FGkyKR4gNCxPHP0+oSm0LmGbEPJpTcQBvW0sjlhmrRH3Dwy54+AaxSSZRGECmJ0ZEju1rDC2
G7nA23swX95UqSUX3NY9RvdrbN3eJTpdc+kEg82MzvFn2Ja4w+cNGaF5Xhf1O4TTMjTzvC5FfLtm
VjuByeuReQ2gzOhUm+FqNeNGBUDDnHmCUnSPTvsmOlvzkgvjdxp2ii6MwdKQiCxHR2RRRAHqXcBi
iz6sLehNVUFBZUFB30SdtQXRaLRCOdPKcqaw60W+rkZeZUle30TNdennLgxnabAb+yZqrb8t0m5L
19fLB931jizkveH6e/WqR5VVj/oQMbtRAUllAUnfRP5mBbiVBbh9EzmbFTCoLGDQN1F7o+dHlc+P
QKdeV4FFrXZhzJYVXWFcWdiCktckm33PpLKISd9ELsH+kTFbqzbMTuqdOJr5HsRKMRfCcTlrz6ew
dNdl+S5XLkp3jcawkeefOaSnHueguY8dSPFKEzOxifXL0lhNBOzOFhHZNgCykii2pAOAz7938m00
66dYNs4Ky0ZICutGDCeaEKxkNVEUHgXT2GqhKHzPApqslOQWFp/kV5YP+ZWlk1tZCNGWFofoa0tC
cotLRPKrS5uu6LdlQf/GvLMmCplOEx3hnk0lYCObSQCScMilyEZqswrZUviAeQEpw7loPHHclBJZ
pvQMuMj1na3kaJOdLffoJ9/Zco/+AjtbNGfZV+qpuubhI23XRo21iA+qBPHmtly+gxOwHZEpKCYe
zekLYoiOVGolt/GdlMqPS7Qqbix5xWohp0KrdY701Gvq4x6VTKOxvS/nBVLnv/LjF06rw/xQl9fo
YX6g17Wj3Hwhr8CRNhvI879PCjMUrZk6LkxXcFU7zs8acFEd5iYYeYnXUE5E8sJp6GXPaiJufJSZ
dj+w3uEUTIXpkZZE5ehnSqJy9GQSlaO/cxKVo++TROVokyQqRz82icrRfyWJylE5icrRD0yicqQl
UTl6bhKVo3/m/g/UcHiEB0fGsxgyOHrPHkWxvwRXXGALIN8qjSbWvxGNE7b+jW6iNI3G1r8RBBBb
/870JW57v5LzYh2bRp4/I0P3SxNdV+geavpVcxtwhtVd9kEA3qUAVwqpRcMjE62oWs99ObypeFgT
tVQonaQPeWV9oBsoXoK01/kEtxfEid0RNUEr3yrywn7PF1Po8unYp+R2PD56LYZziYqo0pXAMLtZ
EVSa1H2v0YjLa2j6gYuSYqkTyq9WoUmdLZEAgEIWcvghcaB19qOKZ29ZJDwK83DzEp4+LMLHK0r9
sEQrRcUSapQeFQMjrOJJKQyVsMiOotHFhDqlid7NwxyRCR9noaBOuZGPC8IUzi4TCoITbXyEOq2J
Ru+rkZmUR11YQVFSllVwhKZH4NMNlX8YrLoZWHU0BqiPFuutgWJx10f6wLOBBpQBz9eOBPaSR4bD
7GjdeLg/WTMSifRGoxv5HYgFAfXR/Nmfc+TE3/o1N9/yNUqDvTj6GoxzuAbjfAzCYYNVt7bvNfX4
/mdSj++fVI8vN3IknP7sjoTTo78SRPbk72yTnH8fm+RkE5vk7sfaJCf/FZvkrmyTHP5Am+RQm2lv
n2uT3P6DbZKzI3y+1iapsAseN1M2NkmqjJAyY5+wemLH88HiyZsy7tyy/w2vdxf8h0ZpZu0hjbzM
sv/v3r+4BfPh2y2YM7BgeOWARgX5+PLICNFx3rJx1ioi0SM6SLJOBWEgevwdX/CnWTBByYIJqQXj
PGXBhBtYMPFfxHSRAe//v9WSF9MF6OXAeubOYWyGwEKoKA3ZR0h+Q05laIWK1VAfxmGOp1Af0qHO
TlhtO91T28nP2U5Kke78nRWf5vdRfDqbKD6tH6v4dP4rik+rrPi0f6Di09YUn+5zFZ/uP1jxWYJ1
zX0OR0e4eWQ06WxB1/ZMLja2S8I09l1bn8H21LT1f/6zl5no6kmgOc2hcHS0FmzxIe/L6PhPemZo
3R9Z5pdf78sIhS8jM9HbIxwZGkj6LZAPyp4DmlKI981VQNKtGPf6Ams7CCIYNgyln9b9hJLstP07
QEerdobHHCxEBNMUnAnx3kH4mojpKYTpCc5H1JQ+SF/7tZrBWHt4wUZkPjxEjbrol35yTGkCLiYx
cTwYQH0JxIx0BuuoVuNjdBJHaQS3SIJG1nMjSsPZY09sHYqZsG+bDadUiUZkaWxCkYnSnX3TiulE
bURAsiV6raHnADDRnonijNQHAaRACTGNQv69IPobn3IDzX0ao3nhs4h9nxIMXPp6s0SQcLrCsbC9
d5Dc+0AMw2XhmCvXSYiYGSx6wJGl7IBLyvIHhY91ZDMm9G3akHY0eCoEcKfRe7LQeCgdvQUM6Zrx
E8Np1OkYPh8YJtrdMxv27p4t6Ekdyv/gJ7+HiTNQs6msyPY+pbht1HtOH8t5SH45MLvxGjPWsy3S
c/poey9zAYG5EoVkTCJs1rDKJQJE3E9OCJmwr9LF4MOM6KQjOH3AfDGPVXfjKmVqsk6ob4kPuFDF
0u83gP2BkxzWk8B3ibGHdvdN6CVhL5QcqowgqlHv+VVSqq60/2il455fWWlSn4bAGh5Bb/4oe7P8
FECH0g9JMWkAtDxJ46mbRrEYJcCVXYmYb2jj1SoOYDMjdT/piENMXcxvioOpOI8pgv06S2PmsX7O
i1Nn2OB8XyjvYlQqj01lkAuE8xQTGLfhv/bF58WNcDe2wgymHKDkHJKYFf6lUPj7o9Kky0d3qh6l
ANvX+w8PKirqwhkQdZU3Ya9/wDqP+L4DMe+meO8gfU2oPhiDqqFB0JXoQZWyUvkNUHt/TBJW83eF
ml86jM/MoXPWxyM6Z705onPWl6PCnFUxY/X6hRmL8BlLzEv0QFbOkqEd+RWnEVBKT71bwFkXzlIF
nS+vlhzLXJUEj3xu7IkO2+tLsYXMNZuyWV4jGNUwY1r/Shjtl+S0AF5sre/bmiM8UN3IYVI2xKoI
lIf2ixXJbNqpyP3WBQHN9wC679F0MKBNDmZH3fE8w2ahynAzO544MeUxNZFf7O/qoRtajnroZpGS
Nn19/tw5L9w8YMt04RO3Y8r2SBRWLL+UELPRq9frIarX61Hfor/F4yn+lY9v5vTmWSvpnRkFJyet
kM0wnwp9b+6sGZK87Q7IgclsKKNerzMGPmmymYhoVp3sNeeQnFIGEGVEe6jFl+0/CtU4PNSX7Y5D
h8BbNgR+P6Kkoe/gT4I/5QaEaxD4zDUbBCn2hbYAIU3swwK2IyI6JsF7B+R1KvQoIvSoGKc9UhxY
cWFg5ZsohlyesU6VGJvFF8WlF6U4hhc5bB2gVlRGubkPcmvsehVEPRmbghy8bOQG+QQp9SQaE2iA
Yi8Diku1chPTbFCm32kuMHeqxjhsuGLojRHvZzDF1uv1JNfqBjHVXMB2kEJ9B4kW5tNtsIMUFl3S
8+UGjDZHeKqDgrfiK1/s4L0D57UvXuwondnvOf2DsBf1cVx3gygkIICPfjoySC+i1KkroaR3AscP
1cwnrV3Ns0Dq0dhPMbABos+0pyvuOjKfRHGa4D+ODJPeBjf9phlYL569qXvh0tyA32oM/fZN29Tk
Sm23p1fP/ZTDmDjfukFNrv6UDerwSu0hh1c/0R5yePXUHnJ8pS25xRaJblF4ZaySkTMhTOBp7EzI
MvI9m8asqXL8q7+xd9C5+i7eQf9qA+9gdPVDvYN6nX6cd1B8pOYdTK5+nHcwuVLeQffqmd5B9+qf
6x0MroBk/GaqaMRPRzp9uODhBRAhJ9j1KaMk/JIQQb4VFzhJeiGnnESlGHWRO03SaMwCywPkkiBI
rCkQfiYiMy+bxD1IqDrIcKpvlk1g63Gs0ZFDvgvOO7rXGOPYmojzE3m+VjPGeGKica025ifNMR5T
2jv+sc6Vwf5biURVJEOeiYiJprXatJf22b8UBpOY5oEgc4arqsypoNLjhbEy8g9JY4832+2VsaoS
KKc0Ix798PHmAmbmj0UKki7mtxlQn+f0CgfG5yMI7vRgydfjOWxk84gQ+ksFgUCoFLzbRjYjUKY1
sftoAEX4nt1HE/iVpHF0B3cNfEolzLhrocYQmeV78MdPJGEyY/eHQsWZIzL0Q/3EyTRmBGfauVMn
gW6NbC47eJEuHXgJVGksKqeUgpGmFIx+JqVg9KRSMLzaBFh2ffWTA8uur/5KwLLZ31mDWnwfDWq2
iQZ182M1qNl/RYO6KWtQ8x+oQc01DeriuRrUxT9Ygzq+woyeWXjE5LqeynU9RGxRpGSa8IMtzz6C
JdJyGEV3hGBxVKglusa7VO2yAiTtN9CbfM/yACQ1wPRlJ7R3eOchLPKw6Gt5Wgj+ddrjyQWJ2W+I
lBviBiRSb1irx+uY/yor0j5O1JtV2I0CSIjG0t3bdkkF8bK1UKvpLVrx+p2GabyQ9PhUbdGg4aLT
rpJRdE+zCSVWqssoVOG/nKhcgNLPKJO2ZMSUBKUNocXJnPEBlHvlk/ujaC5qvLgyFlTFS9nuORuE
pA7CQFKLlGk4mROal0HPa8doxs+nTMaQmCcI4EszRvW5dhP99zvxZj+jmZAksFwKRpNFipwgOIfg
1eY0DEnA98AFczXBvzYh5R/3LVUkZUljfzgkMeID00SrXDxwnptGCyKOEFUYZRIOqpwBvC9EAR5e
GSHyrkw0xcmt4SOGiHtPFgggdJATy72FDeYBDm4Np3h5U+akVNf3+RK1ve3WapDEg2+7pnQDseFC
PbFsYMIamCH9LB/5Cc9DJQczsN7BD0gb4XtAYeugCXyXgwZXa2v4LkSjK4NSbCunzO6LFWnU5xn7
u+B/oVPxn7S1M7uSwXxAW3VX9/AkjhEgQjtprqmmVBL5VvLEOdaGA3pYgTOLr9AE1jCtu51eaYkD
Zn40TS5lt+uCMw5NVF/Tu2SMShYApBLMWQCWg0oWgBWhggVA+Y5kURDI7eonWDx4AF1uCsR2nG6+
56FBiUJoe99EE7ztoTFejI0YlSRsQ7bRNZQzfDFy8/RArmGiARScoR5wswyfeDzIPx6wx/fg8WD9
dHB/hfSJcKJPhBWxdLMxWkkptjxrjG64vD0lZtndfUSEoKHPjsvSHRZbYJQhMY/6mNCt+9iK2UhU
foWtGFMrO+yr7eLi9Dq33htxfY7S+hwG5IIeLlBaX1AjHZhS2DIF59UhSvUDSJQb3et3qkOU6geQ
TpYxJsBdnKglFT8IKKFVNUzr8x39jb+80iuc1hc7ogx6pVz3vccrvLe+lnv56mWyjxDqAZE9Hvvl
Af0urGatuLzKjVV/zfJhVk0Sn+4AUQbZ/UK2fmaUKpKvxdrUcaLpnTkWML7IrOvrp1eAxmb+/jWT
Dk9reX6FHyULoSB9HwGE38mw2O9fxcQJmOCbPhijKARSJyd4K55jnpY/YNmjvz5ZTpahuyu8Ksxf
/7u3VzGD7f9bP80nMZvApiBTA+z/+b978D+b6VWQ4KY0V9rONI3sgj/ITmPfAbCejZTPha4TqS21
NeovsZXniEZF0+XM/p/BYGDraWG0JuqcGZAcid0ZsorG+mt8VlunorJRcWJPKsTilmQSyDpPCx8q
nISELbcETa5MNAbOFpoP+vwQAhp4l0PhuT7tKu1P+d+IUi3kC6nWzS7k9HGpHcFRqVpSqkTgx72c
P45wPijm/xxV+D/H7NNM1FO1miJekfzLPaS9RZQ8QmPK4XXNFLsApDNkUC3n4WH7Gv4vc0JvpyV6
fj46ZpxBZgGe2BucY6hSUwMoi1IheTYr5/EVeqQpmGoNZwpaV85KESfZBKlp08xY4fo57aGkDn8e
adRc06tp8Fq0TMU0qnHw3JTX25MrqvFlaEL1xAEqDqP1/fyZA6dqDPLhmR+yhdbOfS+EEegZlqSu
V2Xf5v3WcU68fuGzHDVOIuG3TnLjxC0ZjQHVILV5mNIQ8onak3PyQM7JkwyfXxkuSmBmiHO2XYg/
Uw/KnlnBaipgnaEFeOcRA/uOnbnueR3DjCJ2INA1nv4yRDO8mlvgEBukaGEl9TSacKkmeRK4hK/X
GVrwegHNlNCJElk35Ar75DNdhiKTmkpsHwSyGA93WdLrrQX+bMS9aGe/zz5KuUYWGgP5GC/k/kUe
N7IwaTm9GzTv48UBf/ZGp2U1pvhGUmDOc1fGeC6y10Jixy0/TFJIfhYNGAiqVtPSrb5ib7pAx32c
iDddFN50Id90XHjTMc+nOcYOzcFI3JQteI2ptccSImJjtDs1X3q/GK9ejsydAbrE1y+jnQk6xdNf
Ri89dILH9O857rGshi5ipvRU2e+asyNlPbjcH/voDpr8fuf0l1doYV3uXP/yKkOH9Bwc6xreqa7P
nfB+IXqWcYpOpEZ3neU9DUzXPGS6pqouZGzJwSOsc1Rw7Fh3GdKY5iUcmTSMPTS9qnNXmmkQJIjz
+qa1ytirlCjyLowZ0r0i1qGucka1mrHAiwqLewW+j/kuYPukHHaJpvKaVIakvthNX17vGMPd/d3U
fHmty1B/VhenXkxRsrlncu97XN7Ab87kUBSquqXoSGP3V3wE7RhmXm4hyM1ECzW9nmnKFo2huLti
boUQluAY9JwUjde7FYa37G7WYW1msdrUECsFNIr1KKaPEJnS68MVPrs6+HBV57M5LGjYZlq/TYdX
50phnZrPBgixEr8V6tT5cyBCrSuFy8W2F6Up8YQj2X619b/2gbzmJCPt2n+2/q25wNtXOYyewKsS
sfJA+lsdMpoKxKi2xHavjBXNxsrcZRbBoPzTbKBAYnflJz7NcumEQ9AeJClojG0WemxzRjofzdi9
LS+xnMzk+De+Y63rfAxB5zQaosJprsKanBIjZuWQhweZ1+mAQ//4wxHL+kg/je+p+XVIRgA+APGI
L3KyxyI7MsXZxuZBaLShl/um9L/voaP6bTJPTE68rSla/x9577bdNo61i97/TyGn0y4yhmhJcRyH
DsOROAelnVMlcdxdsmLSImSzQpEqErKtSBpjXa2xb/fhGfaD9ZPsMScOBChKdqqqa/9rrBtbBEEc
J4CJefhmgATV5PwMwqY2llKazbuzHKRmUhbci31Z5o1FChRQ9W28sF08/rUSJolZgGKSBVWLsoyW
aUXywWbeE2EWmeHIMZR/5t7sTlO2BWXqd1yIzJBkORhPMieJU/oJw25oDSouIfLhnTCPw+ZFHEU0
vQP3wgk1RIdGP6GcQCBH5komHbQarUZnr7GnNVerh38kL4TBZZhbZmPtQLC5z0OI6Z2HU/f1F0tr
tS3eAzjPADzsMXpBYLD1Qcd5EJDrthu08UfHDTq78GvadoOdgEw78A/2Ur1txThMf3QQooypMVho
ODZlf1dMtPgeVqlJf3z7UmNXzhIQ89mEsaxsJNwDCxrdMbDfzQbKL6SYFq6wklT4li9zaMROlkdF
oz0uU7b72ugVtvWsvK7NfkdRC4Jtgjnp64E0v3+xyg+o1k3mBSquX0q07e8Nj3mcwybIB4EHRo7B
C48nqGM5LHdAccHBfTBb2jULUkzyYTig7sALBmEeBfpWmSy4TfHES4XumkujXHkvThck8mJlY7R/
8zbVE9M4zDnasPYEu9NgEZDIN1OvYnYh9wpQoEWbm5zdRVDjSmZBHvwd5GZ9eco8y7KEhqnt/JrF
qRU0AokoPdFo5ObtcJzA2ijnbmGTSNtyPn4hxqGVixMrLs+nUBxLddNhjj5usAbdPNPNXKmMFi9u
RtQG3dTIsh2WvQFO7yAsqIX+jEiR2vn8RS9Hfu77QVBfhCNCKFvbva9h83ur+ai/tX1OAt15pWs0
rfzi1JoU0TzKkiTMC38ejrJJyubYIPvudgyFaJmh1IaecnJ2ctU7uWr2722foxxdOJA5LDsCBpY3
UJBeLwjHMdhF5WC4NcK/kyKCwNcT+H1+NhaWUGXYa2p21faZC442Dkz3U2a1bLOmBbzj7nZt24yO
eySYHn56fflSxp7Z2EghKpLnQSp1rl/GNInAP4GndLVEnQM6rsy2p1C553N8FLdB8TSmObgty0cu
6x5MtWl/ZbSQSfGSWN2Bcr1Ub+riVir3sUY27AXAzwQkuA5IMA36YFc04U47nuep7xKetK8Vo0VH
NHrpCwKEHvxda/pvJkd5DKfnMMtHIbN9+culfOt9iU/6kGxuHsIHoIS3fZXqygHUgu398AiR3HtV
WpDlPhf0K9sL/ig4Q+pAWHJaOEOwpEO2cgizDmNVLmP+Ca5GTS2LQjtMtH2ZQyaq1iB3LispfUU3
N5E2Y4hYKVvW/SL9tZ99KR0+5WYQ28JZu6Y0X6b1Wn3VFCMNO4W7l1LArGxUCI3ysTXusy9WaPvw
XekErEUiVLZBwqvpNrNTGXQM62qOfD6fiyH3PI+PaCkK4ywmjDDnxOAXyCl9/yUTyhkSP275qRtr
Lf1npaU6gUjaQoLOVU0xXDaQeklKck6pC041XflGZX4HVyngcwhVdgm+c55nk/HbLAKXvliaAKdP
Wn5wdxYzK95OiSJ9e9GweCoxFg3IBbBqO3C1JtXnKaMbahaI2C5wciy4D0+wdMNKPdwiAhzzoG6L
kfNbLhMhgVEhkVRKKcyxfZnmO7oatXJK5ra2wwQGsem2Iz9/AXgsfvEkePS7DEyJgOs6QJuelAsx
3FxJyoAXW5TXwnjVFTPEK+JbuOxI2tSkRD1BmoT1bfAWjHXvUT4PInKYU2Q5s9BG1HvyFmYLaYLV
0oRvcXdx0VdlQWLbvt+ym+Zbar51ra6VChr0/WZ7Gz7oWtRMAp/Gdze1InMAImpAlUyMU8QyjUue
k7p0C0VY4RkYJi5Iy3ZbZOD9ApfjzPZ9S8wwn8qCWSDI4af7v2iYo6mfvX/rK7SQogQ8FnSgK6X0
28RAr/RmtlGU2uQ0X5YzWNjk9l8jL6l9nUm6yeVIgumOgwm+/y8YIfhJQu8f+BvIKbg7q04y7N64
7YF5jXrJp2MR/PDQVS97vd97G5XljcL8G5jic359BoYi53g/xhh8JPRrbmOryuIK3zIaRo0Y46Yi
ODNdlvFPPs4FXvJItnzbu1u3lwi7ALV55Hzz4JOY4zEqXu2rDaVmJ+n1grfhdUBi5/T0LLt+G173
SS/4+b5K+fk+JLylUQy9ktnwEXO2y5xtzBlr2eK03//Tl0765yydAvyEl1b6H1pPIV9PPQrmht6T
/5YkL6RLUdHkX/ADpHkGizVYmN3/wcVAf+zr6jqI0eXb4BSY5Cb63M/SXBe0+59bF0DBVyGj+TBM
ktcFl41cUn/F8J3nlKZ2sGp0cxrZwf+yC6H48ZXQ+29J++Efo29Wc29hS/eWP7wIDNLjGPcrV8UP
T9L/r5tMSicsD5M/us8EHydpGqfnDZZBSIs/d8BfpNGa4e5XtiDWNf1NGkpbygj/GadWavqIp7Bt
pYOLLIeAvC4l5+HYZd6eAij12h2pjENkTq5HALAEUJvM+AalKkpJzG0immkzl2HFM/M9F7hiBhFU
nBRgk0+HbMuiDso7m/xZlbHdIQOUk42bTH1HEo86XDi8xcjEGzzxUhJ5yWMvI0ORO20yMva0SuUX
TUZG3mQ+34g2N4dPvLEfhGfZJQ3c4Iwm2VVALrwR3Kp4qj9w5fV/htaFrGsVJCWhTVC2B0J19Okc
w5sLNOpYoOY173p7JO56uyTsenm3GXdJBklF1+vstMig693vtEjS9cCmcNL1HnRaJOp6D3dbZNj1
2nstMu56nT0ywr8XXW+HnOPPUyiAXHa9h2QKxZ/Bq+uu12mRT12vudMiB12vvUuuul67TT53vb0O
edH1Hu2S512v3SLvu979PfKt6+3skadQwK9Q1Fv85l3Xe9ghH6CdL+HPa2gJedP1HuySj13v/g75
Dg0uVYjPuqWb0IbuttdgSslKr8dJlmuX6ElXE+J2Id5jITQDlJRRYlxG8gzMuCXS7D+fXseFMIhO
SZ5dHYAUFpQ74mCl/rjrtpTYw1fUN+gS9btNcvveqLsVbz3atd3UT7pbsTvobmm+iN1qm7imgOmN
S9c0Li8bFyvlRLiQ4CbPulaoCRKzDXG3DxFVCRQYfuauGZfbVm2IdbtL7ly6IY5C31KoX5ub9Emr
9PEyv5P+ZEKOrXyRIFu1KGZvbrKyKFaDInMMfeVjTMv2MzV0YOEbRjT/mF0Vbu611IQ/6+K2prUu
Llun9epd+E60C4SEsimx4LKOuuCrYlCqP+m6RdfYwVoE9yvtOQeDrmyrIIlX3DvtbmX3zrtb2vtB
s23fu+juVzflkCTazLzqar7qBELjPcVtGbRoqFrWTgE3LaXn5BqGgkzdGAdkSb0JJa1QcA7CnNEi
DtMmYLY0WTz4xk8koe7EVEEbJMpGcRqm7FlYUND0usEojiJQo+ttJdduTZzvXHjWIRQTtFWbJZkn
dtXMQB79SJROMiS1dVo+7FqzYZwX7DNGDURTRPzJFL+dVkaHT7SUGoliUQ5NMu/Ghu//KYNbN5Sg
MkOfd20sQTFI/QAxWwN8Yn7AFYdy5K/dDLpmcM+hMUa/dXUVgLb5aUinrMQ2kwhtj73Up26KAvLg
3//j/w24GkkiM6bNNhc8vgAf+gVk0LQOXQ0aUZS33RFoVGA0wwYXT5PE2j4ptrbP7b5mlQLybFtD
T2Pg6cAUmiqixYnffqrJ3lBkqMRqTWY/Vk+0yWw/danNTccGNE5KVVav7FKudYjIZJGIvjCW3dek
98awUiGEJfmNI7yRApCXHOTc76V99x9dK7XlKOCE5bZd1fRq8viuNRuF12BcwfHs3NI9EdZfivSu
b4+1NrCCsFNcbWpNsMqa+BecUbRO4vifJH2NwGPoi3ZNyBRCGi3Vnkiitq2LzoSJz2xZOJbp8mn9
C8GsR1MX1G0tvwW2KR24pVzra4wuCIIXNu/O2CKwTRb8l66u2UM0QMP6Coi6J/Wj/QqWIpeDC0JQ
enBbJ7yfjfIb+qm0rdGeWjHNt11ddte1uLFelcG6BtYB9k70/lFodPN56sv1ttF2df2MsMKbIr/x
IUviwRQNGZAj0XYDemTNwsswTsBTXZh1KvFIhZmBU11vSsz1D+l8Hvum+mGjLc5str5J6BwB7QKT
scBAig215s7n+MTyCQAv08CsJfN+6VoM1Ftgni0Xb8fMpHEEiH2nNjXRbvy4uPdr97H3c9fKCDWR
f4sn3kG3bB+UOPCq6gW6JQ39SMvezhQih+Afpe2Kt7O5OXjiXWncNTsydXg/dy1BqaTE/Kzfu/Lt
X7vGhfEHJnQtdwp2JDAtdRlCnQwyRQaZXzq45JubG6Fk4TIxBzhRMR9rtct2dIvGQTlPHb2bdPtd
1658ONA/TLxCwRCTydJGjwdLoq9BYPsAhccr5CqXQEx/n8D+Av7PRS9Rur2oF5U4xxueN9zcjDjC
59AmkYYOd2RsAb+y3i/UwnpR3GHRe9avTJVk601iCKncIvp7bXOJjzTjhadluWKE7j1VdqakRZ7q
Zfj+U9ZraUWFelGK/y7xfH21vaGLzsv4mkbWfd1UxvFbW3e3TbOc7Gh597uYjjPYXa+bFL1Jp03q
TLVvigrpizJQ3lq9owCXlz/2WvN5+tjTbj38GFUilDZJt5WymxvAb8kW2Pdibu4OKbwt92INhndw
ZMpolj5Plz5Ptc+TI005Lej0vjRbDvYlP4InXKpr0mjPypvtLbUf/V3+6vt+SkJ8v9U2k82NIU5B
R3kEIhwQx+Cv0N7ugHA2l3UyrLM4AiXSmhoB+SXvgzaWGzXUfVtpjf5JiLJznMLQ7Hzm9YK3jbuz
8MgKnWt7IX9O7UXQL7lciQBj6m1jgLDRFfj7GV+Awc+8HFoWiUTGf6ZlaooVSXOTvMe22v39cHNT
lvNmRdNgDGWeX4DxKg37UIg0OVKG2L3gTPBOAQlYmJ9TBoBcWU4HYQE/x0mYBn3NvDs6qlpehTkN
pWUVliR+F+Mw/2YkQIwcQFemoXamD/UCJ0fc3N0p6ChMWTz4mCUUlLA5/jfW77hC/I2XzBoeoWhg
Q1qnBEIuG0iTaAgcCs5vCf2EgtvPOUhChG2G3gOVgN0DycWynQ4RPXLf3mB1ojN1o3LRwVjiZyDN
KC2e0UQkS+IoEGhT6s0az4NqLu6DMJ/jiMjMD8AVQYs9faQAzjbaGjiYGFgCJrVqdHM/1XeCktdN
35MZOig+PwJjiB7jyoI+hPDEi14cIXsrdAilIj0teVffz1HFngMP7G5Aw+ZzOYmoBLqp8tLoKP+9
9Wq4YUea7ChWKjIQHopYS8KDKBeXilIOF2/lpPDCLaqsNR57LT94e3cWL8jdWbjo3p1liy93ZwX8
ihe/BC7ze+p9sQhI8OXuLNxK4dfP6rPG3Vm8lfLfAQmglKbMkqks/Bf/9oso7ZegLzaAwHZ7WktE
MTKvWVyBxTVT1agub4DWKMzCf/Fv9Zo02LMj/QovEW9S758Ut0CS819okaaxU5jI5fWwR1ffCGE/
XCs3Nphfr9MkRc3LN2HByAAqNd+gPsomic6NLWX6KASJpI1ulhWkHp832K8k89TtxI1J5GWAcbEV
kqGXbk3I2BuI66E6F3dJvN0h4XYHPFKzP1kte27eslW/mmdh3kQUngYuHYHq4QsIR7AYN/xjiiXV
rPD0qC18kKUpRUx/YnqCqGbndEjBJpeim4lyClnn9NEml1gmjx6M8RibxSBM4vS8KbElr9tuuhVv
3QeXkFJthCnD5n0b/EMi8A6pqDbHIbuAy7urbQShvhFkciOQzrsxyEpAurCwubf26ObWVRRuU7lO
tDEUiE86GoXuHhjrDo4KHkxAERUVl8yBEuwkpAR8nsgZiYzBHVb9RsdLfqMj3evyAr1Nz4WL7KkY
lUty7U7J1D0DzPZrcM3+BOsu9p1r35/a5EA8TX3/zCZX4qks1vcvbPJZJJdd9f3QJi9EMh8Z2Mjh
GLxChvsz/n2hsd3K/uE5fJbAmuauj2j2apP3lWRtnZNv3vMnLf+su91xW+Sp9/zx+2ZbPv7qfdt+
Qd56T7dfkHfeVfMz+eB92rpqvtvuEEq9D83P5CW4tX4iU/dgQV7j760r/sQoPH6Ah60XC5LiI6Xy
OadecmT1BkfWS5JS8qtNBkfWa8LkT0bJa/IWf6aUvCRv7T657NY4JQlyhjnQVd4Craig6MXTuDtj
wGEtAimAjNycSvpDgvlI04gitl1wTrMRhThgH3I6iAs035BLGwOj6pR9ZpwAwnOMnwAMSQEuW+/C
d+IsYEgQ1JnytFik8a3VlwgW+C4U7yQRyHMB3yL33UMoUxL2HcASmFY1SXaVQHoZ+BkVXhCoqC/C
4E9D+BMpTjFOYmYFJy04WfulJz4t7W0lQb3hRhUZHDCrc+EZJLIWSsw72NzcqNjC1AtNxYwKM5hb
KVk06Wi6FaN7db4Vgoa8zpiCLdsg6HU2eZNW2XDe9LUU6167025ZSFLZJ69NauJTUzFzlzaakpQl
t6FRmaQvHphNDxYk7u8gzK651C/tKOhjyYVlnT2wKGdKD9B5YC8cxwlUlKC12h5hFt4cZ3HKVk8i
h/RZMYUwfc09wxlVg9807m7czqcQMvpiPrf0ywvghCE1Fp7nbbT8IEySwF2do+3zdS/ap9V6YMpZ
aEXVAnLIUnDdRe5cXCCkEFuJKctCr9YXqiLo5Q2AJJXkAqXnsvR9Jj0BLPa4BVtHWLyj5yEc8N5G
y+UJWaql6SDLMy07oCOZmd2Ntj7yn//c5j4RzZX8CDR3dR9+oXl2c+MVb8Mf4aNKJ14cSaNEfnfW
RLUAgs1DHqfqUpyXsn/uSIKzuOF5bbjaSV+IsxBMBcrnUuj7LMwDUBSkek8h5pzWdg0n7KjO/48i
c32TzZZLn7T+CJ9dtuJ9RT4I+uZ6myt1PUSbCD/Ywkuom2uR5FcPNwq8zZFGEcDtBtV4ExcsO8/D
UTCf56YSIvY+gewAPfXRpS5DyQj+pmmEu1QRGIoHfAcbhal8CL2DI25TIaF0QRUbPvY+aFqFp0ea
OqnWNgY2HEkHn+LzlLv8CnxTwXGGQo1diAv5wOtaMZy5/6RWxnf/Cfwu+O8Ifof89xB5CXUmDCQN
bfQSMiEABHlLFqIx9t4fWQPuYDDyBo9RRSRogpaS34QkW+CVXV44ecptzgpOhHBpw/7/0JE/kpp/
bg1Art2RT5svuy7betklU3eyNdTP//GCu1tdlC2fkMnWEMCNVMt5yp/Z8pGvtLnrz7xkK0K2ZeSf
b73uuhfNl12z8SU0lSnYQp8zMXdcdiW4Bs4TcCGU4b3HEQtMSIslB6x02QHLV2lcaxx6sR+XUiih
ShZuXdwRjymlLdPFVYbnY8idHvdL+acQgWWPQaKQaV1/axxANeKxoOLJ/LT5S6v56LTZB7/jpn6e
v8OiNNEgmFnK6ztc2Avf7/VtqRhPpUgcxPqgwvd9i/nBdeAG0wC4+yUuW5oViBRpXCB5ulplS2zX
WLrPfkzYUCJQxHhsCJ/+YKexEyy4f1AOQxbDn1S5/4CNjxdcB5rBwOt3eNuCzSgGvxe35tWUv9Lp
80NJn70+V1PKTaOMCFI5DikX9M84mvbzI6ttAwBdcHo6FnmEsZcbqATE2tRO0ZpSmqqYVGRSxagE
WQywCjVFtGQJ32meaV9zgfzCJlQxJErYPo5p4E8ZWq1IEwdZJMr7teWIwjnn9HQcU36Jx/qUnyu+
wGUDpuz49E64BGvfiGaZXxn5RBEg0rRtt6IFeAzMTOnYiboCGArzIKYrD+LyDYrP9ATpJGqkaRqU
mvRqmWVyu9Va0Y5P9Z/WZagWgpPV65djokvo9UmDJJibVLhvKk0FgL8qdBrf0IcMj6zU9qUewxVo
r2K6UumjIEsU6BAu0wx6lP84/2UiUr80r0KGskfX/ugjbqQr5ZYBFESHhW4mZI4M0/dCpb0CqfeR
DgKgX/GhhjB/BcJG8E1GHK4YgW5aHOamxTFuWhzjpr3KB4Jl44DMBIZi0Po7bHnZmHvr5vj7/Tgc
xGzqOu1OxevA/LbdWvd1C/2ZYnT0c00wg9caf4f8K1uUJm/los7L82AUXoNx7lqTYpnJ9tVPd1dX
JLRLZ4U9wxLFRrUCGFWxvnIXZrrtX9divVS4vsAG0Of+wNp7WvPeVrf/2DD1hU1fGvLcVARp17BS
Sy4wCdovn2WITiM8VRAKSiU38+yqOQA55h1XxtxZLDn1MV21X9tpEsLhp7qyQ1QHYns7u9dutewF
UAVCUQFrJ3CoxOpv2USkI5N+xw0Xt/EYq3QElE1P4DanzjH9LJIjUKz1AlpRetVvbAXndZM7jl5k
nTPOKkCBPioslytVqsmFwSa8ObIk3iA4JgphgQGOjXITArLPJfR6/ipeBTAv4T0EHji3YIDQLA53
7HHi4oBrc2hkz3JenJjNhcTyEFnPKXsGeps4PT9IYAMDryAM96uyDJKsoAWzAueChmwUjpvneRw1
xyFACdr+yiIMG/oQopWMYeUoW/o4ta7iNMqunDhNJbJj6HN/IN9fegdW97VfchhZ+JR7+pjfdoXL
UVJpDnj1QHs4zB3/8rGXzecxvnriFfCTZeMn3gB+YbMee0ntiE68dOU4RF7F5yo2/Kuk8moi5eL8
ljzhMvRF6X0lM9Z0nX+yNGILgD/DkxZ4AuiV53kR/kBmUDoyYap6Qv4hG2MizBl1IwhaQPs4VJIm
34TTbMK46sygyxbJPXwUzRkAgmyiQIxfAtYVRIpKPZEhp79NaMEqOWJ7sQ9RqEWmMIoQL/JNXDCa
0hxArDl6T74mTzHIMwhcl0NcKmlBys+uj/j5+7OC5pc0N4PG06vKayu3DUCY0Hcy/sqSy8QmakFu
bmrvVapNbjMqoQ+InUIZW3Y/p6Pskt44ArXZjEFYwEyKJpO4r+B5o2yAUb2eBJOgDvLD515wKUdF
Bre3FIhj4fL0Fia1OJMXJ8BnBNyRM9DOkQEVYKIfspyFiW3pZ8sNrpMNufko9+Q7AADRVGR7x039
kog5OqhwYVaf8PMnvO35s95zGSyeeJyOH/MBrXor/8Ag/IVOtMCrwTtkIf+gZ77gHX/HWFWPaHE6
i5L6AqyCSOp1zrJItwX9uIKhXXPq9kARWf8q82IwklyzA4qTgYT8P661GLFwhL0yc4ZJyN7yW7Nx
9UDFCisVK3WuAlyuUpim8evYTzoas2mzQJt3zYP5XdbAQHPxQK4qHi2tcIKFbVhNxykwxYVxemJC
czCft2/DIdbwDLd11Nc/1blnmQ6c8yhOm/xcvAMuS+fdxfg6IFom7kGIebV8pzwflPyZjsYJ2K1n
yWSUFiC2TKGbe3vja9IYhddgGsNgA2/kdExDZqFnlC5iWJCG+GinBR+1h7ltm6XjrSdQBbClL7n8
q75rtiiyPu9SD23SAGGsHWj3iB5buuDG3goeenlar2uBRI0baJ6l5/q9OkaGOV2IbdMmBrVnog2F
l0k5QSbkBBO832RyHfj+gETeL9SyJs2BvZ2QFth7DEFtM6ln1skYbkIxWL4VC7dxdzZcBGTkxUdW
BFEAeKvuzjIpVSXnHgVpCD8UXYqxkS6Itv25IyK3enDsLTczAL1U+xFElFi+EhrbMnb1jjsmNVQO
gUQAE/ZZMskREpYvfR/Cj3qed8GNCwAFKX2ZDSYFhAPMLdCjCwbjM9oGg7ld+iFDGM8DZDKwsHBl
YSIvDyoGkY/Xl8kDja0rkp+58ei87lgZLQgLz1Cw57YW5EJdrbiwW6d/FODeeKGTX6Dn2SDLU0BE
rFAbNfy+zkzxj4IA5ORAxA/08yKZJjp6c6Qw5N1sQTLoeA3K6XftzCnBO0pYXOncnNc4737/UnMW
CnRYHlSjUQGd5eKuhYLdfda1cpBYqVq0NhhYrHWqPAXpyrWZCp08p8U4SwuEhPU2WtKZB+OUcT/1
EJJlnZmU9QmlaCHuJ4OFsJ3DehNezGThfU4R3hENL/3EEcX46ocv0H2HXlKiIcqzcaOYzzcKRCaf
zwthmi5mkIzVF9J9YPz7T00En2+klEZFI2SNhIYFa2QpbYg2wdkZD62ktFPXhD9L1X4/Imog1ATI
EYzqgLpfa1+IobOrVYrVcKvquPe98q9vl81QrvgyMnrZsIW9vpEf6xsJe/0IHO4HJOrCLjyB7TsR
xw6PwpLU2eWTUyM9y2OJRUQuvQ9MdJ2c2mTqld6Oia6VvtR9yy4WNjnzapwUR6T2U96HagnXXvoD
JazyipvK0ld5xZ1V6/3ksSMLVN0jMMx8q7p/DpaZ7/THz97nI2tChmCEuWQUMlQtLY1CPitThYOF
TZ5731Z/JFqt53/vPfeveIXuzVY35JsX+h+gJ0Pywv/MdasTtM976iXkV2/IsJdDm7z1TFCObwqw
u9YC4cbhXkPX73gEXneyIB+0AHAqOlNNqDcu+w9qgjRttGU4pHYH53dMc65PmY3FgQu39EKYYpLv
/EjcaS0WYJTKHSaqStGL7JLmzbNzuzTkZHmYFtyI2DS9bi3IS+VDNCzdU+XW+NpDXOeNF2DietS1
3pKoFgkjpZ4cc0RZAZNXdRUYdgmjzZRqzkcxLbU2UiPR3CkBxIM4LeKIPhMQ74JDqHQXrAiaEMo5
zKd2QIZZylBW1u7g72M+8xB9r8beYCE0UFRzown1VmGcIbf5qCWnqLXUvDd0yP7TjYM98Y2XOGKN
s4T6MbX0Z9uVxgLUS5xpmS+EfNPlfAW9XXkD6l36BXXfkAR+CS16RsmEehuXm5tTf0D99q675w6o
v+e2SES9hPo7bosMqTfjwlIXcr7XldQl8M6Eku9d251QHppxdcaIkjdd240oyXn8Mpmz3DH8N10h
X9qoe6uKyrrkY9d2s+6CjCmw9L/yvZKSFzb56IFKP/dnAuZqSBdKoJpTolIFqzJagDn8uwUZUe+a
b0YFHrUjatcxbaKktzVBD14bEQ++1QR/KQ9UDUH/ZW2sjlvyKiNqBtm+oKU97pUGIZ7o9yfgswTG
zNI15vVHMgMOG2xHYG9TQf7AKCiMU/fK77VIuy8JDIcB3A1aAhIxo4QhaovOir/qoqEFNaBu2MLG
rPxRXEq4kR5/IdsAv9/yeQu7+ITLMOa/C/dXB/+LGeX2SToLfK4NSlIxmsXLToFOe9xe7iqcFiae
AL5IwdysAh+Qei0DZr4xAWB5Q7ijzETTLa9N0idtDRygRBD2NIe/U6r8ABtDIywXrzJZxgkH6Aml
YZcbP0G1NgSUTh+3fOaicju4O0uErZG8BgUmXwlGEvO5xmcaRhLGG81aManq6KuZTeuH+go+1X+6
yvpBKqwPSOhdksy73Nw8IIWXbm7ChA2VD/uykOPqjR68kgsjRFTH2vN9FPM7MVIdnKXP/Y6kfxGq
0rxbKs9Ev/AzWC+7ZJe0+m4P/8OvlhvWpXNW63Xkpj4fskBt5CUcJ79/n/PJncCe91y7vP7jG5kJ
ORasJ7DkxJVXw7KGy1acL0DGag6NCvABpgQGrQgDjWSFgUZSY6Ahl+EIW78sRbl6vTw1UcZcXMIi
1O4kT6y/3Z295UUsbB6CV1o9tOvnsH6e5HDXd6E6B4IVy5dM1JjBkHVEbJ9RlmYM3W9g5Lh6ZVW/
v79c1+8f6tGKNoa3aCNv5SX1BOc09T91ZefrDgV1rROn4tR/47/oup+77pn/xv/Wdd93l86J6Xx+
Np9f+y35hh8bb/ipceGbMpxDeXCUcGAXYJmiEMEuehcltgYYhZ1VSvinLMFEVvoEeUULVpw1U/85
dORpt/7Uuda5vqkw4+UlLsgU+DO1p2bXHyAejz9GBgOvP2e1GUbMmlKBZnSt51Dum4F/URbyaUWW
S2ZdlzzggZ5LxBj0zzivkx9hQVd6Fmn3B7Vo8pekxtruJYphlJ9PxUbPxrI/62VLQzp/AibXYHQq
W/liTTYhWZZZn6/JiopSlfO794L6E13B0ntB+/JQlu2GNOmdJB1c3BZ5T72NDesF3dxMKu45G9IC
f3PTqr6TVvfz+ffH3nXXtsm32qnWhe7PkEQ/8ijGU8C7A4WTG1zSnEE0xECyrZBtSLkKdlGrHTz6
QGbaFg9OI5pY9brK3XGe7oz6Dv8pVmNBV3BmBh/5Y1waVML5NL71yKA2evtWcZ9qo1liN9cv4WpD
sGKJJhVUGEatHew9zsgHIk/S8tXdL1Lu9XRhk8EkL7K8OszAYJyFOVbb6aheBIhW/xEuAzJs/DqU
9DXbfvDzJMxZnNBGzksTDAcyErtkl+MHu7Wbw0rCu9ZvR6toS5JkHWU5jnNJ188np7dPJb39gfvD
qjvNymvFHyDeT4p4V9IMGJNP3dYPOtUL9/nbUh/t1lAfpTXUpxQxQqqhy48WOkmWcAqclFZT3Vgy
G2PJbIAjsnt5xKntcnNz4wB3xNtdJuxaUvzL9r7/3E7363/zfe4dMKEbrVuS3M/lhmdGFhrTCgnC
1VUQwm3p4EfvfD9GMkPKOfz3XPp35YPUMyz5tD/vBK1IRW6grZWSGfuHJvh/P8pa5mM1enj5RT/N
DtRpJqWYLS6i7OwICWRnZ91m8qe0W2vduy/8hgcNk5My1oUPvwLO3urd15hEvvFOj0yYB60fB7Qe
C1VBNGk8Ox/KTyw8p9gNDtnE5UQSlgJeSlhUUi9sODvSTxX+4Ycwzt9wa7pS8A50j2S7xKXgzUMb
sy8Gf3K1akZbYkJbf9l82lb+VkznFdW7PY7pF27Jhsa5HzlbFux0/h6sn9pAOTsFJJuw8tOHe3/X
JvaKLts5qDlFed+YQzLprljafI5jirK/8jWCbVXmocahprAtJtdXZRY6Yhr2xDTs4TS09/R5eHlk
JdVtdFmKEEcUg8JU9rO69D95OnW501iTv2y0a4RO4x8SOi1zTXzNitlq2UuimhGv5AaBTWXOdHEs
qE/WHL+3ktHWH7VnYS41rq/CcW31fruUl93u7K0Sx23vGRfU4kfOX3DeKDGDNip35aj8nsvS2kNa
ysSQgAxFn6/y/D5O4YJan6miRZs81yPRf9dW5XNK8G7p9h52yE6n1a8WxaVU/5Hh/4N6j4kGNF+j
jVmWvlLRbzdXU/GZbm7myoERXMM+U1WA/5maioMlTcvtBbaKdt7Tzc0XdIUk/7o8XF9Q6c5H6tQ5
S5v5Wil97f7+v8LK1No9/SPL8C9r8f5frk3ONVq6O1GVCa9R8NmMw+R5PKIpQIYpJXlbMPXtheTu
+Qeq3G9AgPBHi/FjwEBxSWoZnBihLYrjmF1Ywd8Cez7f/mpdMDYufHc+CuOEZa69HTsMfM8gTnbF
WbVrugdznK9tK+h9Dfpbwfzk3sm93td7/S34MT/p9b6e9PtbJ/0Tq/fV7m+d2Pb2uW1sKDz6tNao
e/c4qCxNo0qKsEHaWTYmXDaElrElOqTZ4TwXW7gQT4AHDzaqvBPcMWuUCRK8arnCQRbRuurapNmu
Vse3zO2vJz2LD4cN48EHxD6x72479JoORDwfBZDz5chKex3DNLyhE1EQBmR2Af42OclpArcOlGqB
FRHhgMVucHqWhOk3jVzSXrtvNs+tsfNdnXuxytK6Ereh/ECPilRxLUfKLNE1vp7MEYhcQyefc2hy
RWb+442TE/tkLokIbavK7CfwhgTzQCkQtKhH2qrAhkgMOabA7ksf+Y3tr67fnN0nC9e/u80XA7VF
mHFWVq3TrVslWzewfXm/cpdeIHsegGvskOkgIq/MQSo7N2m1whZ0r1EOyEnun6Tbaiy2v54U906i
rZ5j9yHsi2y4r5UDNJj27d4Ja/S3LN8rs9tQ+N32fwW2S20BV/tfetMOjyAkSv4tyq5Szb8WW1xp
EcSh6SNaB4EI1+BP3icZgHWUiPFgWiHGHmwyOEqGDs6ok1X3yMpLtG5YYmMwVZcOHXATRmwQDQLe
smfxuvInieE5sSJeSRJXmkHtSmSSBQkmSbUxsdmYxLJn4brGZEZjwj/SmGypMaHZmIllz7J1jTlL
ssG33yYZM/a4VRFdxrdoU1litW2Z2bbIsmeFZZOBZZPEssnEshfSrId6rX36WK7XfbrltTkNDj3W
o7hVkrE3lEceNzzH0iaWvQ9sQ5xO6IJbRW9/tf42a5P7C/uk2LKcLbUPj7nFmT2LLL53M697ZI3k
Xkxyb9Rr91XAFr+9LwYwxzhO2sBctPWRYQsSXDTFpgt5O0bezsq8eq77q3JV+ncBI7LV7vvHR5b4
BY3n7rTx0BprUX3msHFdlP3NYX8cchJGkyq65XW0gQecPTHccp81S9u3Yz4iR0dlTpvAfO03m5Qs
E9ySgV0eDy6acq9pMjD3bkqP2loXTsxyYxkrnDgZGOTrI6u/y/UX+aqoRgAjKwxX0RIhAQOeix6D
zuMWrwlgyjWijkm7GoWagU/lbfan2vZxfzM9V1TfvnRV+/ibAJoJLlLCLQgeuZMQU6KqBeGDv0yI
8dDa/mrhMTo/uYf/TuGvLY/UsY1UV0MQF9ArIO+8nr7Pve2vT04K33LuVRbuubF/7PN94xxXLKdV
6NY+VcEiaKXkU2/7a695r1+7K5zywsXGRASZn/bE8jJLugSeT52uy4Vdli2FwkJe2OVyYdpeSHKe
a6wwK2H8yoF7VucyWAZzc6vbdrla1EJBPuEiSyJgJA3vVXHxApcbI/gd+Czkccjd8SjRQboVu5AS
rVyIbgtfQNhMD9wzs5w9gxMiUMEDUzlbqZuvQnwxvPv0esvO5AjM3DC2AvOpOc4pgD00LuPvEFIt
Oj1Ns2aUh+eNu7PKHgL+jcFiGQ+a+8SbeWkUs+Yoi+gdNxiGSUGD2mxiHO7ooc80i6sjUnJcIQ47
xCn5x5HXLhmpf4FTGUJfyDhRfKd8gwF0xQN/lS7k9UJD5UibYNXm5U/+caTCCcSplRMjGKcKxDMI
009l+fHmZggfqtSPeG+F5Md58x9H4Ify/pLmwyS7cvUIPf9UkG4qnqxuGgSuZXF6jjFaOdkFwMeA
awX4cRu7oZQpgcc3MBTLQLoA3SPkTgiG0qrEFtXiOqU2IJ7kvva2aGY2qDc8yU76GlzSYFumQp5J
mWfw97g0X4q89wh46AzzbPQiZSA8s5T6QEjVQgAzsTTZmQz23nKTrcaWlT6eaCEVeZc1iRr0bCsH
uzsMy1wNamZFKgCJGAM1o+iDjRRSuBFY2Majyehz6WM1JKx80IamAMejoTapv+DlheVTcTWA6Tr6
+Ka8bSEIdJbH53G6gJ8AwA6iuEWwGEDESnnxUXGr5L2i5/+tv03aNoS/0uL0aZc6WVeA0gx3e3tw
EbLzMcRKGW0HcCMJPtGEDljjOMu/NdDNrcEuaNooaBo12EVcNAQoinuSnqR47pRyk4uwuJB1fKJh
Prj4EObhqLBmv7kpieICRugUdK+nUB5Aji1sh2WiJwBUUj5osQLrI83QY4tDJtAlVIQgBo8WNXnn
lH3IKdiSRK9H4Tl9lmRn6CiMEuGx/urFNWy0UAz4Mct32qvyu5wWlXK1HMKuchEW03TQKKPfQZvZ
BQBSvcjzLLcC/LAxyMbTRlw0Jqly3WvEaSNsQIH4BOZTw3DAHP22mR7rF2EtMNtxOecKgYIDnLxI
EIWEg6vy8ET7AmPYA7ThgrKnjOXx2YRRAHIJoyxNphDgCfA6YIqQRXKketQLhhAxLVAvEMwnaLZb
rVYLkAxkOgD3ANScfM64KgrTDJQMB1zS0ugAtnoLLAycIXiVWzM4hWjK+B7K9WvQ3oTj0WDTOfXG
WYq2QVarDD8pREwb7X1Yemk5LMBtHGSjUZhGILMaTwNbrDPIrWJDCwQb4MSqkxofyxUNwqnwMj4P
GaJTxWN0sfWdqzxm9DO9ZvYsvApj1qjJVWYqt4KFaAmwiRs4qbZBPAeCbPDqSKPG2ZSv0TNwhKS5
QSuhTiv/+PT+HYSZKaiFP3lsgng4hSrw/MyOveAiTIYBKY7BegFvFcde4CzxAKRxNmEsS0kjJI04
HU8YaUjiIg0+P6TRE0cUnPlA0N5PQFA/9UnDWWYKspw0euCt7/3Ey4Z8ImFE00nlEbBnapLAxjD7
qR+Q5Bhj2U+OvfYDEh1DyPnhsdfe2SHjY4gxPzqG+PUX+Pf82NvptMjpsbe3Ry6Pvfb9XTI99h60
yNmx1+m0yPWx19ltkU+Qu0UOjr3OHrk69ipn/ka7etxzf1N1zm+0BddxFubI16ECrFUmvk4R3RJT
F+TzMUiHXuDf5/j3Pf79hn+f4t9fj8sTlNLv1JoNwnGIoEfgJlt9l42nuPm4G+BFl1AAGuFag40W
gVmoPH6Ji0mYxN+5z+kGONyxwcWnbJIPkGwh6SIr2MtJkhQDQD6XKR/ybDRmBTyOaV7EBeOeveCw
T7M8AjALWdXCJsARusFoMAb939vf26l2tVNts1Ptuk61lzvVXupU2+xUu9Kp9lKn2qpTcjtH26Nj
fmzxfRkzXzO70r/pbwjYQ349tglNL+M8S2HXcn891r3oPhxbGmQDR+aT5b071pFLIWMZm56Dc9Ui
a1EJgnZ6+vzp56efDl6/eHfw4vTpx8+vXz49+Hzaff/p8+t3r05PUYZE53OJvLmhgKuXygRdC4wD
KvViRk+x6xmiNeP46EhmwJ2F0fs0mW5ADAmIy8dly7OIJjFgqQN7gk7WBaPRiygGLzkQIvNfaJ8D
Z7Twyg9885Grg/nHH0VNblkpBq5APVqeJYVLHflTQXWXSRpWd5nozhYaF/ZaO5FhEnjgEDOuZ+rR
snC9THe2wHjjS01I65qQ6k2QLBCEfwbHUVZ2Cd1OMU19oLf4Dba4pBW6FkrVLrtifiKi3iB0H94E
4bqi3KoUOreSvROQsAccUKpai4pF2GALjbY0VK3jSlRHxYazEskVYgnoqCj4jaessaWbHvZf83nE
W4YKFpNuh2W8GBvDdCsTSYTpe52yxOEd4KaSEl4dIqbD3eElqk+z9Hl8HjMAueCiJ1XKwobYoPBh
KsrnyDeD6U0VyHxucPTpOdiW1tXXIWnGV4Krui6boCpaboOK2v47utgxivtdJdQ0Wi9UQ5HRuZ1X
8IAY/MqWIdbCGH85NuKrMF8cKlTcQZktYjdYPUbSvl1GROeySx1VP+WCXDjISn1wdSVtqGVRu0VW
1NH+9tfe1r//5//Z31YaZw3FFiRx//4//q9//8//W3+voG1dHv/SWCVHx2XkXj3WSbDcHLEMSO7x
ZSKGWlMMAk4HjebzVJaUIvx9DlhmKcYmwfB/CEWraRqPVRgAYyOsVlxdfziULpZbDgFYsWg9LlHi
S4WhTg1PwWYNghTCfxAwYCgyDgLNf7o9LX704bGlyQDpEjYSgiNent8McCjCoQnTV2nc0GkHRAQ1
c4NWo9XotBuQJkwZ4Of1KAH0N7izu9vbV1dXztV9J8vPtzutVmsb664V2atAhMHbdsvZbTxyHrZ2
Hjw6aLedVnunw593241227n/oNFuOa2d1k75tPNgZ/dL+77zcO/h7oFI3XE6rfZeQ5bQ3nEe3H+4
28DixcNBu+W09x7sqZePnL2dR4/21MfqmRf9RVR1oNJlQ0Q5otkNvQ+/SH8kgQaGpizBijiMovu7
Tkf0pN151BGPHejLgwd7jV3nYfvhffX40Ons7D7YO8DHh/D88OGD3UcN/nW7sed0WjsPHvJG8YdH
0PPWw9aefG48cnZ3Ou0H/OOH+Nh+9FCVLZ951e0G//yhaFlDa/QPdBfukx8nsIvDZTmLooCoEeg4
D+4/evDgoL3jPHrYvi+fG+0950H7QWPXae3d7+zKRzkv8nHH2evANIiP23vO/d1Hcu75w8Gu0+ns
7e6olx1nd2/n0Y76WD2LsuWzrFp+r1qmNfsX3on7zt7uo937B7vOo9377T353NhxWu0HrXZj19lr
P3z4SD3LqtTzjtN61IYq+ffth07rvuoHf4AR6tzf1V4+dNp7O4/Ux+pZjpF4lpXL72Xj9JbXTyam
mRPHVUdwGf/t2LvfapX8/j+OrVlEi0Ee82idVBhglqj48hrwOrJBI1IH8B3XJYa1UOAZKZZkbBtt
m/QGJFkBSTpZhREeSgQ/BTUhgYcTGuaf4xHNJswKS3Bi9dOT0KV9QGRbUTwogAoL8IRJb9IHMe+a
jGXRog0FZbIFZmOxblnwb8ey9PENzWjLjKNVGddcxsQ9LJdtWAlozq9g+ldaWKh2p1Xyvvc7LbIE
xt3s7Ngg+41vrEjXfaQqqCYD/JPMS8tImi1SeFwSuCUibm53muF2Z7/wPh5bBQHkqaVWtDvNUGK8
UgF7vrW3n21uDrayJ8vY4s12RwCCN7Pm3hOv3fHhQ/HsZpub1gCqG1SrU583Mxu0hhwsUoCQF5ub
1Bco4wP8PQqvsYGe5zG4i6HvQEFksstBpwcLTpkKhNeA34UJyuxZYuKzj5TydS3g+EixQTdCjo9u
ATk+4g5PN0F+09tBfI9uB/E9khDfGRn18dxaGqQJrpR9bpoxELDeAw7rrQZ7oKaDj7oJ9a2yBYLY
AfN2ECYDq91qXV41mo3OzvgaEHBvAwq+Bvv62zhuxukwawKAmsJGHSsE1Ihk6dsMOojgpUP5yDFK
x/X8Ghd1KkaSb/BnNDqb3nEzP5V+CIZKlxtINFARQ2oaGBBu/sht4WUNdWrU4/oOxoMsRWU2yZTY
QcrOHwcTNMheiZ6+fuzG2Rhg4wKM7oPtjOth0S80mO0lTO1lnNN/GVoRcWXx5Q+3jMOj7rl6cB5x
w9WT1MWeJ0nQjFJPa1YIy0AEL9ho8SBwozBlMQRrD+RLrADl1XqipiYsL2kbWL7Y3oOgvB8xXQHa
hefbXo3k/S2fz3OOFsXTIQquMFVBkxbZsEZNWrNyp/tZXnPrL5UBAjeBWqtgsN9kw8bzkNHNzTIc
27vwnUXh7IEz2LLLqGxSVAAfwLuKsCAKmQgJFYxoFE9GmlCAmwyvvnkrGU7l+k0gjskItC9goHMS
zXYWdhP+d8A2R7ND7hFKWN+DuGvQTmiiBX+co88HlpRv2UT8YnazTdp2JQ4ddDz/HR0fZSlsdsVF
BqEYWTyiv2QQt/Ho80FApjTM0f0F4NS1Eck5ak6+un/yv+W7d+e9zydF3+Y9zssek7Tv5SS+dZ/F
79Su63v8uyZ9WvaO/K6RiJWFENO0zZp0RO0AQGGKZH6GlSZW4b+EeCT1vx+jSZkK/8MNlKrLt5GL
0I+4fOW5HssVE5fCk3il8IS+0rYbSb/c1LA0hS62pB20MD8U9qSlKvpVucFQE7i/0RK9gwBX1Axw
RZta+Nnex2MLGcIBjRNL2lDdwwlvkVQBHdmaPCUt6/2XNjAbrVJDawY0ViGxpse2lBvnyqIDRxgg
7/gAMr7lgMkuyO9xlD0Ro0CZEMjmawrzV4YIkNNA6YdVZoxfmTF6jdaR2IO54VJGYJZzGYaQvrJE
FWb4hCct4JzZK6sXgyQ+7BPnkWF3w5PBGGfgBaXXFBz4vBqwsMreZFeAqV6Aejrxtq1BNoIdeq7d
EecRZWGczAFGNUyRz5sDouj5BZujM884p1y0Ok8zRuc5DYssnReTEaKJCtniwJ7Piyf3d8jEw3nM
4Sa2bcHymEfhdI7LcP4bgL3QfH5F6bfySzL0RsdbVorriaYFDfzxsduCS9TEf+h03IfOjvA7Qbsm
T7drEhNj0Ju6imijldnk4Ni+N4YIs6fH5NOxRHhO/JrsWzvwwc6O7ZpFiGi1WMsIC5MkP/E/HlsX
BCnXYA0e7brtFmiMbTfiedrtXdJ+sGu7CX/mymPbxQd9FNqdHbfd7pAzXVMXvqqoMmqNo7hZksKS
VyZPikz7uqojeyVOaHVZDI7Sb2l2lQb7pYEQ7ual6NXYqJm2UfvU/fGDGbdmkcQ363I7ZlpTC22P
A+0i7sKgmwPtB8L5I6hCfM0mOQ384CX/1QDzwYC/HIPJDPA0mD94JmwkijQcFxeZzmsNzNUPYD8h
CwvKCt9BEb8uD05erZYlw5joeSd63lrl3ubmRk0ZM00PF70qNYdYnqbSY+QSVM9Z6oJLLYMYlrwG
5uBjqX/zRYobPA9Z2HiahsmUxYNC2RUF5BxubCGj0VNWFqMlGoXpmQMUXjGaF27yymJifytsw3Sv
rvHcBUt8JR5siOgD9iUiGX+qorAMm2NDygz4++bKzCjD/FszDatGRlc1CX7fXLRYhaI9/AELK9CO
QLwQD9W+oO2OyMJ/36LCMI9e6yP0OsIKNbIZVsmGpB6qkSfwjaRvW561PWBis2GjovrKbTsF+zqo
SD+4NjZuS82ryPWPUJtsvZuScDCgRfG6KCZymPUUfUDGlUXuxBEoAkFsDv/BTdD3Az5JLhrvl9+O
xLecQxEGtmroIFxZNgReCfcGwn8wu6+G0ZaRmCevIKA888b88NxPQeJoMfTaxTh9oL3zZ4jxDA6r
wpIV33K4PkvnpS5qJhnndxSm8ZAWeEFkMlwF30LBBCVAR74yFQLl8mgQvkp3U/lLzqAs1I1eWcqg
IPdnZdwQMFSQND96ZaWS5klJ/QubjMPBt/Ccvk6HmYut1RIgcrJ4PAUhgU3kfu0OcRGJJ31mz2tG
gSlDE2Vy4789dn89rjGI0O1t+EToSZBpwtdZmWjrlhKnWv29mSBOl8pFRvBIVui0fcXepg20IhEb
H8Y9ZyIOtiwkrRSSytiqCut2v6TJT5SVtrjlWhUtQ+5RlLYAT8lWWwdV1gOEAxFutF0rBSkiSBlA
dqcdzpfmUsL+I8wBN0sXlYC81FbBYE0V9LTK3ch4AHjj4PMCM9Ev/UhFqZVdSGdvzl5VzeWnryz+
zENpgsTysdc2bxyhikXA+7FUobIndxwn7gtTAAhHxEO66C241lpQyp9Ue7UGah99UqncI3JmtiqW
BTzLsoSGKZrvy5cpNjdVcbMuX1kpSONDL++lTgxm7KkT0WE4SRji/Pg+gn2qi+fmZigBQEGYLp17
lYFDrAwcMI/tx9yYYGkaUOJfpqVinJaahve1uDoFt2utaqq/keHgx/Z8vqqpbs2LcIGeC+KQ+0an
hUXBLsSfGR0CFlnNroGgDiYLZPmOWthm3LJcevQh3alWM2+jBW4feDe1CdvcTNVALNTtlA/RoHIl
L7D+xNMjDA3EILNaixQ+YYqPT6TTReIWJfEdvLI0v3TCL4ncsA66GhdgV4fP0Ou1IaICAJYzRb3q
XGkWFzRJGndnuXYI+eIHf4mSDvQbEtGleFvMl6kfxEUzHI+bwsoPX1ScjDS3otTnZhjKv0gXJJej
cGXw6b6fHZfvPlfeFdq7F8ZGGHDzEXRXrHIQz81SAtxcBjHia6pRcsV1tykAAi877t0Z7tvIu6Mj
pM4LLYJFULHteX+7engoS7Bv/dEKvi3dIXXjpbVlSf8WvU0YsVBF0yr5kIVsI8jbK2P59K9tQjGm
g2oTfv2rmjAGHDt+c6s04e1f1QQu+hfEYjThncb4dNq7u+37u53dcmuEcBPpYylb3IeIEjb76lG8
sh1kEX0KNntE6Krj0SSxGGnvPnz4cLf9SOHPsCdPnrQ0L6H7u9rC/bCG3Pnm4uKd6na07t6dvXtl
WVTcw5Ajk/yADAToqsh2MBrSEhg0UdqNBQZGaKdge5JIEQT8gasL6uXNXeCG7FFTXBVv0Y36PkAH
tLYsNeX1X0tS/KbcvOJOdcLTG4TueO1ePfoVoZd0BhQdm0PHjF5qNs03j3V1C975/cOtNfozFwtD
kbb4QFzb+Rerml6ZoI9Lgip+rdJs0nmCYZEu7rSMs+gIQhZzBDL+5nVkV/nz739uRf7qmp79VV36
Ys69yOg7v01oPq1m7pqZqZ6rak2rZbWg3N8SHfZBs3k1e6q3vbwxldcOuAmXOWS3NjfL3+v7+8qQ
WVT9aBnGf+7DRXINw50q1pXLUEutA5gcpIugZJvl7aS8SEqHeknPjcAGF3mAgiyNa+WOsyQ2KrXp
ot2gGaiTOZUwXsq4G7xl4T9uJOqu7CsDX24ATmBUNA2JGAvEGeNPl3xIqEOvwXUEJFfqgr25mfrK
+CJdBC7z/XShXDHVJmDq52TMhuqgreycKfyX8iRxTbVQamfznQYbApAT5b64qjY+YHUtK43Oe6xv
iLJ/E+RkCi9sVIMr8BnU18kJOXxlgeyQ698rtxnpv6HX8A+Nm6hrm4aC1QvunPT6c/jX79/lHiOi
6dtfe0+bv4TN763mo9MmwDe5J46ZZCOmzV1lLq9ZjujLHnvc49YQxemkACdX8XTEH/jaO+Vp6vmz
fBTpfTUB/3il1fVPXWrUJ0qEQ3Jv++TM8l3Q9Mxh7SD6Du+y3zu5clSv+G971iL3F3wsfHv7PCYx
smD7sZcL2DR+F5VCyLjX7t8wmCRHSzpNr7gPWhguHcrt+VzIhnLwuxUYIXXK9F9eyVidL4WGgCpp
OXZbCbqItL1HQCyxv8fix8+w+0JEICkLzISha+EdvbK6IFS15/OjV1Zoz+dBQAZeLyaYTMJ+lfxJ
4v3rFegjJ94/X1kFaDC1u/GEDL3fXlkD0guEHiMg4teptlmUqc/rEvWsdTkDtB0V9fCen5Z7D5TD
E5/XpBVazpqMAVqbjlVkTFcCiPm5wZjIfTyKi3ESTmnUAIJr6Micri5G7EnLKKKUnqS0oOqX8EbK
4kqYS3GPmOW6SyHm2kYoBfsu6GWXPct8hbBIYJ34Xu8rcftb7klhb9+8F0LAn3MVfM0funRzk4KL
2jseLkcGa/Iv3B6mNSI6SMDjP+iTUy+SryN8zfS3l17o4/qbMBqdwnggRVbSMl9nJ33fLEVKq9Uy
qWbgcuFCB9xTh903OoV/3BphaRVIld05WSI1dyS7NXJ7wVt83eDqB32qojinA5ZM+ZzxldoQqzvo
l4v1UirVTnVYClPwpAHieEFQJ11aNiQcXMRjfuZJ+U+9dOfuK+7hZwzcCgMaXtB8ru1h9NCiZDYU
ZttutaCFN1NW98uq3GV6o/0VLNM6rC8+uM0RZSGKuKDrzSQumG7LqWEY9VjfrgfD+vnVjQUbUjIO
wdUsIbhKA6LD9ee1aUHnbPm25Z4U9+YnxVbPO5l0Wu37+HcHgRU59pOwq5NUr0jSTXv3+4TRfMQB
N/eXLNiwfNwA3DCn87iY098mYVLMJwUt/PmIhmkBf4tJTot5ToUvcDEfQNzlYi63rzm95j/sslWx
hi6qNyq4O8t7nb7k9EG82bvfXwS8oTk01NXzM/4i0DZrbUWkh7Vk+mdQVh1llJohnMj95TFnGjss
NgmXOdCFhfBLyQ+93oxrpsQ5FAhPFLFrBITb8rjKkkdYIoM8JlgQ+bF+ookCtEEyvtHgMWONAjNN
Sd5AKzBp2iKMwoxhreyirrbcw8Ml0KVeCuicrJf2hTyfO66EwrBMGc2VL5W1H16gigGAzDfbkCFc
laHZdrmOIfNash+ZPO9i3flapIWaO27cDKW+I7adJBuECT0AB9mcymh3oU2kWY6whAT8hQLAlFl8
iSbwZ2GByARlozK3mWn2Q9p4g5EMvzh+ynKm/EHn841SQCO1SVSBngt0JYESK2afyfgFeJ4IypO/
uZ0UtIX/c7Fh2rIpDq2ZIE4KcdQ1J6jSgo/k3tExen4v4wQXS5siL655FkbntHF3doxfCk9XNOoG
gDzlZbrC+3L5vNKL5fb7+k4rGDLDp++GMi555I4S2ZBDqZtygMEhZ8HRTQyETi7TTtvU06x3crDE
jwmHbKGRZNlr+e5XaH7eG6C1Q98ryMT79MoavLIyouQZdvmT5CQkSyK7Umv8RbgXY5U2t4GIvGdY
ydBjxj3dvKsajhqcZpb9DaDf/J5uqoqk9VMzjgBerpL4LU6jOxA9KI8CPjTlTFM9Vs7ygQ2V4oQ2
8+xqBYWs/kj7IILwAjrI/jExXP+GYr8sw94aFFRbR5VuBmC8POkN5GIZSDdvN/j3//h/YEdQF6R1
RRu0aXY7WY4CUxwSc91OOCSuvBNoFq7Adyy7eSSHlrzR1vksooV6xTVRQsa3hHt1S4e5X/bakoIl
4RZnYHYIDqQFbpQ3uVLlsKWudfFS1VGPrfTyS1X7NWw9KpzubNEl4xUmIW7qYj8WzmbcsuAjum+9
Pytofklzq+RwQifjiRZb40smvb/iWziS5eBnGcXFIEtT7kV4G7+yGL3F+jZBGRdyG5NDr91qkejQ
C6xReM0VB27jwW5rfG0HJVswPNQlnzW0cRt3WGqTXkiyJRKC9IIMliHnsjFN0bGE9BIyWXrPz95V
7oHKzZQuCMrMoO3R7/EZBRoV44u88VsaxaEVHdr8kRb2bKIaI/wQOeGlv8vP1NLcU0UNvmMFHIrr
DkBx3ekHtq9yuVp+FKpzyLYsr/nKXtES37Fszdc0Lt1Fd/djj21uxltsvcMoa+6iw6h6chkYacer
XUUZGm6vzgDQs9yRlPuOxmDGC16GsXQMLenTqtgPw/3ZWjUuT5PEGBhANrujwM7uGGBnONSoUNKs
c6gjkBcjbfMcAyd3uy2JeUMLMAIlsjXrCdvrvGCB3+LG1hDfGowHpceHW0UOBcP78jVA8PR9Aexn
3CpHALwObtZkoK8php7XpeEjwCiie3VpBSi9z+xZyRwsLnQNzKk6MDbUipP7HnxO6GLNacDLXm6b
rAoWRygXx8AKBklW8Ax8FFe4mGfcS3xyqI4ifUPVfeIZbomUhJoD7RvUKS75Goc1qzy6nbdxdHtv
4+gW3sbRn+ptHN3O2ziS3sYhiVZ4Gxtq7nJtMiMuDFpm7m9oSxOusWGcgonk5uZGuuKFQXUxFInS
OFgoL4pBOMZA3BeI6q0KEGuhBK2WXq7LYzvO0GMH4BIDsPZbk/UbnfJs8qRWeWsHcGXJtbm1wjll
sr4NHGFW0Lc0nbgXBLFB4Td3+UjIRZhGCb59hr7Ih3T6HENleE9AKS4G6WmeZ1fP+eXdTDwao3MX
dQQY6HN+B7VsAkz9uK4IX2xVLt+kAKC9bIVeP/oefaOAN6d9DkeGnng01pO62Yjqzy/SyHjks60d
zjUtr9KGPasnDf245psyMqSmak1JxsqwY3AseV6JeMoVMgIIVoT6ES3A7tizsSXGTN/cymamEc/D
x1NvFhzFyxOAso8xBn9otv26HC1XOzqsfCveUt36u/q1ICNFNx/pEHVG6eRtBqvsAK4hgMpA08lH
7vGenZ/zOXZPSXGRTZLoIyKdY1KoewYcWrNEALNnqQhXxUjGdTpuyoN4o80jmPvHJKwFQ9EIP1tJ
50UN7Q0q/UqW+jVR/Yr0fg2X+zVeeMNDKyYhKIFSzSibI/x6Xg6GAr1Wv+b2vHSh40xEE+rmOAJR
zUW2WEYu4IETKb9Sc1CssBhn48n4DtwSobT6WpqyIOg4BFUH4IRy6HIcnBVQButlL3olS6KXm4Qu
+sfVu/NIgcrlRjFPV+CBwTnmtnfMWJkotyHjtbdrowdxwRr4S9hXNe7OJotAG6yBQFIQo12GOTDN
QDS6qCGIyrQOLih40N1x01XTB4xoOXl43gBYO9Zhk8yyF1qzFNca/MiULsvLUm3Yvv3YqAuhApFN
XNQKGkaH1myo1NdKFsaWBGVpuX2UBtINehvZiRhFAL6A6KcVkI/SXU/ppOvisKwq9TzPJoZWx6CC
2NNuIdKxYACeE5rThfBjls7tGqA+KHeX9arcZxzDKoFHh9QOP00SEKC2/V7f7YlNN3gKLBvfY9HY
aNEHoWKsREZqc+Z56MK2IVBWehsTpnJ0xodEFsRJR9vrvSe58GjiZYIMWe3/oag3AzqJIy5OqUpZ
Lwwpq4o+JLwyIfbhGf+Z86SP2dWBmqdYpX3Is3EBUSxmt9iexyGEuoa4PEYYkmURI7qQL32IdYKc
rnF3FmOwjsbdWeg7KqMZwKPslO/XNKuudjNgUwqaBX9VUKxcW3k2ocYCPD80o6doXgmsnEVYfR/5
lUa9zo2QKjGR6L5u6G1Il1kh066V6sC5nniZDLSSufG+ESIsnM8tNp/nGKNmo1Vy7+Ha1V5adXNn
BX7RaGjJJfB+3UI3o2YlSI+FXiPCsC+Hf4HQCxygCLCNV7Yny5cjvSiQI9jVBzgwauTB38dSYtLP
2Bm16RssvsZDMtRl1fPDZklnySSHi1FlLnFPL2HOlIza1tWFau3a7g/ExlkxPzWDwjUG1fzc+YRV
nU/Mg3FzEwK3kSx9nk0gTCq+mpBVdyI+Ytp9qLHqJjTBweIHrTxTWXiGlwG3dVuC0sQmhxV8XLkc
gr/9DZGneCgQtghcmaKZeF4eVl39/DJukShacww0VYzLnqt+1YH9I09fcmx/ruzN90ujX5wjv87K
4+xQM/2DNvO8oPe7yK400y2wN5KbuVCoggweNuG3IoaB7hH4nyn2k17sKi8EngAeCKW7V913dSjd
/jLK1ZVJBgeHFvOxBtU+nxnPLrZS86SqK+CCjRL4EP67N/cE9AAvDr1eII78ZpEPGj8BpO5PAUEF
dnOSx2WKUDqY2YZZylMwhjYm5KMmP761XCCYMj+MR+fldxB148xFC7woDmvSuQ2vWQKf70oayEZ4
0iQtwiFtxhj74aegL2yn9xuBJj9+rk1i8HgjygYwbg0YwSePxV8aRk8eg1VPA5xtwLb8zoQNm3t3
RCqACTfpb5P40rsj4hQ0P9HBJI/ZtPkhS+LB9I4MZubduTt7cbiQn4J1tXcHMIth4Wm5UB/jRfQy
HlCunIF4IBi1uVmARYLXvvPkMcxRg2+o3h0efPfOk8c4Bk+g8QSmGiJ6QXD41j6oPc4x7JTL8jAt
wKQhZfuLeHROistziLJxGRbkMo5oNiu1QhACel9oy+DU21883uZ1PN7mgwPVPIG96vE2/ny8jUOn
LZb35l4k+vlciFF8RwpUhCQF7MlrckHhyjwCZIZ+y61i2ABAve9w6WVX6TXSpSTdbfjbYX0Q3K8Q
snN3gQBQo0qs4Hsn9ywMPW3DTx7LVs8QWBij2g6WX5mRmUWkapWt6uvw1Fzq2NZqQN5SNiFsM2v3
5V+RsVaQDshdQxRzpqwWUhIXWniOHP1UKzezuLy2hYLdq8O0lYi2oFpWBg1hvUFDSmJynlqlf3iD
+uvZdZqPYnQiaHKLgtsZBVQ+42yGHnXwLbxNz3HzafChqkJDmxfnES2K8BykHtThm14XwC/q4mbr
GX4ghLb87A2XjASCLS9bV8mx9p6vZSzvCO7kNrdq7sAJK7ApTP+4HGtQxwQ9O4JqOW2JnSP3k2N5
Gqt49p8o+GAI1rcA0wUQ0CnPaD8AiK0MBkiajlzqH7qZ0NQnXD0/n4uD1q7jUbXO0NGYTZsFUGol
6CQ0oYHKVwjW1pDEL4UFGIyy9BtdXlA6AAbgYaRwfzqAofgEvq+IpMZHJi8rjvVrWEjiAuSP78cQ
BJkI57kCON5sPP1Ii0nC3AHwuujKiFhMblJzYQP+F+LuiOFFHFVRrkjiWKpRmGBdYwJsPkRVyuOI
uiNhn3RRp+HXBLTnVc3E6UqJ7WWNxHZakdieLUlsPymJ7YEusb1alth+RoltRoY26b0g35ZtVgoe
jI7HtFvYpD6c3dM1cex+rYtj93Z1ALt3C48eWxc2eemNBM88n498xaD6p4fWSPDSfi442lH52s/V
b9s9OwQLkNdQksnO+v5LwqjHw9BUeV/+8PTQek1EBfai5IBSChAKPHgEnc83AJwFKQ17MZ9vQMhA
UyHy1gLXJYC1AZufzc3cGefZKC7AERNMiMugfXY1vltOedCkC4VJPvtWTkuShWCdECzsfRnUkXo8
yhs7Lr8hTy3b3v+2PJ3vUHaQHmM0t5hGjas4gstmWDRi6I0TYLwa3kqKVVOI/uYaUKoYEM5Xe7sb
vAzjhEYNlonYgqIoWTsWAdUPrN9VDupXucqHetJgFhEjPMmaByTULM8NebK2q8k7dSlABnEUByVK
z8G2tSZLU7yrAX9Qxnv82LjDzRO+QPRaPCC5wTuWSq+a4klSnTSUcHOF5Byat/bUssk5v7Z/4LpS
jvAcVgTbPyLTviFuSLX/A6M8Vq+80HQbIN++tbEkigYb/Nzkv2XtcK/3g4uwaGocSQxHCJ+GOovK
HNwsVxhVQhVoVYmZ4FS+qB2li0MiJatr2Ss1SjxzIRuEFAsqKUAaEcb9apRz3KBvg8Zd6rSyinAe
zqGGEBY3hlkOLinSXXzNPPLyV8uUlggZLU6a2djoncoFE8OpGYZdegXP5/J3VRb1u2ZLLgUuyitY
NgaBdXiOhhxg2AdCHQqCUPcdXyR8EWHMVAAn1Y/VygpSeXI8UG8ELKd0ra5nr6rrWdjks387CoL5
qYl1XVG4fTIUblND4VYIpqKkrJhaqR8An8NXV+AGLzifKJ61VfyezFZ0Am04xpbkUymB+XExPCe/
/gSAcBRTa3nH08r/8KPliyKgbPOo3dyEk9aHCjEWqTy09Nqer64tp2QD/EpfOPxcQksycZ7O579y
gFU0/gtIeayklF8DSIIVc5ZSrzGjq6tMyEabyLOlvE5I02nFh7BSHkdUivZoKHCCkliAUpqcY6wl
29+OiKbL4AShoq5zBklsInndHiLDp3Iodqn7MThxFQz9NXDK4qGU1EcWrvOZyYyhEryOHddl7pyV
k2HpA2hCl7cAl1dsKG3eHVqzmOMy0jXK0JUnEb+j8BOmCYLAcVUr+ry88DZ4TcEK+4Q1OiqgDyAv
Q7OMTfQ8r+0blfAwu3ng1qWuvXQHn7IRbXARNl+VA7gGNNKMNYDgG2d0EE5AMAb3N+5JiVagWj4I
eAeU7vDAQHpdk6RywzeN7WEIknjlCCzduItBNkbcAyHr8P0SZ0IEz1vPdPy3EDEo3X4cgQOB8owB
EfKHQwWhF4Rp5ISFExYD52zqDMKCo0KA1SyLU0BdSArq0DRCDbmDynQnTp24QOksBihxkvgbDPs1
2Lk6acYcqMrJUifLHQwG60CoCwcxiaHZTg4CBhG92ikmIwfCrDtX4k8OtvvsIhAys8AJbJu8LBvd
C0II+xYMwAILpNxhQgvY5EHgPQh52kRz0WanCGFPEMn+lOWTdCAeQggRxpP5TxS2BiSAHsRDcCd/
fehtW81m7+tJ2r83/8ny3Z9+mve+/tS37/00f/xkvuHNH3vzJ9785Owk4tgEJ9GW7Z+czU/OemHz
+9PmL6d98QNAGPr3Ts7mPcsmzr53b+ukuf33x0/6IE18o3cRhjsggbBeCC7CS34QJPEohp7huIL8
HAcxIMEk5S7xOIDwH4awb5OPeqmDPCvQUR9DWgdoxR2QAKYSyqZDLHrCMBVnKdCNt78fVmAbWiYU
IOVW8GC1/frQli6Eea/VRzz4GJRwINzNALsFPdtTEir4DYixwvEUHMfJlMS02Nq2FdJCDJ614VYs
Ef35/VaVVoXyyPUi82qRGhCPJk/e/lo/axIzQ9fqfNEG5DsquLg0t844UQUv6YFHXhCQ2GuBiQiY
cwSaB0dhUS9WKo5GIwA5NA2ZpVmVG8CbA/6BCA6ATXiRRmi2zpuzuZnyQUBI3MLoQQL+3QwFfgB6
yB268/ncKywJr6oXmQMSVrq4OwNxfopWwDSNiuOYXViBFdiVFAdSEFLACcQPIn/Y8sd+4AcNEesB
TvzMowuFquK19uljOZL7FGDUSgfHPkDxV0IARGCxYKQMIetWu+/r6eBGATYe6HMNHFjORJubzcC2
Z7kauwHEFQCstoFl74OGI04nFGxC3xwiIsjEyL2hjVZ1aHhJE4dlR+OxbJ5Z5seyzA1rAjwgrs3N
TfEism0Q35htW1siOpFagTT+fynLmc+fHVoZtPiDTNrcjDbQ+TXYT6xUkgUcZKHAOfEDSTiBK/Ym
mwActjXEuNZ8M5rPI+5EG9i+FW95bRg626XzOT7VtM9W7QudcTa2FDAeJ/e42bb3kVZU9foo5GV0
5cKytcFh4NnEiNYZiLG+XD0JMDyZnomEvVBZ5fYrVVcpAQtxlgtZzrRfU5NRWmJ9kCQwn7+UP/3K
FLupMrYxiUECTv1XoK3x7p+zbe+HT1K1n+obuC1ct+PKwiu8oPgtabLsG02D/XhplfnFlhc0RLyO
wDUz/CTfCz24u/31JBJbcCxeCQ9wVwxZJpK/0elVlkeB+9JML2l3+6txAPfvVgoeQ86JiJWOKXFE
UxYPY+TL+BCsM5stNF0BunaGACMRgzuneYBJuxAFFbk8wnhUAeN2dOi16U55UhxXTMOylPtNadaZ
h3TqpmAAU0gT7sbtQ19mq3zwBJSSEu8yT8WK5Ipgw4nLChyJtAGqiyYLz3p4l5GN9O6A8AL8t3hA
G0Mo2/389o0015/PN6x03Uu26qUpD6crYzxmXrrSAZA5KNngmis4BzP+czG+BprgL1FPDyYVXoA/
k5DR+5EFmYG9auYyMiTXbr+hQ7aAQH0t0mhBaD557XAw3ofHxToL0ku16Io1fk+Z8m+KDY/ddWMp
DE5Mb9gNbaMznR1rPGezEnRCec6CJ1mNE98SCQQY+uRFCIJ9APkrv+eCGGa4zS5ILyeZzosWck8D
pC/T34PDIaZA1bHh4YFOFx+RrbVDz4q32vbfc8VbJAVtLOWGCeKZm+2tXPllrP6Ke5GEwLdUX6Hv
COyo8lzhWcQoLxuziW0174V9YI4tZmVwnyM3ui4qb5dzKg00nk1fR1YGqIAAl6gcruzFKlvbioEg
f8xyWA+hkMleZHn8HVy/EkNMU53pIlhyZFCxDsOzCpBPLzfsszHEnwcz+gNAQbJiYZJfZ/NXte7P
UpZnSXHHhaAYKU1eR6LHiH0Iku9cJMhNC1LW1I3SfcrH29CigE8ATKIaAM0+MfdbbrO9SvyrrP6V
LTb5cX3K8hilUTwIGURhhpkJeeDlEknzsAYjHTTlNL2M8ywF2gIrFEZH/BjK8fdn6IJEsAMQDQ3K
bp3NcQCSAtBOBWB7bARyvo3TjtE7hbpTJ/k5PjREkc9LYXFDSOSQbMWBOjAO1IIfqL1ZHLllgyV2
z3uVICgJoJKSRVNm5KolPutL74AeFgQLxmhOChAI2gf7Q03Bwgp3qVBM1wosfktUeZ9+fsNlbNXC
gGGrKQv5OChKF77dPAVgfaKPPwq51YgZpi9KDKptPAmP/1ozRmtJmuvuRHI5P/GqmVBLUTwvbRjr
OipWhMBMXimETdZ+LCLN/Q4RbsT0N3EFACWqeBmsmL2bC0YCLCgL1lVwV4uuZP/RyrRYZWuqjA+N
uDhQ51K1Nww9Cwff/vDABxz4tIFIqesaTA/L2Fp/ZIiEcd/NdcmAZEtjsx5qD8BsDFDOmlP0X4dk
JgFN80MFZxqcngpw2DpwzwhBt6YuHFiDOJsUCMGUPL0M4wSGhWurNlrctiyFLixhNKITUl95IpFC
hCkNf3BLUTvk7bcTvivHdXvvym2EGu2EbfjHmik339u3Erf6uGZPv3Grs63DQzIzD/dVp3ipOjRY
hsNDyyiAer8eyzKYUUYqOAEIInaj6VctIg1/C6KGmvvrQADkMgGQm3KA3MTLKypXAMX7cmjlDtjT
QdiClYHsB/YsNs2fAIcUAywMFoY3OAbK0aIvAy/+iWMk02vmLV+zGnGdXRX5ICy1clpkCdyPzIKg
c6g+QZY5BZesdZ4NqxoPJKq9m6ShXI+g+F7YwlBM1BH/qBkWqvmkLr5qhiU07zMwtVxwybmPoemM
sRZkYPjk68abvjOkbHChDzG3klvVK1nS2tG/ohiijV2Qo0NznOP1A71qmN0VrfmBIYZa0A8B7qhn
Wc4wNfAD3veGuBc2INpo1MgmzGl8pMOcFtxCNhyPG2EaNVg+bYTnYZw6wX9gHhESY0AYEXO5BokE
I1vxdawJHOgKzJhMrfn2Xqul48bUwcZQkByEfXu/YtY4AekBmCxyY8UYI1lnVjBAM8RAmBzOMivg
Gm5IKiWuywYb2ob+zHmZh+foFKGd1294RjF4jgOKbFcviY+iv9YXX+zuPKsGfehgSqVAnb5ubJ4g
HSDSxlVYoM5duC1HjThtsIu4aPx/7L3pdttIsi76308Bu6u1ie4kixqskqnN4nHJQ7k9tqUqd7e2
lgiSSRIWCFAAqMES17pPcx/sPsldETkgJ4CgLFd171OnTm+LyHmKjIzhCxFNUMZNtQYhiGkdxhmf
HzzClcJ+8f1yewv+USkd4x94J97exr1WOMJ/aDwJY7pGO+C9U9O7njfsVNjnmLSGqj7nQTZz8Xjv
8AH2erlET8Bx4T9sXAZXaAgrovACjPjmSRTmzsc9GzGYrOpul2jouWhEYBiHN10NO81364EKkIBF
rsZT1ONWvf0OfhUnqcfMpcZIVfod9os9Rk8KUwXNnAQ02mVL6xbwDJMRlIE1U2TxP79WRs+ZyM6q
s/Eu0a1SxmFEvVkwn9OR7l1wjnqW1YBLTJ4qhXTwSObSY3iZjqPkksSlyUxu/BMFi4BEAFd4VZV1
+2zt+qRend0+OOf1DcgkV8V53RrjJYP2UwJeMMBnCPnoCpGhqspFeE+hs8pZ9A0t8IYa1RCk/TyA
4e1tI8VYDRAXVcZqKMK0SJQFHqaUi0cAZUEJjAEiMP7MoWrchlw+ZmIRz9z1lknBhQS8pA/hzITd
xSf2tgHdP9fJFJqWt3SWsD0TQUQHBcvOHSMFbzeSdQE9X767uKDoFJqBgBB25cWI/gb+F9SXg8rw
3cAPGK+o+d1NtkQenJIMxPCKbE6tU8YmvjnOTjoJRIE+ZvmPF2Rks/jVCKQjyLAkx0NApaj1bhXv
uRLzw+yc3ARRlFwe4NiZMqPzcJNH5fjEYnEtilV1rqb0vXv/CV18iqLczpDDzmPw2GLZLbc8CBcs
/PIiFiUA3hAqQfmH7knII2DJ4EhUgWllN4mugEX7BhGciV06dgbVSgHiN/VBM1QEtOg7PgEZ7PtL
K+rSv167o7oUSpsUIz/fFOFUaBFOhUojH+M0pre3eCAB1JXGwwT4qKzXuubhdYn5lcV8MMiFqySL
P5Y2cgjNasdv+ftrR/wW7iOnP5BlcOgU79sko6jh4GfchSDtfK3+43UjJ6mIzsV6R6Luzzxgiyue
jCRF0jVThJL512vYf/zZPdSe3ZHWIzHy89eI7lgKBky7mVQt0o2Nh7QFNvkYOHeaXKJXWoOhfepH
NYiSiVu4wUNMapIM7uBZHO04gBGzZE/Na5nxs6YeSYtty8wfnGfA1j932PpjItBXzeAf0Ro7oWH7
zx24u10DrAPmQkfvQKc75gwgt4XOkaw0BWbzokl3lE8rBJdmNTXwcpwIGYBlA9dCxYoZwlthNK8L
HE1Olhsz49zoBvtW13EqLYw02J2ZAkTJ5nu1A0VW6UCx1bYdKHTR6cvXgETOdGGLUl1Yzo3mpUas
f8C2VsmxLJGx2odcXisjwUtIiagS+sVFvxgGvt5hCYHfff+poGWh3LQBayOxrrCsq15iQ07dIhd1
W3DQ/FH3C6BrhQaVGwOVG0FcqKTXY67nwzIs/YwsXFj6gk8y0PTJbE3CuRCrM9JWZ6wNdH81tYxq
Ust95rOLcP8uJXcF/cTg0v9+5BP9viX1DO6PegYcBfE/lXqWrtfvRzyj35l4zkqJ51QhmzKgjvtk
3p1uzh10k56XoW6UkE2DZgrsAP4cCOT2TVibmUVHh8pLgBPRhYuIjlwfx/pHDBswJzPrtcVDQ0zJ
pCzplFyUJF0z3tSk2gOwglMi8kiVBnP2K9z8WHB76dN1KBCtmlq0e8gSjpZ9cuB4XSbnjZxk5JpE
5BQjXPC/T3xyWWanOBabWzU1c4uJfSIzw7Mc2dijsnpHOvQ1jfNPWGmvNU+y/C2TmzdueLQ4dCbr
c6I7D65BSArICEjkPqHD+ysufX816hwuSf8vfbgaDsnBiU+el3XisqH1uU0et8nm4zbZftw+Efej
LUI/Qt8BcnxJjk5Wxv+g3cUaLH9ZDJGHmwpIzIzvqAn/l8HBgcbA71iJB7RxqGhd8tvbGUj0VVVJ
fns7WeHFfzgFjAfmaeqxrcaFj0Kl0epL5QXrCmovDlcOC1HxBb6ZNSAuw2I6yGtF7NRrXIA/gTr0
ay4UbohqLmnjminBtPFfNBQEN8wpZ4NVB1n4d31u7f6xUfKW4V8W55n9Uzb2+cbGc1zz52RekueS
HF+WFS+IrBAVpDzs8/7DVJqkghUqF3ChBA8+CxW/CFnOKAfDi2jyk4bYg+gaAH+gWgnBxPobGwm/
2ExKhd4Dq6rP5nTYRMQQzH9pnNlut3u4sRE0kDFis/x1TQ3x5ljdVtq6CLNFEIVf0CTzFAr7pEYr
IB2/agIIyDwvgqoxWJB5rio0456hZZ0mWf4Bs2UPQcO6sXFEG6Ik6R9wRwZ+3AKAJMzCrF+gg5ZG
TeAHFiA/iKLPc6LvK3mX5JhNPAlIIg5tFfv8qDMo5ZDZLHEQI8EoS1Y2uT9WNkFWduHUXazkZPVe
lptyuG1LjPFrVzAwSN4iBkeHUdNO0Rs2rPuoojH7jMAVVchlqY5chuH4qrgildd36mmOH843Nh7W
wcTiIxK6W2JradW7gutqUSdVXbsCUuWhRtYCrJo6lFshYi3qNTlXgOdjPHfn4fz29uHDKUli6HTn
Oceoz9Lhs2TYmYNol/vuDwSHq0cwPddky3CtFFQDMGLwnw7t8Xhot7dKFhn6WPvK3XG0byJcsqTt
uRK5UfzRUdIk5QF/n5udZfN/Rjdby0avw/7we41e57vb46P/yU58GcVc9JaHySywks4F/iq7ahYx
DhqNTFJxc8OC7DNPgoilg+OADOTcwAia1wDEiXi6L/B7Rw8wc3NGrzspF1iPsRaS8qdUKCcjp7N5
AnETRX+LpPNFEOdhjrRInZjzRkggZEGvdZye+IANHvRuWNc6wRKUCIs4zDthC/5R4jqk50UkT95F
MEgHRbNQcnFJOYHrH34hG8Dc0pkGnCAn0LlhSmlQXHO1e49K1TVn5D3xBOoTJcIzFlEDPqdawGfQ
NOVM9U2FUlw0vUgjSFukEcnOo06Mlltq7D/AoCx+kiiIJwtg91Crzv7u9RqiXl3vYak8emAQLZCQ
fKKEvYf6lJ+SfEFkEvYnsa0cIdX+ulSWJ5TLQ7jrbsA2Z/+qD15I7O9rtGwbyb+H/PswiZIULeR/
hcivZAHSsxiDufd6EMT9l5eNiNm8gRthKFhGMmc7HCuDOOlFsHJla5Npdyb32Az32KRLcYP1enP+
b2Om0YFe/5fDZ/3OTD3yvf6fiyk97QbnEKQW7H02NhLhunOMJ7R/hQF3hj32iw2P5JxWso/X8KEs
yO9NcgY3CONuTpkAg0vxGQ0U8CUS4qQOBjGXNqTnjZiMyBgOdIpofqdMWyd1qKjsOUXQARnLhb31
ZWhyrqAGt/7ncQ5YiI1QBBY4RsU1oezfkxMfPP4ApQCOSefh5pLYbF7nBrTsGIh5s09CfIR2INQA
/NHr9YeLLAcEAb0kzgyLTE+kQqxzcyWi0QaMYkViJ4oY9nEyC2OI90quOzfBZJLSSZDTzrwl/+71
+tlixkOydxIuRNKoGhCvKSNXkyX8GPZucKlF60O1db7HrR7AflwSHsEaR9W5gaU8FT48sBFYIwSV
4DN8fg+SfNpfkozmOY75dLlcsr2YCdsDviXz1jgK8rds2TKxRo2b4+CkQ4+DE5IxKMtchGQ4zk+W
vv9vshWP8SYK1JsITlfA76L8vCEXl+TsXglO/CXBYn02tMJLhP/Uw1ZjTh4KRm3muk/6GIWiL2SI
/BbTFv5EOSuhdlbC/4xNr+5zMQ0rd7u2z+U081mSW/t+trXC1iiRvc91bHleoLApkZ8K45KNjYdG
6HWZCWKwy0ZvlszrF2cYwm8pboJwISh+gre3xpefgtT+eAg+GXS0Im2z3e731Mo7VssXNM3DITJc
8k9xpOCkI4QByOfApgJ/4Lz2esxbP9PaWtkVnh1+dIzylWOUJfsmVwmoJb0bZVCdFO/jVqt1zPAX
wLRYFidqF04Ki43Q790Uo+uESEOV0OYaM8JlgtO4Qf2exqfgdczlTkoMchCXW1Y1FHFzVbuafIVd
DRQYS8hqp2VNUAjwEzCjsvSRio6OW9RE+jNzARgn7ByMukLPGBV6RvknCUlGIhnN3dQ3kuMxmVvC
8rZPjmdkan1H+fXrRgTlJuTUGWnl+IJcOysckEPr++UnXxGSo9z/ZqkKrBX9wDPXx/euj2cOsfus
BzGMRicsphE3bQpYWIsZN8CZFRHrfb8zIscjMjvxydPuoqeEKDkT96watyTxybuu8rsAhxfZv3/q
++RDV8ZRHZN3zU2fUNod8Rw/tjc2Hi42Nt79uEleaF8pJa+6L25vKQWw3f53N6JSfA4AKj+P6eSD
fuJMwz5j12u/w//IAOUzpt1F76xzxpEZPvzlKfnwl6d/fQqXsWPugpeNiIxI7JNjuLWjE0AndORz
8IbWzhNBp8jHTwwICJGqtGBUKVV+jD/55PQTmXzyT3xUl6S02M4nPglQQc3byBKIQgrbOwu/hPGE
2fAy71mfvOkubm9TktDuP34pOkZCSi7IG59ktJvQlnrUyZB2b2Yh+wU+SAmFpQtni9mRPPAMNQF+
MjgDCNh1BTTsUimVa9mXJKLVkBTPFEgK2gPy+c9fGjdDRHFgvaEt5RcpQBg6KiID/85KHBXKnmQ8
zigrirBwRS5AT8RfgyBFgO9DLUAPxDNhhXnMZNGNn3n8cln4FQqsy0pjW01tDP6yc/lp/5At3zCI
D+Uout1urn9BuaT4gDgIeh78BJmmQfZeGPlCDuU3an+soWIu+7OWuRianrv43qOd3AwYvaAFNNcN
hlOz92gPgl/I3Xb4CTcL3JNyL2XF2cDEpVu50WhD8wuSEEFGkJI5M08bjKQvyXEkgrAdJinIJQQ1
JEYCO8GRtGctQ/OQ23hjoyH/VvZnt00iioGOwK5W9DRC2Q5dHSD5ze3tw2cFnvd1w4yGrh4jKHXN
SM44ShIwwlR3H77o80K5Ug9NJHahieSKYbaCJoLYuCYYyJsas2iP5b2CUnOk4aRQ/+YQblXFvQxm
GBAcS6M7R5TczIMsCy8oA3KqOwWrg0tHfNw3tDrWc1QzdDQiyHM8DXviI1oA5qkzn4MCSvzOfRKr
v4UCM9WWhqzu8NKxazVSj3u4IAAjJABTeISLIwQal96NPGZg4CH+ZsBjQ5Cw0mzY7+AP/loD77ui
kJ6iSMbHtIhRX+dq5q+qA7Ghilu4DEqI4Qb1eqF+Y/NFKLvq5YWueSfMaYMyMS8TXwCNDCm8EGAc
8G++JEk3PKasjaCBM47ZwCejo7eS/DUW7SzJzRye22DXrM7PR2gQono7gtdZsNh81zl7BRhjMfYK
ESEZWfkHybqp6GVadAH4dnKKRncup5PhIs3AdWWYRE0ZMN2Rb5HRlIF6cDeXfRVHUbyQ9TkJ/yo7
10zE7OxnPHrDcQwhMwnvcab3eKlFTKw6qjz6OKT0ybD6WPO8gAy6qJWThZ3H3FWTt3rK+rAEm75r
tGBQUErYSkZXmlEfWmm2YlxKxFrKFFt65HLEcTLDmTMoqNvbRr29TOYUA8PaaFK96adOc2uHYBRM
tOekwDQPVMaJTGj35lGT+ac0JffTRLe4JuxY9PcfONgo5JUdRZl1g7NswVQhv2OD57h1qCMXRLWl
6FT7wTw4IQZzrx9mTQWNXY2MMAxikR/wzx51Bjpn6kboV0ohGK1WDGfeLMew5ye0ykZTU4VPaa/P
6kPPViY08L67iYSxmhAXWcO/TIM5y9/kgo0mQKOymbCmAdRqzxj8AjSZ0gliC4qILwIBakp7bdli
nSjH2lJIxCNo7b3bTJa7R6l1FG5TXvEnG4zyG6kqZvruJqA9pVQzm4GamiPgdFgw3QluB3ZVsrKI
4ign44iv1bBkrYZJxMGPldic5tWr59dG5Xwn8OniveKfm2MwVRSCduwUPjoAZouLe3RD3BwMgUuM
ffO0vMO5DD0+KxiZnP21/0+0/+Y8GpjIjxC8tBVE4QS5GtCpgTA96Ma9mYPhed65ZPqypHucipEy
k+WmUCcD6nBP1AS/8jVnqd+3VHAccdQDLzE2iQ6krnwqDx4Ikh513GOA/8tjHnSQgZM/mEsqKqe7
P94UvBafvpMuXSpHNCnWMfdLjLxdAXn4dgbLVJex9Ig2eHv+XcK2Sx9wokZIDu4Utt0nqrlNmW04
Y/TR9pY17bFF7dvkTD2pVAZx0ALysptVTIAMYSKSP6qpTHtV0QFt/grEelEBM1fRTh0zN1JiajOs
fy6TXPsMUrl3ap892z0jH2kbqDh4GKLiHo8d+denBhiy1Dh+xWb8jpXRZhXAaD8AGG0OYLTSNOgO
UILa1UNHE357ql+aDFJ+dTCib9YBBmJfqwcn3zIGIXlVh6WaB5MwZrDDCkl5UY0KIq9nCAnMIx8U
NEeCT1FaswdUwGGWuceYdO24/wGMA/vkw183SR/cbfvk3UqgQKU9RgWyfq1gVIK2fQDf9GSRYeR4
x74IgD2XZFxGN/vQ7XbbGlVHTkIVtjY3/RpeMJ8r6fauIwTT6jG9A/yVNcfzY/ddc7NsQGHcgFT6
11pDervukBS8DuVfJTRBbd2gGtBWRuBJ1ciaoYisGRT+NolbT5gZwTaHdiTNSIukuXCE/xnp0TjH
lrZxXmgbZ1zbONUjck64qvG0O23xN0Kv10jcod0lHl6HY0n45KI7sQNHXr2G6JTX3aevGxdkyuND
qvE9B2Z8z6vS+J6HjvieB0Z8z0srvueRjO/5XI3v+cyO7/ke43uGhCkXRaREGc3qriES098pRKIV
DXEAwuj/TcEPBVEu/ubhDxHBZxpE436v3+/02VHE135J+MNpeUA9E6Hjtwx4+HzNgIfh6oCH0981
3uFUiXc4rR/vcPXyrIp3+Iy5MxSkJEVi8S1iF75fJ3ahEanwSItUeOCIVHilbImzrwoeuGjcaDED
xa0AsQNFzYpkSKn4Rc2K1dJK5cPe2bqxAId1AgFOzTiA164AgAWhuM8QgNM7hQBMixCAF84QgBDK
uHYIwJEWApDdvKUhAFcBDdEye6hThfsp4Wfq8B4GDGt0bqMe2J3KLV4s1tycU8UmC7dgPe6LOTkN
rX4r0DML3u8RZ5LGLpOkefenl40RSQzH41kX7yPlNPRGLS5yUF3oyRQs4+c+mXBjL1A8SmOvkWLs
FZFRubHXqRNCQpjcyoISVKKomNvtzjWH9akyCevg74zvGX+HnaRayBGcAZDckYYkIWoqloMnlDJf
AmvCVanktsrwJ0Yr8CeK+4t57Q3vz2tviJfc+I4AFFWTyL34HFPJEoqpvCfIihVw4xK0wrVJRIGZ
AHxUDuLGxlw4B5UFBJ1LLExx4dRFuTBnUL2m1cuR8a795VpQGOPfDArDIl6rro7cJNHi6hjd6V1Z
kHTTB7Pm9eMm4x03xMepcaEUEB8jCx/piJ3dErK5AoO+ihB/3YRZuCETB27I4rxxg8pcxFkqfKY7
ucqgxKpMA/Hikvn1RxTeodmzKrcIbLlF4uBSMl1SMdSFECsQRQQSB1NDf3fDHCWWfTLuXoKZb6TJ
FuambGFWKluYOmQLE0O2cGrJFi6kbOFalS0MbNnCIcoWUjAhvpnQ/ENK54DzgKG5f4qSQecA3CmK
b8/xUXjIQKsvRZqS1Dki6OP/wS7Veb7s0k+NhYUj/b5hwEiPRQhQEjY4/K3kb1sCVxoMTcJGXdBt
APJV6gAjA8V4/6xBGc45RhxV45Pf3j6EAOW63d1RAzz7hhQY3v0YI4NygPkCRYI7ISyNsT5tYCsS
EsSHgfOojTj8/FORSA4gEOXzBsxD/ElOBQJM41aT4dJbfYQkuevEiDpwVqA3nx2CJhKSAGbpt5Q3
SQktnOIXEG9LARKUEqQ5Yy+4Ku05/B8ZHet/h0hJpS/ih9jN/Ot3NyO3EImWSymwJI+yBZZiOprC
8beRHl2vKT1KV0uPnr5ujEn/SJ6Lvn83QdIqcc2g4ffO4IXRec62HNuSsBHPIPChQreN7SiypEiw
v4V853Ad+Y41dlPic6FJfCYOic9MWcbPDQZALrakKj95Vy4+eQ+YhCq13dgAYtsT1Qnqplb3rLy6
p6SgVWfkkrlRM9sHrr4LoOr1RDxBhYinStGpcQSgdfeK86pDftSU67CdLjkLuylZP8h3El2iExcS
nTGZhfFH4L+kum6LSEXXLhnLCN9p73/i733hceTbkqC8++MQI/GRGxiTlAPlTjlQpsmBgC9S5EBs
DMix9QVbWFgvK0zhNJ9Fki2rZgp/zmcR72mo84iBwSMmNo+YcY5v2D1iANIkwhCKt7d9iADK6YzK
1i1Mtm5UytaNHWzd3GDrZhZbN5Vs3URl605ttu6Cs3UZ6LgcHOvA9RGx0hzOc5fV7kLvXzeuJTez
T8Fl7ICFDKlCfxsU70TV9J1HLbm2sOGecZtahAuTDre6Df5/9xd9YXzssNC/9PdpS9jm8oieEChY
GuubiWC/CvtazwRffCL7382XlygyulSCy2pypwPmEDMs8YGB/5XMBjrxGAzkc5NZHoIhsWANYWtq
HHKwHiPIyhd84LPfW+Fo8XqL/z3aQhdTB+StyWnLV/Fy35qLm9w/Fxd9G6btVNexjbH7s2/Cg13c
Kw821XiwuYMHU5f5GWea4AjX5L+e+yTpPVuXI0oqOKJYlVfCOzVIaWDJIZGxwVvUufDqURC8TKLw
HCHnOSADwIMzOTOiSIDebU6j6GBKh2cQlYLBiwx1qzQXWpjaKE/mqGBH/NWSBfFokFx1+ihabGbB
jEIs50kY9wVi2LPXQI7Z2hz2bqbomIrulMybUliqo5IlMric8XnjBqHFaQGQBMfZ4mtUziW0ORdg
blgoKiyRVHr4My5H4WIik4tZlHIxIwcXMza4mLnFxcwkFzNVuZiJzcWcci4mACOenzC62PX/RgOY
6D/uSvMbw29tYzK9//vl4neyLqGKdQmtb11CWTyzkuteAsRX3n0T/e5jIp75N7n7Tu/17ptpd9/Y
cfepgqrrO1ucJD4Je9frXoFhxRXISbjjfc4CArOFMyh8NYlWHFV1WPUScwTCHssx+/dIVWSkZBjE
cP9KhPVOKD7Be7kTcJDRhP0LOWThjH3TKhzyb9dzWmhLzGBQYrQjEmZ4b8n7bEzCDLsiv8zVN/2M
hBmqs2TyVFiwTgobilOSxFq1/Ca8EN8Vxc61QJeHHvNvA/HNKH/lVuUdGnfwgSwubWEvdXnDkUMc
8hwUTurQeO3P5HdZ23vxSRnHma6vemptoc/FFnrL1Yvv2L/a+n0QHICqbKN02f3wqYG4BLGE1wTe
SLjfF+dkdE5uxH7ThDOptpAbG4HKx4x1+cy1PV/mDJtruzR6x/DhJCxi3h3GjQQkIHH3WdzICbNd
eesOiDIin8kkhqh3PkkBADJnQFxBN4CysYLuwttL/V7aYbkAO/LTy0bguiffGhi+C2JMtPM84gkM
lJPFbhndsHumzue8OBYl+3ut2b3SLLsvy7avuv9ykyrYxv72XPCBFvRBjqJqO6PKWMJcSGBYVHtv
bLxT3iDDOpYAOn1yz28Z2alJHhxnXD/eK6b3rObxNk62MvkL5ZiaW7Bs0OP1T+XqoVzrvQRUhIsg
9Wbn3ZssBGjAD4tBFEKc5cQ7DHOA+MOHXv8gpQAKzd6NIVg4zEdj+fnDsxeF5738+jJJJhH1niUQ
9yQKRzQzkw7xa39JpqIDxZzFdD1fDtbRony+bnkYUFH81Zql5ei/ogd8khTPyjVrWJKJvZLT0FzF
oAiELBfUA4QQnlld2gAWV020ljlQFlrNWLXkSr5lgV9xel4gJQGet0COVDAexacC47FXfARQQFnZ
hVHZiELY4RSDmaAJVpjT0yH0LUkBV4EFBqAjODrcsVEFs1Qwua8RUrD7+RMEiATpPcfmxu6TsIst
k6Arq/xIg9H7OALMhYdtBBev7AxJENJKiVnQ+/xJ+0CybmLFMSDDbsjDHeClhq0B4A2IcXikgwR/
HDCxPn6De5wDONPucGMjwxL4NGS1xvCVlftVRSVlqSFLHSFlUuuFathXljFgGVOapCOaaj3g0Fiq
LrKTtIbibz64gJM/xjI/UxssuGi4+8wrPdZYbFYV/ASyWOTXxsbKvKD5cMqEOZg3aY31L7JnPydZ
rpihsbUpPsh8HxjUCKp3OklrrvyUeT6yGQIORP4Q4+Tf4PQfcJMxUWic0mzaEQuYst9Fw4wY/Izb
8U0Yn4l5wIXGiaFQDsiELMQSP4zGLG0+GhtJQi/E0gVhMDKxA8+yMJIgMxzSePRzsYshcm/2gVMm
AJ7mh0MQqz5Ti0RdexdvbDwMtK1OFt2oYtuOWKpjN5IxS1q9o+fdTDZbnJd1d/PY3s1juZsjezcv
tN0caZs5cm/mxe+/mUeOzTyyN3Ok7mU5u6s3s7EQRYpcuKn+ydj784q9P1+x9+er9/78Xva+vH8G
6s2mxg2fncswkoA1Ji4WvCJd05bLhyXLocwIJs1HYy0FpgMTxHC1VDkjrGHG2qkZ+Gw83FRkKlfG
Le0yZ+V/AMxLNh0kIMIpKjg85zpZdoOB6vmXj28aHHcpSoZ4BjAkgx5R+bgfIYBqHwxXLsIhhTdb
n/QXcRaM6eFZOGc29O9Ry4A6jf6JD6DRQTqcfgjSYJZxeqAA/9FWnkhIVlQE3+iQeVqPlEU90OGt
mcRbxnTe2ICt1c+TJPJ4ADYAt85bWR6kOY8EMRvOO99/3/d7eUcHOL6UQUTCcePpeSMWJpXHgkuk
I2T3ATfoX7+4Jw/QY3stIQl9Ner1n/K/vVfPoGCsJC77zOan/1IEy/CCHDLlWvwMjJah/e4v4rMY
jJiWfYLBbBCPAPr2X5nH9fQyVAfxxDOMePNgeAY+/DOaByBYIF4QjzyVg/MS/uzJvAEdJyn1QJoc
T1reR7rIKAM+CGasNZRac8JDs6Ku9IJ6nE8rrfzayxhzPUxm8ySGHr961ipwZ2j3x4cPqcC9eNAX
wB0H542410qTJAcukv0SQ/0AgdRIwL+KYeNXAbpXrMcvH9/AXMPRAKyiXv8DnxwMlALaF7E+Ya//
lreArwBIDEVi0Osf8oZkYnAfK1s+E8WePVLOg+D+ey3QeSXj8YdoMQljEPAW8XZ61E7lx6gjo8j3
/893N2h3wuyq/ru7B9DL3x//T/o/8UkRjCfnTlhPIfhXHg4BO7no2nMjJs8V5/tTjWp9N1iE0agp
iRf/XdAwEnTxLPb6c3kI+0pXf0F3kSPIssQNGMYXyRnFFYL3Od+d+IrClYF1ZQ+rMM+8ER1GGDaQ
+515iwwCQ8EujwIYqBcI/HIvD2fwAIQZ814kILLx8mmQe5dJegbIb/+VeRdBFI7YVoe+iAeMh2+v
YJi3Hjz47kYSGnW6nimBfBjC49V5A0MUXUJETPgO8I7rTZ6kt8Ulp714vTFEJAi/0BGfr2maLCZT
JtTwssR75Q2D2MsgsqIX5t5lmE+9YQIDBryTBw9+4RRB0Bw+fjry9J3hCaIHBpNIQnC6AUMkTxf5
tOXx9y/SkwQVYzHl/WDNNZGI09QbwiWTLHIkPjiKKJkA5D+OoeW9Gktq6IWSHEbX3gVNw3EYDKJr
L7mMadpM4uga1wnyA/yhF2RnzNToMhzR2EuZoyqTCBKP8U2CLmL0PtgsLLnjAUgsH1xEvZRmSXQB
ASk5IaQziEgZZB4+Y5nVwCn7mCVYjtVPUy/Lk5RmHvYPduk0yKYEssReMJ9H15g7ZUIsOhLdnCdR
OLy2JiCIIP2areKIeKPEi5PcC+MxDC32WE+KI4HCyCjM8n0vmYW5u7tBfO3RqzCDq8HLKB3BykHA
uHAY5p6wifdYkLQwk9fCqOV9gGkC6sjGdwmjkgsgqoCFyc4yWApeGfYTLyKw0+NzdSr21am42XCL
QnXzNAGezwtHuMRy1wB1h2pnQU7TEHe/toWLa3MAqKAwiBXX5zCIkxg3oNzl6SJGahFkrGHEscRR
sI3f8j6Ie5ItJVgU0JHHJLiEBabLCPNvy4g4LtzVijUbB2mKvpst70C2wcnOPErEJgG5KCwSO0s8
sArfTDyoF6z6Lx/fYFkxWKR2WR7M5q0HD/iOQlZQTgJcdnCwIZBgQSS5yIoiyUNrdwqgmLCl59hA
kJ3xk0tF+6LGJFUIiJxLzsl5aZBPKZQLYo/fBXj6Yg8Rm6B0lgeRqBVJLVzEhWKoV9wWqXlbJEsv
jA2JHzwvYKvwc8+vEKAxJeQfS0EEm3AcDotrgBEe/kG7CmT/irdCeR9Vag+dLfoo5YTYPYUH5Kap
bGXZHqIXQNqGlG8BUTnXAOdJc4IiyOYoGcpxQvgZOc7sv1Zec5k+OPHK+XcZGuvPPYyufEBFm/PR
eK09xL2F8fpYILq80iFSwVYEKjvx3uC+4uKxhK7k6vMso3kDwhgqzmY8aGSB4Q6vxT6Gk+18/30+
hRsl+z6ml335+noPMav6PNYsxHZ9CvzL7W2DJTAztF/SqE8gwoL45RNeLgDoyJwz9j6J1Rdi4Zpm
vIPvJDg2/d0+K7Fvup8/4fMvLI+GC61s+jdpo38EaykphqRXYYYXMnIXzFBZQZvnTHrYymg8ejqh
Ma9WDSBcvNRj7nFnZWfhLVMMX/Rws9c/mAb5yw9H3igc4eUOLMk8V9mEVh/ifMU57EWeG98jy1af
sFrkS7xRqzq0wFbCCQS8r0dUxt4McEVwrsqafripzk5QTG7dLqgRDRL+VAjBEI89wLLuMwROx/4k
ql16QtJG1uuz+QTT8hCYE1AUwq0imn9Gs7M8mYv+dlz5zczsHRxkOfLMaLfOgiWz8cppznr96ua8
orFr7zLImEcHHUE/DsASEWcGUznHA7kLilm8mOAAQOuZXLIazfe5iRrWFcznYKUfjqg1XGOEmXJg
3543bgSoAkXFK6ppc8Kv/FfxOOnEhK8oaFr548d2/thfDZwROoEzGhpyBoD9gkdc44ZDgTNUaMQ1
5zFJ2G4+Oy/CXcfw9vr7L/KD5fKQmS4PMifJG+ae+SC2RhjniRd4QF/FnOZBdsa2CQktnAK+c/JG
rdU/5GsOjhIWoKmBF8JCrA44YAgLG87lBE0l/GqfOOBF9NwrAEb0zGbgbXp/EB4U7QjDAnK7uXlH
OA+9y2YU7t8GncM9xxKbVEZjDyUxMqBW586KtKWV1aVqxF2GZFEXuENsY97AWrgc4f3jcuioyput
Hx4LaI7KVdMnSdrPupcvWF22z8ItB9pw80YV+U05KhanBewgdPqneTJ3m1qnayKUaCbVeZpAgPRi
EzLCH0JUFn6lzef6jjpabdXtmgoGb+o20mXrY65O/flNVsyvY15TcGKNE7goaOrFSUrHNE3hrMoZ
H0RBfOae8/gbzDkoIujgd5prl2OCe8LVmUangaxRByv93b1OGDoT8ReHAKk1wFrenTduQJ7A/JVp
gdaQg4YxkWrUmGQMMSTlf7ACIeGqNvYz4PxJIvmTVyO/AcG7Xc6qQxJZzqqbW2CKiY+SX7ikv9fn
nehD/7phr+9x9BL2UERY8HE37/VfhDFIbrkgzCndbiHGQsdo4Gl2VnAYrlLemyDL5XeYMFWowyvt
q5lQZEyXLW9l3Qz1YV7topsVxL8kmBKP36WgnORFtMjtrTZRoJ25ai6MY5qyWHpbO/CoVEJQbjky
5c3NLX8/ashqZXbaAoRzAqsXCzYxHDeczrIro37NGdhjnYBecwjqOD+RMcdiLcyYUITqi10oK4Us
r+X9Msc1lcI5LjAxhPTpIsYnjqMCXPrFnInm2MKvUee+g/807txAlGjmybwJUW9wH8U0y/puxs0R
5SUnlTXyvclyizjdeb2gDsYkC5VfHxElw2rkdjGNTUZamGqxaDZUILX9pe2Ze8e5cmK5K2iexqSA
1jwP580gHk6ZOyNDDpmjITBsckQJma9weoKLOCOOV0VCzJgVjFCg4IpUdAx2GQijFTD0XN4/8Woe
sc7YIeR5UXZREilh9eyhc3PCXYHkN+YNdAMkpDNcFu2M2Q18f7tHXnsfjGuPX265drnFSxkF+q4H
U19Si0iUnNzy6eQubvrP5gTEb5455Txv0T+mBqs+C3fZDtT0Gq6zRrk6+Fg74XKVXqA7rWroTobT
NJmBCzHiBvY1SD0LM/8wuAjjCdrAhYydYe9o/GIBuEojecCR42ag0hReMWUDyPzD4IJiFkDMPwI6
yU3jR5rkZlxY+M85OZ0xFul4Sibu+Nen5MJKYAyT4uJ7bbr4Dn5nbPspmQC2PRqVkafd5GVjblhu
JNpvn3zuZpiJ7QifvO0+Je+6BRbhw0KTv7HxmXzo5gItsk9esR8plxvklP1mceD60tA7UqXGhYF4
jBJYMCRghkxj37+5aNwoj/pOShjb3BGAz7kEqF1yefiYZGCiIGtNIVxmTBvPzxsJmZOxTxQSfnXe
SMCKRn7i7B/7XihlLZsK0KK2VIuWAMOAXjd8EtMGGkXw1mbnx/QEotpM4I+lrBxK14x6t96lalI3
ORrpJ3zXmpsRDRDzqSp8XWUFpgSoKD15bQM0yZ7zYhoZkbAFI4djzFADRLp+3UjgzczULZ2HH25v
H1JhSF+c/6VPPijk8t05Ue6it8UtnirvL6yG/+iltAjThveWPEba/fWu95kL+dU3Ghtq4ez6qrfe
1Nqrq3jpGkOp1T2YkE5O760bWbkQ7jn6mhfrrcLIl962xWM+EuG8qupZ/ch/sV6ksyrnft6TPn/X
dz589SymPDg6bNlebYpRFkfOmEi5tQsEyGANBrUQbLB4pxob6lj2wSK7htAVtRmpeRrOgvTa2dFF
6cqq/OmbGuG69DazOb6wqwPdVe2BsNdnjM7/9//8v6DEDC647RX4xInQRCtX8qxWxFOO9sCc+Fc/
dC6JifEw5V+mQTZP5ov5I4EIoB/Ut2BA5rhQ7sYRJzz0rHWgn2mBO75tyA45nTz8inNSm2BXtn7o
jkHR2zMzJmiZ3FJtleGVqDJLZDNqI5pMkfdADgSxRnwjGBZxkpQaJEMuIcj0rOUb1iC24bruk5XU
dhRySWrxXJEX6amy1G/PidTrogiYs/BSw5sZ7wSh4T11vVZfAWQEN59gMtp5FKDxhngIictHfw5B
a8HomjMS5jsmXHZvuLw2kA+Ot3SWMDnd5CXEtj+OT0C3aydPX8IGOaYnPrmRDykN86KbkMhR8NWn
RtJSBu+TY+33iU+OF2RU8gY6HpO5lXSz9MnxjEzdCRNyaiX0+z45viDX7hIDcuhOOCCX7oQj8tyd
8Iy8dyeckadWAsAtHn8mb8vG/o58KEuilLwoS3tFclqWFoMeuCwxpCQoTXxDktK0jJIhdT9vI0oW
JUkjSsbUBV85py79wUf9440062Ykh70dOYdJZkYVMNVT41vqk1NXS25MyKlUsXfTJTlOS7AhEZCc
3t6eFtm7XUNMj/6xUtyN5/RpHM7Qou0F2NOzmvLb24ZSDSVFF3qtBhBdIUfG3BDRhlfK4sMbdcb+
cskOcIXJiHRFBE/oyO81rmjDb4H5IIaQpbe3o0YuH9y54lDNpt7nkZtuINgh8CEjvnrKxyU5jrhZ
yQXtZj3u15H1eu8/kWv8Aog7Wa/3/BMZsN9o/9vrPftEDvADMwTu9Z5+Ipf4AU2Bsl7v7BM5og4y
dPWycUHJNSUDSg6AkrE/L+DXiU+e0e6w11Jxenq9o0/ki6Om6/NGRAKy8MlxQBYkOvHJe9r90jKc
G3vPXjYyfh2eudLfF+lPXelPi/TPrvSzIv2tK/1zkf7Olf62SP/gSv9QpL9wpb8o0l+50l8V6W9c
6W+K9I+4hLYXH/lCux9p74J2jij5tYtbkvxEu79ubCx6Lek8Jffjovim7Ezla+dmSX7lnYHLfWMj
o+Rn2v2Vbmx8aVnepuSTkld6025sNB7+env7K/XJS57OXHGVhNeszo/iwLYkteo5vnV+osWPN2jz
DgGfyLlZC5uXnvkByrO/lMJ/U/reS3IhQvgn/6w77PbCXi8QxEhhGnihn7uB7VzaEwK5jiqN64k/
Olx49w/XcTQEvV80TiaAC/MLCcrgeYVxOLNd6E64Ke/t7fXrRgbkJSOTMjL3UFv7jY0hhctoSY7l
d5KV0shZQY3PluT4jFOxf7lGCFZsb4N545oKDv0YMTDpiY/U58Qnf68qN3CWG0C576rKHTjLIZGj
efeSkjx3lObk//hE83b1aO4DenNrvsimjbwVQoRzid7D0dHAk27e90W5GJ2YkIK/GrG4Zbz885dY
BWiMxSUDnT6kOQOfpvmJT2Jn7+BSFS9WX9g75/uF9y5Uclb40+aKR/NDcPHLWO+hmTMCDe2XXd6/
CliLp2kaXLfCDP9twAnFQz76WOCevxplfq8sRXFXFK6Ihd/hxkaeY7eo73eOT/Zn6j3/tEFVK+CH
CokBCaPwQ7y9ffiC+uqmPD4hT4HVUY2Aafc5bbygwl6gKrsws867fzt8/641D9IMn4WxMRfg63jX
0cXkKXAizHLT0ZelOIpsvOQFJWUTTPKc0Jz8WsGJ/erfTIH/VmfzgBbz94oaGeSMvSpmTMtQPkdl
B1Du8dJAeycIYXazhAadzNXGxkNzBcR5O6YkPEnGwqOfxnka0gwyCFh1MCBp8NHkt7cPw9tbYXX/
ULZwe6s3EPq+sGHm9r83y/2iydjRZOgL5wphnNHt9uPFbABgrXHnHf7ViP19sTU2Nti3VpiBJU9O
G6m/sdEIjulJ9+MnZmySguULcuqfyOST7y9V5IJARDrY2GikUCrwl1NwPWG7C9cN9tMrYPLK9wkH
sIe7Y5/tmVPhl/ATbUEMLNT4KU7D6ueO46zCNXJ7+/AthaqK9NPGc9p4S/1ej+o3jlofychbWrmp
H/66saG1M1B2NKSdocbI2tW/9nDLskGEY6RpFjpk1uvdLP3Oc9o4K07Adf0TADu9uLooEl22uVdu
2Fjui1AeglA9BIW3iB7FtFiZYmtz3sCVImK7Fom+2EA3rVZrZSM9M4iqmXUJbKZak9Fc74bpFXiC
ld3uYO9GxqYtkqHc0t+/Lnb8tdjxxdY6w2eOc6W/bpM9pf7N4RqbTIUlLTbZ02KTHa5HZp380X8C
FX2ZN0IGQgnEjnFT/MM+M6YU54jBW+6rblJXL+DKUG/aBE+NSGF18lzyIzG61coojM/3paMI+6Bc
6kXEDloxgzAGibI2dndNXnNSUn2DHzo8Qdn6lEXIVPd9xCx2eOhM/aTgjZqkanb80OEJVnZ4l6D9
hNaC+NhRMlhFQTSulkJROfts5c3oLIjzcPjRKKN+7+jZ2FmGcCfyRgv4onSpv0QXPBoPE1CTF+9d
5VvFIim5lBWX31ogGd+///XGIRT9Y8jMQGABLF9Z/+XSX8IGzHNjbOJT5dBEJp/PGC8C7RSJ4F8p
MFfQ+zlJwy9JnAdR//a2PNsFTXPwY+/3bpSUjruA2AXH/UmaLOZ01Cf9LA/AP634a7Pd7p+0whjB
0zOl+y0sBCJ+v3cj/+64MuBWIRofVMyCpNGMY/aUJLKKdTosLpJD+yJ5ql0kGjVfxYJfmix42b3y
mRqZJTv+ubgnLn9rZiST4LyNUHIKob9/WczXpT1fn3G+1rpiD4wr9h31b57Xu2ItlOjiin1XTN3z
9abu4BvxcSs5LMmOrWK0INSmXITn9iI4Z4a8q34PuJZGfXRD2gfq37yvtzQWonuxNB+KpXm/3tLQ
/E5Lg/DblasjGB4goAevG2FLDRPn9/SocXqqoIBYDAAm/B4L+MJ+Id3aV4lQbhKh3F++L9bzvVjP
D5RoS2rPKJcDMEgslwSJNwvG+c/5dHwxGcgWD0/yKwSg6fUgaEwfhWdfaJm8iPMzrVYrzWHolDnN
pnnV3nqjaoOoUARlND8KZzRZ5JgzoVxxsrXbbquKHqHiiWiQigL4nHxz4hc2j2He8G/O6MaGsR8v
fPLU/jrwyWf764FP3tlfj3zywf76zCcv7K9nPnllf52BwsQpG7eyOvL45I1DJF5RkmVQTSphbl7w
6X3L//3A/i1yJZAro7e3jXkhpbqxt14n+ASjt29FSBj4dvwFTLjw7SAMmHDgE6ewq3PcarXOTkgh
d5gwDHEVzhwqmPl2yABMOPKXBIZOQOTd9pWhZjkLcRxRfWcWA8cYfkCkgk8N1/nzfXLI0kreej65
VtLNspdqmjojvs9VpjD6EjGgJl7MyVNACTttKBIVn0xZ/dZ8+T55riQZ3VoqC8/UVMU+qFA+F5O8
6ZMxC0Hw100rrPSQT/rDiPo3C1ySfaD7qgjaQbUMmv5MYnc2juEJrD3cNOqsSDuQ7jWOKcmhwDE1
Y4HqVB1IILsPfqKubT5wbfEL1yY8Io7jQ4FuuvRkN4ZGrOPIJK4cS0N2o6rDOmYyu4oArRulfj3O
LOeKVE/5uzsh0loud+/BLjudHVmRW2A9ajBAhENaGPi8GnUWKkImSelFmCECb68l/iaFBjOHw5TQ
xk2YYWhIwGSWsSGZ6XLmZcEFw21TkA+W/pJGGcWrYf/rt3YRsFLrTFt2pjqKZYHYAH1l4GzcihG7
ikh80TWejE1/qWCeRgzt5caxHboT6royCCUFiSCorIyTdIZYZ6qt/cKqmQ1er5Z9q1vnCG5nlAIr
YeN4O9eNmIufUzxfMZhn4BM5Bvs6ECksl/zqR64TFJaOSz31SaqFHOL1Xyr1D+C1HY8Q4rcVjtAo
pccipoSscdlSensL40nFsQihVyHyZ0R2w8EvhD4J1W7MchU1ydUBZH5jcemgaA3kgDnvdczksaJj
Hu8PTo7siIOdiX0SL+FWWauiz2UVqSx+2s3iRkwQa/Vl3kiZ3K7H/u2wyCb75SNQud9UcL896Ec3
7dx5eKnRCqBisq6IJQTuusPerZUDNnfSNGdYUGg5OG2kvMGw+x1VBaKh0MmmXMwpnilhqc6LJKs1
SoX4dYVGKSjVKOXwYE9sjVJeaJSgBSYwSp3rlMh1yqCeRKxTpq1TLKDMOXi4g+/NfJKpkzvh5+P5
XcjAu9WLd8rrf2/WL2vd76s3fT9EzOiHB68bOgvgb2yIfaR9JwxGUC2Gzz4lO/zeZ1tGIzIlJyHU
TkKozfCH1RTnIi/gf+FGLswLTvbz4q35FHaiAubGspCUcZmFCQTDY5XyjNvblBkySI2el/JKEZKH
j4F2GgpDmhYDeOFeMjCZK3mNKEO7xqFd5A2w4MM9O6iw47BNIuK8NY6CHDQnOXuHlhly8KembsIh
zu+/xLmXfGcMaMwx4kvBNEkjDxRLyHJ8tkUqCi1k0AMr7h5KS1nQT+uLHpQPwLKDYf4ShKMdbSCd
726gqWWf8Gc95wX70yAa91kMP4YzihbbhS33+JyYQV2/UCuqK4WZi43wSi9pDy0E80bsF7FDjYBL
MBvGOpMXDdqLuQGlHgsWoVtQ+GOGkxrrAQeX7KkUQxQY4MdfjXp/Z4slP8g+pd2cvXhejXrfiUz8
g8gkAMKV5cmNyG09xcOIIbWyFWKpSnZhL+bOzlKV7Byc1J0bE+vtFNgBUKe1B6yBXMK+jLjtXNzj
f/od7Xvak38y0zYfdgXuZ76RqLqP5udED/z4zBX5kVsdKvEseCjI3BEK8tkxtHZix/ewjRS1gB8y
GX7xEG6xI1pk3Bscw8E9ERvFDh4Z9y5cWdRYknHvwMiiiijS3uw4hVSQC8DzTT1kRqhJPGQ4wWbI
yYcPG/HGxmdkdMAqTXHhlLacIsKJFZDy4cNGurHxDnhcLMzjxFGiODa4w1OWnV3oY3F8zQCWp7kj
wt88LwlhCW0Udct7AYJNxVozRgDLlLqD201z3d0dw1A93GQyRvlwy4t3G8RYLSFraERXUDbTPfZv
tCRCpjpvL+T8ge9hL9XGZITRDKgjjuYk18PTjfNK2shD7aWOSJpp74jtRT6kpb88Qfv0Z5R8oeRX
Sp6Rf6nCZ8c508+WvvFe8rL6+b4gA3JA/k7JGckIpeQzeUf+RsmYDMmMHJHvKIlBfnz1x/3+x/3+
m97vX3epHhV35R8X4x8X4x8X4/9FF+PXXIcDclHnOjzMuy9fNr5QwD45yLsxFeQv5oojWIFeT/xi
wuvLvHuQ94Zx4yAng+MDJBLc5+go717mPRZiekgulRjTxd8w1jFEmb7M0ZCdPMdCz+EDOcrx0zP8
dHB8mbOze5lzWSA08j7vPss3Np7ndjTqZ7nfe5Z3LnMmhe31mKcYjqx1FsYjAX/DfX03Ni7zjY33
ee+Gh2COUe98mRNpGipnQnwhxndmNkre5/4S+yeYh48qGse7T60PaQKhA1JycwG68M4/qBN24+Al
udHoi0Ae6UgHLiceBl7AmvcPh3n6WXcD0omXDvAUGURJQXrK7nSusejfqNN1+p9UxYAa5iYIlI7f
HWlnjOlqNUfzd69h3vjVt/TJm0oUD0C0buYJYIl9d/Omxfvf61P4B8AwIVoXOu4ztBVl0t8IfYsN
K/EL1XBxmKKKAapnfXbDZp2rnDBX0kMkI0naGX4iNr/AQ080J2k4EhwD1sD4Bk/h6PhTXsPc+Zny
i+YjzWj+ml53RjDfjK3gU7zICZevUqEO/LV3LnFxRFo8pL+yiC6dX3uK/qzXa3cAPSdJgwmFFkAo
V3jHvaHCb/gsV9aC6oxK59PLxhlntsgzyjX4HflJ37vK7a1vVEEq+cg+0d4sL26OAkMgFRYgaXKZ
dY7yFQwiW2CVeDAASiQcyqD+jiHdAYJc1HOY85HclZ7oA9dHWzEcq/MqNNF3zm4C2/6q7kTLpnPR
dJ0ZDFVaGJ07elGLV9VYu9lxyE0MBH9XPgZYvU5IcRWNAZWxMHKgQZ2B8mtf9EjDtrjfW6Dw6f3j
Hvh3vQdmr8mNsvsk+tl8xWEpv0qeCbW7CEkkr5PBiutEKuz1G+Uero/IdX28vq/r4/0f18cf18cf
14eirXyDgak4FIowRyv3k6IitDDGQeQmf5SArEsJaIhh76S8U5q5xRX+IbHfizv58iJIvY/nXYkb
MKH584jCnz9dvxo1+vDcaxbqJoFwIBB0IQZXn1k6fDz3ISjoJTNoavTfhhkGSLXDXvEglFDWo6yx
Vt/fh658Oe++ORe46Kenz54ePT19+u7pm38evTo4PP3w/uPR05/ePD99+vHo1YunB0enp6ztLyVt
09mAjkYVMUb51InmfzoHmBe5Vr9CLOyfzm9vG5DQJh/PxfO3xcaAoFJdDqPFew2YVGD/hTjtDYzY
s8jyZMZ+r5xQqLHv+/6y0SYRbWEoMvoRQp01Pp77LSY1bBQH6RUcJIGI9eVcg8QqBcR6+0kiYv16
Ds5V//09Q3z98YHned5/I5aal9Ko+wj/zKaU5o+8YZpkGQvI9mMHlo88OMbx5FM6o91HUTiZ5o9O
vJsHnoduZs1sCCkdD1P2HzzwvGaThYmYpMF1s93x/jTG/7dvJm09hrQh/GelPcZyT+A/K+0HLLcN
/1lpm20oSEfwn52ItY7G8J/dGyw5HMF/VuI2JgZj+M/RV0h8PIL/rMQ9TNzahP+sxCeYuLkH/7mG
AqntEfynTSzcq3He8S6CtAHfYBnAqEJAOhLvT9vbT4bjsa9Wmi14aFq1GKBbixTi/andDrZ22lqx
ERDL1FGKJRDvT4Nga3drWyt0GaQQbMVRiqcQ70+0HQzBul8d2TiJ82YWxFkHdykrLT8SrwkRb2kz
u85yOiPeT1EYn70Nhof4+0US58R7dEgnCfV+efWIeFCoCY6E+kxghbMkTqxW4CPxFiH+kc2Befce
Hb54m8RJ8yOdLKIgfYRfPPj0iHhvaRwlxDtI4iyJgox4j96EA8B9xoBnLI+sSx/rwJgeCIMxQQOt
Yh1FenGcfG0kg0lzgTqGspoyOkzikbuux0ZlGM2qTk3pZBA0th4/Jl7xf9qtJ7t6dWkQZnRUWl8O
/oVV1e3p1WF4y6S8f4iCKSrbJd7WHvG2N6Gm9mNnTc0p2BV3nCX2tAKwcR1buThtm8HmcHNslSnm
zHXozPnUevCDb9cmZsxRmTmZWl3G8AcI8mTMI34rRuSeE0c1EM7s4tpZWfUAN7ec1eEt4qyucohs
ibXNNwoXWfNKkjtei/xOvJ35lbFfMSmbuYtkM+LtuovMRu4isxHx9txFoom7SDQh3mbbXeYqKhlM
RLzNLXeZLSi0uTu/cqRtQ9pW25k2D6OS1oDhIN6TJ0+eYIsW8Q6/UGXa8Rtu0asM04i3uWl0tShX
zH1RLpuJclul5QZBRu2Ss5EouVNasliHolw0EeXM9Z4yqHazn8VnUXCvpGCxU7SCsqdb7ZKCRj+L
z6LgjrkaeOM0Nzuwz/et71sd2Jn29+0OzrOdsGNvI5bw2N5DLGG3g72yE/Y63ja2oR5/BmU8pXD+
cX63jP5pOUQNZRXAdO20jTayaTBKLpvTIEwB6kBMqPGZeG32X+vx/IrRmjbx+P9vbepUi5ct9oP8
ANVszq+8rfmV19x01GTSU16y2CHyA1QF1eysWVWxZ+QHqAqq2YOqtsrGp148aRBnIXr+e5uP27PM
o0FG9505mimNgiu48rfbRc7lA/0FMQrSM+cDAhK+nkF60v4KFulPbfx/X8MV7cBZZP/7WpZoe5t4
4n9fyQ+ZzFUtlsgqtB5XtIp3XZ9DMjv0lUySWd2d+STHRH0lq2TWuLn7ldyS1cUdqHD54MFf8CQO
kiu4SPDJxmsYJFeYAXweMM8sSCdh3PHa0JFio3W0hR5MsJ8MiUZLgSXANLzAxsEsjK71HPKdV2RD
CaEjk7j0MWdE8xwmcR4McQBt1m+8EMiDMJ4vcvIAmg9SGpAHTL6HQ4LKOl4YT2ka5uVVtfizez5n
ExEW19Bmu30x/aoJWT7gchb8Zz1hC2yIUaYRSqVNTBPqKC0D0jQrj+swqhTULmAfNoWYFNnFLl8M
QAKu161sZLOAK6ddKUYCdVaK560ooFKnkq0p861KL5sqPc0oM1vkdLRGfvfsaknKdEQLihI1zrOz
n8T70/jxOJCSIJERBGFKxsdtkMc8Hm9bGX/Qa/wBahwO6a6VEQVvSs7NNtT55MmQWlm3jKxbmHV3
d/DYyrptZN3GrJpwS2TdMbLuYNb21t5jx+jN4WPWzd0nw6GRddfIusuytnfGT56YU2Vk/YFn3R7/
EBhZ94yse7wD2493d42sT4ysT3itW3s7IzOrsapPHrOsbbppdMBxOYbxOBF3tjIi32hjkOpXTiGO
LDLOFykI6ZRlLr6AuJA+eTwOrOzbVna22MHoh8H4iZX9sZWdreJee2d3ZGfftbKzldwdbAeDHSv7
D1Z2tpqPt7dGeyMzu7vm0ePBqF1knaASvVT4KmiqWAPMLvfQ7pOtwDfqquKPKytFskBH42C8pdSZ
moypIuQ160npiI+Sy361aqo6Vl4fI1bjcXusbrprCgpDR8eGwQLfHEZNLD+ftyebu+O2XVtV/6qr
FX0c0JFSa5KiPrFU1m1WxvKLPm5tD9pjpbZ5GJ/JDRXGZ3Kid7ZVOhLTRZ4GUSWbKxY9uObUcG8M
/ymNYaQZZPpxUtLJoLG1veWJ/33vbbX/bORmKt1a3LGkJurVq7SO4Xj4w13Uh+zq5jbxxP/wsVLM
9QVNo+DaWsI8OaNxc5Qmc/DNVVaUCPWT2aysQKvVyOV44+gNjZOUioaslbAT+Vz41iQ4ZtMcEmYh
jglXybbKaVmt6Au9ue2x//+9t/NnI6fQgZfMMwRuErUpM+1gAlkupSNcFZpc8rnV9GajrDlKA9Bj
0YuQVh5UEVBM8E6sIeLYwo/3/qy0r9dfuomJayNuKvUwkYp+EUoxS5GNvTDKXzmMZprCakOGbeUs
5E2GHNrKaUgvdMmwnVuR+lriYOX6WcAryRg7E+0pdAxabs6D0Sg0+XMuH1Qmk6I2vjkJ5itqLayk
tDKFNBCvIM0wdxZcNS8x4pX3w+5eeT5wnRIZt/d2lIy2aZZSZ5zEVOZE054mPJnlC3Frp61UxTKg
NZfMsKdmUMW7CoWCz+om5kSBLc/KzSDzVyzHpqv65LKqiWxWUkYMTXuUqQJa5YAAIgYjOnxCtwpx
8kX4xXzAup6rfpFb2+9FXiWHcr0Kalwkak808x2m5APTvE4Z2S2yBVdhViMbv8ubV5o8Z8VIRaGy
Mo5eiyKqusR8STuyz7Sx8q+OfCDANefO1XN8SFhj5S8xM58z22bbymeOKVpQM4s+DvHyM3MZo5AP
IWWPMTbfaJF9tbMZ9RXPCXU7JdFovdXHEs65+eGxmc0xNcbAMZtjenbtXK7p2dOycfZ2reHwMjUW
m+c0xsS+2tlWjonnqzGqCLje9QaFRVYvEstnjAifalam1ePBbKuHgy+LtUaDJcwCxcPezGmejjA+
M7Pogyle8Wa+VSfIviEkH49Gr2W3QcGeuy8E52WAH2XDqkCz5LrQeUxJbnmqepGIi4UnqZeHuExE
w8m4zrJZhFGjlmqmmd4L8Y1nsZde3xA8m+NoGidWZLQ2vH4MxCjR79qQ2LqGwDJaIlmNAGpZTcmq
s/mYTgJ46paPZfngwf+Z0VEYeI15Ssc0zZq2StNH8T0K9ztxkjdcEn6Wx60Qhe9Syq/YCpbJ97EG
IXDghoe+XaBM82YlE9GoqxK3ts1MhSq24T+1ihKlgKoVw6RVKswSlYH1lLN1ar6rO4Y6Qe0OJpXW
pnfHrWxwmI4pwgmn/kEUIcJw1WqlpgqVm7ZaxQ2txDpFa+laudWsNtf1RdDbQn5XJYQW9q+rCuvS
WlXKGWZDEB9cm6I6TTyt1XUncS7XSewM9naGdm1rCXRxF+6AqdEO8X7YdWzBdQW6rHPjYGdrm5oV
rSPS5eejTbzdXeLtbqn666+T6vIejofmYtxBrluc4s0nj4Xxiz6Bd5Tr8l4OdoOtLX37mZJdprGg
7Z3hE41E15HtOo6VIcytNp1h9iGa1OzxY0/873tPCM0qRLVfS7LvIMs1WZ7ihrM7WyHg/Q1EvIW4
2+7Z1wl7S28zqyFDsG+ur5ldE/quKuHSHFRkvxexrlb/ZlvfoesJdu3529FqWy3eXQL7Z9tsrDBv
c/Nyf1hq/F9mqbEu93MXBfxX8jn3yeXcP49zTxzOffM398vdfAve5n45m5p8zZ24mm/H09w/R3Nn
3bTyPv830U0bjMtvxLasxbSsy7K4Fc/DJ/Df/Sqe3RzKffIntbgTblOKXIiidnRY3nLVInGrqL/G
4dI3dJ7qduVbDfb/HvznylutiyMusazLwoVVWKWvIyU2J2YdVcq8unWglBCQNpqqB0q92vbsKU2S
KA/nOr0oXkam3YtRyC2XXnNAdDbPr8vrUkVmhi2FXVdx8tmBmIVXjTD2snQyKKFRRLhH+972n4mH
rijzINWYIT7xhYnFjqWOt6wqVEsL1YXPLAHOOntWdSxyqcbnce7NYQ+qFdEZN8mUOewUtWIalyY4
rcJu0F3IuI6LC7o4Re6COvMguYnCls1dTOeKJGNTmOmVTImur4efDms4rUiqkY0U6YLmo14UQG3A
pkPdW75SWGTLoU91mBCrRbadui6HxapaaKdjvwgcBtBqkccdF0/vMKRVC+06tIUOi2S1yA9OlZzD
RlYttGe247b9Fst5vqBxHgaRvUROi3Wr2Jatd3XYr1vFth0qaIcxu1Vu546je7zWKhflrFVz27xb
5X5Ya/cW5fYcumeHNbxV7sk6B2wUXlBwNJpIBZy2jFXH2VF0sz6dUkuvSxqLsvMEnCGNlqsJsqPw
Vt2LY0qDfBbM1zogosw6p0OUWetoiEJrnQtRaK1DIQqtdSJEobWOgyi01lkQhdY6CONFDBaUm+v0
jpfZWqdzvMz2Hfq2s861wctY6+r2aNHKRAiuVwAJ3Z/inYgsZULcEg71T1sD+E8Kglu8v2kwo1iO
gzR1vHFEkUGEf5ujMGVmq8jjLmaxSOl4m94mc60MonASI9x81vGyPKX5ED0MuXnkZrv9Z/ipeCDi
b/BK5Fna+4aXopxwyz6VMPNTnHcY3JjxaGEWDiK6b46sM06Gi4w4vjV5EZk2j5LcyF58cub2fvRa
KcXfWfMyDeZzmjpqKM+m1FpaT/2SQhxvldQSXCWHQZrTLAxi9mS0KnClr66nmYfDs1WVKZlcNbJz
ZNWhfBalcA8ni5w9U5mNM2wGc/684zwYhPGIXnUfNTcfnZROtDtjxZIVBXhePMR6Mb+sm+vszzU3
48pdtnIzuecY0BiyJApHBnlkAn92QFneZjIeZzTHItZwm016NY+SlKZYvU4lirw4xlI6pVAjg+pU
UZn2SiJSNrPlU5/SbJ7EGfBEoKwKwpgPzOim0Q+TImcXEzbbK0lcs3kZ5tNmRCc0HmEZdDDYcU41
y9XEFZK9Uol8mlyWk/Tq6syF0mfeKjtEBMLag+QcieXPbqzhNByNaFxR/kernzUK877qZX/0GBRB
5TXnIkGOcyad+21ppyUJ9dUOXhdUlDxoCbYNpIcraK6H8szqPE1EklYz8RgyfOE1ksy2AmyZks9N
3iLruLJfx4oTj0OiasMRlGWqP4EaWoPAD8JPl3z5dtrtEnwFz0OaJtd5Vz9pOHss7Kkc7CBI2Vyy
m0t+F6JNMc8RAm4yzx38VuyLC8BsjnOomabhsOPlwQDQ/eBDVgyeBvkiBXV7nofxJOt4j/J4MXvk
bRLvUcT+qoKNcPW2eo1WrM69r8suW5d5EsYwAgoIppnzwi82NOJSw6LhUEDGe0atjnBDZq0KsT7i
hofi4JAzAlK+U9ERoApR1GQhsjtMzjtO0pk6zbxyrJS9o5EA0wgFAft2UwpB3RQuWNI/CjDY5IwJ
8famfUW7ZOp+UcbwnrIlzr4bO8Qh4ue1XhnKH6kNQpQo6PUW4FY1K8CrKrcXPK3O6DVS6szTO5HS
CxrwDZzyy8bzEtj1+TU/zEtAcMoTM22zeCmVbgfHQgZxOAv4e8nVlT2BM+UNknzq2A7KmWP4Nc1B
kufJTMrt61PC1adIJ2R7OiETHUIuQGe94KzsC05jt7xYSak0BOio2TwKcuCSEEMbxwdbfBZcwRbY
HKe+FyzyRLbDx6+xJmBGQtOSEdca3SxIz/jJFj6XrLQo+IN6pOTxeKxzp6K2WLymbabCXjnTarl8
SXFN8XdRL42icJ6FSPsvp2FOmVskUCDYn67eFVfKCoKNTeFEd7yUIfcUtfErHRqpYsgBkk6sH3KZ
UKDjsb4VWwexDivW9fMiy8PxtXBkLZKcHWoqrK3i8rop3GjLZRpa85gty4M0d3ZBTba6gTD5Kyb5
HniWzYpTvTbPojBj2mp6D8MZooHH+W+3sAZwl7zh+DAyUM1cR47Xs8Jr6kMJYxy9Y0QlfXPRNV77
yHyG8soxaMb+XaiIa17tC5Y3j3vKd/RLsjerOiZgKkXPlJPB+iAyVL7KeKvMtqR0tmtNccGutKv4
EMWxX0FzVfbH9vzKhnpTNOwKCVYA1IaLNINPnI/bd4GsqZiSqhkbVOZtbokrnYi+uxIEG6R95tyG
8q10jo+B/wdznCyjo+6jcRBllEt8C36mtbNVWkEHZcEMPG/lBJWyWs6aVwridD6QwZXCclWZTbBK
mZfMn9qjXToe+YDuYlpNFJ2q/Wb5RuT3cQX5LX+vZMMA82OO2i+ueQC5+blhL5r98reNwZSzXEgy
PichSn0W8UhJEaASyiB/gyuqfI5UrUr55Ki5dGui+3yAPl7vkq07LFxaObamcqafbDlyK9IBLfum
ljejE4itwZ6902AOIT3A3B57PKEJi9X0IaVDDJzEyipCiDr8O0b4gTiCNMgb4q4qxBhgvzhMFnHu
E4O794vbQfIAivZI5fltmZraBMo/h8EcQxjU7nHVU2PX1axTZmsMteIxX/cZdPcnUA2xqHJd7ljy
grp3rmPcnc6AgoGuMf5gkCXRIsfx58mcd4s7BEheh79v+bEai95zIsTxAYOUUSXftTDr8gxO+YXD
CZjFbOEyCL5FHz1yzkBLel+rU7F2Q2bNQl7olgyuEBttuhQgdV6mLvkdJ4mcqTfJXxMMfh3PbgGN
c5fHa4U01CDGv52EVO2Tk+RIdlt9fjroh5ityjPaRrHe10h99Btp586LwTi90uHzgY5DiU5l8fUg
MgtSCCiocIUVjKibL5e3uMqeK9IKoB8rOqwwwnXEICM6TFIu0kNfNZjSVU3YHHEt8SpHTqupYtXt
hEp1rapSiLnnucU2lWKOlZch2/BmpmKTCWoPX7JhmkRRc0CnwUUIC8A1pXZ/3dd5mcFJofiUOxI6
pexIBwyaKlV3nVPJcmj9GhjaNo9ZjrtntuS+Xo8Sm+fcIIF3IbD6iLDvVVIZyz5HlJ+KwHuXhZGO
iGCiHk5VdFc2ee5dSNnzpLwL0HaRSlCIUSXKFOWGNIrqMG0rlvJO01baZ4fkxaXTqXo9V4NCentt
h/eBQaLEBWUbq6iTx6gpMT6W0j/3/lYcEHy3tABGXVnIknbLDrn1bOPwigXcK7ilNjtJjqu8IBGz
MG5sAtYi8YZBNGwAnP6l12T73TdIDGTeBg6oNHP529DsfamWyOwuFGZOLhBYmLop6Ho2M/MI2NUV
e3tzt20rHwGIklraR9UHp77ucbamJUDH29yeX32/2dpZ9eQvo1G6iY85qc5bwrTyTOloMaSj5iwR
xAV+MzMwzeDnL8T6Il4SrpRgnHMeRtE5NkcLwam0W+3NWWZIu9WsYc6D/rHXOWwGM7N1TcMdbuVS
wumsaB60qSujd0zzWVQyvZ7XvKSDs5AvYDZLknyKdQRoth8GGY+hOUu+NJPsysoHyNLZMGAElSVe
x/mUZqF69sDalDz4k3RIdC503SgjBbibS/2nbtYdtlkfOzBUqwOGKPFBKhT/NpZnjVfzytdynZFJ
Vl322ZpWAYervnz4J+shIGvpjMIMfGQZlyjyxQmc5Si5ZHtBEaTt7qiFDdNHNonfyN6R2WqHs2BC
wdoRQHxhd3UfQZTeRydkVQZuaaYYF8BmNY7XMEhpLi5Y5W43sqnKDKuW1X31HOn0ahgtRrT+cFpF
sGEWDB49suEiDodBnqR3qWGSBoPmNIhHsJoriw+T+XUzT4Isr5GZeW5zN9XV2QF3DwGTody6+Zvi
VNcvli0GWBJ0o/p171pfbTSmotxmU0oJAHf89+WeAvumJovE3AFpn2C3DVsofiCJaRSldquVzCnA
Opi7vsC1xtxhDPR4lnnDxSAcNgf0S0jTBoBbEA+jbALP6yuWNlobwyjJRBtlVlzlbSeL3HviMOZh
wd2bckHs6XZPlhRcKMZM9nArLZmUqjkBAMnyPxtNWEcP770GhmVbZfZUVlFb1LJZAAqVdxdmqKy/
6zXj7Gn1kLedQ4YFUgDZp+Lx11Sin+NXFS9d7vgKVHXfxUU7ZA2CV5DiEOXCK5zvEK3e9x5LCwSj
zy0OBL/uAMpw5rkTE09muBMiUxjjTQYqCbOD/FXzmFGLslYKlHoVOcMJhm/NmGvs3AWR5kEYKTNQ
Y/JdUdBU65KVM/2jhy4dyt2TJ3NQTfjse3GpsA+jMIiSCU9cxOE4pKOm1v95MOGPgfL+11s+bixo
6Fb4V6ZVYR9rzumPXnmP6054wRlDo9asVT4F1Ld6Bsbo17oSST7bd9tOQQ1uLMFD1pXasMACA5pf
UiaOKwZ5cakKQXe4Jk7dU/KbthL8iPzZa3pwUHxrVVwZ5K7cs5V0Ql1Wj8UvfY84VwQ1t2GZGLMQ
GojtVTKvJldve4LYLRdmc8ISqWjG8uHRZlgadtqVjlOaTWOaZZUWSqsbrGUmZjcfII2r13h7LU2v
+1iLdlOKA5fCoiAeTpO0jphzzZlxNToKcpqHM3oXo7AKMWr1nrLEblu7KHbb2RJHrt5jc11LNH9/
PXMqG2HPoVt1+qG4lKouJSy32SmV+ZctV4l5mM7uC3dif7U5s1+yJYWVSx219F10GiVnoLb0F28Y
QcrZARObY6VKqYa8VyPs7ZXeGgqOWR2RTZV7hvpeq/DKcC6thG9by3XKZQyls+9ibbkJcRBfX05p
Sqv8aiqeOKZ0w7auVB6d2leU94SRaYrpKQnqvjQ2XzoLojoEmB+xslxkZXkmnAJzpzD2Kne6/tAq
e2aZI9TsfL9qLMVDl0uGKd4CGGa9VvX1h2q3ItuwOc4WsK+M12BIjXmQTmheeVeVc6iG0OTP3l9x
n/sr7qfS/NYdxxlo2N1es5ol0Oy69pxmXeWMUum8TDedxNph2+Ki35po3HldCOjGciNNKQNfdVE+
vttFeZc7ZvX8JZpHkXPB7cVesUEU8wqVCaq1aSShvdItMfDbdal94J6DK/o3XceVDEENVwXV9vN+
ONQ1WM67qGyYSeNXKZ7WXoqtteZbmgfon5k3A72aB/EI3Bm4TLs292k3xKB0HaYGBkf+Fcx6WaMV
BmWK44QoKY+dsiGFvb39trE3jl4bEmtDqSY8kCQEhNFpflirzDKsQ+1cFSuXWU3ZWgmo9BVvjlL/
8pJ6JWqG+ahGmwimQ4GdtPZL2ChfaFrcps6G3zY+KVSaLkh6qljPWSYaql3a7k7pHaFrauQ22f29
nhbVT4fqh4c5zbYnn0ap99aj1Lo5o0add2zq3F4tENi1Se8KilL+jlr3JrRtXitIsjWnNc8JZpYU
3EpwGHndTXKgTgt0wc1MlfMVIvysOavbWzVndXvPzV+0nf1RHw0GF+zeIcI0gaOnsErDDKCqsUKQ
uFY1IsrDFK1TeBV91bDq/cqx8odAxYNd233zlDaL/VfSu29ga7HSWKV8e9lmfysffnUwprbLvWkN
Znv36/nBvVpzUMERppSdHIliUntRxZtdX8dyoyhz7+l3A2oduennlmr6icVArg6hD8Xlhar9ID1j
4ZzRw61kSVcsnNOpr3TPu5otAYWyHsyustNN4vi45fq47fg4d3xbRI6PiesjTtH5IhHGjUzDIPRt
7u6ugVLifiXeL5m2p87VwZ31OyiEl6tv5531Orh9Xx382od0SQddWyoKS186a3Vv5+u7p7gN2I79
ttuxc4SdKMjy5nAaRiPn+alOT1akF6dKyeda9JLulZzfUpczYV5SiBf4FcN1hWyCXS1FofdXsbbq
4d8tKwCRN9gbSEJQ3c8ltrv6EtNVaOtJpBZhc5bECd5pxDt88TaJk+ZHOgFXQeK9pXGUEO8gibMk
CjLiybzGnga/bDpzT03gPCGKo0It4utcRyfQF1/c7fLJxoPimuw2aqL2XNAZldGaV4xibo1jr2wf
qaXudkimaSUOoy4WBVquvuYqDbeNrYpgYOFw2pQ9YLZSzFDefe/bK2nLYkvqdVZYcCw7W9obFWQ4
UTCHENXiL3woYg+Zjeyq9vIpKUkY6Sfd1l6uZ5ayUnWsXx/bpXhenncBlGAYROIxnCfzqgGucXdZ
d4ezRvQDyFN15/LZMibG3Lyl6qf6749SPUF1OtcP7Cr6AVVuVKI9Mu3x5WPWwMdRkG52dFQb89Fa
OhWr37uuosb68MhVd3kDu2r/3V6r+qjYU0uxe3SLMW0zHa0ay/+ChxzUmlJdE4FuVPRn7fpAi+Bb
TgtlB7Ks2d/3xWlsN/CRmyaReHtWgGA0OYfDxb9Nzdik6kSutiZSvF1+2FqBk6p1H8KkreJaYCaY
bTAYGDOnX/cjtl7Of7fnWa1ez+sOT+Ol19Kd3u+jqVZn8Z1RK2cSmcPSGpHZ4V6snrzqrPWembox
84zmQUUsCwdOYS0zSzy0e8pqqGwJQnjFwTybJhgzKl9kd7F8VInnlq0s3quN0+OvxcavzYrVFdUU
cKvG5LTG4RUAsBA7ZR4AJYvK72oZWdbZc5bqu1tFpop7CjrrZjF1nRWnVABDc+ceMD8S9uv3tNVW
aav4cQMKBth5EtyD9wiGM79Tf2xOQfFguoPJsAsJxvSLqmuKUT1l39i24n7dYSuO1L1ZXthTLHV3
dlKVBYbbJqCmd0E9Q2Hf4S0nIQ2cEyic+81i5aDGZe3UVN5vVSvvFaSyKt09OE5BScIw210QERjQ
yDAZhk3t/y9R6auTv0Kl/9UOO/83qfXNeXWedkhgZ304pXAFrm9stVphL7DvnMewuD5FtEBnNgw5
yDOezUN0ba64f0qXR5QvyEltLHY3kloVrJ2hGxS24HczK5W9lkiSNVywatgs2le83pIxXe7sYTxO
Csz3u7kRtasdx9Sm7tl7SIbNMIA992zrut/ICUgJbcOlXVMazW0+2liBcFgKOFg5RrUSSSfkB1u2
VWohoApatEpdkE8mipMmWNFFZNoo58lcSu3qOO2slJT+4bPzFT47Za44dY2BVA8ZWOKCY1Mf2DsV
djJ1LJgFSV591+46abfafYN6D6NwXjkqhqPcHASjCS0n3jW8KJTHmrgZjOeaLZJwxy/jzuK8Z3iZ
at2s69dhu4A6++i6YyuikoTzlU6xrjfrzte9oa3ByaO9ZTs7/GZvxhrK7PuSx1QwLM697XmXSTpq
DlIanFXs+DLewUGU5K3n2jD3xk3V7LdCiFb0u7j+fv9u62y0c2chL13GvKuMtlavxsXfXUjm7qtj
x5B6eUVwPHdfa9RbktcSHKg4ZYpUuRyHtgTBnWPhbzkB75GOFSSggEHRlLPODBKDmgFejRdcBYjd
YK3D2+B7r7kpTDTjknNZiTotG8fyTf7dv3fiCLX7NbWgHIpRDsj1AGHLlgfZMKTxkDZBnDwOhipO
jvW2WQevESEaNVTG/2AgRm1KwT8LdTLFBDtt1kuLEMlw4HOkLKrrOi+t9spXPtueTE+1DoZv+Wuh
BIxDMP3rxAirgJJRLIMKsxlpZ8dGxQyr15ADmCe8VIBuBi8z2/vRG4UXK0yPLNUiCzZfrIQ7UqAO
zV27XuwbsT4DpZGgMfdpvV/Pubn+Tq4tUDSsV7UPFa+VNYz2XTO7vjnvvevb7fW8J/mcplaVtq+m
NZFrVqSQZEVm0etVdkZlRpTOtkVM+rK2HHYv39hjBq4FzWCjyqKh/LlyTzuH9Uc3MmWa0fa9CXfN
iOzlylVnPEkDYbssZEGJ0aoBWA0WErx7/j0FtV9xrbTXdHOq2eqPnhUNXXFElA07Ai2pSyHcF+vE
jcfgUEp8y+IiMrLKQ2d9K0CClaEY2YtPSm5zqLKMO8FVkp9Du6SW4Cqpx3O3K3Clr64H48KvqkzJ
5KoRH2l2HcrnqliCWkRmsYeO82CAMuHuo+bmo5PSiXZnrFiyogDPi2COejG/rJvaRhwuspwDobol
dq7cJe5kdnCS3zOk+NovvyqRt2pIsa7I2wpTedeY2n9E0/5Pj6b9zSNm6yqIbx57rDSQjYWDPgzi
iwBonw1XDFuleKmrXzVOygF4rIuhbBRPre21giBWi8NUyF5pI1F4G6Dcg3Ub6NcqJHCC+Tl9q1Og
ZJjWs/zbCQTdfGNZr+CxAmJB/pC380gyUiozLC9S4mkg3EkEb2+J0h3+IsliOOXoqKpPUsl+glGh
Ff4MXA4reqjXW9zDzhJr+lDYAdCKe3K3nnUul3d+5UjVfmu+nZsOJFqlXIf5MJQL96oiKtSxl9vc
kvZyYkbUjjmeG8KRrV0OmCV+o53cpqam/7NmJlchmyuXBFVYjChGYzvO5ZXQW2IyYbpsiEvXniyB
qTTcpe64R8xV424lWzulu0MpUdiXiGjxO/o6bO3U4pjK3U7ce5MJT35cFdajpLQGFnmHSpRk9ZSY
QZXrllM3xCCMJ1LoJGOdBJMJypJWLp6+l8oMMVwopavonnhZ2E+J6lIuw4I16oFpkOOvNclWqR+9
WgNTXKG29u6wJ9dp0xHgs+K8FbUnc+G7GDJe7EsSg9KA6ZfWL4nKqLsUpPHoLsXmQZh+RXexeKFA
U4NYKEW48135DtFjB9W5qrbbVQTd7QtuCFNt47Yd1bhNfcausfH0ocDcpRR7qZ2xLYURtqGQN2WQ
7hrVZ/Mo1JCsKur+R2XdBf5iHYu9So1KCUMl7h7lZD/ZWhcrensE3Df8fxllptXerGnJXjLoIhQT
R/wnNbKy4FD18jk9Zopt5LpaRHniTuZqhfIMljp3kcGTlEVJq9m2Mh2V2fhUrMyjTsO3uBnx7S/M
KyBuTdG+Z+kCdE8DqTKQBdbSFxSSBxT1z2iQLVL6TYT0a3bhR3vkX9WB5YMH3//lgfcX7w1Os5cm
l5kHkiYvn9JZRqMLmrGQUfmUhqmHkAopjVve0ZR62BWPdWUaZF4QQ1X0ah6FwzCH5V4EkSe8zAeL
3AvzDDvs8WB4CAuQLLLoGnb0yAu8LzRNvEGQhVDdCOqD50AaDoCb9eLEC+FXnIVDXjEEowo8fGfj
QL1IDgV6GeQgwIHuQ10xBDxgpwhoXhTMIYUPpBHEEMYXeF/oJ1NT+F4YY0AxzPj24IPoFlpwgFQ8
RUV71vI+0oymFzh1XgZzMgziJAY4DN4AolPwXiex6BPvL76bwzyj0djLElbJNEjpiDfwXxnvOBBq
L6WzIIwzL8M+tB54f/m+8hx5ZRvaNrKwkQNKNF/aAVtzX4oGitBIdrhyh97JLUXzVnZDHV9drZ7S
I1fQqpVTU7evNZakarZcfWtXqvpSms2TOAMIBR7q3a33U5bMMFlSV8pIcnSjGLAStJeo3+c0nYVZ
hmZXglqvVkJqLusVACZqUWfUresMzgk7XV9Zq2G/I8d4egq3qPqYdEjiSi518wKvkJK5IGRVY71V
ddnoGDs6Ogb/qXCQHPpZMVj72kZQpFRi9ug1PYGubPVBY5K+2UhFDLo8GJ4xYWf1DBNnkcr5chep
MbwiIFvqPIG1Hb7X9+kKsjkdQnTwPEyYDHtz38ZSr4gb5cJWr+HZwyDMyx18HnMo4HtwE9d0bu39
2mxvyctwyw6So8bUVCSQRI+taaUUg7PElgX9iRNk5FW6K4LbFl9g1EFKA/VbGM8XufqBUSj1SyDt
T/V6lW+iFuWTrEf5pnRA+RpoFLMgbfZIrF5oJdWo1Xexa7ShsJwnS1jEmGaQBjUWUXvcEYdVErEi
p0oZ6mUt6MqK/Gp39ShANXpdq4DW+XVKKGOoVcz1uQJ3QQ/aZJ5twYmVB3Mq2x3SlHHN/pTgQJRR
wbpxO7RerLojd7a0O7LtQGioQl/Y2qobOaHaWn3va70+N6ugue8TbEFf47XNRgBkxNBSV5vBV4Ez
CAWcQ0JgQjqvidEg89wVpMEGWiiZvB/Bkj/++pCF7upLjubXhFdwN9QcQfT1dAVAQ3k5M0moCe9Q
V8WYRY6aQ5fuaI72hvfOb9aKd6n3gltzVJh7bdluvbs6cLP6jZ8CpmNfRYPs7hRmcPK4bXOfdu/x
2pZwm3Ut4XYUbBPl9lqAfeXQ4huB/6mLPcWm0lVaeGmtfINtSu0+swiUH4pb5olqqyAtBvn+ePTI
3YFj8EQTPxg65IzGefcRUJtHJ1r/Ul0KBe7mzXkAzc2T6HqSxMzcAZQW8LogTAoC/8dfs3FsyWid
G2mUN96GlrFJbLztbJntd95inoYTQW3qXzSKBYte7XBKL1J+jMQBBallx6PxqG7kLnOOVuFAse2x
Z2yG7XtkOf7DuIu1Hp+u12W79HVppKjhWNtqOFY71ieGa63S9DiXvS51aKuUQZVQ1qUC2FoTDbTU
k67iie2pj3JL4wp7hesp260ne3rOZpKGaHyXJ3PVJrSiFy6609yzjp1eEPMptKJ+95v1++/gwhy9
cFCu8u5bL021QuLIX/KqW1EMv4P2MpnT+Ctfcv9oFHppf788vG1F4F4uXLieU+MNsA4lNu27ZW2C
pfmrV5p042Zo1mJeXPyPqzs88tf/397V9biNY9n3/Aptehooz1oV21XluNzZYIAB5mkHWMy8zMs+
qGy5rC2X5ZbspGob+e8Lfon3kveSlOxKprEzjUl3ZIq6/CYvzz0H4ZfnZk9zGXS/iU9zQdnXk1sh
AMGQ5kR2O2456oP1qdI7xQn9oqY5H4LZ8wmYuMw59xL7SVdjNqGLDiGpU/48eApwc5b5xYitV/Xh
NT/WBY9faXBYqVkSzN+77cHdhIiguf19RdB4ZxpbPddl02iEFeMcAgwhwxlEitWqbNu8attTKbRL
XLYgNC6mju7xtBMzYfBEZAtAu8+irUBnUqIg/YJW3aYgMjztApVD8tuhAF65trbH1x2KXCO+owm5
Ux1JekGZKmq1yfXNnVhXQhFJQfcSb5Rwzyw3VYOEY+i+xQl7UJfBXjmVWYRfwGVTtjFSbkDdjCCP
E5fC5VoZnD9XL1fVPmubx4cxNj67Wfw8hi6u3scA1DHdEh8oUncnUYAtgKzej6Z69/LgLvDqBRLJ
EZj+6XTic++JQ/bIg0SI5AuHqW+LUp9H02DWMLL2FHbnNURpPFAEXf0o1LRe8u5x/lC05Yhl6aPi
w0j+g45mZpnJ6s9lr82m88TQJ9h0y6WoGQEh9Vbl5vGhMLDKsQRcj8ivmwyQGeJwl9eno//F67Y+
NSum5yyCHcdUBOIh9/vTxznKZI06lGeOaiSBqKg3G9qq2/5WpXyGYnyws7WqXMD2NHDUmOnYTlgX
2LoADpOUkRW/4cDVY0vdg5xBuV5demi3tMFJwpopXRYTOeSy2Z0QVRJ/uEPCRB9CnRlRnaGJH80q
mb8AcLWhOwTg41EL7Bw5mx1hqnhGmv8jlXPTmaTyyTVJtmFPmlEDDhxpKMXo4X8+RvbBf3+1q9sS
olgiJy1EO3ObJt7jmxA/EzJ1p14cTrMeuK+7dQeNuQY4Z4qY9qdcJxdcNNlQVOry2bpc1YYerZtD
Vdvy9UjiOajU3e0W+SNFkhwUWwDCjamXf4kfjjEH8ZRBbIf7HBSWZ14hn+dFY4Ks9XBXvj6zQg0d
TFAyNs6hFqAd2InhkK+L5unqp9lC/MPN2700AXpNWsMIDuCeatjq2QNYHd1j9WIVsq2QspPAO3/x
o8ejqMHIbMV8JpZSdHpGRzulztPF/aE9nQIpiZiBdiXJWe3uMU5eLs5Js4lTi1glhLhsAkkSd8S4
ifSbFmsLrH/rfkNaMqivBMynWpeauPDmXDoYRcRJ3bBnWkLQ5X4eaCqbwo15dwaPrA6clVtlNgn0
iBqDL9lwUNzefRY7ivuWSfA7udWhJ2oy8gAX8/q0rzZVudbAynV5LCoxtB8tlVfKCza0IyFehMwW
ZberwZUFl4EIAizXRLPJ/dtHF7k8c+5rnNcDHZw9DlD5dG1EeLDSt3udsX96Kl9l5bbIOyHNbDRX
lnvrzAEgF/ii8W6kiG7FRa6bzzSUj3P99o200/FjBA0O2PANnN4p8lS8Z59fgISWZZ2lDnqDpSuh
S0tf0OXPhIeQV2fwTBrG9Wiz8U5wzCwDB4bEzbCnIy7A4AdqydDFjTGT9hJsI7K/9NGCnbRT7h9E
OOmSALAix7xYJPlAf3OOiqwFvAAPt0ySJsRF6PHVJrGIkGgk70tMb+YVGmipUxkgeok66V1+9bW2
Px+/exU1u/WvopBrxPGUgc1mkCfaM3J9TOYy9u6kcEZrf0JOMgedafSyEIoq93ReyP1gPMQbf/hY
PLR9CNplQ9zMuPVOg/7oOGJoFwCVY9+uXQDj3iqqNDFSNLZ2GQU0ROzmfixRTAg66SaRqgMVM9GD
+xwy/j4Qmz7XXUGlRMCgJb+efqnlVjCzQCYUkclQQVkMOIXFsgz/QBLbjUU0QzI2iGJEtHYhNnBv
szc8DBHwr1BgUQAKTeVzVBwMyckNHHUBgaVfq91OLGr7x3JpbRirvGNtoNDWgjPhlY3nIvvdpXdO
6APdWc2f2ZPdKPkLqXP0Sl0Vdg6wGVBy6+FxE1XKCdaAxCLXDvBGBALoZGb51FQXgQCMW04H28mp
PT2L7j/2fxBRgYycGsJT0BkOYRK94ZlEyWMikPtgjWfQVXOnc7nWS7kQrlKslkhQECS17rP1kftS
aKvFyhHQa5HG1sUl1WJVs16z1q5j/WX4gTsVQ5IgZ2tFRuBoLY+FnPCEip8NokjWnXdrDeUXvxIb
XeKi8O2QOZTmnkEyq4BjV+iSUs8EKnDyX7l4gvuaqDHFBpQk1eO/pr3ieoaGZwM+M+Zgob2cIPPj
ttdwRMMsJft1imgN7mSCrXJdbqp9ZW/V2Xoi0h8VO4uO1JcTckezs9EcesHC/Hoqm1dAGHkZGaLv
hSpGl2teqcQgfktZ926bce8Bqvuc5dIOKmZyOFX5c72vpTHj7O9/+Wu9r/O/lY+C2H2c/bXc7+px
9ud639a7oh1nXdp0An3+yjk0A4MqZ2KT6cQFK3aI0gq4d1SdlVBJmx8GBtZiKJCDnvHjw+/T2LaN
MzV9vh+g7QArbuCgppi1SDIC+uJ5+mao1e/R/cWmX0PJ+ihKW1GzpMVSNY9YyNO8lG6rxcTYwC/I
TPgcWImH3q+7/Fg/lQJ79PxsluCom9++9lS+isxDMS4cMNtmsjntbewWJxjLuSptNgKUr53SbiZ1
Iw7XnvX70/MDQ0twqPZPXvqDMPRUsLZSQCD7drUu90fh1W9Cmh6g59h4Fz5aBVDM4dj62YyF+19C
NTWylEH8G4yikEUC5kI4pfG58oXdyes4yWKXfh2jT60qO5CD+Fmpno7IA60TcgFk02DMReRSngOF
QDukSNiqOATIGqK3TORimAAYcOqjl3hK8L5jgOxPEvaq69+3njxUbDUmytsrFLvBiCEUme27N5UR
D0WjJvMR1SBvIeDuxIQ7Bcby3YEpyH3PyFijGku1y83QCGXDZ1bsKKIdNv2ljyYTpyI6CKg9DPNI
lzLNWscF9IPlnmBJyAmr29NQW014L+y4IWigVheU1z+GmueA6dd4GpnNFVwX0UE1orssIeRXNMV+
BTRyQx4kF+rt7IuDGPOgweCiKdr3PKj6ab8uG1GpsY+wGHNukntpxx3F6dl6sqKTbuum+l/h6N/J
2VeCBYQr9FA0T/INoxm+LYvjc3GIB7DSS7jznb6yXHqdXCwULODeQQVcz/uFqJKru2OimXadx3ZO
Gqh0Fx1/8+GTJ2vr95TEY6ZDx7ZjY24z6BXMasnxk9+ldwSEmZvKEx6D+x0ZIrbU7hWDcwvsafoE
3LVlU5Wt8q2PnYOiOfrgYUpQh6jtr7TOR9HQvB02U9l/eGV7NLSEr11NeSlOQuBqJD6Z0GXVALqh
gtrmd4QbKKBQvS532iM6yMHU1ZvMJ7xlNMdzm9zsFCMHV1tBJmynD4LNvTNyKD5s5uIPVRPVbmdX
YBGJ81RSzgr1i3xvJZpUdmDnh/+phSvM/cWE5V3fSYaccnWsm7zcbAy9eS6gvaJzqvSupd24VJaG
QjPhWphNJ0RsvimfDdOFq13khJeKKWTWRf2hKG0Lrye8Oe0FCbplDFRV4kgQwFTj7KeN/N8lvK53
qYHuZmHjNZagjXK8d8XJHSEhL7WdN3DyKUrblo+d367dFocyb0qxV5MWP5a1ukv6r6ZcVYJLQb0r
gn6ETIKcyuVb43fXX4tj2WyK3c4+1Z2FK5zNpn6hmskZU4HRZnpE4sDxkTty8Lg84TBzjym8M/65
XFf6HsOzE7LZOKaqUc7OFonDv7Pi67ZqjXixX11ePObbGtN1gGstLJjU1Pl8MuGb2/kVmS4+jrqf
/MSgjsCxyW+qnSR9cHoB+ipe6ejO7L+E1jvnJbvc2XdW9X4vSxZua+uTPbdZ9YSsUfbqgEkZSzqU
wCz1cdaHePElBRKp2uY1Pakey6nJtfhQcvqu98wgPg8wiZi6VLWYC+XnWTRvqaeE22Jl7uF7TDkz
TF/4UL8s1dKgAzZ9ZkN7OBw0lgAcMrUCvWEGZ+J+EzSsqlycIw4cA4mfspu34E9jKqVhaYwnVCQo
fguqIi8zGZKlWDmuJtKDcauYOK6md9nsJrudZR8EFcds1GtNnDlYVisbeDfCxdey8SkSlLeT4LYF
hJz5HT49QM5h3vz2jgxGMxMLVUobBYcUZH4j4jmRwowS0QFRbXTqc5WKkDKDxdaYu/KOC87HRwAB
W4gSzaGybQ59UPgXyPi76DhEoLQEBIaCOzYrDMso6SaGFHiX1Gy4hndyxlGDYeUDirPsXJwRTaGH
3LBM/Vw/HSq9OTceBCpim3uz2m9qeWePTrvOPeJsEmigLpvYfZVWAVK3UvovFB7+Kpek2uLPEdsx
fZ09cXO2LdorK8hsxUmgwSMbNKxawendPb8pWG5X9fOhWB27BghDlRWhs/y0zdBkoROPZdMJFJ1e
w7RXSQbTT0T1+LZ33X80Ur6nd1lmUdBvUVZOA9oIhgp+AVshqmjLSKfsKxk2xXIo5q+cZBj9rY5d
X935L5zuDhTA+OmIJ63wZ1qig2qJO29yzBeE+EE8m3OUygjdM0qBj1ZIS9ULknpV/lMjUUVpr1Wr
bY4MqRsyJdCv8n9UCyajZeUnDxWAp0E6qwYZTax4SiOTdaHqI9S2nE2HleAiVnmkyPdbX+FOKsMU
gdEbszrbIPSJj6G0DwHU8GYW2rT0kQy9vBHnbIOS9Y5ZzzWeS8R6323NaPRIFzJpmQu9DaqqXJ7j
hGfrJbdnAdiImfo7UVFVDtoOyCyuU2yPzzvQDODek05Ez7ZIMMN90XZlfhnpDdJkI8md633aZQ7N
U7NFGjcTqWk1d4l/u2W71JElwr+zKnbnbqxDfL9RqUmfPU+Y+UHyZ4exv+///pdMPHkP8b/v/7N6
KBVYwfyoMcIIGezieLnqpxhPLSYhdjUzym5mxJ0Mi1hwB42ywS5jyqM/ZhNSyw0iyplcJGzJQU4h
eFTPsqR1b6j0MTX8VASBlfO7OnznQoghdye1uRVmcGkg+xZhO8W0CDG8UloYmKGsGTv3Vm4zmNCE
aKDgDYN0m/Qs7HJXIJJzmrgpNbuZV3eL71d1k8Sqm80vUnU355VVD7t5qtEXae/DODmppuZH42A2
oIAUMyUZLjq7RAFPu/QS1jsW5eiX2Rwele/Fd+fEa/PfcZU6WJbUBgTjddyjVga9Vg97Tdbjr6f6
WJ41ubDLH0UdnBC1KaIkFKixfW3FSR9vYs/4fM9CgF0IucmSx1uHf9ffaR/Oo1NLW+/B9wDJrRvt
x8XwkJ4tEGDse3VQ+LD1vOc5+qFcP5ZmK+qSOrmJxZ23PoTKck+M391NpOMRUSr6uEjE2kVDpZFc
xXnF9IJm1UudBzr9eBEzHHN2uPJL+SsB77aBs90M6ZUp6SaLlstTlcC37wjKRxmYb1+BQXtdfIev
Lv3W6TT4QKAIHNOiSxVN/ih2o+VeO66PtfIWjoEbm234UTb5WSVkjyeBdxfugSW7nf0MlBLVU9n8
ytVNF9Nq9TXQ+RQYQqPUmhAV97uoCDlMFSvPqtibp8L8jp+H6SDjpJxkzYayso3gYsZY0oU4C3Tx
gnibKVYG30WOuB68m6/A7KKWfyi7jojYJ0kfJMppJh+YM96wTdyp8toyNwcIjZDTz+MgnxAc5NOb
uAZKjmLMHORDltkB9Xg6SgxCK+12i3Apqqd8hqdqt3rOI/Wg89RcHnYVaI/V6ukVayQ7a0AKg8Sf
JOwvOzTV/jjOrjZ1syrXCpku0OUSPqKuL5l1CZwHTHtIoIJHixIbOpByZlcc2lJ6ieV/6SD1Xan3
RfD+xBKS5NKx130Wv6BFBJ032mfhVjf3j0FWkdSo+H3dPAufoqiC7fidJkkZwpIBJgSfksARu6ck
NugIE+P1NK8c64M2NuDwR45VHnLues1jceHnED9wB19d4VDWWToNLArFs0p1nvorGYgQ2PeHWh4d
BI9r92DnT8DuW914k8cKS5lMvqnTrkuxJXtVVVKfWjUGlvv6eEWOkxE1KbHjhvuGKhFXFZHXuO7I
vibPVsdmuRfB4qKirsTOdBTmdfQzFP/uKIxcyk42CiuQBwjX1P3TLdpztV7jRcnJaBuAaOGk4b7R
2cB/ydNqDKz+3rspfTnlu5Ee3tOUM8aLacgzamV9Rq0M7dLdiwq7aZaaRImi7m1gOL1aYV+DU78M
b3A/GiKMhQvd6k08JiI5uU/iRO/J8laum0atA5zzBjxHS0REBCsyXcJaZuilmBXYWfpXu+rAZNyJ
ZPm/ENHLw0nrkUeNxK4QZWYkrBIVelWGCveaA3YbJoCVSs50d7rrakbn87Lv2jmYjd6eqktsCNdN
pO3I77F69sQ/QjiQzHQthUliUP+q3ukCKBNPq63GLbCoYgUo4qtgHKofGPJPmBCu3OWy2Bh9kUAd
L3C1LiDds/6LqVfy3vX+/j6AI6A49ADDieu0g845mx8I5xgTIR5jE1Uyw1488oR13JqIgbSaAzD3
+V20ymXW+vVwy6KZyr5B2aygpDYPQZKVaH2wTWw0GhaWMW5VvBOLlyLJMRGigMiNUASxo0HTp3IM
wjma0c8bZz9N1uKfEZpgZVQImF5/MC0LMOq5/lJ28aAXN4v5WJ4cIU69nBgv3pQSC9hKP8RBw2H0
I+29tYXmYn+tkslrXrxUbS6cSTDcR3XSjihDPxZnZPOs++iqaI5lWxV7m5NsoEgaFdcLE+k4k3xX
Ppb7NfxFPZFrAPM4119UhVI/ULF9BGtHKrHH8Djq235x1LZxZGV99/GFepltOamB0tEIROM1US6m
aWFoVkRzVeWT/Vv1LHYBBWQUilLnRtWrO8O0QWYwYdTkbfACjFYrYAoOeiRF6OoUM8Da3fmj+jK8
IrPAyEm1iWPbwVcU6CXuk5YAIDL24rmtMAHVx4Nrthla7i92kFFNw7QJPom8RStxBLN6rmjFdvh1
h6I+YSlsi2KWd5RmXR/JRncxvh8xoPwjuW3VQVWk1DD8aBfUQDy1as3EbzqCFcE43VmBPnF4cweF
DCc+iV1pN8ptzKRleb6GWWkvZK4OTbkpG00SlLerbflcLjOhdawcQ8umro/StatuRo8iwX+8l5LI
7/9bhnDJJOhX8brWRRHoCfcIv5RhurO7u8z8/0O2+Hn0C5v8p9mD+MdNYER3mDQIr0MlMLKXRAoc
BPtY7YuYyvrkTNZz5H4KHIkVPm04/3lPLjHHwduUrVhnJI9rkDc8gTXtJgTfdUi1upYwSoRt8OtR
jnInT9EsjYs7pPKMkcL5+uX2S1LmnPRpptVdYDY3MpVucA4VmzPx+xaYD8Bt4L0IdQazABzPKuLb
Cxz+xmQllY3N/W59UAx+5aYp262QqSiP1bO55gVvyZBQJa98c/vlq54gHI+3HiquE31hDBKftIA3
83H56X3Zttl1uy8O7baWHqCjxv+Rt80iJybmmw2MnW4a72XrafKiScl4UvO6BUp2qohp3+31FSo6
tse3uOBa8fFgZO2YfBvW0rbYbeKp0kqp+q+MKZQWmrgmRE8wtnAEmrqAJC/49i48CIr9OrtSnifZ
ufSwoKJLGTFj96hgioaCzk2/zZTXvtrJHIAHnxurd3N+2Bvgi0G907OBAc+73dYiKv2gX3aomrYE
MXNoT2zuTU0G6dPL/dydOvSUMqenlHl4SoERcd2MbJsm6NFXeZYvOpB7f5JaS2OvX5jK6/zD+t5c
PHTCxI1T2P7dM8m96OHl6meGMranoYn5da+2p4cuU6+sYn6uVr/Q07N3nRcpnn0Pwv67bu3v4t9y
IFJ1YPzeZN2MyTfUIUHw21f7Pi/KX8QkXR/Kvbv+maBVskxmMn0s9VwK8Phk/BQTLaXyUdQ+0lny
UDRj8MjyEXntrF41kbtj+Bdw0z3T99x+r9DDebUq2zav2vZUCld7dch2lczMUyJOWwcRsBwZTg8E
DGPs0mz9wQJz1mfF8uWwq5veX4skCRsz0GAo9kVbuubscGi/CeDnnAB+yow4a9TibvGPvewiqnCY
7YTB1l4oi/ZbYr3DaOSFndJwACbaIRMabL8NqWP3zMrm/tmUDLBGOWarP25ZMzulaYzT4MvVRcIT
9YOSU6qdiQoc3Q7QqKfrC/hu60OzAZAq3wHM7tkRJbEIEgXocNWj9TEvjIROlitMAuSmsDh3igNv
Ad4NXuyG7vqRROL4HaFpeCZcd/LGWF1C5DFMtd4Ds9s3PP6N4by4qNf60sttNOY+mrknxlkqZ42X
o3rsZeP7qaKAOGKQD8PFQWRdD5LwmwkhLR8E0CUDeviJzsfSMYoew5FyqBkHI0HJ/nVJ9Bf+gAyA
65V71/ykzkm6/TF4GTUqki21fTh9sPxz4BojHT6EoP1/h8g7C2H3+4LzTRhpswCJ5D+uNH/k2yL9
6CbjUAr/wgX+Cxfo4QLhzOhCKMy+zVXp8fEPBgK0OjViOvmzWPEZ3ubeYiJhVHgPDDi623MVVm6d
ot7+qKL6J5A+8Wvh2+Nz+WSAFGDSViyCOaW5RkDQKxnv5FeQG7OVHn8Vje9KM2OLzLiZEDHBsTx6
h3ElWnZmlFXqV84Lvkps7D4xWalZJoVqwVfOCrQic0oNumKPuW+PcI5+Oh3vHM8qVS0L+u42dQ33
ARAwMo4jU4KgDuZb9OEnpIH2/fBDPXRA//mwQ9Fms9fMXNN8zogMvdnjBwOBZi7N/SKR2H80VBUx
wYcXC8yD1aK34AJ3uFxXrfh9PRqTKfEWHL/RbwIlMjc5JenPk3AQcPK4kyePD3/8w5fqWP5hOf3j
h08fJM7287ss+/RB3ITI/xKT92d55fBpXX3JqrVAVB4LwKkvkZxqTMloP4HTeP/504d19UXlpbL4
9EGQrH5+9394IAYu/6QNAA==
</template>
<script data-data-analytics-portable-loader="true">(() => {
  const RUNTIME_STYLE_ATTRIBUTE = "data-data-analytics-portable-runtime-style";
  const fallback = document.getElementById("data-analytics-portable-fallback");
  const reader = document.getElementById("data-analytics-portable-reader");
  const payloadSource = document.getElementById("data-analytics-portable-artifact-payload-source");
  const runtimeSource = document.getElementById("data-analytics-portable-reader-runtime-source");
  const state = document.documentElement.dataset;
  state.dataAnalyticsPortableReader = "fallback";

  if (fallback) fallback.classList.remove("portable-enhanced-hidden");
  if (reader) {
    reader.setAttribute("aria-hidden", "true");
    reader.setAttribute("inert", "");
  }

  if (!fallback || !reader || !(payloadSource instanceof HTMLTemplateElement) || !(runtimeSource instanceof HTMLTemplateElement)) {
    state.dataAnalyticsPortableReader = "missing-runtime";
    return;
  }
  if (typeof DecompressionStream !== "function") {
    state.dataAnalyticsPortableReader = "unsupported";
    return;
  }

  async function decompress(source) {
    const encoded = source.content.textContent.replace(/\s/g, "");
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
    return new Response(stream).text();
  }

  let revealed = false;
  function revealReader() {
    if (revealed) return;
    revealed = true;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fallback.classList.add("portable-enhanced-hidden");
      reader.removeAttribute("aria-hidden");
      reader.removeAttribute("inert");
      state.dataAnalyticsPortableReader = "ready";
    }));
  }
  window.addEventListener("data-analytics-portable-reader-ready", revealReader, { once: true });
  document.addEventListener("data-analytics-portable-reader-ready", revealReader, { once: true });

  async function boot() {
    try {
      const [payloadText, runtimeHtml] = await Promise.all([
        decompress(payloadSource),
        decompress(runtimeSource),
      ]);
      window["__DATA_ANALYTICS_PORTABLE_ARTIFACT__"] = JSON.parse(payloadText);

      const runtimeDocument = new DOMParser().parseFromString(runtimeHtml, "text/html");
      const parserError = runtimeDocument.querySelector("parsererror");
      if (parserError) throw new Error("Portable reader runtime could not be parsed.");
      const scripts = Array.from(runtimeDocument.querySelectorAll("script"));
      if (scripts.some((script) => script.hasAttribute("src"))) {
        throw new Error("Portable reader runtime contains an external script.");
      }
      for (const script of scripts) script.remove();
      for (const style of document.head.querySelectorAll("style[" + RUNTIME_STYLE_ATTRIBUTE + "]")) {
        style.remove();
      }
      for (const style of runtimeDocument.querySelectorAll("style")) {
        const runtimeStyle = document.importNode(style, true);
        runtimeStyle.setAttribute(RUNTIME_STYLE_ATTRIBUTE, "true");
        document.head.append(runtimeStyle);
      }
      reader.replaceChildren(...Array.from(runtimeDocument.body.childNodes, (node) => document.importNode(node, true)));
      reader.dataset.portableArtifactReader = "true";
      state.dataAnalyticsPortableReader = "loading";

      for (const original of scripts) {
        const script = document.createElement("script");
        for (const attribute of original.attributes) script.setAttribute(attribute.name, attribute.value);
        script.textContent = original.textContent;
        const removeRuntimeScript = () => {
          window.removeEventListener("data-analytics-portable-reader-ready", removeRuntimeScript);
          document.removeEventListener("data-analytics-portable-reader-ready", removeRuntimeScript);
          script.remove();
        };
        window.addEventListener("data-analytics-portable-reader-ready", removeRuntimeScript, { once: true });
        document.addEventListener("data-analytics-portable-reader-ready", removeRuntimeScript, { once: true });
        script.addEventListener("load", removeRuntimeScript, { once: true });
        script.addEventListener("error", removeRuntimeScript, { once: true });
        document.head.append(script);
      }
    } catch (error) {
      state.dataAnalyticsPortableReader = "failed";
      console.warn("Portable Data Analytics reader could not start; keeping semantic fallback.", error);
    }
  }

  function scheduleBoot() {
    requestAnimationFrame(() => window.setTimeout(() => void boot(), 0));
  }
  if (document.readyState === "complete") scheduleBoot();
  else window.addEventListener("load", scheduleBoot, { once: true });
})();</script>
</body>
</html>



---
# SRC0357 MT8668_Application_Processor_Technical_Brief_V0.1.pdf

来源：MT8668_Application_Processor_Technical_Brief_V0.1.pdf

SHA-256：f3d85275cf761309f66d86c58a3e14d65f402c4d921c7abed7a1956a2a0fcbe9

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0357.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  0.1 
Release date:  2025-09-24
MT8668 
Application Processor 
Technical Brief 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Version History 
Version Date Description 
0.1 2025-09-24 Initial draft 
 
  
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Summary of Key Features 
Please see Section 1.1.3 for more feature information. 
 
 
 
  
Feature Description 
Security 
Chip-Level Features Arm Trust Zone Security 
Crypto Engine The SSR, MediaTek's Unified Crypto Engine IP with Anti-SCA 
FIPS-140-3 ready for certification 
Application Processor 
AP MCU Arm® 2 little dual-core complex and 4 big cores  
GPU Arm® Mali GPU 
SCP MediaTek MRV55 
Modem 
LTE Cat18, up to 4CC, NR sub6 3CC 5.14 Gbps 
Memory 
EMI LPDDR5Maximum DRAM capacity: 24 GB 
Two channels, each having a 16-bit DQ bus 
UFS Supports UFS 3.1 2-lane and data rate up to 23.296 Gbps. 
Multimedia 
Display Display1: (1920x1080@60 + 1920x1080@60) 
Display2: (1920x1080@60 + 1920x1080@60) 
2 x display with hardware CRC 
2-layer telltale with 4 telltale checker 
Camera 4 MIPI CSI-2 high-speed camera serial interfaces; max. 4 data lanes of D-DHY; max. 3 trios of C-
PHY 
Video 4K30 AV1/HEVC/AVC/VP9 video decoder 
2K30 HEVC/AVC video encoder 
Audio 
Modem Speech 
Connectivity 
USB, SPI, PWM, UART, GPIO, I2C/I3C, SIM, JTAG, MSDC (SD/SDIO 3.0), PCIe 
Wireless Connectivity 
Wi-Fi 6E 2x2, Bluetooth 5.4, GNSS L1+L5 
Process and Package 
4 nm process; 12.05 x 13.1 x 1.065mm, TFBGA 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
MT8668 high-level block diagram 
 
 
 
MT8668
Application 
Processor
Modem
Multimedia
Wireless 
Connectivity
Peripheral
Memory/Storage
PA
RF 
TX/RX
RFFE
RF MIPI
CLK IC
PMIC
SPMI
DISPLAYMIPI DSI
MIPI CSI-2
I2C
GNSSAIQ IF
USB
HUB
Debug
UFS
USB 3.0
UART
JTAG
UFS 3.1 2-lane
26MHz Crystal
 LPDDR5X SDRAM
LPDDR5X
16-bit 2 channels
Wi-FiAIQ IF
BluetoothAIQ IF
CTPI2C/I3C
SPI
Sensor I2C/I3C
SPI
Ethernet
Switch
PA
(audio) I2S IN/OUT
SIMSIM Card 1/2
PCIe
Camera 
x8
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table of Contents 
Version History ·································································································································································· 2 
Summary of Key Features ·················································································································································· 3 
Table of Contents ······························································································································································· 5 
List of Figures ····································································································································································· 7 
List of Tables ······································································································································································ 7 
1 Introduction······························································································································································· 9 
1.1 MT8668 Product Overview ······································································································································ 9 
1.1.1 Functional Block Diagram ··························································································································· 10 
1.1.2 Power Domain············································································································································· 11 
1.1.3 Highlighted Features ··································································································································· 12 
2 Terms and Abbreviations ········································································································································· 17 
2.1 Naming Convention ················································································································································ 17 
2.2 Abbreviations ························································································································································· 17 
3 Pin Information ························································································································································ 21 
3.1 MT8668 Pin Map ···················································································································································· 22 
3.2 MT8668 Pin Descriptions ······································································································································· 23 
4 Electrical Characteristics ········································································································································ 100 
4.1 Absolute Maximum Ratings ································································································································· 100 
4.1.1 Free-Air and Storage Thermal Specification ······························································································ 100 
4.1.2 Power Supply ············································································································································ 100 
4.2 Recommended Operating Conditions ·················································································································· 103 
4.2.1 Thermal Operating Specification··············································································································· 103 
4.2.2 Power Supply ············································································································································ 103 
4.3 DC Electrical Characteristics ································································································································· 105 
4.3.1 X32K_IN DC Electrical Characteristics ······································································································· 106 
4.3.2 SPI DC Electrical Characteristics ················································································································ 106 
4.3.3 I2S DC Electrical Characteristics ················································································································ 106 
4.3.4 I2C/I3C DC Electrical Characteristics ········································································································· 107 
4.3.5 MSDC DC Electrical Characteristics ··········································································································· 107 
4.3.6 SIM DC Electrical Characteristics ··············································································································· 107 
4.4 AC Electrical Characteristics and Timing Diagrams ······························································································ 109 
4.4.1 External Memory Interface for LPDDR5 ···································································································· 109 
4.4.2 SPI AC Timing Characteristics ···················································································································· 111 
4.4.3 I2S AC Timing Characteristics ···················································································································· 112 
4.4.4 I2C AC Timing Characteristics ···················································································································· 113 
4.4.5 MSDC AC Timing Characteristics ··············································································································· 115 
4.4.6 SIM AC Timing Characteristics ··················································································································· 120 
4.5 Clock Characteristics ············································································································································ 120 
5 Power On Sequence ··············································································································································· 122 
6 Boot Mode Configuration ······································································································································ 123 
6.1 Mode Selection ···················································································································································· 123 
6.2 Constant Tie Pins ·················································································································································· 123 
7 Package Information ·············································································································································· 124 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
7.1 Top Marking ························································································································································· 124 
7.2 Ordering Information ··········································································································································· 124 
7.3 Package Outlines ·················································································································································· 125 
8 Reference ······························································································································································ 126 
8.1 Reference Documents ·········································································································································· 126 
8.2 MT8668 Companion Chips ··································································································································· 126 
Exhibit 1 Terms and Conditions ······································································································································ 129 
 
  
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
List of Figures 
Figure 1-1. MT8668 functional block diagram ························································································································· 10 
Figure 1-2. MT8668 power domain ·········································································································································· 11 
Figure 4-1. LPDDR5 WCK VIX definition ································································································································· 109 
Figure 4-2. LPDDR5 single-ended output slew-rate definition ······························································································· 109 
Figure 4-3. LPDDR5 differential output slew-rate definition ·································································································· 110 
Figure 4-4. LPDDR5 RX mask ·················································································································································· 110 
Figure 4-5. SPI timing diagram ··············································································································································· 111 
Figure 4-6. I2S master mode timing diagram ························································································································· 112 
Figure 4-7. I2C AC timing diagram of F/S mode ····················································································································· 113 
Figure 4-8. I2C AC timing diagram of HS mode ······················································································································ 114 
Figure 4-9. MSDC device input timing diagram of default speed ··························································································· 115 
Figure 4-10. MSDC device input timing diagram of default speed ························································································· 115 
Figure 4-11. MSDC device input timing diagram of high speed ····························································································· 116 
Figure 4-12. MSDC device output timing diagram of high speed··························································································· 116 
Figure 4-13. MSDC device clock timing diagram of SDR12/SDR25/SDR50/SDR104 mode  ···················································· 117 
Figure 4-14. MSDC device input timing diagram of SDR50/SDR104 mode ············································································ 117 
Figure 4-15. MSDC device output timing diagram of fixed data window (SDR12/SDR25/SDR50) ········································· 117 
Figure 4-16. MSDC device output timing diagram of variable window (SDR104) ·································································· 118 
Figure 4-17. MSDC device clock timing diagram of DDR50 speed mode ··············································································· 119 
Figure 4-18. MSDC device input/output timing diagram of DDR50 speed mode ·································································· 119 
Figure 7-1. MT8668 top marking ············································································································································ 124 
Figure 7-2. Outlines and dimensions of TFBGA 12.05 mm x 13.1 mm, 1084-ball, 0.35 mm pitch package ··························· 125 
 
List of Tables 
Table 1-1. MT8668 highlighted features ·································································································································· 12 
Table 2-1. MT8668 pin types ···················································································································································· 17 
Table 3-1. Pin map view ··························································································································································· 22 
Table 3-2. MT8668 pin descriptions ········································································································································· 23 
Table 4-1. Absolute maximum ratings for ambient temperature ··························································································· 100 
Table 4-2. Absolute maximum ratings for power supply ········································································································ 100 
Table 4-3. Thermal operating specification ···························································································································· 103 
Table 4-4. Recommended operating conditions for power supply ························································································ 103 
Table 4-5. X32K_IN DC electrical characteristics (DVDD18_IOBM = 1.8V) ············································································· 106 
Table 4-6. SPI DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) ··················································································· 106 
Table 4-7. I2S DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) ··················································································· 106 
Table 4-8. I2C/I3C DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) ············································································ 107 
Table 4-9. MSDC1 DC electrical characteristics (DVDD28_MSDC1 = 3V) ··············································································· 107 
Table 4-10. MSDC1 DC electrical characteristics (DVDD28_MSDC1 = 1.8V) ·········································································· 107 
Table 4-11. SIM DC electrical characteristics ·························································································································· 107 
Table 4-12. LPDDR5 AC timing parameter table of external memory interface ····································································· 110 
Table 4-13. SPI AC timing parameters ···································································································································· 111 
Table 4-14. I2S AC timing parameters ···································································································································· 112 
Table 4-15. I2C AC timing parameters for standard, fast, and fast mode plus ······································································· 113 
Table 4-16. I2C AC timing parameters for HS mode ··············································································································· 114 
Table 4-17. MSDC device AC timing parameters of default speed ························································································· 115 
Table 4-18. MSDC device AC timing parameters of high speed ····························································································· 116 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table 4-19. MSDC device AC timing parameters of SDR12/SDR25/SDR50/SDR104 mode ···················································· 118 
Table 4-20. MSDC device AC timing parameters of DDR50 speed mode ··············································································· 119 
Table 4-21. SIM AC timing parameters ··································································································································· 120 
Table 4-22. Clock squarer specifications ································································································································ 121 
Table 6-1. MT8668 mode selection ········································································································································ 123 
Table 6-2. MT8668 constant tie pin ········································································································································ 123 
Table 7-1. MT8668 ordering information ······························································································································· 124 
Table 8-1. MT8668 companion chips ····································································································································· 126 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 9

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
1 Introduction 
1.1 MT8668 Product Overview 
MT8668 device is a highly integrated and scalable automotive application processor with rich multimedia features and AI 
capabilities. The chip integrates latest Arm CPU with 4 big cores and 2 little dual-core complex, along with a powerful 
multi-standard video codec. Furthermore, an extensive set of interfaces is integrated for camera modules, external audio 
components, UFS/SD cards, and external modules. 
 
The Arm offers substantial computing power to support the latest open-source operating systems, as well as In-Vehicle-
Infotainment (IVI) and Cockpit Domain Controller (CDC) applications. The Arm provides adequate computing power for 
dedicated tasks, such as software-based graphic rendering and real-time operating system in critical execution 
environments. 
 
In addition, the SMMU with unique performance enhancements for hard real-time masters, integrated in MT8668, 
provides a straightforward hardware mechanism that minimizes the virtualization overhead of hypervisors. This is 
particularly beneficial when multiple operating systems coexist for various application domains, thus optimizing overall 
system performance. 
 
The MDLA in MT8668 is capable to address the latest AI trends in achieving maximum effective performance in AI-
multimedia, AI-gaming, AI-camera, and modern social video experiences. The MDLA is also aiming for ensuring the AI-
enhanced technologies to work sustainably for the maximum duration in various conditions. 
 
The multi-standard video codec in MT8668, supporting AV1, HEVC, AVC and more, offers advanced multimedia processing 
and multi-streaming audio and video capabilities. 
 
The chip supports rich automotive camera features, such as around view monitoring, back view monitoring, automotive 
driving recoding, and driver monitoring. These features can be employed via the maximum 8x video stream inputs with 
MIPI-CSI2, or Ethernet AVB inputs. The display interface (MIPI DSI) allows for the support of up to 4 display panels, further 
enhancing its usability in various automotive applications. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 10

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
Confidential B 
MT8668 Application Processor 
Technical Brief 
1.1.1 Functional Block Diagram 
 
MT8668
Connectivity
USB 3.0
SPI Master
PWM Channel
GPIO
I3C
I2C
SIM
JTAG
Modem
TDD/FDD
CAT18 LTE
Up to 4CC
UMTS DC-
HSPA+ R8+
BPI & RFFE
NR Sub6 3CC
5.14 Gbps
Quad Band
GSM/EDGE/GPRS
Wireless Connectivity
Application Processor
AP MCU Subsystem
L3-cache 2MB
DVFS
Multimedia
Display
MiraVision TM
Telltale OVL/checker
MIPI DSI
Graphics
Arm® Mali GPU
Camera
Image Signal Processor
Video
MT6685
RTC
DC XO
AUXADC
MT6363CHW
PMIC
AUXADC
MT6373CFW
PMIC
SPMI
MT6197
EDGE RF
WCDMA/C2K RF
LTE RF
NR (Sub-6G) RF
Debug
MT6637
Memory
MIPI CSI-2
VENC VDEC
AIQ IF
External Memory Interface
Memory Clock up to
LPDDR5X-7500 Internal Functions
Power Management
CKSYS
Boot Mode 
Configuration
26MHz Crystal
SIM Card 1/2
MSDC
UFS 3.1
Side-by-Side
LPDDR5X SDRAM
LPDDR5X
16-bit Width 2 Channels
RF MIPI
Wi-Fi
Timer Reset
Bluetooth
GNSS
Bluetooth
Wi-Fi
Arm® Cortex Core
I$ 64KB D$ 64KB
L2-cache 256KBUART
Audio
Modem Speech
Security
Arm® TrustZone® Security
SSR
SCP
GNSS
PCIE
SPI Slave
DPU (Display Unit)
Ethernet 
Switch
USB HUB
Neural Processing Unit
Mediatek MDLA
Arm® Cortex Dual Core 
Complex
I$
32KB
D$ 
32KB
L2-cache 128KB
D$ 
32KB
I$
32KB
 
Figure 1-1. MT8668 functional block diagram 
 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 11

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
Confidential B 
MT8668 Application Processor 
Technical Brief 
1.1.2 Power Domain 
MT8668
Connectivity
USB 3.0
SPI Master
PWM Channel
GPIO
I3C
I2C
SIM
JTAG
Modem
TDD/FDD
CAT18 LTE
Up to 4CC
UMTS DC-
HSPA+ R8+
BPI & RFFE
NR Sub6 3CC
5.14 Gbps
Quad Band
GSM/EDGE/GPRS
Wireless Connectivity
Application Processor
AP MCU Subsystem
L3-cache 2MB
DVFS
Multimedia
Display
MiraVision TM
Telltale OVL/checker
MIPI DSI
Graphics
Arm® Mali GPU
Camera
Image Signal Processor
Video
MT6685
RTC
DC XO
AUXADC
MT6363CHW
PMIC
AUXADC
MT6373CFW
PMIC
SPMI
MT6197
EDGE RF
WCDMA/C2K RF
LTE RF
NR (Sub-6G) RF
Debug
MT6637
Memory
MIPI CSI-2
VENC VDEC
AIQ IF
External Memory Interface
Memory Clock up to
LPDDR5X-7500 Internal Functions
Power Management
CKSYS
Boot Mode 
Configuration
26MHz Crystal
SIM Card 1/2
MSDC
UFS 3.1
Side-by-Side
LPDDR5X SDRAM
LPDDR5X
16-bit Width 2 Channels
RF MIPI
Wi-Fi
Timer Reset
Bluetooth
GNSS
Bluetooth
Wi-Fi
Arm® Cortex Core
I$ 64KB D$ 64KB
L2-cache 256KBUART
Audio
Modem Speech
Security
Arm® TrustZone® Security
SSR
SCP
GNSS
PCIe
SPI Slave
DPU (Display Unit)
Ethernet 
Switch
USB HUB
Neural Processing Unit
Mediatek MDLA
Arm® Cortex Dual Core 
Complex
I$
32KB
D$ 
32KB
L2-cache 128KB
D$ 
32KB
I$
32KB
1
5
6
7
8
9
10
11
14
15
16
17
2
3
4
13
12
18
 
Figure 1-2. MT8668 power domain 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
1. Arm Big Subsystem   7. Peripheral Subsystem   14. General-Purpose I/O 
CPU DVDD_PROC_B   Core DVDD_CORE   GPIO DVDD_SRAM_CORE 
L2 cache DVDD_PROC_B   SRAM DVDD_SRAM_CORE   
  
DVDD12_IOBM_MIPI 
SRAM DVDD_SRAM_PROC_B   
Analog 
AVDD08_DRV_DSI   DVDD12_IORT_HS 
Analog AVDD15_PROC   AVDD12_DSI   DVDD18_IOLM 
      AVDD15_DSI   DVDD18_IOBM_MIPI 
2. Arm Little Subsystem   AVDD12_CSI   DVDD18_IOBM 
CPU DVDD_PROC_L   AVDD12_UFS   DVDD18_IORB 
L2 cache DVDD_PROC_L   AVDD15_UFS   DVDD18_IORT 
L3 cache DVDD_PROC_L   AVDD12_USB   DVDD18_IORT_HS 
SRAM DVDD_SRAM_PROC_L   AVDD15_USB       
Analog AVDD15_PROC   AVDD33_USB   15. MSDC   
      AVDD12_SSUSB_P1   I/O DVDD15_MSDC1 
3. GPU 
Subsystem     AVDD15_SSUSB_P1     DVDD28_MSDC1 
GPU DVDD_GPUSTACK   AVDD12_PCIE       
L2 cache DVDD_GPUSTACK   AVDD15_PCIE   16. SIM   
SRAM DVDD_SRAM_GPUSTACK         I/O DVDD15_SIM 
Analog AVDD12_GPUPLL   8. Wireless Connectivity Subsystem     DVDD28_SIM1 
AVDD15_GPUPLL   Core DVDD_CORE     DVDD28_SIM2 
      SRAM DVDD_SRAM_CORE       
4. NPU 
Subsystem     Analog AVDD12_WBG   17. Clock   
NPU DVDD_NPU   Analog AVDD15_WBG   Analog AVDD12_CKBUF_UFS 
L2 cache DVDD_NPU           AVDD12_PLL 
SRAM DVDD_SRAM_NPU   9. DISP       AVDD12_CKSQ 
Analog AVDD12_NPUPLL   Core DVDD_CORE     AVDD15_PLL 
AVDD15_NPUPLL   SRAM DVDD_SRAM_CORE     AVDD15_CKSQ 
                
5. MODEM Subsystem   10. ISP     18.  eFuse   
Core DVDD_MODEM   Core DVDD_MM   eFuse DVDD18_VQPS 
SRAM DVDD_SRAM_MODEM   SRAM DVDD_SRAM_MM       
Analog 
AVDD12_MDPLL         19. Others   
AVDD15_MDPLL   11. Audio     Core DVDD_CORE 
AVDD12_DRF   Core DVDD_CORE   SRAM DVDD_SRAM_CORE 
AVDD15_DRF   SRAM DVDD_SRAM_CORE       
                
6. DDR 
Subsystem     12. Security       
PHY 
AVDD12_EMI   Core DVDD_CORE       
AVDD15_EMI   SRAM DVDD_SRAM_CORE       
AVDD075_EMI0/1             
AVDDQ_EMI0/1   13. SCP         
VDD2H_EMI   Core DVDD_SRAM_SCP       
EMI DVDD_CORE   SRAM DVDD_SRAM_SCP       
DRMAC DVDD_CORE             
SRAM DVDD_SRAM_CORE             
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 12

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
1.1.3 Highlighted Features 
Table 1-1. MT8668 highlighted features 
MT8668 Capability 
Security 
Chip-Level Features • Arm® Trust Zone Security 
Crypto Engine  
• Scalable Security Root (SSR) 
– The SSR, the MediaTek's unified crypto engine IP , provides cryptographic 
functions for various products. 
– All crypto engines with anti-SCA 
– Pure hardware key protection 
– FIPS-140-3 ready for certification  
– Security IP/feature  
– Common crypto core  
▪ SHA1-3 family/SM3 
▪ AES/TDES/DES/SM4 crypto memory to memory engine 
– Pure hardware KDF  
▪ HKDF/KBKDF/AMHK 
– NIST SP800-90C TRNG (HMAC_DRBG base) 
– MTK-RSA/ECC 
▪ RSA 1024-8192 
▪ ECC NIST P192-P521 
▪ SM2 
– PQC 
▪ ML-DSA-44/65/87 
▪ ML-KEM-512/768/1024 
Application Processor 
AP MCU 
• Armv8.2 DSU with below configuration 
– 2 Arm® dual-core complex with 2 32 KB L1 I-Cache, 32 KB L1 D-Cache and 128 
KB L2 Cache.  
– 4 Arm® cores with 64 KB L1 I-Cache, 64 KB L1 D-Cache and 256 KB L2 Cache.  
– Shared 2MB L3 Cache 
• DVFS technology supports for each core and DSU 
GPU 
• Arm Mali GPU 
• Per core capable of processing pixel rate 4M pixels per MHz, bi-linear texture rate 
8M texels per MHz 
• OpenGL ES 3.2/3.1/3.0/2.0/1.1 
• Vulkan 1.3 
• OpenCL up to 3.0 
• Supports raytracing. 
• Supports Variable Ray Shading (VRS). 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 13

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table 1-1. MT8668 highlighted features (continued) 
MT8668 Capability 
Neural Processing Unit 
• NPU memory subsystem 
– DMA engine for data movement and data format conversion, image scaling and 
rotation 
• MediaTek Deep Learning Accelerator (MDLA) to support NN applications with high 
performance and high-power efficiency 
– Top performance: 8(A)x4(W) 12.5 TOPS, 8(A) x 8(W) 12.5 TOPS, 16(A) x 8(W) 6.2 
TOPS, 16(A) x 16(W) 3.1 TOPS, FP16/BF16 3.1 TOPS 
– Supports layer based mixed precision 
– Simultaneous pipelined hardware function block 
(CONV/ACT/POOL/EWE/BILINEAR) 
– Supports Argmax 
– Enhancement of layer fusion to further reduce DRAM/TCM memory bandwidth 
– Enhancement of non-CONV OP performance 
– Supports Android NN asymmetric quantized data format 
• Supports weight decompression to reduce DRAM bandwidth 
SCP • MediaTek MRV55 
• Built-in 1.25 MB Tightly Coupled Memory (TCM) 
Modem 
NR sub6 3CC 5.14 Gbps 
• Max. downlink bandwidth 3CC (220 M) (5.14 Gbps)  
• Max. uplink bandwidth 2CC (200 M) (2.5 Gbps)  
• Supports downlink 256 QAM/uplink 256 QAM.  
• Supports downlink MIMO 4x4/uplink MIMO 2x2. 
LTE Cat18  
Up to 4CC 
• Downlink Cat18, 1.2 Gbps  
• Uplink Cat18, 211 Mbps 
• Supports downlink 256 QAM/uplink 256 QAM. 
UMTS  
DC-  
HSPA+  
R8+ 
• 3G modem supports most main features in 3GPP Release 7 and Release 8.  
• Uplink Cat. 7 (16 QAM) throughput up to 11.5 Mbps  
• Downlink Cat. 24 (64 QAM, dual-cell HSDPA) throughput up to 42.2 Mbps 
BPI & RFFE Baseband Parallel Interface (BPI) and MIPI RFFE interface with programmable driving 
strength multi-band 
Quad Band GSM/EDGE/GPRS GSM quad vocoders for Adaptive Multi-Rate (AMR), Enhanced Full Rate (EFR), Full Rate 
(FR) and Half Rate (HR) 
Memory 
External Memory Interface 
(EMI) 
• LPDDR5 
• Maximum DRAM capacity: 24 GB 
• Two channels, each having a 16-bit DQ bus 
• Eight AXI subordinate interfaces 
• One AXI manager interface 
• Proprietary arbitration mechanism 
• Page-based memory protection 
• Customized QoS schemes 
• Resource monitors 
• Protocol checkers 
UFS Supports UFS 3.1 2-lane and data rate up to 23.296 Gbps. 
 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 14

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table 1-1. MT8668 highlighted features (continued) 
MT8668 Capability 
Multimedia 
Display 
• Display1: (1920x1080@60 + 1920x1080@60) 
• Display2: (1920x1080@60 + 1920x1080@60) 
• MiraVisionTM for picture quality enhancement 
• MIPI DSI transmitter with D-PHY 4+4 lanes, or C-PHY 3+3 trios 
• Embedded LCD gamma correction 
• True 10-bit colors 
• 8 overlay layers with per-pixel alpha channel and gamma table 
• 2 overlay layers which should be used on telltale 
• Spatial and temporal dithering 
• Color enhancement 
• Adaptive contrast enhancement 
• Image/video/graphic sharpness enhancement 
• Dynamic backlight scaling 
• Supports GPU decoder (AFBC). 
• Supports DSC compression. 
Camera 
• Multi-camera (8*YUV Sensor + 1*DP2CSI) 
− SVM [2.1 MP + 2.1 MP + 2.1 MP + 2.1 MP] @ 30 fps 
− RVM [2.1 MP] @ 60 fps 
− DMS [2.1 MP] @ 30 fps 
− OMS [2.1 MP] @ 30 fps 
− Dashcam (DVR) [2.1 MP] @ 30 fps 
− DP2CSI [2.1 MP] @ 30 fps 
• Support YUV 422 8/10/12 bit & RGB888 input 
• 4 MIPI CSI-2 high-speed camera serial interfaces; maximum of 4 data lanes of D-
DHY; maximum of 3 trios of C-PHY 
Video 
• Video decoder (VDEC)  
− AV1 decoder: 
▪ 4K2K@30 fps/100 Mbps, 8/10bits 
− HEVC decoder:  
▪ Main profile 4K2K@30 fps/100 Mbps, 8bits 
▪ Main 10 profile 4K2K@30 fps/100 Mbps, 10bits 
− VP9 decoder:  
▪ Profile 0 4K2K@30 fps/100 Mbps, 8bits 
▪ Profile 2 4K2K@30 fps/100 Mbps, 10bits 
− AVC decoder:  
▪ Constrained baseline 4K2K@30 fps/100 Mbps, 8bits 
▪ Main/high profile 4K2K@30 fps/100 Mbps, 8bits 
▪ Progressive high 10 profile 4K2K@30 fps/100 Mbps, 10bits 
− HEIF decoder:  
▪ Maximum resolution 16,383×16,383, 8/10bits 
• Video encoder (VENC) 
− H.264 encoder: 8-bit high profile 3,840×2,160@30 fps, 100 Mbps 
− HEVC encoder: 10-bit main profile 3,840×2,160@30 fps, 100 Mbps 
− HEIF encoder: Supported maximum resolution aligns image specification 
 
  
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 15

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table 1-1. MT8668 highlighted features (continued) 
MT8668 Capability 
Audio 
Audio System 
• Audio playing 
− Supports 8/11.025/12/16/22.05/24/32/44.1/48/96/192/384 kHz sampling rate 
playback.  
− Supports stereo audio playback. 
− Supports 3-channel playing with MT6368. 
• Audio recording 
− Supports 8/16/32/48/96/192 kHz sampling rate recording. 
− Supports recording stereo data. 
− Supports 3-channel recording with MT6369 or maximum 4-channel one-wire 
DMIC on the AP.  
• Speech 
− Supports 2 MICs. 
− Supports 8/16/32/48 kHz sampling rate recording. 
− Supports side tone filter. 
Audio System 
• I2S 
− Supports clock master and data input mode. 
− Supports clock master and data output mode. 
− Supports 16/24/32-bit stereo data. 
− Supports 8/11.025/12/16/22.05/24/32/44.1/48/88.2/96/176.4/192/384 kHz 
sampling rate in I2S output master mode. 
− Supports 8/11.025/12/16/22.05/24/32/44.1/48/88.2/96/176.4/192 kHz 
sampling rate in I2S input master mode. 
• Supports EIAJ/I2S format. 
Modem Speech • Speech codec 
• Cellular text telephone modem (CTM) 
Connectivity 
USB • USB 3.0 DRD 
MSDC • Port 1: SD/SDIO 3.0 
UFS • UFS 3.1 2-lane 
SPI • 8 SPI masters for external devices 
• Master mode only 
PWM • Max. 4 PWM channels (depending on system configuration and I/O usage) 
UART • 3 UARTs for debug and general application 
I2C/I3C 
• 13 I2Cs 
• 7 I3Cs 
• To control peripheral devices, e.g., CCM power, flash driver, audio amplifier, and 
OIS driver. 
DISP_PWM • 2 DISP_PWM 
• 4096 steps 
GPIO • The number of GPIO ports is 199. 
SIM • 1.8V/3V SIM cards using external level shifter 
• Supports output 20 MHz clock 
JTAG • JTAG for debugging and applications 
PCIe • PCIe Gen3 1-lane 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 16

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table 1-1. MT8668 highlighted features (continued) 
MT8668 Capability 
Wireless Connectivity 
Wi-Fi  
• Wi-Fi 6E and backward compatible to legacy Wi-Fi spec (Wi-Fi 5/4) 
• Supports dual band (2.4 & 5~6 GHz band) 
• 2x2/1x1 with 80 MHz bandwidth, depending on companion connectivity chip 
capability  
• Integrated 2.4 GHz & 5GHz PA/LNA 
• Joint-TAS 2.0 
• Antenna grouping 
• Security: 
− WPA personal/enterprise 
− WPA2 personal/enterprise 
− WPA3 personal/enterprise 
− WPS2.0 
− WPI-SMS4 
− WAPI (hardware) 
Bluetooth • BT5.4+ BLE Audio 
GNSS 
• GPS L1CA + L5 
• BeiDou B1I + B2a 
• Glonass L1OF 
• Galileo E1 + E5a 
• QZSS L1CA + L1CB + L5 
• NavIC N1 + N5 
Process and Package 
Digital Die 4 nm process 
Package TFBGA 
Package Size 12.05 x 13.1 x 1.065 mm 
Companion Chips See Section 8.2. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 17

Terms and Abbreviations 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
2 Terms and Abbreviations 
2.1 Naming Convention 
Table 2-1. MT8668 pin types 
Abbreviation Description 
AI Analog input 
AO Analog output 
AIO Analog bi-direction 
DI Digital input 
DO Digital output 
DIO Digital bi-direction 
P Power 
G Ground 
 
2.2 Abbreviations 
Abbreviation Description 
AE Auto Exposure 
AF Auto Focus 
AFBC Arm Frame Buffer Compression 
AMR Adaptive Multi-Rate  
AWB Auto White Balance 
BPI Baseband Parallel Interface 
BW Bandwidth 
CC Closed Captioning; or Component Carrier 
CDMA Coda Division Multiple Access 
CMD Command 
CMOS Complementary Metal-Oxide Semiconductor 
CSI Camera Serial Interface 
CSI-2 Camera Serial Interface 2 
CTM Cellular Text Telephone Modem 
DB Decibel 
DBDC Dual Band Dual Concurrent 
DDR Double Data Rate 
DL Downlink 
DLA Deep Learning Accelerator 
DMA Direct Memory Access 
DMIC Digital Microphone Interface Controller 
DRAM Dynamic Random-Access Memory 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 18

Terms and Abbreviations 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Abbreviation Description 
DSC Display Stream Compression 
DSI Display Serial Interface 
DSU Data Service Unit 
EC Entropy encoding 
EDGE Enhanced Data Rates for GSM Evolution 
EFR Enhanced Full Rate 
EMI Electromagnetic Interference; External Memory Interface 
ESD Electrostatic Discharge 
EV-DO Evolution-Data Optimized (Evolution-Data Only) 
EVS Enhanced Voice Services 
FDD Frequency-Division Duplexing 
FPU Floating Point Unit 
FR Full Rate  
GPIO General-Purpose Input/Output 
GPRS General Packet Radio Service 
GPS Global Positioning System 
GPU Graphics Processing Unit 
GSM Global System for Mobile Communications 
HEVC High Efficiency Video Coding 
HFIF High Efficiency Image File 
HR Half Rate 
HSUPA High Speed Uplink Packet Access 
HWROT Hardware Root of Trust 
IPD Integrated Passive Devices 
KBKDF Key Based Key Derivation Function 
LCD Liquid Crystal Display 
LCM Liquid Crystal Module 
LDO Low Dropout 
LSC Land-Side Capacitors 
MC Motion Compensation 
MCIA MediaTek Confidentiality, Integrity, Anti-replay–Inline Cipher Engine 
ME Motion Estimation 
MIMO Multi-input Multi-Output 
MIPI Mobile Industry Processor Interface 
MISO Master in Slave Out 
MLCC Multilayer Ceramic Capacitors 
MOSI Master out Slave In 
MSDC Memory and SD Controller 
NavIC The NavIC or NAVigation with Indian Constellation is an autonomous regional satellite navigation 
system developed by Indian Space Research Organization (ISRO) 
NB Narrow Band 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 19

Terms and Abbreviations 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Abbreviation Description 
NN Neural Network 
NPU Neural Processing Unit 
NR New Radio 
PCIe Peripheral Component Interconnect Express; PCI Express 
PD 1. Pull Down; 
2. Phase Detection 
PLL Phase-Locked Loop 
PMIC Power Management IC 
PWM Pulse-Width Modulation 
QAM Quadrature Amplitude Modulation 
QHD Quarter High Definition 
QoS Quality of Service 
QSPI Queued Serial Peripheral Interface 
RC Root Complex 
RF Radio Frequency 
RFFE Radio Frequency Front-End 
ROM Read-Only Memory 
RTC Real-Time Clock 
SCK Serial Clock 
SCL Serial Clock Line 
SCP System Companion Processor 
SD Secure Digital 
SDA Serial Data 
SDIO Secure Digital Input/Output 
SLC System Level Cache 
SPI Serial Peripheral Interface  
SRAM Static Random-Access Memory 
SSR Scalable Security Root 
SWB Super-Wideband 
TCM Tightly Coupled Memory 
TDD Time Division Duplex; Time Division Duplexing 
TDM Time Division Multiplex; Time Division Multiplexing 
TQ Transform and Quantization 
UART Universal Asynchronous Receiver and Transmitter 
UFS Universal Flash Storage 
UL Uplink 
UMTS Universal Mobile Telecommunications System 
USB Universal Serial Bus 
VDC-M VESA Display Stream Compression-M 
VDEC Video Decoder 
VENC Video Encoder 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 20

Terms and Abbreviations 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Abbreviation Description 
VPU Vision Processing Unit 
WB Wideband 
WBG Wi-Fi/Bluetooth/GPS  
WCG Wide-Color-Gamut 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 21

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
3 Pin Information  
The MT8668 pin information is distributed as shown below. 
 
Section 3.1 The MT8668 pin map: Table 3-1 
The function groups for the MT8668 pin map are categorized as follows. 
  BT 
  CSI 
  DRF 
  DSI 
  EMI 
  DVSS 
  GNSS 
  GPIO 
  NC 
  Power 
  UFS 
  USB 
  XTAL_CLK 
   
Section 3.2 Lists all the pin descriptions. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 22

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
Confidential B 
MT8668 Application Processor 
Technical Brief 
3.1 MT8668 Pin Map 
 
Table 3-1. Pin map view 
1084 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34   
A NC_A1  NC_A2  EMI1_DQ8    EMI1_DQ11    EMI1_DQ13    EMI1_DQ1    EMI1_DQ0    
EMI1_CA
4 
  EMI1_CA0    EMI1_CA3    EMI0_CA1    EMI0_CA5    EMI0_DQ10    
EMI0_DQ
11  
  EMI0_DMI1    EMI0_DQ4    EMI0_DQ1    NC_A33  NC_A34  A 
B NC_B1  DVSS  DVSS  EMI1_DQ9  DVSS  EMI1_DQ12  DVSS  EMI1_DMI0  DVSS  
EMI1_DQ
3 
DVSS  EMI1_DQ2  DVSS  EMI1_CA2  DVSS  EMI1_CA1  DVSS  EMI0_CA3  DVSS  EMI0_CA0  DVSS  
EMI0_C
A6 
DVSS  EMI0_DQ8  DVSS  
EMI0_DQ
9 
DVSS  EMI0_DQ5  DVSS  EMI0_DQ3  DVSS  EMI0_DQ0  DVSS  NC_B34  B 
C EMI1_RDQ
S1_C  
EMI1_WCK1
_T  
DVSS  
EMI1_DQ1
0 
DVSS  DVSS  
EMI1_RDQS
0_T  
EMI1_WCK
0_T  
EMI1_DQ7  DVSS  EMI1_DQ5    
EMI1_CA
6 
NC   DVSS  NC DVSS  EMI0_CA4  DVSS  EMI0_DQ14    EMI0_WCK1_T  
EMI0_RDQS1_
C 
DVSS  DVSS  EMI0_DQ2  
EMI0_DMI
0 
EMI0_WCK0_
T 
EMI0_RDQ
S0_C  
EMI_RESET_N  DVSS  UFS_RX0N  UFS_RX0P  C 
D EMI1_RDQ
S1_T  
EMI1_WCK1
_C 
EMI1_DMI
1 
DVSS  EMI1_DQ14  DVSS  
EMI1_RDQS
0_C 
EMI1_WCK
0_C 
EMI1_DQ4  
EMI1_DQ
6 
NC NC 
EMI1_CA
5 
NC   DVSS  NC NC DVSS  NC DVSS  
EMI0_D
Q15 
EMI0_WCK1_C  
EMI0_RDQS1_
T 
DVSS  
EMI0_DQ
7 
EMI0_DQ6    
EMI0_WCK0_
C 
EMI0_RDQ
S0_T  
DVSS  UFS_RX1N  DVSS  DVSS  D 
E EMI_EXTR  DVSS  DVSS  DVSS  DVSS  EMI1_DQ15  DVSS  NC NC DVSS      DVSS  DVSS  EMI1_CK_T  EMI0_CK_T      EMI0_CA2    EMI0_DQ13  
EMI0_D
Q12 
DVSS  DVSS  DVSS    DVSS  DVSS  DVSS  DVSS  DVSS  UFS_RX1P  DVSS  
UFS_PLL_CKR
EF  
E 
F AVDD15_
WBG  
WF1_QP  WF1_IN  WF1_IP  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  EMI1_CS1  EMI1_CS0    DVSS  EMI1_CK_C  EMI0_CK_C  DVSS  EMI0_CS0  EMI0_CS1  DVSS      NC NC DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  UFS_RST_N  DVSS  F 
G   WF1_QN  DVSS  DVSS  WF0_IN  WF0_IP  DVSS  DVSS  DVSS  DVSS  DVSS        DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  UFS_TX1N  UFS_TX1P  DVSS  UFS_TX0N  UFS_TX0P  G 
H BT_IP  DVSS  DVSS  DVSS  WF0_QP  WF0_QN  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS    DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
AVDD15_PWR
GD  
DVSS  DVSS  DVSS  
AVDD12_CKBU
F_UFS  
UFS_REFCK
_OUT  
DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  H 
J BT_IN  BT_QP  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
AVDD15_E
MI  
                  DVSS  PWRGD_TRIM  AVDD15_UFS  DVSS      DVSS  DVSS  USB_DP  USB_DM  DVSS  CDM3P5A  CDM5P5A  J 
K   BT_QN  GL5_I  GL1_Q  GL1_I  DVSS  
AVDD12_W
BG 
DVSS  DVSS  DVSS    
AVDD12_E
MI  
AVDDQ_E
MI0  
AVDD075_E
MI0  
AVDDQ_EMI
0 
AVDD075_EMI0  DVSS  
AVDD075_E
MI1  
AVDDQ_EMI
1 
AVDD075_EMI
1 
AVDDQ_EMI1      AVDD12_UFS    DVSS  DVSS  
SSUSB_RX
N_P1  
SSUSB_RXP_P
1 
DVSS  DVSS  DVSS  
AVDD15_U
SB 
  K 
L DVSS  DVSS  GL5_Q  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  XIN_WBG              
VDD2H_E
MI  
          DVDD_CORE  DVSS    DVSS    DVSS  DVSS  
SSUSB_TXP
_P1  
SSUSB_TXN_P
1 
DVSS  
AVDD33_U
SB 
AVDD12_USB  L 
M PCIE_CKP  PCIE_CKN  DVSS  DVSS  DVSS  
PCIE_LN0_R
XP  
PCIE_LN0_R
XN  
DVSS  DVDD_CORE      
DVDD_COR
E 
  DVSS  
DVDD_SRAM
_CORE  
DVSS  
DVDD_COR
E 
DVSS  
DVDD_SRAM
_CORE  
DVSS  
DVDD_SRAM_
SCP 
DVSS  
DVDD_SRAM_
SCP 
  
DVDD_PR
OC_B  
DVSS  
DVDD_SRAM_
CORE_1  
DVSS    DVSS  DVSS  SPI7_CSB  SPI7_CK  
AVDD12_SSU
SB_P1  
M 
N DVSS  DVSS  DVSS  
PCIE_LN0_T
XN  
PCIE_LN0_T
XP  
DVSS  DVSS  DVSS  DVSS  DVSS  
CKM_XTAL_
CK 
DVSS  
DVDD_C
ORE 
  DVDD_CORE  DVSS  
DVDD_COR
E 
DVSS  
DVDD_PROC
_L  
DVSS  DVDD_PROC_L  DVSS  DVDD_PROC_L  DVSS  
DVDD_PR
OC_B  
DVSS    DVSS  SPI5_CSB  DVSS  DVSS  SPI7_MI  SPI7_MO  
AVDD15_SSU
SB_P1  
N 
P   
DVDD12_IO
RT_HS  
DVSS  DVSS  DVSS  DVSS  
AVDD12_PC
IE  
AVDD15_PC
IE  
DVSS  DVSS    
AVDD12_NP
UPLL  
  
DVDD_SRAM
_CORE  
  DVSS    DVSS  
DVDD_PROC
_L  
  DVDD_PROC_L  DVSS      
DVDD_PR
OC_B  
DVSS  DVSS  SPI5_MO  SPI5_MI  SPI5_CK  SPI6_MO  SPI6_MI  SPI6_CK  SPI6_CSB  P 
R CONN_TO
P_CLK  
CONN_TOP
_DATA  
CONN_W
B_PTA 
CONN_BT_
DATA 
CONN_BT_C
LK 
CONN_WF_
CTRL4  
DVSS  DVSS  
DVDD_SRA
M_NPU  
DVDD_NP
U 
AVDD15_NP
UPLL  
  
DVDD_C
ORE 
DVSS  DVDD_CORE  DVSS    
AVDD15_MC
UPLL  
TP_APPLLGP  AVDD15_PROC  
DVDD_SRAM_
PROC_L  
DVSS  DVDD_PROC_L  
DVDD_SRAM_
PROC_B  
DVDD_PR
OC_B  
DVSS    DVSS  SPI4_CK  SPI4_CSB  
DVDD18_IOL
M  
SPI4_MO  SPI4_MI    R 
T DVSS  ANT_SEL5  ANT_SEL6  ANT_SEL4  ANT_SEL3  
CONN_WF_
CTRL2  
CONN_WF_
CTRL3  
CONN_WF_
CTRL1  
DVSS  
DVDD_NP
U 
DVDD_NPU    DVSS  DVSS  DVDD_CORE  DVSS  
DVDD_COR
E 
AVDD12_MC
UPLL  
TN_APPLLGP    DVDD_PROC_L  DVSS  DVDD_PROC_L  DVSS  
DVDD_PR
OC_B  
DVDD_PR
OC_B  
DVDD_PROC_
B 
DVDD_PRO
C_B  
DVDD_PROC_
B 
DVSS  
DVDD_PROC_
B 
JTRSTN  JTCK  JTDO T 
U ANT_SEL2  DVSS  DVSS  ANT_SEL1  
DVDD18_IO
RT_HS  
CONN_WF_
CTRL0  
DVSS  DVSS  DVSS  
DVDD_NP
U 
DVSS  DVDD_NPU  
DVDD_NP
U 
DVDD_SRAM
_CORE  
    
DVDD_COR
E 
DVSS  
DVDD_PROC
_L  
DVSS  DVDD_PROC_L  DVSS    
DVDD_SRAM_
PROC_B  
DVDD_PR
OC_B  
DVSS  DVSS  DVSS  
DVDD_PROC_
B 
DVSS  
DVDD_PROC_
B 
SCL0  JTMS  JTDI  U 
V DVSS  
SCP_I2C_SD
A3 
ANT_SEL0  
CONN_HRS
T_B_2 
CONN_HRS
T_B  
GPS_L1_EL
NA_EN  
GPS_L5_EL
NA_EN  
  DVSS  
DVDD_NP
U 
DVSS  DVDD_NPU  DVSS  
DVDD_SRAM
_CORE  
DVDD_CORE  DVSS  
DVDD_COR
E 
DVSS  
DVDD_PROC
_L  
DVSS  DVDD_PROC_L  DVSS  DVDD_PROC_L  DVSS  DVSS    DVSS  DVSS  DVSS  DVSS  
DVDD_PROC_
B 
SDA0  SDA1  SCL1  V 
W SCP_I2C_S
DA0  
SCP_I2C_SD
A2 
SCP_I2C_S
CL3  
DVDD18_IO
RT 
SCP_I2C_SC
L2 
DVSS  
SCP_I2C_SC
L1 
SCP_I2C_SD
A1 
DVSS  
DVDD_NP
U 
DVSS      DVDD_CORE    DVSS    DVSS  
DVDD_PROC
_L  
DVDD_SRAM_
PROC_L  
DVDD_PROC_
B 
DVSS      
DVDD_PR
OC_B  
DVDD_PR
OC_B  
DVDD_PROC_
B 
DVDD_PRO
C_B  
DVDD_PROC_
B 
DVSS  
DVDD_PROC_
B 
EINT1  EINT2  EINT3  W 
Y SCP_I2C_S
CL0  
SCP_I2C_SD
A4 
SCP_I2C_S
CL4  
DVSS  
DVDD18_IO
RT 
I2S2_DO  I2S2_BCK  I2S2_DI  DVDD_CORE    DVSS  
DVDD_COR
E 
DVSS  
DVDD_SRAM
_CORE  
DVDD_CORE  
DVDD_SRAM_C
ORE 
DVDD_COR
E 
DVSS  AVDD15_PLL    
DVDD_PROC_
B 
DVSS  
DVDD_SRAM_
PROC_B  
DVSS  
DVDD_PR
OC_B  
DVSS  DVSS  DVSS  
DVDD_PROC_
B 
DVSS  
DVDD_PROC_
B 
EINT4  EINT5  
SYS_OCP_UV
LO_INT  
Y 
AA SCP_SPI2_
CK 
  
SCP_SPI2_
MO  
SCP_SPI2_C
SB 
SCP_SPI2_
MI  
DVSS  I2S2_MCK  I2S2_LRCK    
DVDD18_
VQPS  
      
DVDD_GPUS
TACK  
DVSS    DVSS    AVDD12_PLL  DVSS  
DVDD_PROC_
B 
DVSS  DVDD_PROC_B    
DVDD_PR
OC_B  
DVSS  AVDD15_CKSQ  X26M_IN 
AVDD12_CKS
Q 
DVSS  DVSS  DVSS  DVSS    AA 
AB SCP_SPI1_
CK 
SCP_SPI1_C
SB 
SCP_SPI1_
MO  
SCP_SPI1_
MI  
DVSS  DVSS  
SCP_I2C_SC
L5 
SCP_I2C_SD
A5 
  
DVDD_M
M  
DVSS  
DVDD_SRA
M_MM  
DVSS    DVSS  
DVDD_GPUSTAC
K 
DVSS    
DVDD_MOD
EM  
  
DVDD_MODE
M  
  
DVDD_MODE
M  
  
DVDD_M
ODEM  
DVSS  DVSS  DVSS  DVSS  
DSI0_CK0N
_T1C  
DSI0_CK0P_T
1B 
DSI0_D3N_
T3A 
DSI0_D3P_
T2C  
DSI0_D1N_T2
B 
AB 
AC DVSS  DVSS  
SCP_SPI0_
MO  
SCP_SPI0_
MI  
SCP_SPI0_C
K 
DVSS  
SCP_SPI3_
MI  
SCP_SPI3_
MO  
  
DVDD_M
M  
  DVDD_MM  
DVDD_M
M  
DVDD_GPUS
TACK  
DVSS  
DVDD_SRAM_G
PUSTACK  
DVSS  
DVDD_GPUS
TACK  
AVDD12_MD
PLL 
DVSS  
DVDD_MODE
M  
DVSS  
DVDD_SRAM_
MODEM  
DVSS      DVSS  
AVDD12_D
SI  
DVSS  
DSI0_D0N_
T1A 
DSI0_D0P_T0
C 
DSI0_D2P_
T0A 
DSI0_D2N_
T0B 
DSI0_D1P_T2
A 
AC 
AD DVSS  DVSS  DVSS  DVSS  DVSS  
SCP_SPI0_C
SB 
SCP_SPI3_C
K 
SCP_SPI3_C
SB 
  
DVDD_M
M  
DVSS  
DVDD_SRA
M_MM  
DVSS  
AVDD12_GP
UPLL  
DVSS  
DVDD_GPUSTAC
K 
DVSS    
AVDD15_MD
PLL 
DVDD_SRAM_
MODEM  
DVDD_MODE
M  
DVSS  
DVDD_MODE
M  
  
DVDD_M
ODEM  
DVSS  DVSS  DVSS    DVSS  DVSS  
DSI1_D3P_
T2C  
DSI1_D3N_
T3A 
DVSS  AD 
AE CAM_CLK1  CAM_CLK3  DVSS  DVSS  
NFC_CLK_R
EQ  
DVSS  DVSS    DVSS    
DVDD_SRA
M_MM  
DVDD_MM  DVSS  DVDD_CORE  
AVDD15_GP
UPLL  
DVDD_GPUSTAC
K 
DVSS    
DVDD_MOD
EM  
DVSS    DVSS    DVSS      DVSS  DVSS  
AVDD08_DRV
_DSI  
DSI1_CK0N
_T1C  
DSI1_CK0P_T
1B 
DVSS  
DSI1_D1P_
T2A 
DSI1_D1N_T2
B 
AE 
AF DVSS  DVSS  
CSI3A_L0P
_T0A  
CSI3A_L0N
_T0B  
DVSS  DVSS  DVSS    DVSS    DVSS  DVDD_MM    DVSS  DVSS  
DVDD_GPUSTAC
K 
DVSS  
DVDD_GPUS
TACK  
  DVSS  
DVDD_MODE
M  
  
DVDD_MODE
M  
DVSS  
DVDD_M
ODEM  
DVSS    
AVDD15_D
SI  
DVSS  
DSI1_D0N_
T1A 
DSI1_D0P_T0
C 
DSI1_D2P_
T0A 
DSI1_D2N_
T0B 
DVSS  AF 
AG CSI3A_L2N
_T1C  
CSI3A_L2P_
T1B 
CSI3A_L1N
_T1A  
DVSS  
CSI3A_L1P_
T0C  
DVSS  DVSS    DVSS    DVSS  DVDD_MM  DVSS  
DVDD_GPUS
TACK  
DVSS  
DVDD_SRAM_G
PUSTACK  
DVSS  
DVDD_GPUS
TACK  
DVDD_MOD
EM  
DVDD_SRAM_
MODEM  
DVDD_MODE
M  
DVSS  
DVDD_SRAM_
MODEM  
  
DVDD_M
ODEM  
DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
DRF_DL_LN3
_DN  
AG 
AH DVSS  
CSI3B_L0N_
T0B 
CSI3B_L0P
_T0A  
DVSS  DVSS  DVSS  DVSS    DVSS    DVDD_MM  
DVDD_SRA
M_MM  
DVSS    DVSS  
DVDD_GPUSTAC
K 
DVSS          DVSS  
DVDD_MODE
M  
DVSS    DVSS  DVSS  DVSS  DVSS  
DRF_DL_LN
2_DP  
DRF_DL_LN2_
DN 
DVSS  DVSS  
DRF_DL_LN3
_DP 
AH 
AJ DVSS  CSI3B_L1N  
CSI3B_L1P
_T0C  
CSI2A_L0N
_T0B  
CSI2A_L0P_
T0A 
DVSS  DVSS    DVSS      DVDD_MM  
DVDD_M
M  
DVDD_GPUS
TACK  
DVDD_GPUS
TACK  
DVDD_GPUSTAC
K 
DVSS  
DVDD_GPUS
TACK  
DVDD_MOD
EM  
DVSS    DVSS  
DVDD_MODE
M  
DVSS  
DVDD_M
ODEM  
DVSS  DVSS  
AVDD15_D
RF 
DVSS  DVSS  DVSS  
DRF_DL_L
N1_DP  
DRF_DL_LN
1_DN  
DVSS  AJ 
AK CSI2B_L0P
_T0A  
CSI2B_L0N_
T0B 
DVSS  
CSI2A_L1P_
T0C  
CSI2A_L1N_
T1A 
DVSS  DVSS    DVSS  
DVDD_M
M  
DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
DVDD_SRAM
_CORE  
DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
DVDD_M
ODEM  
DVSS  DVSS  DVSS  DRF_DL_CP  DRF_DL_CN  DVSS  DVSS  
DRF_DL_LN0
_DN  
AK 
AL CSI2B_L1P
_T0C  
CSI2B_L1N  
CSI2A_L2P
_T1B  
CSI2A_L2N
_T1C  
DVSS  DVSS  DVSS    DVSS  
DVDD_CO
RE 
                                DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
DRF_DL_LN0
_DP 
AL 
AM DVSS  
CSI1A_L0P_
T0A 
CSI1A_L0N
_T0B  
CSI1A_L1P_
T0C  
CSI1A_L1N_
T1A 
DVSS  DVSS  CAM_RST0  CAM_SDA7  
CAM_SDA
2 
URXD1  UTXD0  PERI_EN1  SIM2_SRST  SIM1_SCLK  SIM1_SRST  
SRCLKENA
0 
CHG_SCL5  SDA3  
AUD_DAT_MIS
O1 
AUD_DAT_MIS
O2 
  EINT9  INT_SIM2  EINT13  EINT15    DVSS  DVSS  DVSS  DVSS  
DRF_UL_C
N  
DRF_UL_CP  DVSS  AM 
AN DVSS  DVSS  DVSS  
CSI1A_L2P_
T1B 
CSI1A_L2N_
T1C  
DVSS  CAM_RST1  CAM_RST3  CAM_SCL7  
CAM_SCL
2 
UTXD1  URXD0  PERI_EN0  SIM2_SIO  SIM2_SCLK  SIM1_SIO  
WATCHDO
G 
CHG_SDA5  SCL3  
AUD_DAT_MO
SI1  
AUD_DAT_MO
SI2  
  INT_SIM1  EINT12  EINT14  
BPI_D_BU
S2 
BPI_D_BUS0  
SPMI_P_SC
L 
DVSS  
DRF_UL_LN
1_DN  
DRF_UL_LN1_
DP  
DVSS  DVSS  AVDD12_DRF  AN 
AP CSI1B_L0P
_T0A  
CSI1B_L0N_
T0B 
CSI1B_L1P
_T0C  
DVSS  
CSI0B_L1P_
T0C  
CSI0B_L1N  DVSS  CAM_RST2  CAM_SDA4  
DVDD18_
IORB  
SCL10  TESTMODE  PERI_EN2  PERI_EN3  
MSDC1_CM
D  
EINT_CHG_IRQB  
DVDD28_
MSDC1  
DVSS  DVSS  DVDD18_IOBM  
DVDD18_IOB
M  
X32K_I
N  
DVSS  EINT11  DVSS  
BPI_D_BU
S3 
BPI_D_BUS1  
SPMI_P_SD
A 
  DVSS  DVSS  DVSS  
DRF_UL_LN
0_DP  
DVSS  AP 
AR DVSS  CSI1B_L1N  
CSI0A_L0P
_T0A  
CSI0B_L0P_
T0A 
CSI0B_L0N_
T0B 
DVSS  DVSS  DVSS  CAM_SDA9  SCL12  SDA10  SYSRSTB  PERI_EN4  
DVDD18_ESI
M  
MSDC1_DAT
0 
KPCOL0  
DVDD15_
MSDC1  
SCL6  
AUD_DAT_M
OSI0  
AUD_SYNC_M
OSI  
I2S1_BCK  DSI_TE  PWM_OUT  EINT10  
BPI_D_BU
S7 
BPI_D_BU
S4 
DIGRF_IRQ  
MIPI1_D_S
DATA 
DVDD18_IOB
M_MIPI  
DVSS  DVSS  DVSS  
DRF_UL_LN
0_DN  
DVSS  AR 
AT NC_AT1  
CSI0A_L0N_
T0B 
CSI0A_L1P
_T0C  
DVSS  DVSS  DVSS  CAM_CLK0  CAM_SCL8  CAM_SCL9  
CAM_SCL
4 
SDA11  AP_GOOD  
DVDD28_
SIM2  
PERI_EN5  
MSDC1_DAT
1 
MSDC1_DAT3  
SCP_VREQ
_VAO  
SDA6  
AUD_NLE_M
OSI0  
AUD_NLE_MO
SI1  
I2S1_DO  
I2S1_M
CK 
LCM_RST  EINT6  
BPI_D_BU
S9 
BPI_D_BU
S6 
SPMI_M_SCL  
MIPI1_D_S
CLK 
MIPI0_D_SCL
K 
MIPI0_D_S
DATA 
DVDD12_IOB
M_MIPI  
DVSS  DVSS  NC_AT34  AT 
AU NC_AU1  NC_AU2  
CSI0A_L1N
_T1A  
CSI0A_L2P_
T1B 
CSI0A_L2N_
T1C  
AVDD12_CS
I 
CAM_CLK2  CAM_SDA8    SDA12  SCL11    
DVDD12_
ESIM 
DVDD28_SI
M1 
MSDC1_CLK  MSDC1_DAT2  
DVDD15_SI
M  
  
AUD_DAT_M
ISO0  
AUD_CLK_MOS
I 
I2S1_DI  
I2S1_LR
CK 
EINT8  EINT7  
BPI_D_BU
S8 
BPI_D_BU
S5 
SPMI_M_SDA  
MIPI2_D_S
CLK 
MIPI2_D_SDA
TA  
MIPI_M_SC
LK 
MIPI_M_SDA
TA  
MD_UCNT  NC_AU33  NC_AU34  AU 
  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34   
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 23

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
Confidential B 
MT8668 Application Processor 
Technical Brief 
3.2 MT8668 Pin Descriptions 
Table 3-2. MT8668 pin descriptions 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
System 
SYSRSTB AR12 DI System reset input DVDD18 PD I 
    
    
TESTMODE AP12 DI Test mode DVDD18 PD I 
    
    
AP_GOOD AT12 DIO 
When bootrom can normally jump 
into pre-loader execution (i.e., 
software can take over), bootrom 
makes AP_GOOD high before jumping 
DVDD18 PD OL 
B:GPIO17 0 
O:AP_GOOD 1 
O:GPS_PPS 4 
O:AGPS_SYNC 6 
X32K_IN AP22 DIO RTC 32K input DVDD18 PD I 
B:GPIO187 0 
I0:RTC32K_CK 1 
NFC_CLK_REQ AE5 DIO Clock request input pin for NFC DVDD18 PD I 
B:GPIO52 0 
I0:SRCLKENAI
0 1 
O:DISP_PWM
1 3 
I0:SPM_JTAG
_TRSTN_VLP 4 
I0:CONN_BGF
_MCU_TRST_
B 
5 
O:SPMI_M_T
RIG_FLAG 6 
SRCLKENA0 AM17 DIO 
Output signal; control 26 Hz/Buck/LDO 
normal mode or sleep mode. (High: 
normal mode; low: sleep mode or low 
power mode) 
DVDD18 PU OH 
B:GPIO184 0 
O:SRCLKENA0 1 
WATCHDOG AN17 DIO Watchdog reset output DVDD18 PD OL B:GPIO186 0 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 24

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:WATCHDO
G 1 
EINT_CHG_IRQ
B AP16 DIO External interrupt input for Charger  DVDD18 PD I 
B:GPIO0 0 
O:DISP_ERRO
R0 2 
EINT1 W32 DIO External interrupt input DVDD18 PD I 
B:GPIO1 0 
O:TSFDC_EN 6 
I1:UFS_MPHY
_SCL 7 
EINT2 W33 DIO External interrupt input DVDD18 PD I 
B:GPIO2 0 
O:USB_DRVV
BUS 1 
O:DISP_ERRO
R1 2 
O:TSFDC_TSS
EL0 6 
B1:UFS_MPH
Y_SDA 7 
EINT3 W34 DIO External interrupt input DVDD18 PD I 
B:GPIO3 0 
I1:IDDIG 1 
O:TSFDC_TSS
EL1 6 
EINT4 Y32 DIO External interrupt input DVDD18 PD I 
B:GPIO4 0 
I0:VBUSVALID 1 
O:CONN_TCX
OENA_REQ 4 
O:TSFDC_TSS
EL2 6 
EINT5 Y33 DIO External interrupt input DVDD18 PD I 
B:GPIO5 0 
B1:KPROW0 1 
O:GPS_PPS 6 
EINT6 AT24 DIO External interrupt input DVDD18 PD I 
B:GPIO6 0 
O:DISP_PWM 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 25

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I1:UCTS2 4 
O:TSFDC_VCO
_RST 6 
EINT7 AU24 DIO External interrupt input DVDD18 PD I 
B:GPIO7 0 
O:DISP_PWM
1 1 
I0:I2SIN_DMA
0_DI3 2 
O:URTS2 4 
O:TSFDC_RCK
_SELB 6 
EINT8 AU23 DIO External interrupt input DVDD18 PD I 
B:GPIO8 0 
I0:DSI_TE1 1 
EINT9 AM23 DIO External interrupt input DVDD18 PD I 
B:GPIO9 0 
O:LCM_RST1 1 
O:SPMI_P_TRI
G_FLAG 6 
O:DBG_MON
_B0 7 
EINT10 AR24 DIO External interrupt input DVDD18 PD I 
B:GPIO10 0 
O:BPI_BUS10 1 
O:CONN_BPI_
BUS10 2 
O:CONN_TCX
OENA_REQ 4 
O:DBG_MON
_B1 7 
EINT11 AP24 DIO External interrupt input DVDD18 PD I 
B:GPIO11 0 
O:BPI_BUS11 1 
O:CONN_BPI_
BUS11_OLAT
0 
2 
O:HFRP_URTS
1 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 26

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DBG_MON
_B2 7 
EINT12 AN24 DIO External interrupt input DVDD18 PD I 
B:GPIO12 0 
O:BPI_BUS12 1 
O:CONN_BPI_
BUS12_OLAT
1 
2 
O:ANT_SEL18 3 
O:CLKM0 4 
I1:HFRP_UCTS
1 5 
O:DBG_MON
_B3 7 
EINT13 AM25 DIO External interrupt input DVDD18 PD I 
B:GPIO13 0 
O:BPI_BUS13 1 
O:CONN_BPI_
BUS13_OLAT
2 
2 
O:ANT_SEL19 3 
O:CLKM1 4 
O:DBG_MON
_B4 7 
EINT14 AN25 DIO External interrupt input DVDD18 PD I 
B:GPIO14 0 
O:BPI_BUS14 1 
O:CONN_BPI_
BUS14_OLAT
3 
2 
O:ANT_SEL20 3 
O:CLKM2 4 
O:DBG_MON
_B5 7 
EINT15 AM26 DIO External interrupt input DVDD18 PD I 
B:GPIO15 0 
O:BPI_BUS15 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 27

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 27 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:CONN_BPI_
BUS15_OLAT
4 
2 
O:ANT_SEL21 3 
O:CLKM3 4 
O:DBG_MON
_B6 7 
SYS_OCP_UVL
O_INT Y34 DIO HWPT interrupt input DVDD18 PU I 
B:GPIO198 0 
I0:MCU_PMIC
_POC_I 1 
X26M_IN AA28 AI 26M clock input AVDD12_CKSQ         
PMIC 
AUD_CLK_MO
SI AU20 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO188 0 
O:AUD_CLK_
MOSI 1 
O:AUD_CLK_
MOSI 3 
AUD_SYNC_M
OSI AR20 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO189 0 
O:AUD_SYNC
_MOSI 1 
I0:I2SIN_DMA
0_BCK 4 
O:DBG_MON
_B25 7 
AUD_DAT_MO
SI0 AR19 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO190 0 
O:AUD_DAT_
MOSI0 1 
O:AUD_DAT_
MOSI0 3 
O:DBG_MON
_B26 7 
AUD_DAT_MO
SI1 AN20 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO191 0 
O:AUD_DAT_
MOSI1 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 28

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 28 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:AUD_DAT_
MOSI1 3 
O:DBG_MON
_B27 7 
AUD_DAT_MO
SI2 AN21 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO191 0 
O:AUD_DAT_
MOSI1 1 
O:AUD_DAT_
MOSI1 3 
O:DBG_MON
_B27 7 
AUD_DAT_MO
SI2 AN21 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO192 0 
O:AUD_DAT_
MOSI2 1 
I0:I2SIN_DMA
0_LRCK 4 
O:DBG_MON
_B28 7 
AUD_NLE_MO
SI0 AT19 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO193 0 
O:AUD_NLE_
MOSI0 1 
I0:AUD_SYNC
_MISO 2 
I0:I2SIN_DMA
0_DI 4 
AUD_NLE_MO
SI1 AT20 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO194 0 
O:AUD_NLE_
MOSI1 1 
I0:AUD_CLK_
MISO 2 
I0:I2SIN_DMA
0_DI1 4 
AUD_DAT_MIS
O0 AU19 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO195 0 
I0:AUD_DAT_
MISO0 1 
I0:VOW_DAT
_MISO 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 29

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 29 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I0:AUD_DAT_
MISO0 3 
O:DBG_MON
_B29 7 
AUD_DAT_MIS
O1 AM20 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO196 0 
I0:AUD_DAT_
MISO1 1 
I0:VOW_CLK_
MISO 2 
I0:AUD_CLK_
MISO 3 
I0:I2SIN_DMA
0_DI2 4 
O:DBG_MON
_B30 7 
AUD_DAT_MIS
O2 AM21 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO197 0 
I0:AUD_DAT_
MISO2 1 
I0:AUD_DAT_
MISO1 3 
I0:I2SIN_DMA
0_DI3 4 
O:DBG_MON
_B31 7 
SPMI_M_SCL AT27 DIO PMIC SPMI control interface DVDD18 NP I 
B:GPIO180 0 
B0:SPMI_M_S
CL 1 
SPMI_M_SDA AU27 DIO PMIC SPMI control interface DVDD18 NP I 
B:GPIO181 0 
B0:SPMI_M_S
DA 1 
SPMI_P_SCL AN28 DIO PMIC SPMI control interface DVDD18 NP I 
B:GPIO182 0 
B0:SPMI_P_S
CL 1 
SPMI_P_SDA AP28 DIO PMIC SPMI control interface DVDD18 NP I 
B:GPIO183 0 
B0:SPMI_P_S
DA 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 30

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 30 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
SIM  
SIM1_SCLK AM15 DIO SIM1 clock, PMIC interface DVDD28_SIM1 PD I 
B:GPIO174 0 
O:MD1_SIM1
_SCLK 1 
I0:TSFDC_26
M 6 
SIM1_SRST AM16 DIO SIM1 data, PMIC interface DVDD28_SIM1 PD I 
B:GPIO175 0 
O:MD1_SIM1
_SRST 1 
I1:HFRP_JTAG
0_TCK 2 
I1:MCUPM_JT
AG_TCK 3 
I0:APU_JTAG_
TCK 4 
I0:CONN_DSP
_L5_JCK 5 
O:TSFDC_SDO 6 
SIM1_SIO AN16 DIO SIM1 data, PMIC interface DVDD28_SIM1 PD I 
B:GPIO176 0 
B1:MD1_SIM
1_SIO 1 
I0:HFRP_JTAG
0_TRSTN 2 
I0:MCUPM_JT
AG_TRSTN 3 
I0:APU_JTAG_
TRST 4 
O:CONN_DSP
_L5_JINTP 5 
O:TSFDC_FOU
T 6 
SIM2_SCLK AN15 DIO SIM2 clock, PMIC interface DVDD28_SIM2 PD I 
B:GPIO177 0 
O:MD1_SIM2
_SCLK 1 
I1:HFRP_JTAG
0_TDI 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 31

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 31 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I1:MCUPM_JT
AG_TDI 3 
I1:APU_JTAG_
TDI 4 
I0:CONN_DSP
_L5_JDI 5 
I0:TSFDC_SCK 6 
SIM2_SRST AM14 DIO SIM2 data, PMIC interface DVDD28_SIM2 PD I 
B:GPIO178 0 
O:MD1_SIM2
_SRST 1 
I1:HFRP_JTAG
0_TMS 2 
I1:MCUPM_JT
AG_TMS 3 
B1:APU_JTAG
_TMS 4 
I1:CONN_DSP
_L5_JMS 5 
I0:TSFDC_SDI 6 
SIM2_SIO AN14 DIO SIM2 data, PMIC interface DVDD28_SIM2 PD I 
B:GPIO179 0 
B1:MD1_SIM
2_SIO 1 
O:HFRP_JTAG
0_TDO 2 
O:MCUPM_JT
AG_TDO 3 
O:APU_JTAG_
TDO 4 
O:CONN_DSP
_L5_JDO 5 
I0:TSFDC_SCF 6 
INT_SIM1 AN23 DIO SIM1 interrupt DVDD18 PD I 
B:GPIO119 0 
I0:MD_INT1_
C2K_UIM0_H
OT_PLUG 
1 
O:SRCLKENA1 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 32

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
INT_SIM2 AM24 DIO SIM2 interrupt DVDD18 PD I 
B:GPIO120 0 
I0:MD_INT2_
C2K_UIM1_H
OT_PLUG 
1 
B0:TP_GPIO1
5_AO 4 
O:SRCLKENA2 5 
I2S 
I2S1_BCK AR21 DIO I2S interface DVDD18 PD I 
B:GPIO70 0 
O:I2SIN1_BCK 1 
I0:I2SIN_DMA
0_BCK 2 
I0:MFG_EB_JT
AG_TCK 4 
I1:SCP_JTAG0
_TCK_VCORE 6 
I0:CONN_WF
_MCU_TCK 7 
I2S1_LRCK AU22 DIO I2S interface DVDD18 PD I 
B:GPIO71 0 
O:I2SIN1_LRC
K 1 
I0:I2SIN_DMA
0_LRCK 2 
I0:MFG_EB_JT
AG_TMS 4 
I1:SCP_JTAG0
_TMS_VCORE 6 
I1:CONN_WF
_MCU_TMS 7 
I2S1_DI AU21 DIO I2S interface DVDD18 PD I 
B:GPIO72 0 
I0:I2SIN1_DI 1 
I0:I2SIN_DMA
0_DI 2 
I0:MFG_EB_JT
AG_TDI 4 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 33

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 33 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I1:SCP_JTAG0
_TDI_VCORE 6 
I0:CONN_WF
_MCU_TDI 7 
I2S1_DO AT21 DIO I2S interface DVDD18 PD I 
B:GPIO73 0 
O:I2SOUT1_D
O 1 
I0:I2SIN_DMA
0_DI1 2 
O:MFG_EB_JT
AG_TDO 4 
O:SCP_JTAG0
_TDO_VCORE 6 
O:CONN_WF_
MCU_TDO 7 
I2S1_MCK AT22 DIO I2S interface DVDD18 PD I 
B:GPIO74 0 
O:I2SIN1_MC
K 1 
I0:I2SIN_DMA
0_DI2 2 
I0:MFG_EB_JT
AG_TRSTN 4 
I0:SCP_JTAG0
_TRSTN_VCO
RE 
6 
I0:CONN_WF
_MCU_TRST_
B 
7 
I2S2_BCK Y7 DIO I2S interface DVDD18 PD I 
B:GPIO75 0 
O:I2SIN2_BCK 1 
I1:SCP_JTAG0
_TCK_VLP 5 
I1:SSPM_JTA
G_TCK_VLP 6 
I0:IO_JTAG_T
CK 7 
I2S2_LRCK AA8 DIO I2S interface DVDD18 PD I B:GPIO76 0 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 34

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:I2SIN2_LRC
K 1 
I1:SCP_JTAG0
_TMS_VLP 5 
I1:SSPM_JTA
G_TMS_VLP 6 
B1:IO_JTAG_T
MS 7 
I2S2_DI Y8 DIO I2S interface DVDD18 PD I 
B:GPIO77 0 
I0:I2SIN2_DI 1 
I1:SCP_JTAG0
_TDI_VLP 5 
I1:SSPM_JTA
G_TDI_VLP 6 
I1:IO_JTAG_T
DI 7 
I2S2_DO Y6 DIO I2S interface DVDD18 PD I 
B:GPIO78 0 
O:I2SOUT2_D
O 1 
O:SCP_JTAG0
_TDO_VLP 5 
O:SSPM_JTAG
_TDO_VLP 6 
O:IO_JTAG_T
DO 7 
I2S2_MCK AA7 DIO I2S interface DVDD18 PD I 
B:GPIO79 0 
O:I2SIN2_MC
K 1 
I0:SCP_JTAG0
_TRSTN_VLP 5 
I0:SSPM_JTA
G_TRSTN_VLP 6 
I0:IO_JTAG_T
RSTN 7 
Liquid crystal display (LCD) 
DSI_TE AR22 DIO Parallel display interface tearing effect DVDD18 PD I B:GPIO59 0 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 35

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 35 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I0:DSI_TE 1 
O:DBG_MON
_A28 7 
LCM_RST AT23 DIO Parallel display interface reset signal DVDD18 PD I 
B:GPIO60 0 
O:LCM_RST 1 
O:DBG_MON
_A29 7 
Pulse width modulation (PWM) 
PWM_OUT AR23 DIO Display PWM output DVDD18 PD I 
B:GPIO61 0 
O:DISP_PWM 1 
O:PWM_0 3 
Keypad interface 
KPCOL0 AR16 DIO Keypad column 0 DVDD18 PU I 
B:GPIO16 0 
B1:KPCOL0_V
LP 1 
Serial peripheral interface (SPI) 
SPI4_CK R29 DIO SPI4 clock DVDD18 PD I 
B:GPIO32 0 
O:SPI4_CLK 1 
O:I2SIN0_BCK 2 
O:CLKM0 4 
O:CMFLASH0 5 
I1:UCTS3 6 
O:DBG_MON
_A12 7 
SPI4_CSB R30 DIO SPI4 chip select DVDD18 PD I 
B:GPIO33 0 
O:SPI4_CSB 1 
O:I2SIN0_LRC
K 2 
O:CLKM1 4 
O:CMFLASH1 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 36

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 36 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:URTS3 6 
O:DBG_MON
_A13 7 
SPI4_MO R32 DIO SPI4 data out DVDD18 PD I 
B:GPIO34 0 
B0:SPI4_MO 1 
O:I2SIN0_MC
K 2 
O:CLKM2 4 
O:CMFLASH2 5 
O:UTXD3 6 
O:DBG_MON
_A14 7 
SPI4_MI R33 DIO SPI4 data in DVDD18 PD I 
B:GPIO35 0 
B0:SPI4_MI 1 
I0:I2SIN0_DI 2 
O:CLKM3 4 
O:CMFLASH3 5 
I1:URXD3 6 
O:DBG_MON
_A15 7 
SPI5_CK P30 DIO SPI5 clock DVDD18 PD I 
B:GPIO28 0 
O:SPI5_CLK 1 
B0:FMI2SIN_B
CK 2 
O:CLKM0 4 
I0:DAP_SONIC
_SWCK 5 
O:MD_UTXD1 6 
O:DBG_MON
_A8 7 
SPI5_CSB N29 DIO SPI5 chip select DVDD18 PD I B:GPIO29 0 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 37

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 37 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:SPI5_CSB 1 
B0:FMI2SIN_L
RCK 2 
O:CLKM1 4 
B1:DAP_SONI
C_SWD 5 
I1:MD_URXD
1 6 
O:DBG_MON
_A9 7 
SPI5_MO P28 DIO SPI5 data out DVDD18 PD I 
B:GPIO30 0 
B0:SPI5_MO 1 
O:FMI2SIN_M
CK 2 
O:CLKM2 4 
I0:DAP_MD32
_SWCK 5 
O:DBG_MON
_A10 7 
SPI5_MI P29 DIO SPI5 data in DVDD18 PD I 
B:GPIO31 0 
B0:SPI5_MI 1 
I0:FMI2SIN_D
I 2 
O:CLKM3 4 
B1:DAP_MD3
2_SWD 5 
O:DBG_MON
_A11 7 
SPI6_CK P33 DIO SPI6 clock DVDD18 PD I 
B:GPIO24 0 
O:SPI6_CLK 1 
I0:SPIS1_CLK 2 
B0:TP_GPIO0
_AO 4 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 38

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 38 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DBG_MON
_A4 7 
SPI6_CSB P34 DIO SPI6 chip select DVDD18 PD I 
B:GPIO25 0 
O:SPI6_CSB 1 
I1:SPIS1_CSB 2 
B0:TP_GPIO1
_AO 4 
O:DBG_MON
_A5 7 
SPI6_MO P31 DIO SPI6 data out DVDD18 PD I 
B:GPIO26 0 
B0:SPI6_MO 1 
B0:SPIS1_MO
SI 2 
O:DMIC_CLK 6 
O:SCP_DMIC_
CLK 4 
O:DBG_MON
_A6 7 
SPI6_MI P32 DIO SPI6 data in DVDD18 PD I 
B:GPIO27 0 
B0:SPI6_MI 1 
B0:SPIS1_MIS
O 2 
I0:DMIC_DAT 3 
I0:SCP_DMIC_
DAT 4 
O:DBG_MON
_A7 7 
SPI7_CK M33 DIO SPI7 clock DVDD18 PD I 
B:GPIO20 0 
O:SPI7_CLK 1 
I0:SPIS0_CLK 2 
O:MD_URTS0 5 
O:UTXD4 6 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 39

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 39 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DBG_MON
_A0 7 
SPI7_CSB M32 DIO SPI7 chip select DVDD18 PD I 
B:GPIO21 0 
O:SPI7_CSB 1 
I1:SPIS0_CSB 2 
I1:MD_UCTS0 5 
I1:URXD4 6 
O:DBG_MON
_A1 7 
SPI7_MO N33 DIO SPI7 data out DVDD18 PD I 
B:GPIO22 0 
B0:SPI7_MO 1 
B0:SPIS0_MO
SI 2 
O:MD_URTS1 5 
O:UTXD5 6 
O:DBG_MON
_A2 7 
SPI7_MI N32 DIO SPI7 data in DVDD18 PD I 
B:GPIO23 0 
B0:SPI7_MI 1 
B0:SPIS0_MIS
O 2 
I1:MD_UCTS1 5 
I1:URXD5 6 
O:DBG_MON
_A3 7 
UART  
UTXD0 AM12 DIO UR0-TX DVDD18 PU OH 
B:GPIO167 0 
O:UTXD0 1 
URXD0 AN12 DIO UR0-RX DVDD18 PU I 
B:GPIO168 0 
I1:URXD0 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 40

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 40 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
UTXD1 AN11 DIO UR1-TX DVDD18 PD I 
B:GPIO18 0 
O:UTXD1 1 
O:TP_UTXD1_
VCORE 3 
O:HFRP_UTX
D1 5 
O:MD_UTXD0 6 
O:CONN_WIFI
_TXD 7 
URXD1 AM11 DIO UR1-RX DVDD18 PD I 
B:GPIO19 0 
I1:URXD1 1 
I1:TP_URXD1
_VCORE 3 
I1:HFRP_URX
D1 5 
I1:MD_URXD
0 6 
RF-interface 
BPI_D_BUS0 AN27 DIO BPI_BUS0 DVDD18 PD I 
B:GPIO147 0 
O:BPI_BUS0 1 
O:ANT_SEL8 3 
O:CLKM0 4 
O:DBG_MON
_B15 7 
BPI_D_BUS1 AP27 DIO BPI_BUS1 DVDD18 PD I 
B:GPIO148 0 
O:BPI_BUS1 1 
O:ANT_SEL9 3 
O:CLKM1 4 
O:DBG_MON
_B16 7 
BPI_D_BUS2 AN26 DIO BPI_BUS2 DVDD18 PD I 
B:GPIO149 0 
O:BPI_BUS2 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 41

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 41 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:ANT_SEL10 3 
O:CLKM2 4 
O:DBG_MON
_B17 7 
BPI_D_BUS3 AP26 DIO BPI_BUS3 DVDD18 PD I 
B:GPIO150 0 
O:BPI_BUS3 1 
O:ANT_SEL11 3 
O:CLKM3 4 
I0:MD_GPS_B
LANK_EXT 6 
O:DBG_MON
_B18 7 
BPI_D_BUS4 AR26 DIO BPI_BUS4 DVDD18 PD I 
B:GPIO151 0 
O:BPI_BUS4 1 
O:ANT_SEL12 3 
I1:MD32_0_R
XD 6 
O:DBG_MON
_B19 7 
BPI_D_BUS5 AU26 DIO BPI_BUS5 DVDD18 PD I 
B:GPIO152 0 
O:BPI_BUS5 1 
O:ANT_SEL13 3 
O:MD32_0_T
XD 6 
O:DBG_MON
_B20 7 
BPI_D_BUS6 AT26 DIO BPI_BUS6 DVDD18 PD I 
B:GPIO153 0 
O:BPI_BUS6 1 
O:CONN_BPI_
BUS6 2 
O:ANT_SEL14 3 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 42

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 42 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
B0:MD32_0_
GPIO0 6 
O:DBG_MON
_B21 7 
BPI_D_BUS7 AR25 DIO BPI_BUS7 DVDD18 PD I 
B:GPIO154 0 
O:BPI_BUS7 1 
O:CONN_BPI_
BUS7 2 
O:ANT_SEL15 3 
I1:MD32_1_R
XD 6 
O:DBG_MON
_B22 7 
BPI_D_BUS8 AU25 DIO BPI_BUS8 DVDD18 PD I 
B:GPIO155 0 
O:BPI_BUS8 1 
O:CONN_BPI_
BUS8 2 
O:ANT_SEL16 3 
O:MD32_1_T
XD 6 
O:DBG_MON
_B23 7 
BPI_D_BUS9 AT25 DIO BPI_BUS9 DVDD18 PD I 
B:GPIO156 0 
O:BPI_BUS9 1 
O:CONN_BPI_
BUS9 2 
O:ANT_SEL17 3 
B0:MD32_1_
GPIO0 6 
O:DBG_MON
_B24 7 
MD_UCNT AU32 DIO BPI control DVDD18 PD I 
B:GPIO157 0 
I0:MD_UCNT_
A_TGL 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 43

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 43 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
DIGRF_IRQ AR27 DIO BPI control DVDD18 PD I 
B:GPIO158 0 
I0:DIGRF_IRQ 1 
RF-MIPI-interface 
MIPI_M_SCLK AU30 DIO MIPI_M CLK DVDD18 PD I 
B:GPIO159 0 
O:MIPI_M_SC
LK 1 
MIPI_M_SDAT
A AU31 DIO MIPI_M DATA DVDD18 PD I 
B:GPIO160 0 
B0:MIPI_M_S
DATA 1 
MIPI0_D_SCLK AT29 DIO MIPI_0 CLK DVDD18 PD I 
B:GPIO161 0 
O:MIPI0_D_S
CLK 1 
O:CONN_MIPI
0_SCLK 2 
O:BPI_BUS16 3 
O:CONN_BPI_
BUS16_OLAT
5 
4 
O:MD_GPS_L
1_BLANK 6 
MIPI0_D_SDAT
A AT30 DIO MIPI_0 DATA DVDD18 PD I 
B:GPIO162 0 
B0:MIPI0_D_S
DATA 1 
B0:CONN_MI
PI0_SDATA 2 
O:BPI_BUS17 3 
O:CONN_BPI_
BUS17_ANT0 4 
O:MD_GPS_L
5_BLANK 6 
MIPI1_D_SCLK AT28 DIO MIPI_1 CLK DVDD18 PD I 
B:GPIO163 0 
O:MIPI1_D_S
CLK 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 44

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 44 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:CONN_MIPI
1_SCLK 2 
O:BPI_BUS18 3 
O:CONN_BPI_
BUS18_ANT1 4 
O:MIPI3_D_S
CLK 5 
MIPI1_D_SDAT
A AR28 DIO MIPI_1 DATA DVDD18 PD I 
B:GPIO164 0 
B0:MIPI1_D_S
DATA 1 
B0:CONN_MI
PI1_SDATA 2 
O:BPI_BUS19 3 
O:CONN_BPI_
BUS19_ANT2 4 
B0:MIPI3_D_S
DATA 5 
I0:MD_GPS_B
LANK_EXT 6 
MIPI2_D_SCLK AU28 DIO MIPI_2 CLK DVDD18 PD I 
B:GPIO165 0 
O:MIPI2_D_S
CLK 1 
O:BPI_BUS20 3 
O:CONN_BPI_
BUS20_ANT3 4 
O:MIPI4_D_S
CLK 5 
MIPI2_D_SDAT
A AU29 DIO MIPI_2 DATA DVDD18 PD I 
B:GPIO166 0 
B0:MIPI2_D_S
DATA 1 
O:BPI_BUS21 3 
O:CONN_BPI_
BUS21_ANT4 4 
B0:MIPI4_D_S
DATA 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 45

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 45 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
MSDC1 
MSDC1_CLK AU15 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO53 0 
B0:MSDC1_CL
K 1 
O:MD1_SIM2
_SCLK 2 
I0:CONN_DSP
_JCK 3 
I0:UDI_TCK 4 
I0:IPU_JTAG_
TCK 5 
I1:SSPM_JTA
G_TCK_VCOR
E 
6 
MSDC1_CMD AP15 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO54 0 
B1:MSDC1_C
MD 1 
B1:CONN_BG
F_MCU_AICE
_TMSC 
2 
I1:CONN_DSP
_JMS 3 
I0:UDI_TMS 4 
I0:IPU_JTAG_
TMS 5 
I1:SSPM_JTA
G_TMS_VCOR
E 
6 
MSDC1_DAT0 AR15 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO55 0 
B1:MSDC1_D
AT0 1 
O:MD1_SIM2
_SRST 2 
I0:CONN_DSP
_JDI 3 
I0:UDI_TDI_0 4 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 46

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 46 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I0:IPU_JTAG_
TDI 5 
I1:SSPM_JTA
G_TDI_VCORE 6 
MSDC1_DAT1 AT15 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO56 0 
B1:MSDC1_D
AT1 1 
B1:MD1_SIM
2_SIO 2 
O:CONN_DSP
_JDO 3 
O:UDI_TDO_0 4 
O:IPU_JTAG_
TDO 5 
O:SSPM_JTAG
_TDO_VCORE 6 
I0:CONN_WF
_MCU_AICE_
TCKC 
7 
MSDC1_DAT2 AU16 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO57 0 
B1:MSDC1_D
AT2 1 
I0:CONN_BGF
_MCU_AICE_
TCKC 
2 
O:CONN_DSP
_JINTP 3 
I0:UDI_NTRST 4 
I0:IPU_JTAG_
TRST 5 
I0:SSPM_JTA
G_TRSTN_VC
ORE 
6 
MSDC1_DAT3 AT16 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO58 0 
B1:MSDC1_D
AT3 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 47

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 47 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:CONN_TCX
OENA_REQ 4 
O:AGPS_SYNC 6 
B1:CONN_WF
_MCU_AICE_
TMSC 
7 
Camera(CAM) 
CAM_RST0 AM8 DIO Reset control to 0th sensor DVDD18 PD I 
B:GPIO62 0 
O:BPI_BUS22 1 
I1:UCTS2 3 
I0:UDI_TDI_1 4 
CAM_RST1 AN7 DIO Reset control to 1st sensor DVDD18 PD I 
B:GPIO63 0 
O:BPI_BUS23 1 
O:URTS2 3 
O:UDI_TDO_1 4 
CAM_RST2 AP8 DIO Reset control to 2nd sensor DVDD18 PD I 
B:GPIO64 0 
O:DMIC1_CLK 1 
I0:UDI_TDI_2 4 
CAM_RST3 AN8 DIO Reset control to 3rd sensor DVDD18 PD I 
B:GPIO65 0 
I0:DMIC1_DA
T 1 
O:UDI_TDO_2 4 
CAM_CLK0 AT7 DIO Master clock to 0th sensor DVDD18 PD I 
B:GPIO66 0 
O:CMMCLK0 1 
I0:UDI_TDI_3 4 
O:DBG_MON
_B7 7 
CAM_CLK1 AE1 DIO Master clock to 1st sensor DVDD18 PD I 
B:GPIO67 0 
O:CMMCLK1 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 48

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 48 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:UDI_TDO_3 4 
O:DBG_MON
_B8 7 
CAM_CLK2 AU7 DIO Master clock to 2nd sensor DVDD18 PD I 
B:GPIO68 0 
O:CMMCLK2 1 
I0:UDI_TDI_4 4 
O:DBG_MON
_B9 7 
CAM_CLK3 AE2 DIO Master clock to 3rd sensor DVDD18 PD I 
B:GPIO69 0 
O:CMMCLK3 1 
O:UDI_TDO_4 4 
O:DBG_MON
_B10 7 
I2C 
SCL0 U32 DIO I2C0 clock DVDD18 PD I 
B:GPIO121 0 
B1:SCL0 1 
SDA0 V32 DIO I2C0 data DVDD18 PD I 
B:GPIO122 0 
B1:SDA0 1 
SCL1 V34 DIO I2C1 clock DVDD18 PD I 
B:GPIO123 0 
B1:SCL1 1 
SDA1 V33 DIO I2C1 data DVDD18 PD I 
B:GPIO124 0 
B1:SDA1 1 
CAM_SCL2 AN10 DIO I2C2 clock DVDD18 PD I 
B:GPIO125 0 
B1:SCL2 1 
B1:SCP_SCL2 2 
I0:UDI_TDI_6 4 
CAM_SDA2 AM10 DIO I2C2 data DVDD18 PD I 
B:GPIO126 0 
B1:SDA2 1 
B1:SCP_SDA2 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 49

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 49 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:UDI_TDO_6 4 
SCL3 AN19 DIO I2C3 clock DVDD18 PD I 
B:GPIO127 0 
B1:SCL3 1 
O:mbistreade
n_trigger 6 
SDA3 AM19 DIO I2C3 data DVDD18 PD I 
B:GPIO128 0 
B1:SDA3 1 
O:mbistwrite
en_trigger 6 
CAM_SCL4 AT10 DIO I2C4 clock DVDD18 PD I 
B:GPIO129 0 
B1:SCL4 1 
B1:SCP_SCL4 2 
I0:UDI_TDI_7 4 
CAM_SDA4 AP9 DIO I2C4 data DVDD18 PD I 
B:GPIO130 0 
B1:SDA4 1 
B1:SCP_SDA4 2 
O:UDI_TDO_7 4 
CHG_SCL5 AM18 DIO I2C5 clock DVDD18 PD I 
B:GPIO131 0 
B1:SCL5 1 
B0:TP_GPIO0
_AO 4 
CHG_SDA5 AN18 DIO I2C5 data DVDD18 PD I 
B:GPIO132 0 
B1:SDA5 1 
B0:TP_GPIO1
_AO 4 
SCL6 AR18 DIO I2C6 clock DVDD18 PD I 
B:GPIO133 0 
B1:SCL6 1 
SDA6 AT18 DIO I2C6 data DVDD18 PD I 
B:GPIO134 0 
B1:SDA6 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 50

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 50 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
CAM_SCL7 AN9 DIO I2C7 clock DVDD18 PD I 
B:GPIO135 0 
B1:SCL7 1 
CAM_SDA7 AM9 DIO I2C7 data DVDD18 PD I 
B:GPIO136 0 
B1:SDA7 1 
CAM_SCL8 AT8 DIO I2C8 clock DVDD18 PD I 
B:GPIO137 0 
B1:SCL8 1 
CAM_SDA8 AU8 DIO I2C8 data DVDD18 PD I 
B:GPIO138 0 
B1:SDA8 1 
CAM_SCL9 AT9 DIO I2C9 clock DVDD18 PD I 
B:GPIO139 0 
B1:SCL9 1 
O:UTXD2 2 
CAM_SDA9 AR9 DIO I2C9 data DVDD18 PD I 
B:GPIO140 0 
B1:SDA9 1 
I1:URXD2 2 
SCL10 AP11 DIO I2C10 clock DVDD18 PD I 
B:GPIO141 0 
B1:SCL10 1 
I1:UCTS2 2 
O:GPS_L1_EL
NA_EN 3 
SDA10 AR11 DIO I2C10 data DVDD18 PD I 
B:GPIO142 0 
B1:SDA10 1 
O:URTS2 2 
O:GPS_L5_EL
NA_EN 3 
SCL11 AU11 DIO I2C11 clock DVDD18 PD I 
B:GPIO143 0 
B1:SCL11 1 
O:UTXD4 2 
O:PWM_2 3 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 51

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 51 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DISP_ERRO
R0 4 
O:TP_URTS2_
VCORE 6 
SDA11 AT11 DIO I2C11 data DVDD18 PD I 
B:GPIO144 0 
B1:SDA11 1 
I1:URXD4 2 
O:PWM_3 3 
O:DISP_ERRO
R1 4 
I1:TP_UCTS2_
VCORE 6 
SCL12 AR10 DIO I2C12 clock DVDD18 PD I 
B:GPIO145 0 
B1:SCL12 1 
O:UTXD5 2 
O:MD_UTXD1 3 
O:SSPM_UTX
D_AO_VCORE 5 
O:TP_UTXD2_
VCORE 6 
O:CONN_BT_
TXD 7 
SDA12 AU10 DIO I2C12 data DVDD18 PD I 
B:GPIO146 0 
B1:SDA12 1 
I1:URXD5 2 
I1:MD_URXD
1 3 
I1:SSPM_URX
D_AO_VCORE 5 
I1:TP_URXD2
_VCORE 6 
Connectivity 
ANT_SEL0 V3 DIO Antenna select signal DVDD18 PD I B:GPIO94 0 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 52

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 52 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:ANT_SEL0 1 
O:PCIE_PERST
N 2 
B0:TP_GPIO1
4_AO 4 
ANT_SEL1 U4 DIO Antenna select signal DVDD18 PD I 
B:GPIO95 0 
O:ANT_SEL1 1 
B1:PCIE_WAK
EN 2 
B0:TP_GPIO1
5_AO 4 
O:PWM_3 5 
ANT_SEL2 U1 DIO Antenna select signal DVDD18 PD I 
B:GPIO96 0 
O:ANT_SEL2 1 
B1:PCIE_CLKR
EQN 2 
B0:TP_GPIO0
_AO 4 
I0:EXT_FRAM
E_SYNC 6 
ANT_SEL3 T5 DIO Antenna select signal DVDD18 PD I 
B:GPIO97 0 
O:ANT_SEL3 1 
O:TP_UTXD2_
VLP 2 
I0:I2SIN6_DI 3 
B0:TP_GPIO1
_AO 4 
O:PWM_2 5 
O:MD_UTXD1 6 
ANT_SEL4 T4 DIO Antenna select signal DVDD18 PD I 
B:GPIO98 0 
O:ANT_SEL4 1 
I1:TP_URXD2
_VLP 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 53

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 53 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I0:I2SIN6_DI1 6 
B0:TP_GPIO2
_AO 4 
I1:MD_URXD
1 6 
ANT_SEL5 T2 DIO Antenna select signal DVDD18 PD I 
B:GPIO99 0 
O:ANT_SEL5 1 
O:PTA_TXD 2 
I0:I2SIN6_DI2 3 
O:CONN_TCX
OENA_REQ 4 
O:AGPS_SYNC 6 
ANT_SEL6 T3 DIO Antenna select signal DVDD18 PD I 
B:GPIO100 0 
O:ANT_SEL6 1 
I1:PTA_RXD 2 
I0:I2SIN6_DI3 3 
O:PWM_1 5 
CONN_HRST_B
_2 V4 DIO CONNSYS reset2 DVDD18 PD I 
B:GPIO101 0 
O:ANT_SEL7 1 
O:CONN_HRS
T_B_2 2 
O:I2SIN6_MC
K 3 
CONN_HRST_B V5 DIO CONNSYS reset DVDD18 PD I 
B:GPIO102 0 
O:CONN_HRS
T_B 1 
O:CONN_RST 2 
B0:TP_GPIO3
_AO 4 
CONN_TOP_CL
K R1 DIO CONNSYS top 2-wire interface DVDD18 PD I 
B:GPIO103 0 
O:CONN_TOP
_CLK 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 54

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 54 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:UTXD3 3 
O:CONN_UAR
THUB_UART_
TX 
4 
CONN_TOP_D
ATA R2 DIO CONNSYS top 2-wire interface DVDD18 PD I 
B:GPIO104 0 
B0:CONN_TO
P_DATA 1 
I1:URXD3 3 
I1:CONN_UAR
THUB_UART_
RX 
4 
CONN_BT_CLK R5 DIO CONNSYS BT interface DVDD18 PD I 
B:GPIO105 0 
B0:CONN_BT
_CLK 1 
I0:CONN_FAU
LTB 2 
B0:TP_GPIO4
_AO 4 
CONN_BT_DAT
A R4 DIO CONNSYS BT interface DVDD18 PD I 
B:GPIO106 0 
B0:CONN_BT
_DATA 1 
O:CONN_PMI
C_EN 2 
CONN_WB_PT
A R3 DIO CONNSYS Wi-Fi/Bluetooth interface DVDD18 PD I 
B:GPIO107 0 
B0:CONN_WB
_PTA 1 
O:I2SIN2_BCK 2 
O:TP_UTXD1_
VCORE 6 
CONN_WF_CT
RL0 U6 DIO CONNSYS Wi-Fi control signal DVDD18 PD I 
B:GPIO108 0 
B0:CONN_WF
_CTRL0 1 
O:I2SIN2_LRC
K 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 55

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 55 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I1:TP_URXD1
_VCORE 6 
CONN_WF_CT
RL1 T8 DIO CONNSYS Wi-Fi control signal DVDD18 PD I 
B:GPIO109 0 
B0:CONN_WF
_CTRL1 1 
I0:I2SIN2_DI 2 
O:TP_URTS1_
VCORE 6 
CONN_WF_CT
RL2 T6 DIO CONNSYS Wi-Fi control signal DVDD18 PD I 
B:GPIO110 0 
B0:CONN_WF
_CTRL2 1 
O:I2SOUT2_D
O 2 
I1:TP_UCTS1_
VCORE 6 
CONN_WF_CT
RL3 T7 DIO CONNSYS Wi-Fi control signal DVDD18 PD I 
B:GPIO111 0 
B0:CONN_WF
_CTRL3 1 
O:CONN_TOP
_CLK_2 2 
CONN_WF_CT
RL4 R6 DIO CONNSYS Wi-Fi control signal DVDD18 PD I 
B:GPIO112 0 
B0:CONN_WF
_CTRL4 1 
B0:CONN_TO
P_DATA_2 2 
GPS_L1_ELNA_
EN V6 DIO GPS L1 ELNA enable DVDD18 PD I 
B:GPIO92 0 
O:GPS_L1_EL
NA_EN 1 
O:BT_RST 2 
O:DBG_MON
_B11 7 
GPS_L5_ELNA_
EN V7 DIO GPS L5 ELNA enable DVDD18 PD I 
B:GPIO93 0 
O:GPS_L5_EL
NA_EN 1 
O:WF_RST 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 56

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 56 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DBG_MON
_B12 7 
System companion processor (SCP) 
SCP_SPI0_CK AC5 DIO System companion processor clock DVDD18 PD I 
B:GPIO48 0 
O:SPI0_CLK 1 
O:SCP_SPI0_C
K 2 
I0:MD_INT0 3 
I1:SPM_JTAG
_TCK_VLP 4 
I0:CONN_BGF
_MCU_TCK 5 
SCP_SPI0_CSB AD6 DIO System companion processor chip 
select DVDD18 PD I 
B:GPIO49 0 
O:SPI0_CSB 1 
O:SCP_SPI0_C
S 2 
I0:MD_INT3 3 
I1:SPM_JTAG
_TMS_VLP 4 
I1:CONN_BGF
_MCU_TMS 5 
SCP_SPI0_MO AC3 DIO System companion processor dataout DVDD18 PD I 
B:GPIO50 0 
B0:SPI0_MO 1 
B0:SCP_SPI0_
MO 2 
I0:MD_INT4 3 
B1:SPM_JTAG
_TDO_VLP 4 
O:CONN_BGF
_MCU_TDO 5 
SCP_SPI0_MI AC4 DIO System companion processor datain DVDD18 PD I 
B:GPIO51 0 
B0:SPI0_MI 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 57

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 57 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
B0:SCP_SPI0_
MI 2 
I1:SPM_JTAG
_TDI_VLP 4 
I0:CONN_BGF
_MCU_TDI 5 
SCP_SPI1_CK AB1 DIO System companion processor clock DVDD18 PD I 
B:GPIO44 0 
O:SPI1_CLK 1 
O:SCP_SPI1_C
K 2 
O:DMIC1_CLK 3 
B0:TP_GPIO1
3_AO 4 
O:TP_UTXD2_
VLP 5 
O:UTXD2 6 
O:DBG_MON
_A24 7 
SCP_SPI1_CSB AB2 DIO System companion processor chip 
select DVDD18 PD I 
B:GPIO45 0 
O:SPI1_CSB 1 
O:SCP_SPI1_C
S 2 
I0:DMIC1_DA
T 3 
B0:TP_GPIO1
4_AO 4 
I1:TP_URXD2
_VLP 5 
I1:URXD2 6 
O:DBG_MON
_A25 7 
SCP_SPI1_MO AB3 DIO System companion processor dataout DVDD18 PD I 
B:GPIO46 0 
B0:SPI1_MO 1 
B0:SCP_SPI1_
MO 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 58

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 58 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DMIC_CLK 3 
O:SCP_DMIC_
CLK 4 
O:TP_URTS2_
VLP 5 
I1:UCTS2 6 
O:DBG_MON
_A26 7 
SCP_SPI1_MI AB4 DIO System companion processor datain DVDD18 PD I 
B:GPIO47 0 
B0:SPI1_MI 1 
B0:SCP_SPI1_
MI 2 
I0:DMIC_DAT 3 
I0:SCP_DMIC_
DAT 4 
I1:TP_UCTS2_
VLP 5 
O:URTS2 6 
O:DBG_MON
_A27 7 
SCP_SPI2_CK AA1 DIO System companion processor clock DVDD18 PD I 
B:GPIO40 0 
O:SPI2_CLK 1 
O:SCP_SPI2_C
K 2 
B0:TP_GPIO9
_AO 4 
I1:UCTS3 5 
O:TP_UTXD1_
VLP 6 
O:DBG_MON
_A20 7 
SCP_SPI2_CSB AA4 DIO System companion processor chip 
select DVDD18 PD I 
B:GPIO41 0 
O:SPI2_CSB 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 59

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 59 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:SCP_SPI2_C
S 2 
B0:TP_GPIO1
0_AO 4 
O:URTS3 5 
I1:TP_URXD1
_VLP 6 
O:DBG_MON
_A21 7 
SCP_SPI2_MO AA3 DIO System companion processor dataout DVDD18 PD I 
B:GPIO42 0 
B0:SPI2_MO 1 
B0:SCP_SPI2_
MO 2 
B0:TP_GPIO1
1_AO 4 
O:UTXD3 5 
O:TP_URTS1_
VLP 6 
O:DBG_MON
_A22 7 
SCP_SPI2_MI AA5 DIO System companion processor datain DVDD18 PD I 
B:GPIO43 0 
B0:SPI2_MI 1 
B0:SCP_SPI2_
MI 2 
B0:TP_GPIO1
2_AO 4 
I1:URXD3 5 
I1:TP_UCTS1_
VLP 6 
O:DBG_MON
_A23 7 
SCP_SPI3_CK AD7 DIO System companion processor clock DVDD18 PD I 
B:GPIO36 0 
O:SPI3_CLK 1 
O:SCP_SPI3_C
K 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 60

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 60 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I0:MD_INT0 3 
B0:TP_GPIO5
_AO 4 
O:UTXD4 5 
O:MD_UTXD0 6 
O:DBG_MON
_A16 7 
SCP_SPI3_CSB AD8 DIO System companion processor chip 
select DVDD18 PD I 
B:GPIO37 0 
O:SPI3_CSB 1 
O:SCP_SPI3_C
S 2 
I0:MD_INT3 3 
B0:TP_GPIO6
_AO 4 
I1:URXD4 5 
I1:MD_URXD
0 6 
O:DBG_MON
_A17 7 
SCP_SPI3_MO AC8 DIO System companion processor dataout DVDD18 PD I 
B:GPIO38 0 
B0:SPI3_MO 1 
B0:SCP_SPI3_
MO 2 
I0:MD_INT4 3 
B0:TP_GPIO7
_AO 4 
O:UTXD5 5 
O:DBG_MON
_A18 7 
SCP_SPI3_MI AC7 DIO System companion processor datain DVDD18 PD I 
B:GPIO39 0 
B0:SPI3_MI 1 
B0:SCP_SPI3_
MI 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 61

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 61 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
B0:TP_GPIO8
_AO 4 
I1:URXD5 5 
O:DBG_MON
_A19 7 
SCP_I2C_SCL0 Y1 DIO System companion processor I2C0 CLK DVDD18 PD I 
B:GPIO80 0 
B1:SCP_SCL0 1 
I1:UCTS3 2 
O:CMMCLK4 3 
B0:TP_GPIO2
_AO 4 
O:PWM_VLP 5 
O:TP_UTXD2_
VLP 6 
SCP_I2C_SDA0 W1 DIO System companion processor I2C0 
DATA DVDD18 PD I 
B:GPIO81 0 
B1:SCP_SDA0 1 
O:URTS3 2 
O:CMMCLK5 3 
B0:TP_GPIO3
_AO 4 
I0:SRCLKENAI
1 5 
I1:TP_URXD2
_VLP 6 
SCP_I2C_SCL1 W7 DIO System companion processor I2C1 CLK DVDD18 PD I 
B:GPIO82 0 
B1:SCP_SCL1 1 
O:UTXD3 2 
O:CMMCLK4 3 
B0:TP_GPIO4
_AO 4 
I0:MD_INT3 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 62

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 62 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:TP_URTS2_
VLP 6 
SCP_I2C_SDA1 W8 DIO System companion processor I2C1 
DATA DVDD18 PD I 
B:GPIO83 0 
B1:SCP_SDA1 1 
I1:URXD3 2 
O:CMMCLK5 3 
B0:TP_GPIO5
_AO 4 
I0:MD_INT4 5 
I1:TP_UCTS2_
VLP 6 
SCP_I2C_SCL2 W5 DIO System companion processor I2C2 CLK DVDD18 PD I 
B:GPIO84 0 
B1:SCP_SCL2 1 
O:MD_MCIF_
UTXD0 2 
O:MD_UTXD0 3 
B0:TP_GPIO6
_AO 4 
O:SSPM_UTX
D_AO_VLP 5 
O:TP_UTXD1_
VLP 6 
O:CONN_BGF
_UART0_TXD 7 
SCP_I2C_SDA2 W2 DIO System companion processor I2C2 
DATA DVDD18 PD I 
B:GPIO85 0 
B1:SCP_SDA2 1 
I1:MD_MCIF_
URXD0 2 
I1:MD_URXD
0 3 
B0:TP_GPIO7
_AO 4 
I1:SSPM_URX
D_AO_VLP 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 63

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 63 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I1:TP_URXD1
_VLP 6 
I1:CONN_BGF
_UART0_RXD 7 
SCP_I2C_SCL3 W3 DIO System companion processor I2C3 CLK DVDD18 PD I 
B:GPIO86 0 
B1:SCP_SCL3 1 
B0:I2SIN6_BC
K 3 
B0:TP_GPIO8
_AO 4 
I0:EXTIF0_AC
T 5 
O:TP_URTS1_
VLP 6 
SCP_I2C_SDA3 V2 DIO System companion processor I2C3 
DATA DVDD18 PD I 
B:GPIO87 0 
B1:SCP_SDA3 1 
O:I2SOUT6_D
O 3 
B0:TP_GPIO9
_AO 4 
I0:EXTIF0_PRI 5 
I1:TP_UCTS1_
VLP 6 
SCP_I2C_SCL4 Y3 DIO System companion processor I2C4 CLK DVDD18 PD I 
B:GPIO88 0 
B1:SCP_SCL4 1 
O:I2SOUT6_D
O1 3 
B0:TP_GPIO1
0_AO 4 
O:EXTIF0_GN
T_B 5 
SCP_I2C_SDA4 Y2 DIO System companion processor I2C4 
DATA DVDD18 PD I 
B:GPIO89 0 
B1:SCP_SDA4 1 
O:I2SOUT6_D
O2 3 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 64

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 64 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
B0:TP_GPIO1
1_AO 4 
I0:MD_INT0 5 
SCP_I2C_SCL5 AB7 DIO System companion processor I2C5 CLK DVDD18 PD I 
B:GPIO90 0 
B1:SCP_SCL5 1 
B0:I2SIN6_LR
CK 3 
B0:TP_GPIO1
2_AO 4 
O:MD_GPS_L
1_BLANK 6 
SCP_I2C_SDA5 AB8 DIO System companion processor I2C5 
DATA DVDD18 PD I 
B:GPIO91 0 
B1:SCP_SDA5 1 
O:I2SOUT6_D
O3 3 
B0:TP_GPIO1
3_AO 4 
O:MD_GPS_L
5_BLANK 6 
SCP_VREQ_VA
O AT17 DIO System companion processor voltage 
request DVDD18 PD I 
B:GPIO185 0 
O:SCP_VREQ_
VAO 1 
General purpose 
PERI_EN0 AN13 DIO PERIPHERAL_EN0 DVDD18 PD OL 
B:GPIO113 0 
O:PWM_0 1 
O:MD1_SIM2
_SCLK 2 
PERI_EN1 AM13 DIO PERIPHERAL_EN1 DVDD18 PD OL 
B:GPIO114 0 
O:PWM_1 1 
O:MD1_SIM2
_SRST 2 
O:TP_UTXD2_
VCORE 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 65

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 65 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:UTXD2 6 
O:DBG_MON
_B13 7 
PERI_EN2 AP13 DIO PERIPHERAL_EN2 DVDD18 PD OL 
B:GPIO115 0 
O:PWM_2 1 
B1:MD1_SIM
2_SIO 2 
I1:TP_URXD2
_VCORE 5 
I1:URXD2 6 
O:DBG_MON
_B14 7 
PERI_EN3 AP14 DIO PERIPHERAL_EN3 DVDD18 PD OL 
B:GPIO116 0 
O:PWM_3 1 
O:MD1_SIM1
_SCLK 2 
PERI_EN4 AR13 DIO PERIPHERAL_EN4 DVDD18 PD OL 
B:GPIO117 0 
I0:DSI_TE1 1 
O:MD1_SIM1
_SRST 2 
I0:UDI_TDI_5 4 
O:MD_GPS_L
1_BLANK 6 
O:DBG_MON
_A30 7 
PERI_EN5 AT14 DIO PERIPHERAL_EN5 DVDD18 PD OL 
B:GPIO118 0 
O:LCM_RST1 1 
B1:MD1_SIM
1_SIO 2 
O:UDI_TDO_5 4 
O:MD_GPS_L
5_BLANK 6 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 66

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 66 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DBG_MON
_A31 7 
JTAG 
JTRSTN T32 DIO JTAG interface DVDD18 PU I 
B:GPIO169 0 
I1:JTRSTN_SE
L1_VCORE 1 
I0:SPM_JTAG
_TRSTN_VCO
RE 
6 
JTDO T34 DIO JTAG interface DVDD18 PD I 
B:GPIO170 0 
O:JTDO_SEL1
_VCORE 1 
B1:SPM_JTAG
_TDO_VCORE 6 
JTCK T33 DIO JTAG interface DVDD18 PD I 
B:GPIO171 0 
I0:JTCK_SEL1_
VCORE 1 
I1:SPM_JTAG
_TCK_VCORE 6 
JTMS U33 DIO JTAG interface DVDD18 PD I 
B:GPIO172 0 
B0:JTMS_SEL
1_VCORE 1 
I1:SPM_JTAG
_TMS_VCORE 6 
JTDI U34 DIO JTAG interface DVDD18 PD I 
B:GPIO173 0 
I0:JTDI_SEL1_
VCORE 1 
I1:SPM_JTAG
_TDI_VCORE 6 
Digital-RF (DRF) 
DRF_DL_CP AK30 AIO DRF interface AVDD12_DRF         
DRF_DL_CN AK31 AIO DRF interface AVDD12_DRF         
DRF_DL_LN0_
DP AL34 AIO DRF interface AVDD12_DRF         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 67

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 67 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
DRF_DL_LN0_
DN AK34 AIO DRF interface AVDD12_DRF         
DRF_DL_LN1_
DP AJ32 AIO DRF interface AVDD12_DRF         
DRF_DL_LN1_
DN AJ33 AIO DRF interface AVDD12_DRF         
DRF_DL_LN2_
DP AH30 AIO DRF interface AVDD12_DRF         
DRF_DL_LN2_
DN AH31 AIO DRF interface AVDD12_DRF         
DRF_DL_LN3_
DP AH34 AIO DRF interface AVDD12_DRF         
DRF_DL_LN3_
DN AG34 AIO DRF interface AVDD12_DRF         
DRF_UL_CP AM33 AIO DRF interface AVDD12_DRF         
DRF_UL_CN AM32 AIO DRF interface AVDD12_DRF         
DRF_UL_LN1_
DP AN31 AIO DRF interface AVDD12_DRF         
DRF_UL_LN1_
DN AN30 AIO DRF interface AVDD12_DRF         
DRF_UL_LN0_
DP AP33 AIO DRF interface AVDD12_DRF         
DRF_UL_LN0_
DN AR33 AIO DRF interface AVDD12_DRF         
MIPI 
DSI0_D3N_T3A AB32 AIO DSI interface  AVDD12_DSI         
DSI0_D3P_T2C AB33 AIO DSI interface  AVDD12_DSI         
DSI0_D1N_T2B AB34 AIO DSI interface  AVDD12_DSI         
DSI0_D1P_T2A AC34 AIO DSI interface  AVDD12_DSI         
DSI0_CK0N_T1
C AB30 AIO DSI interface  AVDD12_DSI         
DSI0_CK0P_T1
B AB31 AIO DSI interface  AVDD12_DSI         
DSI0_D0N_T1A AC30 AIO DSI interface  AVDD12_DSI         
DSI0_D0P_T0C AC31 AIO DSI interface  AVDD12_DSI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 68

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 68 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
DSI0_D2N_T0B AC33 AIO DSI interface  AVDD12_DSI         
DSI0_D2P_T0A AC32 AIO DSI interface  AVDD12_DSI         
DSI1_D3N_T3A AD33 AIO DSI interface  AVDD12_DSI         
DSI1_D3P_T2C AD32 AIO DSI interface  AVDD12_DSI         
DSI1_D1N_T2B AE34 AIO DSI interface  AVDD12_DSI         
DSI1_D1P_T2A AE33 AIO DSI interface  AVDD12_DSI         
DSI1_CK0N_T1
C AE30 AIO DSI interface  AVDD12_DSI         
DSI1_CK0P_T1
B AE31 AIO DSI interface  AVDD12_DSI         
DSI1_D0N_T1A AF30 AIO DSI interface  AVDD12_DSI         
DSI1_D0P_T0C AF31 AIO DSI interface  AVDD12_DSI         
DSI1_D2N_T0B AF33 AIO DSI interface  AVDD12_DSI         
DSI1_D2P_T0A AF32 AIO DSI interface  AVDD12_DSI         
CSI0B_L1N AP6 AIO CSI interface AVDD12_CSI         
CSI0B_L1P_T0
C AP5 AIO CSI interface AVDD12_CSI         
CSI0B_L0N_T0
B AR5 AIO CSI interface AVDD12_CSI         
CSI0B_L0P_T0
A AR4 AIO CSI interface AVDD12_CSI         
CSI0A_L2N_T1
C AU5 AIO CSI interface AVDD12_CSI         
CSI0A_L2P_T1
B AU4 AIO CSI interface AVDD12_CSI         
CSI0A_L1N_T1
A AU3 AIO CSI interface AVDD12_CSI         
CSI0A_L1P_T0
C AT3 AIO CSI interface AVDD12_CSI         
CSI0A_L0N_T0
B AT2 AIO CSI interface AVDD12_CSI         
CSI0A_L0P_T0
A AR3 AIO CSI interface AVDD12_CSI         
CSI1B_L1N AR2 AIO CSI interface AVDD12_CSI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 69

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 69 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
CSI1B_L1P_T0
C AP3 AIO CSI interface AVDD12_CSI         
CSI1B_L0N_T0
B AP2 AIO CSI interface AVDD12_CSI         
CSI1B_L0P_T0
A AP1 AIO CSI interface AVDD12_CSI         
CSI1A_L2N_T1
C AN5 AIO CSI interface AVDD12_CSI         
CSI1A_L2P_T1
B AN4 AIO CSI interface AVDD12_CSI         
CSI1A_L1N_T1
A AM5 AIO CSI interface AVDD12_CSI         
CSI1A_L1P_T0
C AM4 AIO CSI interface AVDD12_CSI         
CSI1A_L0N_T0
B AM3 AIO CSI interface AVDD12_CSI         
CSI1A_L0P_T0
A AM2 AIO CSI interface AVDD12_CSI         
CSI2B_L1N AL2 AIO CSI interface AVDD12_CSI         
CSI2B_L1P_T0
C AL1 AIO CSI interface AVDD12_CSI         
CSI2B_L0N_T0
B AK2 AIO CSI interface AVDD12_CSI         
CSI2B_L0P_T0
A AK1 AIO CSI interface AVDD12_CSI         
CSI2A_L2N_T1
C AL4 AIO CSI interface AVDD12_CSI         
CSI2A_L2P_T1
B AL3 AIO CSI interface AVDD12_CSI         
CSI2A_L1N_T1
A AK5 AIO CSI interface AVDD12_CSI         
CSI2A_L1P_T0
C AK4 AIO CSI interface AVDD12_CSI         
CSI2A_L0N_T0
B AJ4 AIO CSI interface AVDD12_CSI         
CSI2A_L0P_T0
A AJ5 AIO CSI interface AVDD12_CSI         
CSI3B_L1N AJ2 AIO CSI interface AVDD12_CSI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 70

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 70 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
CSI3B_L1P_T0
C AJ3 AIO CSI interface AVDD12_CSI         
CSI3B_L0N_T0
B AH2 AIO CSI interface AVDD12_CSI         
CSI3B_L0P_T0
A AH3 AIO CSI interface AVDD12_CSI         
CSI3A_L2N_T1
C AG1 AIO CSI interface AVDD12_CSI         
CSI3A_L2P_T1
B AG2 AIO CSI interface AVDD12_CSI         
CSI3A_L1N_T1
A AG3 AIO CSI interface AVDD12_CSI         
CSI3A_L1P_T0
C AG5 AIO CSI interface AVDD12_CSI         
CSI3A_L0N_T0
B AF4 AIO CSI interface AVDD12_CSI         
CSI3A_L0P_T0
A AF3 AIO CSI interface AVDD12_CSI         
WBG (Wi-Fi/Bluetooth/GPS) 
XIN_WBG L10 AIO WBG crystal clock input AVDD15_WBG         
GL1_I K5 AIO GPS L1 I channel AVDD15_WBG         
GL1_Q K4 AIO GPS L1 Q channel AVDD15_WBG         
GL5_I K3 AIO GPS L5 I channel AVDD15_WBG         
GL5_Q L3 AIO GPS L5 Q channel AVDD15_WBG         
BT_IN J1 AIO BT I channel negative-end AVDD15_WBG         
BT_IP H1 AIO BT I channel positive-end AVDD15_WBG         
BT_QN K2 AIO BT Q channel negative-end AVDD15_WBG         
BT_QP J2 AIO BT Q channel positive-end AVDD15_WBG         
WF0_IN G5 AIO Wi-Fi I channel 0 negative-end AVDD15_WBG         
WF0_IP G6 AIO Wi-Fi I channel 0 positive-end AVDD15_WBG         
WF0_QN H6 AIO Wi-Fi Q channel 0 negative-end AVDD15_WBG         
WF0_QP H5 AIO Wi-Fi Q channel 0 positive-end AVDD15_WBG         
WF1_IN F3 AIO Wi-Fi I channel 1 negative-end AVDD15_WBG         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 71

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 71 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
WF1_IP F4 AIO Wi-Fi I channel 1 positive-end AVDD15_WBG         
WF1_QN G2 AIO Wi-Fi Q channel 1 negative-end AVDD15_WBG         
WF1_QP F2 AIO Wi-Fi Q channel 1 positive-end AVDD15_WBG         
USB 
USB_DM J31 AIO USB D- differential data line AVDD33_USB         
USB_DP J30 AIO USB D+ differential data line AVDD33_USB         
SSUSB 
SSUSB_TXP_P1 L30 AIO SSUSB TXDATA AVDD12_SSUSB         
SSUSB_TXN_P
1 L31 AIO SSUSB TXDATA AVDD12_SSUSB         
SSUSB_RXP_P1 K29 AIO SSUSB RXDATA AVDD12_SSUSB         
SSUSB_RXN_P
1 K28 AIO SSUSB RXDATA AVDD12_SSUSB         
PCIe 
CKM_XTAL_CK N11 AIO 26M reference clock input for PCIe AVDD12_PCIE         
PCIE_CKP M1 AIO PCIe interface AVDD12_PCIE         
PCIE_CKN M2 AIO PCIe interface AVDD12_PCIE         
PCIE_LN0_TXP N5 AIO PCIe interface AVDD12_PCIE         
PCIE_LN0_TXN N4 AIO PCIe interface AVDD12_PCIE         
PCIE_LN0_RXP M6 AIO PCIe interface AVDD12_PCIE         
PCIE_LN0_RXN M7 AIO PCIe interface AVDD12_PCIE         
UFS 
UFS_PLL_CKRE
F E34 AIO 26 MHz clock input for UFS AVDD12_UFS         
UFS_REFCK_O
UT H28 AIO UFS interface AVDD12_UFS         
UFS_RST_N F33 AIO UFS interface AVDD12_UFS         
UFS_RX0N C33 AIO UFS interface AVDD12_UFS         
UFS_RX0P C34 AIO UFS interface AVDD12_UFS         
UFS_RX1N D32 AIO UFS interface AVDD12_UFS         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 72

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 72 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
UFS_RX1P E32 AIO UFS interface AVDD12_UFS         
UFS_TX0N G33 AIO UFS interface AVDD12_UFS         
UFS_TX0P G34 AIO UFS interface AVDD12_UFS         
UFS_TX1N G30 AIO UFS interface AVDD12_UFS         
UFS_TX1P G31 AIO UFS interface AVDD12_UFS         
MISC 
TN_APPLLGP T19 AIO Reserved           
TP_APPLLGP R19 AIO Reserved           
PWRGD_TRIM J23 AIO Reserved           
EMI 
EMI0_CA0 A11 AIO DRAM interface AVDDQ_EMI         
EMI0_CA1 A9 AIO DRAM interface AVDDQ_EMI         
EMI0_CA2 B8 AIO DRAM interface AVDDQ_EMI         
EMI0_CA3 D9 AIO DRAM interface AVDDQ_EMI         
EMI0_CA4 B12 AIO DRAM interface AVDDQ_EMI         
EMI0_CA5 C9 AIO DRAM interface AVDDQ_EMI         
EMI0_CA6 D10 AIO DRAM interface AVDDQ_EMI         
EMI0_CK_C D7 AIO DRAM interface AVDDQ_EMI         
EMI0_CK_T C7 AIO DRAM interface AVDDQ_EMI         
EMI0_CS1 E8 AIO DRAM interface AVDDQ_EMI         
EMI0_CS0 E9 AIO DRAM interface AVDDQ_EMI         
EMI0_DMI0 B14 AIO DRAM interface AVDDQ_EMI         
EMI0_DMI1 C4 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ0 A15 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ1 B16 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ2 A17 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ3 D13 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ4 C13 AIO DRAM interface AVDDQ_EMI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 73

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 73 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
EMI0_DQ5 A13 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ6 D12 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ7 D11 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ8 A3 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ9 B4 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ10 A5 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ11 D5 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ12 B6 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ13 E6 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ14 A7 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ15 D3 AIO DRAM interface AVDDQ_EMI         
EMI0_RDQS1_
C C1 AIO DRAM interface AVDDQ_EMI         
EMI0_RDQS1_
T D1 AIO DRAM interface AVDDQ_EMI         
EMI0_RDQS0_
C F15 AIO DRAM interface AVDDQ_EMI         
EMI0_RDQS0_
T E15 AIO DRAM interface AVDDQ_EMI         
EMI0_WCK0_C C14 AIO DRAM interface AVDDQ_EMI         
EMI0_WCK0_T D14 AIO DRAM interface AVDDQ_EMI         
EMI0_WCK1_C D2 AIO DRAM interface AVDDQ_EMI         
EMI0_WCK1_T C2 AIO DRAM interface AVDDQ_EMI         
EMI1_CA0 B24 AIO DRAM interface AVDDQ_EMI         
EMI1_CA1 B26 AIO DRAM interface AVDDQ_EMI         
EMI1_CA2 E22 AIO DRAM interface AVDDQ_EMI         
EMI1_CA3 A27 AIO DRAM interface AVDDQ_EMI         
EMI1_CA4 A23 AIO DRAM interface AVDDQ_EMI         
EMI1_CA5 C21 AIO DRAM interface AVDDQ_EMI         
EMI1_CA6 E21 AIO DRAM interface AVDDQ_EMI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 74

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 74 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
NC_EMI1_CA7   AIO DRAM interface AVDDQ_EMI         
EMI1_CK_C C24 AIO DRAM interface AVDDQ_EMI         
EMI1_CK_T D24 AIO DRAM interface AVDDQ_EMI         
EMI1_CS1 F24 AIO DRAM interface AVDDQ_EMI         
EMI1_CS0 F23 AIO DRAM interface AVDDQ_EMI         
EMI1_DMI0 C27 AIO DRAM interface AVDDQ_EMI         
EMI1_DMI1 A21 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ0 B32 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ1 A31 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ2 B30 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ3 D27 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ4 A29 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ5 D26 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ6 B28 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ7 C28 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ8 B20 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ9 A19 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ10 B18 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ11 C19 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ12 D18 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ13 B22 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ14 E19 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ15 D20 AIO DRAM interface AVDDQ_EMI         
EMI1_RDQS0_
C C30 AIO DRAM interface AVDDQ_EMI         
EMI1_RDQS0_
T D30 AIO DRAM interface AVDDQ_EMI         
EMI1_RDQS1_
C F16 AIO DRAM interface AVDDQ_EMI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 75

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 75 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
EMI1_RDQS1_
T E16 AIO DRAM interface AVDDQ_EMI         
EMI1_WCK1_T C17 AIO DRAM interface AVDDQ_EMI         
EMI1_WCK1_C D17 AIO DRAM interface AVDDQ_EMI         
EMI1_WCK0_C D29 AIO DRAM interface AVDDQ_EMI         
EMI1_WCK0_T C29 AIO DRAM interface AVDDQ_EMI         
EMI_EXTR E1 AIO DRAM interface AVDDQ_EMI         
EMI_RESET_N C31 AIO DRAM interface AVDDQ_EMI         
Analog power 
AVDD12_USB L34 P Analog power for USB AVDD12_USB         
AVDD15_USB K33 P Analog power for USB AVDD15_USB         
AVDD33_USB L33 P Analog power for USB AVDD33_USB         
AVDD12_SSUS
B_P1 M34 P Analog power for SSUSB AVDD12_SSUSB_P1         
AVDD15_SSUS
B_P1 N34 P Analog power for SSUSB AVDD15_SSUSB_P1         
AVDD12_CKSQ AA29 P Analog power for clock square AVDD12_CKSQ         
AVDD15_CKSQ AA27 P Analog power for clock sqaure AVDD15_CKSQ         
AVDD08_DRV_
DSI AE29 P Analog power for DSI AVDD08_DRV_DSI         
AVDD12_DSI AC28 P Analog power for DSI AVDD12_DSI         
AVDD15_DSI AF28 P Analog power for DSI AVDD15_DSI         
AVDD12_DRF AN34 P Analog power for DRF AVDD12_DRF         
AVDD15_DRF AJ28 P Analog power for DRF AVDD15_DRF         
AVDD12_CSI AU6 P Analog power for CSI AVDD12_CSI         
AVDD12_PCIE P7 P Analog power for PCIe AVDD12_PCIE         
AVDD15_PCIE P8 P Analog power for PCIe AVDD15_PCIE         
AVDD12_WBG K7 P Analog power for WBG (Wi-Fi/BT/GPS) AVDD12_WBG         
AVDD15_WBG F1 P Analog power for WBG (Wi-Fi/BT/GPS) AVDD15_WBG         
AVDD12_EMI K12 P DDRPHY power AVDD12_EMI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 76

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 76 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AVDD15_EMI J12 P DDRPHY power AVDD15_EMI         
AVDDQ_EMI0 K13 P DDRPHY power AVDDQ_EMI0         
K15 P DDRPHY power AVDDQ_EMI0         
AVDD075_EMI
0 
K14 P DDRPHY power AVDD075_EMI0         
K16 P DDRPHY power AVDD075_EMI0         
AVDDQ_EMI1 K19 P DDRPHY power AVDDQ_EMI1         
K21 P DDRPHY power AVDDQ_EMI1         
AVDD075_EMI
1 
K18 P DDRPHY power AVDD075_EMI1         
K20 P DDRPHY power AVDD075_EMI1         
VDD2H_EMI L17 P DRAM power VDD2H_EMI         
AVDD12_CKBU
F_UFS H27 P Analog power for UFS AVDD12_CKBUF_UF
S         
AVDD12_UFS K24 P Analog power for UFS AVDD12_UFS         
AVDD15_UFS J24 P Analog power for UFS AVDD15_UFS         
AVDD12_MCU
PLL T18 P Analog power for MCU PLL AVDD12_MCUPLL         
AVDD15_MCU
PLL R18 P Analog power for MCU PLL AVDD15_MCUPLL         
AVDD12_PLL AA19 P Analog power for AP PLL AVDD12_PLL         
AVDD15_PLL Y19 P Analog power for AP PLL AVDD15_PLL         
AVDD12_GPUP
LL AD14 P Analog power for GPU PLL AVDD12_GPUPLL         
AVDD15_GPUP
LL AE15 P Analog power for GPU PLL AVDD15_GPUPLL         
AVDD12_NPUP
LL P12 P Analog power for NPU PLL AVDD12_NPUPLL         
AVDD15_NPUP
LL R11 P Analog power for NPU PLL AVDD15_NPUPLL         
AVDD12_MDP
LL AC19 P Analog power for MD PLL AVDD12_MDPLL         
AVDD15_MDP
LL AD19 P Analog power for MD PLL AVDD15_MDPLL         
AVDD15_PROC R20 P Analog power for CPU AVDD15_PROC         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 77

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 77 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AVDD15_PWR
GD H23 P Analog power for PWRGD AVDD15_PWRGD         
Digital power 
DVDD_CORE 
L23 P Digital power input for core           
M9 P Digital power input for core           
M12 P Digital power input for core           
M17 P Digital power input for core           
N13 P Digital power input for core           
N15 P Digital power input for core           
N17 P Digital power input for core           
R13 P Digital power input for core           
R15 P Digital power input for core           
T15 P Digital power input for core           
T17 P Digital power input for core           
U17 P Digital power input for core           
V15 P Digital power input for core           
V17 P Digital power input for core           
W14 P Digital power input for core           
Y9 P Digital power input for core           
Y12 P Digital power input for core           
Y15 P Digital power input for core           
Y17 P Digital power input for core           
AE14 P Digital power input for core           
AL10 P Digital power input for core           
DVDD_GPUST
ACK 
AA14 P Digital power input for GPU           
AB16 P Digital power input for GPU           
AC14 P Digital power input for GPU           
AC18 P Digital power input for GPU           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 78

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 78 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AD16 P Digital power input for GPU           
AE16 P Digital power input for GPU           
AF16 P Digital power input for GPU           
AF18 P Digital power input for GPU           
AG14 P Digital power input for GPU           
AG18 P Digital power input for GPU           
AH16 P Digital power input for GPU           
AJ14 P Digital power input for GPU           
AJ15 P Digital power input for GPU           
AJ16 P Digital power input for GPU           
AJ18 P Digital power input for GPU           
DVDD_MM 
AB10 P Digital power input for multimedia           
AC10 P Digital power input for multimedia           
AC12 P Digital power input for multimedia           
AC13 P Digital power input for multimedia           
AD10 P Digital power input for multimedia           
AE12 P Digital power input for multimedia           
AF12 P Digital power input for multimedia           
AG12 P Digital power input for multimedia           
AH11 P Digital power input for multimedia           
AJ12 P Digital power input for multimedia           
AJ13 P Digital power input for multimedia           
AK10 P Digital power input for multimedia           
DVDD_MODE
M 
AB19 P Digital power input for modem           
AB21 P Digital power input for modem           
AB23 P Digital power input for modem           
AB25 P Digital power input for modem           
AC21 P Digital power input for modem           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 79

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 79 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AD21 P Digital power input for modem           
AD23 P Digital power input for modem           
AD25 P Digital power input for modem           
AE19 P Digital power input for modem           
AF21 P Digital power input for modem           
AF23 P Digital power input for modem           
AF25 P Digital power input for modem           
AG19 P Digital power input for modem           
AG21 P Digital power input for modem           
AG25 P Digital power input for modem           
AH23 P Digital power input for modem           
AJ19 P Digital power input for modem           
AJ23 P Digital power input for modem           
AJ25 P Digital power input for modem           
AK26 P Digital power input for modem           
DVDD_NPU 
R10 P Digital power input for NPU           
T10 P Digital power input for NPU           
T11 P Digital power input for NPU           
U10 P Digital power input for NPU           
U12 P Digital power input for NPU           
U13 P Digital power input for NPU           
V10 P Digital power input for NPU           
V12 P Digital power input for NPU           
W10 P Digital power input for NPU           
DVDD_PROC_B 
M25 P Digital power input for big core           
N25 P Digital power input for big core           
P25 P Digital power input for big core           
R25 P Digital power input for big core           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 80

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 80 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
T25 P Digital power input for big core           
T26 P Digital power input for big core           
T27 P Digital power input for big core           
T28 P Digital power input for big core           
T29 P Digital power input for big core           
T31 P Digital power input for big core           
U25 P Digital power input for big core           
U29 P Digital power input for big core           
U31 P Digital power input for big core           
V31 P Digital power input for big core           
W21 P Digital power input for big core           
W25 P Digital power input for big core           
W26 P Digital power input for big core           
W27 P Digital power input for big core           
W28 P Digital power input for big core           
W29 P Digital power input for big core           
W31 P Digital power input for big core           
Y21 P Digital power input for big core           
Y25 P Digital power input for big core           
Y29 P Digital power input for big core           
Y31 P Digital power input for big core           
AA21 P Digital power input for big core           
AA23 P Digital power input for big core           
AA25 P Digital power input for big core           
DVDD_PROC_L 
N19 P Digital power input for little core           
N21 P Digital power input for little core           
N23 P Digital power input for little core           
P19 P Digital power input for little core           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 81

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 81 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
P21 P Digital power input for little core           
R23 P Digital power input for little core           
T21 P Digital power input for little core           
T23 P Digital power input for little core           
U19 P Digital power input for little core           
U21 P Digital power input for little core           
V19 P Digital power input for little core           
V21 P Digital power input for little core           
V23 P Digital power input for little core           
W19 P Digital power input for little core           
DVDD_SRAM_
CORE 
M15 P Digital power input for core SRAM           
M19 P Digital power input for core SRAM           
P14 P Digital power input for core SRAM           
U14 P Digital power input for core SRAM           
V14 P Digital power input for core SRAM           
Y14 P Digital power input for core SRAM           
Y16 P Digital power input for core SRAM           
AK18 P Digital power input for core SRAM           
DVDD_SRAM_
CORE_1 M27 P Digital power input for core SRAM           
DVDD_SRAM_
GPUSTACK 
AC16 P Digital power input for GPU SRAM           
AG16 P Digital power input for GPU SRAM           
DVDD_SRAM_
MM 
AB12 P Digital power input for multimedia 
SRAM           
AD12 P Digital power input for multimedia 
SRAM           
AE11 P Digital power input for multimedia 
SRAM           
AH12 P Digital power input for multimedia 
SRAM           
AC23 P Digital power input for modem SRAM           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 82

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 82 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
DVDD_SRAM_
MODEM 
AD20 P Digital power input for modem SRAM           
AG20 P Digital power input for modem SRAM           
AG23 P Digital power input for modem SRAM           
DVDD_SRAM_
NPU R9 P Digital power input for NPU SRAM           
DVDD_SRAM_
PROC_B 
R24 P Digital power input for big core SRAM           
U24 P Digital power input for big core SRAM           
Y23 P Digital power input for big core SRAM           
DVDD_SRAM_
PROC_L 
R21 P Digital power input for little core 
SRAM           
W20 P Digital power input for little core 
SRAM           
DVDD_SRAM_
SCP 
M21 P Digital power input for SCP SRAM           
M23 P Digital power input for SCP SRAM           
DVDD18_VQPS AA10 P eFuse blowing power control           
DVDD12_ESIM AU13 P Digital power input for ESIM           
DVDD18_ESIM AR14 P Digital power input for ESIM           
DVDD15_MSD
C1 AR17 P Digital power input for MSDC1           
DVDD28_MSD
C1 AP17 P Digital power input for MSDC1           
DVDD15_SIM AU17 P Digital power input for SIM1/SIM2           
DVDD28_SIM1 AU14 P Digital power input for SIM1           
DVDD28_SIM2 AT13 P Digital power input for SIM2           
DVDD12_IOB
M_MIPI AT31 P Digital power input for I/O           
DVDD18_IOB
M_MIPI AR29 P Digital power input for I/O           
DVDD18_IOB
M 
AP20 P Digital power input for I/O           
AP21 P Digital power input for I/O           
DVDD18_IOLM R31 P Digital power input for I/O           
DVDD18_IORB AP10 P Digital power input for I/O           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 83

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 83 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
DVDD12_IORT
_HS P2 P Digital power input for I/O           
DVDD18_IORT
_HS U5 P Digital power input for I/O           
DVDD18_IORT 
W4 P Digital power input for I/O           
Y5 P Digital power input for I/O           
Ground 
DVSS 
B2 G Ground           
B3 G Ground           
B5 G Ground           
B7 G Ground           
B9 G Ground           
B11 G Ground           
B13 G Ground           
B15 G Ground           
B17 G Ground           
B19 G Ground           
B21 G Ground           
B23 G Ground           
B25 G Ground           
B27 G Ground           
B29 G Ground           
B31 G Ground           
B33 G Ground           
C3 G Ground           
C5 G Ground           
C6 G Ground           
C10 G Ground           
C16 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 84

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 84 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
C18 G Ground           
C20 G Ground           
C25 G Ground           
C26 G Ground           
C32 G Ground           
D4 G Ground           
D6 G Ground           
D16 G Ground           
D19 G Ground           
D21 G Ground           
D25 G Ground           
D31 G Ground           
D33 G Ground           
D34 G Ground           
E2 G Ground           
E3 G Ground           
E4 G Ground           
E5 G Ground           
E7 G Ground           
E10 G Ground           
E13 G Ground           
E14 G Ground           
E23 G Ground           
E24 G Ground           
E25 G Ground           
E27 G Ground           
E28 G Ground           
E29 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 85

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 85 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
E30 G Ground           
E31 G Ground           
E33 G Ground           
F5 G Ground           
F6 G Ground           
F7 G Ground           
F8 G Ground           
F9 G Ground           
F10 G Ground           
F14 G Ground           
F17 G Ground           
F20 G Ground           
F25 G Ground           
F26 G Ground           
F27 G Ground           
F28 G Ground           
F29 G Ground           
F30 G Ground           
F31 G Ground           
F32 G Ground           
F34 G Ground           
G3 G Ground           
G4 G Ground           
G7 G Ground           
G8 G Ground           
G9 G Ground           
G10 G Ground           
G11 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 86

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 86 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
G15 G Ground           
G16 G Ground           
G17 G Ground           
G18 G Ground           
G19 G Ground           
G20 G Ground           
G21 G Ground           
G22 G Ground           
G23 G Ground           
G24 G Ground           
G25 G Ground           
G26 G Ground           
G27 G Ground           
G28 G Ground           
G29 G Ground           
G32 G Ground           
H2 G Ground           
H3 G Ground           
H4 G Ground           
H7 G Ground           
H8 G Ground           
H9 G Ground           
H10 G Ground           
H11 G Ground           
H12 G Ground           
H13 G Ground           
H14 G Ground           
H16 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 87

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 87 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
H17 G Ground           
H18 G Ground           
H19 G Ground           
H20 G Ground           
H21 G Ground           
H22 G Ground           
H24 G Ground           
H25 G Ground           
H26 G Ground           
H29 G Ground           
H30 G Ground           
H31 G Ground           
H32 G Ground           
H33 G Ground           
H34 G Ground           
J3 G Ground           
J4 G Ground           
J5 G Ground           
J6 G Ground           
J7 G Ground           
J8 G Ground           
J9 G Ground           
J10 G Ground           
J11 G Ground           
J22 G Ground           
J25 G Ground           
J28 G Ground           
J29 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 88

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 88 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
J32 G Ground           
K6 G Ground           
K8 G Ground           
K9 G Ground           
K10 G Ground           
K17 G Ground           
K26 G Ground           
K27 G Ground           
K30 G Ground           
K31 G Ground           
K32 G Ground           
L1 G Ground           
L2 G Ground           
L4 G Ground           
L5 G Ground           
L6 G Ground           
L7 G Ground           
L8 G Ground           
L9 G Ground           
L24 G Ground           
L26 G Ground           
L28 G Ground           
L29 G Ground           
L32 G Ground           
M3 G Ground           
M4 G Ground           
M5 G Ground           
M8 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 89

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 89 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
M14 G Ground           
M16 G Ground           
M18 G Ground           
M20 G Ground           
M22 G Ground           
M26 G Ground           
M28 G Ground           
M30 G Ground           
M31 G Ground           
N1 G Ground           
N2 G Ground           
N3 G Ground           
N6 G Ground           
N7 G Ground           
N8 G Ground           
N9 G Ground           
N10 G Ground           
N12 G Ground           
N16 G Ground           
N18 G Ground           
N20 G Ground           
N22 G Ground           
N24 G Ground           
N26 G Ground           
N28 G Ground           
N30 G Ground           
N31 G Ground           
P3 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 90

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 90 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
P4 G Ground           
P5 G Ground           
P6 G Ground           
P9 G Ground           
P10 G Ground           
P16 G Ground           
P18 G Ground           
P22 G Ground           
P26 G Ground           
P27 G Ground           
R7 G Ground           
R8 G Ground           
R14 G Ground           
R16 G Ground           
R22 G Ground           
R26 G Ground           
R28 G Ground           
T1 G Ground           
T9 G Ground           
T13 G Ground           
T14 G Ground           
T16 G Ground           
T22 G Ground           
T24 G Ground           
T30 G Ground           
U2 G Ground           
U3 G Ground           
U7 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 91

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 91 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
U8 G Ground           
U9 G Ground           
U11 G Ground           
U18 G Ground           
U20 G Ground           
U22 G Ground           
U26 G Ground           
U27 G Ground           
U28 G Ground           
U30 G Ground           
V1 G Ground           
V9 G Ground           
V11 G Ground           
V13 G Ground           
V16 G Ground           
V18 G Ground           
V20 G Ground           
V22 G Ground           
V24 G Ground           
V25 G Ground           
V27 G Ground           
V28 G Ground           
V29 G Ground           
V30 G Ground           
W6 G Ground           
W9 G Ground           
W11 G Ground           
W16 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 92

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 92 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
W18 G Ground           
W22 G Ground           
W30 G Ground           
Y4 G Ground           
Y11 G Ground           
Y13 G Ground           
Y18 G Ground           
Y22 G Ground           
Y24 G Ground           
Y26 G Ground           
Y27 G Ground           
Y28 G Ground           
Y30 G Ground           
AA6 G Ground           
AA15 G Ground           
AA17 G Ground           
AA20 G Ground           
AA22 G Ground           
AA26 G Ground           
AA30 G Ground           
AA31 G Ground           
AA32 G Ground           
AA33 G Ground           
AB5 G Ground           
AB6 G Ground           
AB11 G Ground           
AB13 G Ground           
AB15 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 93

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 93 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AB17 G Ground           
AB26 G Ground           
AB27 G Ground           
AB28 G Ground           
AB29 G Ground           
AC1 G Ground           
AC2 G Ground           
AC6 G Ground           
AC15 G Ground           
AC17 G Ground           
AC20 G Ground           
AC22 G Ground           
AC24 G Ground           
AC27 G Ground           
AC29 G Ground           
AD1 G Ground           
AD2 G Ground           
AD3 G Ground           
AD4 G Ground           
AD5 G Ground           
AD11 G Ground           
AD13 G Ground           
AD15 G Ground           
AD17 G Ground           
AD22 G Ground           
AD26 G Ground           
AD27 G Ground           
AD28 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 94

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 94 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AD30 G Ground           
AD31 G Ground           
AD34 G Ground           
AE3 G Ground           
AE4 G Ground           
AE6 G Ground           
AE7 G Ground           
AE9 G Ground           
AE13 G Ground           
AE17 G Ground           
AE20 G Ground           
AE22 G Ground           
AE24 G Ground           
AE27 G Ground           
AE28 G Ground           
AE32 G Ground           
AF1 G Ground           
AF2 G Ground           
AF5 G Ground           
AF6 G Ground           
AF7 G Ground           
AF9 G Ground           
AF11 G Ground           
AF14 G Ground           
AF15 G Ground           
AF17 G Ground           
AF20 G Ground           
AF24 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 95

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 95 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AF26 G Ground           
AF29 G Ground           
AF34 G Ground           
AG4 G Ground           
AG6 G Ground           
AG7 G Ground           
AG9 G Ground           
AG11 G Ground           
AG13 G Ground           
AG15 G Ground           
AG17 G Ground           
AG22 G Ground           
AG26 G Ground           
AG27 G Ground           
AG28 G Ground           
AG29 G Ground           
AG30 G Ground           
AG31 G Ground           
AG32 G Ground           
AG33 G Ground           
AH1 G Ground           
AH4 G Ground           
AH5 G Ground           
AH6 G Ground           
AH7 G Ground           
AH9 G Ground           
AH13 G Ground           
AH15 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 96

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 96 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AH17 G Ground           
AH22 G Ground           
AH24 G Ground           
AH26 G Ground           
AH27 G Ground           
AH28 G Ground           
AH29 G Ground           
AH32 G Ground           
AH33 G Ground           
AJ1 G Ground           
AJ6 G Ground           
AJ7 G Ground           
AJ9 G Ground           
AJ17 G Ground           
AJ20 G Ground           
AJ22 G Ground           
AJ24 G Ground           
AJ26 G Ground           
AJ27 G Ground           
AJ29 G Ground           
AJ30 G Ground           
AJ31 G Ground           
AJ34 G Ground           
AK3 G Ground           
AK6 G Ground           
AK7 G Ground           
AK9 G Ground           
AK11 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 97

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 97 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AK12 G Ground           
AK13 G Ground           
AK14 G Ground           
AK15 G Ground           
AK16 G Ground           
AK17 G Ground           
AK19 G Ground           
AK20 G Ground           
AK21 G Ground           
AK22 G Ground           
AK23 G Ground           
AK24 G Ground           
AK25 G Ground           
AK27 G Ground           
AK28 G Ground           
AK29 G Ground           
AK32 G Ground           
AK33 G Ground           
AL5 G Ground           
AL6 G Ground           
AL7 G Ground           
AL9 G Ground           
AL27 G Ground           
AL28 G Ground           
AL29 G Ground           
AL30 G Ground           
AL31 G Ground           
AL32 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 98

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 98 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AL33 G Ground           
AM1 G Ground           
AM6 G Ground           
AM7 G Ground           
AM28 G Ground           
AM29 G Ground           
AM30 G Ground           
AM31 G Ground           
AM34 G Ground           
AN1 G Ground           
AN2 G Ground           
AN3 G Ground           
AN6 G Ground           
AN29 G Ground           
AN32 G Ground           
AN33 G Ground           
AP4 G Ground           
AP7 G Ground           
AP18 G Ground           
AP19 G Ground           
AP23 G Ground           
AP25 G Ground           
AP30 G Ground           
AP31 G Ground           
AP32 G Ground           
AP34 G Ground           
AR1 G Ground           
AR6 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 99

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 99 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AR7 G Ground           
AR8 G Ground           
AR30 G Ground           
AR31 G Ground           
AR32 G Ground           
AR34 G Ground           
AT4 G Ground           
AT5 G Ground           
AT6 G Ground           
AT32 G Ground           
AT33 G Ground           
Electrostatic discharge (ESD) 
CDM3P5A J33 G Reserved           
CDM5P5A J34 G Reserved           
 
 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 100

Electrical Characteristics 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
 100 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4 Electrical Characteristics 
4.1 Absolute Maximum Ratings 
4.1.1 Free-Air and Storage Thermal Specification 
Table 4-1. Absolute maximum ratings for ambient temperature 
Parameter Min. Max. Unit 
Free-air temperature range -40 85 °C 
Storage temperature range -55 150 °C 
4.1.2 Power Supply 
This section lists the maximum values. Note that the values should not be exceeded. 
Table 4-2. Absolute maximum ratings for power supply 
Ball Name Description Max. Unit 
AVDD15_WBG Analog power 1.65 V 
AVDD12_WBG Analog power 1.32 V 
AVDD12_UFS Analog power 1.32 V 
AVDD15_UFS Analog power 1.65 V 
AVDD12_CKBUF_UFS Analog power 1.32 V 
AVDD12_USB Analog power 1.32 V 
AVDD15_USB Analog power 1.65 V 
AVDD33_USB Analog power 3.21 V 
AVDD15_PROC Analog power 1.65 V 
AVDD12_MCUPLL Analog power 1.32 V 
AVDD15_MCUPLL Analog power 1.65 V 
AVDD12_NPUPLL Analog power 1.32 V 
AVDD15_NPUPLL Analog power 1.65 V 
AVDD12_GPUPLL Analog power 1.32 V 
AVDD15_GPUPLL Analog power 1.65 V 
AVDD12_MDPLL Analog power 1.32 V 
AVDD15_MDPLL Analog power 1.65 V 
AVDD12_PLL Analog power 1.32 V 
AVDD15_PLL Analog power 1.65 V 
AVDD15_CKSQ Analog power 1.65 V 
AVDD12_CKSQ Analog power 1.32 V 
AVDD12_DRF Analog power 1.32 V 
AVDD15_DRF Analog power 1.65 V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 101

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 101 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name Description Max. Unit 
AVDD12_CSI Analog power 1.32 V 
AVDD08_DRV_DSI Analog power 0.88 V 
AVDD12_DSI Analog power 1.32 V 
AVDD15_DSI Analog power 1.65 V 
AVDD12_SSUSB_P1 Analog power 1.32 V 
AVDD15_SSUSB_P1 Analog power 1.65 V 
AVDD12_PCIE Analog power 1.32 V 
AVDD15_PCIE Analog power 1.65 V 
AVDD12_EMI Analog DDRPHY power 1.26 V 
AVDD15_EMI Analog DDRPHY power 1.65 V 
AVDDQ_EMI0/1 Analog DDRPHY power 0.63 V 
AVDD075_EMI0/1 Analog DDRPHY power 0.89 V 
DVDD18_IOLM Digital I/O power 1.98 V 
DVDD18_IORT Digital I/O power 1.98 V 
DVDD18_IOBM Digital I/O power 1.98 V 
DVDD18_IORB Digital I/O power 1.98 V 
DVDD12_IOBM_MIPI Digital I/O power 1.28 V 
DVDD18_IOBM_MIPI Digital I/O power 1.9 V 
DVDD12_IORT_HS Digital I/O power 1.28 V 
DVDD18_IORT_HS Digital I/O power 1.9 V 
DVDD15_MSDC1 Digital I/O power 1.28 V 
DVDD28_MSDC1 Digital I/O power 1.9 V 
DVDD15_SIM Digital I/O power 1.6 V 
DVDD28_SIM1 Digital I/O power 3.15 V 
DVDD28_SIM2 Digital I/O power 3.15 V 
DVDD12_ESIM Digital I/O power 1.28 V 
DVDD18_ESIM Digital I/O power 1.9 V 
DVDD18_VQPS Digital power 1.98 V 
DVDD_PROC_L Digital power 0.9 V 
DVDD_PROC_B Digital power 1.05 V 
DVDD_SRAM_PROC_L Digital power 0.9 V 
DVDD_SRAM_PROC_B Digital power 1.05 V 
DVDD_NPU Digital power 0.85 V 
DVDD_SRAM_NPU Digital power 0.85 V 
DVDD_GPUSTACK Digital power 0.85 V 
DVDD_SRAM_GPUSTACK Digital power 0.85 V 
DVDD_MM Digital power 0.7 V 
DVDD_SRAM_MM Digital power 0.75 V 
DVDD_MODEM Digital power 0.825 V 
DVDD_SRAM_MODEM Digital power 0.825 V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 102

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 102 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name Description Max. Unit 
DVDD_SRAM_CORE Digital power 0.825 V 
DVDD_CORE Digital power 0.825 V 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 103

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 103 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.2 Recommended Operating Conditions 
This section lists the recommended conditions for device operations. 
 
4.2.1 Thermal Operating Specification 
Table 4-3. Thermal operating specification 
Symbol Description Min. Max. 1 Unit 
Tambient 
Tjunction Operating junction temperature Tambient = -40 Tjunction = 125 °C 
(1) Full electrical specifications are guaranteed only up to 105°C junction temperature. 
 
4.2.2 Power Supply 
Table 4-4. Recommended operating conditions for power supply 
 
Ball Name Description Min. Typ. Max. Unit 
AVDD08_DRV_DSI Analog power 0.7125 0.75 0.84 V 
AVDD12_WBG Analog power 1.14 1.2 1.26 V 
AVDD12_UFS Analog power 1.14 1.2 1.26 V 
AVDD12_USB Analog power 1.14 1.2 1.26 V 
AVDD12_CKBUF_UFS Analog power 1.14 1.2 1.26 V 
AVDD12_CKSQ Analog power 1.14 1.2 1.26 V 
AVDD12_DRF Analog power 1.14 1.2 1.26 V 
AVDD12_CSI Analog power 1.14 1.2 1.26 V 
AVDD12_DSI Analog power 1.14 1.2 1.26 V 
AVDD12_MCUPLL Analog power 1.14 1.2 1.26 V 
AVDD12_NPUPLL Analog power 1.14 1.2 1.26 V 
AVDD12_GPUPLL Analog power 1.14 1.2 1.26 V 
AVDD12_MDPLL Analog power 1.14 1.2 1.26 V 
AVDD12_PLL Analog power 1.14 1.2 1.26 V 
AVDD12_SSUSB_P1 Analog power 1.14 1.2 1.26 V 
AVDD12_PCIE Analog power 1.14 1.2 1.26 V 
AVDD15_UFS Analog power 1.425 1.5 1.575 V 
AVDD15_WBG Analog power 1.425 1.5 1.575 V 
AVDD15_USB Analog power 1.425 1.5 1.575 V 
AVDD15_DSI Analog power 1.425 1.5 1.575 V 
AVDD15_CKSQ Analog power 1.425 1.5 1.575 V 
AVDD15_DRF Analog power 1.425 1.5 1.575 V 
AVDD15_SSUSB_P1 Analog power 1.425 1.5 1.575 V 
AVDD15_PCIE Analog power 1.425 1.5 1.575 V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 104

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 104 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name Description Min. Typ. Max. Unit 
AVDD15_MCUPLL Analog power 1.425 1.5 1.575 V 
AVDD15_NPUPLL Analog power 1.425 1.5 1.575 V 
AVDD15_GPUPLL Analog power 1.425 1.5 1.575 V 
AVDD15_MDPLL Analog power 1.425 1.5 1.575 V 
AVDD15_PROC Analog power 1.425 1.5 1.575 V 
AVDD15_PLL Analog power 1.425 1.5 1.575 V 
AVDD33_USB Analog power 2.85 3 3.15 V 
AVDDQ_EMI0/1 Analog DDRPHY power 0.57 0.6 0.63 V 
AVDD075_EMI0/1 Analog DDRPHY power 0.55 0.75 0.7875 V 
AVDD12_EMI Analog DDRPHY power 1.14 1.2 1.26 V 
AVDD15_EMI Analog DDRPHY power 1.425 1.5 1.575 V 
DVDD_PROC_L Digital power 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
0.495 0.55 0.605 V 
DVDD_PROC_B Digital power 
0.945 1.05 1.155 V 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
0.495 0.55 0.605 V 
DVDD_SRAM_PROC_L Digital power 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
DVDD_SRAM_PROC_B Digital power 
0.945 1.05 1.155 V 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
DVDD_NPU Digital power 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
0.585 0.65 0.715 V 
0.495 0.55 0.605 V 
DVDD_SRAM_NPU Digital power 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
DVDD_GPUSTACK Digital power 
0.765 0.85 0.935 V 
0.608 0.675 0.743 V 
0.495 0.55 0.605 V 
DVDD_SRAM_GPUSTACK Digital power 
0.765 0.85 0.935 V 
0.675 0.75 0.825 V 
DVDD_MM Digital power 
0.63 0.7 0.77 V 
0.585 0.65 0.715 V 
0.54 0.6 0.66 V 
0.518 0.575 0.632 V 
DVDD_SRAM_MM Digital power 0.675 0.75 0.825 V 
DVDD_MODEM Digital power 0.72 0.8 0.88 V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 105

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 105 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name Description Min. Typ. Max. Unit 
0.675 0.75 0.825 V 
0.608 0.675 0.742 V 
0.563 0.625 0.687 V 
0.518 0.575 0.632 V 
0.495 0.55 0.605 V 
DVDD_SRAM_MODEM Digital power 
0.72 0.8 0.88 V 
0.675 0.75 0.825 V 
0.495 0.55 0.605 V 
DVDD_SRAM_CORE Digital power 
0.743 0.825 0.907 V 
0.675 0.75 0.825 V 
0.495 0.55 0.605 V 
DVDD_CORE Digital power 
0.743 0.825 0.907 V 
0.653 0.725 0.797 V 
0.585 0.65 0.715 V 
0.54 0.6 0.66 V 
0.518 0.575 0.632 V 
0.495 0.55 0.605 V 
DVDD18_VQPS Digital power 1.62 1.8 1.98 V 
DVDD18_IOLM Digital I/O power 1.62 1.8 1.98 V 
DVDD18_IORT Digital I/O power 1.62 1.8 1.98 V 
DVDD18_IOBM Digital I/O power 1.62 1.8 1.98 V 
DVDD18_IORB Digital I/O power 1.62 1.8 1.98 V 
DVDD12_IOBM_MIPI Digital I/O power 1.12 1.2 1.28 V 
DVDD18_IOBM_MIPI Digital I/O power 1.7 1.8 1.9 V 
DVDD12_IORT_HS Digital I/O power 1.12 1.2 1.28 V 
DVDD18_IORT_HS Digital I/O power 1.7 1.8 1.9 V 
DVDD15_MSDC1 Digital I/O power 1.12 1.2 1.28 V 
DVDD28_MSDC1 Digital I/O power 1.7 1.8 1.9 V 
DVDD15_SIM Digital I/O power 1.4 1.5 1.6 V 
DVDD28_SIM1 Digital I/O power 2.7 3 3.15 V 
DVDD28_SIM2 Digital I/O power 2.7 3 3.15 V 
DVDD12_ESIM Digital I/O power 1.12 1.2 1.28 V 
DVDD18_ESIM Digital I/O power 1.7 1.8 1.9 V 
 
 
4.3 DC Electrical Characteristics 
This section provides DC parameters of the device. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 106

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 106 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.3.1 X32K_IN DC Electrical Characteristics 
Table 4-5. X32K_IN DC electrical characteristics (DVDD18_IOBM = 1.8V) 
Parameter Description Min. Typ. Max. Unit 
VIH High-level input voltage 0.65*DVDD18_IOBM - DVDD18_IOBM + 0.3 V 
VIL Low-level input voltage -0.3 - 0.35*DVDD18_IOBM V 
VOH High-level output voltage 0.75*DVDD18_IOBM - - V 
VOL Low-level output voltage - - 0.25*DVDD18_IOBM V 
Fx32k_in Input clock frequency - 32 - kHz 
DCx32k_in Input signal duty cycle 45 50 55 % 
 
4.3.2 SPI DC Electrical Characteristics 
Table 4-6. SPI DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) 
Parameter Description Min. Typ. Max. Unit 
VIH High-level input voltage 0.65* DVDD18_IOxx_xx - DVDD18_IOxx_xx + 0.3 V 
VIL Low-level input voltage -0.3 - 0.35* DVDD18_IOxx_xx V 
VOH High-level output voltage 0.75* DVDD18_IOxx_xx - - V 
VOL Low-level output voltage - - 0.25* DVDD18_IOxx_xx V 
 
4.3.3 I2S DC Electrical Characteristics 
Table 4-7. I2S DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) 
Parameter Description Min. Typ. Max. Unit 
VIH High-level input voltage 0.65* DVDD18_IOxx_xx - DVDD18_IOxx_xx + 0.3 V 
VIL Low-level input voltage -0.3 - 0.35* DVDD18_IOxx_xx V 
VOH High-level output voltage 0.75* DVDD18_IOxx_xx - - V 
VOL Low-level output voltage - - 0.2* DVDD18_IOxx_xx V 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 107

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 107 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.3.4 I2C/I3C DC Electrical Characteristics 
Table 4-8. I2C/I3C DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) 
Parameter Description Min. Typ. Max. Unit 
VIH High-level input voltage 0.65* DVDD18_IOxx_xx - DVDD18_IOxx_xx + 0.3 V 
VIL Low-level input voltage -0.3 - 0.35* DVDD18_IOxx_xx  V 
VOL Low-level output voltage - - 0.2* DVDD18_IOxx_xx V 
4.3.5 MSDC DC Electrical Characteristics 
Table 4-9. MSDC1 DC electrical characteristics (DVDD28_MSDC1 = 3V) 
Parameter Description Min. Typ. Max. Unit 
VIH Input logic high voltage 0.625* DVDD28_MSDC1 - DVDD28_MSDC1+0.3 V 
VIL Input logic low voltage -0.3 - 0.25* DVDD28_MSDC1 V 
VOH DC output logic high voltage 0.75* DVDD28_MSDC1 - DVDD28_MSDC1+0.3 V 
VOL DC output logic low voltage -0.3 - 0.125* DVDD28_MSDC1 V 
Table 4-10. MSDC1 DC electrical characteristics (DVDD28_MSDC1 = 1.8V) 
Parameter Description Min. Typ. Max. Unit 
VIH Input logic high voltage 0.7* DVDD28_MSDC1 - DVDD28_MSDC1+0.3 V 
VIL Input logic low voltage -0.3 - 0.3* DVDD28_MSDC1 V 
VOH DC output logic high voltage 1.4 - DVDD28_MSDC1+0.3 V 
VOL DC output logic low voltage -0.3 - 0.45 V 
4.3.6 SIM DC Electrical Characteristics 
Table 4-11. SIM DC electrical characteristics 
Parameter Condition Symbol Min. Typ. Max. Unit 
SIM1_SIO 
High-level input voltage 
DVDD28_SIM1 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output 
voltage Voh 1.53 1.8 N/A V 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM1 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output 
voltage Voh 2.55 3.0 N/A V 
Low-level output voltage Vol N/A 0.0 0.45 V 
SIM1_SCLK 
High-level input voltage 
DVDD28_SIM1 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output 
voltage Voh 1.53 1.8 N/A V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 108

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 108 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Parameter Condition Symbol Min. Typ. Max. Unit 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM1 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output voltage Voh 2.55 3.0 N/A V 
Low-level output voltage Vol N/A 0.0 0.45 V 
SIM1_SRST 
High-level input voltage 
DVDD28_SIM1 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output voltage Voh 1.53 1.8 N/A V 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM1 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output voltage Voh 2.55 3.0 N/A V 
Low-level output voltage Vol N/A 0.0 0.45 V 
SIM2_SIO 
High-level input voltage 
DVDD28_SIM2 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output voltage Voh 1.53 1.8 N/A V 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM2 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output voltage Voh 2.55 3.0 N/A V 
Low-level output voltage Vol N/A 0.0 0.45 V 
SIM2_SCLK 
High-level input voltage 
DVDD28_SIM2 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output voltage Voh 1.53 1.8 N/A V 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM2 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output voltage Voh 2.55 3.0 N/A V 
Low-level output voltage Vol N/A 0.0 0.45 V 
SIM2_SRST 
High-level input voltage 
DVDD28_SIM2 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output voltage Voh 1.53 1.8 N/A V 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM2 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output voltage Voh 2.55 3.0 N/A V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 109

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 109 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Parameter Condition Symbol Min. Typ. Max. Unit 
Low-level output voltage Vol N/A 0.0 0.45 V 
 
4.4 AC Electrical Characteristics and Timing Diagrams 
4.4.1 External Memory Interface for LPDDR5 
 
Figure 4-1. LPDDR5 WCK VIX definition 
 
 
Figure 4-2. LPDDR5 single-ended output slew-rate definition 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 110

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 110 
Confidential B 
MT8668 Application Processor 
Technical Brief 
 
Figure 4-3. LPDDR5 differential output slew-rate definition 
 
Figure 4-4. LPDDR5 RX mask 
 
Table 4-12. LPDDR5 AC timing parameter table of external memory interface 
Symbol Description Min. Typ. Max. Unit 
Vix_WCK_ratio WCK differential input crosspoint voltage ratio - - 20 % 
Vix_CK_ratio CK differential input crosspoint voltage ratio - - 25 % 
vDIVW DQ RX mask height - - 100 mV 
tDIVW1 DQ RX mask width - - 0.35 UI 
tDIVW2 DQ RX mask width at vDIVW - - 0.18 UI 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 111

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 111 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.4.2 SPI AC Timing Characteristics 
CSB
SCK
MOSI
MISO
tCS_SU tCS_HD
tMOSI_SU
tSCKH
tSCKL
tMOSI_HD
tMISO_REQ
 
Figure 4-5. SPI timing diagram 
 
Table 4-13. SPI AC timing parameters 
Symbol Description 
Performance 
Unit 
Min. Typ. Max. 
fSCK SPI master SCK clock frequency - - 52 MHz 
tMOSI_SU MOSI to SCK rising setup time 6 - - ns 
tMOSI_HD SCK rising to MOSI hold time 6 - - ns 
tSCKL SCK low pulse 7.2 - - ns 
tSCKH SCK high pulse 7.2 - - ns 
tCSB_SU CSB falling to SCK rising setup time 1.8 - - ns 
tCSB_HD SCK falling to CSB rising hold time 1.8 - - ns 
tMISO_REQ SCK falling to MISO change time requirement 0 - 10 ns 
Note: 
 In the CS GPIO mode, SPI_CS is handled by the software. 
‒ The software should pull down the SPI_CS pin before the SPI starts transferring. 
‒ The software should pull up the SPI_CS pin when the SPI completes the transaction. 
Based on the sequence above, the minimum specification of tCSB_SU and tCSB_HD time can be satisfied. 
 To achieve the max. frequency of SCK, the internal sample clock delay of the SPI master should be adjusted. 
 MISO data valid time should be one cycle of fSCK. 
 For dual mode, all the output data pins can refer to the MOSI timing parameters, and all the input data pins can refer to the MISO 
timing parameters. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 112

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 112 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.4.3 I2S AC Timing Characteristics 
 
Figure 4-6. I2S master mode timing diagram 
 
Table 4-14. I2S AC timing parameters 
Parameter Description Min. Typ. Max. Unit 
fS Sampling frequency 8 - 192 kHz 
tWS Word select period 32 - 64 1/fBCK 
fMCK Master clock frequency - - 24.576 MHz 
fBCK Serial clock frequency 32*fS - 64*fS MHz 
tBCK_H BCK high-level time - 0.5 - 1/fBCK 
tBCK_L BCK low-level time - 0.5 - 1/fBCK 
tV_WS WS valid time - - 0.2 1/fBCK 
tH_WS WS hold time 0 - - 1/fBCK 
tV_DO DO valid time - - 0.2 1/fBCK 
tH_DO DO hold time 0 - - 1/fBCK 
tS_DI DI setup time 0.2 - - 1/fBCK 
tH_DI DI hold time 0.2 - - 1/fBCK 
 
BCK
WS
DO
DI
tBCK_LtBCK_HtV_WS
tV_DO
tH_DO
tS_DI tH_DI
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 113

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 113 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.4.4 I2C AC Timing Characteristics 
 
Figure 4-7. I2C AC timing diagram of F/S mode 
 
Table 4-15. I2C AC timing parameters for standard, fast, and fast mode plus 
Symbol Parameter 
Standard Mode Fast Mode Fast Mode Plus 
Unit Remark 
Min. Max. Min. Max. Min. Max. 
fSCL Serial clock line (SCL) clock 
frequency 0 100 0 400 0 1,000 kHz - 
tHD;STA 
Hold time (repeated) 
START condition 4.0  - 0.6 - 0.26 - µs - 
tLOW 
LOW period of the SCL 
clock 4.7 - 1.3 - 0.5 - µs - 
tHIGH 
HIGH period of the SCL 
clock 4.0  - 0.6 - 0.26 - µs - 
tSU;STA 
Set-up time for a repeated 
START condition 4.7 - 0.6 - 0.26 - µs - 
tHD;DAT Data hold time 5.0 - 0 - 0 - µs I2C-bus 
devices 
tSU;DAT Data set-up time 250 - 100 - 50 - ns - 
tr 
Rise time of both SDA and 
SCL signals - 1,000 20 300 - 120 ns - 
tf 
Fall time of both SDA and 
SCL signals - 300 20x 
(VDD/5.5V) 300 20x 
(VDD/5.5V) 120 ns 
VDD is 
I2C I/O 
voltage. 
tSU;STO 
Set-up time for STOP 
condition 4.0  - 0.6 - 0.26 - ns - 
tVD;DAT Data valid time - 3.45 - 0.9 - 0.45 µs - 
tVD;ACK 
Data valid acknowledge 
time - 3.45 - 0.9 - 0.45 µs - 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 114

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 114 
Confidential B 
MT8668 Application Processor 
Technical Brief 
 
Figure 4-8. I2C AC timing diagram of HS mode 
 
Table 4-16. I2C AC timing parameters for HS mode 
Symbol Parameter 
Cb = 100 pF (max.) Cb = 400 pF 
Unit Note 
Min. Max. Min. Max. 
fSCL SCL clock frequency 0 3.4 0 1.7 MHz - 
tSU;STA 
Set-up time (repeated) START 
condition 160  - 160 - ns - 
tHD;STA 
Hold time (repeated) START 
condition 160  - 160 - ns - 
tLOW LOW period of the SCL clock 160 - 320 - ns - 
tHIGH HIGH period of the SCL clock 60 - 120 - ns - 
tHD;DAT Data hold time 0 70 0 150 ns I2C-bus 
devices 
tSU;DAT Data set-up time 10 - 10 - ns - 
tr Rise time of SCLH signal 10 40 20 80 ns - 
tf Fall time of SCLH signal 10 40 20 80 ns  
tSU;STO Set-up time for STOP condition 160 - 160 - ns - 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 115

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 115 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.4.5 MSDC AC Timing Characteristics 
4.4.5.1 Default Speed Timing 
 
Figure 4-9. MSDC device input timing diagram of default speed 
 
 
Figure 4-10. MSDC device input timing diagram of default speed 
 
Table 4-17. MSDC device AC timing parameters of default speed 
Parameter Symbol Min. Max. Unit 
Clock CLK (All values are referred to min. (VIH) and max. (VIL).) 
Clock frequency data transfer mode fPP 0 25 MHz 
Clock frequency identification mode fOD 0/100 400 kHz 
Clock low time tWL 10 - ns 
Clock high time tWH 10 - ns 
Clock rise time tTLH - 10 ns 
Clock fall time tTHL - 10 ns 
Input CMD, DAT (referenced to CLK) 
Input setup time TISU 5 - ns 
Input hold time TIH 5 - ns 
Output CMD, DAT (referenced to CLK) 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 116

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 116 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Parameter Symbol Min. Max. Unit 
Output delay time during data transfer 
mode  TODLY 0 14 ns 
Output delay time during identification 
mode  TODLY 0 50 ns 
 
4.4.5.2 High Speed Timing 
 
Figure 4-11. MSDC device input timing diagram of high speed 
 
 
Figure 4-12. MSDC device output timing diagram of high speed 
 
Table 4-18. MSDC device AC timing parameters of high speed 
Parameter Symbol Min. Max. Unit 
Clock CLK (All values are referred to min. (VIH) and max. (VIL).) 
Clock frequency data transfer mode fPP 0 50 MHz 
Clock low time tWL 7 - ns 
CLK high time tWH 7 - ns 
CLK rise time tTLH - 3 ns 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 117

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 117 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Parameter Symbol Min. Max. Unit 
CLK fall time tTHL - 3 ns 
Input CMD, DAT (referenced to CLK) 
Input setup time tISU 6 - ns 
Input hold time tIH 2 - ns 
Output CMD, DAT (referenced to CLK) 
Output delay time during data transfer 
mode tODLY  - 14 ns 
Output hold time tOH 2.5 - ns 
Total system capacitance for each line CL - 40 pF 
 
4.4.5.3 SDR12/SDR25/SDR50/SDR104 Mode Timing 
 
Figure 4-13. MSDC device clock timing diagram of SDR12/SDR25/SDR50/SDR104 mode  
 
 
Figure 4-14. MSDC device input timing diagram of SDR50/SDR104 mode 
 
 
Figure 4-15. MSDC device output timing diagram of fixed data window (SDR12/SDR25/SDR50) 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 118

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 118 
Confidential B 
MT8668 Application Processor 
Technical Brief 
 
Figure 4-16. MSDC device output timing diagram of variable window (SDR104) 
 
Table 4-19. MSDC device AC timing parameters of SDR12/SDR25/SDR50/SDR104 mode 
Symbol Min. Max. Unit Remark 
Clock CLK 
tCLK  4.8 - ns  208 MHz (max.), between rising edges, VCT = 0.975V 
tCR, tCF  - 0.2*tCLK  ns 
tCR, tCF < 0.96 ns (max.) at 208 MHz, CCARD = 10 pF 
tCR, tCF < 2.00 ns (max.) at 100 MHz, CCARD = 10 pF 
The absolute maximum value of tCR, tCF is 10 ns 
regardless of clock frequency. 
Clock duty  30 70 % - 
Input CMD, DAT (SDR104) 
tIS 1.40 - ns CCARD = 10 pF, VCT = 0.975V 
tIH 0.80 - ns CCARD = 5 pF, VCT = 0.975V 
Input CMD, DAT (SDR50) 
tIS 3.00 - ns CCARD = 10 pF, VCT = 0.975V 
tIH 0.80 - ns CCARD = 5 pF, VCT = 0.975V 
Output CMD, DAT (SDR12/SDR25/SDR50) 
tODLY - 7.5 ns tCLK ≥ 10.0 ns, CL= 30 pF, using driver type B, for 
SDR50 
tODLY - 14 ns tCLK ≥ 20.0 ns, CL= 40 pF, using driver type B, for 
SDR25 and SDR12 
TOH 1.5 - ns Hold time at the tODLY (min.), CL= 15 pF 
Output CMD, DAT (SDR104) 
tOP 0 2 UI Card output phase 
ΔtOP -350 +1,550 ps Delay variation due to temperature change after 
tuning. 
tODW 0.6 - UI tODW = 2.88 ns at 208 MHz 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 119

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 119 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.4.5.4 DDR50 Speed Mode Timing 
 
Figure 4-17. MSDC device clock timing diagram of DDR50 speed mode 
 
 
Figure 4-18. MSDC device input/output timing diagram of DDR50 speed mode 
 
Table 4-20. MSDC device AC timing parameters of DDR50 speed mode  
Parameter Symbol Min. Max. Unit 
Clock CLK  
Clock period tCLK 20 - ns 
Clock rise time 
Clock fall time 
tCR, tCF - 0.2*tCLK ns 
Clock duty - 45 55 % 
Input CMD (referenced to CLK rising edge) 
Input setup time tISU 6 - ns 
Input hold time tIH 0.8 - ns 
Output CMD (referenced to CLK rising edge) 
Output delay time during data transfer mode tODLY - 13.7 ns 
Output hold time tOH 1.5 - ns 
Input DAT (referenced to CLK rising and falling edges) 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 120

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 120 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Parameter Symbol Min. Max. Unit 
Input setup time tISU2x 3 - ns 
Input hold time tIH2x 0.8 - ns 
Output DAT (referenced to CLK rising and falling edges) 
Output delay time during data transfer mode tODLY2x - 7.0 ns 
Output hold time tOH2x 1.5 - ns 
 
4.4.6 SIM AC Timing Characteristics 
Table 4-21. SIM AC timing parameters 
Parameter Condition Symbol Min. Typ. Max. Unit 
SIM1_SCLK 
Rise and fall time 
DVDD28_SIM1 = 1.8V 
Trise_fall N/A 50 50 ns 
Clock duty Duty 47 50 53 % 
Rise and fall time 
DVDD28_SIM1 = 3.0V 
Trise_fall N/A 18 18 ns 
Clock duty Duty 47 50 53 % 
SIM1_SIO 
Rise and fall time DVDD28_SIM1 = 1.8V Trise_fall N/A 50 1,000 ns 
Rise and fall time DVDD28_SIM1 = 3.0V Trise_fall N/A 18 1,000 ns 
SIM1_SRST 
Rise and fall time DVDD28_SIM1 = 1.8V Trise_fall N/A 50 1,000 ns 
Rise and fall time DVDD28_SIM1 = 3.0V Trise_fall N/A 18 1,000 ns 
SIM2_SCLK 
Rise and fall time 
DVDD28_SIM2 = 1.8V 
Trise_fall N/A 50 50 ns 
Clock duty Duty 47 50 53 % 
Rise and fall time 
DVDD28_SIM2 = 3.0V 
Trise_fall N/A 18 18 ns 
Clock duty Duty 47 50 53 % 
SIM2_SIO 
Rise and fall time DVDD28_SIM2 = 1.8V Trise_fall N/A 50 1,000 ns 
Rise and fall time DVDD28_SIM2 = 3.0V Trise_fall N/A 18 1,000 ns 
SIM2_SRST 
Rise and fall time DVDD28_SIM2 = 1.8V Trise_fall N/A 50 1,000 ns 
Rise and fall time DVDD28_SIM2 = 3.0V Trise_fall N/A 18 1,000 ns 
 
4.5 Clock Characteristics 
The clock squarer is designed to receive clock signal from pin “X26M_IN” and distribute it to the chip internally. 
See Table 4-22 for the functional specifications of clock squarer of pin “X26M_IN”. 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 121

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 121 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Table 4-22. Clock squarer specifications 
Symbol Parameter Min. Typ. Max. Unit 
Vin Input signal amplitude 1,000 1,200 1,250 mVpp 
DcycIN Input signal duty cycle - 50  % 
DcycOUT Output signal duty cycle DcycIN - 5 - DcycIN + 5 % 
 Maximum positive overshoot - - 1.3 V 
 Minimum negative overshoot -0.1 - - V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 122

Power On Sequence 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 122 
Confidential B 
MT8668 Application Processor 
Technical Brief 
5 Power On Sequence 
The power on sequence described in this chapter is the power predesigned to operate with other different MediaTek 
chipsets. For details, refer to the following power management IC (PMIC) documents.  
 
• MT6363 PMIC Design Notice for MT8668 
• MT6373 PMIC Design Notice for MT8668 
 
Furthermore, for the power on sequence allowing user-control, refer to MT8668 Application Processor Datasheet. 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 123

Boot Mode Configuration 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 123 
Confidential B 
MT8668 Application Processor 
Technical Brief 
6 Boot Mode Configuration 
Boot mode configuration refers to the process of specifying the manner in which a device starts up, accesses system 
resources and launches the operating system. There are several mode choices to determine the method with which the 
system locates, loads and executes the boot loader.  
 
6.1 Mode Selection 
Table 6-1. MT8668 mode selection 
Pin Name Description Parameter 
KPCOL0 Force download mode  0: Force USB download mode in bootrom 
1: Disable (default) 
[0] SCP_VREQ_VAO 
[1] AUD_SYNC_MOSI 
JTAG mode 00: AP MCU JTAG (default) 
01: AP MCU JTAG + IO JTAG + DAP JTAG  
10: AP MCU JTAG + IO JTAG  
11: AP MCU JTAG + WCN JTAG  
[0] AUD_DAT_MOSI0 
[1] AUD_DAT_MOSI1 
[2] AUD_DAT_MOSI2 
[3] EINT_CHG_IRQB 
DDR selection mode  
0010: LP5 MCP 
0011: LP5 discrete (default) 
 
6.2 Constant Tie Pins 
Table 6-2. MT8668 constant tie pin 
Pin Name Description 
TESTMODE Test mode (tied to GND) 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 124

Package Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 124 
Confidential B 
MT8668 Application Processor 
Technical Brief 
7 Package Information 
7.1 Top Marking 
 
Figure 7-1. MT8668 top marking 
 
7.2 Ordering Information 
Table 7-1. MT8668 ordering information 
Order# Marking Temperature Range (1) Package 
MT8668 See Section 7.1. -40°C ~ 85°C TFBGA 
(1) The temperature range refers to the IC ambient temperatures. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 125

Package Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 125 
Confidential B 
MT8668 Application Processor 
Technical Brief 
7.3 Package Outlines 
 
 
 
Figure 7-2. Outlines and dimensions of TFBGA 12.05 mm x 13.1 mm, 1084-ball, 0.35 mm pitch package 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 126

Reference 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 126 
Confidential B 
MT8668 Application Processor 
Technical Brief 
8 Reference  
8.1 Reference Documents 
 
Module Reference 
Power on sequence 
PMIC 
MT6363_Design_Notice_for_MT8668 
MT6373_Design_Notice_for_MT8668 
 
8.2 MT8668 Companion Chips 
The capabilities of the companion chips listed below are for reference only. For the exact details and operating conditions, 
please refer to the corresponding datasheet or design document in accordance with the part name. 
 
Table 8-1. MT8668 companion chips 
Part 
Name Category Description Reference Document 
MT6373 2nd PMIC • Input range: 2.6V ~ 5.0V 
• 10 buck converters and 25 LDOs optimized for 
specific subsystems  
• SPMI interface 
• Over-current and thermal overload protection 
• Programmable under voltage lockout 
protection 
• Watchdog reset 
• Flexibility hardware PMIC reset function 
• Power-on reset and start-up timer 
• Storage card plug-out protection  
• 166-pin WFBGA package 
MT6373_PMIC_Datasheet 
MT6197 RF TX/RX • Full multi-mode RF solution 
(GGE/C2K/WCDMA/LTE/NR SA/NR NSA)  
‒ Multi-band NR 
sub6G/LTE/WCDMA/C2K/GCE 
‒ 256QAM UL/256QAM DL (HSPA+/LTE) 
‒ C2K/2G/3G/4G/5G co-banding 
‒ Supports RxD. 
• Direct conversion transmitter (NR/LTE/3G/8-
PSK) and DFM for 2G GMSK  
‒ Dedicated power detection circuits for 
power control over specific power range 
‒ 3 LMHB + 1 CB (NR-U) + 2 all-band TX0 
output ports 
‒ 3 LMHB + 1 CB (NR-U) +2 all-band TX1 
output ports 
‒ TX0 and TX1 can be configured as 
CA/ENDC or 2x2 MIMO. 
MT6197_RF_datasheet_1p4_Release 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 127

Reference 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 127 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Part 
Name Category Description Reference Document 
• Hybrid direct-conversion 
(5G/4G/3G/C2K)/Low-IF (GGE, DC-HSDPA) 
receiver 
‒ 20 RX input ports 
‒ Digital output interface 
• External LNA at RxP and RxD are required. 
• Supports 2G DRX & 3G/4G/5G TDD SAWless 
RX. 
• Low supply current and operation directly 
from DC-DC converters 
• Supports RF calibration features for key RX 
and TX specifications (image rejection, LO 
feed-through, IIP2, DC offset, RC corner). 
• Temperature measurement subsystem 
• LTE carrier aggregation 
‒ Supports 2UL + 3DL inter-band CA. 
‒ Max. CCA BW up to 100 MHz 
• Supports RX 4x4 MIMO for LB/MHB/CB 
including n46 and n96. 
• Supports TX 2x2 MIMO for LMHB and CB (NR-
U). 
• NR carrier aggregation 
‒ Supports 2UL + 2DL inter-band CA. 
‒ Max. CCA BW up to 200 MHz 
• LTE + NR dual connectivity support 2UL + 3DL 
inter-band ENDC. 
• Supports NSA/SA+LTE DR-DSDS. 
• Supports power Class 2 high-power UE (HPUE) 
in HB/CB. 
MT6685 CLK IC • Handles 5G-module baseband clock IC 
• Input range: 2.6V ~ 5V 
• 9 clock buffers and 4 input channels for ADC 
optimized for specific 5G-module subsystems 
• 32K-crystal-less RTC oscillator for system 
timing, 1.8V clock buffer output 
• SPMI interface 
• Programmable under voltage lockout 
protection 
• Watchdog reset 
• Flexibility hardware clock IC reset function 
• Power-on reset and start-up timer 
• 42-pin WFBGA package 
MT6685_DCXO_Datasheet 
 
MT6363 Main PMIC • 10 buck converters and 26 LDOs 
• SPMI interface 
• Over-current and thermal overload protection 
• Programmable under voltage lockout 
protection 
• Watchdog reset 
• Flexibility hardware PMIC reset function 
• Power-on reset and start-up timer 
• Storage card plug-out protection  
MT6363_PMIC_Datasheet 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 128

Reference 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 128 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Part 
Name Category Description Reference Document 
• 167-pin WFBGA package 
MT6637W CONSYS RF • MT6637X is a 4-in-1 connectivity chip which 
contains two 2.4 GHz Wi-Fi transceiver front-
ends, two 5 GHz or 6 GHz Wi-Fi transceiver 
front-ends, a Bluetooth transceiver front-end, 
a GPS L1-band receiver front-end, a GPS L5-
band receiver front-end and a complete FM 
receiver in a WFBGA package.  
• Supports tri-band 2.4 GHz/5 GHz/6 GHz. 
• Supports worldwide Wi-Fi 5G/6G channel, and 
Bluetooth FDD operation. 
• Supports 1*1 Wi-Fi 5/6 GHz and Wi-Fi 2.4 GHz 
dual-band dual-concurrency. 
• Supports external PA and LNA for Wi-Fi-2.4 
GHz and Wi-Fi-5 GHz/6 GHz. 
• RF supports simultaneous dual-band L1 and L5 
operation. 
• The system feature depends on companion 
modem chip’s capability. 
MT6637X_External_DataSheet 
MT6308H PMIC • Buck power stage to provide low-frequency 
power to PA. 
• Class-AB amplifier to provide high-frequency 
modulation of PA supply voltage. 
• Buck and amplifier power combined using ac-
coupling capacitor (external). 
• Linked control system to implement power 
split. 
• Buck regulator to provide optimal power 
supply for class-AB amplifier. 
• APT mode operation in which buck regulator 
produces a constant-voltage output. 
• Ability to transit from envelope tracking (ET) 
mode to average power tracking (APT) mode 
on the fly. 
• Adaptive pass-device sizing to optimize 
efficiency of buck converters. 
• MIPI RFFE serial interface to baseband. 
• -3 dB bandwidth up to 90 MHz. 
• VHFP output voltage up to 507V with 6.0W 
power delivery. 
MT6308H_DataSheet 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 129

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 129 
MT8668 Application Processor 
Technical Brief 
Exhibit 1 Terms and Conditions 
Your access to and use of this document and the information contained herein (collectively this “Document”) is subject to your (including the corporation 
or other legal entity you represent, collectively “You”) acceptance of the terms and conditions set forth below (“T&C”).  By using, accessing or downloading 
this Document, You are accepting the T&C and agree to be bound by the T&C.  If You don’t agree to the T&C, You may not use this Document and shall 
immediately destroy any copy thereof. 
 
This Document contains information that is confidential and proprietary to MediaTek Inc. and/or its affiliates (collectively “MediaTek”) or its licensors and 
is provided solely for Your internal use with MediaTek’s chipset(s) described in this Document and shall not be used for any other purposes (including but 
not limited to identifying or providing evidence to support any potential patent infringement claim against MediaTek or any of MediaTek’s suppliers and/or 
direct or indirect customers).  Unauthorized use or disclosure of the information contained herein is prohibited.  You agree to indemnify MediaTek for any 
loss or damages suffered by MediaTek for Your unauthorized use or disclosure of this Document, in whole or in part. 
 
MediaTek and its licensors retain titles and all ownership rights in and to this Document and no license (express or implied, by estoppels or otherwise) to 
any intellectual propriety rights is granted hereunder.  This Document is subject to change without further notification.   MediaTek does not assume any 
responsibility arising out of or in connection with any use of, or reliance on, this Document, and specifically disclaims any and all liability, including, without 
limitation, consequential or incidental damages. 
 
THIS DOCUMENT AND ANY OTHER MATERIALS OR TECHNICAL SUPPORT PROVIDED BY MEDIATEK IN CONNECTION WITH THIS DOCUMENT, IF ANY, ARE 
PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.   MEDIATEK SPECIFICALLY DISCLAIMS 
ALL WARRANTIES OF MERCHANTABILITY, NON -INFRINGEMENT, FITNESS FOR A PAR TICULAR PURPOSE, COMPLETENESS OR ACCURACY  AND ALL 
WARRANTIES ARISING OUT OF TRADE USAGE OR OUT OF A COURSE OF DEALING OR COURSE OF PERFORMANCE.  MEDIATEK SHALL NOT BE RESPONSIBLE 
FOR ANY MEDIATEK DELIVERABLES MADE TO MEET YOUR SPECIFICATIONS OR TO CONFORM TO A PARTICULAR STANDARD OR OPEN FORUM. 
 
Without limiting the generality of the foregoing, MediaTek makes no warranty, representation or guarantee regarding the suitability of its products for any 
particular purpose, nor does MediaTek assume any liability arising out of the application or use of any product, circuit or software.  You agree that You are 
solely responsible for the designing, validating and testing Your product incorporating MediaTek’s product and ensure such pr oduct meets applicable 
standards and any safety, security or other requirements. 
 
The above T&C and all acts in connection with the T&C or this Document shall be governed, construed and interpreted in accord ance with the laws of 
Taiwan, without giving effect to the principles of conflicts of law. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only


---
# SRC0358 MT8676_Camera_Virtualization 1.pdf

来源：MT8676_Camera_Virtualization 1.pdf

SHA-256：9b642362bbd2557f0d340338244aee32cb583fa83cc3f51de5fa4bc46baee816

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0358.html)

## PDF物理页 1

CONFIDENTIAL A
MT8676 Camera virtualization
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 2

CONFIDENTIAL A
Camera virtualization architecture
Camera Feature Layer
 CameraProvider
 Camera
CameraTurboEngine
Camera Driver
Camera HW
Binder Interface
 RpcCameraProvider
 RpcCamera
Camerahalserver
Binder 
Driver
Gstreamer Framework
mtkcamsrc
Camera Feature Layer
 CameraProvider
 Camera
Android Adaptor Layer
Camera HIDL Interface
Camerahalserver
Camera Native Framework
Camera Java Framework
Camera APP
VSOCK
 VSOCK
Cameraserver
Android Yocto
Userspace
Kernel Android Request/Result
Yocto Request/Result
Merged Request/Result
mtkmdp
 h264enc
 mp4mux
 filesink
h264parse
mtkmdp
 Dms algo
 waylandsink
APP
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 3

CONFIDENTIAL A
3
Process A
EL1: linux
virtio-
vdmabuf
Dmabuf sharing from guest OS to host OS
EL0: Userspace
Host: Yocto Guest: Android
Process B
host-vdmabuf
IOCTL->
Buf-ID
Virtio-queue
export2
dmabuf
fd
CMD_EXPORT2
CMD_RELEASE4
CMD_NEED_VMID
CMD_NEED_VMID
0
Open
file
Buf-ID:release import
Buf-
ID
3
Dmabuf
fd
4
0
Buf-
ID
Buf-
ID
CMD_EXPORT: The PA which
contain the PA list. 
The shared structure size always 
is fixed (0x118Byte)
2
Dmabuf
Heaps
alloc
dmabuf
fd
1
1 Alloc buffer from dmabuf heap
2 Export buffer to host
3 Import buffer in host
4 Release buf
0 Open(dev/virtio-vdmabuf)
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 4

Copyright © MediaTek Inc. All rights reserved.
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM


---
# SRC0359 SWA资料介绍(6_14).pdf

来源：SWA资料介绍(6_14).pdf

SHA-256：6ea29dea196358742cc3a44e699c43da9cabc1fe0d5935575770fec6251feaf8

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0359.html)

## PDF物理页 1

PVT版权，未经授权，严禁使用
PVT版权，未经授权，严禁使用
PVT版权，未经授权，严禁使用
掌锐电子
SWA方案介绍

## PDF物理页 2

PVT版权，未经授权，严禁使用
PVT版权，未经授权，严禁使用
PVT版权，未经授权，严禁使用
          SWA 对GPU采用分时复用的策
略，在Android和Linux VM中都可直
接使用GPU资源
SWA方案的核心优势 
算力损耗优化
 GfxStream方案存在渲染指令编解码、
前后端交互中断（Irq）的算力损耗，此
类问题在SWA方案中完全不存在。

## PDF物理页 3

PVT版权，未经授权，严禁使用
PVT版权，未经授权，严禁使用
PVT版权，未经授权，严禁使用

## PDF物理页 4

PVT版权，未经授权，严禁使用
PVT版权，未经授权，严禁使用
PVT版权，未经授权，严禁使用

## PDF物理页 5

我们的使命
让汽车更智能
我们的愿景
成为全球汽车智能化
解决方案NO.1
核心价值
奋斗 · 坚毅 · 利他 · 分享


---
# SRC0360 使用page_owner定位内存泄露.rar

来源：培训材料/PVT技术分享文档/使用page_owner定位内存泄露.rar

SHA-256：8d74a6884c58374b4bf12b56e2f1aff18807dd55c80129f1f6d3f8bab6428f7e

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0360.html)

## 压缩包目录

- 使用page_owner定位内存泄露\debug LostRAM.rar（1069568 字节）
- 使用page_owner定位内存泄露\使用page_owner定位内存泄露.pdf（2936288 字节）


---
# SRC0361 奇瑞项目Yocto SELinux 介绍 资料.zip

来源：培训材料/PVT技术分享文档/奇瑞项目Yocto SELinux 介绍 资料.zip

SHA-256：390860030f5ac38cd3b8797e12b3d43400b4eb0025e7d9a49e141a9764e414ab

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0361.html)

## 压缩包目录

- 奇瑞项目Yocto SELinux 介绍 资料\Yocto SELinux Introduction(8676).pdf（1125010 字节）


---
# SRC0362 显示问题common+sop.pdf

来源：培训材料/PVT技术分享文档/显示问题common+sop.pdf

SHA-256：e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0362.html)

本地原文件为 0 字节，尚无正文可提供；不能据此生成内容或作出项目结论。

此条没有可靠的提取正文，请核对站内来源页及原件。

---
# SRC0363 系统稳定性资料分享.rar

来源：培训材料/PVT技术分享文档/系统稳定性资料分享.rar

SHA-256：543e357866a50574d5d72702ce29be443479a043477bfa0f1987ee8371305da4

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0363.html)

## 压缩包目录

- 系统稳定性资料分享\expdb.pdf（227638 字节）
- 系统稳定性资料分享\GAT_exe_v4.2446.1.rar（564087595 字节）
- 系统稳定性资料分享\SpOfflineDebugSuite_exe_v5.0.rar（6697672 字节）
- 系统稳定性资料分享\多系统稳定性分析讲解.pdf（3858852 字节）


---
# SRC0364 expdb.pdf

来源：系统稳定性资料分享\expdb.pdf

SHA-256：13e2c1ede76eff9771a7fa8a5161ac558ef2e14d3b92567ee58d0829daeb0cbb

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0364.html)

## PDF物理页 1

1.  
2.  
1.  
2.  
3.  
Introduction: How to get information from expdb
本文旨在介绍两部分内容：
如何通过flashtool抓取expdb partition
如何通过抓取到的expdb文件生成debug所需文件
通过flashtool抓取expdb partition
通过查看load中的scatter file(我们烧load所载入的MTXXXX_Android_scatter.txt)，找到expdb的位置及size
选择flashtool中的read back页面
点击add


## PDF物理页 2

4.  
5.  
双击列表中出现的行，在弹出的对话框中输入读出的expdb partition的存放路径及名字
点击"保存"后，在弹出的对话框中输入expdb的地址和大小，点击ok


## PDF物理页 3

6.  之后点击read back按钮，按照烧load的方法连接手机
通过抓取到的expdb文件生成debug所需文件
使用SS3提供的parsing script （TODO）


---
# SRC0365 多系统稳定性分析讲解.pdf

来源：系统稳定性资料分享\多系统稳定性分析讲解.pdf

SHA-256：eac023f513faf6e3c66b700aa5b0d9579a806c5cfbb90e9bd70ea5b2b34420b9

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0365.html)

## PDF物理页 1

2026-5-20
多系统稳定性分析讲解
姓名 李昌全
掌锐电子

## PDF物理页 2

掌锐电子
1 - 20 密级：
目录
一，多系统稳定性问题有哪些 ......................................................................................................2
1.1 从现象角度看 ....................................................................................................................2
1.2 从问题种类看 ....................................................................................................................2
二，多系统稳定性问题如何分析 ................................................................................................. 3
2.1 KE/HWT 引发系统重新卡死分析 .................................................................................4
2.1.1 gat 工具解析 db 文件 .......................................................................................4
2.2.2 mtk gat 工具中 gdb 使用 ............................................................................. 4
2.2.3 NE/KE analyze................................................................................................... 7
2.2 系统无法启动分析 ........................................................................................................ 10
2.2.1 串口 log 分析 ................................................................................................... 10
2.2.2 回读解析 expdb 分区 ..................................................................................... 14
三，案例讲解 15
3.1 kernel 踩内存 ................................................................................................................ 15
3.2 user 版本 Android 无法启动 .................................................................................... 17

## PDF物理页 3

掌锐电子
2 - 20 密级：
一，多系统稳定性问题有哪些
1.1 从现象角度看
1， 无法启动
需要从串口 log 入手查找原因。
2， 无法关机
从 mobilelog 分析关机流程。
3， 卡死
优先检查 db 文件，若无则通过 mobilelog 找到卡死时间点。
4， 重启
1.2 从问题种类
优先检查 db 文件，若无则通过 mobilelog 查找重启原因及其时间点。
看

## PDF物理页 4

掌锐电子
3 - 20 密级：
二，多系统稳定性问题如何分析

## PDF物理页 5

掌锐电子
4 - 20 密级：
2.1 KE/HWT 引发系统重新卡死分析
2.1.1 gat 工具解析 db 文件
1. 加入文件之后 db.fatal.00.KE.dbg，点击 start
2.2.2 mtk gat 工具中 gdb 使用
1.然后这个界面设置下 symbols 目录，然后点击 Analyze

## PDF物理页 6

掌锐电子
5 - 20 密级：
2.待它解析完成后，点击左上角的 Advanced Analysis,选择启动 gdb

## PDF物理页 7

掌锐电子
6 - 20 密级：
3.此时的 gdb 会自动加载 symbols 文件，如下图所示：

## PDF物理页 8

掌锐电子
7 - 20 密级：
2.2.3 NE/KE analyze
NE/KE analyze 工具可以直接分析 gat 解析出来的数据，并提供分析报告。
1，先要安装 SpOfflineDebugSuite_exe

## PDF物理页 9

掌锐电子
8 - 20 密级：
2，找到 gat 解析出来的文件夹
3，进行 NE/KE analyze
右键 gat 解析出来的文件夹，选择菜单栏中 “NE/KE analyze”，会进行分析
生成常用分析数据如下：

## PDF物理页 10

掌锐电子
9 - 20 密级：


## PDF物理页 11

掌锐电子
10 - 20 密级：
2.2 系统无法启动分析
2.2.1 串口 log 分析
当系统无法启动到 adb 阶段，无法正常导出日志，需要抓取串口日志，即从串口 log 入
手，分析系统启动各个阶段状态。
多系统所有阶段的 log 都会输出到同一个串口，很容易混淆，可借助 log 关键词进行标
识，方便 debug。
2.2.1.1 lk 日志
lk 的每句 log 是没有关键词进行区分的，只能通过 start 和 end log 进行辨识。
起始 log，多系统的 lk 关键词都可以通过
welcome to lk2
进行标识，顺序 sos lk->android uos lk -> tbox uos lk
LLA 会搜索到三次“welcome to lk2”

## PDF物理页 12

掌锐电子
11 - 20 密级：
下面会有 project:关键词 区分不同系统，如下：
1，SOS
lk variant: BL2
boot args 0xbbbbbb64 0x80000000 0x80000000 0x1001c010
version:
arch: arm64
platform: mediatek
target: auto8676p1_64_ufs
project: auto8676p1_64_hyp
buildid: 202512260254_
2，android
lk variant: BL33
boot args 0x0 0x0 0x0 0x0
version:
arch: arm64
platform: mediatek
target: auto8676p1_64_ufs
project: auto8676p1_64_hyp-an
buildid: 202512260254_
3，tbox
lk variant: BL33
boot args 0x0 0x0 0x0 0x0
version:
arch: arm64
platform: mediatek
target: auto8676p1_64_ufs
project: auto8676p1_64_uos_tbox
buildid: 202512181932_
结束 log，会有所不一样，如下：
1，sos lk 结束 log
Turn off BL31 console
2， android uos lk 结束 log
lk finished --> jump to linux kernel 64Bit
3，tbox uos lk 结束 log
LK run time
2.2.1.2 hypevisor 串口 log
可以确定是 hypevisor log 关键词
ARM boot EL2
通过这句 log，再可以通过关键词

## PDF物理页 13

掌锐电子
12 - 20 密级：
nebula_log_driver
搜索确定周围 hypevisor uart log
2.2.1.3 uos 串口 log
1，uos eraly console
Android UOS early console 也会以 hypevisor log 形式输出，所以 log 还是以
“nebula:”为开头

## PDF物理页 14

掌锐电子
13 - 20 密级：
2，uos early console end
如上图，当看到“init: printk: console [hvc0] enabled” 就表示 early console 已
结束，准备要切换到正常 console 设备
3，uos 串口日志

## PDF物理页 15

掌锐电子
14 - 20 密级：
如上图所示，输出的 log 会以“nbl_vm_srv[XXX]”为开头，其中 XXX 是 nbl_vmm 的 pid
号。
最新关键词也可以使用 vmid:0 代表安卓，vmid:1 代表 TBOX
2.2.2 回读解析 expdb 分区
1，回读 expdb 分区
expdb.pdf
2，解析
python expdb_parser.pyc expdb(db)（需要 GAT 带的 python 和里面的脚本）
带路径方式

## PDF物理页 16

掌锐电子
15 - 20 密级：
三，案例讲解
3.1 kernel 踩内存
本地自造问题，kasan 产生 db，gat 解析 db，通过 kernel log 按如下分析。
1，kasan 原理
编译插桩+影子内存+指针 tag
影子内存本身占据了一段内核虚拟地址空间。KASAN 的核心是建立一个从原内存地址到其
对应的影子内存地址的映射关系。这个映射由一个统一的公式定义：
shadow_addr = (addr >> KASAN_SHADOW_SCALE_SHIFT) +
KASAN_SHADOW_OFFSET
映射比例为 2^KASAN_SHADOW_SCALE_SHIFT:1，sw-tag 为 16:1。
对于 tag-based KASAN
 0xFF 为默认的 kernel 内存 tag，即不启用 KASAN 的情况下，高 8bits 默认都是
0xFF
 0xFE 表示不可访问的 memory，为了减少漏检，不对不可访问的 memory 继续细分占
用 tag
 0xFD 为随机 tag 的最大值，即 SW tag-based KASAN 在 0x00-0xFD 范围内随机取
值；
2，kasan report
[ 671.734264] [T1418218] sh: licq buf:16, size:16, ptr=51ffff802ae2c9c0
行 31022: [ 671.736716] [T1418218] sh:
[name:report&]=================================================================
=

## PDF物理页 17

掌锐电子
16 - 20 密级：
行 31023: [ 671.736721] [T1418218] sh: [name:report&]BUG: KASAN: invalid-access
in mysem_store+0xe8/0x130 [mysem]
行 31025: [ 671.739614] [T1418218] sh: [name:report&]Write of size 1 at addr
51ffff802ae2c9d0 by task sh/18218
行 31026: [ 671.739618] [T1418218] sh: [name:report_sw_tags&]Pointer tag: [51],
memory tag: [fe]
行 31027: [ 671.739621] [T1418218] sh: [name:report&]
指针存储的 tag 和 影子内存 tag 不匹配。
3， kasan dump 附近内存数据
行 31100: [ 671.742890] [T1418218] sh: [name:report&]
行 31101: [ 671.742891] [T1418218] sh: [name:report&]Memory state around the
buggy address:
行 31102: [ 671.742893] [T1418218] sh: ffffff802ae2c700: fe fe fe fe fe fe fe
fe be fe fe fe fe fe fe fe
行 31103: [ 671.742895] [T1418218] sh: ffffff802ae2c800: fe fe fe fe a8 a8 fe
fe fe fe fe fe fe fe fe fe
行 31105: [ 671.744969] [T1418218] sh: >ffffff802ae2c900: 46 46 46 46 fe fe fe
fe fe fe fe fe 51 fe fe fe
行 31106: [ 671.744971] [T1418218] sh: [name:report&] ^
行 31108: [ 671.746522] [T1418218] sh: ffffff802ae2ca00: fe fe fe fe fe fe fe
fe 95 95 95 95 fe fe fe fe
行 31109: [ 671.746524] [T1418218] sh: ffffff802ae2cb00: fe fe fe fe aa aa aa
aa fe fe fe fe fe fe fe fe
行 31110: [ 671.746525] [T1418218] sh:
[name:report&]=========================================
Memory state around the buggy address:为访问数据附近 对应影子内存内存数据。
802ae2c9d0 对应影子内存内存为 51，后续每 16 字节都为 fe。
4，kasan report 堆栈信息
行 31110: [ 671.746525] [T1418218] sh:
[name:report&]=================================================================
=
行 31118: [ 671.763689] [T1418218] sh: [name:panic&]Disabling lock debugging
due to kernel taint
行 31120: [ 671.766008] [T1418218] sh: [name:panic&]Kernel panic - not syncing:
panic_on_taint set ...
行 31121: [ 671.766013] [T1418218] sh: CPU: 4 PID: 18218 Comm: sh Tainted: G S
B W OE 6.1.124 #1
行 31122: [ 671.766018] [T1418218] sh: Hardware name: MT6897(ENG) (DT)
行 31123: [ 671.766020] [T1418218] sh: Call trace:
行 31124: [ 671.766022] [T1418218] sh: dump_backtrace+0xf8/0x148
行 31125: [ 671.766045] [T1418218] sh: show_stack+0x18/0x24
行 31126: [ 671.766049] [T1418218] sh: dump_stack_lvl+0x60/0x7c
行 31127: [ 671.766061] [T1418218] sh: dump_stack+0x18/0x38
行 31128: [ 671.766064] [T1418218] sh: panic+0x3a0/0xa18

## PDF物理页 18

掌锐电子
17 - 20 密级：
行 31129: [ 671.766067] [T1418218] sh: add_taint+0x1a8/0x200
行 31130: [ 671.766072] [T1418218] sh: end_report+0x84/0x12c
行 31131: [ 671.766088] [T1418218] sh: kasan_report+0xe8/0x14c
行 31132: [ 671.766091] [T1418218] sh: kasan_tag_mismatch+0x28/0x40
行 31133: [ 671.766095] [T1418218] sh: __hwasan_tag_mismatch+0x2c/0x5c
行 31134: [ 671.766109] [T1418218] sh: mysem_store+0xe8/0x130 [mysem]
行 31135: [ 671.766126] [T1418218] sh: dev_attr_store+0x5c/0x80
行 31136: [ 671.766136] [T1418218] sh: sysfs_kf_write+0x154/0x1ac
行 31137: [ 671.766151] [T1418218] sh: kernfs_fop_write_iter+0x2fc/0x48c
行 31138: [ 671.766154] [T1418218] sh: vfs_write+0x628/0x820
行 31139: [ 671.766164] [T1418218] sh: ksys_write+0xe8/0x1b4
行 31140: [ 671.766167] [T1418218] sh: __arm64_sys_write+0x90/0xb8
行 31141: [ 671.766170] [T1418218] sh: invoke_syscall+0x88/0x274
行 31142: [ 671.766182] [T1418218] sh: el0_svc_common+0x154/0x280
行 31143: [ 671.766185] [T1418218] sh: do_el0_svc+0x58/0x11c
行 31144: [ 671.766188] [T1418218] sh: el0_svc+0x2c/0x58
行 31145: [ 671.766192] [T1418218] sh: el0t_64_sync_handler+0x68/0xb4
行 31146: [ 671.766195] [T1418218] sh: el0t_64_sync+0x198/0x19c
5，mysem_store 定位如下
ptr 存在越界访问，kmalloc 返回的地址是 51ffff802ae2c9c0，问题报错在
51ffff802ae2c9d0。
3.2 user 版本 Android 无法启动
1，问题现象

## PDF物理页 19

掌锐电子
18 - 20 密级：
user 版本 Android 无法启动，屏不亮
2，问题分析
1）串口 log 显示 Android 发生 KE
2）回读 android 端 expdb 分区
Android 一直发生 KE，无法正常导出 db 文件，采用回读 android 端 expdb 分区进行分析
第一次回读 last_kernel 日志 size 为 0，无 log。分析 pl_lk 判断 loglevel 为 0 导致
3）Lk loglevel 更改为 7
4）第二次回读 expdb 分区
last_kmsg 显示 Unknown symbol pid_vnr
完整异常 log：
[ 2.488204][ T1] carevent_wt: Unknown symbol pid_vnr (err -2)
[ 2.489579][ T1] Kernel panic - not syncing: Attempted to kill init!
exitcode=0x00007f00
内部经验：这是 carevent_wt 不符合 gki 标准导致的。
3，解决方案
1）关闭 gki
下面标注位置改成 no，关闭 gki

## PDF物理页 20

掌锐电子
19 - 20 密级：
2）更改 carevent_wt 以符合 gki 标准，客户完成修改。


---
# SRC0366 安卓架构.jpg

来源：安卓架构.jpg

SHA-256：051132be5a9034f6446c7a0eb613d2cd5423be387a8635df9fe964e17741c5cc

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0366.html)

此条没有可靠的提取正文，请核对站内来源页及原件。

---
# SRC0367 系统整体架构.jpg

来源：系统整体架构.jpg

SHA-256：10f8872dd400e265270b9eda4dc8e5467c355ce72731b7b7e2f557fbcde980b8

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0367.html)

此条没有可靠的提取正文，请核对站内来源页及原件。

---
# SRC0368 系统通讯架构.jpg

来源：系统通讯架构.jpg

SHA-256：218622afac3ccb3a1e3282001c075bac59af62987b337ede2d96fc01c1615c34

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0368.html)

此条没有可靠的提取正文，请核对站内来源页及原件。

---
# SRC0369 架构解释更新说明.md

来源：架构资料——原版/mt8676-architecture/架构解释更新说明.md

SHA-256：53c960417d53456889a73aa76f8a2f26efeca106040644355b9cd294e6188b80

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0369.html)

## 全文 1

# 原架构解释更新入口

2026-09-20：按用户要求，在现有架构不变的基础上，用 PVT/MTK 和最新 [GitHub Pages 教材](https://qiantao18817568425-art.github.io/Codex/) 深化解释。已在本目录 00—16 共 17 章的模块/流程正文内修订，与中文版同步采用同一组证据；原有 T12T 集成补充保留。

架构图、Mermaid 图、模块/流程 ID、设备归属清单和厂商原始文件保持原样。未执行文档内实验命令，未修改线上站点。[本轮修订与核验](../../架构知识——中文版/修订记录/2026-09-20-正文深化/更新说明与架构不变核验.md)。

| 入口 | 内容 |
|---|---|
| [02-整机与虚拟化架构](chapters/02-整机与虚拟化架构.md) | 原章节内的资料核对解释 |
| [04-三图模块字典](chapters/04-三图模块字典.md) | 原章节内的资料核对解释 |
| [05-通信机制与异常诊断基础](chapters/05-通信机制与异常诊断基础.md) | 原章节内的资料核对解释 |
| [07-SOS-Yocto内部机制](chapters/07-SOS-Yocto内部机制.md) | 原章节内的资料核对解释 |
| [11-显示相机与驾驶辅助业务流程](chapters/11-显示相机与驾驶辅助业务流程.md) | 原章节内的资料核对解释 |
| [12-音频与语音业务流程](chapters/12-音频与语音业务流程.md) | 原章节内的资料核对解释 |
| [14-系统生命周期业务流程](chapters/14-系统生命周期业务流程.md) | 原章节内的资料核对解释 |
| [15-统一诊断手册](chapters/15-统一诊断手册.md) | 原章节内的资料核对解释 |


