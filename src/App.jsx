import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components";
import { Home, About } from "./Page";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
