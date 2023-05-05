import { useState, useEffect } from 'react'
import CreateToDo from './create-to-do'
import todosStore from '../../store/todosStore'
import { observer } from 'mobx-react-lite'
import { type ITodos } from '../../types/todos'
import Buttons from '../buttons'
import ListToDo from './list-todo'

const MainToDo = observer(() => {
    const [state, setState] = useState({
        todos: [] as ITodos[],
        isLoading: true,
    })

    useEffect(() => {
        todosStore.allTodos().then((response) => {
            if (response !== undefined) {
                setState({ isLoading: false, todos: response })
            }
        })
    })

    return (
        <div className="main_todo">
            {state.isLoading && <div>is loading...</div>}
            <h1 className="heading">TODO LIST</h1>
            <Buttons />
            <CreateToDo />
            <ListToDo todos={state.todos} />
        </div>
    )
})

export default MainToDo
