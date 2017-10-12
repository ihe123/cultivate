import React from 'react';
import Tab from './Tab.jsx'

class TabsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Collaborators",
      activeTabId: 0,
      data: [
        {id: 0, name: "Collaborators"},
        {id: 1, name: "Conversations"},
        {id: 2, name: "Channels"},
        {id: 3, name: "Insights"},
        {id: 4, name: "Alerts"},
        {id: 5, name: "Bias"},
        {id: 6, name: "Reports"}
    ]
    };

    this.setActiveTab = this.setActiveTab.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  componentDidMount() {
    this.setActiveTab(this.state.activeTabId);
  }

  isActive = (id) => {
    return this.state.activeTab === id;
  }

  setActiveTab = (selectedTabId) => {
    this.setState({
      activeTab: selectedTabId
    })
  };

  render() {
    return (
      <div className="tabs">
        {this.state.data.map(function(tab, i) {
          return <Tab key={i} 
          content={tab.name}
          isActive={this.isActive(tab.id)}
          onActiveTab={this.setActiveTab.bind(this,tab.id)} />
        }, this)}
      </div>
    )
  }
}
export default TabsMenu;