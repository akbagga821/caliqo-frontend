import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'What is Caliqo?',
    a: 'Caliqo is the control plane for enterprise quantum deployment. We provide standardized evaluation, backend-aware optimization, and cross-provider orchestration — ensuring quantum workloads are executed efficiently and reliably.',
  },
  {
    q: 'Is Caliqo tied to a specific quantum hardware provider?',
    a: 'No. Caliqo is hardware-agnostic. We abstract away the differences across multiple quantum providers and architectures, enabling organizations to maintain vendor flexibility and avoid lock-in.',
  },
  {
    q: 'Does Caliqo replace existing SDKs or vendor tooling?',
    a: 'No. Caliqo operates above existing SDKs. It standardizes evaluation, optimization, deployment, and observability workflows while integrating into your current development and DevOps stack.',
  },
  {
    q: 'How does Caliqo account for hardware variability and calibration changes?',
    a: 'Caliqo incorporates device architecture, performance characteristics, and up-to-date calibration data into hardware evaluation and optimization workflows. This helps teams manage execution variability before and after deployment.',
  },
  {
    q: 'Who is Caliqo designed for?',
    a: 'Caliqo is designed for enterprises and quantum-native startups integrating quantum workloads into production systems and requiring operational consistency across hardware environments.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border py-10 md:py-14">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Frequently asked questions
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
