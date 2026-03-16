import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Work | Maniesh Sanwal Portfolio",
  description: "Explore a curated collection of my projects across UI/UX Design, Web Development, and AI-powered solutions.",
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
