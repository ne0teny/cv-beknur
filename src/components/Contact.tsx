import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import './Contact.scss';

const Contact = () => {
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

  const contactMethods = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'sailaukhanbeknur@gmail.com',
      link: 'mailto:sailaukhanbeknur@gmail.com'
    },
    {
      icon: <Phone size={28} />,
      title: 'Телефон',
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
      title: 'Локация',
      value: 'Алматы, Казахстан',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <h2 className="section-title">Контакты</h2>
      <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
        <p className="contact-description">
          Открыт для интересных проектов и предложений о работе.
          Свяжитесь со мной любым удобным способом!
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
                  <h3 className="contact-title">{method.title}</h3>
                  <p className="contact-value">{method.value}</p>
                </a>
              ) : (
                <div className="contact-link">
                  <div className="contact-icon">{method.icon}</div>
                  <h3 className="contact-title">{method.title}</h3>
                  <p className="contact-value">{method.value}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <p>© 2026 Beknur Sailaukhan. Создано с React, TypeScript и SCSS</p>
      </div>
    </section>
  );
};

export default Contact;
