import { useTheme } from './theme';
import { useI } from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Estimator from './components/Estimator';
import Process from './components/Process';
import Distributors from './components/Distributors';
import Advantages from './components/Advantages';
import ConsultForm from './components/ConsultForm';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
export default function App() {
  const { theme, toggle } = useTheme();
  const { t } = useI();
  return (
    <>
      <Header theme={theme} toggleTheme={toggle} />
      <main>
        <Hero /><About /><Products /><Estimator /><Process /><Distributors /><Advantages /><ConsultForm /><ContactMe />
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2.5 border-t border-line bg-bg px-4 pt-2.5 md:hidden" style={{ paddingBottom: 'calc(.6rem + env(safe-area-inset-bottom,0px))' }}>
        <a href="#contact-me" className="flex-1 rounded-full bg-paper py-3 text-center font-semibold ring-[1.5px] ring-inset ring-line">{t('foot.bar1')}</a>
        <a href="#lien-he" className="flex-1 rounded-full bg-cta py-3 text-center font-semibold text-white">{t('foot.bar2')}</a>
      </div>
    </>
  );
}
