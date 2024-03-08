import {useState} from "react";

function ToDoList() {
    const [newTask, setNewTask] = useState('')

    function handleInputChnage() {

    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text"
                       placeholder={'Enter a task'}
                       value={newTask}
                       onChange={handleInputChnage}
                />
            </div>
        </div>
    )
}

export default ToDoList