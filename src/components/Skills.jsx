"use client";

import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="
        flex items-center justify-center
        rounded-full font-semibold 
        bg-gradient-to-r from-purple-600 to-blue-600 
        text-white shadow-xl cursor-pointer absolute
        py-3 px-6 
        lg:py-5 lg:px-8
        md:py-2 md:px-4 md:text-sm
        sm:py-1 sm:px-3 sm:text-xs
        transition-all duration-300
      "
      whileHover={{ scale: 1.25, boxShadow: "0px 0px 25px rgba(140, 60, 255, 0.7)" }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, x, y }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-10">
      <h2 className="text-center text-5xl md:text-6xl font-bold text-white mb-12 drop-shadow-lg">
        Habilidades
      </h2>

      {/* Container Principal */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="
          relative flex items-center justify-center
          w-full h-[80vh] md:h-[90vh]
          rounded-full bg-circularLight
        "
      >
        {/* Elemento Central */}
        <motion.div
          className="
            flex items-center justify-center
            rounded-full font-bold text-white 
            bg-gradient-to-r from-blue-700 to-purple-700
            shadow-2xl cursor-pointer
            p-10 lg:p-8 md:p-5 sm:p-3 sm:text-xs
            animate-pulse
          "
          whileHover={{ scale: 1.15 }}
        >
          Python
        </motion.div>

        {/* Skills animadas */}
        <Skill name="C#" x="-18vw" y="2vw" />
        <Skill name="JavaScript" x="-5vw" y="-12vw" />
        <Skill name="React" x="20vw" y="6vw" />
        <Skill name="NodeJs" x="0vw" y="12vw" />
        <Skill name="HTML" x="-22vw" y="-16vw" />
        <Skill name="CSS" x="17vw" y="-13vw" />
        <Skill name="Banco de Dados" x="30vw" y="-4vw" />
        <Skill name="GIT" x="30vw" y="-18vw" />
      </motion.div>
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




