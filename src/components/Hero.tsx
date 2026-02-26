import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Peek inside quantum hardware and deploy quantum software faster, cheaper, and smarter.
        </h1>
        <p className="mt-6 font-serif text-xl text-muted-foreground md:text-2xl">
          Agentic DevOps for Quantum
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href="#contact">Request a demo</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-foreground text-foreground hover:bg-accent">
            <a href="#why-quantum">Learn more</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
