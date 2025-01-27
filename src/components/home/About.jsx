import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h2 data-aos="fade-up">
                Building Stronger Brands Creating{" "}
                <span className="highlight">Impressions!</span>
              </h2>
              <p data-aos="fade-up">
                we are a team of passionate developers, designers, and
                innovators dedicated to creating software solutions that make a
                difference in the software development world. Our mission is to
                empower businesses and individuals by delivering innovative and
                cutting-edge software solutions that meet their unique needs and
                exceed their expectations.
              </p>

              <ul data-aos="fade-up">
                <li>
                  <img src="/check.svg" alt="check" /> Expertise in cutting-edge
                  technologies
                </li>
                <li>
                  <img src="/check.svg" alt="check" /> Client-focused approach
                </li>
                <li>
                  <img src="/check.svg" alt="check" /> Proven track record of
                  success
                </li>
              </ul>
              <div data-aos="fade-up" className="d-flex align-items-center">
                <Link to="/about">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="img" data-aos="zoom-in-up">
              <img src="/about.jpeg" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
