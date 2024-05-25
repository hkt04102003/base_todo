import "./model.css";
import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, editToDo } from "@/app/redux/actions";
export default function Model({updateEditCheck,textInput,editText ,editId, onCancel }) {
  const [textModel, setTextModel] = useState(textInput);
  const dispatch = useDispatch()
  const id = useId()
  
  const handleCancel = () => {
    onCancel();
  };
  const handleToDo = () => {
    
    switch (editText) {
      case 'toDoAdd':
        dispatch(addToDo({
          id : id,
          name : textModel,
          completed : false,
        }));
        break;
      case 'toDoEdit':
        dispatch(editToDo({
          id : editId,
          name : textModel,
          completed : updateEditCheck,
        }))
      default:
        break;
    }
    onCancel();
  }

  const handleChange = (e) => {
    setTextModel(e.target.value);
  };
  return (
    <div className="model">
      <div className="model__box">
        <h4>NEW NOTE</h4>
        <input
          type="text"
          value={textModel}
          className="model__input"
          onChange={handleChange}
        />
        <div className="model__button">
          <button
            type="button"
            className="model__cancel"
            onClick={handleCancel}
          >
            CANCEL
          </button>
          <button type="button" className="model__apply" onClick={handleToDo}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
