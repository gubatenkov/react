import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
  const { isModalIsOpened, closeModal, setModalIsOpened } = useGlobalContext()
  if (isModalIsOpened) localStorage.setItem('modal', true)

  useEffect(() => {
    let mod = JSON.parse(localStorage.getItem('modal'))
    setModalIsOpened(mod)
  }, [])

  return <div className={`${isModalIsOpened? 'modal-overlay show-modal' : 'modal-overlay'}`}>
    <div className="modal-container">
      <h3>Modal content</h3>
      <button className='close-modal-btn' onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  </div>
}

export default Modal
