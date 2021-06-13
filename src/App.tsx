import './App.css'
import Todos from '../src/components/Todos'
import NewTodo from '../src/components/NewTodo'
import TodosContextProvider from './store/todos-context'

function App () {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  )
}

export default App
