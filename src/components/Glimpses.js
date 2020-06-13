import React, { Component } from 'react';
import MyGallery from './MyGallery'
class Glimpses extends Component {
    render() {
        return (
            <div className="p-grid topElement">
            <div className="p-col-12 p-md-12 p-lg-12">
            <h1>Glimpses</h1>
                    <MyGallery></MyGallery>
                </div>
            </div>
        );
    }
}

export default Glimpses;