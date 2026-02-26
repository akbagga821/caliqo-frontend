import { Card, CardContent, CardHeader } from '@/components/ui/card'

const items = [
  {
    title: 'Intelligent hardware selection',
    description: 'Evaluate available hardware and recommend the best qubit architecture for your workload.',
  },
  {
    title: 'Smart optimization',
    description: 'Transpile and tune circuits for the selected backend to improve performance.',
  },
  {
    title: 'Cost estimation',
    description: 'Estimate expected cost and queue time before deployment.',
  },
  {
    title: 'Unified deployment',
    description: 'Submit and manage jobs across QPU providers from a single interface.',
  },
  {
    title: 'Performance tracking',
    description: 'Track up-to-date calibration data and runtime metrics.',
  },
  {
    title: 'Monitor performance',
    description: 'Analyze results, compare runs over time, and recommend improvements.',
  },
]

export function Actions() {
  return (
    <section id="actions" className="border-t border-border py-10 md:py-14">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Platform Capabilities
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-muted-foreground">
          Caliqo standardizes and automates quantum deployment across providers. We make quantum workloads production-ready by:
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.title}
              className="border border-secondary/40 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-md"
            >
              <CardHeader className="pb-2">
                <h3 className="text-base font-semibold">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-sm leading-relaxed opacity-90">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
