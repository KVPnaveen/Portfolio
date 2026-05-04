const Card = ({ title, description, children, className = '' }) => {
  return (
    <article className={`rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-[0_10px_35px_-16px_rgba(15,23,42,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(37,99,235,0.35)] dark:border-slate-800/80 dark:bg-slate-900/55 dark:shadow-[0_14px_40px_-18px_rgba(2,6,23,0.7)] ${className}`}>
      {title ? <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3> : null}
      {description ? <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p> : null}
      {children}
    </article>
  );
};

export default Card;
