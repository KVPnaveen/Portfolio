import { useEffect, useState } from 'react';
import Button from '../components/Button';
import ProfileImage from '../components/ProfileImage';

const ROTATING_TITLES = [
  'Full Stack Developer',
  'Mobile Developer',
  'Aspiring Software Engineer',
  'Tech Enthusiast',
];

const Hero = () => {
  const [profileImage, setProfileImage] = useState(() => localStorage.getItem('profileImage') || '/images/profile.svg');
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTitleIndex((currentIndex) => (currentIndex + 1) % ROTATING_TITLES.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result;
        setProfileImage(imageData);
        localStorage.setItem('profileImage', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
      <div className="relative overflow-hidden rounded-4xl border border-slate-200/80 bg-white/70 p-6 shadow-[0_20px_65px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-[0_30px_80px_-35px_rgba(2,6,23,0.8)] sm:p-8 lg:p-10">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/25" />
          <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/20" />
        </div>

        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="h-6 overflow-hidden text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">
            <span
              key={activeTitleIndex}
              className="inline-block animate-[fadeSlide_2.2s_ease-in-out]"
            >
              {ROTATING_TITLES[activeTitleIndex]}
            </span>
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
              Naveen Madhawa
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Dedicated to coding, developing impactful projects, and expanding my knowledge in new technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="a" href="#projects">
                View Projects
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:items-end">
            <ProfileImage
              src={profileImage}
              alt="Profile picture"
              size="lg"
              showStatus
              isOnline
            />
            <label className="cursor-pointer rounded-full bg-linear-to-r from-indigo-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
              Change Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                aria-label="Change profile picture"
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
