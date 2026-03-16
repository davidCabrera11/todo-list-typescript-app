import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { useTaskForm } from "./hooks/useTaskForm";

function App() {
  const { value, tasks, handleSubmit, handleChange, handleDeleteTask } =
    useTaskForm();

  return (
    <>
      <h1>To-do List</h1>
      <div className="container">
        <TaskForm
          submitForm={handleSubmit}
          changeForm={handleChange}
          value={value}
        />
        <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
      </div>
    </>
  );
}

export default App;
