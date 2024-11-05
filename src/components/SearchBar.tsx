import { useDispatch, useSelector } from "react-redux";
import { tableSlice } from "../redux/reducer";
import { getSearch } from "../redux/selector";

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchInputValue = useSelector(getSearch);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value.trimStart();

    dispatch(tableSlice.actions.search(value));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchInputValue}
        onChange={(e) => handleInputChange(e)}
      />
    </form>
  );
}
