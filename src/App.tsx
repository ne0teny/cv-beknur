import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.scss';

function App() {
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="app">
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="particles">
          {particles.map((i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>

      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
