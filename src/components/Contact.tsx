import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0d0d0d] border-t border-[#262626]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s <span className="text-gradient">Connect</span></h2>
        <p className="text-gray-400 mb-12 text-lg">
          I&apos;m currently exploring new opportunities in product engineering. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href="mailto:manojkumarklr2006@gmail.com" className="glass-card p-6 rounded-xl flex flex-col items-center hover:border-blue-500/50 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Mail className="text-blue-400" size={24} />
            </div>
            <h3 className="text-white font-medium mb-1">Email</h3>
            <p className="text-sm text-gray-500">manojkumarklr2006@gmail.com</p>
          </a>
          
          <div className="glass-card p-6 rounded-xl flex flex-col items-center hover:border-blue-500/50 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <MapPin className="text-blue-400" size={24} />
            </div>
            <h3 className="text-white font-medium mb-1">Location</h3>
            <p className="text-sm text-gray-500">Mettur, Salem, Tamil Nadu, India</p>
          </div>
          
          <a href="tel:+918220491290" className="glass-card p-6 rounded-xl flex flex-col items-center hover:border-blue-500/50 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Phone className="text-blue-400" size={24} />
            </div>
            <h3 className="text-white font-medium mb-1">Phone</h3>
            <p className="text-sm text-gray-500">+91 8220491290</p>
          </a>
        </div>
        
        <a 
          href="mailto:manojkumarklr2006@gmail.com"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
