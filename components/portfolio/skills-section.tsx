"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Layout, Server, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Java", level: 90 },
      { name: "SQL", level: 85 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "Spring MVC", level: 80 },
      { name: "REST API", level: 85 },
      { name: "JDBC", level: 80 },
      { name: "JPA", level: 75 },
      { name: "JSP", level: 70 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Oracle", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Maven", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
]

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <category.icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{
                  duration: 1,
                  delay: index * 0.1 + skillIndex * 0.1,
                  ease: "easeOut",
                }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            What I Know
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on projects and
            continuous learning. Always expanding my knowledge base.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
