type SearchBarType = {
  searchBarValue: string;
  setSearchBarValue: (value: string) => void;
};

export default function SearchBar({
  searchBarValue,
  setSearchBarValue,
}: SearchBarType) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value.trimStart();

    console.log(value);

    setSearchBarValue(value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="search">
        Search:{" "}
        <input
          type="text"
          id="search"
          name="search"
          value={searchBarValue}
          onChange={(e) => handleInputChange(e)}
        />
      </label>
    </form>
  );
}
