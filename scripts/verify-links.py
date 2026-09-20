"""Check generated HTML local resources, duplicate IDs and fragment destinations."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
from collections import Counter
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__();self.ids=[];self.refs=[];self.feed(text)
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  self.refs.extend(a[k] for k in ['href','src'] if a.get(k))
root=Path(__file__).resolve().parent.parent/'docs'
pages={p.resolve():Page(p.read_text(encoding='utf-8-sig')) for p in root.rglob('*.html')};errors=[];count=0
for p,page in pages.items():
 for id,n in Counter(page.ids).items():
  if n>1:errors.append((p.name,'duplicate',id))
 for url in page.refs:
  u=urlsplit(url)
  if u.scheme or u.netloc:continue
  count+=1;t=(p.parent/unquote(u.path)).resolve() if u.path else p
  if not t.exists():errors.append((p.name,'missing',url))
  elif u.fragment and t in pages and unquote(u.fragment)not in pages[t].ids:errors.append((p.name,'fragment',url))
print({'pages':len(pages),'local_links':count,'errors':errors});raise SystemExit(bool(errors))
