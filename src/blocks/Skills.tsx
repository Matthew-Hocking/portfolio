import { useRef } from "react";
import { easeInOut, easeOut, motion, useInView } from "motion/react";
import type { SimpleIcon } from "simple-icons";
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siStorybook,
  siVuedotjs,
  siNodedotjs,
  siPhp,
  siSwagger,
  siGraphql,
  siPrisma,
  siMysql,
  siPostgresql,
  siAlgolia,
  siFirebase,
  siSupabase,
  siDatocms,
  siGit,
  siGithub,
  siDocker,
  siVercel,
  siPython,
  siFastapi,
  siAstro,
  siStoryblok,
  siExpress,
} from "simple-icons";

interface Skill {
  name: string;
  icon: SimpleIcon | null;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

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

  const iconVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: easeOut,
      },
    },
  };

  const skillCategories: SkillCategory[] = [
    {
      title: "Client-Side Technologies",
      skills: [
        { name: "HTML5", icon: siHtml5 },
        { name: "CSS3", icon: siCss },
        { name: "JavaScript", icon: siJavascript },
        { name: "TypeScript", icon: siTypescript },
        { name: "React", icon: siReact },
        { name: "Vue.js", icon: siVuedotjs },
        { name: "Tailwind CSS", icon: siTailwindcss },
        { name: "Storybook", icon: siStorybook },
      ],
    },
    {
      title: "Server-Side & APIs",
      skills: [
        { name: "Node.js", icon: siNodedotjs },
        { name: "Express", icon: siExpress },
        { name: "PHP", icon: siPhp },
        { name: "REST APIs", icon: siSwagger },
        { name: "GraphQL", icon: siGraphql },
        { name: "Next.js", icon: siNextdotjs },
      ],
    },
    {
      title: "Data & Infrastructure",
      skills: [
        { name: "MySQL", icon: siMysql },
        { name: "PostgreSQL", icon: siPostgresql },
        { name: "Prisma", icon: siPrisma },
        { name: "Firebase", icon: siFirebase },
        { name: "Supabase", icon: siSupabase },
        { name: "Algolia", icon: siAlgolia },
      ],
    },
    {
      title: "Content & Workflow",
      skills: [
        { name: "DatoCMS", icon: siDatocms },
        { name: "Silverstripe", icon: null },
        { name: "Storyblok", icon: siStoryblok },
        { name: "Git", icon: siGit },
        { name: "GitHub", icon: siGithub },
        { name: "Docker", icon: siDocker },
        { name: "Vercel", icon: siVercel },
      ],
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "Python", icon: siPython },
        { name: "FastAPI", icon: siFastapi },
        { name: "Astro", icon: siAstro },
      ],
    },
  ];

  const SimpleIcon = ({
    icon,
    name,
    size = 40,
  }: {
    icon: SimpleIcon | null;
    name: string;
    size?: number;
  }) => {
    if (!icon) {
      return (
        <div
          className="flex items-center justify-center text-white font-bold text-lg bg-neutral-600 rounded"
          style={{ width: size, height: size }}
        >
          {name.charAt(0)}
        </div>
      );
    }

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={`#${icon.hex}`}
        className="transition-all duration-300"
      >
        <path d={icon.path} />
      </svg>
    );
  };

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 overflow-hidden"
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
          <motion.div
            className="text-center space-y-6"
            variants={skillVariants}
          >
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
            <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto" />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="relative group w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
                variants={categoryVariants}
              >
                <div className="relative p-6 bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/50 overflow-hidden h-full">
                  <div className="relative space-y-6">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-neutral-100 transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    <motion.div
                      className="grid grid-cols-3 sm:grid-cols-4 gap-6"
                      variants={containerVariants}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="flex flex-col items-center space-y-3 group/skill cursor-pointer"
                          variants={skillVariants}
                          whileHover="hover"
                        >
                          <motion.div
                            className="relative p-4 bg-neutral-700/50 backdrop-blur-sm rounded-lg border border-neutral-600/50 transition-all duration-300 group-hover/skill:bg-neutral-600/70 group-hover/skill:border-neutral-500/70"
                            variants={iconVariants}
                          >
                            <SimpleIcon
                              icon={skill.icon}
                              name={skill.name}
                              size={40}
                            />
                          </motion.div>

                          <span className="text-xs text-neutral-300 text-center font-medium leading-tight">
                            {skill.name}
                          </span>
                        </motion.div>
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
