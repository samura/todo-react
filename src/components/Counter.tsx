import {useState} from "react"

const Counter = () => {
  // TODO fix and optimize the component below

  const [distractions, setDistractions] = useState(2)

  const addDistraction = () => {
    // do some other logic
    // ...

    // increment the counter by one
    setDistractions(distractions++)
  }

  return (
    <>
    <h3>Total Distractions: {distractions}</h3>
      <button onClick={() => addDistraction()}>Increment</button>
    </>
  )
}

export default Counter