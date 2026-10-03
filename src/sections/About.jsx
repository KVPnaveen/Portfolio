import TechnologiesSection from '../components/TechnologiesSection';

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 snap-start snap-always relative z-10">
      {/* Combined About & Technologies Card */}
      <div className="glass-card w-full max-w-5xl rounded-3xl p-6 lg:p-10 border border-black/5 bg-white/80 shadow-2xl dark:bg-[#0f0f0f]/60 dark:border-white/5 dark:shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
        {/* About Me Section - Centered */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-[0.2em] text-orange-500 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-8 text-[17px] leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[18px]">
            I'm Naveen Madhawa, a third-year Computer Science undergraduate and an aspiring software engineer passionate about full-stack and mobile development. I love building creative projects, learning new technologies, and turning ideas into real-world applications.
          </p>
        </div>

        <TechnologiesSection />
      </div>
    </section>
  );
};

export default About;
