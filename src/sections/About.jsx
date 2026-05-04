import Card from '../components/Card';
import { skills } from '../data/skills';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-[0_20px_55px_-35px_rgba(15,23,42,0.35)] backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/45 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Beginner-friendly structure with room to grow.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            The layout keeps reusable pieces in `components`, feature content in `sections`, shared route wrappers in `layouts`, and simple data in `data`.
          </p>
        </div>

        <Card title="Core Skills" description="A small starter set you can expand anytime.">
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-200 bg-slate-100/80 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
