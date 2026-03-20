import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">Flocam</NavLink>

        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Inicio
          </NavLink>

          <NavLink 
            to="/servicios" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Servicios
          </NavLink>

          <NavLink 
            to="/alta" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Alta
          </NavLink>
        </div>
      </div>
    </nav>
  );
}