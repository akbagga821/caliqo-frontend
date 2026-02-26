import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const groups = [
  {
    title: 'CPU / GPU',
    items: ['Optimizer convergence time', 'Preprocessing time', 'GPU offloading'],
  },
  {
    title: 'Compilation',
    items: ['Transpile time', 'Circuit optimization metrics'],
  },
  {
    title: 'QPU',
    items: ['T1 / T2 lifetime', 'Gate fidelity', 'Readout error', 'Calibration drift'],
    highlight: true,
  },
  {
    title: 'Execution',
    items: ['Queue time and queue traffic', 'Shot count efficiency'],
  },
]

export function Metrics() {
  return (
    <section id="metrics" className="py-10 md:py-14">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Metrics as your program runs
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-muted-foreground">
          Datadog for quantum: see CPU, compilation, QPU, and execution in one place. If noise shifts in real time, we can pivot to a different hardware backend.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <Card
              key={g.title}
              className={cn(
                'transition-shadow hover:shadow-md',
                g.highlight && 'border-primary/40 bg-primary text-primary-foreground shadow-md'
              )}
            >
              <CardHeader className="pb-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider opacity-90">
                  {g.title}
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5 text-sm opacity-90">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
