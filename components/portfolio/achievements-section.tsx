"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Users, Zap, Heart } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Man of the Match",
    description:
      "Awarded Man of the Match in inter-college cricket tournament, showcasing leadership and performance under pressure.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Event Organizer",
    description:
      "Led and organized multiple college events, demonstrating strong organizational and team management skills.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Sprint Competitions",
    description:
      "Active participant in sprint competitions, showing dedication to physical fitness and competitive spirit.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Volunteer Work",
    description:
      "Contributed as a volunteer in various social initiatives, demonstrating commitment to community service.",
    color: "from-pink-500 to-rose-500",
  },
]

function AchievementCard({
  achievement,
  index,
}: {
  achievement: (typeof achievements)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
        {/* Gradient Background on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        <div className="relative">
          <div
            className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.color} mb-4`}
          >
            <achievement.icon className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {achievement.title}
          </h3>
          <p className="text-muted-foreground">{achievement.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Beyond Code
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Achievements & Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognitions and experiences that showcase my leadership,
            teamwork, and dedication beyond technical skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
