/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Terminal, 
  Code2, 
  Layers, 
  Database, 
  Cloud, 
  CheckCircle2, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Send,
  Linkedin,
  Twitter
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: { demo?: string; github?: string; caseStudy?: string };
  size?: 'large' | 'small';
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Fintech Pulse Dashboard",
    description: "A real-time financial monitoring system built with Spring Boot microservices and React. Handles 10k+ transactions per minute.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrUTjvXRMlQGQrFwJ8zWdJB9V6TR1EUQEKhKjmUFcyqzRXEEXomZk_AobArmDdKZEj91XZ6FoVktGZdDGYGfpbAD3XYBep3VpelmMzbC0F85Gx9MGraDN0i1jDzauRzrIi7kbC5hH49Ji9WXGSz-0UaHuizr5NBfLvOnNOQrVkSYGBfhVhjrzKUrd7PR0VhnqtdcMCqqd3Et2HkYcM5WYvCvagWDMExyZkor0va4xY62w_UevzEXixh42sBwmCrN8qlMO7Lu5FeUU",
    tags: ["Spring Boot", "Kafka", "React"],
    links: { demo: "#", github: "#" },
    size: 'large'
  },
  {
    id: 2,
    title: "GraphNet Analyzer",
    description: "A Python-based tool for analyzing social network clusters using machine learning algorithms.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqfHx-nhmnUomkHuYOdgthxD115eGzsg2BhtwUD-hPMOlFK8xI223eSpItJJU0kYx_NejC06cALm9tt6yEzG1tMQNMURFDfk9zAv0vAW13ikgD13Uivm5uGZ6wfMJ4scNxMNPjCb-P1JF9-I24opSKsYCJc0OR8rH3Ek8TsMKSDOX548Sx6MMS24anqzjQFqzJfTOWeEdJYgXREnB_LH21uDsept-QIQITRJEEK-6CHC5JQmpnj8KHgooGjme1h36-3CscNC-Ga8Bq",
    tags: ["Python", "Neo4j"],
    links: { demo: "#" }
  },
  {
    id: 3,
    title: "API Orchestrator",
    description: "Lightweight Node.js gateway for legacy system integration with modern mobile apps.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs5R9XvM43XQYZ1aIj-dQdAiqwfhwY6K4LZw7ffBmettr_plFvRGRFt9lTbNvswyGwYrZInN99kKYYbciRp_VCZJnb44MWYH9zaVcOF9v4LMT-snG2Dd1c0Kz_r_YUh3MS5LlKsKEbNK9A-axsbLNyAA85JOQKZjI-HkYgLcqu9-Fix7eUUUFX-TznbW1bcKVts_g0R_NLJKEmNqN57kwrOT1Lemf0A0MvjpO2zpdz2PWzS_lLTGVOmT_uaLhSzEbqEry8J9wUgXLF",
    tags: ["Node.js", "Docker"],
    links: { demo: "#" }
  },
  {
    id: 4,
    title: "SaaS Boilerplate Core",
    description: "Comprehensive backend scaffold for multi-tenant applications with RBAC and stripe integration.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4DV-FJcJbk9Pti-JILOqP3lcLXSN-6WkceJe-MJ2uGiQM9ASg4k4ixTNFuTBq1BSGEib8HctXDvCjIIyYHMbKpycywoVUgyMpTCRXAh_QI3IdVzockpIPhzmgsdt9OSsfMhQi2EsebrHoJguR_OIP7jmpVxy_z_4vd8p_VIX_kN4F-o_hzv0QUBo630qAhw-W2tA40Z-_TdeKU7ejtyNnN_vSPIyK9Ynci_fJihKUVyTeIXb1gfCE7cwXVemRTc7n6gVe1Dn9kOtq",
    tags: ["PostgreSQL", "Redis"],
    links: { caseStudy: "#" },
    size: 'large'
  }
];

