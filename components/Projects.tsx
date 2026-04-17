'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import { projects, projectFilters } from '@/lib/data'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase())

  return (
    <section id="work" className="section bg-zinc-50 dark:bg-[#09100b]">
      <div className="container-custom px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">My recent work</p>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === f
                  ? 'bg-brand text-white shadow-md shadow-brand/25'
                  : 'bg-white dark:bg-[#0f1912] border border-zinc-200 dark:border-[#1c2e20] text-zinc-600 dark:text-zinc-400 hover:border-brand/40 hover:text-brand'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className={`card group overflow-hidden hover:border-brand/40 hover:-translate-y-1 ${
                  project.featured ? 'sm:col-span-2 lg:col-span-1 ring-1 ring-brand/30' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  {project.image.endsWith('.svg') ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-brand text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      <Star size={10} fill="white" />
                      Featured
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                       className="p-2.5 bg-white rounded-xl text-brand hover:scale-110 transition-transform">
                      <ExternalLink size={18} />
                    </a>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="p-2.5 bg-white rounded-xl text-brand hover:scale-110 transition-transform">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1.5">{project.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-badge text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
