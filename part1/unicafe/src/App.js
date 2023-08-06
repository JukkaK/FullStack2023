import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>      
      <button onClick={() => {
        setGood(good + 1);
        setTotal(total + 1);
      } } 
      > good
      </button>    
      <button onClick={() => {
        setNeutral(neutral + 1);
        setTotal(total + 1);
      } } 
      > neutral
      </button>     
      <button onClick={() => {
        setBad(bad + 1);
        setTotal(total + 1);
      } } 
      > bad
      </button>   
      <h1>statistics</h1>
      <p><b>good</b> {good}</p>
      <p><b>neutral</b> {neutral}</p>
      <p><b>bad</b> {bad}</p>
      <p><b>all</b> {total}</p>
      <p><b>average</b> {good-bad/total} </p>
      <p><b>positive</b> {good*100/total}</p>
    </div>  
    )
}

export default App