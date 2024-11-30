"use client";
import React from 'react'
import { motion } from "framer-motion";

const Skill = ({name, x, y}) =>{
  return (
    <motion.div className="felx items-center justify-center rounded-full font-semibold bg-black text-light
            py-3 px-6 shadow-orange-200 cursor-pointer absolute
            lg:py-6 lg:px- md:text-sm md:py-1.5 md:px-6 xs:bg:transparent xs:dark:bg-transparent
            
            
            "
            whileHover={{scale:1.20}}
            initial={{x:0, y:0}}
            animate={{x:x, y:y}}
            transition={{duration:5.5}}
            viewport={{once:true}}
          >
            {name}
    </motion.div>

  )
}

const Skills =()=> {
  
  return (
    <>
      <section id="skills">
        
        <h2 className="flex container lg:py-4 items-center justify-around mx-auto text-6xl font-bold  md:text-6xl text-white " >Habilidades</h2>
          <div className="w-full h-screen relative flex items-center rounded-full justify-center bg-circularLight 
      

          "> 
              
              <motion.div 
                className="felx items-center justify-center rounded-full font-semiboldbg  text-light
                  p-8 shadow-orange-200 cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
                whileHover={{scale:1.20}}
              >
                Python
              </motion.div>
              <Skill name="C#" x="-18vw" y="2vw"/>
              <Skill name="JavaScript" x="-5vw" y="-12vw"/>
              <Skill name="React" x="20vw" y="6vw"/>
              <Skill name="NodeJs" x="0vw" y="12vw"/>
              <Skill name="HTML" x="-22vw" y="-16vw"/>
              <Skill name="CSS" x="17vw" y="-13vw"/>
              <Skill name="Banco de Dados" x="30vw" y="-4vw"/>
              <Skill name="GIT" x="30vw" y="-18vw"/>
          </div>    

      </section>
  
     
    </>
    
                
  )
}

export default Skills;




{/*<div className="xl:gap-16 sm:py-16 xl:px-16 mb-3 circularLight">
        <span className="flex container lg:py-4 items-center justify-around mx-auto text-6xl font-bold text-balance mb-12  ">Habilidades</span>
          <div className="grid grid-cols-2 md:grid-cols-4 text-center bg-circularLight">
            
            <ul className=" rounded px-5  inline-flex content-center justify-center "> < FaPython />Python</ul>
            <li className="  rounded px-5  inline-flex content-center justify-center mb-10"> <SiCsharp/>C#</li>
            <li className=" rounded px-10  inline-flex content-center justify-center mb-10"> <IoLogoJavascript/> JavaScript</li>
            <li className=" rounded px-5  inline-flex content-center justify-center mb-10"> <FaReact/> React</li>
            <li className=" rounded px-5  inline-flex content-center justify-center mb-10"> <FaNodeJs/> NodeJs</li>
            <li className=" rounded px-5  inline-flex content-center justify-center mb-10"> <FaHtml5/> HTML</li>
            <li className=" rounded px-5  inline-flex content-center justify-center mb-10"> <FaCss3Alt/> CSS</li>
            <li className=" rounded px-5  inline-flex content-center justify-center mb-10"> <FaDatabase/> Banco De Dados</li>
          </div>              
    </div>*/}
