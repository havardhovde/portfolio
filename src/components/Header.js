import React, { useState } from 'react'
import { Link } from "@reach/router"
import "./Header.css"
import { MdMenu } from "react-icons/md"


const Header = (props) => {
    const [show, setShow] = useState(false)
    return(
        <div className="header-container">
            <MdMenu className="burger" color="white" size="32" onClick={ () => setShow(!show) } />
            <header className={show ? "visible" : ""} onClick={ () => setShow(false)}>
                <Link className='headerButtons' to="/">home</Link>
                <Link className='headerButtons' to={process.env.PUBLIC_URL + "/projects"}>projects</Link>
                <Link className='headerButtons' to={process.env.PUBLIC_URL + "/contact"}>contact</Link>
                <Link className="headerButtons loginButton" to={process.env.PUBLIC_URL + "/login"}></Link>
            </header>
        </div>

    )
}

export default Header