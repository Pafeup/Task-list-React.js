import "./style.css";

const Form = () => (
    <form className="form form">
          <input
            className="form__input newTask"
            type="text"
            placeholder="Co jest do zrobienia?"
          />
          <button className="form__button addNewTask">Dodaj zadanie</button>
        </form>
)

export default Form