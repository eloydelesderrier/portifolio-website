"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import avatar from '../imagem/avatar.png';



const HeroSection = () => {
    return (
      <section id="Home" className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-6xl lg:text-6xl lg:leading-normal font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Olá, Eu sou{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Eloy Delesderrier",
                  1200,
                  "Desenvolvedor de software",
                  1200
                  
                ]}
                wrapper="span"
                speed={1}
                repeat={Infinity}
              />
            </h1>
           
            <div>
              <Link
                href="/#contact"
                className="transition ease-in delay-150 hover:-translate-y-1  duration-300 px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white"
              >
                Contato
              </Link>
              <Link
                href= 'Eloy Delesderrier.pdf'
                download = {true}
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="transition ease-in delay-150 hover:-translate-y-1  duration-300 px-6 py-3 w-full sm:w-fit rounded-full block bg-gradient-to-br from-blue-500 via-purple-500">
                  Download CV
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full  w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src={avatar}
                alt="hero image"
                className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;