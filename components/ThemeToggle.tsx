import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../utils/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-slate-500 hover:text-primary-600 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;