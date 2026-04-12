import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const socials = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ahmed-adel-a3ab00357/", color: "hover:text-[#0a66c2]" },
    { icon: <FaGithub />, link: "https://github.com/ahmedadeI", color: "hover:text-white" },
    { icon: <FaFacebook />, link: "http://facebook.com/ahmed.adell72", color: "hover:text-[#1877f2]" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/ahmed_adel7536/", color: "hover:text-[#E1306C]" },
    { icon: <FaWhatsapp />, link: "https://wa.me/201550540600", color: "hover:text-[#25D366]" }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-primary/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let's Work <span className="text-primary">Together</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-slate-400 mb-12"
        >
          Have a project in mind or just want to say hi? I'm currently open for new opportunities. Let's build something awesome.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
          className="flex justify-center gap-6 md:gap-8 mb-16"
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`text-3xl md:text-4xl text-slate-500 transition-colors duration-300 ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          href="mailto:adlahmed512f@gmail.com"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
        >
          Say Hello 👋
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
