import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Page not found</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">The page you’re looking for doesn’t exist or was moved.</p>
      <div className="mt-8">
        <Button as={Link} to="/">
          Go Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
