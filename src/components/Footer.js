import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return(
        <div className='footerContainer'>
            <div className='footerGrid'>
                <p className='link linkOne'><a href='https://www.linkedin.com/in/h%C3%A5vard-langdal-hovde-bb4b6610a/' target='_blank' rel="noopener noreferrer"><FaLinkedin color='white' size={46} /></a></p>
                <p className='link linkTwo'><a href='https://github.com/havardhovde' target='_blank' rel="noopener noreferrer"><FaGithub color='white' size={46} /></a></p>
            </div>
            <div className='footerText'>
                Built with React
            </div>
        </div>
    )
}

export default Footer