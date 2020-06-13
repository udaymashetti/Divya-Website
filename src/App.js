import React from 'react';

import './App.css';
import AppToolbar from './components/AppToolbar';
import About from './components/About';
import HerJourney from './components/HerJourney'
import Teaching from './components/Teaching'
import Glimpses from './components/Glimpses'
import YoutubeVideos from './components/YoutubeVideos'
import StayConnected from './components/Scon';
import AppFooter from './components/AppFooter';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faCheckSquare, faCoffee,faSpinner)

class App extends React.Component {
 
  render() {
    return (
      <div className="App " >
      <AppToolbar >  </AppToolbar>
    
      <div className="bg-image">
      <About ></About>
      <HerJourney ></HerJourney>
      <Teaching></Teaching>
      <Glimpses></Glimpses>
      <YoutubeVideos></YoutubeVideos>
      <StayConnected ></StayConnected>
      <AppFooter></AppFooter>
      </div>
      
    </div>
    );
  }
}

export default App;