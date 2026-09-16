import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Concierge from './components/Concierge'
import IdentityJourney from './components/IdentityJourney'
import PowerMethod from './components/PowerMethod'
import WhoWeServe from './components/WhoWeServe'
import IndividualWellness from './components/IndividualWellness'
import Leadcoach from './components/Leadcoach'
import Organizations from './components/Organizations'
import TCLA from './components/TCLA'
import SpeakingTrain from './components/SpeakingTrain'
import OasisApproach from './components/OasisApproach'
import DrJesaira from './components/DrJesaira'
import Signature from './components/Signature'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Concierge />
      <IdentityJourney />
      <PowerMethod />
      <WhoWeServe />
      <IndividualWellness />
      <Leadcoach />
      <Organizations />
      <TCLA />
      <SpeakingTrain />
      <OasisApproach />
      <DrJesaira />
      <Signature />
      <CTA />
      <Footer />
    </>
  )
}

export default App
