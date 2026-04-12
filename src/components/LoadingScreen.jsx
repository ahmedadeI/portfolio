import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Background Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-40 h-40 bg-primary/20 rounded-full blur-3xl mix-blend-screen"
        ></motion.div>

        {/* Text Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative z-10 text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent tracking-tighter"
        >
          𝓐𝓱𝓶𝓮𝓭.𝓐𝓭𝓮𝓵
        </motion.div>

        {/* Loading Bar */}
        <div className="mt-8 w-48 h-1 bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;