import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Making quantum software production-ready.
        </h1>
        <p className="mt-6 font-serif text-xl text-muted-foreground md:text-2xl">
          The first DevOps layer for quantum computing.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href="#contact">Request a demo</a>
          </Button>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <a href="#problem">Learn more</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
