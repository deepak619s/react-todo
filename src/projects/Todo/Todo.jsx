import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoDateTime } from "./TodoDateTime";
import { TodoList } from "./TodoList";
import { getLocalSrorageTodoData, setLocalSrorageTodoData } from "./TodoLocalStorage";


export const Todo = () => {
    const [ task, setTask ] = useState(() => getLocalSrorageTodoData());

    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;

        // ? To check if the input field is empty or not :-
        if(!content) return;

        //? To check if the data is already existing or not :-
        // if(task.includes(inputValue)) return;
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content);

        if(ifTodoContentMatched) return;

        // setTask((prevTask) => [...prevTask, inputValue]);

        // setTask((prevTask) => [...prevTask, {id: id, content: content, checked: checked}]);
        setTask((prevTask) => [...prevTask, {id, content, checked}]);
    };


    //todo add data to localStorage :-
    setLocalSrorageTodoData(task);


    //todo handleDeleteTodo function :-
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    };


    //todo handleClearButton function :-
    const handleClearTodoData = () => {
        setTask([]);
    };

    //todo handleCheckedTodo function :-
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if(curTask.content === content){
                return {...curTask, checked: !curTask.checked};
            }else{
                return curTask;
            }
        });

        setTask(updatedTask);
    };
    
    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDateTime></TodoDateTime>
            </header>

            <TodoForm onaddTodo={handleFormSubmit}></TodoForm>

            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask) => {
                        return(
                            <TodoList key={curTask.id} data={curTask.content} checked={curTask.checked} onHandleDeleteTodo={handleDeleteTodo} onHandleChecked={handleCheckedTodo}></TodoList>
                        );
                    })}
                </ul>
            </section>

            <section style={{margin: "0 46%"}}>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    );
};