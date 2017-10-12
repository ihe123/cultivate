import React from 'react';
import Stat from './Stat.jsx';

class TableStats extends React.Component {
  render() {
    return (
      <div className="tableStats">
      {this.props.data.map(function(data, index) {
        return <div key={index}><Stat key={index} feel={data.key} percent={data.percent} count={data.value} colors={this.props.colors[data.key]}/></div>
      }, this)}
      <div className="total">
        <div className="questionSub respondents">Total Respondents</div>
        <div>{this.props.total}</div>
      </div>
      </div>
    )
  }
}

export default TableStats;