import React, { Component } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";

import img1 from './1.png'

class About extends Component {
    render() {
        return (
            <div className="p-grid topElement">
                <div className="p-col-12 p-md-12 p-lg-6">
                    <div>
                    <h1>About Divya Cholasamudram</h1>
                    <p>Cholasamudram Divya is a professional <a className ="noPadding customizedAnchor" rel="noopener noreferrer" target = "_blank" href="https://en.wikipedia.org/wiki/Kuchipudi#:~:text=Kuchipudi%20is%20a%20dance%2Ddrama,major%20classical%20dances%20of%20India.">Kuchipudi</a> dancer from Hyderabad.Divya has been practicing Kuchipudi since her childhood. Ever since the beginning, Divya has been under the guidence of the guru, Smt.Musunoori Indira garu. Divya has finished her certificate course in Kuchipudi from Potti Sreeramulu Telugu University, Hyderabad with distinction results in the year 2018 under the guidence of the guru, Smt.Himabindu Kanoj. </p>
                    </div>                   
                     <div className = "quoteDiv">
                     <q className="quote">Why walk when you can dance?</q>
                     </div>
                        
    


                </div>
                <div className="p-col-12 p-md-12 p-lg-6">
                   <img className="container" alt=" can't be displayed" src={img1} />
                </div>
            </div>
        );
    }
}

export default About;
