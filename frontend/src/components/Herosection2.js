import React from 'react'
import '../css/HeroSection.css'
import AfterSign from './AfterSign'
// import Header from '../assests/Header.webp'
import dance from '../assests/dance.png'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Herosection2 = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])

    return (
        <div className='hero-container'>
            <AfterSign />
            <div className="hero-top" data-aos="zoom-in-up">
                <button id='skipDiv-button'>Take a tour</button>
                <p id='hero-top-text'>Welcome to the platform <span><br />Real Crop Bidding</span><br />
                    <span id='hero-gradient-text'>Agrico</span></p>
            </div>

            <div className="hero-bottom">
                <p id='hero-bottom-text'>Connecting Communities, Sparking Conversations</p>
                <img data-aos="fade-up" src={dance} alt="" />
            </div>
        </div>
    )
}

export default Herosection2