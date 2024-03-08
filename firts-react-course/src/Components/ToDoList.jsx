import {useState} from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleInputChange() {

    }

    function addTask() {

    }

    return (
        <div className="to-do-list">

            <h1>To-Do-List</h1>

            <div>
                <input type="text"
                       placeholder={'Enter a task'}
                       value={newTask}
                       onChange={handleInputChange}
                />
                <button className={'add-button'} onClick={addTask}>Add</button>
            </div>

            <ol>
                {
                    tasks.map((task, index) =>
                        <li key={index}>

                        </li>
                    )
                }
            </ol>
        </div>
    )
}

export default ToDoList