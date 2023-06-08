import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <Link to="/home" className="logo">
          #VANLIFE
        </Link>
        <nav>
          <CustomLink link="/about" name="About" />
          <CustomLink link="/vans" name="Vans" />
        </nav>
      </header>
    </>
  );
}

function CustomLink({ link, name }) {
  const resolvedPath = useResolvedPath(link);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link className={`${isActive ? "active" : ""}`} to={link}>
      {name}
    </Link>
  );
}
export default Navbar;
