import Course from './components/Course'
import { useState } from 'react'

const App = (props) => {
  const [actualCourses, setCourse] = useState(props.courses)
  const [newCourse, setNewCourse] = useState(' a new Course...')

  const handleCourseChange = (event) => {
    console.log(event.target.value)
    setNewCourse(event.target.value)
  }

  const addCourse = (event) => {
    event.preventDefault()
    setCourse(actualCourses.concat({name: newCourse, id:actualCourses.at(-1).id++, parts: []}))
    console.log('button clicked', event.target)
  }

  return (
    // <div>
    //   <Course course={courses[1]} />
    // </div>
    <div>
      <h1> Courses </h1>
      {actualCourses.map(course => (
        <Course key={course.id} course={course} />
      ))}

      <form onSubmit={addCourse}>
        <input value={newCourse} onChange={handleCourseChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App;