import React from 'react';
import possibilityImage from '../assests/possibility.png';
import '../css/possibility.css';

const Possibility = () => (
    <div className="possibility" id="possibility">
        <div className="possibility-image">
            <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="possibility-content">
            <h4 id='possibility-h4'>Inbuilt chatbot feature for making things easier </h4>
            <h1 style={{fontSize:'30px',fontWeight:'500',lineHeight:'45px',margin:'1rem 0',background: 'linear-gradient(89.97deg, #134580 1.84%, #04001D 102.67%)',color:'aliceblue'}}>Chat with AI</h1>
            <p id='possibility-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea repellendus enim dolore ipsam, quo consequuntur ad quaerat necessitatibus asperiores reprehenderit? Ratione odio repellat dolores?</p>
            <button id='skipDiv-button'>Chat Me</button>
        </div>
    </div>
);

export default Possibility;