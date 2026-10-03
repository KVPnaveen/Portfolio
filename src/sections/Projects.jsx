import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa';
import { projects } from '../data/projects';

const toShortDescription = (text, maxLength = 180) => {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;
};

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectPages = chunkArray(projects, 3);

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      {projectPages.map((pageProjects, pageIndex) => (
        <section
          key={`project-page-${pageIndex}`}
          id={pageIndex === 0 ? "projects" : `projects-page-${pageIndex + 1}`}
          className="min-h-screen w-full flex flex-col justify-center items-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 snap-start snap-always relative z-10"
        >
          <div className="w-full max-w-6xl">
            <div className="text-center mb-6 lg:mb-8">
              <h2 className="text-3xl font-extrabold uppercase tracking-[0.2em] text-orange-500 sm:text-4xl">
                {pageIndex === 0 ? "My Projects" : "My Projects"}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {pageProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full bg-white/80 border border-black/5 shadow-2xl hover:border-orange-500/40 hover:-translate-y-1 dark:bg-[#0f0f0f]/50 dark:border-white/5 dark:hover:border-orange-500/40 transition-all duration-300 cursor-pointer"
                >
                  {project.image ? (
                    <div className="block overflow-hidden relative aspect-video bg-slate-100 dark:bg-neutral-900 border-b border-black/5 dark:border-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none" />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-orange-500/10 to-cyan-500/10 border-b border-black/5 dark:border-white/5 relative flex items-center justify-center">
                      <span className="text-xs uppercase font-mono tracking-widest text-slate-500 dark:text-slate-600">No Preview Available</span>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow text-left">
                    <h3 className="text-[19px] font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors duration-200 line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed flex-grow line-clamp-3">
                      {toShortDescription(project.description)}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {(project.tags || []).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 px-2.5 py-0.5 text-[12px] font-bold text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-orange-500 group-hover:underline">
                        Click for Details &rarr;
                      </span>

                      <div className="flex items-center gap-2">
                        {project.githubFrontend && (
                          <a
                            href={project.githubFrontend}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Open ${project.title} Frontend GitHub repository`}
                            title="Frontend GitHub Repository"
                            className="rounded-full border border-black/10 bg-black/5 p-2 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:-translate-y-0.5 hover:border-orange-500/30"
                          >
                            <FaGithub className="h-4 w-4" />
                          </a>
                        )}
                        {project.githubBackend && (
                          <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Open ${project.title} Backend GitHub repository`}
                            title="Backend GitHub Repository"
                            className="rounded-full border border-black/10 bg-black/5 p-2 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:-translate-y-0.5 hover:border-orange-500/30"
                          >
                            <FaGithub className="h-4 w-4" />
                          </a>
                        )}
                        {project.github && !project.githubFrontend && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Open ${project.title} GitHub repository`}
                            title="GitHub Repository"
                            className="rounded-full border border-black/10 bg-black/5 p-2 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:-translate-y-0.5 hover:border-orange-500/30"
                          >
                            <FaGithub className="h-4 w-4" />
                          </a>
                        )}
                        {project.linkedin ? (
                          <a
                            href={project.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Open ${project.title} LinkedIn page`}
                            title="LinkedIn Page"
                            className="rounded-full border border-black/10 bg-black/5 p-2 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:-translate-y-0.5 hover:border-orange-500/30"
                          >
                            <FaLinkedinIn className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Project Details Modal Popup */}
      {selectedProject && (
        <div 
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
          onWheel={(e) => e.stopPropagation()}
        >
          <div 
            data-lenis-prevent
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0f172a] border border-black/10 dark:border-white/10 shadow-2xl p-6 sm:p-8 text-left transition-all transform animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/20 shadow-lg hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all cursor-pointer dark:bg-black/80 dark:text-white dark:border-white/20 dark:hover:bg-orange-500"
              aria-label="Close details popup"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            {/* Project Image Header */}
            {selectedProject.image ? (
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-black/5 dark:border-white/5 bg-slate-100 dark:bg-neutral-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white pr-8">
              {selectedProject.title}
            </h3>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {(selectedProject.tags || []).map((tag) => (
                <span 
                  key={tag}
                  className="rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 px-3.5 py-1 text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Full Overview Description */}
            <div className="mt-6 border-t border-black/5 dark:border-white/5 pt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Project Details & Overview
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed whitespace-pre-line">
                {selectedProject.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 border-t border-black/5 dark:border-white/5 pt-5 flex flex-wrap items-center justify-end gap-3">
              {selectedProject.githubFrontend && (
                <a
                  href={selectedProject.githubFrontend}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 text-sm font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>Frontend Repo</span>
                </a>
              )}
              {selectedProject.githubBackend && (
                <a
                  href={selectedProject.githubBackend}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 text-sm font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>Backend Repo</span>
                </a>
              )}
              {selectedProject.github && !selectedProject.githubFrontend && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 text-sm font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>View Repository</span>
                </a>
              )}
              {selectedProject.linkedin && (
                <a
                  href={selectedProject.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] text-white px-4 py-2.5 text-sm font-bold transition-all hover:bg-[#004182] hover:-translate-y-0.5"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                  <span>View LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
