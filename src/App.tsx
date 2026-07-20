import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import { EnquiryModalProvider } from './context/EnquiryModalContext'

export default function App() {
  return (
    <EnquiryModalProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </EnquiryModalProvider>
  )
}
