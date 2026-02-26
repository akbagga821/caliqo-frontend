import { Card, CardContent, CardHeader } from '@/components/ui/card'

const items = [
  'Parameter drift from daily calibration',
  'Network traffic and request counts per backend',
  'Error rates and failure modes',
  'Qubit coherence (T1, T2 lifetimes)',
  'Power spectral density',
  'Datadog-style dashboards and alerts for quantum',
]

export function Track() {
  return (
    <section id="track" className="py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Track
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          One place to see what’s happening across your quantum backends and hardware.
        </p>
        <Card className="mt-10 border-border bg-card shadow-sm">
          <CardHeader>
            <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">
              What you can track
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-2">
              {items.map((label) => (
                <li key={label} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
