import { motion, } from 'framer-motion'
import React, { useState } from 'react';
import con from "../../public/Conversor.png"
import Hotel from "../../public/Hotel.png"
import Pong from "../../public/Pong.png"
import Sanity from "../../public/Sanity.png"
import { fadeIn } from '../../variants'
import { TypeAnimation } from 'react-type-animation';
const Work = () => {
  const [expandedIndex, setEpandedIndex] = useState(null);
  const handleCardClick = (index) => {
    setEpandedIndex(index === expandedIndex ? -1 : index)
  }
  const cardVariants = {
    expanded: {
      width: 400
    },
    collapsed: {
      width: 200
    }
  }
  const aboutData = [
    {
      id: 1,
      title: 'Conversor',
      image: con,
      description: 'Conversor de Monedas',
      linkGit: 'https://github.com/Dann-13/ConversorMonedas/'

    },
    {
      id: 2,
      title: 'Pong',
      image: Pong,
      description: 'Juego Pong Desarrollado en Python',
      linkGit: 'https://github.com/Dann-13/Juego_Pong',
    },
    {
      id: 3,
      title: 'Hotel Sistema',
      image: Hotel,
      description: 'Sistema de gestion basico para hotel',
      linkGit: 'https://github.com/Dann-13/Hotel_Bays',

    },
    {
      id: 4,
      title: 'Ecommerce Sanity',
      image: Sanity,
      description: 'Ecommerce desarrollado en React con el cms Sanity',
      linkGit: 'https://github.com/Dann-13/Ecommerce-Next',
    }
    // Agrega más proyectos aquí si es necesario
  ];
  return (
    <div className='py-36 xl:pt-32 xl:pb-0'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h1 className='text-3xl font-extrabold'>Projectos</h1>

        <TypeAnimation className='mt-4'
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'A continuacion encontraras los proyectos de: Pong',
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            'A continuacion encontraras los proyectos de: Hotel Playa Crystal',
            1500,
            'A continuacion encontraras los proyectos de: Ecomerce Sanity',
            1500,
            'A continuacion encontraras los proyectos de: Conversor Temperatura',
            1500,
            'A continuacion encontraras los proyectos de: Muchos +',
            1500
          ]}
          wrapper="span"
          speed={50} s
          style={{ fontSize: '1.3em' }}
          repeat={Infinity}
        />
      </div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate="show"
        exit="hidden"
        className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>

        {aboutData.map((data, index) => (

          <motion.div
            key={data.id}
            variants={cardVariants}
            initial='collapsed'
            animate={index === expandedIndex ? 'expanded' : 'collapsed'}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${data.image.src})`,
            }}
            className={`card cursor-pointer h-[400px] bg-cover bg-center rounded-[20px]
          ${index === expandedIndex ? 'expanded' : ''} `}
          >
            <div className='card-content h-full flex flex-col justify-end'>
              <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 
              min-h-[100px] flex flex-col items-center justify-center'>
                <h2 className='text-xl font-semibold text-white text-center'>
                  {data.title}
                </h2>
                {index === expandedIndex && (
                  <p className='mt-2 text-gray-300 text-center'>
                    {data.description}
                    <br />
                    <a className='text-accent' target='_blank' rel='noopener noreferrer' href={data.linkGit}>Git</a>
                  </p>
                )}
              </div>

            </div>

          </motion.div>
        ))}

      </motion.div>
    </div>
  )
};

export default Work;
