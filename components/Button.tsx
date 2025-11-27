import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  className = '', 
  children, 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-900/50 hover:shadow-primary-600/30 focus:ring-primary-500 border border-transparent",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white dark:text-dark-950 dark:hover:bg-slate-100 shadow-lg shadow-slate-200/50 dark:shadow-white/10 focus:ring-slate-200 dark:focus:ring-white border border-transparent",
    outline: "border border-slate-300 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 text-slate-600 dark:text-slate-300 hover:text-white bg-transparent hover:bg-primary-500/90 focus:ring-primary-500",
    ghost: "text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 focus:ring-slate-500 bg-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        {...props as any}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;