const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Inova IT Systems, Colombo",
    period: "2021 — Present",
    description: "Leading a team of 5 developers in building cloud-native banking solutions. Reduced deployment latency by 40% using container orchestration.",
    type: 'work'
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "99x Technologies, Sri Lanka",
    period: "2019 — 2021",
    description: "Contributed to the development of microservices for a Scandinavian retail client. Optimized database queries resulting in a 15% performance gain.",
    type: 'work'
  },
  {
    id: 3,
    role: "BSc. in Software Engineering",
    company: "Informatics Institute of Technology (IIT)",
    period: "2016 — 2020",
    description: "Specialized in Enterprise Application Development. Graduated with First Class Honours.",
    type: 'education'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter text-on-surface">Architect.io</div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center font-sans text-sm font-semibold tracking-tight">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
            <Moon size={18} className="text-on-surface-variant" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
            <Moon size={18} className="text-on-surface-variant" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-on-surface">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface-container-lowest border-b border-outline-variant/15 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-on-surface-variant hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <span className="blueprint-label mb-4 block">Software Engineer based in Sri Lanka</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface mb-6 leading-[1.1]">
            Architecting <span className="text-primary">Robust</span> Digital Solutions.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Specializing in scalable backend systems and intuitive frontend experiences. I bridge the gap between complex engineering and elegant design.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 rounded-xl bg-primary text-surface-container-lowest font-semibold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl border border-outline-variant/30 text-primary font-semibold hover:bg-surface-container-low transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border-12 border-surface-container shadow-2xl relative z-10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy_GJK_1GV4JHXfDPk55PbT_Tly7N__Iils8sYnKZ_6pC6ckMNG3TV2vWacLiWU7fAjYqVSKjzXRisMMyIpzgnK2MwMebmbLF4r9dBGydzn3eLVGp1mp2kjxh0cDG4weHTGiM47hXsYBeUGHRgEo2Sz7P4u6oos9lcB7bDHrhxriBQpxECXadvHXQJxePKOvfT6kzV4V38qNFwaY3GFs22rTEXwGJryfST_rdDegcCPYqsUJvxzEDQ9uLFd_G4O0OFmokaa9SO7mNX" 
              alt="Professional Portrait" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-5 rounded-2xl shadow-xl border border-outline-variant/10 hidden lg:block z-20">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center">
                <Terminal size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">5+ Years</p>
                <p className="text-xs text-on-surface-variant">Engineering Experience</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <h2 className="text-4xl font-extrabold text-on-surface mb-6">The Journey of an Architect.</h2>
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
              I am a results-driven Software Engineer from the vibrant tech landscape of Colombo, Sri Lanka. My approach combines the precision of architectural thinking with the agility of modern software development.
            </p>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              My career goal is to contribute to high-impact global projects that leverage cloud-native technologies to solve real-world problems.
            </p>
            
            <div className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm">
              <h3 className="font-headline font-bold text-xl mb-4">Values I code by</h3>
              <ul className="space-y-4">
                {[
                  "Write code for humans first, machines second.",
                  "Scalability is not an afterthought; it's a foundation.",
                  "Continuous learning is the only constant."
                ].map((value, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="skills" className="space-y-12">
            <span className="blueprint-label">Technical Arsenal</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Languages", icon: <Code2 />, skills: ["Java", "Python", "JavaScript", "SQL"] },
                { title: "Frameworks", icon: <Layers />, skills: ["Spring Boot", "React", "Node.js"] },
                { title: "Databases", icon: <Database />, skills: ["MySQL", "MongoDB", "Redis"] },
                { title: "DevOps & Tools", icon: <Cloud />, skills: ["Docker", "Git", "AWS"] }
              ].map((cat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/5"
                >
                  <div className="text-primary mb-4">{cat.icon}</div>
                  <h4 className="font-bold text-on-surface mb-4">{cat.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="text-4xl font-extrabold text-on-surface mb-12">Featured Blueprints.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`project-card flex flex-col ${project.size === 'large' ? 'md:col-span-2' : ''}`}
          >
            <div className={`overflow-hidden ${project.size === 'large' ? 'aspect-video' : 'aspect-4/3'}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex flex-col grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-on-surface">{project.title}</h3>
                  <p className="text-on-surface-variant mt-2 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  {project.links.demo && (
                    <a href={project.links.demo} className="p-2 rounded-full bg-surface-container text-primary hover:bg-primary hover:text-surface-container-lowest transition-all">
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="p-2 rounded-full bg-surface-container text-primary hover:bg-primary hover:text-surface-container-lowest transition-all">
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.caseStudy && (
                <a href={project.links.caseStudy} className="mt-6 flex items-center gap-2 text-primary font-bold group">
                  Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-surface-container">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-on-surface mb-16 text-center">Career Milestones.</h2>
        <div className="relative space-y-12">
          <div className="timeline-line" />
          {EXPERIENCE.map((exp) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <div className={`timeline-dot ${exp.type === 'education' ? 'bg-outline-variant' : 'bg-primary'}`} />
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4 gap-2">
                <h3 className="text-xl font-bold text-on-surface">{exp.role}</h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${exp.type === 'education' ? 'bg-surface-container-highest text-on-surface-variant' : 'bg-primary-container text-surface-container-lowest'}`}>
                  {exp.period}
                </span>
              </div>
              <p className="text-lg font-semibold text-on-secondary-container mb-2">{exp.company}</p>
              <p className="text-on-surface-variant leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-extrabold text-on-surface mb-6">Let's build something great together.</h2>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
            Whether you have a question about my work or just want to chat about tech, my inbox is always open.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container-low transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-container-lowest transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="blueprint-label mb-1">Email</p>
                <p className="text-on-surface font-semibold">hello@architect.io</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container-low transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-container-lowest transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="blueprint-label mb-1">Location</p>
                <p className="text-on-surface font-semibold">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-surface-container-lowest rounded-3xl border border-outline-variant/10 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="name">Full Name</label>
              <input 
                className="w-full px-4 py-3 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-on-surface-variant/40" 
                id="name" 
                placeholder="John Doe" 
                type="text" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="email">Email Address</label>
              <input 
                className="w-full px-4 py-3 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-on-surface-variant/40" 
                id="email" 
                placeholder="john@example.com" 
                type="email" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="message">Message</label>
              <textarea 
                className="w-full px-4 py-3 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-on-surface-variant/40" 
                id="message" 
                placeholder="How can I help you?" 
                rows={4} 
              />
            </div>
            <button className="w-full py-4 rounded-xl bg-primary text-surface-container-lowest font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-outline-variant/15 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold text-on-surface">Architect.io</div>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Github</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Linkedin</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Email</a>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 text-center md:text-right">
          © 2024 Digital Architect. Built with Precision.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-surface min-h-screen selection:bg-primary-container selection:text-surface-container-lowest">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
