import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const Statistics = (props) => {

if(props.total == 0){
  return(
    <div>
      <p>no feedback given</p>
    </div>
  )
}

return(
  <div>
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
  </div>
)

}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)  
  const total = good + bad + neutral
  const average = (good*1 + neutral*0 + bad*-1)/total
  const positive = good*100/total

  return (
    <div>
      <h1>give feedback</h1>     
      <Button handleClick={() => setGood(good + 1)} name="Good"/>
      <Button handleClick={() => setBad(bad + 1)} name="Bad"/>
      <Button handleClick={() => setNeutral(neutral + 1)} name="Neutral"/>
      <h1>statistics</h1>
      <p><b>good</b> {good}</p>
      <p><b>neutral</b> {neutral}</p>
      <p><b>bad</b> {bad}</p>
      <p><b>all</b> {total}</p>
      <Statistics total={total} average={average} positive={positive} />      
    </div>      
    )
}

export default App