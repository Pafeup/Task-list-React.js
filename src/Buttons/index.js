import "./style.css"
import { ButtonsArea, StyledButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  tasks.length > 0 && (
    <ButtonsArea>
      <StyledButtons onClick={toggleHideDone} className="buttons">
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
      </StyledButtons>
      <StyledButtons
        onClick={setAllDone}
        className="buttons"
        disabled={tasks.every(({ done }) => done)}>
        Ukończ wszystkie
      </StyledButtons>
    </ButtonsArea>
  )

);

export default Buttons