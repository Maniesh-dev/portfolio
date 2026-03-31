"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { xirod } from "../lib/fonts"



const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0)
    const [phase, setPhase] = useState<"loading" | "wipe" | "done">("loading")

    useEffect(() => {
        // Simulate loading with easing — starts fast, slows in middle, speeds at end
        let frame: number
        let start: number | null = null
        const duration = 3500 // total loading time in ms

        const easeInOutCubic = (t: number) => {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2
        }

        const animate = (timestamp: number) => {
            if (!start) start = timestamp
            const elapsed = timestamp - start
            const linearProgress = Math.min(elapsed / duration, 1)
            const easedProgress = easeInOutCubic(linearProgress)
            const currentProgress = Math.round(easedProgress * 100)

            setProgress(currentProgress)

            if (linearProgress < 1) {
                frame = requestAnimationFrame(animate)
            } else {
                // Loading complete, start the wipe transition
                setTimeout(() => {
                    setPhase("wipe")
                }, 300)
            }
        }

        frame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(frame)
    }, [])

    useEffect(() => {
        if (phase === "wipe") {
            const timer = setTimeout(() => {
                setPhase("done")
                onComplete()
            }, 1600) // Match new orange duration (1.0s + 0.6s max stagger)
            return () => clearTimeout(timer)
        }
    }, [phase, onComplete])

    if (phase === "done") return null

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 1 }}
            >
                {/* 6 Orange Panels (Trailing elongated stroke layer) */}
                <div className="absolute inset-0 flex w-full h-full z-20 pointer-events-auto overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`orange-${i}`}
                            className="flex-1 bg-[#EB5B00] origin-top"
                            // Start filling the screen from top to bottom
                            initial={{ y: "100%", height: "100%" }}
                            // The orange part "slides up" trailing the black, but we also stretch it
                            animate={{ y: phase === "wipe" ? "-100%" : "100%" }}
                            transition={{
                                duration: 1.0,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * 0.1 + 0.1,
                            }}
                        />
                    ))}
                </div>

                {/* 6 Black Panels (Front layer - acting as loading screen background) */}
                <div className="absolute inset-0 flex w-full h-full z-30 pointer-events-auto overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`black-${i}`}
                            className="flex-1 h-full bg-black origin-bottom"
                            initial={{ y: "0%" }}
                            animate={{ y: phase === "wipe" ? "-100%" : "0%" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * 0.1,
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <motion.div
                    className="relative z-40 flex flex-col items-center gap-6 sm:gap-8 pointer-events-none"
                    animate={{
                        opacity: phase === "wipe" ? 0 : 1,
                        y: phase === "wipe" ? -50 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Logo / Name */}
                    <motion.h1
                        className={`${xirod.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wider flex items-center gap-2 sm:gap-3 flex-wrap justify-center p-4 text-center leading-tight`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span>Maniesh</span>
                        <span className="text-[#EB5B00]">Sanwal.</span>
                    </motion.h1>

                    {/* Loading bar + percentage */}
                    <div className="flex flex-col items-center gap-4 w-full px-8">
                        {/* Progress bar container */}
                        <div className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-[2px] bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-[#EB5B00] rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1, ease: "linear" }}
                            />
                        </div>

                        {/* Loading text + percentage */}
                        <motion.div
                            className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs tracking-[3px] sm:tracking-[5px] uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <span className="text-white/50">Loading</span>
                            <span className="text-[#EB5B00] font-mono text-sm sm:text-base min-w-[40px] sm:min-w-[45px] text-right tabular-nums">
                                {progress}%
                            </span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Subtle corner accents */}
                <motion.div
                    className="absolute top-4 left-4 sm:top-8 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 border-l-[2px] border-t-[2px] border-[#EB5B00]/30 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase === "wipe" ? 0 : 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                />
                <motion.div
                    className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 border-r-[2px] border-b-[2px] border-[#EB5B00]/30 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase === "wipe" ? 0 : 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default LoadingScreen
