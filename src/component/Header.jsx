import React from 'react';
import $ from 'jquery';
import {Icons} from '../Constants.js';
import IconSettings from './IconSettings.jsx';
import IconLogout from './IconLogout.jsx';
import IconSurvey from './IconSurvey.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.menu = this.menu.bind(this);
  }

  menu = () => {
    console.log('take elsewhere');
    //take to settings, logout, or 
  }
  
  render() {
    return (
      <div className="header">
        <div className="title">
          <div>LIMITED ALPHA VERSION <div className="pointer" style={{color:'#3EC7BB'}}>FULL VERSION</div></div>
        </div>
        <div className="menu">
          <div className="survey pointer" onClick={this.menu}>Survey<IconSurvey/></div>
          <div className="settings pointer" onClick={this.menu}>Settings<IconSettings/></div>
          <div className="logout pointer" onClick={this.menu}>Logout<IconLogout/></div>
        </div>
      </div>
    )
  }
}

export default Header;