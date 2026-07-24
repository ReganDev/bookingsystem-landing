import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import { EnquiryModalProvider } from './context/EnquiryModalContext'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <EnquiryModalProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </EnquiryModalProvider>
  )
}
