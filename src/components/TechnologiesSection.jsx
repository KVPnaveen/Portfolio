import {
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const technologies = [
  { name: 'React', Icon: SiReact, className: 'text-cyan-500' },
  { name: 'PHP', Icon: SiPhp, className: 'text-indigo-500' },
  { name: 'MySQL', Icon: SiMysql, className: 'text-sky-600' },
  { name: 'JavaScript', Icon: SiJavascript, className: 'text-yellow-400' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, className: 'text-sky-400' },
  { name: 'MongoDB', Icon: SiMongodb, className: 'text-emerald-500' },
  { name: 'GitHub', Icon: SiGithub, className: 'text-slate-900 dark:text-slate-100' },
  { name: 'Figma', Icon: SiFigma, className: 'text-pink-500' },
  { name: 'Git', Icon: SiGit, className: 'text-orange-600' },
  { name: 'VS Code', Icon: VscVscode, className: 'text-sky-500' },
  { name: 'Python', Icon: SiPython, className: 'text-blue-500' },
];

const TechnologiesSection = () => {
  return (
    <section aria-labelledby="technologies-heading" className="mt-12">
      {/* Visually hide heading but keep for accessibility */}
      <h2 id="technologies-heading" className="sr-only">Technologies</h2>

      <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white/50 p-3 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)] backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/35 overflow-hidden">
        {/* Marquee wrapper */}
        <div className="marquee">
          {/* Track: duplicated list for seamless loop. `animate-marquee` defined in CSS. */}
          <div className="marquee-track flex items-center gap-6 whitespace-nowrap will-change-transform animate-marquee">
            {technologies.concat(technologies).map(({ name, Icon, className }, idx) => (
              <div key={`${name}-${idx}`} className="inline-flex items-center justify-center">
                <div className="flex h-25 w-25 items-center justify-center rounded-full bg-slate-50/90 p-2 transition-transform duration-300 transform-gpu opacity-80 hover:opacity-100 hover:scale-110 dark:bg-slate-800/60">
                  <Icon className={`${className} h-20 w-20`} aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
