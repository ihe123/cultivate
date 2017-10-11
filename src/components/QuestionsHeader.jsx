import React from 'react';
import Question from './Question.jsx';
import IconRight from './IconRight.jsx';
import IconLeft from './IconLeft.jsx';

class QuestionsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ['You think your opinions matter.']
    }
  }

  render() {
    return (
      <div className="questionsAndSwitches">
        <div className="questions">
          <div className="mainTitle">Individual Question Results</div>
            <div className="mainContent">
              <div className="questionSub">Question:</div>
              <div className="switchQuestions">
                <div><Question questions={this.state.questions}/></div>
            </div>
          </div>
        </div>
        <div className="arrowIcons">
          <div className="leftSwitch pointer hoverColor">
            <IconLeft/>
          </div>
          <div className="rightSwitch pointer hoverColor">
            <IconRight/>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionsHeader;