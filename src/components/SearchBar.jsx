export default function SearchBar({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.search.value.trim(); // Отримати значення поля вводу
    onSubmit(value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

/*   const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  }; */
