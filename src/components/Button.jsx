import { cn } from '../utils/helpers';

const Button = ({ as: Component = 'button', children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400/70 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950';
  const variants = {
    primary: 'bg-linear-to-r from-indigo-500 via-blue-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30',
    secondary: 'border border-slate-300/70 bg-white/80 text-slate-800 shadow-sm backdrop-blur hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-900',
  };

  return (
    <Component className={cn(baseClasses, variants[variant], className)} {...(Component === 'button' && !props.type ? { type: 'button' } : {})} {...props}>
      {children}
    </Component>
  );
};

export default Button;
