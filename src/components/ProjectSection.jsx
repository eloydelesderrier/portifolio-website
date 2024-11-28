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
    previewUrl: "https://git-find-phi.vercel.app/",
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
    title: "Mata Mosquito",
    description: "O jogo Mata Mosquito foi desenvolvido com a ideia de colocar a imagem de um mosquito voando pela tela para que o jogador tente mata-lo.",
    technology: "JavaScript",
    image: "images/projects/bg.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/eloydelesderrier/jogo-MataMosquito",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Sistema de Estacionamento",
    description: "E um sistema para adicionar os carros em uma vaga de estacionamento.",
    technology: "Csharp",
    image: "images/projects/estacionamento.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/eloydelesderrier/Desafio-Estacionamento",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Sistema de Cadastro de Hotelaria",
    description: "É um sistema para cadastrar clientes em um Hotel.",
    technology: "Csharp",
    image: "images/projects/hospedagem.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/eloydelesderrier/Sistema-de-Hospedagem",
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