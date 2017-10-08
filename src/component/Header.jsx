import React from 'react';
import $ from 'jquery';
import {Icons} from '../Constants.js';
import IconSettings from './IconSettings.jsx';
import IconLogout from './IconLogout.jsx';
import IconSurvey from './IconSurvey.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="header">
        <div className="title">
          <div>LIMITED ALPHA VERSION <div style={{color:'#3EC7BB'}}>FULL VERSION</div></div>
        </div>
        <div className="menu">
          <div>Survey</div><IconSurvey/>
          <div>Settings</div><IconSettings/>
          <div>Logout</div><IconLogout/>
        </div>
      </div>
    )
  }
}

export default Header;