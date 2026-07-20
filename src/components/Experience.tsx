import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Translations } from '../translations';
import './Experience.scss';

interface Job {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
}

const getExperiences = (t: Translations): Job[] => [
  {
    ...t.jobs.nomalytica,
    stack: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'React',
      'Flutter',
      'Vite',
      'Tauri',
      'SCSS',
    ],
  },
  {
    ...t.jobs.respublica,
    stack: ['Flutter', 'Flutter Flavor', 'React Native', 'Vue.js', 'Python (Django)', 'React'],
  },
  {
    ...t.jobs.media,
    stack: ['Flutter', 'Vue3', 'TypeScript', 'NestJS'],
  },
  {
    ...t.jobs.ai,
    stack: ['React Native', 'Flutter', 'Python (FastAPI)', 'Vue3'],
  },
  {
    ...t.jobs.unity,
    stack: ['Vue', 'Flutter', 'PHP (Laravel)', 'React Native'],
  },
  {
    ...t.jobs.blacktree,
    stack: ['React', 'Python (Django)', 'Flutter', 'Electron', 'Elixir'],
  },
  {
    ...t.jobs.invivo,
    stack: ['React', 'Three.js', 'jQuery'],
  },
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { t, language, isChanging } = useLanguage();
  const experiences = getExperiences(t);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemsRef.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [language]);

  return (
    <section id="experience" className="experience">
      <h2 className={`section-title text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
        {t.experience.title}
      </h2>
      <div className="timeline">
        {experiences.map((job, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`timeline-item ${visibleItems.has(index) ? 'visible' : ''} ${
              index % 2 === 0 ? 'left' : 'right'
            }`}
          >
            <div className="timeline-content">
              <div className="timeline-icon">
                <Briefcase size={24} />
              </div>
              <div className="job-card">
                <h3 className={`job-position text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
                  {job.position}
                </h3>
                <h4 className={`job-company text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
                  {job.company}
                </h4>
                <div className="job-meta">
                  <span className={`job-period text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
                    <Calendar size={16} />
                    {job.period}
                  </span>
                  <span className={`job-location text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
                    {job.location}
                  </span>
                </div>
                <p className={`job-description text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
                  {job.description}
                </p>
                <div className="job-stack">
                  {job.stack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
