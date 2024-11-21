import "./App.css";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import Pricingpage from "./Pricingpage";
import Process from "./proccess";
import Vehicle from "./Vehicle";
import About from "./About";
import Apppage from "./Apppage";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/process" element={<Process />}></Route>
        <Route path="/vehicle" element={<Vehicle />}></Route>
        <Route path="/pricing" element={<Pricingpage />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/App" element={<Apppage />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
