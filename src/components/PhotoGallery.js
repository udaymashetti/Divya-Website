import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

class PhotoGallery extends Component {
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
            <div>
                 <Gallery photos={photos} />;
            </div>
        );
    }
}

export default PhotoGallery;