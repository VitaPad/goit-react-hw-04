import ImageCard from './ImageCard ';

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <div>
            <ImageCard urls={item.urls} alt={item.title} />
          </div>
        </li>
      ))}
    </ul>
  );
}
