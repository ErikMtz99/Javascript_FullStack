
const Header = (props) => {
  
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part = {props.p1} exercise = {props.ex1}/>
      <Part part = {props.p2} exercise = {props.ex2}/>
      <Part part = {props.p3} exercise = {props.ex3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises: {props.ex1 + props.ex2 + props.ex3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  } 

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content p1 = {part1.name} p2 = {part2.name} p3 = {part3.name} ex1 = {part1.exercises} ex2 = {part2.exercises} ex3 = {part3.exercises}/>
      <Total ex1 ={part1.exercises} ex2 ={part1.exercises} ex3 ={part1.exercises}/>
    </div>
  )
}

export default App