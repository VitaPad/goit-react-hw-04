export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <form>
        <input
          onSubmit={handleSubmit}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
