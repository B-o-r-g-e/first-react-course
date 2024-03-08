import {useState} from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(['Joy'])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        newTask.trim() !== '' &&
        setTasks(t =>[...t, newTask])
        setNewTask("")
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    function moveTaskUp() {

    }

    function moveTaskDown() {

    }

    return (
        <div className="to-do-list">

            <h1>To-Do-List</h1>

            <div>
                <input type="text"
                       placeholder={"Enter a task"}
                       value={newTask}
                       onChange={handleInputChange}
                />
                <button className={'add-button'} onClick={addTask}>Add</button>
            </div>

            <ul>
                {
                    tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() =>deleteTask(index)}>Delete</button>
                            <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                            <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ToDoList