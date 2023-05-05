import { type ITodos } from '../../types/todos'
import ToDoItem from './todo-item'
import { observer } from 'mobx-react-lite'
const ListToDo = observer(({ todos }: { todos: ITodos[] }) => {
    return (
        <div>
            {todos.map((todo: ITodos) => (
                <ToDoItem todo={todo} key={todo.id} />
            ))}
        </div>
    )
})

export default ListToDo
