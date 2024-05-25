"use client";
import Image from "next/image";
import styles from "./page.module.css";
import moon from "/public/mode.png";
import frame from "/public/Frame6.png";
import transh from "/public/trash-svgrepo-com.png";
import maiLight from "/public/manlight.png";
// import maiDark from "/public/manDark.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toDoRemainingSelect } from "./redux/selectors";
import { deleteToDo, searchToDo, checkToDo,completeToDo } from "./redux/actions";
import Model from "./Component/Model/Model";
export default function Home() {
  const [initialMode, setInitialMode] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState("");
  const toDoList = useSelector(toDoRemainingSelect);
  const [searchText, setSearchText] = useState("");
  const [checkToDoList, setCheckToDoList] = useState("All");
  const [updateEditCheck, setUpdateEditCheck] = useState(false);
  const dispatch = useDispatch();
  let props = {
    updateEditCheck,
    textInput: edit ? textInput : "",
    editText,
    editId,
  };
  const handleMode = () => {
    setInitialMode(true);
    setEdit(false);
    setEditText("toDoAdd");
  };
  const handleCancel = () => {
    setInitialMode(false);
  };
  const handleEdit = (textEdit, id,complete) => {
    setInitialMode(true);
    setTextInput(textEdit);
    setEdit(true);
    setEditId(id);
    setEditText("toDoEdit");
    setUpdateEditCheck(complete)
  };
  const handleDelete = (id) => {
    dispatch(deleteToDo(id));
  };
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(searchToDo(e.target.value));
  };
  const handleCheck = (e) => {
    setCheckToDoList(e.target.value);
    console.log(e.target.value);
    dispatch(checkToDo(e.target.value));
  };
  const handleComplete = (id)=>{
    dispatch(completeToDo(id));
  }
  
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
          <h3 className={styles.title}>TODO LIST</h3>
          <div className={styles.filter}>
            <div className={styles["search-box"]}>
              <input
                type="text"
                className={`${styles.input}`}
                placeholder="Search note..."
                onChange={handleSearch}
                value={searchText}
              />
            </div>
            {/*  */}

            <select
              className={styles["filter_select"]}
              value={checkToDoList}
              onChange={handleCheck}
            >
              <option value="All">All</option>
              <option value="Completed">Complete</option>
              <option value="ToDo">ToDo</option>
            </select>

            {/*  */}
            <button className={styles.darkModeButton}>
              <Image src={moon} width={"100%"} height={"30"} alt="" />
            </button>
          </div>
          {/* render list */}
          <div className={styles.editList}>
            {/*  */}
            {toDoList.length > 0 ? (
              toDoList.map((todo) => (
                <div className={styles["list_Box"]} key={todo.id}>
                  <div className={styles.checkList}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      checked={todo.completed}
                      onChange={()=>handleComplete(todo.id)}
                    />
                    <h4>{todo.name}</h4>
                  </div>
                  <div className={styles.handleList}>
                    <ul>
                      <li>
                        <Image
                          src={frame}
                          width={"100%"}
                          height={"25"}
                          alt=""
                          onClick={() => handleEdit(todo.name, todo.id,todo.completed)}
                        />
                      </li>
                      <li>
                        <Image
                          src={transh}
                          width={"100%"}
                          height={"25"}
                          alt=""
                          onClick={() => handleDelete(todo.id)}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <Image
                src={maiLight}
                width={"100%"}
                height={"250"}
                alt="No todos available"
              />
            )}
          </div>

          <div className={styles["btn-add"]}>
            <button className={styles.add} onClick={handleMode}>
              +
            </button>
          </div>
        </div>
      </div>
      {initialMode && <Model {...props} onCancel={handleCancel}></Model>}
    </>
  );
}
