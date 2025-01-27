import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="header">
        <h1>
          Check Out Some <br /> Extra-Ordinary Work.
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="filter">
              <button className="active">All</button>
              <button>UI / UX</button>
              <button>Websites</button>
              <button>Development</button>
              <button>Mobile Apps</button>
              <button>Branding</button>
            </div>
          </div>

          {Array.from({ length: 6 }).map((_, index) => (
            <div className="col-lg-4 col-md-6 col-12 p-2" key={index}>
              <Link to="/portfolio/1" className="project_box">
                <div className="img">
                  <img src="/p1.webp" alt="project" />
                </div>
                <div className="content">
                  <h3 className="title">Circle e-commerce</h3>
                  <p>
                    A world of shopping at your fingertips. We are a unique
                    shopping app that provides you with all your groceries and
                    consumer goods. You can order everything your home needs,
                    from fresh vegetables and fruits, groceries, dairy and
                    cheese, fresh meats and poultry, frozen products of all
                    kinds, snacks, baked goods and sweets, cleaning supplies,
                    baby care products, personal care items, and pet food. All
                    this and more in one place near you, just a click away.
                    Download the app and enjoy a fast delivery experience that
                    brings your essentials right to your doorstep, wherever you
                    are.
                  </p>
                  <div className="tags">
                    <span>Web Design</span>
                    <span>Development</span>
                    <span>Branding</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
