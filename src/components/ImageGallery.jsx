import ImageCard from './ImageCard ';

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <div>
            <ImageCard url={item.url} alt={item.title} />
          </div>
        </li>
      ))}
    </ul>
  );
}
