export default function TaskItem({ task, moveTask, currentList, setCurrentList, nextList, setNextList, buttonLabel, backList, setBackList, backLabel }) {
    return (
      <li>
        <span>{task.content}</span>
        {buttonLabel && (
          <button onClick={() => moveTask(task, currentList, setCurrentList, nextList, setNextList)}>
            {buttonLabel}
          </button>
        )}
        {backLabel && (
          <button onClick={() => moveTask(task, currentList, setCurrentList, backList, setBackList)}>
            {backLabel}
          </button>
        )}
      </li>
    );
  }
  