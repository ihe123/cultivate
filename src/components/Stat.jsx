import React from 'react';

class Stat extends React.Component {

  render() {
    return (
      <div className="stat">
        <div className="colorAndFeel">
          <div id="code" style={{ backgroundColor: this.props.colors }}></div>
          <div className="feel">{this.props.feel}</div>
        </div>
        <div className="percentAndCount">
          <div className="percent">{this.props.percent}</div>
          <div className="count">{this.props.count}</div>
        </div>
      </div>
    )
  }
}

export default Stat;