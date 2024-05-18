import "./App.css";
import Interface from "./components/interface.test";

function App(props: any) {
  return (
    <>
      <Interface abstraction={props.abstraction} />
    </>
  );
}

export default App;
