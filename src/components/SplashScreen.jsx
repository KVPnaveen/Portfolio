import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const SplashScreen = ({ onComplete }) => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [loadingText, setLoadingText] = useState('Loading Experience...');

  useEffect(() => {
    // Percentage text increment timings
    const t25 = setTimeout(() => setLoadingText('Loading Experience... 25%'), 400);
    const t50 = setTimeout(() => setLoadingText('Loading Experience... 50%'), 800);
    const t75 = setTimeout(() => setLoadingText('Loading Experience... 75%'), 1200);
    const t100 = setTimeout(() => setLoadingText('Loading Experience... 100%'), 1600);
    const tWelcome = setTimeout(() => setLoadingText('Welcome'), 2000);

    // Start fade out transition after 2.3 seconds
    const fadeTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2300);

    // Completely remove splash screen from DOM after 2.9 seconds
    const destroyTimeout = setTimeout(() => {
      setShouldRender(false);
      if (onComplete) onComplete();
    }, 2900);

    return () => {
      clearTimeout(t25);
      clearTimeout(t50);
      clearTimeout(t75);
      clearTimeout(t100);
      clearTimeout(tWelcome);
      clearTimeout(fadeTimeout);
      clearTimeout(destroyTimeout);
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAFA] dark:bg-[#080808] transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full glow-orb-orange blur-[120px] opacity-40 dark:opacity-100" />
        <div className="absolute -right-32 -bottom-32 h-[30rem] w-[30rem] rounded-full glow-orb-cyan blur-[120px] opacity-40 dark:opacity-100" />
      </div>

      {/* Main Greeting Block */}
      <div className="text-center px-4 animate-splash-fade-in select-none">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-800 dark:text-slate-200 tracking-tight leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-[#FF8A00] to-[#ffaa44] bg-clip-text text-transparent">Naveen Madhawa</span>
        </h1>
        <p className="mt-4 text-base sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-semibold tracking-widest uppercase">
          Welcome to my portfolio
        </p>
      </div>

      {/* Premium Loading Progress Bar & Centered Text Status */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <p className="text-xs sm:text-sm font-mono tracking-widest text-slate-500 dark:text-slate-400 font-medium min-h-[20px] select-none">
          {loadingText}
        </p>
        <div className="w-48 h-[2px] bg-slate-200 dark:bg-neutral-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#FF8A00] to-orange-400 w-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
