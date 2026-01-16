import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.scss';

interface Job {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
}

const experiences: Job[] = [
  {
    company: 'Group of Companies Resmi',
    position: 'Flutter Developer',
    period: 'май 2025 - декабрь 2025',
    location: 'Алматы, Казахстан',
    description: 'Работал мобильным разработчиком на Flutter в финтех компании, поддерживал существующие проекты на React Native и мигрировал его код на Flutter. Занимался поддержкой сайта на Vue, работал с бэкендом и рефакторил код.',
    stack: ['Flutter', 'Flutter Flavor', 'React Native', 'Vue.js', 'C# (ASP)', 'Python (Django)']
  },
  {
    company: '1st Media Group',
    position: 'Frontend Web Developer',
    period: 'сентябрь 2024 - апрель 2025',
    location: 'Алматы, Казахстан',
    description: 'Занимался поддержкой существующих проектов на Vue и React Native. Создавал новые проекты на Vue и Flutter.',
    stack: ['Flutter', 'Vue3', 'TypeScript', 'React Native', 'C# (ASP)']
  },
  {
    company: 'AI SYSTEMS LTD',
    position: 'Frontend Developer',
    period: 'март 2024 - август 2024',
    location: 'Алматы, Казахстан',
    description: 'Создавал веб-сайты и мобильные приложения на Flutter и React Native.',
    stack: ['Flutter', 'React Native', 'TypeScript']
  },
  {
    company: 'Unity consulting',
    position: 'Frontend Web Developer',
    period: 'апрель 2023 - март 2024',
    location: 'Алматы, Казахстан',
    description: 'Занимался версткой сайтов и доработкой существующих. Работал с трафиком в Keitaro. Поддерживал мобильное приложение на React Native и переписывал его под Flutter. Занимался дизайном.',
    stack: ['Vue', 'Flutter', 'PHP (Laravel)', 'React Native']
  },
  {
    company: 'BLACK TREE GAMING LIMITED',
    position: 'Frontend Web Developer',
    period: 'апрель 2022 - март 2023',
    location: 'Лондон, Великобритания',
    description: 'Создавал новые сайты и дорабатывал легаси. Занимался десктопными и мобильными приложениями. Десктоп писали на Electron.',
    stack: ['React', 'React Native', 'Flutter', 'Electron', 'Elixir']
  },
  {
    company: 'ТОО «INVIVO»',
    position: 'HTML-верстальщик',
    period: 'декабрь 2021 - март 2022',
    location: 'Алматы, Казахстан',
    description: 'Верстал лендинги и дорабатывал существующие сайты. Работал с legacy кодом и внедрял разные технологии. Работал с 3D.',
    stack: ['React', 'Three.js', 'jQuery']
  }
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
  }, []);

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Опыт работы</h2>
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
                <h3 className="job-position">{job.position}</h3>
                <h4 className="job-company">{job.company}</h4>
                <div className="job-meta">
                  <span className="job-period">
                    <Calendar size={16} />
                    {job.period}
                  </span>
                  <span className="job-location">{job.location}</span>
                </div>
                <p className="job-description">{job.description}</p>
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
