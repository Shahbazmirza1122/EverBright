import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Triple the testimonials to ensure smooth infinite scrolling even on wide screens
  // This creates a long enough strip of content
  const testimonialSet = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-dark-950 scroll-mt-20 overflow-hidden transition-colors duration-300">
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
            Trusted by Innovators
          </h3>
        </div>

        <div className="relative w-full">
          {/* Gradient Masks for smooth fade in/out */}
          <div className="absolute top-0 left-0 w-24 md:w-48 h-full z-10 bg-gradient-to-r from-white dark:from-dark-950 to-transparent pointer-events-none transition-colors duration-300"></div>
          <div className="absolute top-0 right-0 w-24 md:w-48 h-full z-10 bg-gradient-to-l from-white dark:from-dark-950 to-transparent pointer-events-none transition-colors duration-300"></div>

          {/* Scrolling Container */}
          <div className="flex w-max animate-scroll">
            
            {testimonialSet.map((t, index) => (
              <div 
                key={`${t.id}-${index}`} 
                className="w-[320px] md:w-[450px] bg-slate-50 dark:bg-dark-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative flex-shrink-0 mx-4 hover:border-primary-500/50 transition-colors group"
              >
                <Quote className="absolute top-8 right-8 h-8 w-8 text-slate-300 dark:text-slate-700 opacity-50 group-hover:text-primary-500/30 transition-colors" />
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.avatarUrl} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full border-2 border-primary-500/30 group-hover:border-primary-500 transition-colors"
                  />
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold">{t.name}</h4>
                    <p className="text-primary-600 dark:text-primary-400 text-sm">{t.role}, {t.company}</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">"{t.content}"</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;