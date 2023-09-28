import React from 'react'
import Modal from 'react-modal'
import {CiCircleRemove} from 'react-icons/ci'
function ModalMessage({ isOpen, onClose, message }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="modal fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50"
        contentLabel="Mensaje de Éxito"
      >
        <div className="modal-content bg-primary rounded-xl xl:w-1/2 p-4 border-2 border-accent w-[300px]">
          <h2 className="text-xl font-bold mb-4 text-white">¡{message}!</h2>
          <p className="text-gray-100 text-[14px]">
            ¡Gracias por ponerte en contacto! Te responderé lo más pronto posible. ¡Hasta pronto!
          </p>
          <button
            onClick={onClose}
            className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mt-4"
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-white">Cerrar</span>
            <CiCircleRemove className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
            group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-white'/>
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default ModalMessage
