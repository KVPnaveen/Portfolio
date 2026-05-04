import Card from '../components/Card';
import Button from '../components/Button';
import { projects as initialProjects } from '../data/projects';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'portfolio_projects_v1';

const Projects = () => {
  const [projects, setProjects] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore
    }
    return initialProjects;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (e) {
      // ignore
    }
  }, [projects]);

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [link, setLink] = useState('');

  const addProject = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean),
      link: link.trim() || '#',
    };
    setProjects(prev => [newProject, ...prev]);
    setTitle(''); setDescription(''); setTagsInput(''); setLink('');
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(projects, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'projects.json'; a.click();
    URL.revokeObjectURL(url);
  };

  const importJSON = async () => {
    const text = prompt('Paste projects JSON here:');
    if (!text) return;
    try {
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) setProjects(parsed);
      else alert('Invalid JSON: expected an array');
    } catch (err) {
      alert('Invalid JSON');
    }
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto inline-block">
          <p className="text-lg font-bold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            My Projects
          </p>
        </div>
      </div>

      {/* Add project form */}
      <div className="mt-8 mb-6 flex flex-col gap-3 rounded-lg border border-slate-200/70 bg-white/50 p-4 dark:border-slate-800/70 dark:bg-slate-900/35">
        <form onSubmit={addProject} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full rounded-md border px-3 py-2" />
          <input value={link} onChange={e=>setLink(e.target.value)} placeholder="Link (optional)" className="w-full rounded-md border px-3 py-2" />
          <input value={tagsInput} onChange={e=>setTagsInput(e.target.value)} placeholder="Tags (comma separated)" className="w-full rounded-md border px-3 py-2 col-span-1 sm:col-span-2 lg:col-span-1" />
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Add Project</button>
          <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Short description" className="col-span-1 sm:col-span-2 lg:col-span-3 w-full rounded-md border px-3 py-2" />
        </form>
        <div className="flex gap-3">
          <button type="button" onClick={exportJSON} className="rounded-md bg-slate-100 px-3 py-2 text-sm">Export JSON</button>
          <button type="button" onClick={importJSON} className="rounded-md bg-slate-100 px-3 py-2 text-sm">Import JSON</button>
        </div>
      </div>

      <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} title={project.title} description={project.description} className="flex h-full flex-col">
            <div className="mt-5 flex flex-wrap gap-2">
              {(project.tags || []).map((tag) => (
                <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-200">
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
