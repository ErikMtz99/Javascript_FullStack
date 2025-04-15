
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

  export default Course;