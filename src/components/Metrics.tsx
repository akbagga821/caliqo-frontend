import { useState, useRef } from 'react'

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const lastHoveredRef = useRef<number>(0)
  if (hoveredIndex !== null) lastHoveredRef.current = hoveredIndex
  const displayIndex = lastHoveredRef.current

  return (
    <section id="metrics" className="border-t border-border py-10 md:py-14">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Operational Visibility
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-muted-foreground">
          Gain real-time insight into hardware performance. Monitor device calibration, queue conditions, and workload behavior to maintian reliaable, production-grade execution. 
        </p>

        {/* Static "What we track" under subheader */}
        <p className="mt-6 text-sm font-medium text-muted-foreground">
          What we track
        </p>

        {/* Fixed-height area for list so the line never moves */}
        <div className="min-h-[160px] w-full max-w-2xl">
          <div
            className={`transition-opacity duration-300 ${
              hoveredIndex !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <ul className="font-serif text-lg leading-relaxed text-foreground">
              {groups[displayIndex].items.map((item) => (
                <li key={item} className="py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pipeline: line in fixed band, circles centered on line, grid aligns labels */}
        <div className="relative mt-4 w-full grid grid-cols-4 gap-y-3">
          <div
            className="absolute left-0 right-0 top-5 h-0.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/30 via-primary to-primary/30 col-span-4"
            aria-hidden
          />
          {groups.map((g, i) => (
            <div key={g.title} className="flex flex-col items-center justify-center">
              <button
                type="button"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-semibold transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  hoveredIndex === i
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-primary/60 bg-background text-foreground group-hover:border-primary'
                }`}
              >
                {i + 1}
              </button>
              <span className="mt-3 text-center text-sm font-medium text-foreground">
                {g.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
