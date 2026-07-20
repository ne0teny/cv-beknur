import { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone, Layout, Database, Monitor, GitBranch } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Skills.scss';

interface Skill {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const skills: Skill[] = [
  {
    icon: <Code2 size={32} />,
    title: 'Frontend',
    items: ['React', 'Vue 2/3', 'TypeScript', 'JavaScript', 'Vite', 'SCSS', 'HTML5'],
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile',
    items: ['Flutter', 'Flutter Flavor', 'React Native', 'Cross-platform'],
  },
  {
    icon: <Database size={32} />,
    title: 'Backend & DB',
    items: ['NestJS', 'Python (Django, FastAPI)', 'PostgreSQL', 'Redis', 'MongoDB', 'Elixir'],
  },
  {
    icon: <Monitor size={32} />,
    title: 'Desktop',
    items: ['Tauri', 'Electron', 'Cross-platform apps'],
  },
  {
    icon: <Layout size={32} />,
    title: 'Other',
    items: ['PHP (Laravel)', 'Three.js', 'REST API', 'Responsive Design'],
  },
  {
    icon: <GitBranch size={32} />,
    title: 'Tools',
    items: ['Git', 'GitHub', 'GitLab', 'Code Review', 'Keitaro'],
  },
];

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { t, isChanging } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <h2 className={`section-title text-transition ${isChanging ? 'fade-out' : 'fade-in'}`}>
        {t.skills.title}
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`skill-card ${visibleCards.has(index) ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <ul className="skill-items">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
