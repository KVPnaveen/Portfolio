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
          if (rect.top <= 120 && rect.bottom >= 120) {
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
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 lg:px-8',
          scrolled 
            ? 'border-black/5 bg-[#FAFAFA]/85 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:border-white/5 dark:bg-[#080808]/85 dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]' 
            : 'border-transparent bg-transparent dark:border-transparent dark:bg-transparent'
        )}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 text-lg font-bold tracking-tight transition duration-300 hover:opacity-90">
            <img 
              src="/images/NM.png" 
              alt="Naveen Madhawa Logo" 
              className="h-8 w-8 object-contain rounded-md logo-glow-anim"
            />
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent font-black tracking-tight text-[17px]">
              Naveen Madhawa
            </span>
          </a>
 
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={cn(
                  'relative text-base font-medium transition duration-200 py-1.5',
                  activeSection === item.href.slice(1)
                    ? 'text-orange-500 font-semibold'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                )}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="active-nav-line" />
                )}
              </a>
            ))}
            
            {/* Theme Toggle - Styled to match space aesthetic */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-slate-600 transition duration-200 hover:bg-black/10 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
              aria-label="Toggle cosmic theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
 
          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-slate-600 transition duration-200 hover:bg-black/10 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
              aria-label="Toggle cosmic theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-slate-600 transition duration-200 hover:bg-black/10 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </nav>
 
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="mx-auto mt-2 max-w-6xl animate-in fade-in slide-in-from-top-2 rounded-2xl border border-black/10 bg-[#FAFAFA]/95 dark:border-white/10 dark:bg-[#080808]/95 px-4 py-4 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-base font-medium transition duration-200',
                    activeSection === item.href.slice(1)
                      ? 'bg-orange-500/10 text-orange-500 font-semibold'
                      : 'text-slate-600 hover:bg-black/5 hover:text-black dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-24 sm:h-28" />
    </>
  );
};

export default Navbar;
