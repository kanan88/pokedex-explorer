const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        className="h-14 w-80 sm:w-96 pr-8 pl-5 rounded focus:outline-none text-primary-900"
        placeholder="Filter pokemons by name..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
