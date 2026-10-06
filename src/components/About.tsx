import { useI } from '../i18n';
import { H2, Lead, Wrap, sec } from './ui';
export default function About() {
  const { t } = useI();
  return (
    <section id="gioi-thieu" className={sec + ' bg-gradient-to-b from-sun/15 to-transparent'}>
      <Wrap className="grid items-start gap-10 md:grid-cols-[1.1fr_1fr]">
        <div><H2>{t('about.h')}</H2><Lead>{t('about.p')}</Lead></div>
        <ul className="grid gap-3">
          {t('about.values').map((v: any) => (
            <li key={v.t} className="rounded-2xl border border-line border-l-[5px] border-l-sun bg-paper px-5 py-4"><b className="block font-display text-lg font-extrabold">{v.t}</b><span className="text-mut">{v.b}</span></li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
