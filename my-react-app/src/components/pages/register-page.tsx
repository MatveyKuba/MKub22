import axios from 'axios'
import { type FormEvent, useState } from 'react'
import { baseUrl } from '../../store/todosStore'
import { type IAutorization } from '../../types/autorization'
import autorizationStore from '../../store/autorizationStore'
import storageToken from '../storage-token'
import { Link } from 'react-router-dom'
const RegisterPage = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const onFinish = async (e: FormEvent, values: IAutorization) => {
        e.preventDefault()
        const response = await axios.post(`${baseUrl}/register`, values)
        storageToken.set(response.data.accessToken)
        if (response.data.accessToken) {
            autorizationStore.setIsAuthenticated(true)
        }
        console.log(autorizationStore.isAuthenticated)
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

                <button type="submit">Войти</button>
                {autorizationStore.isAuthenticated && (
                    <Link to={'/login'}>
                        <button className="auth_button">Авторизоваться</button>
                    </Link>
                )}
            </form>
        </div>
    )
}

export default RegisterPage
