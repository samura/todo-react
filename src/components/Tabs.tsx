import {Link} from "react-router-dom"

const Tabs = () => {
  // TODO handle navigation / filtering 

  return (
        <nav>
            <Link className="active" to="/">All</Link>
            <Link className="" to="/">Active</Link>
            <Link className="" to="/">Completed</Link>
        </nav>
  )
}

export default Tabs