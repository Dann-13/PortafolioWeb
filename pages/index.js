import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className="bg-[#0E1933] h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 
      via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto">
          {/*Title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl lg:text-4xl xl:text-5xl font-bold">
            Transformando ideas <br /> Into {' '}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/*SubTitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" max-w-sm xl:max-w-xl mx-auto xl:mx-0
          mb-10 xl:mb-16">
            El futuro no ha sido escrito . No hay destino más que lo que hacemos para nosotros mismos. (John Connor)
          </motion.p>
          {/*Btn */}
          <div className="flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/*image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/*bg img */}
        <div className="bg-none xl:bg-explosion mix-blend-color-dodge xl:bg-cover xl:bg-right xl:bg-no-repeat 
        w-full h-full absolute translate-z-0"></div>
        {/*particles */}
        <ParticlesContainer />
        <motion.div
          initial={{ opacity: 0 }} // Establece la opacidad inicial en 0
          animate={{ opacity: 1 }} // Anima la opacidad a 1
          exit={{ opacity: 0 }} // Ajusta el estado de salida según tus necesidades
          transition={{ duration: 2, delay: 0.2, ease: 'easeInOut' }}
          className="w-full h-full max-w-[300px] max-h-[250px] absolute lg:right-[15%] xl:top-[30%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
