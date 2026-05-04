import Card from '../components/Card';
import { skills } from '../data/skills';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Beginner-friendly structure with room to grow.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            The layout keeps reusable pieces in `components`, feature content in `sections`, shared route wrappers in `layouts`, and simple data in `data`.
          </p>
        </div>

        <Card title="Core Skills" description="A small starter set you can expand anytime.">
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200">
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
