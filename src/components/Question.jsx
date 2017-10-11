import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="questionBar">
        <div className="question" style={{fontSize:'20px'}}>{this.props.questions}</div> 
      </div>
    ) 
  }
}

export default Question;