
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const services = [
  {
    name: "Modular Kitchens",
    description: "Beautiful and functional kitchen designs.",
    icon: "🍽️"
  },
  {
    name: "Wardrobes",
    description: "Smart storage with elegant finishes.",
    icon: "🚪"
  },
  {
    name: "False Ceilings",
    description: "Modern ceilings with beautiful lighting.",
    icon: "💡"
  },
  {
    name: "Pooja Mandirs",
    description: "Traditional Indian prayer spaces.",
    icon: "🪔"
  },
  {
    name: "3D Wall Arts",
    description: "Creative decorative wall designs.",
    icon: "🎨"
  },
  {
    name: "Painting",
    description: "Beautiful colours for your home.",
    icon: "🖌️"
  },
  {
    name: "3D Fibre Sculpture",
    description: "Artistic 3D interior decorations.",
    icon: "🏛️"
  }
];

function App() {
  return (
    <div>
      <header className="navbar">
        <h2>AS INTERIORS</h2>
        <span>ART IN SPACE</span>
      </header>

      <section className="hero">
        <p>DESIGN • CREATE • INSPIRE</p>
        <h1>Where Design<br />Meets Living.</h1>
        <p>
          Creating beautiful Indian homes
          with modern elegance and tradition.
        </p>
        <a href="#services" className="btn">
          Explore Our Services
        </a>
      </section>

      <section className="about">
        <p className="tag">WELCOME TO AS INTERIORS</p>
        <h2>We Create Spaces<br />You Love.</h2>
        <p>
          From modular kitchens to traditional
          pooja rooms, we bring your interior
          dreams to life.
        </p>
      </section>

      <section id="services" className="services">
        <p className="tag">WHAT WE DO</p>
        <h2>Our Services</h2>

        <div className="service-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <p className="tag">LET'S TALK</p>
        <h2>Build Your Dream Space.</h2>
        <p>AS Interiors – Visakhapatnam</p>

        <a href="tel:7780158848">
          Call: 77801 58848
        </a>

        <a
          href="https://wa.me/917780158848"
          className="btn"
        >
          Chat on WhatsApp
        </a>
      </section>

      <footer>
        © 2026 AS Interiors | Art in Space
      </footer>
    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(<App />);
