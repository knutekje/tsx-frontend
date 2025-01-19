import React from 'react';
import { taskType } from '../types';

interface TaskListItemProps {
    task: taskType;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {

    function handleComplete(id: number){
        console.log(id)

    }

    function handleDelete(id: number){
        console.log(id)
    }
    return  (
        <div className="rounded-lg overflow-hidden shadow-lg bg-slate-300 w-full my-5">
        {/* Image Section */}
        <img
          src="https://random.imagecdn.app/500/150"
          alt="Task"
          className="w-full h-48 object-cover"
        />
        
        {/* Task Details */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{task.title}</div>
          <p className="text-gray-700 text-base">{task.description}</p>
        </div>
      
        {/* Task Metadata */}
        <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {task.status}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </div>
      
        {/* Action Buttons */}
        <div className="px-6 pt-4 pb-4 flex justify-end space-x-4">
          <button
            onClick={() => handleComplete(task.id)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Completed
          </button>
          <button
            onClick={() => handleDelete(task.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
      
      
    )
}
export default TaskListItem