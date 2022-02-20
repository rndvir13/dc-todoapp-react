import { atom } from "jotai";

const createTaskAtom = (title) =>
  atom({
    id: new Date(),
    title,
    done: false,
  });

export const tasksAtom = atom([]);

export const addTaskAtom = atom(null, (_get, set, taskTitle) =>
  set(tasksAtom, (prev) => [...prev, createTaskAtom(taskTitle)])
);

export const toggleTaskAtom = atom(null, (_get, set, taskAtom) =>
  set(taskAtom, (prev) => ({
    ...prev,
    done: !prev.done,
  }))
);

export const removeTaskAtom = atom(null, (_get, set, taskAtomToRemove) =>
  set(tasksAtom, (prev) =>
    prev.filter((taskAtom) => taskAtom !== taskAtomToRemove)
  )
);

export const deleteCompletedAtom = atom(null, (get, set) => {
  set(
    tasksAtom,
    get(tasksAtom).filter((taskAtom) => !get(taskAtom).done)
  );
});

export const filterAtom = atom("all");

export const filteredTasksAtom = atom((get) => {
  const filter = get(filterAtom);
  if (filter === "active")
    return get(tasksAtom).filter((taskAtom) => !get(taskAtom).done);
  if (filter === "completed")
    return get(tasksAtom).filter((taskAtom) => get(taskAtom).done);
  return get(tasksAtom);
});
