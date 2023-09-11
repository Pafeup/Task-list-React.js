import { useRef, useState } from "react";
import "./style.css";



const Form = ({ addNewTask }) => {
  const inputRef = useRef(null);

  const inputFocus = () => {
    inputRef.current.focus();
  };

  const [newTaskContent, setNewTaskContent] = useState("");

  const trimmedNewTaskContent = newTaskContent.trim();

  const onFromSubmit = (event) => {
    event.preventDefault();
    if (trimmedNewTaskContent !== "") {
      addNewTask(trimmedNewTaskContent);
      setNewTaskContent("")
    };

  };

  return (
    <form className="form" onSubmit={onFromSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        className="form__input newTask"
        type="text"
        placeholder="Co jest do zrobienia?"
      />
      <button onClick={inputFocus} className="form__button addNewTask">Dodaj zadanie</button>
    </form>)
}

export default Form