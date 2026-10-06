import { useI } from '../i18n';
import { Wrap } from './ui';
export default function Footer() {
  const { t } = useI();
  return (
    <footer className="border-t border-line py-8 pb-24 text-[.92rem] text-mut md:pb-8">
      <Wrap className="flex flex-wrap justify-between gap-3"><span>{t('foot.a')}</span><span>{t('foot.b')}</span></Wrap>
    </footer>
  );
}
