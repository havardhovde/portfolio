import React, { useRef } from 'react'
import './Home.css'
import Projects from './Projects'
import Typist from 'react-typist'
import { FiChevronDown } from "react-icons/fi"

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Home = (props) => {

    const projectRef = useRef(null)

    return(
        <main className='pageContainer'>
            <div id='homePage' className='homePage'>
                <h1 className='typistText'>
                    <Typist cursor={{hideWhenDone: true}} onTypingDone={() => scrollToRef(projectRef)}>
                        <span className='typedText'>Hello, I am <span className='typedText textFlair'>Håvard Hovde.</span></span>
                        <Typist.Delay ms={500} />
                        <br />
                        <span className='typedText'>I like to write <span className='typedText textFlairMono'>code.</span></span>
                        <Typist.Delay ms={500} />
                        <br />
                        <span className='typedText'>I am based in <span className='typedText textFlair'>Oslo, Norway.</span></span>
                        <Typist.Delay ms={500} />
                        <br />
                        <span className='typedText'>Here is some of my <span className='typedText textFlair'>work.</span></span>
                        <Typist.Delay ms={1500} />
                    </Typist>
                </h1>
            </div>

            <FiChevronDown size={52} onClick={()=>scrollToRef(projectRef)} className='downArrow' />

            <div ref={projectRef} id='projectsContainer' className='projectsContainer'>
                <Projects projects={props.projects} id={props.id} signedIn={props.signedIn} />
            </div>
        </main>
    )
}

export default Home