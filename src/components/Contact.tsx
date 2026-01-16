import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.scss';

const Contact = () => {
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

  const contactMethods = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'sailaukhanbeknur@gmail.com',
      link: 'mailto:sailaukhanbeknur@gmail.com'
    },
    {
      icon: <Phone size={28} />,
      title: t.contact.phone,
      value: '+7 765 311 600',
      link: 'tel:+77765311600'
    },
    {
      icon: <Linkedin size={28} />,
      title: 'LinkedIn',
      value: 'Beknur Sailaukhan',
      link: 'https://www.linkedin.com/in/beknursailaukhan-6505712ba'
    },
    {
      icon: <MapPin size={28} />,
      title: t.contact.location,
      value: language === 'ru' ? 'Алматы, Казахстан' : 'Almaty, Kazakhstan',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <h2 className={`section-title text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
        {t.contact.title}
      </h2>
      <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
        <p className={`contact-description text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
          {t.contact.description}
        </p>
        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="contact-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {method.link ? (
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-link"
                >
                  <div className="contact-icon">{method.icon}</div>
                  <h3 className={`contact-title text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
                    {method.title}
                  </h3>
                  <p className={`contact-value text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
                    {method.value}
                  </p>
                </a>
              ) : (
                <div className="contact-link">
                  <div className="contact-icon">{method.icon}</div>
                  <h3 className={`contact-title text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
                    {method.title}
                  </h3>
                  <p className={`contact-value text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
                    {method.value}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <p className={`text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
          {t.contact.footer}
        </p>
      </div>
    </section>
  );
};

export default Contact;
