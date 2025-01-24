import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="services_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h6>
              <img src="/flash.svg" alt="idea" /> Our Services
            </h6>
            <h2>Your Partner in Digital Transformation</h2>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <Link to="/services/1" className="service_box">
              <div className="head">
                <div className="icon">
                  <img src="/web.svg" alt="web development" />
                </div>

                <span>
                  <img src="/arrow.svg" alt="arrow" />
                </span>
              </div>

              <h3 className="title">Web Development and Design</h3>
              <p className="description">
                Custom, scalable, and visually stunning websites tailored to
                meet your business needs.
              </p>
            </Link>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <Link to="/services/2" className="service_box">
              <div className="head">
                <div className="icon">
                  <img src="/mobile.svg" alt="mobile development" />
                </div>

                <span>
                  <img src="/arrow.svg" alt="arrow" />
                </span>
              </div>

              <h3 className="title">Mobile App Development</h3>
              <p className="description">
                Cross-platform mobile apps designed to deliver exceptional user
                experiences.
              </p>
            </Link>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <Link to="/services/3" className="service_box">
              <div className="head">
                <div className="icon">
                  <img src="/ui.svg" alt="ui ux design" />
                </div>

                <span>
                  <img src="/arrow.svg" alt="arrow" />
                </span>
              </div>

              <h3 className="title">UI / UX Design</h3>
              <p className="description">
                Beautiful and intuitive interfaces that create seamless digital
                interactions.
              </p>
            </Link>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <Link to="/services/4" className="service_box">
              <div className="head">
                <div className="icon">
                  <img src="/cloud.svg" alt="cloud services" />
                </div>

                <span>
                  <img src="/arrow.svg" alt="arrow" />
                </span>
              </div>

              <h3 className="title">Cloud Services</h3>
              <p className="description">
                Secure and scalable cloud solutions to streamline your business
                operations.
              </p>
            </Link>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <Link to="/services/5" className="service_box">
              <div className="head">
                <div className="icon">
                  <img src="/social.svg" alt="digital marketing" />
                </div>

                <span>
                  <img src="/arrow.svg" alt="arrow" />
                </span>
              </div>

              <h3 className="title">Digital Marketing</h3>
              <p className="description">
                Comprehensive strategies to boost your online presence and drive
                conversions.
              </p>
            </Link>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <Link to="/services/6" className="service_box">
              <div className="head">
                <div className="icon">
                  <img src="/commerce.svg" alt="e-commerce solutions" />
                </div>

                <span>
                  <img src="/arrow.svg" alt="arrow" />
                </span>
              </div>

              <h3 className="title">E-Commerce Solutions</h3>
              <p className="description">
                End-to-end e-commerce platforms to help you build and grow your
                online store.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
