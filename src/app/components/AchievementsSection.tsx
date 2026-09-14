"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 51,
    suffix: "+",
    label: "Projects Shipped",
    description: "Web & mobile products in production",
  },
  {
    value: 2,
    label: "Awards Won",
    description: "Hackathons & industry recognition",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Building products end-to-end",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const CountUp = ({ to, start }: { to: number; start: boolean }) => {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => unsub();
  }, [rounded]);

  useEffect(() => {
    if (!start) return;
    const controls = animate(mv, to, {
      duration: 1.6,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [start, to, mv]);

  return <>{display}</>;
};

const AchievementsSection = () => {
  const [countUp, setCountUp] = useState(false);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={() => setCountUp(true)}
      className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
    >
      {stats.map((s, i) => (
        <motion.div
          key={i}
          variants={item}
          className="group relative rounded-2xl border border-[#33353F] bg-[#181818] p-6 sm:p-8 overflow-hidden transition-colors hover:border-primary-500/50"
        >
          <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
          <div className="relative">
            <h3 className="text-5xl sm:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              <CountUp to={s.value} start={countUp} />
              {s.suffix}
            </h3>
            <p className="text-white font-semibold mt-3 text-lg">{s.label}</p>
            <p className="text-[#9CA2A9] text-sm mt-1">{s.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AchievementsSection;
