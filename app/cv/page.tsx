import type { Metadata } from 'next'
import CvBuilder from '@/components/cv/CvBuilder'

export const metadata: Metadata = {
  title: 'CV | Marcos Chichava',
  description: 'Customize the layout and structure of Marcos Chichava’s CV and download it as PDF.',
}

export default function CvPage() {
  return <CvBuilder />
}
