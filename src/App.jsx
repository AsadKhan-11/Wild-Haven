import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Events from "./Components/Events/Events";
import Closing from "./Components/Closing/Closing";
import Footer from "./Components/Footer/Footer";
import Camp from "./Components/Camp/Camp";
import Animals from "./Components/Animals/Animals.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Animals />
      <Camp />
      <Events />
      <Closing />
      <Footer />
    </>
  );
}

export default App;
