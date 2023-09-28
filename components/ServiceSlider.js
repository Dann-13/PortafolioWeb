import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {
  RxPencil2,
  RxArrowTopRight
} from 'react-icons/rx'
import{
  BsDatabaseCheck,
  BsFillPaletteFill
} from 'react-icons/bs'

import { FreeMode, Pagination } from 'swiper'

// data
const serviceData = [
  {
    icon: <BsDatabaseCheck />,
    title: 'Desarrollo Backend',
    description: 'Desarrollo de servidores, API y lógica de negocio para aplicaciones web y móviles.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Desarrollo Frontend',
    description: 'Diseño y desarrollo de interfaces de usuario interactivas y atractivas para aplicaciones web y móviles.',
  },
  {
    icon: <BsFillPaletteFill />,
    title: 'Diseño UX/UI',
  description: 'Creación de experiencias de usuario (UX) y diseño de interfaces de usuario (UI) atractivas y funcionales',
  },

];


const ServiceSlider = () => {
  return <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true,
      
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px] '
  >
    {
      serviceData.map((item, index) => {
        
        return (
        <SwiperSlide key={index}>
          <div className='h-[300px] bg-[#2A2F3D] rounded-lg px-6 py-8 flex sm:flex-col
          gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#364654] transition-all duration-300 '>
            {/** icon index*/}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/**tite */}
            <div>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-x-[350px] h-[150px] leading-normal '>{item.description}</p>
            </div>
            {/**Arrow */}
            <div className='text-3xl '>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
        )
      })
    }
  </Swiper>;
};

export default ServiceSlider;
