import "./style.css"

const Tasks = ({ hideDone, tasks, removeTask, toggleTaskDone }) => (
  <ul className="taskList">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`taskList__item${hideDone && task.done
          ? " taskList__item--hidden"
          : ""}`}
      >
        <button
          className="taskList__button"
          onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </button>
        <span className={`${task.done ? "taskList__done" : ""}`}>
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="taskList__button taskList__button--remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
)

export default Tasks