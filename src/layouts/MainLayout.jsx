import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-linear-to-b from-indigo-500/10 via-blue-500/5 to-transparent dark:from-indigo-400/15 dark:via-blue-400/10" />
        <div className="absolute -left-24 top-52 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/20" />
        <div className="absolute -right-20 top-[28rem] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/20" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
