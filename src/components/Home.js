import React, { useRef } from 'react'
import './Home.css'
import Projects from './Projects'
import Typist from 'react-typist'
import { FiChevronDown } from "react-icons/fi"

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Home = () => {

    // const [typingDone, setTypingDone] = useState(false)
    const projectRef = useRef(null)

    // const evaluate = (e) => {
    //     switch (e.target.value) {
    //         case 'projects':
                
    //             navigate('./projects')
    //         break;
    //         case 'contact':
    //             navigate('./contact')
    //         break;
    //         default :
    //         break;
    //     }
    // }

    return(
        <main className='pageContainer'>
            <div className='homePage'>
                <h1 className='typistText'>
                    {/* <Typist cursor={{hideWhenDone: true}} onTypingDone={ () => setTypingDone(true)}> */}
                    <Typist cursor={{hideWhenDone: true}}>
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
                    </Typist>
                    {/* {
                        typingDone&&
                        <textarea onKeyPress={evaluate} className='inputTest' placeholder='write to navigate'></textarea>
                    } */}
                </h1>
                {/* <div onClick={()=>scrollToRef(projectRef)} className='downArrow'>
                    <FiChevronDown />
                </div> */}
            </div>

            <FiChevronDown size={52} onClick={()=>scrollToRef(projectRef)} className='downArrow' />

            <div ref={projectRef} id='projectsContainer' className='projectsContainer'>
                <Projects />
            </div>
        </main>
    )
}

export default Home