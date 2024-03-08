import {useState} from "react";

function ToDoList() {
    const [newTask, setNewTask] = useState('')


    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder={'Enter a task'} value={newTask}/>
            </div>
        </div>
    )
}

export default ToDoList