import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const skills = [
  "Mobile App Development",
  "Web Development & Design",
  "UI/UX Design",
  "Search Engine Optimization (SEO)",
  "Social Media Marketing (SMM)",
  "Digital Marketing Strategies",
  "Content Writing & Copywriting",
  "Graphic Design & Branding",
  "Video Production & Editing",
  "Learning Management Systems (LMS)",
  "Customer Relationship Management (CRM)",
  "Enterprise Resource Planning (ERP)",
  "E-Commerce Solutions",
  "Custom Software Development",
  "Cloud Services & Hosting",
  "Performance Optimization",
  "API Integration",
  "Cross-Platform App Development",
  "Brand Strategy & Identity",
  "Data Analytics & Insights",
];

export default function Footer() {
  return (
    <footer>
      <Swiper
        speed={skills.length * 500}
        slidesPerView="auto"
        loop={true}
        spaceBetween={32}
        className="skills_swiper"
        modules={[Autoplay]}
        data-aos="fade-up"
        autoplay={{ delay: 0, disableOnInteraction: false }}
      >
        {skills.map((_, index) => (
          <SwiperSlide key={index}>
            <div className="skill">{skills[index]}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="content">
              <div className="logo">
                <img src="/logo.svg" alt="logo" />
              </div>
              <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/portfolio">Portfolio</Link>
              </div>
            </div>
          </div>
          <div className="col-12 p-2">
            <div className="copyRights">
              <p>
                © {new Date().getFullYear()} Copyrights by Codeva. All Rights
                Reserved.
              </p>
              <div className="social">
                <Link to="https://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="https://www.twitter.com/" target="_blank">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="https://www.snapchat.com/" target="_blank">
                  <i className="fab fa-snapchat"></i>
                </Link>
                <Link to="https://www.linkedin.com/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
