import { motion, } from 'framer-motion'
import React, { useState } from 'react';
import bulb2 from "../../public/bulb2.png"
import bulb from "../../public/bulb.png"
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
  const cardImages = [bulb2, bulb]
  const cardDescription = [
    'esta es una descripcion de prueba para las card que hare sobre los proyects que tengo',
    'esta es una descripcion de prueba para las card que hare sobre los proyects que tengo'

  ]
  return (
    <div className='py-36'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h1 className='text-3xl font-extrabold'>Projectos</h1>
        <p className='mt-4 text-xl'> Revisa nuestros projectos</p>
      </div>
      <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
        {[0, 1].map((index) => (
          console.log("Ruta de la imagen:", cardImages[index].src),
          <motion.div
            key={index}
            variants={cardVariants}
            initial='collapsed'
            animate={index === expandedIndex ? 'expanded' : 'collapsed'}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index].src})`,
            }}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px]
          ${index === expandedIndex ? 'expanded' : ''} `}
          >
            <div className='card-content h-full flex flex-col justify-end'>
              <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 
              min-h-[100px] flex flex-col items-center justify-center'>
                <h2 className='text-xl font-semibold text-white text-center'>
                  Card {index + 1}
                  </h2>
                  {index === expandedIndex && (
                    <p className='mt-2 text-gray-300 text-center'>
                      {cardDescription[index]}
                    </p>
                  )

                  }
                </div>
              
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  )
};

export default Work;
