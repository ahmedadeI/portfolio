import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-white mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg text-slate-400 space-y-6"
          >
            <p>
              I am a passionate developer focused on creating clean, elegant, and highly functional digital experiences. With a strong foundation in modern web technologies, I bring ideas to life on the screen.
            </p>
            <p>
              My expertise spans across building scalable front-end architectures using React, implementing stunning UI/UX designs, writing efficient backend logic, and exploring Artificial Intelligence and Machine Learning solutions. I am constantly learning and adapting to the latest trends in software development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, contributing to open-source, or learning new frameworks to expand my skillset.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-dark p-8 rounded-2xl border border-slate-800 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-slate-700 pb-4">Professional Details</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex"><span className="w-24 font-bold text-primary">Name:</span> <span>Ahmed Adel</span></li>
              <li className="flex"><span className="w-24 font-bold text-primary">Location:</span> <span>Egypt</span></li>
              <li className="flex"><span className="w-24 font-bold text-primary">Freelance:</span> <span className="text-green-400">Available</span></li>
              <li className="flex"><span className="w-24 font-bold text-primary">Email:</span> <span><a href="mailto:adlahmed512f@gmail.com" className="hover:text-white transition-colors">adlahmed512f@gmail.com</a></span></li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-dark font-bold rounded-lg shadow-lg hover:bg-slate-200 transition-colors"
              >
                <FaDownload className="mr-2" /> Download CV
              </motion.a>
              <p className="text-sm text-slate-500 text-center mt-3 italic">CV File Placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
