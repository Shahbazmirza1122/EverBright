import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark';
    }
    return 'dark'; // Default to dark mode
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}