import { useI } from '../i18n';
import { H2, Lead, Wrap, sec } from './ui';
import data from '../data/distributors.json';
const color: any = { north: 'bg-pan', central: 'bg-cta', south: 'bg-[#2F7D5B]' };
export default function Distributors() {
  const { t, lang } = useI();
  const list = (hidden?: boolean) => (
    <ul aria-hidden={hidden} className="m-0 flex list-none gap-4 py-1 pl-0 pr-4">
      {data.map((d: any, i: number) => (
        <li key={i} className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-paper py-2.5 pl-2.5 pr-5 font-semibold">
          <em className={'rounded-full px-3 py-0.5 text-[.78rem] font-bold not-italic text-white ' + color[d.r]}>{t('dist.' + d.r)}</em>{t('dist.prefix')} {d[lang]}
        </li>
      ))}
    </ul>
  );
  return (
    <section id="phan-phoi" className="bg-gradient-to-b from-transparent via-sun/10 to-transparent py-12 md:py-[4.5rem]">
      <Wrap><H2>{t('dist.h')}</H2><Lead>{t('dist.p')}</Lead></Wrap>
      <div className="marq mt-8" aria-label={t('dist.label')}><div className="track">{list()}{list(true)}</div></div>
    </section>
  );
}
