import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./app.scss";
import SearchBar from "./components/SearchBar";
import Entries from "./components/Entries";

function App() {
  return (
    <Provider store={store}>
      <div className="headerTable">
        <Entries />
        <SearchBar />
      </div>
      <p>Data table</p>
    </Provider>
  );
}

export default App;
