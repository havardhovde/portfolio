import React from 'react'
import './Home.css'
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

const Home = () => {
    return(
        <main className='homePage'>
            <h1 className='typistText'>
                <Typist>
                    <span>Hello, I am <span className='textFlair'>Håvard Hovde.</span></span>
                    <Typist.Delay ms={500} />
                    <br />
                    <span>I like to write <span className='textFlairMono'>code.</span></span>
                    <Typist.Delay ms={1000} />
                    {/* <Typist.Backspace count={19} /> */}
                    <br />
                    <span>I am based in <span className='textFlair'>Oslo, Norway.</span></span>
                    {/* <Typist.Delay ms={2000} />
                    <br />
                    <span>Here is some more text.</span> */}
                </Typist>
            </h1>
        </main>
    )
}

export default Home