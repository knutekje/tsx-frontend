import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../main";
import TaskListItem from "./taskListItem";

export const TaskList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      return await response.json();
    },
  });

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
 /*  <div className="bg-white w-full max-h-96 rounded-lg shadow-md overflow-y-auto p-4">

    {data.map((task: any) => (
      <TaskListItem key={task.id} task={task} />
    ))}
  </div> */
        <div className="gap-1">
            {data.map((task: any) => (
            <TaskListItem key={task.id} task={task} />
          ))}
          </div>
  
  );
};
