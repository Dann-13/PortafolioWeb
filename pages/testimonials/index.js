import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
const Testimonials = () => {
  return (
    <div>
      
      <TypeAnimation className="py-32"
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Desarrollando ideas en un entorno diguital',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Desarrollando ideas console.log("Hello, World!")',
          1000,
          'Desarrollando ideas print("Hello, World!")',
          1000,
          'Desarrollando ideas ', // Agrega un espacio después de las palabras anteriores
    '<span className="text-accent">Hello, World!</span>',
          1000
        ]}
        wrapper="span"
        speed={50}s
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>




  )
};

export default Testimonials;
