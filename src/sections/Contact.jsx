import Button from '../components/Button';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-3xl bg-slate-900 px-6 py-10 text-white md:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Let’s build something simple and polished.
          </h2>
          <p className="mt-4 max-w-xl text-slate-300">
            Use this section as a starting point for your email, social links, or a future contact form.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl bg-white/5 p-6 backdrop-blur">
          <a href="mailto:hello@example.com" className="block text-lg font-semibold text-white">
            hello@example.com
          </a>
          <p className="text-sm text-slate-300">Open to freelance work, internships, and collaboration.</p>
          <Button as="a" href="mailto:hello@example.com">
            Send Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
