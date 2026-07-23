import Card from '../components/Card';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { projects } from '../data/projects';

const toShortDescription = (text, maxLength = 220) => {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;
};

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-extrabold uppercase tracking-[0.2em] text-orange-500 sm:text-4xl">
          My Projects
        </h2>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full bg-white/80 border border-black/5 shadow-2xl hover:border-orange-500/20 dark:bg-[#0f0f0f]/50 dark:border-white/5 dark:hover:border-orange-500/20 transition-all duration-300"
          >
            {project.image ? (
              <a
                href={project.image}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden relative aspect-video bg-slate-100 dark:bg-neutral-900 border-b border-black/5 dark:border-white/5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none" />
              </a>
            ) : (
              // Aesthetic gradient replacement if no project image exists
              <div className="aspect-video bg-gradient-to-br from-orange-500/10 to-cyan-500/10 border-b border-black/5 dark:border-white/5 relative flex items-center justify-center">
                <span className="text-xs uppercase font-mono tracking-widest text-slate-500 dark:text-slate-600">No Preview Available</span>
              </div>
            )}
            
            <div className="p-6 flex flex-col flex-grow text-left">
              <h3 className="text-[21px] sm:text-[23px] font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="mt-4 text-[14px] sm:text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                {toShortDescription(project.description)}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-1.5">
                {(project.tags || []).map((tag) => (
                  <span 
                    key={tag} 
                    className="rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 px-2.5 py-0.5 text-[12px] sm:text-[14px] font-bold text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-center gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                    className="rounded-full border border-black/10 bg-black/5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:-translate-y-0.5 hover:border-orange-500/30"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                ) : null}
                {project.linkedin ? (
                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} LinkedIn page`}
                    className="rounded-full border border-black/10 bg-black/5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:-translate-y-0.5 hover:border-orange-500/30"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
