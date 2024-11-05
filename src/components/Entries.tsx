import { useDispatch } from "react-redux";
import { tableSlice } from "../redux/reducer";

export default function Entries() {
  const dispatch = useDispatch();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log(value);
    dispatch(tableSlice.actions.setSelectOption(value));
  };

  return (
    <div>
      Show{" "}
      <select onChange={(e) => handleSelect(e)}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>{" "}
      entries
    </div>
  );
}
