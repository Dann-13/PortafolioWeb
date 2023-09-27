import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import emailJs from '@emailjs/browser'
import React, { useRef } from 'react';


const Contact = () => {

  const refForm = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(refForm.current)
    const serviceId = 'service_x99lndh';
    const templatedId = 'template_bfiw9sg'
    const apiKey = 'dLuvcmIr9IW6YODus'
    emailJs.sendForm(serviceId, templatedId, refForm.current, apiKey).then(result => console.log(result.text)).catch(error => console.error(error));


  }

  return (
    <section class="body-font relative bg-gray-900 text-gray-400">

      <div class="container mx-auto px-5 py-36 xl:pb-0">

        <div class="mb-12 flex w-full flex-col text-center">
          <h1 class="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contactame!</h1>

        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">

          <div className="">
            <form ref={refForm} onSubmit={handleSubmit} className='-m-2 flex flex-wrap items-center'>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input type="text" id="name" name="username" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-accent focus:bg-gray-900 focus:ring-2 " placeholder="Nombre" required/>
                  <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent">Nombre</label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input type="email" id="email" name="email" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-accent focus:bg-gray-900 focus:ring-2 " placeholder="Email" required/>
                  <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent">Correo</label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-accent focus:bg-gray-900 focus:ring-2 " placeholder="Mensaje" required></textarea>
                  <label for="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent">Mensaje</label>
                </div>
              </div>
              <div className="w-full p-2 ">
                <button className='btn rounded-full border border-white/50 max-w-[170px]
          px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
          hover:border-accent group'>
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
            transition-all duration-500'>Enviar</span>
                  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
            group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </section>

  )
}

export default Contact;
