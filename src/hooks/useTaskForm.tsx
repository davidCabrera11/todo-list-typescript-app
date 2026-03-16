import { useState } from "react";

export const useTaskForm = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "") return;

    setTasks([...tasks, value]);
    setValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, task) => task !== index));
  };

  return {
    value,
    tasks,
    handleSubmit,
    handleChange,
    handleDeleteTask,
  };
};
