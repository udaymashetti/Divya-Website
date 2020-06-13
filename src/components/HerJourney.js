import React, { Component } from 'react';

import img1 from './4.jpg'

class HerJourney extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="p-grid topElement displayp">
                    <div className="p-col-12 p-md-12 p-lg-6">
                        <img className="container" alt=" can't be displayed" src={img1} />
                    </div>
                    <div className="p-col-12 p-md-12 p-lg-6">
                        <div>
                            <h1>Her Journey</h1>
                            <p>Divya has performed in various prestigious festivals and venues across India (Orissa,Delhi,Andhrapradesh and many)
Divya had decided to teach at the age of 18 after her completion of certification, as there are less availability of dance institutions at her locality.Divya's parents has also supported her with no hesitation all along her dance journey.</p>
                        </div>
                        <div className="quoteDiv">
                            <q className="quote">When you feel like quitting, think about why you started.</q>
                        </div>
                    </div>

                </div>
                <div className="p-grid topElement displayIt">

                    <div className="p-col-12 p-md-12 p-lg-6">
                        <div>
                            <h1>Her Journey</h1>
                            <p>Divya has performed in various prestigious festivals and venues across India (Orissa,Delhi,Andhrapradesh and many)
Divya had decided to teach at the age of 18 after her completion of certification, as there are less availability of dance institutions at her locality.Divya's parents has also supported her with no hesitation all along her dance journey.</p>
                        </div>
                        <div className="quoteDiv">
                            <q className="quote">When you feel like quitting, think about why you started.</q>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-12 p-lg-6">
                        <img className="container" alt=" can't be displayed" src={img1} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HerJourney;
