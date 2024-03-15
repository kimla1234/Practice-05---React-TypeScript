import { useState } from "react";
import "./App.css";
import HomePageComponent from "./component/HomePage/HomePageComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePageComponent/>
    </>
  );
}

export default App;
