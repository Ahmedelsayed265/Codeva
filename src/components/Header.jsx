import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("blured", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="container">
        <Link className="logo" to="/">
          <img src="/logo.svg" alt="Codeva Logo" />
        </Link>

        <div className="nav_links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="others">
          <Link to="mailto:info@codeva.com">Let&rsquo;s Talk</Link>
          <button>AR</button>
          <button>
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
