import Check from './Check'
import { BiTrash } from 'react-icons/bi'
import todosStore from '../../store/todosStore'
import { type ITodos } from '../../types/todos'
import { observer } from 'mobx-react-lite'

const ToDoItem = observer(({ todo }: { todo: ITodos }) => {
    return (
        <div className="todo_item">
            <div
                className="ToDo"
                onClick={() => {
                    todosStore.toggleTodo(todo)
                }}
            >
                <Check isCompleted={todo.isCompleted} />
                <span
                    className={`${
                        todo.isCompleted ? 'description_done' : 'description'
                    }`}
                >
                    {todo.description}
                </span>
            </div>

            <button
                className="trash"
                onClick={async () => {
                    await todosStore.deleteTodo(todo.id)
                }}
            >
                <BiTrash />
            </button>
        </div>
    )
})

export default ToDoItem
