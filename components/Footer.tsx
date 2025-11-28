import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-dark-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Social */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              {/* Increased size significantly */}
              <Logo className="h-28 w-auto" />
            </div>
            <p className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed mb-6">
              We design and build digital products that help brands grow and succeed in the modern economy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-primary-600 dark:hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-primary-600 dark:hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-primary-600 dark:hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-primary-600 dark:hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter (New) */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-600 dark:text-slate-500 text-sm mb-4">
              Subscribe to our newsletter to get the latest news and updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2.5 bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm outline-none transition-all hover:border-slate-300 dark:hover:border-slate-700"
              />
              <button 
                type="submit"
                className="w-full px-4 py-2.5 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary-900/50"
              >
                Subscribe <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 dark:text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} EverBright. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;