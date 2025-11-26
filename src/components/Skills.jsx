"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  hover: { scale: 1.15 },
};

const Skill = ({ name }) => (
  <motion.div
    variants={skillVariants}
    whileHover="hover"
    className="
      flex items-center justify-center
      px-5 py-3 md:px-6 md:py-3
      bg-black text-white 
      rounded-full shadow-md cursor-pointer 
      font-semibold text-sm md:text-base
    "
  >
    {name}
  </motion.div>
);

const Category = ({ title, skills }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
        gap-4 md:gap-6
        place-items-center
      "
    >
      {skills.map((s, i) => (
        <Skill key={i} name={s} />
      ))}
    </motion.div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-center text-5xl font-bold text-white mb-14">
        Habilidades
      </h2>

      <Category
        title="Backend"
        skills={["Python", "Node.js", "C#", "FastAPI", "Express"]}
      />

      <Category
        title="Frontend"
        skills={["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"]}
      />

      <Category
        title="Banco de Dados"
        skills={["MySQL", "SQL Server", "MongoDB", "SQLite"]}
      />

      <Category
        title="Ferramentas"
        skills={["Git", "Figma", "Docker", "Linux"]}
      />
    </section>
  );
};

export default Skills;




// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const Skill = ({ name, x, y }) => {
//   return (
//     <motion.div
//       className="
//         flex items-center justify-center 
//         rounded-full font-semibold 
//         bg-black text-white 
//         py-3 px-6 
//         shadow-md cursor-pointer 
//         absolute 
//         lg:py-5 lg:px-8
//         md:py-2 md:px-4 md:text-sm
//         sm:py-1 sm:px-3 sm:text-xs
//       "
//       whileHover={{ scale: 1.2 }}
//       initial={{ x: 0, y: 0 }}
//       animate={{ x, y }}
//       transition={{ duration: 4.5 }}
//       viewport={{ once: true }}
//     >
//       {name}
//     </motion.div>
//   );
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="py-10">
//       <h2 className="text-center text-5xl md:text-6xl font-bold text-white mb-12">
//         Habilidades
//       </h2>

//       {/* Container Principal */}
//       <div
//         className="
//         relative flex items-center justify-center 
//         w-full h-[80vh] md:h-[90vh] 
//         bg-circularLight rounded-full
//       "
//       >
//         {/* Elemento Central */}
//         <motion.div
//           className="
//             flex items-center justify-center 
//             rounded-full font-semibold 
//             bg-black text-white 
//             p-8 shadow-md cursor-pointer
//             lg:p-6 md:p-4 sm:p-2 sm:text-xs
//           "
//           whileHover={{ scale: 1.2 }}
//         >
//           Python
//         </motion.div>

//         {/* Skills */}
//         <Skill name="C#" x="-18vw" y="2vw" />
//         <Skill name="JavaScript" x="-5vw" y="-12vw" />
//         <Skill name="React" x="20vw" y="6vw" />
//         <Skill name="NodeJs" x="0vw" y="12vw" />
//         <Skill name="HTML" x="-22vw" y="-16vw" />
//         <Skill name="CSS" x="17vw" y="-13vw" />
//         <Skill name="Banco de Dados" x="30vw" y="-4vw" />
//         <Skill name="GIT" x="30vw" y="-18vw" />
//       </div>
//     </section>
//   );
// };

// export default Skills;




// "use client";
// import React from 'react'
// import { motion } from "framer-motion";

// const Skill = ({name, x, y}) =>{
//   return (
//     <motion.div className="felx items-center justify-center rounded-full font-semibold bg-black text-white
//             py-3 px-6 shadow-orange-200 cursor-pointer absolute
//             lg:py-6 lg:px- md:text-sm md:py-1.5 md:px-6 xs:bg:transparent xs:dark:bg-transparent
            
            
//             "
//             whileHover={{scale:1.20}}
//             initial={{x:0, y:0}}
//             animate={{x:x, y:y}}
//             transition={{duration:5.5}}
//             viewport={{once:true}}
//           >
//             {name}
//     </motion.div>

//   )
// }

// const Skills =()=> {
  
//   return (
//     <>
//       <section id="skills">
        
//         <h2 className="flex container lg:py-4 items-center justify-around mx-auto text-6xl font-bold  md:text-6xl text-white " >Habilidades</h2>
//           <div className="w-full h-screen relative flex items-center rounded-full justify-center bg-circularLight 
      

//           "> 
              
//               <motion.div 
//                 className="felx items-center justify-center rounded-full font-semiboldbg text-white
//                   p-8 shadow-orange-200 cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
//                 whileHover={{scale:1.20}}
//               >
//                 Python
//               </motion.div>
//               <Skill name="C#" x="-18vw" y="2vw"/>
//               <Skill name="JavaScript" x="-5vw" y="-12vw"/>
//               <Skill name="React" x="20vw" y="6vw"/>
//               <Skill name="NodeJs" x="0vw" y="12vw"/>
//               <Skill name="HTML" x="-22vw" y="-16vw"/>
//               <Skill name="CSS" x="17vw" y="-13vw"/>
//               <Skill name="Banco de Dados" x="30vw" y="-4vw"/>
//               <Skill name="GIT" x="30vw" y="-18vw"/>
//           </div>    

//       </section>
  
     
//     </>
    
                
//   )
// }

// export default Skills;




