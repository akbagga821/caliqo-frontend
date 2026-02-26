import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhatWeDo } from './components/WhatWeDo'
import { Actions } from './components/Actions'
import { Metrics } from './components/Metrics'
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
        <Actions />
        <Metrics />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
