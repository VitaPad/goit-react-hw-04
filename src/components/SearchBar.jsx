import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.search.value.trim();
    if (value.trim() === '') {
      // Відображення сповіщення про необхідність введення тексту для пошуку
      toast.error('Please enter a search query!');
      return;
    }
    onSubmit(value);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button className={css.button} type="submit">
          Search
        </button>
        <Toaster position="top-right" reverseOrder={false} />
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
