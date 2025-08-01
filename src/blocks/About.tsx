import { motion, useInView, easeOut, easeInOut } from "motion/react";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-6, 6, -6],
      transition: { duration: 8, repeat: Infinity, ease: easeInOut },
    },
  };

  const interests = [
    "Music Production",
    "Hiking & Outdoors",
    "Fitness",
    "Culinary Arts",
    "Woodworking",
    "Reading",
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/3 rounded-full blur-3xl"
          animate={floatingVariants.float}
        />
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-400/6 rounded-full blur-3xl"
          animate={floatingVariants.float}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-80 h-80 bg-blue-500/4 rounded-full blur-3xl"
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 1 },
          }}
        />
        <motion.div
          className="absolute top-1/5 right-10 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 2 },
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          <motion.div
            className="flex flex-col justify-start space-y-8"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="relative inline-block">
                <motion.div
                  className="absolute -inset-6 bg-slate-500/5 blur-2xl"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.h2
                  className="relative text-4xl sm:text-5xl font-bold text-white"
                  variants={itemVariants}
                >
                  About Me
                </motion.h2>
              </div>
              <motion.div
                className="w-24 h-1 bg-blue-500 rounded-full"
                variants={itemVariants}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                I transitioned into development from a career in hospitality
                management driven by a desire to build, create, and solve
                complex problems in an industry with limitless growth potential.
              </p>

              <p className="text-lg text-neutral-300 leading-relaxed">
                During my 2+ years at{" "}
                <a
                  href="https://www.haunt.digital/"
                  className="text-blue-400 underline font-roboto"
                >
                  Haunt Digital
                </a>
                , I led a replatforming project, successfully migrating a
                content-driven site to a modern tech stack.
              </p>

              <p className="text-lg text-neutral-300 leading-relaxed">
                My years in hospitality management taught me to thrive under
                pressure, manage competing priorities, and maintain strong
                client relationships—skills that prove invaluable when
                delivering complex technical projects on tight timelines.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="flex flex-col space-y-8">
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white">What I Bring</h3>
                <div className="space-y-3">
                  <motion.div
                    className="flex items-start space-x-3 p-6 bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-neutral-600/50 transition-colors"
                    variants={skillVariants}
                    whileHover={{
                      backgroundColor: "rgba(38, 38, 38, 0.7)",
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        High-Pressure Performance
                      </h4>
                      <p className="text-neutral-300 leading-relaxed">
                        Years in fast-paced hospitality taught me to deliver
                        quality results under tight deadlines and changing
                        requirements.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-3 p-6 bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-neutral-600/50 transition-colors"
                    variants={skillVariants}
                    whileHover={{
                      backgroundColor: "rgba(38, 38, 38, 0.7)",
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Client-Focused Mindset
                      </h4>
                      <p className="text-neutral-300 leading-relaxed">
                        Extensive experience in client-facing roles means I
                        build with the end user's needs and experience at the
                        forefront.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-3 p-6 bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-neutral-600/50 transition-colors"
                    variants={skillVariants}
                    whileHover={{
                      backgroundColor: "rgba(38, 38, 38, 0.7)",
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-3 h-3 bg-slate-300 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Multi-Tasking Mastery
                      </h4>
                      <p className="text-neutral-300 leading-relaxed">
                        Proven ability to manage multiple projects and
                        priorities simultaneously while maintaining attention to
                        detail.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white">Beyond Code</h3>
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  variants={containerVariants}
                >
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-neutral-800/30 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-neutral-600/50 transition-colors"
                      variants={skillVariants}
                      whileHover={{
                        backgroundColor: "rgba(38, 38, 38, 0.5)",
                        scale: 1.02,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-neutral-200 font-medium text-sm">
                        {interest}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
