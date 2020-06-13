import React, { Component } from 'react';

import Youtube from './Youtube'
class YoutubeVideos extends Component {
    render() {
        return (
            <div className="p-grid topElement">
            <div className="p-col-12 p-md-12 p-lg-12">
            <h1>Recent Videos</h1>
                    <Youtube  ></Youtube>
                </div>
            </div>
        );
    }
}

export default YoutubeVideos;