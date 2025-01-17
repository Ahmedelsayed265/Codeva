import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <Link className="logo">
          <img src="/logo.svg" alt="" />
        </Link>

        <div className="nav_links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="others"></div>
      </nav>
    </header>
  );
}
