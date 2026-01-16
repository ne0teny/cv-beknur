import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Education.scss';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, language, isChanging } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education" ref={sectionRef}>
      <h2 className={`section-title text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
        {t.education.title}
      </h2>
      <div className={`education-content ${isVisible ? 'visible' : ''}`}>
        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={48} />
          </div>
          <div className="education-info">
            <h3 className="university-name">Satbayev University</h3>
            <h4 className={`degree text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
              {t.education.degree}
            </h4>
            <p className={`field text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
              {t.education.field}
            </p>
            <div className="period">
              <Calendar size={18} />
              <span className={`text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
                {language === 'ru' ? 'сентябрь 2021 - май 2025' : 'September 2021 - May 2025'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
