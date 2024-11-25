"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RahaPay",
    description:
      "A fintech mobile application for seamless payments and transfers",
    image: "/images/rahapay.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.rahapay.com/",
  },
  {
    id: 2,
    title: "Pro Announce",
    description: "A mobile platform connecting developers with opportunities",
    image: "/images/proAnnounce.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "KASUWA E-farm Application",
    description:
      "An electronic farm application for buying and selling products",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://e-gona.vercel.app/",
  },
  {
    id: 5,
    title: "BillsLink",
    description: "Pay your bills at afforable prices.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl:
      "https://play.google.com/store/apps/details?id=com.shaydee11.billslink",
  },
  {
    id: 8,
    title: "Krypta Pay",
    description: "Cryptocurrency payment solution for mobile transactions",
    image: "/images/kryptapay.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://krypta-pay.com/en/",
  },
  {
    id: 10,
    title: "SummaryHub.ai",
    description:
      "Get instant summaries and Document summarization with just a click.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://summary-hub.vercel.app/",
  },
  {
    id: 11,
    title: "Vetmemos",
    description:
      "VetMemos - A platform for structured medical notes from your encounters, in seconds.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://vetmemos.com",
  },
  {
    id: 12,
    title: "mpilo",
    description:
      "Mpilo is an innovative scribing assistant, specifically designed to revolutionize the way healthcare professionals create SOAP notes during consultations.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://mpilo-67t3.vercel.app/",
  },
  {
    id: 13,
    title: "ChatAVA - Chat Assistant",
    description: "",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      </div>
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
