import { makeObservable, observable, action, runInAction, toJS } from 'mobx'
import axios, { type AxiosResponse } from 'axios'
import autorizationStore from './autorizationStore'
import { type ITodos } from '../types/todos'
import storageToken from '../components/storage-token'
export const baseUrl = 'http://localhost:3001'

class TodosModel {
    authHeader = {
        headers: { Authorization: `Bearer ${storageToken.get()}` },
    }

    todos: ITodos[] = []
    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            deleteTodo: action,
            allTodos: action,
            toggleTodo: action,
        })
    }

    async allTodos() {
        try {
            if (this.todos.length === 0) {
                const response = await axios.get(
                    `${baseUrl}/todos`,
                    this.authHeader
                )
                runInAction(() => {
                    this.todos = response.data.reverse()
                })
            }
            return toJS(this.todos)
        } catch (error: any) {
            if (error.response.status === 401) {
                autorizationStore.setIsAuthenticated(false)
            }
        }
    }

    addTodo = async (todo: string) => {
        try {
            const response: AxiosResponse = await axios.post(
                `${baseUrl}/todos`,
                {
                    id: new Date(),
                    description: todo,
                    isCompleted: false,
                },
                this.authHeader
            )
            runInAction(() => {
                this.todos.unshift(response.data)
            })
        } catch (error: any) {
            alert(error.response.status)
        }
    }

    deleteTodo = async (id: string) => {
        try {
            await axios.delete(`${baseUrl}/todos/${id}`, this.authHeader)
            runInAction(() => {
                const index = this.todos.findIndex(
                    (todo: ITodos) => todo.id === id
                )
                if (index > -1) this.todos.splice(index, 1)
            })
        } catch (error: any) {
            alert(error.response.status)
        }
    }

    getTodo(id: string) {
        return this.todos.find((todo: ITodos) => todo.id === id)
    }

    toggleTodo = async ({
        id,
        isCompleted,
        description,
    }: {
        id: string
        isCompleted: boolean
        description: string
    }) => {
        try {
            await axios.put(
                `${baseUrl}/todos/${id}`,
                {
                    isCompleted: !isCompleted,
                    description,
                },
                this.authHeader
            )
            const todo: any = this.getTodo(id)
            if (todo) {
                runInAction(() => {
                    todo.isCompleted = !todo.isCompleted
                })
            }
        } catch (error: any) {
            alert(error.response.status)
        }
    }

    getTodoByFilter = async (query: boolean | string) => {
        try {
            const response: any = await axios.get(
                `${baseUrl}/todos/?isCompleted=${query}`,
                this.authHeader
            )
            if (response.data.length === 0) {
                alert('Nothing is here')
            }
            runInAction(() => {
                this.todos = response.data.reverse()
            })
            return toJS(this.todos)
        } catch (error: any) {
            alert(error.response.status)
        }
    }
}

const todosStore = new TodosModel()
export default todosStore
