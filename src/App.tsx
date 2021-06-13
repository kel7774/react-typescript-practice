import './App.css'
import Todos from '../src/components/Todos'
import Todo from './models/todo'
function App () {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ]
  return (
    <div className='App'>
      <Todos items={todos} />
    </div>
  )
}

export default App
