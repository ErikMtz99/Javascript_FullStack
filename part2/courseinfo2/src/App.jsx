
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
  // Using reduce to sum the exercises
  // let total = props.course.parts.reduce(
  //   (accumulator, currentValue) => {
  //     return accumulator + currentValue.exercises;
  //   },
  //   0
  // )
  let total = props.course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);
  return (
    <>
      <p>Number of exercises: {total}</p>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    // <div>
    //   <Course course={courses[1]} />
    // </div>
    <div>
      <h1> Courses </h1>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

export default App;