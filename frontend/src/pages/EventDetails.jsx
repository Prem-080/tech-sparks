import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, Users, Trophy, ExternalLink, Shield } from 'lucide-react';
import { events } from '../data/events';
import techEventImg from '../assets/tech_event_img.jpg';

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const REGISTER_URL = "https://forms.gle/1ZJyuYiv8cQxKL6x6";

  // Flatten events to find the selected one
  const allEvents = [...events.technical, ...events.nonTechnical, ...events.gaming];
  const event = allEvents.find(e => e.id === eventId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold dark:text-white mb-4">Event Not Found</h2>
          <button 
            onClick={() => navigate('/events/tech-sparks-reloaded')}
            className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} /> Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-black mb-6 dark:text-white uppercase tracking-tight">
                {event.title}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                {event.description}
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-3">
                    <Shield className="text-indigo-600" /> Event Rules
                  </h3>
                  <div className="grid gap-4">
                    {event.rules.map((rule, idx) => (
                      <div key={idx} className="p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">{rule}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white">
                  <h3 className="text-2xl font-bold mb-4">Registration Note</h3>
                  <p className="opacity-90 mb-6">
                    Make sure to arrive 30 minutes before the event starts. For team events, only one representative needs to register the entire team.
                  </p>
                  <a 
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-xl shadow-indigo-900/20"
                  >
                    Register for {event.title} <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm sticky top-32"
            >
              <h3 className="text-xl font-bold mb-8 dark:text-white pb-6 border-b border-slate-100 dark:border-slate-700">Quick Info</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Schedule</p>
                    <p className="font-bold dark:text-white">Coming Soon</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Venue</p>
                    <p className="font-bold dark:text-white">TKREC Campus</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Participation</p>
                    <p className="font-bold dark:text-white">{event.rules[0]}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Prizes</p>
                    <p className="font-bold dark:text-white text-indigo-600 dark:text-indigo-400">Certificates & Cash</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Register Now <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
