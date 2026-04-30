import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Attendance Management System",
      description: "Designed and developed a scalable attendance tracking platform with role-based access control. Implemented secure authentication, robust RESTful APIs for data handling, and an intuitive admin dashboard, significantly improving operational tracking efficiency.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      features: [
        "Secure Role-Based Authentication",
        "Admin Analytics Dashboard",
        "Automated Data Handling",
        "Scalable RESTful API Architecture"
      ],
      github: "https://github.com/ManojKumar1303-bit/payroll-salary-analyser",
      live: "https://payroll-salary-analyser.vercel.app/upload",
      featured: true,
      image: "/project1.png"
    },
    {
      title: "Beverage Brand Corporate Platform",
      description: "Engineered a high-performance corporate web platform focusing on optimal UI/UX and seamless frontend performance. Integrated third-party APIs to support dynamic features including an intelligent chatbot and a product recommendation engine.",
      tech: ["HTML5", "CSS3", "TypeScript", "REST APIs", "Vercel","Responsive UI"],
      features: [
        "Intelligent Chatbot Integration",
        "Product Recommendation System",
        "Optimized Frontend Architecture",
        "Responsive Modern UI"
      ],
      github: "https://github.com/ManojKumar1303-bit/Goli-soda-website",
      live: "https://kaaraalan.vercel.app/",
      featured: false,
      image: "/project2.png"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Engineering</span></h2>
          <p className="text-gray-400 max-w-2xl">
            A selection of projects demonstrating my ability to build full-stack applications from concept to deployment.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-2xl overflow-hidden flex flex-col ${project.featured ? 'lg:flex-row' : 'lg:flex-row-reverse'} border ${project.featured ? 'border-blue-500/30' : 'border-[#262626]'}`}
            >
              {/* Project Content */}
              <div className="p-8 lg:w-1/2 flex flex-col justify-center relative">
                {project.featured && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Featured Project
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4 text-white hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-md border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub size={18} />
                    Source Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Image Preview */}
              <div className="lg:w-1/2 bg-[#111111] p-8 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[#262626]">
                <div className="w-full aspect-video rounded-lg border border-[#262626] bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                  <Image 
                    src={project.image}
                    alt={`${project.title} Preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

