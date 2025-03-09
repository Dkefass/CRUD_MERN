import React from 'react'
import { useModal } from './ModalContext';


function Modal() {

  const {open,body}=useModal();
console.log(useModal)
  return (
    
    <div className={`
     fixed z-30 transition-all duration-300 backdrop-blur-sm inset-0 flex justify-center items-center
     ${open ?"visible dark:bg-white/5   bg-black/40" : "invisible"} 
    `}>
        {body}
    </div>
  )
}

export default Modal