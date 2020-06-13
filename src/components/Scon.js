import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Scon extends Component {
    render() {
        return (
            <div>
                <h2>Stay Connected</h2>
                <div className="bpad">
                <a href="https://www.youtube.com/channel/UC3onit2yM_4E0pH35FvOk9w" target="_blank" rel="noopener noreferrer">                     
                    <FontAwesomeIcon icon={['fab', 'youtube']}  size="2x" className = "yt"/>
                        
                    </a>
                   
                    <a href="https://www.facebook.com/shree.kuchipudi.9" target="_blank" rel="noopener noreferrer">
                        
                    <FontAwesomeIcon icon={['fab', 'facebook']}  size="2x" className = "fb"/>
                        
                    </a>
                    <a href="https://instagram.com/shreekuchipudi?igshid=sf3ad6dey9rr" target="_blank" rel="noopener noreferrer">
                   
                   <FontAwesomeIcon icon={['fab', 'instagram']}  size="2x" className = "insta"/>
                      
                   </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hreekuchipudi@gmail.com&su=SUBJECT&body=BODY" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'google']}  size="2x" className = "gmail"/>
                    </a>
                
                </div>
            </div>
        );
    }
}

export default Scon;