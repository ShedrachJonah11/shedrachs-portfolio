"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

type TabId = "skills" | "education" | "certifications";

const skills: string[] = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "REST & GraphQL",
];

const education: { school: string; detail: string }[] = [
  { school: "AltSchool Africa", detail: "Software Engineering" },
  { school: "Federal Polytechnic Bauchi", detail: "Diploma" },
];

const certifications: string[] = [
  "GENESYS Upskill Training Program (2023)",
  "Software Engineering Diploma",
  "UNESCO Youth Hackathon 2023",
];

const tabs: { id: TabId; label: string; Icon: typeof CodeBracketIcon }[] = [
  { id: "skills", label: "Skills", Icon: CodeBracketIcon },
  { id: "education", label: "Education", Icon: AcademicCapIcon },
  { id: "certifications", label: "Certifications", Icon: TrophyIcon },
];

const AboutSection = () => {
  const [tab, setTab] = useState<TabId>("skills");

  return (
    <section className="text-white py-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl border border-[#33353F] overflow-hidden bg-[#181818]">
            <Image
              src="/Shedrach_Jonah.png"
              width={500}
              height={500}
              alt="Shedrach Jonah"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-8 md:mt-0"
        >
          <span className="text-primary-400 font-medium text-sm tracking-widest uppercase">
            About me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
            The person behind the code
          </h2>
          <p className="text-[#ADB7BE] text-base md:text-lg leading-relaxed">
            I&apos;m a full-stack developer building web and mobile products
            end-to-end. I care about fast, accessible UIs, clean APIs, and
            shipping things people actually want to use. Currently working on
            AI-powered writing tools and consumer mobile apps.
          </p>

          <div className="flex gap-2 mt-8 flex-wrap">
            {tabs.map(({ id, label, Icon }) => {
              const active = tab === id;
              return (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
                      : "border border-[#33353F] text-[#ADB7BE] hover:border-white hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </div>

          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-6 min-h-[180px]"
          >
            {tab === "skills" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skills.map((s) => (
                  <div
                    key={s}
                    className="px-3 py-2 rounded-lg border border-[#33353F] bg-[#181818] text-sm text-[#ADB7BE] text-center"
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
            {tab === "education" && (
              <ul className="space-y-4">
                {education.map((e) => (
                  <li
                    key={e.school}
                    className="border-l-2 border-primary-500 pl-4"
                  >
                    <p className="text-white font-medium">{e.school}</p>
                    <p className="text-[#9CA2A9] text-sm mt-0.5">{e.detail}</p>
                  </li>
                ))}
              </ul>
            )}
            {tab === "certifications" && (
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-[#ADB7BE]"
                  >
                    <TrophyIcon className="h-5 w-5 text-primary-400 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
