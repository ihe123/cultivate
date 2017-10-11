import React from 'react';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { axisLeft } from 'd3-axis';

class Yaxis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.createYAxis = this.createYAxis.bind(this);
  }

  componentDidMount() {
    this.createYAxis();
  }

   createYAxis() {
    const node = this.node;

    var vis = select(".graph").
            append("svg:svg")
                .attr("width", 700)
                .attr("height", 241);

    var yScale = scaleLinear()
                  .domain([0, 5000])
                  .range([150, 100])

    var yAxis = axisLeft()
                  .scale(yScale)
                  .ticks(6);
    
   vis.append("g")
      .attr("transform", "translate(" + 40 + ", 0)")
      .call(yAxis);             
  } 

  render() {
    return(
       <svg className="axis" ref={node => this.node = node} width="10px" height="241px"></svg>
    )
  }
}

export default Yaxis; 