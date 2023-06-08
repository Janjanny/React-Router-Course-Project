import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components";
import { Home, About, Vans } from "./Page";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </>
  );
}

export default App;
