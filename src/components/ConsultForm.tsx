import { useState } from 'react';
import { useI } from '../i18n';
import { Btn, H2, Lead, Wrap, sec } from './ui';
const SHEET_URL = import.meta.env.VITE_SHEET_URL as string | undefined;
const input = 'w-full rounded-xl border border-line bg-bg px-3.5 py-3 text-ink';
export default function ConsultForm() {
  const { t } = useI();
  const [f, setF] = useState({ name: '', phone: '', roof: 0, note: '', ok: false });
  const [msg, setMsg] = useState<'' | 'err' | 'fail' | 'thanks'>('');
  const [busy, setBusy] = useState(false);
  const set = (k: string, v: any) => setF({ ...f, [k]: v });
  async function send() {
    if (!f.name.trim() || !f.phone.trim() || !f.ok) return setMsg('err');
    setBusy(true);
    try {
      if (SHEET_URL) await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body: JSON.stringify({ name: f.name.trim(), phone: f.phone.trim(), roof: t('consult.roofs')[f.roof], note: f.note.trim() }) });
      setMsg('thanks'); setF({ name: '', phone: '', roof: 0, note: '', ok: false });
    } catch { setMsg('fail'); }
    setBusy(false);
  }
  const L = ({ id, children }: any) => <label htmlFor={id} className="mb-1.5 block font-semibold">{children}</label>;
  return (
    <section id="lien-he" className={sec}>
      <Wrap>
        <div className="grid gap-8 rounded-3xl border border-line bg-paper p-6 md:grid-cols-2 md:p-8">
          <div><H2>{t('consult.h')}</H2><Lead>{t('consult.p')}</Lead><p className="mt-3.5 max-w-[56ch] text-mut">{t('consult.prep')}</p></div>
          <div className="grid gap-4">
            <div><L id="n">{t('consult.name')}</L><input id="n" className={input} autoComplete="name" value={f.name} onChange={e => set('name', e.target.value)} /></div>
            <div><L id="p">{t('consult.phone')}</L><input id="p" className={input} inputMode="tel" autoComplete="tel" value={f.phone} onChange={e => set('phone', e.target.value)} /></div>
            <div><L id="r">{t('consult.roof')}</L><select id="r" className={input} value={f.roof} onChange={e => set('roof', +e.target.value)}>{t('consult.roofs').map((r: string, i: number) => <option key={r} value={i}>{r}</option>)}</select></div>
            <div><L id="m">{t('consult.note')}</L><textarea id="m" rows={3} className={input} value={f.note} onChange={e => set('note', e.target.value)} /></div>
            <label className="flex items-start gap-2 text-[.9rem] text-mut"><input type="checkbox" checked={f.ok} onChange={e => set('ok', e.target.checked)} className="mt-1" />{t('consult.consent')}</label>
            <div><Btn primary onClick={send} disabled={busy}>{t('consult.send')}</Btn></div>
            {msg && <div role="status" className={'rounded-xl px-4 py-3 text-white ' + (msg === 'thanks' ? 'bg-[#2F7D5B]' : 'bg-cta')}>{msg === 'thanks' ? t('consult.thanks') : msg === 'err' ? t('consult.err') : t('consult.fail')}</div>}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
