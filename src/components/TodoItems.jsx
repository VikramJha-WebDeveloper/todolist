import styles from "./TodoItems.module.css";
import { MdDelete } from "react-icons/md";

let TodoItems = ({ newItem, deleteItem }) => {
  return (
    <div>
      <ul className={`list-group mt-3 ${styles.list} p-3 bg-primary`}>
        {newItem.map((i, index) => (
          <li
            key={index}
            className="list-group-item d-flex align-items-center bg-warning mb-2 rounded border-white border-2"
          >
            <div className={`${styles.serialNo} bg-primary rounded me-3`}>
              {index + 1}.
            </div>
            {i}
            <button
              className="btn btn-danger ms-auto"
              onClick={() => deleteItem(i)}
            >
              <MdDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItems;
