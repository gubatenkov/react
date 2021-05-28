import React, { useEffect } from "react";

const Modal = ({ modalContent, hideModal }) => {
  useEffect(() => {
    setTimeout(() => {
      hideModal();
    }, 3000);
  });
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
