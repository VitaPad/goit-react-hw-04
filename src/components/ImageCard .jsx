import css from './ImageCard.module.css';

export default function ImageCard({ urls, alt, openModal, imageUrl }) {
  const handleClick = () => {
    openModal(imageUrl);
    console.log(handleClick);
  };
  return (
    <div className={css.container}>
      <img
        className={css.img}
        src={urls.small}
        alt={alt}
        onClick={handleClick}
      />
    </div>
  );
}
