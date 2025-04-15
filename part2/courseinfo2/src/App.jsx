
const Header = (props) => {
  
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
};

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  );
};

const Content = (props) => {
  return ( 
    <>
    {props.course.parts.map(element => (
      <Part key = {element.name} part = {element.name} exercise = {element.exercises}/>
      ))}
    </>
  );
};

const Total = (props) => {
  let sum = 0;
  props.course.parts.forEach(item => {sum = sum + item.exercises; } );
  return (
    <>
      <p>Number of exercises: {sum}</p>
    </>
  );
};

const Course = (props) => {
  return(
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 15,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  };

  return(
    <div>
      <Course course={course} />
    </div> 
    );
}

export default App;