export default function SearchBar({ query, onSubmit, setQuery }) {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };
  const handleChange = event => {
    setQuery(event.target.value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
