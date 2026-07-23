import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const MainLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F3F4F6] text-slate-900 dark:bg-[#0F172A] dark:text-slate-100 selection:bg-orange-500/30 selection:text-white transition-colors duration-300">
      {/* Interactive mouse follow glow overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-45 transition-opacity duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(222, 121, 13, 0.05), rgba(0, 210, 255, 0.04) 40%, transparent 80%)`
        }}
      />

      {/* Background Watermark Logos & Glow Orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Premium subtle light radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55)_0%,_rgba(243,244,246,0)_60%)] dark:bg-transparent transition-opacity duration-300" />

        {/* Premium subtle dark radial gradient overlay */}
        <div className="absolute inset-0 bg-transparent dark:bg-[radial-gradient(circle_at_top,_rgba(30,41,59,0.25)_0%,_rgba(15,23,42,1)_70%)] transition-opacity duration-300" />

        {/* Glow Orbs */}
        <div className="absolute -left-32 top-10 h-[40rem] w-[40rem] rounded-full glow-orb-orange blur-[120px] animate-float-slow" />
        <div className="absolute -right-40 top-96 h-[50rem] w-[50rem] rounded-full glow-orb-cyan blur-[150px] animate-float-medium" />
        <div className="absolute left-[20%] bottom-10 h-[45rem] w-[45rem] rounded-full glow-orb-orange blur-[130px] animate-float-slow" />

        {/* Subtle Watermarks (5% opacity) */}
        <img
          src="/images/NM.png"
          alt=""
          className="logo-watermark w-[550px] h-[550px] left-[-150px] top-[15%] opacity-[0.05]"
        />
        <img
          src="/images/NM.png"
          alt=""
          className="logo-watermark w-[650px] h-[650px] right-[-200px] bottom-[20%] opacity-[0.05]"
        />
      </div>

      {/* Fixed Navbar with built-in spacer */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
