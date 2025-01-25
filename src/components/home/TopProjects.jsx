import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function TopProjects() {
  return (
    <section className="top_projects_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h6 data-aos="fade-up">
              <img src="/flash.svg" alt="idea" /> Our Best Projects
            </h6>
            <h2 data-aos="fade-up">Our Selected Projects Showcase of Excellence</h2>
          </div>

          <Swiper
            speed={1000}
            loop={true}
            slidesPerView={3}
            spaceBetween={16}
            modules={[Autoplay]}
            className="about_swiper"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            data-aos="fade-up"
            breakpoints={{
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              350: {
                slidesPerView: 1,
              },
            }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={index}>
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
                      brings your essentials right to your doorstep, wherever
                      you are.
                    </p>
                    <div className="tags">
                      <span>Web Design</span>
                      <span>Development</span>
                      <span>Branding</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
