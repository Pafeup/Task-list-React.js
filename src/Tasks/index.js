import "./style.css"

const Tasks = (props) => (
  <ul className="taskList">
    {props.tasks.map(task => (
      <li
        className={`taskList__item${props.hideDoneTasks && task.done
          ? " taskList__item--hidden"
          : ""}`}
      >
        <button className="taskList__button">
          {task.done ? "✓" : ""}
        </button>
        <span className={`${task.done ? "taskList__done" : ""}`}>
          {task.content}
        </span>
        <button className="taskList__button taskList__button--remove">
          🗑</button>
      </li>
    ))}
  </ul>
)

export default Tasks