import React from "react";

interface TaskFormProps {
  submitForm: (event: React.SubmitEvent<HTMLFormElement>) => void;
  changeForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const TaskForm = ({ submitForm, changeForm, value }: TaskFormProps) => {
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        name="text"
        id="text"
        onChange={changeForm}
        value={value}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
