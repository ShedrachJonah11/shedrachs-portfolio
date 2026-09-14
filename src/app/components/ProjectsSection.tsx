"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "AlphaWrite",
    description:
      "AI writing assistant that helps students rewrite, improve originality, and polish essays into natural, human-like text.",
    image: "/images/projects/alphawrite.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.alphawrite.ai/",
  },
  {
    id: 2,
    title: "Prosplug",
    description:
      "A mobile platform that connects users with qualified tradespeople for services and projects.",
    image: "/images/projects/prosplug.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://prosplug.com/",
  },
  {
    id: 3,
    title: "LegitWriter",
    description:
      "AI-powered writing assistant, humanizer, and style-matching platform for producing natural, human-like content.",
    image: "/images/projects/legit.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.legitwriter.com/",
  },
  {
    id: 4,
    title: "Daily Disciples",
    description:
      "A mobile app that helps users build a lasting prayer life with personalized verses, accountability circles, and worship music.",
    image: "/images/projects/dailydisciple.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.dailydisciples.co.uk/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
      >
        My Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="text-white flex flex-row justify-center items-center gap-2 py-6"
      >
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </motion.div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
