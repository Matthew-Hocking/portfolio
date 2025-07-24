import { motion, useInView, easeOut } from "motion/react";
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

  const hobbies: { icon: string; title: string }[] = [
    {
      icon: "🎸",
      title: "Writing  Music",
    },
    {
      icon: "🥾",
      title: "Hiking and the Outdoors",
    },
    {
      icon: "🏋",
      title: "Weightlifting",
    },
    {
      icon: "👨‍🍳",
      title: "Cooking",
    },
    {
      icon: "🪓",
      title: "Woodworking",
    },
    {
      icon: "📖",
      title: "Reading",
    }
  ];

  return (
    <section id="about" className="py-40 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div
            className="flex flex-col self-start justify-center lg:justify-start space-y-8"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold text-white"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                variants={itemVariants}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                I'm a passionate fullstack developer with over 5 years of
                experience crafting digital solutions that make a difference. My
                journey began with curiosity about how websites work, and it's
                evolved into a love for building scalable, user-centered
                applications.
              </p>

              <p className="text-lg text-neutral-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech
                trends, contributing to open-source projects, or sharing
                knowledge with the developer community. I believe in writing
                clean, maintainable code and creating experiences that users
                genuinely enjoy.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-neutral-900 font-bold rounded-lg shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="flex self-start space-y-8">
            <motion.div variants={containerVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">My Approach</h3>
                <div className="space-y-3">
                  <motion.div
                    className="flex items-start space-x-3 p-4 bg-neutral-800 rounded-lg border border-neutral-700"
                    variants={skillVariants}
                    whileHover={{ backgroundColor: "#262626" }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-yellow-400 rounded-full mt-1 flex-shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div>
                      <h4 className="font-semibold text-neutral-200 mb-1">
                        User-Centered Design
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Every line of code should serve a purpose and enhance
                        the user experience.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-3 p-4 bg-neutral-800 rounded-lg border border-neutral-700"
                    variants={skillVariants}
                    whileHover={{ backgroundColor: "#262626" }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-orange-500 rounded-full mt-1 flex-shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <div>
                      <h4 className="font-semibold text-neutral-200 mb-1">
                        Continuous Learning
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Technology evolves rapidly, and I'm always exploring new
                        tools and techniques.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div className="space-y-4" variants={containerVariants}>
                <h3 className="text-2xl font-bold text-white">Beyond Code</h3>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3" variants={containerVariants}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      className="flex items-center space-x-3 p-3 bg-neutral-800 rounded-lg border border-neutral-700"
                      variants={skillVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "#262626" }}
                    >
                      <span className="text-2xl">{hobby.icon}</span>
                      <span className="text-neutral-200 font-medium">
                        {hobby.title}
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
