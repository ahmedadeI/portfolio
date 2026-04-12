import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, user authentication, and an intuitive admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics tool tracking engagement across multiple platforms with real-time data visualization and charts.",
      tech: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "AI Image Generator",
      description: "A creative web app that generates high-quality images from text prompts using advanced machine learning models.",
      tech: ["Next.js", "Python Fast API", "OpenAI API", "Framer Motion"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="work" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-4xl font-bold text-white mb-4"
          >
            My <span className="text-accent">Work</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl group hover:border-slate-600 transition-all duration-300"
            >
              <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-slate-900 opacity-50 z-10"></div>
                <h3 className="text-3xl font-black text-slate-700 opacity-20 uppercase tracking-widest z-0 transform -rotate-12 select-none pointer-events-none">Placeholder</h3>
                {/* Image placeholder */}
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-3 h-20">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 h-16">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    Code
                  </a>
                  <a href={project.link} className="text-primary hover:text-accent transition-colors flex items-center gap-2 font-medium">
                    Live Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
