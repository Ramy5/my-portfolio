import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="hidden sm:block" /> Let's build
        something together
      </p>
      <Link className="btn" to="/contact">
        Contact
      </Link>
    </section>
  );
};

export default Cta;
