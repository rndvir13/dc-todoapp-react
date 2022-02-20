import { useAtom } from "jotai";

import { filterAtom } from "../../../entities/task";

export const Filter = () => {
  const activeTabClassNames =
    "relative after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-accent after:rounded-t-[4px]";
  const [filter, setFilter] = useAtom(filterAtom);

  return (
    <div className="grid grid-cols-3 justify-items-center border-b-[1px] border-b-neutral-350 text-sm font-semibold text-neutral-700">
      <button
        onClick={() => setFilter("all")}
        className={`min-w-[89px] py-5 hover:bg-black/10 ${
          filter === "all" && activeTabClassNames
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`min-w-[89px] py-5 hover:bg-black/10 ${
          filter === "active" && activeTabClassNames
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`min-w-[89px] py-5 hover:bg-black/10 ${
          filter === "completed" && activeTabClassNames
        }`}
      >
        Completed
      </button>
    </div>
  );
};
