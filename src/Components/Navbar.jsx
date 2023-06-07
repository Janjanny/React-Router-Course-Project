import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <Link to="/home" className="logo">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
