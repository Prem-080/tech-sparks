import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Zap, Gamepad2, Map, Camera, ArrowRight } from 'lucide-react';
import { events } from '../data/events';
import {cn} from '../utils/cn';

const iconMap = {
  Code2,
  Globe,
  Zap,
  Gamepad2,
  Map,
  Camera
};

const EventCard = ({ event }) => {
  const Icon = iconMap[event.icon] || Code2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
          <Icon size={28} />
        </div>
        <span className="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 py-1 px-3 border border-slate-100 dark:border-slate-700 rounded-full">
          Live Soon
        </span>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {event.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-2 leading-relaxed">
        {event.description}
      </p>

      <div className="space-y-3 mb-8">
        {event.rules.slice(0, 2).map((rule, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            {rule}
          </div>
        ))}
      </div>

      <button className="w-full py-4 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-2xl flex items-center justify-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-all">
        View Details <ArrowRight size={18} />
      </button>
    </motion.div>
  );
};

const Events = () => {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <section id="events" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6 dark:text-white"
          >
            Choose Your <span className="text-indigo-600 dark:text-indigo-400">Battlefield</span>
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            From hardcore coding challenges to creative photography contests, we have something for everyone. Pick your category and register now.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <button
              onClick={() => setActiveTab('technical')}
              className={cn(
                "px-8 py-3 rounded-xl font-bold transition-all",
                activeTab === 'technical' 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20" 
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              )}
            >
              Technical Events
            </button>
            <button
              onClick={() => setActiveTab('nonTechnical')}
              className={cn(
                "px-8 py-3 rounded-xl font-bold transition-all",
                activeTab === 'nonTechnical' 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20" 
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              )}
            >
              Non-Technical
            </button>
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {events[activeTab].map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
