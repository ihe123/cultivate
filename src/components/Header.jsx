import React from 'react';
import IconSettings from './IconSettings.jsx';
import IconLogout from './IconLogout.jsx';
import IconSurvey from './IconSurvey.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.menu = this.menu.bind(this);
  }

  menu = () => {
    //take to settings, logout, survey page 
  }
  
  render() {
    return (
      <div className="header">
        <div className="title">
          <div>LIMITED ALPHA VERSION <div className="pointer" style={{color:'#3EC7BB'}}>FULL VERSION</div></div>
        </div>
        <div className="menu">
          <div className="survey pointer" onClick={this.menu}>
            <div className="headerSub">Survey</div>
            <IconSurvey/>
          </div>
          <div className="settings pointer" onClick={this.menu}>
            <div className="headerSub">Settings</div>
            <IconSettings/>
          </div>
          <div className="logout pointer" onClick={this.menu}>
            <div className="headerSub">Logout</div>
            <IconLogout/>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;