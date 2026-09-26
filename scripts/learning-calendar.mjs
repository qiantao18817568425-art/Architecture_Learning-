export function shanghaiDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Shanghai', year:'numeric', month:'2-digit', day:'2-digit'}).formatToParts(now);
  const value = type => parts.find(p => p.type === type).value;
  return `${value('year')}-${value('month')}-${value('day')}`;
}

export function scheduleForDate(date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Expected YYYY-MM-DD');
  const parsed = new Date(`${date}T12:00:00Z`);
  if (!Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0,10) !== date) throw new Error('Invalid calendar date');
  const weekday = parsed.getUTCDay();
  const kinds = ['sunday-review','day','day','day','day','friday-review','saturday-review'];
  return {date, weekday, weekdayName:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'][weekday], kind:kinds[weekday], allowsNewDay:weekday>=1&&weekday<=4};
}
