import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Intro } from './components/intro/Intro'
import { ExperienceBrands } from './components/ExperienceBrands/ExperienceBrands'
import { ExperienceInfo } from './components/ExperienceInfo/ExperienceInfo'
import { Highlights } from './components/Highlights/Highlights'
import { Tagline } from './components/Tagline/Tagline'
import { Projects } from './components/Projects/Projects'
import { Testimonials } from './components/Testimonials/Testimonials'
import { ReachOut } from './components/ReachOut/ReachOut'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <Intro/>
      <ExperienceBrands/>
      <ExperienceInfo/>
      <Highlights/>
      <Tagline/>
      <Projects/>
      <Testimonials/>
      <ReachOut/>
      <Footer/>
    </div>
  )
}

export default App
