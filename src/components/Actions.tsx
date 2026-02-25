import './Actions.css'

const items = [
  'Automate the hardware selection process',
  'Optimize your circuits for a chosen QPU',
  'Predict cost before deploying',
  'Auto-submit jobs to quantum backends',
  'Display up-to-date hardware metrics',
  'Analyze results and provide recommendations'
]

export function Actions() {
  return (
    <section id="actions" className="actions section">
      <div className="container">
        <h2 className="section-title">Actions</h2>
        <p className="section-subtitle">
          We make quantum software production-ready by optimizing circuits, deploying workloads, and monitoring metrics.
        </p>
        <br></br>
        <p className="section-subtitle">
          Caliqo can:
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
