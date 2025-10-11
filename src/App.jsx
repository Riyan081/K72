import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import FullScreenNav from "./components/navbar/FullScreenNav";

function App() {

  return (
  <div className="text-white">
     <Navbar/>
     <FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
