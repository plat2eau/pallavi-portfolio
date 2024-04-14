import React from 'react'
import research from "../..//assets/icons/researchHighlight.png"
import test from "../..//assets/icons/testHighlight.png"
import pd from "../..//assets/icons/pdHighlight.png"
import "./Highlights.css"

const HIGHLIGHTS = [
    {
        icon: research,
        title: "Research",
        description: "Understand the market, define the audience, and ideate potential solutions."
    },{
        icon: pd,
        title: "Product Design",
        description: "Define the solution, create a roadmap, establish architecture and design the product."
    },{
        icon: test,
        title: "Testing",
        description: "Establish usability, meet accessibility needs and ensure a delightful solution."
    },
]

const HighlightCard = ({icon, title, description}) => {
  return (
    <div className='highlight-card'>
        <div className='highlight-image'>
            <img src={icon}/>
        </div>
        <div className='highlight-title'>
            {title}
        </div>
        <div className='highlight-description'>
            {description}
        </div>
    </div>
  )
}


export const Highlights = () => {
  return (
    <div className='highlights-container'>
        {HIGHLIGHTS.map(h => (
          <HighlightCard icon={h.icon} title={h.title} description={h.description}/>
        ))}
    </div>
  )
}
