import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFromSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
  }

  return (
    <form className="form" onSubmit={onFromSubmit}>
      <input
        value={newTaskContent}
        onChange={({target}) => setNewTaskContent(target.value)}
        className="form__input newTask"
        type="text"
        placeholder="Co jest do zrobienia?"
      />
      <button className="form__button addNewTask">Dodaj zadanie</button>
    </form>)
}

export default Form