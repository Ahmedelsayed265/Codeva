import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="contact_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-lg-5 mb-3">
            <h1>
              Any Questions Rising? <br /> We are All Here.
            </h1>
          </div>
          <div className="col-lg-8 col-12 p-3">
            <form action="">
              <div className="input_field">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter your name"
                />
              </div>

              <div className="form_group">
                <div className="input_field">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                  />
                </div>

                <div className="input_field">
                  <label htmlFor="phone">Whatsapp Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="9665555555"
                  />
                </div>
              </div>

              <div className="input_field">
                <label htmlFor="service">Service</label>
                <select name="service" id="service">
                  <option value="">choose</option>
                  <option value="service1">service1</option>
                  <option value="service2">service2</option>
                </select>
              </div>

              <div className="input_field">
                <label htmlFor="message">Message *</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Tell us about anything bothering you, ask, or request a service from us..."
                ></textarea>
              </div>

              <button>Submit Message</button>
            </form>
          </div>
          <div className="col-lg-4 col-12 p-3">
            <div className="contact_info">
              <div className="box">
                <h6>
                  <i className="fa-regular fa-envelope"></i>
                  Email Address
                </h6>

                <Link to="mailto:info@codeva.co">info@codeva.co</Link>
                <Link to="mailto:info@codeva.co">complaints@codeva.co</Link>
              </div>
              <div className="box">
                <h6>
                  <i className="fa-regular fa-phone"></i>
                  Phones
                </h6>

                <Link to="tel:+201027964469">
                  Eng: Ahmed Elsayed &nbsp; &nbsp; +20 102 796 4469
                </Link>
                <Link to="tel:+201027964469">
                  Eng: Mahmoud Rashwan &nbsp; &nbsp; +20 106 052 9594
                </Link>
              </div>
              <div className="box">
                <h6>
                  <i className="fa-regular fa-map-pin"></i>
                  Our Location
                </h6>

                <p>Shebin Al-Koum, Menoufia, Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
