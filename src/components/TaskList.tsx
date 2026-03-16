import { Task } from "./Task";

interface TaskListProps {
  tasks: string[];
  deleteTask: (index: number) => void;
}

export const TaskList = ({ tasks, deleteTask }: TaskListProps) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} deleteTask={deleteTask} />
      ))}
    </>
  );
};
