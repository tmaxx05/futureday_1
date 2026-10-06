import { ReactNode } from 'react';
export const Wrap = ({ children, className = '' }: { children: ReactNode; className?: string }) => <div className={'mx-auto w-full max-w-[1080px] px-5 ' + className}>{children}</div>;
export const H2 = ({ children }: { children: ReactNode }) => <h2 className="max-w-[22ch] font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.1]">{children}</h2>;
export const Lead = ({ children }: { children: ReactNode }) => <p className="mt-3.5 max-w-[56ch] text-mut">{children}</p>;
export const Btn = ({ href, children, primary, onClick, type, disabled }: any) => {
  const c = 'inline-block cursor-pointer rounded-full px-6 py-3.5 font-semibold disabled:opacity-60 ' + (primary ? 'bg-cta text-white shadow-[0_10px_24px_-8px_rgba(242,107,29,.55)]' : 'bg-paper text-ink ring-[1.5px] ring-inset ring-line');
  return href ? <a href={href} className={c}>{children}</a> : <button type={type || 'button'} onClick={onClick} disabled={disabled} className={c}>{children}</button>;
};
export const Card = ({ children, accent }: { children: ReactNode; accent?: string }) => <div className="rounded-2xl border border-line bg-paper p-6" style={accent ? { borderTop: '6px solid ' + accent } : undefined}>{children}</div>;
export const sec = 'py-12 md:py-[4.5rem]';
