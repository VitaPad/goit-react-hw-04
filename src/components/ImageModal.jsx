import Modal from 'react-modal';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');
export default function ImageModal({
  isOpen,
  onRequestClose,
  style,
  imageUrl,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.container}
      contentLabel="Example Modal"
      style={{
        ...style,
        overlay: {
          ...style.overlay,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          ...style.content,
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
