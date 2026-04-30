export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT)", "Python"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "Mongoose"]
    },
    {
      title: "Tools & Deployment",
      skills: ["Git", "GitHub", "Docker", "Vercel", "Netlify", "Render"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0d0d0d] relative border-y border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to build scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-[#262626] pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1.5 bg-[#262626] text-gray-300 text-sm rounded-md border border-[#333333] hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
