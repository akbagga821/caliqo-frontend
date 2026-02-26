export function WhyQuantum() {
  return (
    <section id="why-quantum" className="border-t border-border py-10 md:py-14">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Why quantum computing matters—and who gets to use it
        </h2>
        <div className="mt-4 space-y-4 font-serif text-lg leading-relaxed text-muted-foreground">
          <p>
            Quantum computing promises breakthroughs in drug discovery, materials science, cryptography, and optimization—but today it’s still hard to run workloads reliably, compare backends, and understand what’s happening inside the stack. That limits who can build and ship quantum software.
          </p>
          <p>
            We believe quantum should be accessible: teams should see calibration drift, qubit health, and execution metrics in one place, optimize circuits and costs without deep expertise, and move between backends when noise or availability changes. Caliqo is built to make that possible—so more teams can deploy quantum software faster, cheaper, and smarter.
          </p>
        </div>
      </div>
    </section>
  )
}
