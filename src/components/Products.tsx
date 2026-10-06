import { useI } from '../i18n';
import { Card, H2, Wrap, sec } from './ui';
const accents = ['#8A97A3', '#1B4F7A', '#2F7D5B'];
export default function Products() {
  const { t } = useI();
  return (
    <section id="san-pham" className={sec}>
      <Wrap>
        <H2>{t('products.h')}</H2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t('products.items').map((p: any, i: number) => (
            <Card key={p.t} accent={accents[i]}>
              <h3 className="mb-2 font-display text-xl font-extrabold">{p.t}</h3>
              <p className="text-mut">{p.b}</p>
              <ul className="mt-3 list-disc pl-5">{p.l.map((x: string) => <li key={x}>{x}</li>)}</ul>
            </Card>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
