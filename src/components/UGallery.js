import React, { Component } from 'react';

class UGallery extends Component {
   
    render() {
        const photos = [
            {
              src: 'images/1.jpg',
              width: 1,
              height: 1
            },
            {
              src: 'images/2.jpg',
              width: 1,
              height: 1
            },
            {
              src: 'images/3.jpg',
              width: 3,
              height: 2
            },
            {
              src: 'images/4.jpg',
              width: 2,
              height: 3
            }
          ];
          
        return (
            <div className="p-grid topElement">
               {
                 photos.map(element => (
                  <div key = {element.src} className="p-col-6 p-md-3 p-lg-3 noPadding">
                   <img className="container1" alt=" can't be displayed" src={element.src} />
                    </div>
                 ))
               }
            </div>
        );
    }
}

export default UGallery;