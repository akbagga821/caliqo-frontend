import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/caliqo-logo.png" alt="" width="24" height="24" />
          <span>caliqo</span>
        </div>
        <nav className="footer-nav">
          <a href="#track">Track</a>
          <a href="#actions">Actions</a>
          <a href="#metrics">Metrics</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="footer-legal">© {new Date().getFullYear()} Caliqo</p>
      </div>
    </footer>
  )
}
