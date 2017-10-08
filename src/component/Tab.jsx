import React from 'react';
import $ from 'jquery';

class Tab extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <div className={this.props.isActive ? 'current': ''}
    onClick={this.props.onActiveTab}
    >{this.props.content}</div>
  }
}

export default Tab;