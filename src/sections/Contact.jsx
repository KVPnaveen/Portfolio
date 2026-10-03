import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import { FaPaperPlane } from 'react-icons/fa';
import Footer from '../components/Footer';

// Initialize EmailJS with your public key
emailjs.init('gz6MEcZFQaUA0ZVN8');

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    setFeedback('');

    emailjs
      .sendForm(
        'service_o6nyrwo',
        'template_44dzenn',
        form.current,
        'gz6MEcZFQaUA0ZVN8'
      )
      .then(
        () => {
          setStatus('success');
          setFeedback('Email Sent Successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus('error');
          setFeedback(`Failed to send email: ${error.text || 'Unknown error'}`);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col justify-between pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 snap-start snap-always relative z-10">
      <div className="my-auto w-full max-w-4xl mx-auto py-2">
        <div className="text-center mb-5 lg:mb-6">
          <h2 className="text-3xl font-extrabold uppercase tracking-[0.2em] text-orange-500 sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-2 text-base font-bold tracking-tight text-slate-900 dark:text-white sm:text-lg">
            Let's get in touch.
          </p>
        </div>

        <div className="glass-card max-w-xl mx-auto rounded-3xl p-6 lg:p-8 border border-black/5 bg-white/80 shadow-2xl dark:bg-[#0f0f0f]/60 dark:border-white/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
          <form ref={form} className="space-y-4 text-left" onSubmit={sendEmail}>
            <input
              type="hidden"
              name="to_email"
              value="naveenmadhawa2026@gmail.com"
            />

            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-black/5 bg-black/[0.02] px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 dark:border-white/5 dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-600 outline-none transition duration-300 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 focus:bg-black/[0.04] dark:focus:bg-white/[0.04]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full rounded-xl border border-black/5 bg-black/[0.02] px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 dark:border-white/5 dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-600 outline-none transition duration-300 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 focus:bg-black/[0.04] dark:focus:bg-white/[0.04]"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Write your message here..."
                required
                className="w-full rounded-xl border border-black/5 bg-black/[0.02] px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 dark:border-white/5 dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-600 outline-none transition duration-300 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 focus:bg-black/[0.04] dark:focus:bg-white/[0.04]"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full py-3.5 rounded-xl bg-[#FF8A00] text-sm font-bold text-white shadow-[0_4px_20px_rgba(255,138,0,0.25)] transition-all duration-300 hover:bg-[#ff9d24] hover:shadow-[0_4px_30px_rgba(255,138,0,0.45)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              <FaPaperPlane className="h-3.5 w-3.5" />
            </button>

            {feedback ? (
              <p className={`text-center text-sm font-semibold mt-2 ${status === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {feedback}
              </p>
            ) : null}
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
