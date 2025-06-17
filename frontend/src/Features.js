function Features() {
  const items = [
    { icon: "../images/CRM.jpg" , text: "Gestion commerciale" },
    { icon: "../images/inventaire.jpg" , text: "Gestion des stocks" },
    { icon: "/images/projet.jpg", text: "Projet" },
    { icon: "/images/Signature.jpg", text: "Signature" },
    { icon: "../images/CRM.jpg" , text: "Gestion commerciale" },
    { icon: "/images/tableau.jpg", text: "Tableaux de bord" },
  ];

  return (
    <section id="features" className="features-grid">
      <h2>Fonctionnalités principales</h2>
      <div className="features-cards">
        {items.map((item, index) => (
          <div key={index} className="feature-card">
            <img src={item.icon} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
