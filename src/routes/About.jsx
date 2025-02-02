import Statistics from "../components/home/Statistics";

export default function About() {
  return (
    <>
      <section className="about_page">
        <div className="container">
          <div className="row">
            <div className="col-12 p-2">
              <h1>Empowering Ideas, Building Solutions</h1>
              <p>
                At <strong>Codeva</strong>, we are a passionate team of
                developers, designers, and tech enthusiasts dedicated to
                crafting innovative digital solutions. We combine creativity,
                technical expertise, and user-centric design to bring ideas to
                life.
              </p>
              <a href="/contact"> Get in touch </a>
            </div>
          </div>
        </div>
      </section>
      <Statistics />
    </>
  );
}
