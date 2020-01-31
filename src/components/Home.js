import React, { useState } from 'react'
import './Home.css'
import Projects from './Projects'
import Typist from 'react-typist'
import { navigate } from '@reach/router'
import { FiChevronDown } from "react-icons/fi"

const Home = () => {

    const [typingDone, setTypingDone] = useState(false)

    const evaluate = (e) => {
        switch (e.target.value) {
            case 'projects':
                
                navigate('./projects')
            break;
            case 'contact':
                navigate('./contact')
            break;
            default :
            break;
        }
    }

    return(
        <main className='pageContainer'>
            <div className='homePage'>
                <h1 className='typistText'>
                    <Typist cursor={{hideWhenDone: true}} onTypingDone={ () => setTypingDone(true)}>
                        <span className='typedText'>Hello, I am <span className='typedText textFlair'>Håvard Hovde.</span></span>
                        <Typist.Delay ms={500} />
                        <br />
                        <span className='typedText'>I like to write <span className='typedText textFlairMono'>code.</span></span>
                        <Typist.Delay ms={1000} />
                        {/* <Typist.Backspace count={19} /> */}
                        <br />
                        <span className='typedText'>I am based in <span className='typedText textFlair'>Oslo, Norway.</span></span>
                    </Typist>
                    {
                        typingDone&&
                        <textarea onKeyPress={evaluate} className='inputTest' placeholder='write to navigate'></textarea>
                    }
                </h1>
                <div className='downArrow'>
                    <FiChevronDown />
                </div>
            </div>
            <div className='projectsContainer'>
                <Projects />
            </div>
        </main>
    )
}

export default Home