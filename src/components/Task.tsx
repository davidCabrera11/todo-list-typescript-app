interface TaskProps {
  task: string;
  index: number;
  deleteTask: (index: number) => void;
}

export const Task = ({ task, index, deleteTask }: TaskProps) => {
  return (
    <div className="card-item">
      <p>{task}</p>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
};
