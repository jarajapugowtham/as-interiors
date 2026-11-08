
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Menu, X, Phone, MapPin,
  Instagram, MessageCircle, Plus, Minus, Sparkles
} from "lucide-react";

const PHONE = "917780158848";
const PHONE_DISPLAY = "77801 58848";
const SECOND_PHONE = "99636 24281";

const images = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90",
  living: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  kitchen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  bedroom: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  dining: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  wood: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  detail: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=85"
};

const services = [
  { n: "01", title: "Modular Kitchens", desc: "Thoughtful layouts, beautiful finishes and everyday functionality.", image: images.kitchen },
  { n: "02", title: "Wardrobes", desc: "Personalised storage designed around your lifestyle.", image: images.bedroom },
  { n: "03", title: "False Ceilings", desc: "Layered ceilings and lighting that transform a room.", image: images.living },
  { n: "04", title: "Pooja Spaces", desc: "Sacred corners inspired by Indian craft and tradition.", image: images.wood },
  { n: "05", title: "3D Wall Arts", desc: "Sculptural surfaces that bring character to your walls.", image: images.detail },
  { n: "06", title: "Painting & Finishes", desc: "A considered palette, texture and finish for every space.", image: images.dining },
  { n: "07", title: "3D Fibre Sculpture", desc: "Distinctive decorative forms with depth and detail.", image: images.wood },
  { n: "08", title: "High Relief Wall Art", desc: "Statement walls with a crafted, dimensional presence.", image: images.detail }
];

