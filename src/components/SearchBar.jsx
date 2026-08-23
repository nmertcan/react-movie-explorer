export default function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Film ara..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}
