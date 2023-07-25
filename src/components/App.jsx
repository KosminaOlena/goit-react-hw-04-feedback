import { useState } from 'react'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Section from './Section/Section'
import Notification from './Notification/Notification'
import { Container } from './App.styled'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = (key) =>{
    switch (key) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default: return;     
    }

  }
  const countTotalFeedback = () => {
      return good + neutral + bad;
      

  }
  const totalFeedback = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
    
  }
  const stateNames = {good, neutral, bad};

    return (
      <Container>
        <Section title = 'Please leave feedback'>
        <FeedbackOptions 
        options={stateNames}
        onLeaveFeedback={onLeaveFeedback}
        />
        </Section>
  
        <Section title = 'Statistics'>
          {countTotalFeedback()?
          <Statistics
             good={good}
             neutral={neutral}
             bad={bad}
             total={countTotalFeedback}
             positivePercentage={countPositiveFeedbackPercentage}
          />:<Notification 
            message="There is no feedback"
      />}
        </Section>
  
      </Container>
    )
}

export default App
