import { Card, CardContent, CardHeader } from '@/components/ui/card'

const features = [
  {
    title: 'Full-stack observability',
    body: 'From circuit submission to result: CPU/GPU, compilation, QPU, and execution metrics in one dashboard.',
  },
  {
    title: 'Smart backend routing',
    body: 'RL bandit and real-time noise signals. When calibration drifts or noise changes, we can route to a better backend automatically.',
  },
  {
    title: 'Optimization built in',
    body: 'ZX-calculus and RL-driven circuit optimization, error mitigation, and predictive costing so you run fewer, cheaper jobs.',
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Built for the quantum stack
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              className="border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <h3 className="text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
