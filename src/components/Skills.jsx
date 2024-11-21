import React from 'react'
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const Skills =()=> {
  return (
    <section id="skills" className="lg:py-16">
      <div className="xl:gap-16 sm:py-16 xl:px-16 mb-3">
        <span className="flex container lg:py-4 items-center justify-around mx-auto text-6xl font-bold text-balance mb-12 ">Habilidades</span>
          <div className="grid grid-cols-2 md:grid-cols-4 text-center ">
            <ul className=" rounded px-5  inline-flex content-center justify-center "> < FaPython />Python</ul>
            <li className="  rounded px-5  inline-flex content-center justify-center mb-10"> <SiCsharp/>C#</li>
            <li className=" rounded px-10  inline-flex content-center justify-center mb-10"> <IoLogoJavascript/> JavaScript</li>
            <li className=" rounded px-5  inline-flex content-center justify-center mb-10"> <FaReact/> React</li>
            <li className=" rounded px-5  inline-flex content-center justify-center mb-10"> <FaNodeJs/> NodeJs</li>
            <li className=" rounded px-5  inline-flex content-center justify-center mb-10"> <FaHtml5/> HTML</li>
            <li className=" rounded px-5  inline-flex content-center justify-center mb-10"> <FaCss3Alt/> CSS</li>
            <li className=" rounded px-5  inline-flex content-center justify-center mb-10"> <FaDatabase/> Banco De Dados</li>
          </div>              
    </div>

    </section>
    
                
  )
}

export default Skills;