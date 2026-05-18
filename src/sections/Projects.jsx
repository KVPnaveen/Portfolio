import Card from '../components/Card';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { projects } from '../data/projects';

const toShortDescription = (text, maxLength = 220) => {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;
};

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto inline-block">
          <p className="text-lg font-bold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            My Projects
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex h-full flex-col overflow-hidden p-0">
            {project.image && (
              <a
                href={project.image}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-t-3xl bg-slate-100 p-2 dark:bg-slate-800/60"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-contain"
                />
              </a>
            )}
            <div className="px-7 pb-7 pt-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {toShortDescription(project.description)}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {(project.tags || []).map((tag) => (
                  <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                    className="rounded-full border border-slate-200/80 p-2 text-slate-600 transition hover:-translate-y-0.5 hover:text-indigo-600 dark:border-slate-700/80 dark:text-slate-300 dark:hover:text-indigo-300"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                ) : null}
                {project.linkedin ? (
                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} LinkedIn page`}
                    className="rounded-full border border-slate-200/80 p-2 text-slate-600 transition hover:-translate-y-0.5 hover:text-sky-600 dark:border-slate-700/80 dark:text-slate-300 dark:hover:text-sky-300"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
