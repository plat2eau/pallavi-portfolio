import React from 'react'
import p1 from "../../assets/projects/project1.png"
import p2 from "../../assets/projects/project2.png"
import p3 from "../../assets/projects/project3.png"
import p4 from "../../assets/projects/project4.png"
import "./Projects.css"

const PROJECTS = [
    {
        src: p1,
        title: "AJIO TRNDin",
        subtitle: "Product Design & Branding",
        description: "Unfold editorials that ignite your style. Shop the stories that define you on AJIO TRNDin"
    },{
        src: p2,
        title: "AJIOGRAM",
        subtitle: "Product Design",
        description: "In a vibrant fashion universe curated exclusively for the young and trend-savvy. Instagram inspired shopping experience"
    },{
        src: p3,
        title: "INFOTAINMENT REDESIGN",
        subtitle: "Product Design",
        description: "An in-app experience within the AJIO app specifically designed for fashion enthusiasts to read and shop trendy collections or keep up with the trend!"
    },{
        src: p4,
        title: "Retrace",
        subtitle: "Product Design & Branding",
        description: "An in-app experience within the AJIO app specifically designed for fashion enthusiasts to read and shop trendy collections or keep up with the trend!"
    },
]


const ProjectsCard = ({image, title, subtitle, description}) => {
  return (
    <div className='project-card-container'>
        <div>
            <img src={image}/>
        </div>
        <div className='project-card-content'>
            <div className='project-title'>{title}</div>
            <div className='green'>{subtitle}</div>
            <div className='project-card-desc'>{description}</div>
        </div>
    </div>
  )
}


export const Projects = () => {
  return (
    <div className='projects-container'>
        <div className='projects-header'>Featured Projects</div>
        <div className='project-cards-container'>
            {PROJECTS.map(p => (
                <ProjectsCard 
                image={p.src} 
                title={p.title} 
                subtitle={p.subtitle} 
                description={p.description}/>
            ))}
        </div>
        <div className='projects-footer'>Check out rest of  
        <span className='green'> my work</span>
         !</div>
    </div>
  )
}
