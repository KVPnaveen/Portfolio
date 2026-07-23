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
  { name: 'React', Icon: SiReact, className: 'text-cyan-400' },
  { name: 'PHP', Icon: SiPhp, className: 'text-indigo-400' },
  { name: 'MySQL', Icon: SiMysql, className: 'text-sky-500' },
  { name: 'JavaScript', Icon: SiJavascript, className: 'text-yellow-400' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, className: 'text-sky-400' },
  { name: 'MongoDB', Icon: SiMongodb, className: 'text-emerald-400' },
  { name: 'GitHub', Icon: SiGithub, className: 'text-slate-800 dark:text-white' },
  { name: 'Figma', Icon: SiFigma, className: 'text-pink-400' },
  { name: 'Git', Icon: SiGit, className: 'text-orange-500' },
  { name: 'VS Code', Icon: VscVscode, className: 'text-sky-400' },
  { name: 'Python', Icon: SiPython, className: 'text-blue-400' },
];

const TechnologiesSection = () => {
  return (
    <section aria-labelledby="technologies-heading" className="mt-12">
      {/* Visually hide heading but keep for accessibility */}
      <h2 id="technologies-heading" className="sr-only">Technologies</h2>

      <div className="mt-6 rounded-3xl border border-black/5 bg-white/60 dark:border-white/5 dark:bg-[#0f0f0f]/40 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md overflow-hidden transition-all duration-300">
        {/* Marquee wrapper */}
        <div className="marquee">
          {/* Track: duplicated list for seamless loop. `animate-marquee` defined in CSS. */}
          <div className="marquee-track flex items-center gap-6 whitespace-nowrap will-change-transform animate-marquee">
            {technologies.concat(technologies).map(({ name, Icon, className }, idx) => (
              <div key={`${name}-${idx}`} className="inline-flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-3.5 transition-all duration-300 transform-gpu opacity-80 hover:opacity-100 hover:scale-110 hover:border-orange-500/30">
                  <Icon className={`${className} h-full w-full`} aria-hidden="true" />
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
