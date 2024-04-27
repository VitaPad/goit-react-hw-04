import Modal from 'react-modal';
Modal.setAppElement('#root');
export default function ImageModal({
  isOpen,
  closeModal,
  customStyles,
  setIsOpen,
  imageUrl,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      openModal={setIsOpen}
      contentLabel="Example Modal"
    >
      <img src={imageUrl} alt="Large" />
    </Modal>
  );
}
