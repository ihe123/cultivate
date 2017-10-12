import React from 'react';

class Score extends React.Component {
  render() {
    return (
      <div className="scores">
        <div className="scoreStat">Current Score</div>
        <div className="currentScore donut">
          <div className="scoreText">
            {this.props.currentScore}
          </div>
        </div>
        <div className="scoreStat">Previous Score</div>
        <div className="previous donut">
          <div className="scoreText">
            {this.props.previousScore}
          </div>
        </div>
      </div>
    )
  }
  
}

export default Score;