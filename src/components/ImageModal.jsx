import Modal from 'react-modal';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');
export default function ImageModal({
  isOpen,
  onRequestClose,
  style,
  setIsOpen,
  imageUrl,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      sstyle={style}
      openModal={setIsOpen}
      className={css.container}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          color: 'lightsteelblue',
          overflow: 'hidden',
          border: 'none',
          background: 'none',
        },
      }}
    >
      <img src={imageUrl} alt="Large" className={css.img} />
    </Modal>
  );
}
