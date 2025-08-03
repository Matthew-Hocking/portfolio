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

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Haunt Digital",
    duration: "August 2022 - October 2024",
    highlight: "Led replatforming project with 60% performance gains",
    description: "Developed and maintained 10+ full stack applications for diverse clients ranging from small businesses to government organizations and international companies.\
    Worked hands-on with a wide range of technologies and frameworks, adapting quickly to client-specific requirements and technical constraints.\
    Collaborated in Agile teams while serving as primary technical liaison, translating complex business requirements into scalable solutions.",
    achievements: [
      "60% improvement in page loading speeds through strategic replatforming",
      "Adapted to diverse tech stacks across multiple client projects",
      "Direct client communication for technical scoping and requirement gathering",
      "Cross-functional collaboration in sprint planning and project delivery",
      "Delivered solutions for government, enterprise, and startup clients"
    ]
  }
];

  const strengths = [
    {
      icon: "⚡",
      title: "Pressure-Tested",
      description: "Hospitality taught me to deliver quality work when deadlines are tight and requirements are shifting."
    },
    {
      icon: "🎯",
      title: "User-Focused",
      description: "Years of client-facing work means I build with real user needs and business goals in mind."
    },
    {
      icon: "🔄",
      title: "Adaptable",
      description: "Career transition proves I can quickly learn new skills and excel in different environments."
    }
  ];

  const interests = [
    "Songwriting",
    "Weightlifting",
    "Woodworking",
    "Hiking & Outdoors", 
    "Cooking",
    "Reading"
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
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
              className="w-24 h-1 bg-blue-500 rounded-full mx-auto"
              variants={itemVariants}
            />
          </motion.div>

          {/* Main Story */}
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-6"
            variants={itemVariants}
          >
            <p className="text-xl text-neutral-200 leading-relaxed">
              I'm a full stack developer with a unique background in hospitality and retail management. 
              After years of leading teams and solving problems under pressure, I discovered 
              my passion for building digital solutions and made the leap into development.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Experience</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300"
                  variants={skillVariants}
                  whileHover={{
                    backgroundColor: "rgba(38, 38, 38, 0.5)",
                    scale: 1.02,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <div className="flex items-center space-x-2 text-blue-400">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-neutral-500">•</span>
                        <span className="text-neutral-400">{exp.duration}</span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                        {exp.highlight}
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strengths Grid */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">What I Bring</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300 text-center"
                  variants={skillVariants}
                  whileHover={{
                    backgroundColor: "rgba(38, 38, 38, 0.5)",
                    scale: 1.05,
                  }}
                >
                  <div className="text-3xl mb-4">{strength.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{strength.title}</h4>
                  <p className="text-neutral-300 leading-relaxed">{strength.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Interests */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">What I love beyond code</h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
              variants={containerVariants}
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-neutral-800/30 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300 text-center"
                  variants={skillVariants}
                  whileHover={{
                    backgroundColor: "rgba(38, 38, 38, 0.5)",
                    scale: 1.05,
                  }}
                >
                  <span className="text-neutral-200 font-medium">{interest}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.button
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                window.open('/matthew-hocking-cv.pdf', '_blank');
              }}
            >
              Download Resume 
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;