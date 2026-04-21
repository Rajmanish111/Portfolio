"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, BookOpen, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    type: "internship",
    title: "Frontend + Spring Boot Developer",
    company: "YHills Edutech",
    location: "Remote",
    period: "2023",
    description:
      "Learned core web development concepts and built a responsive portfolio landing page, gaining hands-on experience with real-world development practices",
    skills: ["HTML", "CSS", "JAVASCRIPT","React js", "Team Collaboration",],
  },
  {
    type: "training",
    title: "Java Full Stack Development",
    company: "Naresh IT",
    location: "Hyderabad",
    period: "2025 - 2026",
    description:
      "Intensive training program covering Java ecosystem, Spring Boot, databases, and frontend technologies. Built multiple projects applying learned concepts.",
    skills: ["Core Java", "Spring Boot", "MySQL", "HTML/CSS/JS", "React"],
  },
]

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isLeft = index % 2 === 0

  return (
    <div
      className={`flex items-center gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex-1"
      >
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`p-3 rounded-xl ${
                  experience.type === "internship"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {experience.type === "internship" ? (
                  <Building2 className="w-5 h-5" />
                ) : (
                  <BookOpen className="w-5 h-5" />
                )}
              </div>
              <div>
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    experience.type === "internship"
                      ? "text-primary"
                      : "text-accent"
                  }`}
                >
                  {experience.type}
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
          <p className="text-lg text-primary font-medium mb-3">
            {experience.company}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
          </div>

          <p className="text-muted-foreground mb-4">{experience.description}</p>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline Node */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
          className={`w-4 h-4 rounded-full ${
            experience.type === "internship" ? "bg-primary" : "bg-accent"
          }`}
        />
        {index < experiences.length - 1 && (
          <div className="w-0.5 h-24 bg-border" />
        )}
      </div>

      {/* Spacer */}
      <div className="hidden md:block flex-1" />
    </div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Where I&apos;ve Worked
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Experience & Training
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experiences and intensive training that shaped my
            skills and prepared me for the industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50" />

          <div className="flex flex-col gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
