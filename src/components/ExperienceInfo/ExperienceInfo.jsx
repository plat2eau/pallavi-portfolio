import React from 'react'
import illustration1 from "../../assets/illustration1.png"
import "./ExperienceInfo.css"
import dstrategy from "../../assets/icons/dstrategy.png"
import marketting from "../../assets/icons/marketting.png"
import psolving from "../../assets/icons/psolving.png"
import research from "../../assets/icons/research.png"
import ux from "../../assets/icons/ux.png"
import vcreation from "../../assets/icons/vcreation.png"

const ITEMS = [
    {
        src: ux,
        text: "UX Design"
    },
    {
        src: research,
        text: "Research"
    },
    {
        src: dstrategy,
        text: "Digital Strategy"
    },
    {
        src: psolving,
        text: "Problem Solving"
    },
    {
        src: marketting,
        text: "Marketting"
    },
    {
        src: vcreation,
        text: "Value Creation"
    }
]

const SkillContainer = ({img, text}) => {

  return (
    <div className="skill-box">
        <img src={img}/>
        {text}
    </div>
  )
}

export const ExperienceInfo = () => {
  return (
    <div className='experience-main-container'>
        <div className='experience-main-content'>
            <div className='experience-main-info'>
            Hey, I’m Pallavi Kumari and I approach design <span className="green">holistically</span>.
            </div>
            <div className='experience-description-container'>
            Creative designer with 3 years of industry experience translating trends into functional and stylish bags & accessories. 
            Leveraging this design foundation, I'm now pursuing a career in experience design, where my focus on user needs and aesthetics will ensure impactful and user-centered experiences.
            </div>
            <div className='experience-skills-container'>
                {ITEMS.map(item => (
                    <SkillContainer img={item.src} text={item.text}/>
                ))}
            </div>
        </div>
        <div className='experience-illustration-container'>
            <img src={illustration1}/>
        </div>
    </div>
  )
}
