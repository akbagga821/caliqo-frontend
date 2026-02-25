import './Track.css'

const items = [
  'Parameter drift from daily calibration',
  'Network traffic and request counts per backend',
  'Error rates and failure modes',
  'Qubit coherence',
  'Power spectral density',
  'Data analytics dashboards and alerts for quantum',
]

export function Track() {
  return (
    <section id="track" className="track section">
      <div className="container">
        <h2 className="section-title">Track</h2>
        <p className="section-subtitle">
          One place to see what’s happening across your quantum backends.
        </p>
        <ul className="track-list">
          {items.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
