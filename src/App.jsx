import './App.css'

import TodoTitle from './components/TodoTitle'
import TodoList from './components/TodoList'

function App() {

  return (
    <>

    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">

        <TodoTitle />

        <TodoList />

      </div>
    </div>

    </>
  )
}

export default App
