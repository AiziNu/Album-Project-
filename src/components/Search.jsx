export const Search = ({inputValue, handleChange, handleReset, handleSearch}) => {
  return (
   <div className="search">
  <label> Search for Albums </label>
  <input value={inputValue} onChange={handleChange} />
  <button onClick={handleSearch}>Search</button>
  <button onClick={handleReset}>Reset</button>
</div>
  );
}