import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero_section">
      <div className="content">
        <h6>Let’s Build Your Ideas Together</h6>
        <h1>
          <span>Codeva</span> For Innovative Software Solutions
        </h1>
        <p>
          We provide expert website design, development, and mobile application
          solutions for Android and iOS. Serving a diverse global clientele, we
          deliver tailored web solutions that empower organizations worldwide to
          excel in the digital age.
        </p>
        <div className="buttons">
          <Link to="/about">About Codeva</Link>
          <Link to="/portfolio">Our Portfolio</Link>
        </div>
      </div>
    </section>
  );
}
