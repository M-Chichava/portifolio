'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '@/lib/data'

const LEVEL_COLOR: Record<string, string> = {
  Advanced:     'bg-brand/15 text-brand border-brand/25',
  Intermediate: 'bg-blue-500/10 text-blue-400 border-blue-400/20 dark:text-blue-300',
  Beginner:     'bg-zinc-200 text-zinc-500 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700',
}

export default function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className="section bg-zinc-50 dark:bg-[#09100b]">
      <div className="container-custom px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">What I know</p>
          <h2 className="section-title">Skills</h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === i
                  ? 'bg-brand text-white shadow-md shadow-brand/25'
                  : 'bg-white dark:bg-[#0f1912] border border-zinc-200 dark:border-[#1c2e20] text-zinc-600 dark:text-zinc-400 hover:border-brand/40 hover:text-brand'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill badges */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card p-6 md:p-8">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">
                {skillCategories[active].label}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillCategories[active].skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-[#09100b] border border-zinc-100 dark:border-[#1c2e20]"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-brand" />
                      <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">{skill.name}</span>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${LEVEL_COLOR[skill.level] ?? LEVEL_COLOR.Beginner}`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
