import { useNavigate } from "react-router-dom";
import "../../styles/herolayout.css";
import logo from "../../assets/ptclogo.jpg";

import ptcBackground from "../../assets/ptcbackground.jpg";

// ── Types ──────────────────────────────────────────
interface GalleryImage {
  url: string;
  caption: string;
}

// ── Constants ──────────────────────────────────────
const NAV_LINKS: string[] = ["Home", "About", "Programs", "Contact"];

const IMAGES: GalleryImage[] = [
  {
    url: ptcBackground,
    caption: "Campus Life",
  },
  {
    url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900&q=80",
    caption: "Our Campus",
  },
  {
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
    caption: "Modern Classrooms",
  },
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80",
    caption: "Student Activities",
  },
  {
    url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900&q=80",
    caption: "Research Facilities",
  },
  {
    url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900&q=80",
    caption: "Student Community",
  },
];

// ── Component ──────────────────────────────────────
export default function HeroLayout() {
  const navigate = useNavigate();

  const handleLogin = (): void => {
    navigate("/login");
  };

  const handleAdmission = (): void => {
    navigate("/Register");
  };

  return (
    <div className="root">
      {/* ── HEADER ────────────────────────────────── */}
      <header className="header">
        <div className="logo">
          <div className="logoMark">
            <img src={logo} alt="Logo" />
          </div>
          <span className="logoText">PTC PORTAL</span>
        </div>

        <nav className="nav">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="navLink">
              {link}
            </a>
          ))}
        </nav>

        <div className="ctaGroup">
          <button className="btnLogin" onClick={handleLogin}>
            Log In
          </button>
          <button className="btnAdmission" onClick={handleAdmission}>
            Apply Now
          </button>
        </div>
      </header>

      {/* ── MAIN ──────────────────────────────────── */}
      <main className="main">
        {/* LEFT — Greeting */}
        <div className="leftPanel">
          <p className="greeting">Welcome to Pateros Technological College</p>
          <h1 className="headline">
            Where great <br />
            <em className="headlineAccent">minds</em> grow.
          </h1>
          <p className="tagline">
            A place built for curiosity, driven by ambition, and defined by the
            people who walk its halls.
          </p>
        </div>

        {/* RIGHT — Scroll Gallery */}
        <div className="rightPanel">
          <div className="gallery">
            {IMAGES.map((img) => (
              <div key={img.url} className="galleryItem">
                <img src={img.url} alt={img.caption} loading="lazy" />
                <div className="galleryCaption">{img.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
