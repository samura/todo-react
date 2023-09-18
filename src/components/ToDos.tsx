import { ToDo } from "../store/ToDo"

const ToDos = () => {
  // TODO fetch the todo list
  // TODO handle toggle item
  // TODO handle delete item
  // TODO handle the filtering based on the URL

  const handleToggleToDo = (id:string) => {
  }

  const deleteToDo = (id:string) => {
  }

  const filterToDo:ToDo[] = []

  return (
    <>
      <ul className="main-task">
        {filterToDo.map((todo)=> (
          <li>
            <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=>{handleToggleToDo(todo.id)}}/>
            <label htmlFor={`todo-${todo.id}`}> {todo.task}</label>
            {todo.completed && (
              <button onClick={()=>{deleteToDo(todo.id)}}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ToDos