import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Trophy, Users, Calendar } from 'lucide-react';

const Hero = () => {
  const calculateDaysLeft = () => {
    const targetDate = new Date('2026-03-06');
    const today = new Date();
    const difference = targetDate.getTime() - today.getTime();
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  const daysLeft = calculateDaysLeft();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-100 dark:bg-indigo-900/40 rounded-full">
            IT Department, TKREC Presents
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            Tech <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400">
              Sparks
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10">
            A premium technical symposium where innovation meets passion. Join the biggest gathering of tech enthusiasts and showcase your skills.
          </p>

          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="inline-flex flex-col items-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-xl shadow-indigo-500/5">
              <div className="flex items-center gap-3 text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">
                <Calendar className="text-indigo-600" size={32} />
                <span>6th & 7th March, 2026</span>
              </div>
              <div className="flex gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                <span>6th Tech</span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span>7th Non-Tech</span>
              </div>
              <div className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full font-black text-sm animate-pulse shadow-lg shadow-indigo-500/30">
                {daysLeft} Days to Go!
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 dark:shadow-indigo-900/20"
              >
                Explore Events
              </motion.button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-12">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl mb-3 text-indigo-600 dark:text-indigo-400">
                <Rocket className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold dark:text-white">10+</span>
              <span className="text-sm text-slate-500 dark:text-slate-500">Events</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl mb-3 text-purple-600 dark:text-purple-400">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold dark:text-white">500+</span>
              <span className="text-sm text-slate-500 dark:text-slate-500">Participants</span>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <div className="bg-violet-100 dark:bg-violet-900/30 p-3 rounded-xl mb-3 text-violet-600 dark:text-violet-400">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold dark:text-white">₹50K+</span>
              <span className="text-sm text-slate-500 dark:text-slate-500">Prize Pool</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
