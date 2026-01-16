import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '../translations';

interface WavePosition {
  x: number;
  y: number;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language, wavePosition?: WavePosition) => void;
  t: typeof translations.ru;
  wavePosition: WavePosition | null;
  isChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved && (saved === 'ru' || saved === 'en') ? saved : 'ru';
  });
  const [wavePosition, setWavePosition] = useState<WavePosition | null>(null);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language, wavePos?: WavePosition) => {
    if (wavePos && lang !== language) {
      setWavePosition(wavePos);
      setIsChanging(true);
      // Wait for fade-out animation
      setTimeout(() => {
        setLanguageState(lang);
        // Wait for text to update, then fade-in
        setTimeout(() => {
          setIsChanging(false);
          // Remove wave after animation completes
          setTimeout(() => {
            setWavePosition(null);
          }, 1200);
        }, 50);
      }, 300);
    } else if (!wavePos) {
      setLanguageState(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], wavePosition, isChanging }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
