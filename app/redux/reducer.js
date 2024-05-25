const initState = {
  filters: {
    search: "",
    status: "All",
  },
  todoList: [
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "toDo/add":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
      break;
    case "toDo/delete":
      const newToDoList = [...state.todoList];
      const todoListUpdated = newToDoList.filter(
        (todoList) => todoList.id !== action.payload
      );
      return {
        ...state,
        todoList: [...todoListUpdated],
      };
    case "toDo/edit":
      console.log(action.payload);
      const copyToDoList = [...state.todoList];
      const newList = copyToDoList.map((todoList) =>
        todoList.id == action.payload.id
          ? { ...todoList, ...action.payload }
          : todoList
      );
      return {
        ...state,
        todoList : [...newList]
      }
    case 'toDo/search':

      return {
        ...state,
        filters : {
          ...state.filters,
          search : action.payload,
        }
      }
    case 'toDo/checklist':
      return {
        ...state,
        filters : {
          ...state.filters,
          status : action.payload,
        }
      }
    case 'toDo/complete':
      const copyCompleteList = [...state.todoList];
      const newCompleteList = copyCompleteList.map((todo) => 
        todo.id === action.payload
          ? { ...todo,completed: !todo.completed }
          : todo
      );
      return {
        ...state,
        todoList: newCompleteList
      };
    default:
      return state;
  }
};
export default rootReducer;
