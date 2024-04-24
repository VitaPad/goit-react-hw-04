import ImageCard from './ImageCard ';

export default function ImageGallery({ items, openModal }) {
  return (
    <ul>
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
