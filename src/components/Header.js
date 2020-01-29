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
                <Link to="/">home</Link>
                <Link to="/projects">projects</Link>
                <Link to="/contact">contact</Link>
                <Link to="/cv">cv</Link>
                <Link to="/login">
                    {
                        props.signedIn ? "profile" : "login"
                    }
                </Link>
            </header>
        </div>

    )
}

export default Header