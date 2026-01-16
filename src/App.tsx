import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.scss';

const AppContent = () => {
  const { wavePosition } = useLanguage();
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="app">
      <LanguageSwitcher />
      {wavePosition && (
        <div
          className="language-wave"
          style={{
            left: `${wavePosition.x}px`,
            top: `${wavePosition.y}px`,
          }}
        />
      )}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="particles">
          {particles.map((i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>

      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
