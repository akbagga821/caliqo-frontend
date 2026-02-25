import './CTA.css'

export function CTA() {
  return (
    <section id="contact" className="cta section">
      <div className="container cta-inner">
        <h2 className="cta-title">Get started with Caliqo</h2>
        <p className="cta-text">
          Peek inside quantum hardware. Deploy quantum software faster, cheaper, and smarter.
        </p>
        <a href="mailto:hello@caliqo.com" className="cta-button">Contact us</a>
      </div>
    </section>
  )
}
