import { useEffect, useState } from 'react';
import { FaArrowRight, FaEnvelope, FaDownload } from 'react-icons/fa';

const ROTATING_TITLES = [
  'Full Stack Developer',
  'Mobile Developer',
  'Aspiring Software Engineer',
  'Tech Enthusiast',
];

const Hero = () => {
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTitleIndex((currentIndex) => (currentIndex + 1) % ROTATING_TITLES.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="min-h-[calc(100vh-3rem)] lg:min-h-screen w-full flex items-center justify-center pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8 snap-start snap-always relative z-10">
      <div className="grid gap-4 sm:gap-6 lg:gap-12 lg:grid-cols-12 lg:items-center w-full max-w-6xl">
        {/* Profile Picture Frame: Order 1 on mobile, Order 2 on desktop */}
        <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center items-center py-2 sm:py-4 lg:h-[500px]">
          {/* Main Logo Card Frame */}
          <div className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] p-2 rounded-full bg-white/80 border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:bg-white/[0.02] dark:border-white/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden transition-all duration-300">
            <img
              src="/images/Naveen.png"
              alt="Naveen Madhawa Brand Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Text & Details: Order 2 on mobile (under picture), Order 1 on desktop */}
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Active indicator status */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-3.5 py-1.5 sm:px-4.5 sm:py-2 text-xs sm:text-sm font-semibold text-orange-500 backdrop-blur-md shadow-[0_0_15px_rgba(255,138,0,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>Available for new projects</span>
          </div>
 
          {/* Heading */}
          <h1 className="mt-3 sm:mt-5 text-3xl sm:text-5xl lg:text-[72px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Naveen Madhawa
          </h1>
 
          {/* Subheading with rotating text */}
          <div className="mt-2 sm:mt-4 h-8 sm:h-12 overflow-hidden text-lg sm:text-[28px] lg:text-3xl font-bold text-slate-700 dark:text-slate-300">
            <span className="text-orange-500 mr-2">I am a</span>
            <span
              key={activeTitleIndex}
              className="inline-block animate-[fadeSlide_2.2s_ease-in-out] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-black"
            >
              {ROTATING_TITLES[activeTitleIndex]}
            </span>
          </div>
 
          {/* Description */}
          <p className="mt-3 sm:mt-6 max-w-2xl text-xs sm:text-base lg:text-[18px] leading-relaxed text-slate-600 dark:text-slate-400">
            Dedicated to coding, developing impactful projects, and expanding my knowledge in new technologies.
          </p>
 
          {/* Call-to-actions */}
          <div className="mt-4 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-4.5 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF8A00] px-4.5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-base font-bold text-white shadow-[0_4px_20px_rgba(255,138,0,0.3)] transition-all duration-300 hover:bg-[#ff9d24] hover:shadow-[0_4px_30px_rgba(255,138,0,0.5)] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap min-w-[130px] sm:min-w-[170px]"
            >
              <span>View Projects</span>
              <FaArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
            </a>

            <a
              href="/assets/Naveen_Madhawa_CV.pdf"
              download="Naveen_Madhawa_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Naveen Madhawa's CV"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#FF8A00]/30 bg-[#FF8A00]/5 px-4.5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-base font-bold text-slate-800 dark:text-slate-200 hover:bg-[#FF8A00]/10 hover:border-[#FF8A00]/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap min-w-[130px] sm:min-w-[170px]"
            >
              <FaDownload className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[#FF8A00]" />
              <span>Download CV</span>
            </a>
 
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-black/5 px-4.5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-base font-bold text-slate-700 hover:bg-black/10 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap min-w-[130px] sm:min-w-[170px]"
            >
              <FaEnvelope className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
