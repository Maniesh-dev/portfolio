"use client"

import Header from '@/components/Header'
import Menubar from '@/components/Menubar'
import Contact from '@/components/Contact'
import localFont from 'next/font/local'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const xirod = localFont({
    src: "../../fonts/Xirod.otf",
    display: 'swap',
});

/* ───────────── project data per skillset ───────────── */

interface Project {
    id: string
    title: string
    summary: string
    techStack: string[]
    image: string
    link: string
}

interface SkillsetSection {
    skillset: string
    accent: string        // colour per category
    projects: Project[]
}

const skillsetSections: SkillsetSection[] = [
    /* ─── UI / UX Design ─── */
    {
        skillset: "UI / UX Design",
        accent: "#EB5B00",
        projects: [
            {
                id: "01",
                title: "HealthPulse",
                summary:
                    "A comprehensive health-tracking app with an intuitive dashboard, habit streaks, and personalized wellness insights. Designed from user research through high-fidelity prototypes with accessibility-first principles.",
                techStack: ["Figma", "FigJam", "Maze", "Lottie", "Spline 3D"],
                image: "/work/HealthPulse.png",
                link: "#",
            },
            {
                id: "02",
                title: "EduVerse",
                summary:
                    "An online learning platform redesign — revamped the entire student journey from course discovery to progress tracking. Conducted usability testing with 50+ users and improved task-completion rate by 40%.",
                techStack: ["Figma", "Hotjar", "Optimal Workshop", "Principle"],
                image: "/work/EduVerse.png",
                link: "#",
            },
            {
                id: "03",
                title: "TravelMate",
                summary:
                    "Mobile-first travel planning experience with drag-and-drop itinerary builder, real-time weather overlays, and collaborative trip boards for group travel.",
                techStack: ["Adobe XD", "Figma", "ProtoPie", "UserTesting"],
                image: "/work/TravelMate.png",
                link: "#",
            },
            {
                id: "04",
                title: "FinTrack Pro",
                summary:
                    "Personal finance dashboard that visualises spending patterns, budget goals, and investment performance — designed with a focus on data clarity and micro-interactions.",
                techStack: ["Figma", "Framer", "Maze", "Zeplin"],
                image: "/work/FinTrack Pro.png",
                link: "#",
            },
        ],
    },

    /* ─── Web Design ─── */
    {
        skillset: "Web Design",
        accent: "#D94F00",
        projects: [
            {
                id: "01",
                title: "Velour Studio",
                summary:
                    "A luxury fashion brand website with immersive product showcases, parallax scroll effects, and fluid page transitions. Every pixel is intentional — typography, spacing, and colour theory create a high-end feel.",
                techStack: ["Figma", "GSAP", "Webflow", "After Effects"],
                image: "/work/Velour Studio.png",
                link: "#",
            },
            {
                id: "02",
                title: "Prism Creative",
                summary:
                    "Portfolio website for a creative agency featuring bold typography, layered scroll animations, and an interactive project carousel. Designed & developed from concept to deployment.",
                techStack: ["Figma", "Framer Motion", "Spline 3D", "Tailwind CSS"],
                image: "/work/Prism Creative.png",
                link: "#",
            },
            {
                id: "03",
                title: "Artisan Brew",
                summary:
                    "A craft brewery microsite with rich storytelling — immersive hero videos, ingredient journey animations, and a taproom locator with custom map styling.",
                techStack: ["Figma", "Webflow", "Lottie", "Mapbox GL"],
                image: "/work/Artisan Brew.png",
                link: "#",
            },
            {
                id: "04",
                title: "SoundScape",
                summary:
                    "Music festival landing page with dynamic gradient backgrounds responding to scroll, interactive lineup grid, and animated ticket selection flow.",
                techStack: ["Figma", "GSAP", "Three.js", "CSS Houdini"],
                image: "/work/SoundScape.png",
                link: "#",
            },
        ],
    },

    /* ─── Web Development ─── */
    {
        skillset: "Web Development",
        accent: "#FF6B1A",
        projects: [
            {
                id: "01",
                title: "DevBoard",
                summary:
                    "A real-time collaborative developer dashboard featuring live code previews, Git analytics, sprint boards, and integrated CI/CD monitoring — built for engineering teams.",
                techStack: ["Next.js 15", "TypeScript", "Prisma", "tRPC", "Tailwind CSS", "Vercel"],
                image: "/work/DevBoard.png",
                link: "#",
            },
            {
                id: "02",
                title: "ShopStream",
                summary:
                    "High-performance e-commerce storefront with server-side rendering, optimistic cart updates, Stripe payment integration, and headless CMS for product management.",
                techStack: ["Next.js 15", "React 19", "Stripe", "Sanity CMS", "PostgreSQL", "Drizzle ORM"],
                image: "/work/ShopStream.png",
                link: "#",
            },
            {
                id: "03",
                title: "BlogForge",
                summary:
                    "A blazing-fast blogging platform with MDX support, dynamic OG image generation, full-text search, and a rich WYSIWYG editor — optimised for SEO and Core Web Vitals.",
                techStack: ["Next.js 15", "MDX", "Upstash Redis", "Cloudflare R2", "Tailwind CSS"],
                image: "/work/BlogForge.png",
                link: "#",
            },
            {
                id: "04",
                title: "EventHub",
                summary:
                    "Event management platform with real-time attendee tracking, QR check-in system, interactive venue maps, and automated email reminders — serving 10K+ events.",
                techStack: ["React 19", "Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],
                image: "/work/EventHub.png",
                link: "#",
            },
        ],
    },

    /* ─── AI-Powered SaaS App ─── */
    {
        skillset: "AI SaaS App",
        accent: "#EB5B00",
        projects: [
            {
                id: "01",
                title: "NeuralMetrics",
                summary:
                    "AI-powered analytics platform that transforms raw business data into actionable insights using machine learning. Features predictive revenue forecasting, churn detection, and auto-generated executive reports.",
                techStack: ["Next.js 15", "OpenAI GPT-4o", "LangChain", "Stripe", "PostgreSQL", "Vercel AI SDK"],
                image: "/work/neuralmetrics.png",
                link: "#",
            },
            {
                id: "02",
                title: "ContentForge AI",
                summary:
                    "SaaS content generation platform where marketers create SEO-optimised blog posts, social media copy, and email campaigns using fine-tuned AI models with brand-voice training.",
                techStack: ["Next.js 15", "Claude API", "Pinecone", "Stripe", "Supabase", "Tailwind CSS"],
                image: "/work/ContentForge AI.png",
                link: "#",
            },
            {
                id: "03",
                title: "ResumeAI Pro",
                summary:
                    "AI resume builder that analyses job descriptions, tailors bullet points for ATS compatibility, and generates cover letters — with a subscription-based freemium model.",
                techStack: ["React 19", "OpenAI", "FastAPI", "Stripe", "MongoDB", "AWS Lambda"],
                image: "/work/ResumeAI Pro.png",
                link: "#",
            },
            {
                id: "04",
                title: "DesignMind",
                summary:
                    "AI design assistant SaaS that generates UI mockups from text prompts, suggests colour palettes, and provides accessibility audits — all in a collaborative workspace.",
                techStack: ["Next.js 15", "Stability AI", "Replicate", "Convex", "Clerk", "Tailwind CSS"],
                image: "/work/DesignMind.png",
                link: "#",
            },
        ],
    },

    /* ─── AI Agents ─── */
    {
        skillset: "AI Agents",
        accent: "#D94F00",
        projects: [
            {
                id: "01",
                title: "AgentFlow",
                summary:
                    "Autonomous AI agent platform for customer support — agents handle ticket routing, resolution, escalation, and follow-ups using RAG pipelines over company knowledge bases.",
                techStack: ["LangChain", "GPT-4o", "Pinecone", "FastAPI", "WebSockets", "Redis"],
                image: "/work/agentflow.png",
                link: "#",
            },
            {
                id: "02",
                title: "SalesBot AI",
                summary:
                    "Intelligent sales agent that qualifies leads via multi-turn conversations, books meetings on calendars, and updates CRM records — fully autonomous with human-in-the-loop fallback.",
                techStack: ["CrewAI", "Claude API", "Supabase", "Cal.com API", "Zapier", "Python"],
                image: "/work/SalesBot AI.png",
                link: "#",
            },
            {
                id: "03",
                title: "CodeReview Agent",
                summary:
                    "AI-powered code review agent that analyses pull requests, identifies bugs and security vulnerabilities, suggests optimisations, and generates inline comments on GitHub.",
                techStack: ["LangGraph", "OpenAI", "GitHub API", "Tree-sitter", "FastAPI", "Docker"],
                image: "/work/CodeReview Agent.png",
                link: "#",
            },
            {
                id: "04",
                title: "ResearchBot",
                summary:
                    "Autonomous research agent that crawls academic papers, extracts key findings, generates literature reviews, and maintains an organised knowledge graph for researchers.",
                techStack: ["AutoGen", "GPT-4o", "Neo4j", "Selenium", "FastAPI", "Qdrant"],
                image: "/work/ResearchBot.png",
                link: "#",
            },
        ],
    },

    /* ─── AI Automation ─── */
    {
        skillset: "AI Automation",
        accent: "#FF6B1A",
        projects: [
            {
                id: "01",
                title: "FlowSync",
                summary:
                    "Enterprise workflow automation engine that orchestrates complex data pipelines across 50+ third-party integrations — scheduling, retries, monitoring, and intelligent error handling.",
                techStack: ["Python", "Apache Airflow", "FastAPI", "PostgreSQL", "Kafka", "Docker"],
                image: "/work/flowsync.png",
                link: "#",
            },
            {
                id: "02",
                title: "InboxZero AI",
                summary:
                    "AI email automation system that categorises, labels, drafts replies, and handles calendar scheduling from inbox — reducing email management time by 80%.",
                techStack: ["n8n", "OpenAI", "Google APIs", "Supabase", "Python", "Redis"],
                image: "/work/InboxZero AI.png",
                link: "#",
            },
            {
                id: "03",
                title: "DataHarvest",
                summary:
                    "Automated data extraction pipeline that scrapes, cleans, and structures data from 100+ sources — powering real-time dashboards and ML model training datasets.",
                techStack: ["Python", "Scrapy", "Apache Kafka", "ClickHouse", "Prefect", "Docker"],
                image: "/work/DataHarvest.png",
                link: "#",
            },
            {
                id: "04",
                title: "SocialPilot AI",
                summary:
                    "Social media automation platform that generates content, schedules posts, analyses engagement metrics, and auto-responds to comments using AI across all major platforms.",
                techStack: ["Make.com", "OpenAI", "Meta API", "Twitter API", "Supabase", "Vercel"],
                image: "/work/SocialPilot AI.png",
                link: "#",
            },
        ],
    },
]

/* ─── Reusable Project Card ─── */
const ProjectCard = ({
    project,
    index,
    accent,
}: {
    project: Project
    index: number
    accent: string
}) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        viewport={{ once: true, margin: "-60px" }}
        className="group relative bg-[#0a0a0a] border border-white/5 rounded-md overflow-hidden hover:border-opacity-30 transition-all duration-700"
        style={{ ["--card-accent" as string]: accent }}
    >
        {/* Image Preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
            <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

            {/* Number badge */}
            <div className="absolute top-4 left-4 w-9 h-9 border border-white/10 rounded-full flex items-center justify-center bg-[#0d0d0d]/80 backdrop-blur-sm">
                <span className="text-[11px] font-mono" style={{ color: accent + "cc" }}>
                    {project.id}
                </span>
            </div>

            {/* External link icon */}
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-9 h-9 border border-white/10 rounded-full flex items-center justify-center bg-[#0d0d0d]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110"
                style={{ borderColor: accent + "40" }}
            >
                <svg className="w-3.5 h-3.5" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
            </a>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
            <h3
                className="text-xl md:text-2xl font-bold text-white group-hover:transition-colors group-hover:duration-500"
                style={{ ["--tw-text-opacity" as string]: 1 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
                {project.title}
            </h3>

            <p className="text-[#b7ab98]/50 text-sm leading-relaxed group-hover:text-[#b7ab98]/70 transition-colors duration-500">
                {project.summary}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono border rounded-full transition-all duration-500"
                        style={{
                            borderColor: "rgba(255,255,255,0.08)",
                            color: "rgba(183,171,152,0.5)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = accent + "50"
                            e.currentTarget.style.color = accent
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                            e.currentTarget.style.color = "rgba(183,171,152,0.5)"
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* View Project Link */}
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 w-fit group/link"
            >
                <span
                    className="text-xs tracking-[2px] uppercase transition-colors duration-300"
                    style={{ color: "rgba(183,171,152,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(183,171,152,0.5)")}
                >
                    View Project
                </span>
                <div
                    className="w-7 h-7 border border-white/10 rounded-full flex items-center justify-center transition-all duration-500"
                >
                    <svg
                        className="w-3 h-3 text-[#b7ab98]/40 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                </div>
            </a>
        </div>

        {/* Decorative corner element */}
        <div
            className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
                background: `linear-gradient(135deg, transparent 50%, ${accent}10 50%)`,
            }}
        />
    </motion.div>
)

/* ─── Skillset Section Component ─── */
const SkillsetBlock = ({ section }: { section: SkillsetSection }) => {
    const [showAll, setShowAll] = useState(false)
    const visibleProjects = showAll ? section.projects : section.projects.slice(0, 2)

    return (
        <div className="mb-32 last:mb-0">
            {/* Skillset label */}
            <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 mb-12"
            >
                <div
                    className="w-3 h-3 rounded-sm rotate-45"
                    style={{ backgroundColor: section.accent }}
                />
                <h2
                    className={`${xirod.className} text-2xl md:text-3xl lg:text-4xl tracking-wide`}
                    style={{ color: section.accent }}
                >
                    {section.skillset}
                </h2>
                <div className="flex-1 h-px opacity-20" style={{ backgroundColor: section.accent }} />
            </motion.div>

            {/* Project grid — 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <AnimatePresence>
                    {visibleProjects.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={i}
                            accent={section.accent}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Show More / Show Less */}
            {section.projects.length > 2 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="group/btn relative px-8 py-3 border rounded-full flex items-center gap-3 transition-all duration-500 cursor-pointer hover:bg-opacity-10"
                        style={{
                            borderColor: section.accent + "40",
                            color: section.accent,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = section.accent
                            e.currentTarget.style.backgroundColor = section.accent + "10"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = section.accent + "40"
                            e.currentTarget.style.backgroundColor = "transparent"
                        }}
                    >
                        <span className="text-sm tracking-[3px] uppercase font-mono">
                            {showAll ? "Show Less" : "Show More"}
                        </span>
                        <motion.svg
                            animate={{ rotate: showAll ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                    </button>
                </motion.div>
            )}
        </div>
    )
}

/* ═══════════════════════════ PAGE ═══════════════════════════ */

const WorkPage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0d0d0d] min-h-screen text-white"
        >
            <Header />
            <Menubar />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
                {/* Decorative grid overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="absolute w-px h-full bg-white" style={{ left: `${(i + 1) * 5}%` }} />
                    ))}
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="absolute w-full h-px bg-white" style={{ top: `${(i + 1) * 5}%` }} />
                    ))}
                </div>

                {/* Heading */}
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center z-10"
                >
                    <p className="text-sm tracking-[6px] uppercase text-[#EB5B00] mb-6 font-mono">Portfolio</p>
                    <h1 className={`${xirod.className} text-5xl md:text-7xl lg:text-9xl leading-tight`}>
                        <span className="text-[#EB5B00]">MY</span> WORK
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-8 text-[#b7ab98]/70 text-lg md:text-xl max-w-2xl text-center z-10"
                >
                    A curated selection of projects that reflect my passion for design, development, and innovation.
                </motion.p>

                {/* Decorative divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="w-40 h-px bg-gradient-to-r from-transparent via-[#EB5B00] to-transparent mt-12"
                />

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-12 flex flex-col items-center gap-2 z-10"
                >
                    <span className="text-xs tracking-[4px] uppercase text-[#b7ab98]/30">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-[#EB5B00]/50 to-transparent" />
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 right-[10%] w-20 h-20 border border-white/5 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/3 left-[8%] w-32 h-32 border border-[#EB5B00]/10 rounded-full"
                />
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* ─── Projects by Skillset ─── */}
            <section className="py-32 px-6 md:px-16 lg:px-24">
                {/* Section heading */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <p className="text-sm tracking-[6px] uppercase text-[#EB5B00] mb-4 font-mono">Selected Work</p>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Featured<br />Projects
                        </h2>
                        <p className="text-[#b7ab98]/50 max-w-md text-sm leading-relaxed">
                            Each project is a unique blend of strategy, design, and engineering — built with the latest tech to deliver real impact.
                        </p>
                    </div>
                </motion.div>

                {/* Skillset sections */}
                {skillsetSections.map((section) => (
                    <SkillsetBlock key={section.skillset} section={section} />
                ))}
            </section>

            {/* Stats Bar */}
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(235,91,0,0.04)_0%,_transparent_60%)]" />
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 relative z-10">
                    {[
                        { value: "30+", label: "Projects Delivered" },
                        { value: "22+", label: "Happy Clients" },
                        { value: "3+", label: "Years Experience" },
                        { value: "98%", label: "Client Satisfaction" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center cursor-default group"
                        >
                            <p className={`${xirod.className} text-4xl md:text-5xl text-[#EB5B00] group-hover:scale-110 transition-transform duration-300`}>
                                {stat.value}
                            </p>
                            <p className="mt-2 text-xs tracking-[3px] uppercase text-[#b7ab98]/40">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Contact Section */}
            <Contact />
        </motion.main>
    )
}

export default WorkPage