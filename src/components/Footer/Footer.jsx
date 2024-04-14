import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"
import linkedin from "../../assets/linkedin.png"
import behance from "../../assets/behance.png"
import email from "../../assets/email.png"
import "./Footer.css"

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <div className='footer-logo'>
                        <img src={logo} />
                    </div>
                    <div className='footer-text1'>
                        Pallavi is a holistic Experience, Bags & Accessories Designer from Delhi, India.
                    </div>
                    <div className='footer-text2'>
                        Also a wonderful person to catch up!
                    </div>
                    <div className='footer-text3'>
                        LET'S MEET!
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='footer-links'>
                        <img src={linkedin} />
                        <img src={behance} />
                        <img src={email} />
                    </div>
                    <div>
                        <div className='footer-email1'>
                            Pallavik1897@gmail.com
                        </div>
                        <div className='footer-email2'>
                            akhilergo@gmail.com
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-created'>
                Designed by - Pallavi Kumari  |   Developed by - Akhilesh Sharma
            </div>
        </div>
    )
}
