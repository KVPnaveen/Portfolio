import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
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
  const scrolled = useScroll(16);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className={cn('mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-4 backdrop-blur-xl transition-all sm:px-6 lg:px-8', scrolled ? 'border-slate-300/70 bg-white/75 shadow-lg shadow-slate-900/5 dark:border-slate-700/70 dark:bg-slate-900/65 dark:shadow-black/20' : 'border-slate-200/60 bg-white/65 dark:border-slate-800/70 dark:bg-slate-900/50')}>
        <a href="#home" className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Naveen Madhawa
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300">
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-4 shadow-lg backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/90 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
