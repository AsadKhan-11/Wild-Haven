import { useEffect, useState } from "react";
import { BounceLoader, ClipLoader } from "react-spinners";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Events from "./Components/Events/Events";
import Closing from "./Components/Closing/Closing";
import Footer from "./Components/Footer/Footer";
import Camp from "./Components/Camp/Camp";
import Animals from "./Components/Animals/Animals.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <BounceLoader color="blue" loading className="spinner" />
      ) : (
        <div>
          <Navbar />
          <Home />
          <Animals />
          <Camp />
          <Events />
          <Closing />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
