import './Actions.css'

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
    <section id="actions" className="actions section">
      <div className="container">
        <h2 className="section-title">Actions</h2>
        <p className="section-subtitle">
          From circuit in to results out: we optimize, route, and run.
        </p>
        <ul className="actions-list">
          {items.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
