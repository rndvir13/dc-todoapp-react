import { useAtom } from "jotai";

import { Filter } from "../features/filter";

import {
  filterAtom,
  DeleteCompletedButton,
  AddTaskForm,
  TasksList,
} from "../entities/task";

function App() {
  const [filter] = useAtom(filterAtom);

  return (
    <div className="mx-auto max-w-[608px] font-montseratt">
      <header className="my-8 text-center font-raleway text-4xl font-bold text-neutral-700">
        #todo
      </header>
      <div className="space-y-4">
        <Filter />
        {filter !== "completed" && <AddTaskForm />}
        <TasksList />
        {filter === "completed" && <DeleteCompletedButton />}
      </div>
    </div>
  );
}

export default App;
