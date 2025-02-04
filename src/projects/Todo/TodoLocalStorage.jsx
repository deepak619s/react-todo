const todoKey = "reactTodo";

export const getLocalSrorageTodoData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if(!rawTodos) return [];
    return JSON.parse(rawTodos);
};


export const setLocalSrorageTodoData = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
};