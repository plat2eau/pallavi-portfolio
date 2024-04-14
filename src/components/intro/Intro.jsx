import React from 'react'
import "./Intro.css"
import profile from "../../assets/profile.png"
import introBackground from "../../assets/intro-background.png"

export const Intro = () => {
    return (
        <div className='intro-container'>
            <div className='intro-background'>
                <img src={introBackground} />
            </div>
            <div className='intro-content'>
                <div className='intro-info'>
                    <div className='intro-hi'>
                        Hi there
                    </div>
                    <div className='intro-i-design'>
                        I 
                        <span className='intro-emphasis'>
                            DESIGN
                        </span>
                         Products & Brands
                    </div>
                    <div className='intro-experiences'>
                        Making EXPERIENCES that does not make you cry
                    </div>
                    {/* <div>
                    <div>
                        Download Resume
                    </div>
                    <div>
                        View Projects
                    </div>
                </div> */}
                </div>
                <div className='intro-profile'>
                    <img className='profile-image' src={profile} />
                </div>
            </div>
        </div>
    )
}
