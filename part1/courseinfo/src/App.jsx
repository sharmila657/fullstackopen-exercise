import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content ourcontent={part1} secondcontent={exercises1} thirdContent = {part2} fourthContent ={exercises2} fifthContent ={part3} lastContent ={exercises3} />
      
      <Total first={exercises1} second={exercises2} third={exercises3} /> 
    </div>
  )
}

export default App