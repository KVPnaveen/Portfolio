const Card = ({ title, description, children, className = '' }) => {
  return (
    <article className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg ${className}`}>
      {title ? <h3 className="text-xl font-semibold text-slate-900">{title}</h3> : null}
      {description ? <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p> : null}
      {children}
    </article>
  );
};

export default Card;
