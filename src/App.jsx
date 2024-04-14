import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Intro } from './components/intro/Intro'
import { ExperienceBrands } from './components/ExperienceBrands/ExperienceBrands'
import { ExperienceInfo } from './components/ExperienceInfo/ExperienceInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <Intro/>
      <ExperienceBrands/>
      <ExperienceInfo/>
    </div>
  )
}

export default App
