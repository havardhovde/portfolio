import React from 'react'
import './Home.css'
import Typist from 'react-typist';

const Home = () => {
    return(
        <main className='homePage'>
            <h1 className='typistText'>
                <Typist>
                    <span>Hello and welcome to my <span className='textFlair'>website!</span></span>
                    <Typist.Delay ms={500} />
                    <br />
                    <span>This is a test of the typing component.</span>
                    <Typist.Delay ms={1000} />
                    <Typist.Backspace count={10} />
                    <span>effect.</span>
                    <Typist.Delay ms={2000} />
                    <br />
                    <span>Here is some more text.</span>
                </Typist>
            </h1>
        </main>
    )
}

export default Home