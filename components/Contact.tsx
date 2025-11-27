import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-dark-900 relative overflow-hidden scroll-mt-20 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-200/50 dark:from-slate-800/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Let's Build Something <br /> Amazing Together
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-md">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 -ml-4 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-800/80 hover:translate-x-2 hover:scale-[1.02] border border-transparent hover:border-slate-200 dark:hover:border-slate-700/80 hover:shadow-lg hover:shadow-primary-900/10 cursor-default group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg text-primary-600 dark:text-primary-400 shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 shadow-md">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Email Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">hello@everbright.solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 -ml-4 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-800/80 hover:translate-x-2 hover:scale-[1.02] border border-transparent hover:border-slate-200 dark:hover:border-slate-700/80 hover:shadow-lg hover:shadow-primary-900/10 cursor-default group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg text-primary-600 dark:text-primary-400 shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 shadow-md">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Call Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 -ml-4 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-800/80 hover:translate-x-2 hover:scale-[1.02] border border-transparent hover:border-slate-200 dark:hover:border-slate-700/80 hover:shadow-lg hover:shadow-primary-900/10 cursor-default group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg text-primary-600 dark:text-primary-400 shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 shadow-md">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Visit Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">100 Innovation Dr, Tech City, CA 94000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20 hover:border-primary-500/40 hover:-translate-y-1">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all duration-300 outline-none hover:border-slate-400 dark:hover:border-slate-600 focus:bg-white dark:focus:bg-dark-900/80"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all duration-300 outline-none hover:border-slate-400 dark:hover:border-slate-600 focus:bg-white dark:focus:bg-dark-900/80"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all duration-300 outline-none resize-none hover:border-slate-400 dark:hover:border-slate-600 focus:bg-white dark:focus:bg-dark-900/80"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth 
                disabled={isSubmitting || submitted}
                className="hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center">
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;