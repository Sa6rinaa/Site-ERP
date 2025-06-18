import React, { useEffect, useState } from "react";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // sticky si on a dépassé 100px
      if (currentScrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
        setVisible(true); // Toujours visible en haut
      }

      // Detecter direction du scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // on descend -> afficher la barre
        setVisible(true);
      } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
        // on remonte -> cacher la barre
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${sticky ? "sticky" : ""} ${visible ? "visible" : "hidden"}`}>
      <img src="/../images/Ylinar.png" alt="Ylinar logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#Àpropos">À propos</a></li>
          <li><a href="#Fonctionnalités">Fonctionnalités</a></li>
          <li><a href="#Réalisations">Réalisations</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;