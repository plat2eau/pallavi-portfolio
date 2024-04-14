import React from 'react'
import { useState, useEffect } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import p1 from "../../assets/testimonials/p1.png"
import p2 from "../../assets/testimonials/p2.png"
import p3 from "../../assets/testimonials/p3.png"
import "./Testimonials.css"

const ITEMS = [
    {
        image: p1,
        name: "Neeraj Jain, Colorz n Style",
        role: "Founder & CEO",
        desc: "She is highly energetic, full of new ideas, ready to go to extent to achieve tasks assigned to her and most importantly she is honest with her work. High professionalism and adaptive in nature. I highly recommend her to all recruiters , she would be true asset to your company. We wish her the best in all her future endavours"
    },
    {
        image: p2,
        name: "Anurag, Peace & Keep",
        role: "Founder & CEO",
        desc: "Pallavi was a fantastic freelance bag designer. Her time management skills were superb.  She balanced her demanding Master's program with our project, delivering flawless work while always being enthusiastic about taking on extra challenges."
    },
    {
        image: p3,
        name: "Atindriya Roy, AJIO",
        role: "Creative Director, Maketing",
        desc: "During her 4 month internship at AJIO, she demonstrated a keen ability to collaborate effectively with team members, contributing fresh perspectives and innovative ideas to various projects. Her dedication to delivering high-quality work was evident. From conceptualizing creative campaigns to analyzing user engagement data, her contributions were instrumental in driving positive outcomes for the team"
    }
]


const Testimonial = ({ image, name, role, desc }) => {
    return (
        <div className='testimonial-container'>
            <div className='testimonial-image'>
                <img src={image} />
            </div>
            <div className='testimonial-name'>
                {name}
            </div>
            <div className='testimonial-role'>
                {role}
            </div>
            <div className='testimonial-desc'>
                {desc}
            </div>
        </div>
    )
}


export const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setIndex(i => (i + 1)%ITEMS.length)
        }, 5000)
        return () => clearInterval(timerId)
    }, [index])

    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={index}
                onRequestChange={setIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        display: "none"
                    }
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        display: "none"
                    }
                }}
                speed={400}
                easing="linear"
            >
                {ITEMS.map(t => (
                    <Testimonial
                        image={t.image}
                        name={t.name}
                        role={t.role}
                        desc={t.desc}
                    />
                ))}
            </ReactSimplyCarousel>
        </div>
    )
}
