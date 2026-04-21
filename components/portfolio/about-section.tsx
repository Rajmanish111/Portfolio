"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code, Layers, Rocket, Target, Briefcase } from "lucide-react"

const timeline = [
  {
    year: "2020",
    title: "Started B.Tech Journey",
    description: "Began Computer Science Engineering at Gandhi Engineering College. Discovered passion for programming.",
    icon: GraduationCap,
  },
  {
    year: "2021",
    title: "First Steps in Coding",
    description: "Learned C programming and web development fundamentals. Built my first static websites with HTML, CSS, and JavaScript.",
    icon: Code,
  },
  {
    year: "2022",
    title: "Deep Dive into Java",
    description: "Mastered Core Java, OOP concepts, and concentrated in academics. Began understanding backend development.",
    icon: Layers,
  },
  { year: "2024",
    title: "Graduated",
    description: "Completed B.Tech with 8.0 CGPA",
    icon: Rocket,
  },
  {
    year: "2025",
    title: "Started Training in Naresh i Technologies",
    description: "Started learning java deeply",
    icon: Target,
  },
  {
    year: "Now",
    title: "Seeking Opportunities",
    description: "Looking for Software Developer roles where I can contribute, learn, and grow with innovative teams.",
    icon: Briefcase,
  },
]

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center gap-6 md:gap-12 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div
        className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-primary/10 text-primary">
            {item.year}
          </span>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </motion.div>
      </div>

      {/* Icon */}
      <div className="hidden md:flex relative z-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25"
        >
          <item.icon className="w-6 h-6 text-primary-foreground" />
        </motion.div>
      </div>

      {/* Spacer for alignment */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            The Story So Far
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a curious student to a full-stack developer. Here&apos;s how my
            passion for technology transformed into real-world skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

          <div className="flex flex-col gap-8 md:gap-12">
            {timeline.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
