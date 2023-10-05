import { useRef, useState } from "react";
import { StyledForm, Button, Input } from "./styled";



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
    <StyledForm className="form" onSubmit={onFromSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        className="form__input newTask"
        type="text"
        placeholder="Co jest do zrobienia?"
      />
      <Button onClick={inputFocus} className="form__button addNewTask">Dodaj zadanie</Button>
    </StyledForm>)
}

export default Form