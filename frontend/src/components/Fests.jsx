import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import techEventImg from '../assets/tech_event_img.jpg';
import imageLinks from '../data/image_links.json';

const FestCard = ({ title, description, date, location, image, link }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="aspect-16/10 overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent z-10" />
        <img 
          src={image || techEventImg} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-widest uppercase border border-white/30">
            Featured Fest
          </span>
        </div>
      </div>

      <div className="p-10 relative">
        <div className="flex gap-6 mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Calendar size={16} className="text-indigo-600 dark:text-indigo-400" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin size={16} className="text-indigo-600 dark:text-indigo-400" />
            <span>{location}</span>
          </div>
        </div>

        <h3 className="text-3xl font-black mb-4 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed line-clamp-2">
          {description}
        </p>

        <button 
          onClick={() => navigate(link)}
          className="group/btn relative w-full py-5 bg-slate-900 dark:bg-indigo-600 text-white font-black rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-95"
        >
          <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
          <span className="relative flex items-center justify-center gap-2">
            Explore Events <ArrowRight size={20} />
          </span>
        </button>
      </div>
    </motion.div>
  );
};



const Fests = () => {
  const getFestImage = (id, fallback) => {
    return imageLinks.fests.find(f => f.id === id)?.image || fallback;
  };

  return (
    <section id="events" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-px w-12 bg-indigo-600/30" />
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm">Our Fests</span>
            <div className="h-px w-12 bg-indigo-600/30" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 dark:text-white"
          >
            Annual <span className="text-indigo-600 dark:text-indigo-400">Celebrations</span>
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Join us for our major technical and cultural symposiums. Each fest brings its own unique flavor of competition and learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <FestCard 
            title="Tech Sparks Nova"
            description="The flagship technical symposium of the IT Department. Featuring high-stakes coding, innovative projects, and creative competitions."
            date="Coming Soon"
            location="TKREC Campus"
            link="/events/tech-sparks-nova"
            image={getFestImage('tech-sparks-nova', techEventImg)}
          />
          
          <div className="group relative bg-white/50 dark:bg-slate-800/30 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center p-10 text-center">
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-full mb-6">
              <Sparkles size={40} className="text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-400">More Coming Soon</h3>
            <p className="text-slate-400 text-sm">Stay tuned for more exciting fests and events.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fests;
