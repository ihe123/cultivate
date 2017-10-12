import React from 'react';
import IconRight from './IconRight.jsx';
import IconLeft from './IconLeft.jsx';

class Question extends React.Component {
  render() {
    return(
      <div className="questionBar">
        <div className="question" style={{fontSize:'20px'}}>{this.props.questions}</div> 
        <div className="arrowIcons">
          <div className="leftSwitch pointer hoverColor">
            <IconLeft/>
          </div>
          <div className="rightSwitch pointer hoverColor">
            <IconRight/>
          </div>
        </div>
      </div>
    ) 
  }
}

export default Question;