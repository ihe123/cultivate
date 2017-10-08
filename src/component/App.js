import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Tabs from './Tabs.jsx';
import Tab from './Tab.jsx';
import Header from './Header.jsx';
import {Icons} from '../Constants.js';
import SideBar from './SideBar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="side">
          <SideBar/>
        </div>
        <div className="headerTab">
          <Header/>
          <Tabs/>
        </div>
      </div>
    );
  }
}

export default App;
