import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {

    const title1 = 'give feedback';
    const title2 = 'statistics';

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    let check = good || neutral || bad;

    const addGood = () => {
      setGood(good + 2);
    }
    const addNeutral = () => {
      setNeutral(neutral + 2);
    }
    const addBad = () => {
      setBad(bad + 3);
    }

    return (
      <div>
        <Header title1 = {title1} />
        <Button someFunction={addGood} text="good"/>
        <Button someFunction={addNeutral} text="neutral"/>
        <Button someFunction={addBad} text="bad"/>
        <Header title2 = {title2} />
        {
          check ? (
            <Statistics good={good} neutral={neutral} bad={bad} />
          ) : <p>'No Feedback Yet!'</p>
        }

        
      </div>
    )
}

export default App