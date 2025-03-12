import { useState } from 'react'

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

const RandomNumber = (max) => 
{
  return(Math.floor(Math.random() * max))
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <Button handleClick = {() => setSelected(RandomNumber(anecdotes.length))} text="Show Random Anecdote"/>
      <h1>Give Feedback </h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>Statistics</h1>
      <table style={{border: '1px solid black'}}>
        <tbody>
        <tr ><td><StatisticsLine text="good" value = {good} /></td></tr>
        <tr><td><StatisticsLine text="neutral" value = {neutral} /></td></tr>
        <tr><td><StatisticsLine text="bad" value = {bad} /></td></tr>
        <tr><td><StatisticsLine text="average" value = {(good - bad) / (good + neutral + bad)} /></td></tr>
        <tr><td><StatisticsLine text="positive" value = {good / (good + neutral + bad) * 100} /></td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default App