import React from 'react';
import Stat from './Stat.jsx';

class TableStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tableStats">
      {this.props.data.map(function(data) {
        return <div><Stat feel={data.key} percent={data.percent} count={data.value} colors={this.props.colors[data.key]}/></div>
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

//<Stat feel={data.key} percent={data.percent} count={data.value} color={this.props.colors[data]}