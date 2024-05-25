export const addToDo = (data)=>{
    return {
        type : 'toDo/add',
        payload : data,
    }
};
export const deleteToDo = (data)=>{
    return {
        type : 'toDo/delete',
        payload : data,
    }
}
export const editToDo = (data)=>{
    return {
        type : 'toDo/edit',
        payload : data,
    }
}
export const searchToDo = (data)=>{
    return {
        type : 'toDo/search',
        payload : data,
    }
}
export const checkToDo = (status)=>{
    return {
        type : 'toDo/checklist',
        payload : status,
    }
}
export const completeToDo = (id)=>{
    return {
        type : 'toDo/complete',
        payload : id,
    }
}