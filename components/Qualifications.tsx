'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Briefcase, Calendar } from 'lucide-react'
import { education, experience } from '@/lib/data'

type Item = { title: string; institution: string; period: string; left: boolean }

function TimelineItem({ item, index }: { item: Item; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: item.left ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`flex gap-4 ${item.left ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`flex-1 card p-4 hover:border-brand/40 transition-colors ${item.left ? '' : 'text-right'}`}>
        <h3 className="font-bold text-zinc-900 dark:text-white text-sm">{item.title}</h3>
        <p className="text-brand text-xs font-semibold mt-0.5">{item.institution}</p>
        <div className={`flex items-center gap-1 mt-2 text-zinc-400 text-xs ${item.left ? '' : 'justify-end'}`}>
          <Calendar size={11} />
          {item.period}
        </div>
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center gap-0 shrink-0">
        <div className="w-3 h-3 rounded-full bg-brand ring-4 ring-brand/20 mt-4" />
        <div className="w-0.5 flex-1 bg-brand/20 mt-1" />
      </div>

      <div className="flex-1" />
    </motion.div>
  )
}

export default function Qualifications() {
  const [tab, setTab] = useState<'education' | 'experience'>('education')
  const items = tab === 'education' ? education : experience

  return (
    <section id="qualifications" className="section bg-zinc-50 dark:bg-[#09100b]">
      <div className="container-custom px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">My journey</p>
          <h2 className="section-title">Qualifications</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {(['experience', 'education'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === t
                  ? 'bg-brand text-white shadow-md shadow-brand/25'
                  : 'card text-zinc-600 dark:text-zinc-400 hover:border-brand/40 hover:text-brand'
              }`}
            >
              {t === 'experience' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="max-w-2xl mx-auto space-y-2"
          >
            {items.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
