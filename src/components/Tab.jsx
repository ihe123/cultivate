import React from 'react';

class Tab extends React.Component {
  render() {
    return <div className={this.props.isActive ? 'current pointer': 'pointer'}
    onClick={this.props.onActiveTab}
    >{this.props.content}</div>
  }
}

export default Tab;