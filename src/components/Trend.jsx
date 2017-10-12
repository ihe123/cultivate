import React from 'react';

class Trends extends React.Component {
  render() {
    return(
      <div className="scores">
        <div className="trendTitle">
          Trend: 
        </div>
        <div className="direction">
          <div className="trendIcon">
            <div className="svgUpIcon">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <title>arrow-up</title>
                <path className="upArrow" d="M16 1l-15 15h9v16h12v-16h9z"></path>
              </svg>
            </div>
          </div>
          <div className="trend">Positive Increase</div>
        </div>
        <div className="analysis">
          <div>Analysis:</div>
          <div className="text">{this.props.analysis}</div>
        </div>     
        <div className="actions">
          <div>Actions:</div>
          <div className="text">{this.props.actions}</div>
        </div> 
      </div>
    )
  }
}

export default Trends;