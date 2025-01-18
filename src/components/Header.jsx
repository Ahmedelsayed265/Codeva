import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const header = useRef(null);
  const [closing, setClosing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        header.current.classList.add("blured");
      } else {
        header.current.classList.remove("blured");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleCloseMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setShowMenu(false);
      setClosing(false);
    }, 300);
  };

  return (
    <header ref={header}>
      <nav className="container">
        <Link className="logo" to="/">
          <img src="/logo.svg" alt="Codeva Logo" />
        </Link>

        <div
          className={`nav_links ${showMenu ? "active" : ""} ${
            closing ? "closing" : ""
          }`}
        >
          <div className="head">
            <Link className="logo" to="/">
              <img src="/logo.svg" alt="Codeva Logo" />
            </Link>
            <button className="close" onClick={handleCloseMenu}>
              <i className="fa-regular fa-xmark"></i>
            </button>
          </div>

          <NavLink to="/" className="nav_link" onClick={handleCloseMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav_link" onClick={handleCloseMenu}>
            About Us
          </NavLink>
          <NavLink
            to="/portfolio"
            className="nav_link"
            onClick={handleCloseMenu}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/services"
            className="nav_link"
            onClick={handleCloseMenu}
          >
            Services
          </NavLink>
          <NavLink to="/contact" className="nav_link" onClick={handleCloseMenu}>
            Contact Us
          </NavLink>
        </div>

        <div className="others">
          <Link to="mailto:info@codeva.com">Let&rsquo;s Talk</Link>
          <button>AR</button>
          <button onClick={() => setShowMenu(true)}>
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
