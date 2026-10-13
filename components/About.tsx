'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, Award, Briefcase, Headphones, FileText } from 'lucide-react'
import { personal, stats } from '@/lib/data'
import { useLang } from '@/components/LanguageProvider'

const STAT_ICONS = [Award, Briefcase, Headphones]

export default function About() {
  const { t, tr } = useLang()
  return (
    <section id="about" className="section bg-white dark:bg-[#0f1912]">
      <div className="container-custom px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle">{t.about.subtitle}</p>
          <h2 className="section-title">{t.about.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-72 md:w-80">
              <div className="absolute -inset-3 rounded-3xl bg-brand/10 blur-xl" />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border-2 border-brand/20">
                <Image
                  src="/portifolio/assets/profile.jpg"
                  alt="Marcos Chichava"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Years badge */}
              <div className="absolute -right-4 top-8 bg-brand text-white rounded-2xl px-4 py-3 shadow-lg shadow-brand/30 text-center">
                <p className="text-2xl font-black leading-none">5+</p>
                <p className="text-xs font-semibold opacity-90 mt-0.5 leading-tight">{t.about.yearsExp[0]}<br/>{t.about.yearsExp[1]}</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s, i) => {
                const Icon = STAT_ICONS[i]
                return (
                  <div key={s.value} className="card p-4 text-center hover:border-brand/40 transition-colors">
                    <Icon size={18} className="text-brand mx-auto mb-2" />
                    <p className="text-2xl font-black text-zinc-900 dark:text-white">{s.value}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-tight">{tr(s.label)}</p>
                  </div>
                )
              })}
            </div>

            {/* Bio */}
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {tr(personal.bio)}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.about.basedIn} <span className="text-brand font-semibold">{tr(personal.location)}</span>{t.about.extra}
            </p>

            {/* CV buttons */}
            <div className="flex flex-wrap gap-3">
              <a href={personal.cv} download className="btn-primary inline-flex w-fit">
                <Download size={16} />
                {t.common.downloadCv}
              </a>
              <Link href="/cv" className="btn-outline inline-flex w-fit">
                <FileText size={16} />
                {t.common.buildCv}
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
