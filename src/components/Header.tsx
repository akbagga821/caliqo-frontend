import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
          <img src="/caliqo_logo.png" alt="Caliqo" className="h-9 w-9 rounded-md" />
          <span>caliqo</span>
        </a>
        <nav
          className={cn(
            'absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-border bg-white p-4 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:p-0',
            open ? 'flex' : 'hidden md:flex'
          )}
        >
          <a href="#actions" className="text-sm text-muted-foreground hover:text-foreground">
            Actions
          </a>
          <a href="#metrics" className="text-sm text-muted-foreground hover:text-foreground">
            Metrics
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
            FAQ
          </a>
          <Button asChild size="sm" className="md:ml-2">
            <a href="#contact">Request a demo</a>
          </Button>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </header>
  )
}
