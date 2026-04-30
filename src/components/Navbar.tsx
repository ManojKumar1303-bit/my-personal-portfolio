import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Manoj<span className="text-gradient">.dev</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#about" className="hover:text-blue-400 transition-colors text-sm font-medium">About</Link>
              <Link href="#skills" className="hover:text-blue-400 transition-colors text-sm font-medium">Skills</Link>
              <Link href="#projects" className="hover:text-blue-400 transition-colors text-sm font-medium">Projects</Link>
              <Link href="#contact" className="hover:text-blue-400 transition-colors text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/manojkumaru" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/manojkumaru" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
