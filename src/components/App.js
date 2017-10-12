import React, { Component } from 'react';
import '../App.css';
import Tabs from './Tabs.jsx';
import Header from './Header.jsx';
import SideBar from './SideBar.jsx';
import QuestionsHeader from './QuestionsHeader.jsx';
import Graph from './Graph.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="side">
          <SideBar/>
        </div>
        <div className="headerTab">
          <Header/>
          <Tabs/>
          <QuestionsHeader/>
          <Graph/>
        </div>
      </div>
    );
  }
}

export default App;
