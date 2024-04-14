import React from 'react'
import cns from "../../assets/colorznstyle.png"
import thunder from "../../assets/thundersoft.png"
import ajio from "../../assets/ajio.png"
import "./ExperienceBrands.css"

export const ExperienceBrands = () => {
    const brands = [
        cns,
        thunder,
        ajio
    ]
  return (
    <div className='brands-container'>
        {brands.map(image => (
            <div className='image-container'>
                <img src={image}/>
            </div>
        ))}
    </div>
  )
}
