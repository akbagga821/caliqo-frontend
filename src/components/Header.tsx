import { useState } from 'react'
import './Header.css'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="header-logo">
          <img src="/caliqo-logo.png" alt="Caliqo" width="36" height="36" />
          <span>caliqo</span>
        </a>
        <nav className={`header-nav ${open ? 'open' : ''}`}>
          <a href="#track">Track</a>
          <a href="#actions">Actions</a>
          <a href="#metrics">Metrics</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="header-cta">Get started</a>
        </nav>
        <button type="button" className="header-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
