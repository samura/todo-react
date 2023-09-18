import './App.css'
import AddToDo from './components/AddToDo'
import Counter from './components/Counter'
import Tabs from './components/Tabs'
import ToDos from './components/ToDos'

function App() {
  // TODO set a header, sidebar navigation and main content (mostly CSS task)

 return (
  <main>
    <header>
      <h2>My TODO</h2>
    </header>
    <aside>
      <Tabs/>
      <Counter />
    </aside>
    <section>
      <AddToDo/>
      <ToDos/>
    </section>
  </main>
 )
}
export default App








