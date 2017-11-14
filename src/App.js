import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Overview from './overview/overview';
import SidePanel from './sidepanel/sidepanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-9">
                    
                        
                        <Overview />
                        
                    
                    <div className="row">
                        <div className="col-xs-4">
                        
                        </div>
                        <div className="col-xs-4">
                        
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <SidePanel />
                </div>
            </div>
        </div>
        
      </div>
    );
  }
}

export default App;
