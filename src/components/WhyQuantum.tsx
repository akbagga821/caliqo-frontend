export function WhyQuantum() {
  return (
    <section id="problem" className="border-t border-border py-10 md:py-14">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          The problem
        </h2>
        <div className="mt-4 space-y-4 font-serif text-lg leading-relaxed text-muted-foreground">
          <p>
            Every quantum computer operates differently. They vary in: physical architecture, connectivity, error rates, queue times, and pricing. The same circuit can behave differently depending on <em>where</em> and <em>when</em> it runs.
          </p>
          <p>
            As a result, teams spend significant time:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Comparing hardware providers</li>
            <li>Retuning circuits for different systems</li>
            <li>Estimating cost and queue times</li>
            <li>Managing submissions across platforms</li>
          </ul>
          <p>
            There is no standardized way to evaluate and deploy quantum workloads. That’s where Caliqo comes in.
          </p>
        </div>
      </div>
    </section>
  )
}
