const groups = [
  {
    title: 'Compilation',
    items: ['Transpile time', 'Circuit optimization metrics'],
  },
  {
    title: 'Execution',
    items: ['Queue time and queue traffic', 'Shot count efficiency'],
  },
  {
    title: 'CPU / GPU',
    items: ['Optimizer convergence time', 'Preprocessing time', 'GPU offloading'],
  },
  {
    title: 'QPU',
    items: ['T1 / T2 lifetime', 'Gate fidelity', 'Readout error', 'Calibration drift'],
  },
]

export function Metrics() {
  return (
    <section id="metrics" className="border-t border-border py-10 md:py-14">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Operational Visibility
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-muted-foreground">
          Gain real-time insight into hardware performance. Monitor device calibration, queue conditions, and workload behavior to maintain reliable, production-grade execution.
        </p>

        {/* Timeline: static info above each number, then line + circles, then labels */}
        <div className="mt-10 w-full">
          <div className="grid grid-cols-4 gap-x-4">
            {/* Row 1: static content centered above each number */}
            {groups.map((g) => (
              <div key={g.title} className="mb-4 min-h-[100px] text-center">
                <p className="text-sm font-semibold text-foreground">
                  {g.title}
                </p>
                <ul className="mt-1.5 font-serif text-sm leading-relaxed text-muted-foreground">
                  {g.items.map((item) => (
                    <li key={item} className="py-0.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Line + circles: fixed-height row so line runs through circle centers */}
          <div className="relative grid h-10 grid-cols-4 gap-x-4">
            <div
              className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/30 via-primary to-primary/30"
              aria-hidden
            />
            {groups.map((g, i) => (
              <div
                key={g.title}
                className="relative z-10 flex items-center justify-center"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/60 bg-background font-semibold text-foreground">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Labels centered under circles */}
          <div className="grid grid-cols-4 gap-x-4 pt-2">
            {groups.map((g) => (
              <span
                key={g.title}
                className="text-center text-sm font-medium text-muted-foreground"
              >
                {g.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
