import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../Components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src = "https://wcet3.waketech.edu/nademelew/WEB215/lesson14/build/myphto.png" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Nigist Demelew','Front-End Web Developer']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    