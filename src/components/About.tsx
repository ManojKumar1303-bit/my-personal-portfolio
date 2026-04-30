import { Code2, Server, Database } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Engineering with <span className="text-gradient">Purpose</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                My journey into software engineering began from an unconventional background—Biotechnology. 
                This foundation instilled in me a deep appreciation for complex, interconnected systems 
                and analytical problem-solving.
              </p>
              <p>
                Today, I channel that analytical mindset into building scalable web applications. 
                I specialize in the modern JavaScript ecosystem, crafting robust full-stack solutions 
                that prioritize performance, architecture, and user experience.
              </p>
              <p>
                Whether it&apos;s designing RESTful APIs, optimizing database queries, or creating 
                seamless frontend interfaces, I focus on delivering product-driven engineering 
                that solves real-world challenges.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
              <Code2 className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400 text-sm">Building responsive, accessible, and performant user interfaces with React and Next.js.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl hover:border-blue-500/50 transition-colors sm:translate-y-8">
              <Server className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-gray-400 text-sm">Designing scalable microservices and RESTful APIs with Node.js and Express.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
              <Database className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Architecture</h3>
              <p className="text-gray-400 text-sm">Structuring data models and optimizing operations across MongoDB and MySQL.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
