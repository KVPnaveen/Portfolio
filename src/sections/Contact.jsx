import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';

// Initialize EmailJS with your public key
// Get credentials from: https://dashboard.emailjs.com/admin
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
    <section id="contact" className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 px-6 py-10 text-slate-100 shadow-[0_25px_70px_-35px_rgba(2,6,23,0.85)] backdrop-blur-xl lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
          Contact Me
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight">
          Let’s get in touch.
        </h2>

        <form ref={form} className="mt-8 space-y-5" onSubmit={sendEmail}>
          {/* Hidden field for recipient email */}
          <input
            type="hidden"
            name="to_email"
            value="naveenmadhawa2026@gmail.com"
          />

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
            />
          </div>

          <Button type="submit" className="w-full" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>

          {feedback ? (
            <p className={`text-sm ${status === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default Contact;
