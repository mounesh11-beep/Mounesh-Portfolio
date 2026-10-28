import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si';
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Menu, Sparkles, ExternalLink } from 'lucide-react';

const navigationLinks = ['About', 'Projects', 'Skills', 'Contact'];

const skills = [
  { name: 'HTML5', type: 'Frontend', icon: SiHtml5, color: 'orange' },
  { name: 'CSS3', type: 'Frontend', icon: SiCss, color: 'blue' },
  { name: 'JavaScript', type: 'Language', icon: SiJavascript, color: 'yellow' },
  { name: 'Bootstrap', type: 'UI toolkit', icon: SiBootstrap, color: 'purple' },
  { name: 'jQuery', type: 'Library', icon: SiJquery, color: 'sky' },
  { name: 'React', type: 'Frontend', icon: SiReact, color: 'cyan' },
  { name: 'Node.js', type: 'Backend', icon: SiNodedotjs, color: 'green', learning: true },
  { name: 'Express.js', type: 'Backend', icon: SiExpress, color: 'white', learning: true },
  { name: 'MongoDB', type: 'Database', icon: SiMongodb, color: 'green', learning: true },
  { name: 'Git & GitHub', type: 'Tools', icon: SiGit, color: 'white' },
];

const projects = [
  { number: '01', name: 'AutoZone', tag: 'AUTOMOTIVE • WEB DESIGN', description: 'A car modification website concept for exploring custom styles, upgrades, and automotive inspiration.', stack: ['HTML', 'CSS', 'JavaScript'], tone: 'car', visual: ['AUTOZONE'], note: 'Built around bold automotive visuals' },
  { number: '02', name: 'Resume Builder', tag: 'PRODUCTIVITY • WEB APP', description: 'A simple resume-building experience focused on clear forms, readable layouts, and polished CV output.', stack: ['HTML', 'CSS', 'JavaScript'], tone: 'resume', visual: ['YOUR NEXT', 'CHAPTER'], note: 'A clean, focused creation flow' },
  { number: '03', name: 'FilmDesk', tag: 'FILM PRODUCTION • DASHBOARD', description: 'A film production management UI to organize projects, scenes, crew members, tasks, and production files.', stack: ['React', 'Bootstrap', 'JavaScript'], tone: 'film', visual: ['FILM', 'DESK'], note: 'Production, organized in one place' },
];

