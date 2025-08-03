import { useRef } from "react";
import { easeInOut, easeOut, motion, useInView } from "motion/react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: easeOut,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-8, 8, -8],
      transition: { duration: 6, repeat: Infinity, ease: easeInOut },
    },
  };

  // Define complete class mappings to ensure Tailwind includes them
  const colorClasses = {
    'blue-500': {
      bg: 'bg-blue-500',
      hover: 'hover:bg-blue-600',
      border: 'border-blue-500',
      text: 'text-blue-500',
      dot: 'bg-blue-500'
    },
    'indigo-400': {
      bg: 'bg-indigo-400',
      hover: 'hover:bg-indigo-500',
      border: 'border-indigo-400',
      text: 'text-indigo-400',
      dot: 'bg-indigo-400'
    }
  } as const;

  type AccentColor = keyof typeof colorClasses;

  const projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    accentColor: AccentColor;
    features: string[];
    links: {
      live: { url: string; label: string };
      code: { url: string };
    };
  }> = [
    {
      name: "Pickture",
      description:
        "An app that helps people figure out what to watch from their watchlist at random or based on personalized preferences.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Clerk",
        "TypeScript",
        "Tailwind CSS",
      ],
      accentColor: "blue-500",
      features: [
        "Watchlist Management",
        "Smart Recommendations",
        "Preference Filtering",
        "Region Specific Results",
      ],
      links: {
        live: {
          url: "https://pickture-preview.vercel.app/",
          label: "View Preview"
        },
        code: {
          url: "https://github.com/Matthew-Hocking/pickture"
        }
      }
    },
    {
      name: "Skadi",
      description:
        "A drag-and-drop job tracker with Kanban-style boards for managing application status and multiple job search lists.",
      technologies: ["React", "Supabase", "TypeScript", "Tailwind CSS"],
      accentColor: "indigo-400",
      features: [
        "Drag & Drop Interface",
        "Kanban Boards",
        "Multiple Lists",
        "Application Tracking",
      ],
      links: {
        live: {
          url: "https://skadi-job-hunt.vercel.app/",
          label: "View Live"
        },
        code: {
          url: "https://github.com/Matthew-Hocking/skadi"
        }
      }
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[
          {
            size: "w-96 h-96",
            color: "bg-purple-500/3",
            position: "top-32 left-16",
          },
          {
            size: "w-80 h-80",
            color: "bg-purple-400/4",
            position: "bottom-20 right-20",
            delay: 3,
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
                Featured Projects
              </h2>
            </div>
            <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto" />
          </motion.div>

          {/* Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {projects.map((project) => {
              const colors = colorClasses[project.accentColor];
              
              return (
                <motion.article
                  key={project.name}
                  className="space-y-6 flex flex-col bg-neutral-800/30 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50 hover:border-neutral-600/50 transition-colors"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(38, 38, 38, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <h3 className={`text-3xl sm:text-4xl font-bold ${colors.text}`}>
                      {project.name}
                    </h3>

                    <p className="text-lg max-w-full text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-sm text-neutral-300"
                        >
                          <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-mono bg-neutral-700/70 text-neutral-200 shadow-lg rounded-full border border-neutral-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex flex-wrap gap-4 mt-auto"
                    variants={containerVariants}
                  >
                    <motion.a
                      href={project.links.live.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 ${colors.bg} text-white font-semibold rounded-lg ${colors.hover} transition-colors`}
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.links.live.label}
                    </motion.a>

                    <motion.a
                      href={project.links.code.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 border-2 ${colors.border} text-neutral-300 font-semibold rounded-lg hover:bg-neutral-700 hover:text-white transition-colors`}
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Code
                    </motion.a>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div className="text-center pt-12" variants={projectVariants}>
            <motion.p
              className="text-neutral-400 mb-6"
              variants={projectVariants}
            >
              Interested in seeing more?
            </motion.p>
            <motion.a
              href="https://github.com/Matthew-Hocking"
              target="_blank"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;