import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not_found_section">
      <div className="container">
        <h1>
          404 - Oops Page
          <br />
          Not Found in Data.
        </h1>
        <p>
          Oops! The web page you’re looking for doesn’t exist. Please click the
          below button to get back to the home.
        </p>
        <Link to="/"> Back to Home </Link>
      </div>
    </section>
  );
}
