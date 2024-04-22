export default function ImageCard({ url, title }) {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  );
}
