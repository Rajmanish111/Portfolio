"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Personal Finance Tracker",
    description:
      "A comprehensive finance management application with user authentication, transaction tracking, and budget alerts. Features optimized database queries for fast performance.",
    image:"/pubilc/projects/finance-tracker.jpg",
    tech: ["Java", "Spring Boot", "Oracle", "REST API"],
    category: "Full Stack",
    highlights: [
      "Secure user login/authentication system",
      "CRUD operations for transactions",
      "Budget alerts and notifications",
      "Optimized Oracle DB queries",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Football Player Management",
    description:
      "A sports management system for handling player data with internationalization support. Built with clean MVC architecture and deployed on Tomcat server.",
    image: "/projects/football-manager.jpg",
    tech: ["Java", "Spring Boot", "MySQL", "i18n"],
    category: "Full Stack",
    highlights: [
      "Complete CRUD operations",
      "MVC architecture pattern",
      "Multi-language support (i18n)",
      "Tomcat deployment",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Travel Planning System",
    description:
      "A tourism management platform allowing users to explore destinations and plan trips. Features admin panel for content management.",
    image: "/projects/travel-planner.jpg",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    category: "Web App",
    highlights: [
      "Tourism destination showcase",
      "Admin CRUD panel",
      "Responsive UI design",
      "User-friendly interface",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Educational Web Portal",
    description:
      "A responsive educational platform showcasing college information, courses, and admission details with modern design.",
    image: "/projects/edu-portal.jpg",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Frontend",
    highlights: [
      "Fully responsive design",
      "Course catalog display",
      "Modern UI/UX",
      "Bootstrap integration",
    ],
    github: "#",
    demo: "#",
  },
]

const categories = ["All", "Full Stack", "Web App", "Frontend"]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
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
      className="group"
    >
      <div className="h-full rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
        {/* Project Image */}
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary/30">
              {project.title.charAt(0)}
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <Button size="sm" variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            {project.highlights.slice(0, 3).map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack
            development, from concept to deployment.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
