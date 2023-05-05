import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import todosStore from '../../store/todosStore'
function CreateToDo() {
    const [description, setDescription] = useState('')

    function addTask(description: string) {
        todosStore.addTodo(description)
        setDescription('')
    }

    return (
        <div className="add_task">
            <input
                type="text"
                className="add_input"
                placeholder="Add Task"
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                value={description}
                onKeyPress={(e) => {
                    e.key === 'Enter' && addTask(description)
                }}
            />

            <button
                className="addButton"
                onClick={() => {
                    addTask(description)
                }}
            >
                <BsPlus size={20} />
            </button>
        </div>
    )
}

export default CreateToDo
