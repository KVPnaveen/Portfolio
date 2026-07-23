import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-black/5 bg-[#F3F4F6]/85 dark:border-white/5 dark:bg-[#0F172A]/85 py-12 relative z-10 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand/Logo Area */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/NM.png" 
              alt="Naveen Madhawa Logo" 
              className="h-8 w-8 object-contain rounded-md logo-glow-anim"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-base sm:text-lg">Naveen Madhawa</span>
              <span className="text-xs text-orange-500 uppercase tracking-widest font-semibold mt-0.5">Portfolio Site</span>
            </div>
          </div>

          {/* Center decorative closing text (completely generic tagline, keeping metadata clean) */}
          <div className="text-center text-sm leading-relaxed text-slate-600 dark:text-slate-500 max-w-md md:text-left sm:text-base">
            Dedicated to software excellence, clean execution, and continuous learning.
          </div>

          {/* Social Links (Strictly original links) */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/KVPnaveen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub — opens in new tab"
              className="rounded-full border border-black/10 bg-black/5 p-2.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:-translate-y-0.5 hover:border-orange-500/30 flex items-center justify-center"
            >
              <FaGithub className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn — opens in new tab"
              className="rounded-full border border-black/10 bg-black/5 p-2.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:-translate-y-0.5 hover:border-orange-500/30 flex items-center justify-center"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>

            <a
              href="https://www.instagram.com/naveen_vidanapathirana?igsh=MTM5cGc0YWJxYWxydg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — opens in new tab"
              className="rounded-full border border-black/10 bg-black/5 p-2.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:-translate-y-0.5 hover:border-orange-500/30 flex items-center justify-center"
            >
              <FaInstagram className="h-4 w-4" />
            </a>

            <a
              href="https://www.facebook.com/share/1BYTbC69jj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook — opens in new tab"
              className="rounded-full border border-black/10 bg-black/5 p-2.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:-translate-y-0.5 hover:border-orange-500/30 flex items-center justify-center"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-black/5 dark:border-white/5 pt-8 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-600 md:flex-row">
          <p>© {new Date().getFullYear()} Naveen Madhawa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
