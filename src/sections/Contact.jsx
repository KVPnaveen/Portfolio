import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import { FaPaperPlane } from 'react-icons/fa';

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

    // Replace with your actual EmailJS credentials from dashboard
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
    <section id="contact" className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-extrabold uppercase tracking-[0.2em] text-orange-500 sm:text-4xl">
          Contact Me
        </h2>
        <p className="mt-5 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-[26px]">
          Let's get in touch.
        </p>
      </div>

      <div className="glass-card max-w-2xl mx-auto rounded-3xl p-8 lg:p-12 border border-black/5 bg-white/80 shadow-2xl dark:bg-[#0f0f0f]/60 dark:border-white/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
        <form ref={form} className="space-y-6 text-left" onSubmit={sendEmail}>
          {/* Hidden field for recipient email */}
          <input
            type="hidden"
            name="to_email"
            value="naveenmadhawa2026@gmail.com"
          />

          <div>
            <label htmlFor="name" className="mb-3 block text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 sm:text-base">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-2xl border border-black/5 bg-black/[0.02] px-5 py-4 text-base text-slate-900 placeholder:text-slate-400 dark:border-white/5 dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-600 outline-none transition duration-300 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 focus:bg-black/[0.04] dark:focus:bg-white/[0.04]"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-3 block text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 sm:text-base">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-full rounded-2xl border border-black/5 bg-black/[0.02] px-5 py-4 text-base text-slate-900 placeholder:text-slate-400 dark:border-white/5 dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-600 outline-none transition duration-300 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 focus:bg-black/[0.04] dark:focus:bg-white/[0.04]"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-3 block text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 sm:text-base">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full rounded-2xl border border-black/5 bg-black/[0.02] px-5 py-4 text-base text-slate-900 placeholder:text-slate-400 dark:border-white/5 dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-600 outline-none transition duration-300 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 focus:bg-black/[0.04] dark:focus:bg-white/[0.04]"
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full py-4.5 rounded-2xl bg-[#FF8A00] text-base font-bold text-white shadow-[0_4px_20px_rgba(255,138,0,0.25)] transition-all duration-300 hover:bg-[#ff9d24] hover:shadow-[0_4px_30px_rgba(255,138,0,0.45)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
            <FaPaperPlane className="h-4 w-4" />
          </button>

          {feedback ? (
            <p className={`text-center text-base font-semibold mt-4 ${status === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default Contact;
