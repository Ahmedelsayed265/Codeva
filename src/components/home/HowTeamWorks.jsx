export default function HowTeamWorks() {
  return (
    <section className="how_team_works">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h6>
                <img src="/flash.svg" alt="idea" /> How Our team Work?
              </h6>
              <h2>We Simplify The Journey From Design To Launch.</h2>
              <p>
                We are a team of passionate developers, designers, and
                innovators dedicated to creating software solutions that make a
                difference in the software development world. Our mission is to
                empower businesses and individuals by delivering innovative and
                cutting-edge software solutions that meet their unique needs and
                exceed their expectations
              </p>

              <div className="steps">
                <div className="step">
                  <div className="head">
                    <div className="icon">
                      <img src="/rocket.svg" alt="rocket" />
                    </div>
                    <span>Step 1</span>
                  </div>

                  <h4>Requirement Analysis & Planning</h4>
                  <p>
                    We start by thoroughly understanding the client’s needs and
                    defining project requirements. This ensures that the vision
                    is clear, goals are aligned, and we can move forward
                    confidently.
                  </p>
                </div>

                <div className="step">
                  <div className="head">
                    <div className="icon">
                      <img src="/design.svg" alt="design" />
                    </div>
                    <span>Step 2</span>
                  </div>

                  <h4>Design & Prototyping</h4>
                  <p>
                    In this stage, we create a detailed plan while designing
                    intuitive and user-friendly interfaces. This is where
                    creativity meets structure to lay the foundation for an
                    excellent user experience.
                  </p>
                </div>

                <div className="step">
                  <div className="head">
                    <div className="icon">
                      <img src="/develop.svg" alt="develop" />
                    </div>
                    <span>Step 3</span>
                  </div>

                  <h4>Development & Testing</h4>
                  <p>
                    We begin building the project with great attention to
                    detail. Rigorous testing is conducted to ensure every
                    feature works seamlessly and meets the highest quality
                    standards.
                  </p>
                </div>

                <div className="step">
                  <div className="head">
                    <div className="icon">
                      <img src="/support.svg" alt="support" />
                    </div>
                    <span>Step 4</span>
                  </div>

                  <h4>Handoff & Support</h4>
                  <p>
                    Finally, we deliver the polished product to the client,
                    ensuring it meets their expectations. We also provide
                    ongoing support to address any updates, questions, or
                    improvements needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="img">
              <img src="/team.png" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
