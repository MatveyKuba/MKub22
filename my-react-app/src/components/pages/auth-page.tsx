import axios from 'axios'
import { type FormEvent, useState } from 'react'
import { baseUrl } from '../../store/todosStore'
import { Link } from 'react-router-dom'
import autorizationStore from '../../store/autorizationStore'
import storageToken from '../storage-token'
import { type IAutorization } from '../../types/autorization'
const AuthPage = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const onFinish = async (e: FormEvent, values: IAutorization) => {
        e.preventDefault()
        const response = await axios.post(`${baseUrl}/login`, values)
        storageToken.set(response.data.accessToken)
    }

    return (
        <div>
            <form
                onSubmit={(e) => {
                    onFinish(e, state)
                }}
            >
                <div>
                    <h3>Username:</h3>
                    <input
                        onChange={(e) => {
                            setState({ ...state, email: e.target.value })
                        }}
                        type="email"
                        placeholder="Enter name"
                    />
                </div>
                <div>
                    <h3>Password:</h3>
                    <input
                        onChange={(e) => {
                            setState({ ...state, password: e.target.value })
                        }}
                        type="password"
                        placeholder="Enter password"
                    />
                </div>
                {autorizationStore.isAuthenticated && (
                    <Link to={'/mainPage'}>
                        <button type="submit">Войти</button>
                    </Link>
                )}
            </form>
        </div>
    )
}

export default AuthPage
