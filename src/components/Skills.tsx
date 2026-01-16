import { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone, Layout, Database, GitBranch, Wrench } from 'lucide-react';
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
    items: ['React', 'Vue 2/3', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3/SCSS']
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile',
    items: ['React Native', 'Flutter', 'Cross-platform']
  },
  {
    icon: <Layout size={32} />,
    title: 'Styling',
    items: ['Tailwind CSS', 'Styled Components', 'Responsive Design', 'Pixel Perfect']
  },
  {
    icon: <Database size={32} />,
    title: 'Backend',
    items: ['Python/Django', 'C#/ASP.NET', 'PHP/Laravel', 'REST API']
  },
  {
    icon: <GitBranch size={32} />,
    title: 'Version Control',
    items: ['Git', 'GitHub', 'GitLab', 'Code Review']
  },
  {
    icon: <Wrench size={32} />,
    title: 'Tools',
    items: ['Webpack', 'Vite', 'Firebase', 'Zustand', 'Redux']
  }
];

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      <h2 className="section-title">Навыки</h2>
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
