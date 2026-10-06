import { useEffect, useState } from 'react';
import { useI } from '../i18n';
import { H2, Wrap, sec } from './ui';
import prod from '../data/production.json';
const PRICE = 2300, PANEL_KW = 0.55, PANEL_M2 = 2.6;
const sum = (a: number[]) => a.reduce((x, y) => x + y, 0);
const load = () => { try { return JSON.parse(localStorage.getItem('nang.estimate') || '{}'); } catch { return {}; } };
export default function Estimator() {
  const { t, lang } = useI();
  const s0 = load();
  const [mode, setMode] = useState<'bill' | 'area'>(s0.mode || 'bill');
  const [bill, setBill] = useState<number>(s0.bill || 3000000);
  const [share, setShare] = useState<number>(s0.share || 60);
  const [area, setArea] = useState<number>(s0.area || 40);
  const [region, setRegion] = useState<'north' | 'central' | 'south'>(s0.region || 'north');
  useEffect(() => { try { localStorage.setItem('nang.estimate', JSON.stringify({ mode, bill, share, area, region })); } catch {} }, [mode, bill, share, area, region]);
  const M: number[] = (prod as any)[region], avg = sum(M) / 12;
  const kwp = mode === 'bill' ? (bill / PRICE * share / 100) / avg : Math.floor(area / PANEL_M2) * PANEL_KW;
  const panels = Math.ceil(kwp / PANEL_KW - 1e-9), need = Math.ceil(panels * PANEL_M2);
  const monthly = M.map(v => v * kwp), annual = sum(monthly), save = annual * PRICE, max = Math.max(...monthly, 1);
  const nf = new Intl.NumberFormat(lang === 'vi' ? 'vi-VN' : 'en-US');
  const vnd = (n: number) => nf.format(Math.round(n / 1e5) * 1e5) + ' ' + t('est.unit');
  const tab = (m: string, on: boolean) => 'cursor-pointer rounded-full px-4 py-1.5 text-[.92rem] font-semibold ' + (on ? 'bg-white text-pan' : 'bg-white/15 text-white');
  const presets: [string, number][] = [['ton', 40], ['be', 60], ['xn', 400]];
  return (
    <section id="uoc-tinh" className={sec}>
      <Wrap>
        <div className="grid gap-8 rounded-3xl bg-pan p-6 text-white md:grid-cols-2 md:p-9">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold leading-[1.15]">{t('est.h')}</h2>
            <div className="mt-4 flex flex-wrap gap-2" role="tablist">
              <button className={tab('bill', mode === 'bill')} onClick={() => setMode('bill')}>{t('est.modeBill')}</button>
              <button className={tab('area', mode === 'area')} onClick={() => setMode('area')}>{t('est.modeArea')}</button>
            </div>
            {mode === 'bill' ? (<>
              <label htmlFor="bill" className="mt-5 block font-semibold">{t('est.bill')}: {nf.format(bill)} {t('est.unit')}</label>
              <input id="bill" type="range" min={500000} max={50000000} step={500000} value={bill} onChange={e => setBill(+e.target.value)} className="w-full accent-sun" />
              <label htmlFor="share" className="mt-4 block font-semibold">{t('est.share')}: {share}%</label>
              <input id="share" type="range" min={30} max={90} step={5} value={share} onChange={e => setShare(+e.target.value)} className="w-full accent-sun" />
            </>) : (<>
              <div className="mt-5 flex flex-wrap gap-2">{presets.map(([k, v]) => <button key={k} className={tab(k, area === v)} onClick={() => setArea(v)}>{t('est.presets.' + k)}</button>)}</div>
              <label htmlFor="area" className="mt-4 block font-semibold">{t('est.area')}: {area} m²</label>
              <input id="area" type="range" min={10} max={1000} step={5} value={area} onChange={e => setArea(+e.target.value)} className="w-full accent-sun" />
            </>)}
            <label htmlFor="reg" className="mt-4 block font-semibold">{t('est.region')}</label>
            <select id="reg" value={region} onChange={e => setRegion(e.target.value as any)} className="mt-1 w-full rounded-xl bg-white/15 px-3 py-2.5 text-white">
              {['north', 'central', 'south'].map(r => <option key={r} value={r} className="text-ink">{t('est.regions.' + r)}</option>)}
            </select>
          </div>
          <div>
            <div className="rounded-2xl bg-white/12 px-5 py-2" aria-live="polite">
              {([[t('est.kwp'), kwp.toFixed(1) + ' kWp'], [t('est.panels'), String(panels)], [t('est.areaNeed'), '~' + need + ' m²'], [t('est.save'), vnd(save)]] as [string, string][]).map(([l, v]) => (
                <div key={l} className="flex justify-between gap-4 border-b border-white/20 py-2.5 last:border-0"><span>{l}</span><b className="text-right font-display text-xl font-extrabold">{v}</b></div>
              ))}
            </div>
            <p className="mb-1 mt-4 text-[.9rem] font-semibold">{t('est.chart')}</p>
            <svg viewBox="0 0 240 90" className="w-full" role="img" aria-label={t('est.chart')}>
              {monthly.map((v, i) => { const h = v / max * 62; return (
                <g key={i}><rect x={i * 20 + 3} y={68 - h} width={14} height={h} rx={3} fill="#F7B21B"><title>{t('est.m')}{i + 1}: {Math.round(v)} kWh</title></rect>
                <text x={i * 20 + 10} y={82} fontSize={8} textAnchor="middle" fill="#fff" opacity={.85}>{t('est.m')}{i + 1}</text></g>); })}
            </svg>
          </div>
        </div>
        <p className="mt-3 text-[.85rem] text-mut">{t('est.note')}</p>
      </Wrap>
    </section>
  );
}
