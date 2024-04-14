import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Intro } from './components/intro/Intro'
import { ExperienceBrands } from './components/ExperienceBrands/ExperienceBrands'
import { ExperienceInfo } from './components/ExperienceInfo/ExperienceInfo'
import { Highlights } from './components/Highlights/Highlights'
import { Tagline } from './components/Tagline/Tagline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <Intro/>
      <ExperienceBrands/>
      <ExperienceInfo/>
      <Highlights/>
      <Tagline/>
    </div>
  )
}

export default App
