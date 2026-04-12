import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl text-primary font-medium tracking-wide mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Ahmed Adel
          </h1>
          <div className="text-2xl md:text-4xl font-semibold text-slate-300 h-16 mb-6">
            <TypeAnimation
              sequence={[
                'Software Engineer', 2000,
                'AI & Machine Learning', 2000,
                'Web Developer', 2000,
                'Creative Thinker', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
            />
          </div>
          <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build exceptional, high-quality, and modern web applications. Welcome to my professional portfolio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg shadow-lg shadow-primary/30 transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-lg hover:border-white hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent animate-spin-slow opacity-50 blur-xl"></div>
            <img 
              src="/assets/profile.jpeg" 
              alt="Ahmed Adel" 
              className="relative rounded-full w-full h-full object-cover border-4 border-slate-800 shadow-2xl z-10 p-1"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
