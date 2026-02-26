import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
  return (
    <section id="faq" className="border-t border-border py-10 md:py-14">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Questions & answers
        </h2>
        <Accordion type="single" collapsible defaultValue="item-0" className="mt-8">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline hover:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-serif text-muted-foreground">{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
