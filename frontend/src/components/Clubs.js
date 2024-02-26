import React from 'react'
import '../css/Club.css'


import Marquee from "react-fast-marquee";

import AllIndiaKishan from '../assests/_1_Allindiakishan.png'
import centraloragnistaionbhopal from '../assests/_1_centraloragnistaionbhopal.png'
import Gene from '../assests/_1_Genecampagian.png'
import kera from '../assests/_1_Kerafed.png'
import Dance from '../assests/_1_ministryofagriculture.png'
import Bank from '../assests/_1_nationalbankofagriculture.png'
import NIAM from "../assests/_1_centraloragnistaionbhopal.png"

import Organic from '../assests/_1_oraganicfarming.png'
import Primary from '../assests/_1_primaryagriculture.png'
import tamilnadu  from '../assests/_1_Tamilnadu.png'

const Clubs = () => {
    return (
        <div className="clubs-container" id='clubs'>
            <br/>
            <br/>
            <br/>
            <h1 style={{color:'aliceblue'}}>Organisations</h1>
            <p id='clubs-container-heading'>Get the opputunity to join Organisations<br /><span>Get latest updates about them</span></p>
            <br />
            <br />
            <br />
            <br />
            <Marquee pauseOnHover='true'>
               

                <div className='clubs-div'><img id='club-imgs' src={AllIndiaKishan} alt="" style={{ padding: '1rem' }}/><h3 id='clubs-text'>AllIndiaKishan</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={centraloragnistaionbhopal} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>centraloragnistaionbhopal</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Gene} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>Gene Campaign</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={kera} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>KERAFED</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Primary} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>Primary Agriculture</h3></div>
            </Marquee>
            <br />
            <Marquee pauseOnHover='true'  direction='right'>
            <div className='clubs-div'><img id='club-imgs' src={Dance} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>Ministry of Agriculture</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Bank} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>Bank of Agriculture</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={NIAM} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>NIAM</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Organic} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>Organic Farming</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={tamilnadu} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>Tamilnadu Agriculture</h3></div>
            </Marquee>
        </div>
    )
}

export default Clubs