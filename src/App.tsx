import { TaskForm } from "./components/taskForm"
import { TaskList } from "./components/taskList"
import './index.css'

function App() {

  return (
<div className="bg-slate-800 flex items-center justify-center min-h-screen">
  <div className="flex flex-col md:flex-row bg-white w-full max-w-screen-lg h-2/3 md:h-4/5 rounded-lg shadow-lg overflow-hidden">
    <div className="w-full md:w-1/3 bg-gray-100 p-6 border-b md:border-b-0 md:border-r border-gray-300">
      <h2 className="text-xl font-bold mb-4">Create Task</h2>
      <TaskForm />
    </div>

    <div className="w-full md:w-2/3 p-6 overflow-y-auto 	 md:h-96 lg:h-[500px]">
    <h2 className="text-xl font-bold mb-4 sticky top-0 bg-white z-10 p-4 border-b border-gray-300 shadow">
  Task List
</h2>
 <TaskList />
</div>

  </div>
</div>

  )
}

export default App
