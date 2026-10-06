import { useI } from '../i18n';
import { Card, H2, Wrap, sec } from './ui';
export default function Process() {
  const { t } = useI();
  return (
    <section id="quy-trinh" className={sec}>
      <Wrap>
        <H2>{t('process.h')}</H2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t('process.steps').map((s: any, i: number) => (
            <li key={s.t}><Card><span className="mb-3 grid size-8 place-items-center rounded-full bg-sun font-display font-extrabold text-[#3A2600]">{i + 1}</span><h3 className="mb-1 font-display text-lg font-extrabold">{s.t}</h3><p className="text-[.95rem] text-mut">{s.b}</p></Card></li>
          ))}
        </ol>
      </Wrap>
    </section>
  );
}
