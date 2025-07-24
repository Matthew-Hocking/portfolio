import { easeInOut, motion } from "motion/react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/linkedin";
import "react-social-icons/github";

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
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut
      },
    },
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 to-neutral-700">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
          animate={floatingVariants.float}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl"
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 2 },
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-32 h-32 bg-yellow-300/15 rounded-full blur-2xl"
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 1 },
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center max-w-7xl">
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <motion.p
                className="text-lg sm:text-xl text-neutral-300 font-mono tracking-wide"
                variants={itemVariants}
              >
                Hey there, I'm
              </motion.p>
              <div className="relative">
                {/* Glowing background for name */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl"
                  animate={pulseVariants.pulse}
                />
                <motion.h1
                  className="relative text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-none"
                  variants={nameVariants}
                  style={{
                    textShadow: "0 0 40px rgba(250, 204, 21, 0.3)",
                  }}
                >
                  Matthew
                  <br />
                  Hocking
                </motion.h1>
              </div>
              <motion.p
                className="relative text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-mono font-medium"
                variants={itemVariants}
                style={{
                  textShadow: "0 0 30px rgba(251, 191, 36, 0.5)",
                }}
              >
                Fullstack Developer
              </motion.p>
            </div>
            <motion.p
              className="text-lg text-neutral-200 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Crafting digital experiences with modern technologies and creative
              problem-solving.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col items-center lg:items-end space-y-8"
            variants={containerVariants}
          >
            <div className="flex flex-col w-full max-w-sm space-y-4">
              <motion.button
                className="relative w-full py-4 px-8 bg-yellow-400 text-zinc-900 font-bold text-lg rounded-lg shadow-lg overflow-hidden group"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#fde047",
                }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                <span className="relative z-10">View My Work</span>
              </motion.button>

              <motion.button
                className="relative w-full py-4 px-8 border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-lg overflow-hidden group backdrop-blur-sm"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#facc15",
                  color: "#18181b",
                }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
                style={{
                  background: "rgba(250, 204, 21, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
            </div>

            <motion.div className="flex space-x-4" variants={containerVariants}>
              <motion.div
                className="group relative"
                variants={socialVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialIcon
                  aria-label="My LinkedIn Profile"
                  url="https://www.linkedin.com/in/matthew-rsc-hocking/"
                  target="_blank"
                  bgColor="#0A66C2"
                  fgColor="#FFFFFF"
                />
              </motion.div>

              <motion.div
                className="group relative"
                variants={socialVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialIcon
                  aria-label="My GitHub Profile"
                  url="https://github.com/Matthew-Hocking"
                  target="_blank"
                  bgColor="#181717"
                  fgColor="#FFFFFF"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
