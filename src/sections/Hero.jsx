import { useEffect, useState } from 'react';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

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
    <section id="home" className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 relative z-10">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Active indicator status */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4.5 py-2 text-sm font-semibold text-orange-500 backdrop-blur-md shadow-[0_0_15px_rgba(255,138,0,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>Available for new projects</span>
          </div>
 
          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-[72px] leading-tight">
            Naveen Madhawa
          </h1>
 
          {/* Subheading with rotating text */}
          <div className="mt-5 h-12 overflow-hidden text-2xl font-bold text-slate-700 dark:text-slate-300 sm:text-[28px] lg:text-3xl">
            <span className="text-orange-500 mr-2">I am a</span>
            <span
              key={activeTitleIndex}
              className="inline-block animate-[fadeSlide_2.2s_ease-in-out] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-black"
            >
              {ROTATING_TITLES[activeTitleIndex]}
            </span>
          </div>
 
          {/* Description */}
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[18px]">
            Dedicated to coding, developing impactful projects, and expanding my knowledge in new technologies.
          </p>
 
          {/* Call-to-actions */}
          <div className="mt-10 flex flex-wrap gap-4.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF8A00] px-7 py-4 text-base font-bold text-white shadow-[0_4px_20px_rgba(255,138,0,0.3)] transition-all duration-300 hover:bg-[#ff9d24] hover:shadow-[0_4px_30px_rgba(255,138,0,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Projects</span>
              <FaArrowRight className="h-4 w-4" />
            </a>
 
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-black/5 text-slate-700 hover:bg-black/10 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaEnvelope className="h-4 w-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Column: Large brand logo frame */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[400px] lg:h-[500px]">
          {/* Main Logo Card Frame (Minimal, professional, static circular container) */}
          <div className="relative z-10 w-72 h-72 sm:w-[24rem] sm:h-[24rem] md:w-[26rem] md:h-[26rem] lg:w-[28rem] lg:h-[28rem] p-2 rounded-full bg-white/80 border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:bg-white/[0.02] dark:border-white/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden transition-all duration-300">
            <img
              src="/images/Naveen.png"
              alt="Naveen Madhawa Brand Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
