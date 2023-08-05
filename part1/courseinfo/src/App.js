const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course}/>
    </div>

  )
}

const Header = (props) => {
    return (
      <div>  
        <p>Course: {props.course.name}</p>
      </div>
    )
}

const Content = (props) => {
  console.log(props.parts[0])
  return (
    <div>
    <Part part={props.parts.parts[0]} /> 
    <Part part={props.parts.parts[1]} /> 
    <Part part={props.parts.parts[2]} /> 
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (        
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <div>

      <p>Number of exercises: {props.parts.parts[0].exercises+props.parts.parts[1].exercises+props.parts.parts[2].exercises}</p>
    </div>
  )
}


export default App