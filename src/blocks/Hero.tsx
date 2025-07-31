import { motion } from "motion/react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const nameVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const socialVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-neutral-900">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-purple-500/4 rounded-full blur-3xl"
        />
        <motion.div
          className="absolute bottom-32 right-32 w-96 h-96 bg-cyan-400/4 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center max-w-7xl">
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <motion.p
                className="text-lg sm:text-xl text-neutral-400 font-mono tracking-wide"
                variants={itemVariants}
              >
                Hello, I'm
              </motion.p>
              <div className="relative">
                <motion.div
                  className="absolute -inset-6 bg-slate-500/5 blur-2xl"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.h1
                  className="relative text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-none"
                  variants={nameVariants}
                >
                  Matthew
                  <br />
                  Hocking
                </motion.h1>
              </div>
              <motion.p
                className="text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 font-mono font-medium"
                variants={itemVariants}
              >
                Full Stack Developer
              </motion.p>
            </div>
            <motion.p
              className="text-lg text-neutral-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Bringing unique perspective from hospitality management to building modern web applications with clean, user-focused code.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col items-center lg:items-end space-y-8"
            variants={containerVariants}
          >
            <div className="flex flex-col w-full max-w-sm space-y-4">
              <motion.a
                href="#projects"
                className="relative w-full py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg transition-colors block text-center cursor-pointer"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                <span className="relative z-10">View My Work</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="relative w-full py-4 px-8 border-2 border-blue-600 hover:bg-blue-600/10 text-white font-bold text-lg rounded-lg transition-colors backdrop-blur-sm block text-center cursor-pointer"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                <span className="relative z-10">Get In Touch</span>
              </motion.a>
            </div>

            <motion.div className="flex space-x-6" variants={containerVariants}>
              <motion.a
                href="https://www.linkedin.com/in/matthew-rsc-hocking/"
                target="_blank"
                aria-label="LinkedIn profile"
                rel="noopener noreferrer"
                className="group relative p-3 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700/50 hover:border-blue-500/50 transition-colors"
                variants={socialVariants}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-neutral-300 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://github.com/Matthew-Hocking"
                target="_blank"
                aria-label="Github profile"
                rel="noopener noreferrer"
                className="group relative p-3 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700/50 hover:border-slate-400/50 transition-colors"
                variants={socialVariants}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(100, 116, 139, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-neutral-300 group-hover:text-slate-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    <motion.div
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-neutral-400"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
    >
      <svg
        className="w-6 h-6 text-neutral-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="2" width="10" height="20" rx="5" />
        <line x1="12" y1="6" x2="12" y2="10" />
      </svg>
      <p className="text-sm font-mono">Scroll for more</p>
    </motion.div>
    </section>
  );
};

export default Hero;