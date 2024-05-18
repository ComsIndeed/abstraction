import "./App.css";
import Interface from "./components/interface.test";
import test from "./lib/test";

function App() {
  test();

  return (
    <>
      <Interface />
    </>
  );
}

export default App;
