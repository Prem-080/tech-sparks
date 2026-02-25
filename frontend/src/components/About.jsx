
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Heart } from 'lucide-react';

const AboutFeature = ({ icon: Icon, title, description }) => (
  <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-indigo-600 dark:text-indigo-400">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 dark:text-white">
              More than just a Fest, <br />
              <span className="text-indigo-600 dark:text-indigo-400">It's a Community.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Tech Sparks was born from the vision of the Department of Information Technology, TKRC. Join us on 6th & 7th March, 2026 for an unforgettable experience where creators, coders, and thinkers come together to share knowledge and push boundaries.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border-l-4 border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 rounded-r-xl">
                <p className="font-bold dark:text-white">Our Vision</p>
                <p className="text-sm dark:text-slate-400">To foster a culture of technical excellence and innovation among students.</p>
              </div>
              <div className="p-4 border-l-4 border-purple-600 bg-purple-50 dark:bg-purple-900/20 rounded-r-xl">
                <p className="font-bold dark:text-white">Our Mission</p>
                <p className="text-sm dark:text-slate-400">Bridging the gap between theoretical learning and practical implementation.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AboutFeature 
              icon={Zap} 
              title="Fast Paced" 
              description="Events designed to test your quick thinking and problem-solving abilities."
            />
            <AboutFeature 
              icon={ShieldCheck} 
              title="Fair Play" 
              description="Transparent judging and clear rules ensure a level playing field for all."
            />
            <AboutFeature 
              icon={Globe} 
              title="Networking" 
              description="Connect with industry experts and like-minded peers from various colleges."
            />
            <AboutFeature 
              icon={Heart} 
              title="Passion" 
              description="Built by students, for students. We put our hearts into every single detail."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
