import ImageGallery from 'react-image-gallery';
import galleria from './galleria.json'
import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";

class MyGallery extends React.Component {
  render() {
    return <ImageGallery slideInterval = {5000} lazyLoad = {true}  showThumbnails = {false} items={galleria.data} />;

  }
      
}


export default MyGallery;