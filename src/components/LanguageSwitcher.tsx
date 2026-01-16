import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    setLanguage(language === 'ru' ? 'en' : 'ru', { x, y });

    // Блокируем кнопку на 1 секунду
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  };

  return (
    <button 
      className={`language-switcher ${isDisabled ? 'disabled' : ''}`} 
      onClick={toggleLanguage} 
      aria-label="Switch language"
      disabled={isDisabled}
    >
      <Globe size={20} />
      <span>{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;
