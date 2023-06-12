const Header = (props) => {

  console.log(props)
  return <h1>{props.course.name}</h1>
}


const Content = ({ parts }) => {

  return (
    <>
      {parts.parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  )
}

const Total = ({ parts }) => {
  var total_amount = 0;
  parts.parts.map((part) => (
    total_amount += part.exercises
  ))
  return (
    <p>
      Number of exercises {total_amount}
    </p>
  )
}

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
      <Header course={course}  />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

export default App