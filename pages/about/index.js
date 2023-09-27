import react, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNode,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
//components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import CountUp from "react-countup";
//  data
const aboutData = [
  {
    id: 1,
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaNodeJs />,
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          
          <SiFramer />,
          <FaJava />,
          <FaPython />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    id: 2,
    title: 'awards',
    info: [
      {
        title: 'Graduado Con Honores Tenico en Sistemas',
        stage: '2019',
      },
      
    ],
  },
  
  {
    id: 3,
    title: 'credentials',
    info: [
      {
        title: 'Ingenieria Informatica - Universidad Autonoma De Nariño',
        stage: '2019 - Presente',
      },
      {
        title: 'Desarrollo Web y Aplicaciones Mobiles - Univeridad De Bucaramanga',
        stage: '2022',
      },
      {
        title: 'Desarrollo Web y Diseño UX/UI - Oracle Next Educations',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className=" py-28 bg-primary/30 text-center xl:text-left">


      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container  lg:pt-10  mx-auto h-full flex flex-col items-center xl:flex-row gap-6" >
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2">
            Si puedes <span className="text-accent">imaginarlo</span> puedes crearlo
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Soy un amante de la tecnología desde que era niño, mi curiosidad me ha llevado a
            sumergirme profundamente en el mundo del desarrollo de software.
            Durante mis años de estudio en la universidad, he adquirido conocimientos sólidos en
            lenguajes de programación, diseño de software.
          </motion.p>
          {/**Counters */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <div>
              {/**projets */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
  after:absolute after:top-0 after:right-0 flex flex-col items-center justify-center sm:justify-start">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projectos
                </div>
              </div>

            </div>
          </motion.div>
        </div>
        {/**Informacion */}
        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex flex-col w-full xl:max-w-[48%] h:[400px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {
              aboutData.map((item, itemIndex) => {
                return <div key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    }
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex)
                  }}
                >
                  {item.title}
                </div>
              })
            }
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
        items-center xl:items-start">
            {
              aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={item.id} className="flex-1 flex flex-col md:flex-row
                max-w-max gap-x-2  items-center text-white/60">
                    {/**Title */}
                    <div className="font-light items-center w-[200px] hover:text-accent">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div className="hover:text-accent ">{item.stage}</div>

                    <div className="flex gap-x-4">
                      {/**icons */}
                      {item.icons?.map((icon, itemIndex) => {
                        return <div key={itemIndex} className="text-2xl text-white hover:text-accent">
                          {icon}
                        </div>
                      })}
                    </div>
                  </div>
                )
              })
            }

          </div>
        </motion.div>
      </div>

    </div>
  )
};

export default About;
