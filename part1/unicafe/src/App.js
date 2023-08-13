import { useState } from 'react'

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
      <p><b>average</b> {props.average}</p>
      <p><b>postitive</b> {props.positive} %</p>
  </div>
)

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const average = (good*1 + neutral*0 + bad*-1)/total
  const positive = good*100/total

  return (
    <div>
      <h1>give feedback</h1>      
      <button onClick={() => {
        setGood(good + 1);
        setTotal(total + 1);
        console.log('total', total)
      } } 
      > good
      </button>    
      <button onClick={() => {
        setNeutral(neutral + 1);
        setTotal(total + 1);
        console.log('total', total)
      } } 
      > neutral
      </button>     
      <button onClick={() => {
        setBad(bad + 1);
        setTotal(total + 1);
        console.log('total', total)
      } } 
      > bad
      </button>   
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