import { useEffect, useRef, useState } from 'react';
import { useI } from '../i18n';
import { SCENE_SVG } from '../lib/sceneSvg';
import { mountScene } from '../lib/sunScene';
import { Btn, Wrap } from './ui';
export default function Hero() {
  const { t } = useI();
  const heroRef = useRef<HTMLElement>(null), box = useRef<HTMLDivElement>(null), sc = useRef<any>(null);
  const [roof, setRoof] = useState('ton');
  useEffect(() => {
    const svg = box.current!.querySelector('svg')!;
    svg.setAttribute('aria-label', t('hero.alt'));
    sc.current = mountScene(svg, heroRef.current);
    return () => sc.current.destroy();
  }, []);
  useEffect(() => { box.current!.querySelector('svg')!.setAttribute('aria-label', t('hero.alt')); });
  useEffect(() => { sc.current && sc.current.setRoof(roof); }, [roof]);
  return (
    <section id="top" ref={heroRef} className="hero-bg pb-8 pt-10 md:pt-16">
      <Wrap className="grid items-center gap-10 md:grid-cols-[1fr_1.15fr]">
        <div>
          <span className="mb-4 inline-block rounded-full border border-[#F6D9A8] bg-[#FFF3DC] px-3.5 py-1.5 text-[.85rem] font-bold text-[#B8430A]">{t('hero.pill')}</span>
          <h1 className="font-display text-[clamp(2.3rem,6vw,4rem)] font-extrabold leading-[1.1] tracking-tight">{t('hero.h1')}</h1>
          <p className="my-5 max-w-[44ch] text-[1.1rem] text-mut">{t('hero.p')}</p>
          <div className="flex flex-wrap gap-3"><Btn primary href="#uoc-tinh">{t('hero.cta1')}</Btn><Btn href="#lien-he">{t('hero.cta2')}</Btn></div>
        </div>
        <div className="stage rounded-3xl border border-line bg-paper p-3.5">
          <div ref={box} dangerouslySetInnerHTML={{ __html: SCENE_SVG }} />
          <div className="mt-2.5 flex flex-wrap gap-1.5" role="group">
            {['ton', 'be', 'xn'].map(k => (
              <button key={k} aria-pressed={roof === k} onClick={() => setRoof(k)} className={'cursor-pointer rounded-full border px-4 py-1.5 text-[.92rem] font-medium ' + (roof === k ? 'border-ink bg-ink text-bg' : 'border-line text-ink')}>{t('hero.roofs.' + k)}</button>
            ))}
          </div>
          <p className="mx-1 mt-2 min-h-[3em] text-[.95rem] text-mut">{t('hero.notes.' + roof)}</p>
          <p className="mx-1 text-[.85rem] text-mut">{t('hero.hint')}</p>
        </div>
      </Wrap>
    </section>
  );
}
