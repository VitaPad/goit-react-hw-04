import Modal from 'react-modal';
export default function ImageModal({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
  setIsOpen,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      openModal={setIsOpen}
      contentLabel="Example Modal"
    ></Modal>
  );
}
