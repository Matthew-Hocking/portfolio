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
      color: "from-yellow-400/70 to-orange-500/70",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Storybook",
        "Vue"
      ],
    },
    {
      title: "Backend Development",
      color: "from-blue-400/70 to-purple-500/70",
      skills: ["Node.js", "PHP", "REST APIs", "GraphQL", "Prisma"],
    },
    {
      title: "Database & Search",
      color: "from-green-400/70 to-teal-500/70",
      skills: ["SQL", "PostgreSQL", "Algolia", "Firebase", "Supabase"],
    },
    {
      title: "Content Management",
      color: "from-pink-400/70 to-rose-500/70",
      skills: ["DatoCMS", "Silverstripe", "StoryBlok"],
    },
    {
      title: "DevOps & Version Control",
      color: "from-indigo-400/70 to-cyan-500/70",
      skills: ["Git", "GitHub", "Docker", "Vercel"],
    },
    {
      title: "Currently Learning",
      color: "from-violet-400/70 to-purple-500/70",
      skills: ["Python", "FastAPI", "Astro"],
      isLearning: true,
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 bg-neutral-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-400/6 rounded-full blur-3xl"
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
          <motion.div className="text-center space-y-6" variants={skillVariants}>
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-emerald-500/10 blur-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <h2 className="relative text-4xl sm:text-5xl font-bold text-white">
                Technical Skills
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-full mx-auto shadow-lg shadow-purple-500/50" />
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
                <div className="relative p-6 bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/50 overflow-hidden h-full">
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
                          className={`px-3 py-1.5 text-sm font-medium rounded-full border bg-neutral-700/70 border-neutral-600/50 text-white shadow-lg relative overflow-hidden group/skill`}
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
