import { useState } from 'react'


const RandomNumber = (max) => 
{
  return(Math.floor(Math.random() * max))
}

const handleVotes = (index, votes, setVotes) =>
{
  const copyVotes = [...votes]
  copyVotes[index] += 1
  setVotes(copyVotes)
}
const App = () => {
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

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

  let rand_num = RandomNumber(anecdotes.length);

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <button onClick={() => setSelected(rand_num)}>New Anecdote</button>
      <button onClick={() => handleVotes(selected, votes, setVotes)}>Vote</button>
      <p>Votes: {votes[selected]}</p>
    </div>
  )
}

export default App