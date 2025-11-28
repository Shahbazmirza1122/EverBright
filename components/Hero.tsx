import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Database, Layers } from 'lucide-react';
import Button from './Button';
import { smoothScrollTo } from '../utils/scroll';

const Hero: React.FC = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  useEffect(() => {
    const str1 = "EverBright";
    const str2 = " — Where Ideas Turn Into Impact";
    const fullText = str1 + str2;
    
    let timeoutId: ReturnType<typeof setTimeout>;

    const runAnimation = () => {
      let charIndex = 0;
      
      const typeChar = () => {
        if (charIndex <= fullText.length) {
          if (charIndex <= str1.length) {
            setText1(str1.slice(0, charIndex));
            setText2('');
          } else {
            setText1(str1);
            setText2(str2.slice(0, charIndex - str1.length));
          }
          charIndex++;
          // Randomize typing speed slightly for realism
          timeoutId = setTimeout(typeChar, 50 + Math.random() * 30);
        } else {
          // Finished typing. Wait for user to read (2 seconds).
          timeoutId = setTimeout(() => {
            // Disappear all heading
            setText1('');
            setText2('');
            
            // Wait 2 seconds before restarting the animation
            timeoutId = setTimeout(runAnimation, 2000);
          }, 2000);
        }
      };

      typeChar();
    };

    runAnimation();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-48 overflow-hidden bg-white dark:bg-dark-950 transition-colors duration-300">
      
      {/* Background Elements - Using standard tailwind animate-pulse */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-200/40 dark:bg-primary-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-200/40 dark:bg-secondary-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-purple-200/30 dark:bg-purple-600/10 rounded-full blur-[100px] animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6 leading-tight min-h-[80px] md:min-h-[140px] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-primary-600 dark:text-primary-500 shadow-primary-500/20 drop-shadow-lg">
            {text1}
          </span>
          <span>
            {text2}
          </span>
          <span className="animate-pulse text-primary-500 font-light ml-1">|</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We blend cutting-edge technology with world-class design to build scalable software solutions that drive business growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            variant="primary" 
            size="lg" 
            className="group" 
            href="#work"
            onClick={(e: any) => smoothScrollTo(e, '#work')}
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            href="#services"
            onClick={(e: any) => smoothScrollTo(e, '#services')}
          >
            Explore Services
          </Button>
        </div>

        {/* Floating Icons Representation - UPDATED ANIMATION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800/50 pt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          
          <div className="flex flex-col items-center gap-4 group cursor-default">
             <div 
               className="p-5 bg-white dark:bg-slate-800/50 rounded-2xl text-primary-600 dark:text-primary-400 ring-1 ring-slate-200 dark:ring-slate-700/50 transition-colors duration-300 group-hover:bg-slate-50 dark:group-hover:bg-slate-800 group-hover:ring-primary-500/50 animate-breathe"
               style={{ animationDelay: '0s' }}
             >
                <Code className="h-8 w-8 transition-transform duration-300" />
             </div>
             <span className="font-semibold text-slate-700 dark:text-white text-lg transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">Clean Code</span>
          </div>

          <div className="flex flex-col items-center gap-4 group cursor-default">
             <div 
               className="p-5 bg-white dark:bg-slate-800/50 rounded-2xl text-purple-600 dark:text-purple-400 ring-1 ring-slate-200 dark:ring-slate-700/50 transition-colors duration-300 group-hover:bg-slate-50 dark:group-hover:bg-slate-800 group-hover:ring-purple-500/50 animate-breathe"
               style={{ animationDelay: '0.7s' }}
             >
                <Layers className="h-8 w-8 transition-transform duration-300" />
             </div>
             <span className="font-semibold text-slate-700 dark:text-white text-lg transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">Modern Stack</span>
          </div>

          <div className="flex flex-col items-center gap-4 group cursor-default">
             <div 
               className="p-5 bg-white dark:bg-slate-800/50 rounded-2xl text-pink-600 dark:text-pink-400 ring-1 ring-slate-200 dark:ring-slate-700/50 transition-colors duration-300 group-hover:bg-slate-50 dark:group-hover:bg-slate-800 group-hover:ring-pink-500/50 animate-breathe"
               style={{ animationDelay: '1.4s' }}
             >
                <Database className="h-8 w-8 transition-transform duration-300" />
             </div>
             <span className="font-semibold text-slate-700 dark:text-white text-lg transition-colors duration-300 group-hover:text-pink-600 dark:group-hover:text-pink-400">Scalable Arch</span>
          </div>

          <div className="flex flex-col items-center gap-4 group cursor-default">
             <div 
               className="p-5 bg-white dark:bg-slate-800/50 rounded-2xl text-emerald-600 dark:text-emerald-400 ring-1 ring-slate-200 dark:ring-slate-700/50 transition-colors duration-300 group-hover:bg-slate-50 dark:group-hover:bg-slate-800 group-hover:ring-emerald-500/50 animate-breathe"
               style={{ animationDelay: '2.1s' }}
             >
                <ArrowRight className="h-8 w-8 transition-transform duration-300" />
             </div>
             <span className="font-semibold text-slate-700 dark:text-white text-lg transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">Fast Delivery</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;