function SectionTitle({ eyebrow, title, number }) {
  return <div className="section-title"><span className="eyebrow">{number} / {eyebrow}</span><h2>{title}</h2></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dark, setDark] = React.useState(true);
  return (
    <main className={dark ? 'site dark' : 'site light'}>
      <nav className="nav container">
        <a className="brand" href="#home" aria-label="Mounesh home"><span className="brand-mark">M.</span><span>MOUNESH<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen((isOpen) => !isOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation"><Menu size={20}/></button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="primary-navigation">
          {navigationLinks.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <button className="theme-toggle" onClick={() => setDark((isDark) => !isDark)}>{dark ? 'LIGHT MODE' : 'DARK MODE'}</button>
        </div>
      </nav>

      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</div>
          <p className="intro">Hello, I'm</p>
          <h1>Mounesh <span>M.</span></h1>
          <h2 className="hero-role">MERN Stack Developer</h2>
          <p className="hero-description">I turn ideas into clean, thoughtful web experiences. I enjoy building responsive interfaces and I'm growing my skills across the full stack, one project at a time.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={16}/></a><a className="button button-quiet" href="#contact">Let's connect <ArrowDownRight size={16}/></a></div>
          <div className="hero-socials"><a href="https://github.com/mounesh11-beep" target="_blank" rel="noreferrer"><FaGithub size={17}/> GitHub</a><a href="https://linkedin.com/in/mounesh-m-" target="_blank" rel="noreferrer"><FaLinkedinIn size={17}/> LinkedIn</a><span className="hero-location"><MapPin size={16}/> Salem, Tamil Nadu, India</span></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><div className="portrait-backdrop"/><img className="portrait" src="/profile.png" alt="Portrait of Mounesh" decoding="async" fetchPriority="high" /><span className="portrait-label">MOUNESH M. <span>DEVELOPER</span></span></div>
          <div className="floating-note"><Sparkles size={15}/><span>Building what's next.</span></div>
          <div className="vertical-caption">CURIOUS BY DESIGN · BUILT WITH PURPOSE</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
      </section>

      <section className="about section container" id="about">
        <SectionTitle number="01" eyebrow="A LITTLE ABOUT ME" title={<>Curiosity first.<br/><span>Progress always.</span></>}/>
        <div className="about-content"><p className="about-lead">I'm a 2026 Mechanical Engineering graduate moving into software development, with a strong interest in building useful, user-friendly web applications.</p><div className="about-detail"><p>My current focus is MERN development with HTML, CSS, JavaScript, Bootstrap, jQuery, and React. I'm also learning backend technologies and databases as I work toward becoming a full-stack developer.</p><div className="mini-facts"><div><span>01</span><p>Learn by building</p></div><div><span>02</span><p>Keep interfaces simple</p></div><div><span>03</span><p>Improve every day</p></div></div></div></div>
      </section>

      <section className="projects section container" id="projects">
        <div className="projects-heading"><SectionTitle number="02" eyebrow="SELECTED WORK" title={<>A few things I've<br/><span>been creating.</span></>}/><p className="section-intro">Three project concepts where UI, problem-solving, and learning come together.</p></div>
        <div className="project-list">{projects.map((project) => <article className="project-card" key={project.name}>
          <div className={`project-art ${project.tone}`}><div className="art-top"><span>PROJECT {project.number}</span><span><ExternalLink size={15} aria-hidden="true"/></span></div><div className="art-graphic"><span>{project.visual.map((line, i) => <React.Fragment key={line}>{i > 0 && <br/>}{line}</React.Fragment>)}</span><div className="art-orbit"/><div className="art-line"/></div><div className="art-bottom"><span>{project.note}</span><span>MM / 2026</span></div></div>
          <div className="project-info"><div className="project-meta"><span>{project.number}</span><span>{project.tag}</span></div><h3>{project.name}<ArrowUpRight size={20}/></h3><p>{project.description}</p><div className="stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
        </article>)}</div>
      </section>

      <section className="skills section container" id="skills">
        <SectionTitle number="03" eyebrow="MY TOOLKIT" title={<>Skills I'm building<br/><span>with intention.</span></>}/>
        <p className="section-intro">The tools I use today, plus the technologies I'm currently learning.</p>
<div className="skill-grid">
  {skills.map((skill) => (
    <div className="skill-card" key={skill.name}>
      <div className={`skill-mark ${skill.color}`}>
        <skill.icon size={20} aria-hidden="true" focusable="false" />
      </div>

      <div className="skill-info">
        <h3>{skill.name}</h3>
        <p>{skill.type}</p>
      </div>
    </div>
  ))}
</div>

      </section>

      <section className="contact section container" id="contact">
        <div className="contact-panel"><div><span className="eyebrow">04 / CONTACT</span><h2>Have an idea?<br/><span>Let's build it.</span></h2><p>I'm open to entry-level developer opportunities, collaborations, and learning from great teams.</p></div><div className="contact-links"><a href="mailto:mouneshm1110@gmail.com"><span><Mail size={18}/></span><div><small>EMAIL ME</small><strong>mouneshm1110@gmail.com</strong></div><ArrowUpRight size={17}/></a><a href="https://linkedin.com/in/mounesh-m-" target="_blank" rel="noreferrer"><span><FaLinkedinIn size={18}/></span><div><small>CONNECT ON</small><strong>LinkedIn</strong></div><ArrowUpRight size={17}/></a><a href="https://github.com/mounesh11-beep" target="_blank" rel="noreferrer"><span><FaGithub size={18}/></span><div><small>SEE MY CODE</small><strong>GitHub</strong></div><ArrowUpRight size={17}/></a></div></div>
      </section>
      <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">M.</span><span>MOUNESH<span className="brand-dot">.</span></span></a><span>Designed with intent. Built with React.</span><a href="#home">BACK TO TOP ↑</a><small>© 2026 Mounesh M.</small></footer>
    </main>
  );
}
export default App;