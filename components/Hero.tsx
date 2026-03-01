"use client";
import { motion } from "framer-motion";

export default function Hero() {
        const scrollToSkills = () => 
            {
            document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
            };

        const scrollToProjects = () =>
            {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            };
  
  
        return (

    <section className="
    relative
    min-h-screen
    flex
    flex-col
    justify-center
    items-center
    text-center
    bg-gradient-to-b
    from-[#0a0a0a]
    via-[#111111]
    to-black
    overflow-hidden">

        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(to_right,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-bold tracking-tight">
            Jad Boukentar
        </motion.h1>

        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl mt-4 text-blue-400">
            Technical Artist specializing in gameplay systems, shaders, and interactive design.
        </motion.p>

        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl mt-4 text-gray-500">
            Designing immersive gameplay systems, tools,
            and interactive experiences.
        </motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4">
            <button type="button"
                    onClick={scrollToProjects}
                    className="px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-400 hover:scale-105 transition-all duration-200">
                View Projects
            </button>

            <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white/15 rounded-lg hover:border-blue-400 transition"
            >
            Resume
            </a>

        </motion.div>

        <motion.div onClick={scrollToSkills}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
            delay: 1.2,
            duration: 1.5,
            repeat: Infinity
        }}
        className="absolute bottom-10 cursor-pointer text-gray-500">
        ↓
        </motion.div>

    </section>
  );
}