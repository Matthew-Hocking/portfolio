import { useRef } from "react";
import { easeInOut, easeOut, motion, useInView } from "motion/react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
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
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-yellow-400/70 to-orange-500/70",
      glowColor: "rgba(250, 204, 21, 0.3)",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Storybook",
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-blue-400/70 to-purple-500/70",
      glowColor: "rgba(59, 130, 246, 0.3)",
      skills: ["Node.js", "PHP", "REST APIs", "GraphQL", "Prisma"],
    },
    {
      title: "Database & Search",
      icon: "🗄️",
      color: "from-green-400/70 to-teal-500/70",
      glowColor: "rgba(34, 197, 94, 0.3)",
      skills: ["SQL", "PostgreSQL", "Algolia", "Firebase", "Supabase"],
    },
    {
      title: "Content Management",
      icon: "📝",
      color: "from-pink-400/70 to-rose-500/70",
      glowColor: "rgba(236, 72, 153, 0.3)",
      skills: ["DatoCMS", "Silverstripe", "StoryBlok"],
    },
    {
      title: "DevOps & Version Control",
      icon: "🚀",
      color: "from-indigo-400/70 to-cyan-500/70",
      glowColor: "rgba(99, 102, 241, 0.3)",
      skills: ["Git", "GitHub", "Docker", "Vercel"],
    },
    {
      title: "Currently Learning",
      icon: "🌱",
      color: "from-violet-400/70 to-purple-500/70",
      glowColor: "rgba(139, 92, 246, 0.3)",
      skills: ["Python", "FastAPI"],
      isLearning: true,
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-40 bg-neutral-800 overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/6 rounded-full blur-3xl"
          animate={floatingVariants.float}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-80 h-80 bg-blue-500/4 rounded-full blur-3xl"
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 1 },
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-48 h-48 bg-green-400/5 rounded-full blur-3xl"
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
          className="space-y-12"
        >
          <motion.div
            className="text-center space-y-4"
            variants={categoryVariants}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 blur-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}
              />
              <motion.h2
                className="relative text-4xl sm:text-5xl font-bold text-white"
                style={{
                  textShadow: "0 0 30px rgba(250, 204, 21, 0.2)",
                }}
              >
                Technical Skills
              </motion.h2>
            </div>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto"
              style={{
                boxShadow: "0 0 20px rgba(250, 204, 21, 0.5)",
              }}
            />
            <motion.p
              className="text-lg text-neutral-300 max-w-2xl mx-auto"
              variants={categoryVariants}
            >
              A comprehensive toolkit of modern technologies I use to bring
              ideas to life
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="relative group"
                variants={categoryVariants}
              >
                <div className="relative p-6 bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 overflow-hidden h-full">
                  <div className="relative space-y-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-bold text-white font-mono group-hover:text-neutral-100 transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className={`px-3 py-1.5 text-sm font-medium bg-gradient-to-r ${category.color} text-white rounded-full shadow-lg relative overflow-hidden group/skill`}
                          variants={skillVariants}
                          style={{
                            textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          <span className="relative z-10 font-mono">
                            {skill}
                          </span>
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
