import './Metrics.css'

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
    <section id="metrics" className="metrics section">
      <div className="container">
        <h2 className="section-title">Metrics as your program runs</h2>
        <p className="section-subtitle">
          Datadog for quantum: see CPU, compilation, QPU, and execution in one place. If noise shifts in real time, we can pivot to a different hardware backend.
        </p>
        <div className="metrics-grid">
          {groups.map((g) => (
            <div key={g.title} className={`metrics-card ${g.highlight ? 'highlight' : ''}`}>
              <h3 className="metrics-card-title">{g.title}</h3>
              <ul className="metrics-card-list">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
