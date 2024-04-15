import React from 'react'
import logo from "../../assets/logo.png"
import linkedin from "../../assets/linkedin_green.png"
import behance from "../../assets/behance_green.png"
import email from "../../assets/email_green.png"
import hamb from "../../assets/hamb.png"
import "./Header.css"

export const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <img src={hamb} />
            </div>
            <div className='logo-container'>
                <img id="logo" src={logo} />
            </div>
            <div className='header-links'>
                <div>
                    <img src={linkedin} />
                </div>
                <div>
                    <img src={behance} />
                </div>
                <div>
                    <img src={email} />
                </div>
            </div>
        </div>
    )
}
