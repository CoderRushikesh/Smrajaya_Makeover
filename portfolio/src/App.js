import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import myImage from './photo/my.png';
import resume from './photo/image.png'
import Footer from './Components/Footer.js'

/* ─── DATA ─────────────────────────────────────────────── */
const NAV_LINKS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

const SKILLS = {
  Backend: ['Java 8+', 'Spring Boot', 'Spring Security', 'Hibernate', 'Microservices', 'RESTful APIs', 'OAuth2.0', 'JWT', 'JPA', 'Eureka', 'Circuit Breaker', 'Design Patterns'],
  Frontend: ['React.js', 'Redux', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive Design', 'Vite'],
  'Cloud / DevOps': ['AWS EC2', 'AWS S3', 'Lambda', 'API Gateway', 'Docker', 'Jenkins CI/CD', 'Linux'],
  'Database & Cache': ['MySQL', 'Redis', 'ActiveMQ'],
  Testing: ['JUnit', 'Mockito'],
  Tools: ['Git', 'GitHub', 'IntelliJ IDEA', 'Postman', 'JIRA'],
};

const EXPERIENCES = [
  {
    role: 'Java Developer Intern',
    company: 'HH Tech',
    period: 'Oct 2025 – Dec 2025',
    location: 'Hyderabad',
    type: 'Internship',
    color: '#7c6af7',
    bullets: [
      'Built end-to-end PayPal Standard Checkout REST API using Java Spring Boot in a microservices architecture on AWS EC2',
      'Implemented OAuth 2.0 and JWT token-based security; integrated Redis caching — improving API response time by 40%',
      'App handled 1,000+ daily requests via Docker deployment on AWS EC2',
    ],
  },
  {
    role: 'Java Full Stack Intern',
    company: 'Robowaves',
    period: 'Feb 2025 – Aug 2025',
    location: 'Remote',
    type: 'Internship',
    color: '#f7a26a',
    bullets: [
      'Developed client-server Java applications using Spring Boot and React.js',
      'Integrated responsive UI components with backend RESTful APIs',
      'Contributed to SaaS application development with modular backend services',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Self-Employed',
    period: '2024 – Present',
    location: 'Remote',
    type: 'Freelance',
    color: '#22c97a',
    bullets: [
      'Delivered end-to-end full stack web applications for clients',
      'Deployed live projects on Netlify and Runway with complete ownership',
      'Managed client communication, sprint delivery and post-launch support',
    ],
  },
];

const PROJECTS = [
  {
    title: 'Samrajya Makeover',
    subtitle: 'Beauty Parlour — Full Stack Web App',
    desc: 'End-to-end full stack platform for a beauty parlour. Built responsive React.js frontend with Spring Boot backend, featuring Spring Security, OAuth2.0, JWT auth, Redis caching, and Eureka service discovery. Deployed on Netlify (frontend) and Runway (backend).',
    stack: ['React.js', 'Spring Boot', 'Spring Security', 'OAuth2.0', 'JWT', 'Redis', 'Eureka', 'Netlify', 'Runway'],
    live: 'https://samrajyamakeover.netlify.app',
    github: 'https://github.com/CoderRushikesh/SmrajyaMakeOver_Backend',
    color: '#f7a26a',
    icon: '💅',
    tag: 'Freelance · Full Stack',
    highlight: true,
  },
  {
    title: 'PayPal Provider API',
    subtitle: 'Secure Payment Microservice',
    desc: 'Secure payment microservice with Create/Capture Order APIs deployed on AWS EC2 via Docker and API Gateway. Implemented OAuth2.0, JWT auth, compliance checks, and Redis caching — serving 1,000+ daily requests with optimized throughput.',
    stack: ['Java', 'Spring Boot', 'AWS EC2', 'Docker', 'API Gateway', 'OAuth2.0', 'JWT', 'Redis'],
    live: null,
    github: 'https://github.com/CoderRushikesh/paypal_provider_api',
    color: '#7c6af7',
    icon: '💳',
    tag: 'Backend · AWS · Microservices',
    highlight: false,
  },
  {
    title: 'Samrajya Makeover Backend',
    subtitle: 'Microservices Backend · Cloud Deployed',
    desc: 'Production backend for the Samrajya Makeover platform. Microservices architecture with Spring Security, OAuth2.0, JWT tokens, Redis caching, and Eureka Client/Server for service discovery. Deployed on AWS with complete cloud infra ownership.',
    stack: ['Spring Boot', 'Microservices', 'Spring Security', 'JWT', 'Redis', 'Eureka', 'AWS', 'Docker'],
    live: null,
    github: 'https://github.com/CoderRushikesh/SmrajyaMakeOver_Backend',
    color: '#22c97a',
    icon: '☁️',
    tag: 'Backend · Cloud · Security',
    highlight: false,
  },
  {
    title: 'Food Delivery Web App',
    subtitle: 'Frontend · React + Redux',
    desc: 'Responsive food delivery frontend built with React.js, Redux state management and Vite. Features cart management, product filtering, order tracking, and integrated backend REST APIs.',
    stack: ['React.js', 'Redux', 'Vite', 'JavaScript', 'REST APIs', 'CSS3'],
    live: null,
    github: 'https://github.com/CoderRushikesh/Food-Delivery-Website',
    color: '#e85d5d',
    icon: '🍕',
    tag: 'Frontend · React · Redux',
    highlight: false,
  },
];

const ACHIEVEMENTS = [
  { icon: '⚡', title: '40% API Response Improvement', desc: 'Redis caching integration at HH Tech' },
  { icon: '🚀', title: '1,000+ Daily Requests', desc: 'PayPal microservice on AWS EC2 via Docker' },
  { icon: '💻', title: '80+ LeetCode Problems', desc: 'Data Structures & Algorithms' },
  { icon: '🎯', title: '4 Live Deployed Projects', desc: 'Portfolio of real-world applications' },
];

/* ─── HOOK: useInView ───────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── COMPONENTS ────────────────────────────────────────── */

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo" onClick={() => handleNav('Home')}>
        <span className="navbar__logo-bracket">&lt;</span>RK<span className="navbar__logo-bracket">/&gt;</span>
      </div>
      <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {NAV_LINKS.map(l => (
          <button key={l} className={`navbar__link ${active === l ? 'navbar__link--active' : ''}`} onClick={() => handleNav(l)}>{l}</button>
        ))}
      </div>
      <div className="navbar__cta">
        <a href="https://www.linkedin.com/in/rushikesh-kamble-605a38293/" target="_blank" rel="noreferrer" className="btn btn--sm">Hire Me</a>
      </div>
      <button className="navbar__burger" onClick={() => setMenuOpen(m => !m)} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

function HeroSection() {
  const [typed, setTyped] = useState('');
  const titles = ['Java Full Stack Developer', 'Backend Engineer','front end developer', 'Spring Boot Specialist', 'AWS Cloud Developer'];
  const [ti, setTi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[ti];
    let timeout;
    if (!deleting && typed === current) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typed === '') {
      setDeleting(false);
      setTi(t => (t + 1) % titles.length);
    } else {
      timeout = setTimeout(() => {
        setTyped(prev => deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1));
      }, deleting ? 40 : 80);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, ti]); // eslint-disable-line

  return (
    <section id="home" className="hero">
      {/* Subtle dot grid background */}
      <div className="hero__dot-grid" />
      {/* Light color blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="hero__content">
        {/* LEFT: Photo */}
        <div className="hero__photo-col animate-slide-in-left">
          <div className="hero__photo-wrap">
            <div className="hero__photo-shadow" />
            <div className="hero__photo-frame">
              <img
                src={myImage}
                alt="Rushikesh Kamble"
                className="hero__photo-img"
                onError={e => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Rushikesh+Kamble&background=7c6af7&color=fff&size=400&bold=true&font-size=0.35';
                }}
              />
            </div>
            {/* floating tech badges */}
            <div className="hero__tech-badge hero__tech-badge--1">☕ Java</div>
            <div className="hero__tech-badge hero__tech-badge--2">☁️ AWS</div>
            <div className="hero__tech-badge hero__tech-badge--3">⚛️ React</div>
            <div className="hero__tech-badge hero__tech-badge--4">🐳 Docker</div>
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="hero__text-col">
          <div className="hero__badge animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero__name animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Rushikesh<br /><span className="hero__name-accent">Kamble</span>
          </h1>

          <div className="hero__typewriter animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <span className="hero__typewriter-text">{typed}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__tagline animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Building scalable microservices, secure REST APIs, and cloud-deployed applications.
            2 internships · Freelance · Live projects on AWS.
          </p>

          <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.65s' }}>
            <a
              href="#projects"
              className="btn btn--primary"
              onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn--outline"
              onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Contact Me
            </a>
          </div>

          <div className="hero__socials animate-fade-up" style={{ animationDelay: '0.8s' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/CoderRushikesh', icon: GitHubIcon },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rushikesh-kamble-605a38293/', icon: LinkedInIcon },
              { label: 'LeetCode', href: 'https://leetcode.com/ItsRushi_', icon: CodeIcon },
            ].map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="hero__social" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>

          {/* Mini stats row */}
          <div className="hero__mini-stats animate-fade-up" style={{ animationDelay: '0.95s' }}>
            {[
              { val: '2+', label: 'Internships' },
              { val: '4+', label: 'Live Projects' },
              { val: '40%', label: 'API Boost' },
              { val: '80+', label: 'LeetCode' },
            ].map(({ val, label }) => (
              <div key={label} className="hero__mini-stat">
                <span className="hero__mini-stat-val">{val}</span>
                <span className="hero__mini-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll"
        onClick={e => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-arrow" />
      </a>
    </section>
  );
}

function AboutSection() {
  const [ref, visible] = useInView();
  return (
    <section id="about" className="section section--alt" ref={ref}>
      <div className={`container about-grid ${visible ? 'visible' : ''}`}>
        <div className="about__img-col">
          <div className="about__img-wrap">
         <img
  src={resume}
  alt="Rushikesh Kamble"
  onError={e => {
    e.target.src = 'https://ui-avatars.com/api/?name=Rushikesh+Kamble&background=7c6af7&color=fff&size=300&bold=true&font-size=0.35';
  }}
/>



            <div className="about__img-deco" />
          </div>
          <div className="about__achievements">
            {ACHIEVEMENTS.map(a => (
              <div key={a.title} className="about__achievement">
                <span className="about__achievement-icon">{a.icon}</span>
                <div>
                  <div className="about__achievement-title">{a.title}</div>
                  <div className="about__achievement-desc">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__text-col">
          <p className="section__label">About Me</p>
          <h2 className="section__title">Crafting backends<br /><span className="accent">that actually scale</span></h2>
          <p className="about__body">
            I'm a <strong>Full Stack Java Developer</strong> from Aurangabad, Maharashtra — fresher with
            real production experience. During my internship at HH Tech, I independently integrated
            a PayPal payment gateway handling <strong>1,000+ daily requests</strong> with Redis-optimised
            APIs running on AWS EC2.
          </p>
          <p className="about__body">
            I believe in writing clean, modular code backed by solid architecture. My stack runs from
            <strong> Spring Boot microservices</strong> and <strong>OAuth2.0 security</strong> on the backend
            to <strong>React.js</strong> on the frontend, tied together with Docker and AWS on the cloud.
          </p>
          <div className="about__meta">
            {[
              { label: 'Degree', value: 'B.Sc Computer Science' },
              { label: 'University', value: 'BAMU, Aurangabad' },
              { label: 'Batch', value: '2021 – 2024' },
              { label: 'Status', value: 'Immediate Joiner' },
            ].map(m => (
              <div key={m.label} className="about__meta-item">
                <span className="about__meta-label">{m.label}</span>
                <span className="about__meta-value">{m.value}</span>
              </div>
            ))}
          </div>
          <div className="about__certs">
            {['Java Full Stack – JSpiders', 'Backend Intern – HH Tech', 'AI – Great Learning'].map(c => (
              <span key={c} className="cert-tag">{c}</span>
            ))}
          </div>
          <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noreferrer" className="btn btn--primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
            Download Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const [ref, visible] = useInView();
  return (
    <section id="skills" className="section" ref={ref}>
      <div className={`container ${visible ? 'visible' : ''}`}>
        <div className="section__header">
          <p className="section__label">What I Know</p>
          <h2 className="section__title">Technical <span className="accent">Skills</span></h2>
        </div>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([cat, items], ci) => (
            <div key={cat} className="skill-card" style={{ animationDelay: `${ci * 0.1}s` }}>
              <div className="skill-card__header">
                <span className="skill-card__cat">{cat}</span>
                <span className="skill-card__count">{items.length}</span>
              </div>
              <div className="skill-card__tags">
                {items.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [ref, visible] = useInView();
  return (
    <section id="experience" className="section section--alt" ref={ref}>
      <div className={`container ${visible ? 'visible' : ''}`}>
        <div className="section__header">
          <p className="section__label">My Journey</p>
          <h2 className="section__title">Work <span className="accent">Experience</span></h2>
        </div>
        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="timeline__connector">
                <div className="timeline__dot" style={{ background: exp.color, boxShadow: `0 0 16px ${exp.color}55` }} />
              </div>
              <div className="timeline__card">
                <div className="timeline__card-accent" style={{ background: exp.color }} />
                <div className="timeline__top">
                  <div>
                    <span className="timeline__type" style={{ color: exp.color }}>{exp.type}</span>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="timeline__period">{exp.period}</span>
                </div>
                <ul className="timeline__bullets">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi}><span style={{ color: exp.color }}>→</span> {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [ref, visible] = useInView();
  return (
    <section id="projects" className="section" ref={ref}>
      <div className={`container ${visible ? 'visible' : ''}`}>
        <div className="section__header">
          <p className="section__label">What I've Built</p>
          <h2 className="section__title">Featured <span className="accent">Projects</span></h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className={`project-card ${p.highlight ? 'project-card--featured' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="project-card__top">
                <div className="project-card__icon" style={{ background: `${p.color}15`, borderColor: `${p.color}30` }}>
                  <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
                </div>
                {p.highlight && <span className="project-card__badge" style={{ background: p.color }}>★ Freelance</span>}
                <span className="project-card__tag">{p.tag}</span>
              </div>
              <h3 className="project-card__title" style={{ color: p.color }}>{p.title}</h3>
              <p className="project-card__subtitle">{p.subtitle}</p>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__stack">
                {p.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
              </div>
              <div className="project-card__links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-link proj-link--live">
                    <ExternalIcon /> Live Demo
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-link proj-link--gh">
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, visible] = useInView();
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText('rushikamble462@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact" className="section section--alt" ref={ref}>
      <div className={`container contact-wrap ${visible ? 'visible' : ''}`}>
        <div className="section__header">
          <p className="section__label">Get In Touch</p>
          <h2 className="section__title">Let's <span className="accent">Connect</span></h2>
        </div>
        <p className="contact__subtitle">Open to Java Developer, Backend, and Full Stack roles. Immediate joiner. Let's build something great together.</p>
        <div className="contact-cards">
          {[
            { icon: '📧', label: 'Email', value: 'rushikamble462@gmail.com', action: copy, actionLabel: copied ? 'Copied!' : 'Copy' },
            { icon: '📱', label: 'Phone', value: '+91 7709200299', href: 'tel:+917709200299' },
            { icon: '📍', label: 'Location', value: 'Aurangabad, Maharashtra', sub: 'Open to relocate' },
          ].map(c => (
            <div key={c.label} className="contact-card">
              <span className="contact-card__icon">{c.icon}</span>
              <div>
                <div className="contact-card__label">{c.label}</div>
                <div className="contact-card__val">{c.value}</div>
                {c.sub && <div className="contact-card__sub">{c.sub}</div>}
              </div>
              {c.action && <button onClick={c.action} className="btn btn--sm">{c.actionLabel}</button>}
              {c.href && <a href={c.href} className="btn btn--sm">Call</a>}
            </div>
          ))}
        </div>
        <div className="contact__links">
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rushikesh-kamble-605a38293/', color: '#0a66c2' },
            { label: 'GitHub', href: 'https://github.com/CoderRushikesh', color: '#1a1a2e' },
            { label: 'LeetCode', href: 'https://leetcode.com/ItsRushi_', color: '#f7a26a' },
            { label: 'Portfolio', href: 'https://myselfrushi.netlify.app', color: '#7c6af7' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="contact__link" style={{ borderColor: `${l.color}44`, color: l.color }}>
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer__logo"><span className="navbar__logo-bracket">&lt;</span>RK<span className="navbar__logo-bracket">/&gt;</span></div>
//         <p className="footer__text">Built with React.js · Designed & Developed by Rushikesh Kamble</p>
//         <p className="footer__copy">© {new Date().getFullYear()} Rushikesh Kamble. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

/* ─── ICONS ─────────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.112-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.038-1.9l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.834-1.452l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039z" />
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ─── APP ───────────────────────────────────────────────── */
export default function App() {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(l.toLowerCase()));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1));
      });
    }, { threshold: 0.4 });
    sections.forEach(s => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar active={active} setActive={setActive} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
    </div>
  );
}
