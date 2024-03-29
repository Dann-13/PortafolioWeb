import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';

const Services = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0'>
          {/**text */}
          <motion.h2
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 xl:mt-8'>
            Servicios
          </motion.h2>
          <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'> Te invito a explorar mi mundo de creatividad, innovación y soluciones técnicas
          </motion.p>
        </div>
        <motion.div 
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='w-full xl:max-w-[65%]'>
          <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Services;
