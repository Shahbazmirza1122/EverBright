import React, { useState, useEffect, useRef } from 'react';
import { Target, Users, Lightbulb, TrendingUp, Figma, Globe, Smartphone, Database, Code2, BrainCircuit } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 3000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Easing function for smooth animation (easeOutExpo)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(easeProgress * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const About: React.FC = () => {
  return (
    <section className="bg-white dark:bg-dark-950 relative overflow-hidden transition-colors duration-300">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-orbit {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 20s linear infinite;
        }
      `}</style>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary-200/40 dark:bg-secondary-900/20 rounded-full blur-[80px]"></div>

      {/* About Section */}
      <div id="about" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Orbiting Animation */}
            <div className="relative flex justify-center items-center h-[400px] md:h-[600px] w-full">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary-500/5 rounded-full blur-3xl transform scale-75"></div>
              
              {/* Central Agent Image */}
              <div className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-b from-primary-400 to-secondary-500 shadow-[0_0_40px_rgba(14,165,233,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900">
                   <div className="absolute inset-0 bg-primary-500/10 z-10"></div>
                   <img 
                    src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800" 
                    alt="AI Robotic Agent" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Pulse Ring */}
                <div className="absolute -inset-4 rounded-full border border-primary-500/30 animate-ping opacity-20"></div>
              </div>

              {/* Orbiting Ring - RESIZED (Smaller) */}
              <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border border-slate-200 dark:border-slate-700/50 animate-orbit">
                
                {/* Icons on Orbit - Equally spaced at 60 degrees */}
                
                {/* 1. Top (0 deg) - Web */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-reverse-spin">
                    <div className="p-4 bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg shadow-primary-500/20 text-primary-600 dark:text-primary-400 hover:text-primary-600 dark:hover:text-white hover:border-primary-500 transition-colors">
                      <Globe className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>

                {/* 2. Top Right (60 deg) - Figma */}
                {/* top: 25%, left: 93.3% */}
                <div className="absolute top-[25%] left-[93.3%] -translate-x-1/2 -translate-y-1/2">
                   <div className="animate-reverse-spin">
                    <div className="p-4 bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg shadow-purple-500/20 text-purple-600 dark:text-purple-400 hover:text-purple-600 dark:hover:text-white hover:border-purple-500 transition-colors">
                      <Figma className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>

                {/* 3. Bottom Right (120 deg) - AI */}
                {/* top: 75%, left: 93.3% */}
                <div className="absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-reverse-spin">
                    <div className="p-4 bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg shadow-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-white hover:border-emerald-500 transition-colors">
                      <BrainCircuit className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>

                {/* 4. Bottom (180 deg) - Database */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-reverse-spin">
                    <div className="p-4 bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg shadow-cyan-500/20 text-cyan-600 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-500 transition-colors">
                      <Database className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>

                {/* 5. Bottom Left (240 deg) - Code */}
                {/* top: 75%, left: 6.7% */}
                <div className="absolute top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-reverse-spin">
                    <div className="p-4 bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg shadow-orange-500/20 text-orange-600 dark:text-orange-400 hover:text-orange-600 dark:hover:text-white hover:border-orange-500 transition-colors">
                      <Code2 className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>

                {/* 6. Top Left (300 deg) - Mobile */}
                {/* top: 25%, left: 6.7% */}
                <div className="absolute top-[25%] left-[6.7%] -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-reverse-spin">
                    <div className="p-4 bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg shadow-pink-500/20 text-pink-600 dark:text-pink-400 hover:text-pink-600 dark:hover:text-white hover:border-pink-500 transition-colors">
                      <Smartphone className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Stats Floating (Optional) */}
              <div className="absolute bottom-0 right-4 md:right-10 bg-white/90 dark:bg-dark-900/90 backdrop-blur border border-slate-200 dark:border-slate-800 p-3 md:p-4 rounded-xl shadow-xl z-30 transform translate-y-1/2 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-500/20 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-primary-600 dark:text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-900 dark:text-white leading-none">
                        <AnimatedCounter end={50} suffix="+" />
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">Experts</p>
                    </div>
                  </div>
              </div>
            </div>

            <div>
              <h2 className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase text-sm mb-3">About Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
                Architects of the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Digital Realm</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Founded in 2024, EverBright started with a simple belief: technology should not just solve problems, it should inspire possibilities. We are a collective of visionaries, engineers, and designers dedicated to pushing the boundaries of what is possible on the web.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Our approach combines technical excellence with creative innovation. We don't just write code; we craft digital experiences that resonate with users and drive tangible business results for our partners worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-primary-500 pl-4">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    <AnimatedCounter end={100} suffix="+" />
                  </h4>
                  <p className="text-slate-500 text-sm">Projects Delivered</p>
                </div>
                <div className="border-l-2 border-secondary-500 pl-4">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    <AnimatedCounter end={98} suffix="%" />
                  </h4>
                  <p className="text-slate-500 text-sm">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission" className="py-24 bg-slate-50 dark:bg-dark-900 border-y border-slate-200 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary-600 dark:text-secondary-500 font-semibold tracking-wide uppercase text-sm mb-3">Our Mission</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Empowering the Future
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We exist to bridge the gap between human imagination and digital reality, providing the technological foundation for the world's most ambitious ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-colors group">
              <div className="bg-slate-100 dark:bg-dark-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-7 w-7 text-yellow-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Innovation First</h4>
              <p className="text-slate-600 dark:text-slate-400">
                We relentlessly pursue new technologies and methodologies to ensure our clients are always ahead of the curve.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-colors group">
              <div className="bg-slate-100 dark:bg-dark-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-7 w-7 text-red-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Precision & Quality</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Excellence is not an act, but a habit. We adhere to the highest standards of code quality and design fidelity.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-colors group">
              <div className="bg-slate-100 dark:bg-dark-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-7 w-7 text-emerald-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Client Success</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Your growth is our metric for success. We build long-term partnerships rooted in trust, transparency, and results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;