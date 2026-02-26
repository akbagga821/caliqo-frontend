import { Card, CardContent, CardHeader } from '@/components/ui/card'

const items = [
  'Feed in a quantum circuit and pick backend or hardware',
  'RL bandit loop to optimize and choose best backend',
  'Circuit optimization with ZX-calculus RL agent',
  'Automated error mitigation',
  'Predictive costing before you run',
  'Auto-submit jobs and watch metrics as the program runs',
]

export function Actions() {
  return (
    <section id="actions" className="py-10 md:py-14">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Actions
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-muted-foreground">
          From circuit in to results out: we optimize, route, and run.
        </p>
        <Card className="mt-8 border-border bg-muted/50 shadow-sm">
          <CardHeader>
            <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">
              Caliqo can
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-2">
              {items.map((label) => (
                <li key={label} className="flex items-start gap-2 font-serif text-muted-foreground">
                  <span className="text-primary">→</span>
                  {label}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
