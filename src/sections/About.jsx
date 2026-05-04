import TechnologiesSection from '../components/TechnologiesSection';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Combined About & Technologies Card */}
      <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-[0_20px_55px_-35px_rgba(15,23,42,0.35)] backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/45 lg:p-10">
        {/* About Me Section - Centered */}
        <div className="mx-auto max-w-2xl text-center">
              <p className="text-lg font-bold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            About Me
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            I'm Naveen Madhawa, a third-year Computer Science undergraduate and an aspiring software engineer passionate about full-stack and mobile development. I love building creative projects, learning new technologies, and turning ideas into real-world applications.
          </p>
        </div>

        <TechnologiesSection />
      </div>
    </section>
  );
};

export default About;
