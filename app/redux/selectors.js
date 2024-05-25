import { createSelector } from "reselect";
export const toDoListSelector = (state) => state.todoList;
export const searchListSelector = (state) => state.filters.search;
export const checkListSelector = (state) => state.filters.status;
export const toDoRemainingSelect = createSelector(
  toDoListSelector,
  checkListSelector,
  searchListSelector,
  (toDoList,checkList, searchList) => {
    
    return toDoList.filter((todo)=>{
      if(checkList=== 'All'){
        return todo.name.includes(searchList)
      }
      // && checkList === 'Completed' ? todo.completed : !todo.completed
      return todo.name.includes(searchList) && (checkList === 'Completed' ? todo.completed : !todo.completed)
    })
  }
);
