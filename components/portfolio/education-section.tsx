"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Gandhi Engineering College",
    location: "Bhubaneswar, Odisha",
    period: "2020 - 2024",
    grade: "CGPA: 8.0",
    highlights: [
      "Specialized in Software Engineering",
      "Active member of coding club",
      "Participated in technical events",
    ],
  },
  {
    degree: "12th (CBSE)",
    institution: "Higher Secondary School",
    location: "India",
    period: "2020",
    grade: "Completed",
    highlights: ["Science stream (MBiP)"],
  },
  {
    degree: "10th (CBSE)",
    institution: "Secondary School",
    location: "India",
    period: "2018",
    grade: "Completed",
    highlights: [""],
  },
]

function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[0]
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
      className="group"
    >
      <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
            <p className="text-primary font-medium">{item.institution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {item.period}
          </span>
          <span className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            {item.grade}
          </span>
        </div>

        {item.highlights.length > 0 && (
          <ul className="space-y-2">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey that laid the foundation for my career in
            software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <EducationCard key={item.degree} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
