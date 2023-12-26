const Course = ({ course }) => {
  const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>Total of {sum} exercises</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => (
      <Part key={part.name} part={part} />
    ))}
  </>  
  
  const totalOfExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total sum={totalOfExercises} />
      </div>
    );
  }

  export default Course;