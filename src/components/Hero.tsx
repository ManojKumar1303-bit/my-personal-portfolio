import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I&apos;m <span className="text-gradient">Manoj Kumar U</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl lg:max-w-none mb-4 font-medium">
            Full Stack Developer engineering scalable web applications.
          </p>
          
          <p className="text-lg text-gray-500 max-w-2xl lg:max-w-none mb-10">
            Transforming complex problems into elegant, user-centric solutions. 
            Specialized in React, Next.js, and Node.js ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="#projects" 
              className="group flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-300 bg-[#171717] hover:bg-[#262626] border border-[#262626] rounded-lg transition-all duration-200 w-full sm:w-auto"
            >
              <FileText className="mr-2" size={20} />
              Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-blue-500/30 p-2 overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full z-10 mix-blend-overlay"></div>
            <Image
              src="/profile.jpg"
              alt="Manoj Kumar U"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
