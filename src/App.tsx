import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhatWeDo } from './components/WhatWeDo'
import { Platform } from './components/Platform'
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
        <Platform />
        <Metrics />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
