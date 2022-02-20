import { useAtom } from "jotai";
import { useCallback, useState } from "react";

import {
  addTaskAtom,
  removeTaskAtom,
  toggleTaskAtom,
  deleteCompletedAtom,
  filteredTasksAtom,
} from "../model";

export const AddTaskForm = () => {
  const [value, setValue] = useState("");
  const [, addTask] = useAtom(addTaskAtom);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className="flex gap-6" onSubmit={handleSubmit}>
      <input
        className="grow rounded-xl border-[1px] border-neutral-350 px-3 py-5"
        placeholder="add details"
        value={value}
        onChange={handleInput}
      />
      <button
        className="rounded-[12px] bg-accent px-10 py-5 text-white shadow shadow-accent-light"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export const DeleteCompletedButton = () => {
  const [, deleteCompleted] = useAtom(deleteCompletedAtom);

  return (
    <button
      className="ml-auto flex items-center gap-1.5 rounded-[4px] bg-danger px-7 py-3 text-white"
      onClick={deleteCompleted}
    >
      <span className="material-icons-round">delete_outline</span>
      <span>delete all</span>
    </button>
  );
};

export const Task = ({ taskAtom }) => {
  const [task] = useAtom(taskAtom);
  const [, toggleTask] = useAtom(toggleTaskAtom);
  const [, removeTask] = useAtom(removeTaskAtom);

  const handleToggle = useCallback(() => {
    toggleTask(taskAtom);
  }, [taskAtom, toggleTask]);

  const handleRemove = useCallback(() => {
    removeTask(taskAtom);
  }, [taskAtom, removeTask]);

  return (
    <li className="flex items-center gap-2">
      <button
        className={`flex h-6 w-6 items-center justify-center rounded-[4px] border-[1px] text-white ${
          task.done ? "border-accent bg-accent" : "border-neutral-450"
        }`}
        onClick={handleToggle}
      >
        {task.done && <span className="material-icons-round">check</span>}
      </button>
      <div
        className={`grow text-lg font-semibold ${
          task.done ? "text-neutral-700 line-through" : "text-black"
        }`}
      >
        {task.title}
      </div>
      <button className="text-neutral-350" onClick={handleRemove}>
        <span className="material-icons-round">delete_outline</span>
      </button>
    </li>
  );
};

export const TasksList = () => {
  const [tasks] = useAtom(filteredTasksAtom);
  return (
    <ul>
      {tasks.map((taskAtom) => (
        <Task key={taskAtom} taskAtom={taskAtom} />
      ))}
    </ul>
  );
};
