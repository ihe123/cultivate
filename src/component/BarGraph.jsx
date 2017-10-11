import React from 'react';
import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';
import { select, selectAll } from 'd3-selection';
import '../index.css';
import { axisLeft } from 'd3-axis';
import { format } from 'd3-format';

class BarGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      colors: {
        'Strongly Disagree': '#00BF6F',
        'Disagree': '#507CB6',
        'Neutral': '#F9BE01',
        'Agree': '#6BC8CD',
        'Strongly Agree': '#FF8B4F'
      }
    }
    this.createBarGraph = this.createBarGraph.bind(this);
  }

  componentDidMount() {
    this.createBarGraph();
  }

  componentDidUpdate() {
    this.createBarGraph();
  }

  createBarGraph() {
    const node = this.node;
    var height = 241;
    var padding = 50;
    var paddingTop = 20;
    const dataMax = max(this.props.data, function(d) {
      return d.value;
    });
    const yScale = scaleLinear()
                    .domain([0, dataMax])
                    .range([height, 0 + paddingTop])
                  

    
    var xScale = scaleBand()
                  .domain(["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"])
                  .range([0, 548 - padding]) 
                  .paddingOuter(0.5)
                  

    var yAxis = axisLeft()
                  .scale(yScale)
                  .ticks(4, ".0s")


    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
    
    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()
    
    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', d => this.state.colors[d.key])
      .attr('x', (d,i) => xScale(d.key) + padding)
      .attr('y', d => yScale(d.value) - 5)
      .attr('height', d => height - yScale(d.value))
      .attr('width', 60)

    select(node)
      .append("g")
      .call(yAxis)
      .attr("transform", "translate(" + padding + ", -" + 5+")")
      .classed("yAxis", true)

    // selectAll("text")
    //   .attr("fill", '#AEAEAE')

    // selectAll("line")
    //   .attr("stroke", "#AEAEAE")
    
    // selectAll("path")
    //   .attr("stroke", "#AEAEAE")
  }

  render() {
    return (
      <svg ref={node => this.node = node} width={548} height={241}></svg>  
    )
  }
}

export default BarGraph;

