import Button from '../components/Button';

const Hero = () => {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
          Creative React Portfolio
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          Modern portfolio structure for clean, scalable frontend work.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          This starter uses React, Vite, Tailwind CSS, and React Router to keep the code simple, organized, and easy to extend.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button as="a" href="#projects">
            View Projects
          </Button>
          <Button as="a" href="#contact" variant="secondary">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
