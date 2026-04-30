import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#262626] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Manoj Kumar U. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/manojkumaru" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/manojkumaru" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-500 hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
