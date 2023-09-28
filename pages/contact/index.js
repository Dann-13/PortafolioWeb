import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import emailJs from '@emailjs/browser'
import React, { useRef, useState } from 'react';
import ModalMessage from '../../components/ModalMessage';

const Contact = () => {

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const refForm = useRef();

  const openModal = (message) => {
    setSuccessMessage(message);
    setIsModalOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (refForm.current.username.value.length < 7) {
      setIsNameValid(false);
      setNameError('El nombre debe tener al menos 7 caracteres.');
      setErrorMessage('Por favor, corrige los errores en el formulario.');
      return; // Evitar envío del formulario si la validación falla

    } else {
      setIsNameValid(true);
      setNameError('');
    }
    const email = refForm.current.email.value;
    const emailRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/;
    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
      setEmailError('El correo electrónico no es válido.');
      setErrorMessage('Por favor, corrige los errores en el formulario.');
      return; // Evitar envío del formulario si la validación falla
    } else {
      setIsEmailValid(true);
      setEmailError('');
    }


    // Si todas las validaciones pasan, enviar el formularios
    const serviceId = 'service_tvuj14w';
    const templatedId = 'template_olumtxb';
    const apiKey = 'WZXL1p2dlu9uSgos0';
    emailJs
      .sendForm(serviceId, templatedId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        openModal('Mensaje enviado'); // Mostrar la modal con el mensaje de éxito
        refForm.current.reset(); // Limpiar los campos del formulario
      })
      .catch((error) => console.error(error));


  }

  return (
    <section className="body-font relative bg-gray-900 text-gray-400">

      <div className="container mx-auto px-5 py-36 xl:pb-0">

        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">¡Contactame!</h1>

        </div>
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate="show"
        exit="hidden"
        className="mx-auto md:w-2/3 lg:w-1/2">

          <div className="">
            <form ref={refForm} onSubmit={handleSubmit} className='-m-2 flex flex-wrap items-center'>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input type="text"
                    id="name"
                    name="username"

                    placeholder="Nombre"
                    className={`peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-accent focus:bg-gray-900 focus:ring-2 ${!isNameValid ? 'border-red-500' : ''
                      }`}

                    onChange={(e) => {
                      if (e.target.value.length < 7) {
                        setIsNameValid(false);
                        setNameError('El nombre debe tener al menos 7 caracteres.');

                      } else {
                        setIsNameValid(true);
                        setNameError('');
                      }
                    }}
                    required />
                  <label for="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white/40 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent">Nombre
                  </label>
                  {isNameValid ? null : (
                    <div className="text-red-500 text-xs mt-1">{nameError}</div>
                  )}
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input type="email"
                    id="email"
                    name="email"
                    className={`peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-accent focus:bg-gray-900 focus:ring-2 ${!isEmailValid ? 'border-red-500' : ''
                      }`}
                    placeholder="Email"
                    onChange={(e) => {
                      const email = e.target.value;
                      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                      if (!emailRegex.test(email)) {
                        setIsEmailValid(false);
                        setEmailError('El correo electrónico no es válido.');
                      } else {
                        setIsEmailValid(true);
                        setEmailError('');
                      }

                    }}

                    required />
                  <label for="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white/40 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent">
                    Correo</label>
                  {isEmailValid ? null : (
                    <div id="err" className="text-red-500 text-xs mt-1">{emailError}</div>
                  )}
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-accent focus:bg-gray-900 focus:ring-2 " placeholder="Mensaje" required></textarea>
                  <label for="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent">Mensaje</label>
                </div>
              </div>
              <div className="w-full p-2 ">
                {errorMessage && (
                  <div className="text-red-500 text-xs mt-2">{errorMessage}</div>
                )}
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
        </motion.div>

      </div>
      {/* Modal */}
      <ModalMessage isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message={successMessage} />
    </section>

  )
}

export default Contact;
