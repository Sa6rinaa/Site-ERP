import React, { useEffect, useState } from "react";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false); // nouveau état

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
        setVisible(true);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Quand on clique sur un lien, on ferme le menu et le sous-menu
  const handleLinkClick = () => {
    setMenuOpen(false);
    setFeaturesOpen(false);
  };

  // Toggle du sous-menu "Fonctionnalités"
  const toggleFeatures = (e) => {
    e.preventDefault(); // empêcher le saut de page
    setFeaturesOpen(!featuresOpen);
  };

  return (
    <header className={`header ${sticky ? "sticky" : ""} ${visible ? "visible" : "hidden"}`}>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li><a href="#about" onClick={handleLinkClick}>À propos</a></li>

          <li className={`dropdown ${featuresOpen ? "open" : ""}`}>
            <a href="#features" onClick={toggleFeatures}>
            Fonctionnalités <span className="arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#gestion-commerciale" onClick={handleLinkClick}>Gestion commerciale</a></li>
              <li><a href="#gestion-stocks" onClick={handleLinkClick}>Gestion des stocks</a></li>
              <li><a href="#projet" onClick={handleLinkClick}>Projet</a></li>
              <li><a href="#signature" onClick={handleLinkClick}>Signature</a></li>
              <li><a href="#plm" onClick={handleLinkClick}>PLM</a></li>
              <li><a href="#tableaux-de-bord" onClick={handleLinkClick}>Tableaux de bord</a></li>
            </ul>
          </li>

          <li className="logo-li">
            <a href="#" className="logo-link">
              <img src="/../images/Ylinar.png" alt="Ylinar logo" className="logo" />
            </a>
          </li>

          <li><a href="#testimonials" onClick={handleLinkClick}>Réalisations</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
