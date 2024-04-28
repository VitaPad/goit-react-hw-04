import css from './ImageCard.module.css';

export default function ImageCard({ urls, alt, openModal }) {
  const handleClick = () => {
    openModal(urls.regular);
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
