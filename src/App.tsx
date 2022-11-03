import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const store = useSelector((state: RootState) => state.reducer);

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
