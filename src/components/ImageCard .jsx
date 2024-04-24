export default function ImageCard({ urls, alt, openModal }) {
  const handleClick = () => {
    openModal(urls.regular);
    console.log(handleClick);
  };
  return (
    <div>
      <img src={urls.small} alt={alt} onClick={handleClick} />
    </div>
  );
}
