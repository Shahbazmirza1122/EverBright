import React from 'react';
import { PORTFOLIO } from '../constants';
import { ExternalLink } from 'lucide-react';

interface PortfolioProps {
  onOpenModal?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onOpenModal }) => {
  return (
    <section id="work" className="py-24 bg-white dark:bg-dark-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase text-sm mb-3">Selected Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
              Building Things That Matter
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We help ambitious companies build products that define their industries.
            </p>
          </div>
          <div className="hidden md:block">
            <button 
              onClick={onOpenModal}
              className="text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 font-medium inline-flex items-center transition-colors cursor-pointer"
            >
              Start your project <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-slate-800">
              {/* Contained Image Style */}
              <div className="aspect-[16/10] bg-white dark:bg-dark-900/50 p-6 sm:p-8 flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:bg-slate-100 dark:group-hover:bg-dark-900">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700/50 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent dark:from-dark-950 dark:via-dark-950/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold mb-3 border border-primary-500/20">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-300 text-sm mb-0 line-clamp-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <button 
            onClick={onOpenModal}
            className="text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 font-medium inline-flex items-center transition-colors cursor-pointer"
          >
              Start your project <ExternalLink className="ml-2 h-4 w-4" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;