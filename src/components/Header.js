import React, { useState } from 'react'
// import { Link } from "@reach/router"
import "./Header.css"
import { MdMenu } from "react-icons/md"

const Header = (props) => {

    const [show, setShow] = useState(false)
    // const [current, setCurrent] = useState(false)
    
    return(
        <div className="header-container">
            <MdMenu className="burger" color="white" size="32" onClick={ () => setShow(!show) } />
            <header className={show ? "visible" : ""} onClick={ () => setShow(false)}>
                <a href='./#homePage' className='headerButtons'>home</a>
                {/* <Link className='headerButtons' to="/home">home</Link> */}
                <a href='./#projectsContainer'className='headerButtons'>projects</a>
                {/* <Link className='headerButtons' to={process.env.PUBLIC_URL + "/projects"}>projects</Link> */}
                <a href='./contact' className='headerButtons'>contact</a>
                {/* <Link className='headerButtons' to={process.env.PUBLIC_URL + "/contact"}>contact</Link> */}
            </header>
        </div>
    )
}

export default Header