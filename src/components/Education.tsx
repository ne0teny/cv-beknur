import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import './Education.scss';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      <h2 className="section-title">Образование</h2>
      <div className={`education-content ${isVisible ? 'visible' : ''}`}>
        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={48} />
          </div>
          <div className="education-info">
            <h3 className="university-name">Satbayev University</h3>
            <h4 className="degree">Бакалавр технических наук</h4>
            <p className="field">Компьютерные науки</p>
            <div className="period">
              <Calendar size={18} />
              <span>сентябрь 2021 - май 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
