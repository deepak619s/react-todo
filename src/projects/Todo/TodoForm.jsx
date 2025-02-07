import { useState } from "react";

export const TodoForm = ({onaddTodo}) => {
    const [ inputValue, setInputValue ] = useState({});
    
    const handleInputChange = (value) => {
        setInputValue({ id:value, content:value, checked:false });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onaddTodo(inputValue);
        
        setInputValue({ id:"", content:"", checked:false });
    };

    return(
       <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete="off" value={inputValue.content} onChange={(event) => handleInputChange(event.target.value)} />
                </div>

                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>
    );
};