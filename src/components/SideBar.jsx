import React from 'react';
import guy from '../assets/guy.png';
import LogoCultivate from './LogoCultivate.jsx';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="aside">
        <div className="logo">
          <LogoCultivate/>
        </div>
        <div><img className="guy" height='50px'width='50px' src={guy}/></div>
      </div> 
    )
  }
}

export default SideBar;