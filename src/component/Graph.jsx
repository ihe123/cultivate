import React from 'react';
import BarGraph from './BarGraph.jsx';
import TableStats from './TableStats.jsx';
// import Yaxis from './Yaxis.jsx';
import Stat from './Stat.jsx';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: 10157,
      skipped: 22737,
      total: 10157,
      data: [
        {key:'Strongly Disagree', value: 943, percent: "9.28%"}, 
        {key:'Disagree', value: 1349, percent: "13.28%"},
        {key:'Neutral', value: 2154, percent: "21.21%"},
        {key:'Agree', value: 3964, percent: "39.03%"},
        {key:'Strongly Agree', value: 1753, percent: "17.26%"}
      ],
      colors: {
        'Strongly Disagree': '#00BF6F',
        'Disagree': '#507CB6',
        'Neutral': '#F9BE01',
        'Agree': '#6BC8CD',
        'Strongly Agree': '#FF8B4F'
      }
    }
  }

  render() {
    return (
      <div className="graph">
        <div className="sub questionSub">
          <div>Answered: {this.state.answered} </div>
          <div>Skipped: {this.state.skipped} </div>
        </div>
        <div className="fullGraph">
          {/* <Yaxis/> */}
          <BarGraph data={this.state.data}/>
        </div>
        <div>
          <TableStats data={this.state.data} colors={this.state.colors} total={this.state.total}/>
        </div>
      </div>
    )
  }
}

export default Graph;