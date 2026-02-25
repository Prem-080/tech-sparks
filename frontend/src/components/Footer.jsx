import { Sparkles, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import logoTkr from '../assets/logo_tkr.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-900 pt-24 pb-12 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoTkr} alt="TKRC Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold dark:text-white">Tech Sparks</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              The official technical symposium of the IT Department, TKR College of Engineering & Technology. Empowering the next generation of innovators.
            </p>
            <div className="flex gap-4">
              {/* <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all"
              >
                <Twitter size={20} />
              </a> */}
              <a 
                href="https://www.instagram.com/techspark__nova/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all"
              >
                <Instagram size={20} />
              </a>
              {/* <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all"
              >
                <Github size={20} />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 dark:text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/#about' },
                { name: 'Events', href: '/#events' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 dark:text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <MapPin className="text-indigo-600 shrink-0" size={20} />
                <span>IT Dept, TKRC, Meerpet, Hyderabad</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Phone className="text-indigo-600 shrink-0" size={20} />
                <span>+91 xxxxx xxxxx</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Mail className="text-indigo-600 shrink-0" size={20} />
                <span>
techsparksnova@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 dark:text-white">Newsletter</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Stay updated with the latest event announcements and schedules.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white transition-all text-sm"
              />
              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-100 dark:shadow-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Tech Sparks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
