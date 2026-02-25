import './Features.css'

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
    <section className="features section">
      <div className="container">
        <h2 className="section-title">Built for the quantum stack</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-body">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
