import React from 'react';
import BarGraph from './BarGraph.jsx';
import TableStats from './TableStats.jsx';
import Stat from './Stat.jsx';
import Score from './Score.jsx';
import Trend from './Trend.jsx';

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
      },
      currentScore: 'Agree',
      previousScore: 'Neutral',
      trend: "Positive increase",
      analysis: "Your company is showing signs of good inclusion and people feel valued", 
      actions: "You can improve this score by focusing on manager – employee communications and making sure everybody feels like they are being heard. Some example activities include, “lunch & learns” delivered by every members of the team or making sure managers are having weekly 1:1 meetings with each member of their team"
    }
  }

  render() {
    return (
      <div className="bottom">
        <div className="graphAndStats">
          <div className="sub questionSub">
            <div>Answered: {this.state.answered} </div>
            <div>Skipped: {this.state.skipped} </div>
          </div>
          <div className="fullGraph">
            <BarGraph data={this.state.data}/>
          </div>
          <div>
            <TableStats data={this.state.data} colors={this.state.colors} total={this.state.total}/>
          </div>
        </div> 
        <div className="scoreAndTrends">
          <Score previousScore={this.state.previousScore} currentScore={this.state.currentScore}/>
          <Trend actions={this.state.actions} analysis={this.state.analysis} trend={this.state.trend}/>
        </div>
      </div>
    )
  }
}

export default Graph;