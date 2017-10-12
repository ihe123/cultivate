import React from 'react';
import guy from '../assets/guy.png';
import LogoCultivate from './LogoCultivate.jsx';

class SideBar extends React.Component {
 
  render() {
    return (
      <div className="aside">
        <div className="logo">
          <LogoCultivate/>
        </div>
        <div><img className="guy" height='50px'width='50px' src={guy} alt="profile pic"/></div>
      </div> 
    )
  }
}

export default SideBar;