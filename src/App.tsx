import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  return (
    <div className="p-3 m-3">
      <div className="flex flex-col cursor-pointer w-fit">
        {tasks.map((task, index) => (
          <div>
            <a onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>
              {task}
            </a>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTasks([...tasks, input]);
          setInput("");
        }}
      >
        <input
          type="text"
          className="border mr-2 p-1 mt-3"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit" className="border p-1">
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
