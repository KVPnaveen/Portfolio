const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-8 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-500 sm:px-6 lg:px-8 md:items-center md:justify-center">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub — opens in new tab"
            className="inline-flex items-center gap-2 text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.82 1.19 3.08 0 4.42-2.69 5.39-5.26 5.67.41.36.77 1.07.77 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.79.55C20.71 21.39 24 17.09 24 12 24 5.73 18.27.5 12 .5z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn — opens in new tab"
            className="inline-flex items-center gap-2 text-blue-700 transition-colors hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.329-.027-3.039-1.852-3.039-1.853 0-2.136 1.446-2.136 2.942v5.666H8.845V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.602 0 4.267 2.368 4.267 5.452v6.291zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.069 0-1.144.925-2.069 2.069-2.069 1.144 0 2.069.925 2.069 2.069 0 1.143-.925 2.069-2.069 2.069zM6.657 20.452H3.998V9h2.66v11.452z" />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>

        <p>© {new Date().getFullYear()} Naveen Madhawa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
