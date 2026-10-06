import { useState } from 'react';
import { useI } from '../i18n';
export default function Header({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const { t, lang, setLang } = useI();
  const [open, setOpen] = useState(false);
  const pill = 'rounded-full border border-line bg-paper px-4 py-2 text-[.93rem] font-medium whitespace-nowrap hover:border-sun cursor-pointer';
  const links: [string, string][] = [['#gioi-thieu', 'nav.about'], ['#san-pham', 'nav.products'], ['#loi-the', 'nav.adv']];
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-3 px-5 py-3">
        <a href="#top" className="flex items-center gap-1.5 font-display text-[1.35rem] font-extrabold">
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true"><circle cx="16" cy="16" r="6" fill="#F7B21B" /><g stroke="#F26B1D" strokeWidth="2.2" strokeLinecap="round"><path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M25.2 6.8l-2.8 2.8M9.6 22.4l-2.8 2.8" /></g></svg>
          <span>Nắng</span><span className="text-leaf">Factory</span>
        </a>
        <div className="flex items-center gap-2">
          <nav className={(open ? 'flex' : 'hidden') + ' absolute inset-x-0 top-full flex-col gap-2 border-b border-line bg-bg px-5 pb-4 pt-3 lg:static lg:flex lg:flex-row lg:border-0 lg:p-0'}>
            {links.map(([h, k]) => <a key={h} href={h} onClick={() => setOpen(false)} className={pill + ' text-center'}>{t(k)}</a>)}
            <a href="#lien-he" onClick={() => setOpen(false)} className="rounded-full bg-cta px-4 py-2 text-center text-[.93rem] font-semibold text-white">{t('nav.consult')}</a>
          </nav>
          <button className={pill} onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} aria-label={t('nav.lang')}>{lang === 'vi' ? 'EN' : 'VI'}</button>
          <button className={pill} onClick={toggleTheme} aria-label={t('nav.theme')}>{theme === 'dark' ? '☀' : '☾'}</button>
          <button className={pill + ' lg:hidden'} aria-expanded={open} onClick={() => setOpen(!open)}>{t('nav.menu')}</button>
        </div>
      </div>
    </header>
  );
}
