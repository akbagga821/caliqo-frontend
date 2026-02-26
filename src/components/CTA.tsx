import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section id="contact" className="border-t border-border bg-accent/50 py-10 md:py-14">
      <div className="container mx-auto max-w-xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Get started with Caliqo
        </h2>
        <p className="mt-4 font-serif text-lg text-muted-foreground">
          Peek inside quantum hardware. Deploy quantum software faster, cheaper, and smarter.
        </p>
        <Button asChild size="lg" className="mt-6">
          <a href="mailto:hello@caliqo.com?subject=Request%20a%20demo">Request a demo</a>
        </Button>
      </div>
    </section>
  )
}
