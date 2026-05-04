import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import useScroll from '../hooks/useScroll';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../utils/helpers';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrolled = useScroll(16);
  const { isDark, toggleTheme } = useTheme();

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed navbar */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
        <nav className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-4 backdrop-blur-xl transition-all duration-200 sm:px-6 lg:px-8',
          scrolled 
            ? 'border-slate-300/70 bg-white/75 shadow-lg shadow-slate-900/5 dark:border-slate-700/70 dark:bg-slate-900/65 dark:shadow-black/20' 
            : 'border-slate-200/60 bg-white/65 dark:border-slate-800/70 dark:bg-slate-900/50'
        )}>
          {/* Logo */}
          <a href="#home" className="text-lg font-bold tracking-tight text-slate-900 transition hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-300">
            Naveen Madhawa
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={cn(
                  'relative text-sm font-medium transition',
                  activeSection === item.href.slice(1)
                    ? 'text-indigo-600 dark:text-indigo-300'
                    : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300'
                )}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-300" />
                )}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 transition duration-200 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 transition duration-200 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="mx-auto mt-2 max-w-6xl animate-in fade-in slide-in-from-top-2 rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-4 shadow-lg backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/90 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium transition',
                    activeSection === item.href.slice(1)
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content overlap - adjusts height based on navbar */}
      <div className="h-28 sm:h-32 md:h-24" />
    </>
  );
};

export default Navbar;
