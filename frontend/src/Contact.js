   

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contactez-nous</h2>
      <form>
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Votre message..." required />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  )
}

export default Contact
