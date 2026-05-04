import Button from '../components/Button';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 px-6 py-10 text-slate-100 shadow-[0_25px_70px_-35px_rgba(2,6,23,0.85)] backdrop-blur-xl lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
          Contact Me
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight">
          Let’s get in touch.
        </h2>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
