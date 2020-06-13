import React, { Component } from 'react';
import './primeflex.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';

 const apiKey = "AIzaSyCPcMVZjnBCJIE7u_8GKdbeTOM7qTR1Pp4";
//const apiKey = "AIzaSyAOYG1A142y6L-1f2gq8b2587vA6v3JdA";
const channelId = "UC3onit2yM_4E0pH35FvOk9w";
const result = 1;

const finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&maxResults=${result}&part=snippet,id&order=date`;

class Youtube extends Component {
    constructor(params) {
        super(params);
        this.state = {
            resultsYT: []
        }
    }

    componentWillMount() {
        fetch(finalUrl)
            .then(response => response.json())
            .then(responseJson => {
                const resultsData = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
                this.setState({ resultsYT: resultsData });
                //console.log(this.state.resultsYT);
            })
            .catch(error => console.log(error));
    }

    render() {
        //console.log(finalUrl);
        return (
           
           
             <div className="p-grid">
                  {
                this.state.resultsYT.map((link , i) => {
                    //console.log(link);
                    var frames = <div key = {i} className="p-col-12 p-md-6 p-lg-6" >  <iframe   title = {link} key = {i}  src={link}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe> </div>
                    return frames;
                })
            } 
             {this.frames}   

             </div>
                     
            
        );
    }
}

export default Youtube;