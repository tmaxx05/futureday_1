import { useI } from '../i18n';
import { H2, Wrap, sec } from './ui';
export default function Advantages() {
  const { t } = useI();
  return (
    <section id="loi-the" className={sec}>
      <Wrap>
        <H2>{t('adv.h')}</H2>
        <div className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {t('adv.items').map((a: any) => <div key={a.t}><h3 className="font-display text-lg font-extrabold">{a.t}</h3><p className="text-mut">{a.b}</p></div>)}
        </div>
      </Wrap>
    </section>
  );
}
