import React, { Component } from 'react';
import {Toolbar} from 'primereact/toolbar';

class AppFooter extends Component {
    render() {
        return (
            <Toolbar className="header">
            <div className="p-toolbar-group-left">
            <p style={{color:'white'}}>
			            © Cholasamudram Divya | 2020
			        </p>
                    <p style={{color:'white'}}>
			           Designed By ud
			        </p>
            </div>
            <div className="p-toolbar-group-right">
            </div>
        </Toolbar>
        );
    }
}

export default AppFooter;