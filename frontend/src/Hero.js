import React, { useState, useEffect } from "react";

function Hero() {
  const mots = ["Gestion", "Production", "Logistique"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setIndex(prev => (prev + 1) % mots.length);
        setFade(true);  // fade in
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
      <h1>
  <span className="highlight-lynar">Ylinar</span> une ERP pour gérer pour votre :{" "}
  <span className={`highlight ${fade ? "fade-in" : "fade-out"}`}>
    {mots[index]}
  </span>
</h1>
        <p>Une solution ERP complète, simple et performante.</p>
       
      </div>
      <div className="hero-image">
        {/* <img src="/../images/EP.jpg" alt="ERP illustration" /> */}
      </div>
    </section>
  );
}



export default Hero;
