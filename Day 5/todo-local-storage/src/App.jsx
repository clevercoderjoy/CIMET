import AddTodoForm from './components/addTodoForm/AddTodoForm';
import Header from './components/header/Header';
import Todos from './components/todos/Todos';
import { TaskProvider } from './context/TaskContext';

function App() {

  return (
    <>
      <TaskProvider>
        <Header />
        <AddTodoForm />
        <Todos />
      </TaskProvider>
    </>
  )
}

export default App
