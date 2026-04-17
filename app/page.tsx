import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import Qualifications from '@/components/Qualifications'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Qualifications />
      <Projects />
      <Contact />
    </main>
  )
}
