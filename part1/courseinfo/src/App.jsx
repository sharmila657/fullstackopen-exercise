import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name:'Fundamentals of React',
  exercises :10
  }

  const part2 = {
    name:'Using props to pass data',
  exercises : 7
  }
  const part3 = {
    name:'State of a component',
  exercises : 14
  }

  return (
    <div>
      <Header course={course} />
      <Content ourcontent={part1} secondcontent={exercises1} thirdContent = {part2} fourthContent ={exercises2} fifthContent ={part3} lastContent ={exercises3} />
      
      <Total first={exercises1} second={exercises2} third={exercises3} /> 
    </div>
  )
}

export default App