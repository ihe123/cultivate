import React from 'react';
import IconLeft from './IconLeft.jsx';
import IconRight from './IconRight.jsx';

class RightLeftQuestions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="arrowIcons">
        <div className="leftSwitch"><IconLeft/></div>
        <div className="rightSwitch"><IconRight/></div>
      </div>
    )
  }
}

export default RightLeftQuestions;