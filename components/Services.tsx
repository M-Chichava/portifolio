'use client'
import { motion } from 'framer-motion'
import { Smartphone, Globe, Palette, Server, Check } from 'lucide-react'
import { services } from '@/lib/data'
import { useLang } from '@/components/LanguageProvider'

const ICONS: Record<string, React.ElementType> = {
  Smartphone, Globe, Palette, Server,
}

export default function Services() {
  const { t, tr } = useLang()
  return (
    <section id="services" className="section bg-white dark:bg-[#0f1912]">
      <div className="container-custom px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle">{t.services.subtitle}</p>
          <h2 className="section-title">{t.services.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => {
            const Icon = ICONS[svc.icon] ?? Globe
            return (
              <motion.div
                key={svc.icon}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 hover:border-brand/40 hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-5
                                group-hover:bg-brand group-hover:shadow-lg group-hover:shadow-brand/25 transition-all duration-300">
                  <Icon size={22} className="text-brand group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-bold text-zinc-900 dark:text-white mb-2 leading-tight">{tr(svc.title)}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">{tr(svc.description)}</p>

                <ul className="space-y-1.5">
                  {svc.items.map((item) => (
                    <li key={item.en} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Check size={13} className="text-brand mt-0.5 shrink-0" />
                      {tr(item)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
