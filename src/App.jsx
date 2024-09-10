import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Events from "./Components/Events/Events";
import Closing from "./Components/Closing/Closing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Events />
      <Closing />
    </>
  );
}

export default App;
