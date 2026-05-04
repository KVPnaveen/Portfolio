import { cn } from '../utils/helpers';

const Button = ({ as: Component = 'button', children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900',
    secondary: 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus:ring-slate-400',
  };

  return (
    <Component className={cn(baseClasses, variants[variant], className)} {...(Component === 'button' && !props.type ? { type: 'button' } : {})} {...props}>
      {children}
    </Component>
  );
};

export default Button;
