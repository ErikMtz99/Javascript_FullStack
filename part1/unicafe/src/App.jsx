import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = (props) => {
  const text = props.text
  const value = props.value
  return(
    <p>{text}: {value}</p>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback </h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>Statistics</h1>
      <StatisticsLine text="good" value = {good} />
      <StatisticsLine text="neutral" value = {neutral} />
      <StatisticsLine text="bad" value = {bad} />
      <StatisticsLine text="average" value = {(good - bad) / (good + neutral + bad)} />
      <StatisticsLine text="positive" value = {good / (good + neutral + bad) * 100} />
    </div>
  )
}

export default App