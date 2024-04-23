export default function ImageCard({ urls, alt }) {
  return (
    <div>
      <img src={urls.small} alt={alt} />
    </div>
  );
}
