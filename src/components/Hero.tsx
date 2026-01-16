import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Hero.scss';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t, isChanging } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-text">
          <h1 className="hero-title">
            <span className={`greeting text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
              {t.hero.greeting}
            </span>
            <span className={`name text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
              {t.hero.name}
            </span>
          </h1>
          <h2 className={`hero-subtitle text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
            {t.hero.subtitle}
          </h2>
          <p className={`hero-description text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
            {t.hero.description}
          </p>
          <div className="hero-location">
            <span className={`text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
              {t.hero.location}
            </span>
          </div>
          <div className="hero-actions">
            <a href="#contact" className={`btn btn-primary text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
              {t.hero.contactBtn}
            </a>
            <a href="#experience" className={`btn btn-secondary text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
              {t.hero.experienceBtn}
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="mailto:sailaukhanbeknur@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+77765311600"
              className="social-link"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/beknursailaukhan-6505712ba"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <div className="code-snippet">
              <pre>
{`const developer = {
  name: "Beknur",
  role: "Frontend Dev",
  experience: "4 years",
  loves: ["React", "TypeScript"]
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
