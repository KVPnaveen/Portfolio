import Card from '../components/Card';
import Button from '../components/Button';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured work and portfolio concepts.
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} title={project.title} description={project.description} className="flex h-full flex-col">
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Button as="a" href={project.link} variant="secondary">
                Explore
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
