import { useI } from '../i18n';
import { H2, Lead, Wrap, sec } from './ui';
export default function ContactMe() {
  const { t } = useI();
  return (
    <section id="contact-me" className={sec + ' bg-gradient-to-b from-transparent to-sun/25'}>
      <Wrap>
        <H2>{t('contact.h')}</H2><Lead>{t('contact.p')}</Lead>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t('contact.cards').map((c: any) => (
            <div key={c.t} className="rounded-2xl border border-line bg-paper p-5"><b className="mb-1 block font-display text-lg font-extrabold">{c.t}</b><span className="block whitespace-pre-line break-words text-mut">{c.b}</span></div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
