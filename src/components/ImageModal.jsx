import Modal from 'react-modal';
Modal.setAppElement('#root');
export default function ImageModal({
  modalIsOpen,
  closeModal,
  customStyles,
  setIsOpen,
  imageUrl,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      openModal={setIsOpen}
      contentLabel="Example Modal"
    >
      <img src={imageUrl} alt="Large" />
    </Modal>
  );
}
