import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-dark-900 border-y border-slate-200 dark:border-slate-800 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase text-sm mb-3">Our Methodology</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
            How We Deliver Excellence
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-dark-800 border-4 border-slate-100 dark:border-dark-900 shadow-xl flex items-center justify-center relative z-10 mb-6 group transition-transform hover:scale-110 duration-300">
                  <div className="absolute inset-0 rounded-full bg-primary-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <step.icon className="h-10 w-10 text-primary-600 dark:text-primary-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-400">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;