const gallery = [
  { title: "The contemporary living room", category: "Living", image: images.living },
  { title: "A warm modern kitchen", category: "Kitchen", image: images.kitchen },
  { title: "Quiet, restful bedroom", category: "Bedroom", image: images.bedroom },
  { title: "The art of dining", category: "Living", image: images.dining },
  { title: "Natural wood details", category: "Details", image: images.wood },
  { title: "Thoughtful textures", category: "Details", image: images.detail }
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
};

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <motion.div
      className={`section-intro ${light ? "light" : ""}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [faqOpen, setFaqOpen] = useState(0);

  const visibleGallery = filter === "All"
    ? gallery
    : gallery.filter((item) => item.category === filter);

  const whatsapp = (message = "Hello AS Interiors, I would like to discuss an interior design enquiry.") =>
    `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">AS</span>
          <span className="brand-copy">
            <strong>AS INTERIORS</strong>
            <small>ART IN SPACE</small>
          </span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href={whatsapp("Hello AS Interiors, I would like to book a design consultation.")} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" style={{ backgroundImage: `url(${images.hero})` }} />
        <div className="hero-shade" />
        <div className="hero-content">
          <motion.span
            className="hero-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            INTERIOR DESIGN · VISAKHAPATNAM
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Spaces with <em>soul.</em><br />
            Stories that <em>stay.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            A thoughtful meeting of Indian heritage and contemporary living.
            Designed around the way you live.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a className="button button-gold" href="#gallery">Explore our style <ArrowUpRight size={17} /></a>
            <a className="button button-outline" href={whatsapp()} target="_blank" rel="noreferrer">Start a conversation</a>
          </motion.div>
        </div>
        <div className="hero-bottom">
          <span>ART IN SPACE — SINCE THE FIRST IDEA</span>
          <a href="#about">SCROLL TO DISCOVER <ArrowDown size={14} /></a>
        </div>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="intro-strip">
        <span>DESIGNED WITH INTENTION</span>
        <p>Modern comfort. Indian character. <em>A home that feels like yours.</em></p>
        <Sparkles size={19} />
      </section>

      <section className="about section-pad" id="about">
        <div className="about-image-wrap">
          <img src={images.wood} alt="Warm contemporary interior with natural wood finishes" />
          <div className="image-stamp"><span>AS</span><small>ART IN<br />SPACE</small></div>
          <span className="image-caption">DETAILS MAKE THE DIFFERENCE</span>
        </div>
        <div className="about-copy">
          <SectionIntro
            eyebrow="A LITTLE ABOUT US"
            title={<>More than interiors.<br /><em>A feeling of home.</em></>}
            text="We believe a beautiful home should feel personal. AS Interiors brings together the warmth of Indian design traditions and the clarity of modern spaces."
          />
          <p className="body-copy">
            From a welcoming living room to a carefully planned kitchen or a peaceful pooja corner, every space deserves attention to detail, comfort and character.
          </p>
          <a className="text-link" href="#services">Discover what we do <ArrowUpRight size={17} /></a>
          <div className="about-note">
            <span>01 / OUR APPROACH</span>
            <p>Listen closely. Design thoughtfully. Create spaces that belong to you.</p>
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <SectionIntro
          eyebrow="WHAT WE CREATE"
          title={<>Considered design.<br /><em>Beautifully lived in.</em></>}
          text="Interior solutions for the everyday rituals and special moments that make a house your home."
        />
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.n}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (index % 4) * 0.08 }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span className="service-number">{service.n}</span>
                <a href={whatsapp(`Hello AS Interiors, I am interested in ${service.title}. Please share more details.`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${service.title}`}><ArrowUpRight /></a>
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-bg" style={{ backgroundImage: `url(${images.dining})` }} />
        <div className="manifesto-overlay" />
        <motion.div
          className="manifesto-content"
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true }}
        >
          <span className="eyebrow"><i /> OUR DESIGN PHILOSOPHY</span>
          <h2>Rooted in tradition.<br /><em>Made for today.</em></h2>
          <p>We love the soul of Indian homes — warm materials, meaningful details and spaces that bring people together. We pair that feeling with modern simplicity.</p>
          <a className="button button-gold" href="#contact">Let's design together <ArrowUpRight size={17} /></a>
        </motion.div>
      </section>

      <section className="gallery-section section-pad" id="gallery">
        <SectionIntro
          eyebrow="THE DESIGN JOURNAL"
          title={<>Ideas for the spaces<br /><em>you call home.</em></>}
          text="Explore a selection of interior design inspirations that reflect the AS Interiors aesthetic."
        />
        <div className="gallery-toolbar">
          <span>DESIGN INSPIRATION / 2026</span>
          <div className="filters">
            {["All", "Living", "Kitchen", "Bedroom", "Details"].map((item) => (
              <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>
        </div>
        <div className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {visibleGallery.map((item, index) => (
              <motion.button
                className={`gallery-card gallery-card-${index % 3}`}
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelected(item)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="gallery-overlay">
                  <small>{item.category} / INSPIRATION</small>
                  <strong>{item.title}</strong>
                  <span className="gallery-plus"><Plus size={19} /></span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
        <p className="gallery-disclaimer">These images are design references for inspiration, not a representation of completed AS Interiors projects.</p>
      </section>

      <section className="process-section section-pad">
        <SectionIntro
          eyebrow="HOW WE WORK"
          title={<>From first thought<br /><em>to thoughtful spaces.</em></>}
          text="A clear, collaborative approach keeps your design journey personal and practical."
        />
        <div className="process-grid">
          {[
            ["01", "Listen", "We understand your space, needs, preferences and budget."],
            ["02", "Imagine", "We explore layouts, materials, colours and design possibilities."],
            ["03", "Create", "We work towards bringing the agreed design to life."],
            ["04", "Refine", "We focus on the finishing details that make a space feel complete."]
          ].map(([number, title, desc]) => (
            <div className="process-item" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="faq-heading">
          <span className="eyebrow"><i /> GOOD TO KNOW</span>
          <h2>A few things<br /><em>you may wonder.</em></h2>
        </div>
        <div className="faq-list">
          {[
            ["What interior services do you offer?", "We offer modular kitchens, wardrobes, false ceilings, pooja spaces, painting, 3D wall arts, fibre sculptures and high-relief wall art."],
            ["Can I discuss a small home or apartment?", "Yes. Share your room details and requirements with us. We can discuss a suitable approach for your space."],
            ["How do I get a quotation?", "Contact us on WhatsApp or phone with your location, space type and requirements. The team can guide you on the next steps."],
            ["Where are you located?", "AS Interiors is located at Sector-3, MVP Colony, Visakhapatnam, Andhra Pradesh – 530017."]
          ].map(([question, answer], index) => (
            <div className={`faq-item ${faqOpen === index ? "expanded" : ""}`} key={question}>
              <button onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}>
                <span>{question}</span>{faqOpen === index ? <Minus /> : <Plus />}
              </button>
              <AnimatePresence>
                {faqOpen === index && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    {answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-image" style={{ backgroundImage: `url(${images.hero})` }} />
        <div className="contact-overlay" />
        <div className="contact-content">
          <span className="eyebrow"><i /> YOUR SPACE, YOUR STORY</span>
          <h2>Let's make room<br />for <em>something beautiful.</em></h2>
          <p>Tell us what you have in mind. We'd love to hear about your space.</p>
          <a className="button button-gold" href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Enquire on WhatsApp</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark">AS</span>
              <span className="brand-copy"><strong>AS INTERIORS</strong><small>ART IN SPACE</small></span>
            </a>
            <p>Spaces with soul. Stories that stay.</p>
          </div>
          <div className="footer-column">
            <span>EXPLORE</span>
            <a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <span>GET IN TOUCH</span>
            <a href={`tel:+91${PHONE.slice(2)}`}><Phone size={14} /> {PHONE_DISPLAY}</a>
            <a href={`tel:+91${SECOND_PHONE.replace(/\s/g, "")}`}>+91 {SECOND_PHONE}</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Sector+3+MVP+Colony+Visakhapatnam" target="_blank" rel="noreferrer"><MapPin size={14} /> Visakhapatnam, AP</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AS Interiors. All rights reserved.</span>
          <span>DESIGNED WITH INTENTION · ART IN SPACE</span>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Chat with AS Interiors on WhatsApp">
        <MessageCircle size={23} />
      </a>

      <AnimatePresence>
        {selected && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image"><X /></button>
            <motion.div className="lightbox-content" initial={{ scale: 0.94 }} animate={{ scale: 1 }} onClick={(event) => event.stopPropagation()}>
              <img src={selected.image} alt={selected.title} />
              <div><small>{selected.category} / INSPIRATION</small><h3>{selected.title}</h3></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
