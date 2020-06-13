import React, { Component } from 'react';
import MyGallery  from './MyGallery.js';

import Youtube  from './Youtube.js';

class AppBody extends Component {
    render() {
        return (
       
               <div  >

                {true ? <MyGallery></MyGallery> : '' } 
                {true ? <MyGallery></MyGallery> : '' }           
                {true ? <Youtube></Youtube>   : '' }  
                {true ? <h3>Under Construction</h3>   : '' } 
                </div>   
          
        );
    }
}

export default AppBody;