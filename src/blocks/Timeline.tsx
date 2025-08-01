import { useRef } from "react";
import { easeInOut, easeOut, motion, useInView } from "motion/react";

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.5, ease: easeOut, delay: 0.5 },
    },
  };

  const floatingVariants = {
    float: {
      y: [-8, 8, -8],
      transition: { duration: 6, repeat: Infinity, ease: easeInOut },
    },
  };

  const timelineData = [
    {
      period: "Foundation Phase",
      title: "Service & Leadership Foundation",
      company: "Hospitality & Retail Industry",
      description: "Built core professional skills through diverse service industry roles including chef and department management positions. Developed expertise in high-pressure environments, customer service excellence, and team coordination.",
      skills: [
        "Problem Solving",
        "Working Under Pressure",  
        "Customer Focus",
        "Team Collaboration",
        "Attention to Detail",
        "Quality Standards"
      ],
      color: "slate-400",
      iconBg: "bg-slate-600",
      accent: "border-slate-500"
    },
    {
      period: "Leadership Phase",
      title: "Operations & Systems Thinking", 
      company: "Hospitality Management",
      description: "Advanced to duty manager role overseeing daily operations, managing teams, and implementing process improvements. Developed systematic approaches to complex operational challenges and stakeholder management.",
      skills: [
        "Leadership & Mentoring",
        "Process Optimization",
        "Systems Thinking",
        "Conflict Resolution",
        "Resource Management",
        "Performance Analysis"
      ],
      color: "slate-300",
      iconBg: "bg-slate-500",
      accent: "border-slate-400"
    },
    {
      period: "Transition Phase",
      title: "Technical Foundation Building",
      company: "Self-Directed Learning",
      description: "Made strategic career pivot into software development through intensive self-study, online courses, and hands-on coding practice. Built first projects while developing programming fundamentals and modern web technologies.",
      skills: [
        "Self-Directed Learning",
        "Programming Fundamentals",
        "HTML/CSS/JavaScript",
        "Problem Decomposition",
        "Documentation & Research",
        "Version Control"
      ],
      color: "blue-200",
      iconBg: "bg-blue-600",
      accent: "border-blue-500"
    },
    {
      period: "Growth Phase",
      title: "Full-Stack Development",
      company: "Modern Web Applications",
      description: "Evolved into full-stack development creating production-ready applications using React, Next.js, and backend technologies. Continuously expanding technical expertise while applying service industry insights to user experience design.",
      skills: [
        "React & Next.js",
        "TypeScript",
        "Database Design",
        "API Development",
        "User Experience",
        "Deployment & DevOps"
      ],
      color: "blue-100",
      iconBg: "bg-blue-500",
      accent: "border-blue-400"
    }
  ];

  return (
    <section
      id="timeline"
      className="relative py-40 bg-neutral-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[
          {
            size: "w-96 h-96",
            color: "bg-slate-500/3",
            position: "top-20 left-10",
          },
          {
            size: "w-80 h-80",
            color: "bg-slate-400/4",
            position: "bottom-32 right-16",
            delay: 2,
          },
        ].map((orb, index) => (
          <motion.div
            key={index}
            className={`absolute ${orb.position} ${orb.size} ${orb.color} rounded-full blur-3xl`}
            animate={floatingVariants.float}
            transition={{ delay: orb.delay || 0 }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div className="text-center space-y-6" variants={itemVariants}>
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
              <h2 className="relative text-4xl sm:text-5xl font-bold text-white">
                Skills Evolution
              </h2>
            </div>
            <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto" />
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              From service excellence to software development - a strategic evolution of skills and expertise
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 w-1 bg-slate-600 origin-top"
              style={{ height: "calc(100% - 2rem)" }}
              variants={lineVariants}
            />

            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative flex items-start space-x-8"
                  variants={itemVariants}
                  custom={index}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full ${item.iconBg} flex items-center justify-center shadow-lg border-2 ${item.accent}`}
                    >
                      <div className="w-6 h-6 bg-neutral-300 rounded-full" />
                    </motion.div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="flex-1 bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50 shadow-2xl"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(38, 38, 38, 0.7)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4">
                      {/* Period Badge */}
                      <motion.span
                        className={`inline-block px-4 py-2 bg-neutral-700 text-${item.color} text-sm font-semibold rounded-full border border-neutral-600`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.period}
                      </motion.span>

                      {/* Title and Company */}
                      <div>
                        <h3
                          className={`text-2xl sm:text-3xl font-bold text-${item.color} mb-2`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-neutral-300 font-medium">
                          {item.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-neutral-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h4 className="text-white font-semibold">Key Skills Developed</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              className="px-3 py-1 bg-neutral-700/70 text-neutral-200 text-sm rounded-full border border-neutral-600/50"
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(64, 64, 64, 0.9)",
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: (index * 0.1) + (skillIndex * 0.05) + 0.5,
                                duration: 0.3,
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div className="text-center pt-12" variants={itemVariants}>
            <motion.p
              className="text-neutral-400 mb-6"
              variants={itemVariants}
            >
              Ready to bring this unique blend of skills to your team?
            </motion.p>
            <motion.button
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">Let's Connect</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;