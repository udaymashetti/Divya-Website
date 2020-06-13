import React, { Component } from 'react';

import {Toolbar} from 'primereact/toolbar';
import shree from './shree.jpg'

import './primeflex.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';



class AppToolbar extends Component {

    render() {
        return (
            <Toolbar className="header">
                 <div className="p-grid topElement">
                <div  className="p-col-fixed center">
                    <img className = "shree" alt=" can't be displayed" src={shree} />
                    
                </div>
                <div  className="p-col">
                <h1 className="titleHeading" >SHREE KUCHIPUDI ACADEMY</h1>
                    </div>
                    </div>
            </Toolbar>

        );
    }
}

export default AppToolbar;
