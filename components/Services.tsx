import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-dark-900 relative scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
            Comprehensive Digital Solutions
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            From ideation to deployment, we handle every aspect of the software development lifecycle with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-8 rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:bg-slate-50/50 dark:hover:bg-slate-800/80 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-[100px] transition-opacity group-hover:opacity-10`}></div>
              
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.gradient} bg-opacity-10 mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;