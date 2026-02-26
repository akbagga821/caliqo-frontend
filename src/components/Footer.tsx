export function Footer() {
  return (
    <footer className="border-t border-secondary/20 bg-secondary py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6 px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold text-secondary-foreground">
          <img src="/caliqo_logo.png" alt="" className="h-6 w-6 rounded" />
          <span>caliqo</span>
        </a>
        <nav className="flex gap-6">
          <a href="#actions" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground">
            Actions
          </a>
          <a href="#metrics" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground">
            Metrics
          </a>
          <a href="#faq" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground">
            FAQ
          </a>
          <a href="#contact" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground">
            Contact
          </a>
        </nav>
        <p className="text-sm text-secondary-foreground/70">
          © {new Date().getFullYear()} Caliqo
        </p>
      </div>
    </footer>
  )
}
