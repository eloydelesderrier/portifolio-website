"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "GIT-FIND",
    description: "Busca todos os usuário e portifolio dos usuários do GitHub ",
    technology: "React, javaScript",
    image: "images/projects/GitHub.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/eloydelesderrier/GIT-FIND",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "JOGO PONG",
    description: "Pong é um game de esporte desenvolvido e publicado pela Atari em 1972. Com uma proposta simples que lembra a dinâmica do pingue-pongue.",
    technology: "Python",
    image: "images/projects/Pong.png",
    tag: ["All", "Web"],
    gitUrl: "https://gitshub.com/eloydelesderrier/Jogo-pong",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Jogo Termo",
    description: "Descubra a palavra certa em 6 tentativas. Depois de cada tentativa, as peças mostram o quão perto você está da solução. ",
    technology: "Python",
    image: "images/projects/termo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/eloydelesderrier/Jogo-Termo",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-7xl font-bold text-white mt-4 mb-8 md:mb-12">
      Projetos
      </h2>
      <div className=" flex flex-row justify-center items-center gap-2 py-6">
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
              technology={project.technology}
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