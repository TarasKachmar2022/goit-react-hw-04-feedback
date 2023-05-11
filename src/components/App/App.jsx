import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const count = Object.values(this.state);
    const result = count.reduce((acc, total) => acc + total, 0);

    return result;
  };

  countPositiveFeedbackPercentage = good => {
    return Number(((good / this.countTotalFeedback()) * 100).toFixed(0));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const optionsState = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsState}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage(good)}
        />
        {/* <GlobalStyle /> */}
      </Section>
    );
  }
}

export default App;
