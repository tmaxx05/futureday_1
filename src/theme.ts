import { useEffect, useState } from 'react';
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try { const s = localStorage.getItem('theme'); if (s === 'dark' || s === 'light') return s; } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);
  return { theme, toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark') };
}
