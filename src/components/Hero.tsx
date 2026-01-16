import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import './Hero.scss';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Привет, я</span>
            <span className="name">Beknur Sailaukhan</span>
          </h1>
          <h2 className="hero-subtitle">Middle Frontend Developer</h2>
          <p className="hero-description">
            Фронтенд-разработчик с 4-летним опытом. Создаю веб и мобильные приложения
            на React, React Native, Vue и Flutter. Люблю чистый код и удобные интерфейсы.
          </p>
          <div className="hero-location">
            <span>📍 Алматы, Казахстан</span>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Связаться
            </a>
            <a href="#experience" className="btn btn-secondary">
              Опыт работы
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
