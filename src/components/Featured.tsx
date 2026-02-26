import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const items = [
  {
    title: 'Observability',
    description: 'Track parameter drift, T1/T2, traffic, and errors across backends. Datadog-style dashboards for quantum.',
    href: '#track',
  },
  {
    title: 'Optimization & automation',
    description: 'RL bandit routing, ZX-calculus optimization, error mitigation, and auto-submit with live metrics.',
    href: '#platform',
  },
]

export function Featured() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="sr-only">Featured</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <a key={item.title} href={item.href} className="group block">
              <Card className="h-full border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader className="pb-2">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground group-hover:text-primary">
                    {item.title}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
