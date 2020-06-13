import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'








class StayConnected extends Component {
    render() {
        return (
            <div className="bg-image">              
                <Card className="cardTop1">
                    <h1 className="contactMe">Stay Connected</h1>
                </Card>
                <div className="p-grid topElement">
                <div className="p-col-12 p-md-6 p-lg-3 noPadding">
                <Card className="yt">
                    <a href="https://www.youtube.com/channel/UC3onit2yM_4E0pH35FvOk9w" target="_blank" rel="noopener noreferrer">                     
                    <FontAwesomeIcon icon={['fab', 'youtube']}  size="2x" className = "iconColor"/>
                        {/* <h2 className="headingFY" >Youtube</h2> */}
                    </a>
                   
                </Card>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-3 noPadding">
                    <Card className="fb">
                    <a href="https://www.facebook.com/shree.kuchipudi.9" target="_blank" rel="noopener noreferrer">
                        
                    <FontAwesomeIcon icon={['fab', 'facebook']}  size="2x" className = "iconColor"/>
                        {/* <h2 className="headingFY" >Facebook</h2> */}
                    </a>

                </Card>

                    </div>
                    <div className="p-col-12 p-md-6 p-lg-3 noPadding">
                    <Card className="insta">
                        
                    <a href="https://instagram.com/shreekuchipudi?igshid=sf3ad6dey9rr" target="_blank" rel="noopener noreferrer">
                   
                    <FontAwesomeIcon icon={['fab', 'instagram']}  size="2x" className = "iconColor"/>
                        {/* <h2 className="headingFY" >Instagram</h2> */}
                    </a>

                </Card>

                    </div>
                    <div className="p-col-12 p-md-6 p-lg-3 noPadding">
                    <Card className="gmail">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shreekuchipudi@gmail.com&su=SUBJECT&body=BODY" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'google']}  size="2x" className = "iconColor"/>

                    </a>

                </Card>

                    </div>
                    </div>
               
               



            </div>
        );
    }
}

export default StayConnected;