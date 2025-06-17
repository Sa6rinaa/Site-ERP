function Testimonials() {
  const clients = [
    { photo: "../images/Clavier.jpg" },
    { photo: "../images/Jsl.jpg",  className: "small-img" },
    { photo: "../images/ConfortDesign.jpg" },
    { photo: "../images/Cybax.jpg" }
   
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>Ils nous font confiance</h2>
      <div className="testimonials-photos">
        {clients.map((client, index) => (
          <div key={index} className="testimonial-item">
            <img src={client.photo} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
