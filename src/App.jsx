
import React, { useState } from "react";
import {
  motion,
  AnimatePresence
} from "framer-motion";

const services = [
  {
    title: "Modular Kitchens",
    description: "Beautiful kitchens designed for everyday Indian living.",
    image: "photo-1600585154340-be6161a56a0c"
  },
  {
    title: "Wardrobes",
    description: "Smart storage solutions with elegant finishes.",
    image: "photo-1616486338812-3dadae4b4ace"
  },
  {
    title: "False Ceilings",
    description: "Creative ceiling designs with modern lighting.",
    image: "photo-1600210492486-724fe5c67fb0"
  },
  {
    title: "Pooja Mandirs",
    description: "Traditional prayer spaces with beautiful details.",
    image: "photo-1600607687939-ce8a6c25118c"
  },
  {
    title: "3D Wall Arts",
    description: "Decorative walls that bring spaces to life.",
    image: "photo-1600566753086-00f18fb6b3ea"
  },
  {
    title: "Painting",
    description: "Colours and finishes that transform your home.",
    image: "photo-1600607687920-4e2a09cf159d"
  },
  {
    title: "3D Fibre Sculpture",
    description: "Artistic decorative elements for interiors.",
    image: "photo-1600566753190-17f0baa2a6c3"
  },
  {
    title: "High Relief Wall Art",
    description: "Distinctive dimensional wall decoration.",
    image: "photo-1600607687644-c7171b42498f"
  }
];

const gallery = [
  {
    title: "Living Room Inspiration",
    category: "Living Room",
    image: "photo-1600210492486-724fe5c67fb0"
  },
  {
    title: "Modern Kitchen Inspiration",
    category: "Kitchen",
    image: "photo-1600585154340-be6161a56a0c"
  },
  {
    title: "Bedroom Inspiration",
    category: "Bedroom",
    image: "photo-1616486338812-3dadae4b4ace"
  },
  {
    title: "Elegant Interior Details",
    category: "Living Room",
    image: "photo-1600566753086-00f18fb6b3ea"
  }
];

const photo = (id, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const phone = "917780158848";

  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hello AS Interiors! I would like to enquire about your interior design services."
  )}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span>AS</span>
          <div>
            <strong>INTERIORS</strong>
            <small>ART IN SPACE</small>
          </div>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {["Home", "About", "Services", "Gallery", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />

          <div className="hero-content">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AS INTERIORS · VISAKHAPATNAM
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Where Design
              <br />
              Meets <span>Living.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Thoughtful interiors inspired by Indian
              traditions and modern living.
            </motion.p>

            <motion.a
              href="#services"
              className="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Explore Our Services ↗
            </motion.a>
          </div>

          <div className="hero-bottom">
            <span>DESIGN · CREATE · INSPIRE</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        <section className="about section" id="about">
          <Reveal>
            <p className="eyebrow dark">WELCOME TO AS INTERIORS</p>
            <h2>
              Every space has a story.
              <br />
              <span>Let's create yours.</span>
            </h2>
            <p className="section-description">
              AS Interiors brings together modern design,
              traditional Indian inspiration and practical
              living. We help transform everyday spaces
              into beautiful places to call home.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="about-image">
              <img
                src={photo("photo-1600607687939-ce8a6c25118c", 1400)}
                alt="Interior design inspiration"
                loading="lazy"
              />
              <span>ART IN SPACE</span>
            </div>
          </Reveal>
        </section>

        <section className="services section" id="services">
          <Reveal>
            <p className="eyebrow dark">WHAT WE OFFER</p>
            <h2>Designed around your life.</h2>
            <p className="section-description">
              Explore our interior design services.
            </p>
          </Reveal>

          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <motion.article
                  className="service-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="service-image">
                    <img
                      src={photo(service.image, 700)}
                      alt={service.title + " design inspiration"}
                      loading="lazy"
                    />
                  </div>
                  <div className="service-info">
                    <span>0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="gallery section" id="gallery">
          <Reveal>
            <p className="eyebrow">DESIGN INSPIRATION</p>
            <h2>Ideas for beautiful living.</h2>
            <p className="gallery-note">
              These are reference images for design inspiration,
              not photographs of completed AS Interiors projects.
            </p>
          </Reveal>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <button
                  className="gallery-card"
                  onClick={() => setActiveImage(item)}
                >
                  <img
                    src={photo(item.image, 1000)}
                    alt={item.title}
                    loading="lazy"
                  />
                  <span>{item.category}</span>
                  <strong>{item.title} ↗</strong>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <Reveal>
            <p className="eyebrow">LET'S CREATE TOGETHER</p>
            <h2>
              Your dream space
              <br />
              starts here.
            </h2>
            <p>
              Have an idea for your home? Talk to AS Interiors
              about your requirements.
            </p>
            <a className="button light-button" href={whatsapp}>
              Enquire on WhatsApp ↗
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="contact-details">
              <p>CONTACT</p>
              <h3>Anil Kumar J</h3>
              <a href="tel:7780158848">77801 58848</a>
              <a href="tel:9963624281">99636 24281</a>
              <p className="address">
                Sector-3, MVP Colony,
                <br />
                Visakhapatnam – 530017
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sector-3+MVP+Colony+Visakhapatnam"
                target="_blank"
                rel="noreferrer"
              >
                View location on Google Maps ↗
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="footer-brand">
          AS INTERIORS
        </a>
        <p>ART IN SPACE · VISAKHAPATNAM</p>
        <small>© {new Date().getFullYear()} AS Interiors. All rights reserved.</small>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with AS Interiors on WhatsApp"
      >
        WhatsApp
      </a>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <button
              className="modal-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close image"
            >
              ✕
            </button>
            <motion.img
              src={photo(activeImage.image, 1400)}
              alt={activeImage.title}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(event) => event.stopPropagation()}
            />
            <p>{activeImage.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
