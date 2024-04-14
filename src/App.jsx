import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
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
      <Header/>
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
