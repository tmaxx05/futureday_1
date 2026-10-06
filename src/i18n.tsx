import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import vi from './locales/vi.json';
import en from './locales/en.json';
const D: any = { vi, en };
type Lang = 'vi' | 'en';
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => any }>(null as any);
const read = (): Lang => { try { return localStorage.getItem('lang') === 'en' ? 'en' : 'vi'; } catch { return 'vi'; } };
export function I18n({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(read);
  useEffect(() => { document.documentElement.lang = lang; try { localStorage.setItem('lang', lang); } catch {} }, [lang]);
  const t = (k: string) => k.split('.').reduce((o: any, p) => o?.[p], D[lang]);
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}
export const useI = () => useContext(Ctx);
