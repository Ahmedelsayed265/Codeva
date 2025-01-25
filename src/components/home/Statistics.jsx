import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Statistics() {
  const sectionRef = useRef();
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      intersectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        intersectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="statistics_section" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12 p-2">
            <h6 className="thumb" data-aos="fade-up">
              Numbers speak about us
            </h6>
            <h2 data-aos="fade-up">Key Metrics That Define Our Growth</h2>
            <p data-aos="fade-up">
              From Thousands of Users to Successful Projects, See the Impact
              We’ve Made
            </p>
            <div className="boxes">
              <div className="box" data-aos="fade-up">
                <h4>
                  + {startCount && <CountUp duration={3} start={0} end={4} />}
                </h4>
                <h6>Years of Experience</h6>
              </div>
              <div className="box" data-aos="fade-up">
                <h4>
                  +{startCount && <CountUp duration={3} start={0} end={100} />}
                </h4>
                <h6>Website</h6>
              </div>
              <div className="box" data-aos="fade-up">
                <h4>
                  +{startCount && <CountUp duration={3} start={0} end={24} />}
                </h4>
                <h6>Mobile App</h6>
              </div>
              <div className="box" data-aos="fade-up">
                <h4>
                  {startCount && <CountUp duration={3} start={0} end={95} />}%
                </h4>
                <h6>Customer Satisfaied</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
