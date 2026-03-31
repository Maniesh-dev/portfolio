'use client'

import { xirod } from "../lib/fonts";
import { motion } from "framer-motion";



const skills = [
  {
    title: "UI / UX Design",
    id: "01",
    points: [
      "User research & wireframes",
      "Interactive prototyping",
      "Visual design systems",
      "Usability testing",
    ],
  },
  {
    title: "Web Design",
    id: "02",
    points: [
      "Responsive layouts",
      "Typography & color theory",
      "Brand-aligned aesthetics",
      "Motion & micro-interactions",
    ],
  },
  {
    title: "Web Development",
    id: "03",
    points: [
      "Next.js / React apps",
      "Performance optimization",
      "Clean & scalable code",
      "API integrations",
    ],
  },
  {
    title: "AI SaaS App",
    id: "04",
    points: [
      "AI-powered product design",
      "Subscription & billing flows",
      "Dashboard & analytics UI",
      "Scalable cloud architecture",
    ],
  },
  {
    title: "AI Agents",
    id: "05",
    points: [
      "Conversational AI flows",
      "LLM integration (OpenAI, etc.)",
      "Autonomous task automation",
      "Custom agent pipelines",
    ],
  },
  {
    title: "AI Automation",
    id: "06",
    points: [
      "Workflow automation",
      "Data pipeline design",
      "Third-party API orchestration",
      "Intelligent scheduling & triggers",
    ],
  },
];

const About = () => {
  return (
    <section className="min-h-screen w-full bg-[#0d0d0d] text-[#b7ab98] overflow-hidden">
      {/* Header Section */}
      <div className="relative pt-20 pb-12 px-4 flex flex-col items-center">
        <div className={`${xirod.className} w-full flex flex-col leading-none text-center select-none`}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] md:text-[18vw] text-[#EB5B00] opacity-90 drop-shadow-2xl"
          >
            ABOUT
          </motion.div>
          <div className="flex items-center justify-center gap-[2vw] -mt-[4vw]">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[15vw] md:text-[18vw] text-white opacity-90"
            >
              ME
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-sans  max-w-[400px] text-[10px] sm:text-[12px] md:text-[14px] leading-relaxed text-right px-4 pt-[4vw] opacity-70"
            >
              Specializing in impressive online experiences, clients receive tailored solutions to elevate their digital presence. Each project aims to capture attention and engage audiences effectively.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Marquee Separator */}
      <div className="w-full h-px bg-white/10 my-10" />

      {/* Skillset Section */}
      <div className="container mx-auto px-6 py-20 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Title Column */}
          <div className="lg:sticky lg:top-32 h-fit space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold leading-tight">
              My <br /> Skillset
            </h2>
            <p className="text-[#b7ab98]/60 text-lg max-w-xs">
              Over the course of my career, I've strived to develop a diverse set of core skills.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#070707] p-12 min-h-[300px] flex flex-col justify-between hover:bg-[#111111] transition-colors"
              >
                <span className="text-sm font-mono opacity-40">{skill.id}</span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#EB5B00] transition-colors mb-4">
                    {skill.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {skill.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-[#b7ab98]/50 group-hover:text-[#b7ab98]/80 transition-colors flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#EB5B00] opacity-0 group-hover:opacity-100 transition-opacity" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Decorative square element from reference */}
                <div className="absolute right-8 top-8 w-4 h-4 border border-white/20 group-hover:border-[#EB5B00] group-hover:rotate-45 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-description */}
      <div className="mb-16 text-center px-4">
        <div className="text-xl md:text-2xl font-medium">
          I pair strong visual design and development skills with a focus on{" "}
          <p className="flex-col md:flex-row justify-center items-center mt-4">
            <span className="text-[#EB5B00] font-bold sm:text-4xl">User-centered Design</span>{" "}
            <span className="text-4xl md:text-6xl mx-2 font-bold">&</span>{" "}
            <span className="block md:hidden text-[#EB5B00] font-bold sm:text-4xl">Business-driven Development.</span>
            <span className="hidden md:block text-[#EB5B00] font-bold sm:text-4xl">Business-driven Development.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About