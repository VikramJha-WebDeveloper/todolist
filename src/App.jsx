import "./App.css";
import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  let [item, setItem] = useState("");
  let [newItem, setNewItem] = useState([]);
  let inputChange = (e) => {
    setItem(e.target.value);
  };
  let add = () => {
    setNewItem([...newItem, item]);
    setItem("");
  };

  let keyDownEventHandler = (e) => {
    if (e.key === "Enter") {
      setNewItem([...newItem, item]);
      setItem("");
    }
  };

  let deleteItem = (i) => {
    let items = newItem.filter((x) => {
      return x !== i;
    });
    setNewItem(items);
  };

  return (
    <div className="bg-primary-subtle pb-5 app">
      <div className="container">
        <AppName />
        <AddTodo
          inputChange={inputChange}
          add={add}
          inputValue={item}
          keyDownEventHandler={keyDownEventHandler}
        />
        <TodoItems newItem={newItem} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
