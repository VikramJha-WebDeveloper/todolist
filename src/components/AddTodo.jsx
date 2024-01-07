import { FaPlus } from "react-icons/fa";

let AddTodo = ({ inputChange, add, inputValue, keyDownEventHandler }) => {
  return (
    <div className="d-flex">
      <input
        type="text"
        className="form-control border-dark"
        onChange={inputChange}
        value={inputValue}
        placeholder="Add Item here...🖉"
        onKeyDown={keyDownEventHandler}
      ></input>
      <button className="btn btn-primary ms-3" onClick={add}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AddTodo;
