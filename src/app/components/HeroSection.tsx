"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  ArrowDownTrayIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import { Space_Grotesk } from "next/font/google";

const displayFont = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const techStack = [
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "Node.js",
];

const HeroSection = () => {
  return (
    <section className="lg:py-16 relative">
      <div className="pointer-events-none absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-96 w-96 rounded-full bg-secondary-500/10 blur-3xl" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-center lg:text-left"
        >
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for freelance &amp; full-time roles
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className={`${displayFont.className} mt-6 tracking-tight`}
          >
            <span className="block text-[#ADB7BE] text-xl sm:text-2xl lg:text-3xl font-normal mb-2">
              Hi, I&apos;m
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Shedrach Jonah
            </span>
            <span className="block mt-4 text-white/90 text-2xl sm:text-3xl lg:text-4xl font-bold min-h-[1.2em]">
              I build{" "}
              <TypeAnimation
                sequence={["web apps", 1500, "mobile apps", 1500]}
                wrapper="span"
                speed={50}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500 whitespace-nowrap"
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[#ADB7BE] text-base sm:text-lg mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Full-stack developer building web and mobile products end-to-end.
            5+ years shipping with React, React Native, Next.js, and Node.js —
            currently working on AI-powered writing tools and consumer mobile
            apps.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white font-medium shadow-lg shadow-primary-500/25"
            >
              Get in touch
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/Shedrach's Resume.pdf"
              download="Shedrach_Jonah_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#33353F] hover:border-white text-white font-medium"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              Download resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start text-xs sm:text-sm text-[#9CA2A9]"
          >
            {techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full border border-[#33353F] bg-[#181818]"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 place-self-center"
        >
          <div className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 blur-3xl opacity-30 animate-pulse" />
            <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-primary-500 to-secondary-500">
              <div className="h-full w-full rounded-full bg-[#181818]" />
            </div>
            <Image
              src="/images/hero-image.png"
              alt="Shedrach Jonah Mark"
              className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={340}
              height={340}
              priority
            />
            <div className="absolute -bottom-2 -right-2 rounded-2xl bg-[#181818] border border-[#33353F] px-4 py-3 shadow-xl">
              <p className="text-2xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
                5+
              </p>
              <p className="text-[10px] uppercase tracking-wider text-[#9CA2A9] mt-1">
                years exp
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="hidden lg:flex mt-16 justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-[#9CA2A9] text-xs tracking-wider uppercase">
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownIcon className="h-4 w-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
