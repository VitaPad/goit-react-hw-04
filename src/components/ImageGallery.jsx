import ImageCard from './ImageCard .jsx';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <div>
            <ImageCard
              urls={item.urls}
              alt={item.title}
              openModal={openModal}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

/* openModal={() => openModal(item.urls.regular)} */
