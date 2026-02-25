import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'What is Caliqo?',
    a: 'Caliqo is agentic DevOps for quantum: observability (track parameters, traffic, errors, T1/T2, PSD), optimization (RL bandit, ZX-calculus, error mitigation, predictive cost), and automation (backend choice, auto-submit, live metrics). Think Datadog for the quantum stack.',
  },
  {
    q: 'What can I track?',
    a: 'Parameter drift from calibration, network traffic and request counts per backend, error rates, qubit coherence (T1, T2), power spectral density, and standard Datadog-style dashboards and alerts tailored to quantum.',
  },
  {
    q: 'How does backend routing work?',
    a: 'You feed in a circuit and choose backend or hardware. An RL bandit loop optimizes and can switch backends. If noise or calibration drifts in real time, we can pivot to a different hardware backend automatically.',
  },
  {
    q: 'What metrics do I see while a job runs?',
    a: 'CPU/GPU (convergence time, preprocessing, offload), compilation (transpile time, optimization), QPU (T1/T2, gate fidelity, readout error, calibration drift), and execution (queue time, traffic, shot count efficiency).',
  },
  {
    q: 'Do I need my own quantum hardware?',
    a: 'No. Caliqo works with cloud backends and simulators. You can track, optimize, and run against the providers you already use.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="faq section">
      <div className="container">
        <h2 className="section-title">Questions & answers</h2>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className={`faq-item ${open === i ? 'open' : ''}`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {item.q}
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
