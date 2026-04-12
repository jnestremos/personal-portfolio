import { motion } from 'motion/react';
import { Badge } from './ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Mugna Technologies",
      location: "Davao, Philippines",
      period: "Jan 2023 - Jan 2026",
      description: "Built scalable front-end applications for multiple international clients across SaaS, e-commerce, and enterprise domains.",
      achievements: [
        "Architected and delivered front-end solutions across 12 client engagements using React, Next.js, and TypeScript",
        "Designed modular front-end architectures and reusable component systems for medium- to large-scale applications",
        "Led technical decision-making and engineering standards for architecture and code quality",
        "Mentored 2 junior developers through code reviews, pair programming, and architecture guidance",
        "Implemented Storybook across internal projects to improve consistency and UI documentation",
        "Owned full feature lifecycle: planning, implementation, testing, docs, deployment, and post-release support"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Storybook", "Node.js", "GraphQL"],
      icon: "💼"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience focused on building production-grade front-end systems
            and mentoring teams to deliver high-quality user experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-purple-500 opacity-30" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-6"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                  >
                    {exp.icon}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full animate-pulse opacity-20 scale-150" />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-1 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-teal-400 font-medium">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="mt-2 md:mt-0 border-teal-500/30 text-teal-400 w-fit"
                    >
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-teal-400 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-teal-500/10 text-teal-400 border-teal-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;