"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="my-12 md:my-12 py-24 relative flex justify-center"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="z-10 max-w-xl text-center"
      >
        <motion.h5
          variants={item}
          className="text-2xl md:text-3xl font-bold text-white my-2"
        >
          Let&apos;s Connect
        </motion.h5>
        <motion.p variants={item} className="text-[#ADB7BE] mb-6 mx-auto max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3 mb-6 justify-center"
        >
          <a
            href="mailto:shedrachjonah11@gmail.com?subject=Let%27s%20work%20together"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white font-medium"
          >
            Email me
          </a>
          <a
            href="https://wa.me/2348069983308?text=Hi%20Shedrach%2C%20I%27d%20like%20to%20work%20with%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#33353F] hover:border-white text-white font-medium"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
        <motion.div
          variants={item}
          className="socials flex flex-row gap-2 justify-center"
        >
          <Link
            href="https://github.com/ShedrachJonah11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shedrach-jonah-4894a722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
