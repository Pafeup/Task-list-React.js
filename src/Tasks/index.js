import { List, Item, Content, Button } from "./styled"

const Tasks = ({ hideDone, tasks, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={hideDone && task.done}
      >
        <Button
          toggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
)

export default Tasks