import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhatWeDo } from './components/WhatWeDo'
import { WhyQuantum } from './components/WhyQuantum'
import { Actions } from './components/Actions'
import { Metrics } from './components/Metrics'
import { WhyNow } from './components/WhyNow'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <WhyQuantum />
        <Actions />
        <Metrics />
        <WhyNow />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
