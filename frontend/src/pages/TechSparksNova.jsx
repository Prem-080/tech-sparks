import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Zap, Gamepad2, Map, Camera, ArrowRight, ArrowLeft, ExternalLink, Users, Trophy, Flame, Crosshair, PenTool, Lightbulb, Search, CircleDot, Gamepad, Layout, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { events } from '../data/events';
import { team } from '../data/team';
import { cn } from '../utils/cn';

const iconMap = {
  Code2,
  Globe,
  Zap,
  Gamepad2,
  Map,
  Camera,
  Trophy,
  Flame,
  Crosshair,
  PenTool,
  Lightbulb,
  Search,
  CircleDot,
  Gamepad,
  Layout
};

import techEventImg from '../assets/tech_event_img.jpg';

const EventCard = ({ event }) => {
  const Icon = iconMap[event.icon] || Code2;
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={event.image || techEventImg} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/20 backdrop-blur-md text-white border border-white/30">
          <Icon size={24} />
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {event.title}
          </h3>
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 py-1 px-3 border border-slate-100 dark:border-slate-700 rounded-full">
            Live Soon
          </span>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 text-sm leading-relaxed">
          {event.description}
        </p>

        <div className="space-y-2 mb-8">
          {event.rules.slice(0, 2).map((rule, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
              <div className="w-1 h-1 rounded-full bg-indigo-400" />
              {rule}
            </div>
          ))}
        </div>

        <button 
          onClick={() => navigate(`/events/${event.id}`)}
          className="w-full py-4 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-2xl flex items-center justify-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm"
        >
          View Details <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <div className="mt-32 space-y-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-black mb-4 dark:text-white flex items-center justify-center gap-3">
          <Users className="text-indigo-600" /> Meet Our Team
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          The brilliant minds behind Tech Sparks Reloaded.
        </p>
      </div>

      {/* Faculty & Student Organizers */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700">
          <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Faculty Coordinators</h3>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            {team.facultyCoordinators.map((member, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                <span className="font-bold">{member.name}</span>
                <span className="text-sm text-slate-500">{member.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700">
          <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Student Event Organizers</h3>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            {team.organizers.map((member, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                <span className="font-bold">{member.name}</span>
                <span className="text-sm text-slate-500">{member.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Anchors Section */}
      <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-700">
        <h3 className="text-2xl font-bold mb-8 text-indigo-600 dark:text-indigo-400 text-center">Event Anchors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.anchors.map((member, idx) => (
            <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
              <p className="font-bold text-slate-700 dark:text-slate-300 mb-1">{member.name}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{member.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical & Non-Technical Teams */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-black dark:text-white">Technical Team</h3>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700">
            <h4 className="font-bold mb-4 text-slate-400 uppercase tracking-widest text-xs">Student Coordinators</h4>
            <div className="space-y-3">
              {team.technicalTeam.studentCoordinators.map((member, idx) => (
                <div key={idx} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                  <span>{member.name}</span>
                  <span className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-md">{member.year}</span>
                </div>
              ))}
            </div>
            <h4 className="font-bold mt-8 mb-4 text-slate-400 uppercase tracking-widest text-xs">Volunteers</h4>
            <div className="flex flex-wrap gap-2">
              {team.technicalTeam.volunteers.map((member, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 text-xs rounded-full">
                  {member.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-black dark:text-white">Non-Technical Team</h3>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700">
            <h4 className="font-bold mb-4 text-slate-400 uppercase tracking-widest text-xs">Student Coordinators</h4>
            <div className="space-y-3">
              {team.nonTechnicalTeam.studentCoordinators.map((member, idx) => (
                <div key={idx} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                  <span>{member.name}</span>
                  <span className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-md">{member.year}</span>
                </div>
              ))}
            </div>
            <h4 className="font-bold mt-8 mb-4 text-slate-400 uppercase tracking-widest text-xs">Volunteers</h4>
            <div className="flex flex-wrap gap-2">
              {team.nonTechnicalTeam.volunteers.map((member, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 text-xs rounded-full">
                  {member.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechSparksReloaded = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const navigate = useNavigate();
  const REGISTER_URL = "https://forms.gle/1ZJyuYiv8cQxKL6x6";

  const tabs = [
    { id: 'technical', label: 'Technical Events' },
    { id: 'nonTechnical', label: 'Non-Technical' },
    { id: 'gaming', label: 'Multiplayer Games' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-3 transition-all w-fit"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
          
          <motion.a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 dark:shadow-indigo-900/20 flex items-center justify-center gap-2"
          >
            Register Now <ExternalLink size={20} />
          </motion.a>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 dark:text-white"
          >
            Tech Sparks <span className="text-indigo-600 dark:text-indigo-400">Nova</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-col md:flex-row items-center gap-4 mb-10 p-4 bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm"
          >
            <div className="flex items-center gap-3 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl text-indigo-600 dark:text-indigo-400 font-bold">
              <Calendar size={20} />
              <span>6th & 7th March, 2026</span>
            </div>
            <div className="flex items-center gap-4 text-sm font-black uppercase tracking-tighter">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="text-slate-600 dark:text-slate-400">6th: Technical</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-slate-600 dark:text-slate-400">7th: Non-Technical</span>
              </div>
            </div>
          </motion.div>

          <p className="text-lg text-slate-600 dark:text-slate-400">
            Choose your category and explore the various events under our prime fest.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 md:px-8 py-3 rounded-xl font-bold transition-all text-sm md:text-base",
                  activeTab === tab.id 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {events[activeTab].map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </AnimatePresence>
        </motion.div>

        <TeamSection />
      </div>
    </div>
  );
};

export default TechSparksReloaded;

