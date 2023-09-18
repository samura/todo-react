import {useState} from "react"

const AddToDo = () => {
    const [toDo,setToDo] = useState("")

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    // TODO store the new todo

    // clear the input
    setToDo("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={toDo} onChange={(e)=>setToDo(e.target.value)}/>
        <button type="submit" >Add</button>
    </form>
  )
}

export default AddToDo