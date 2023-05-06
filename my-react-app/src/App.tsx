import React, { useEffect } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainToDo from './components/pages/main-to-do'
import AuthPage from './components/pages/auth-page'
import axios from 'axios'
import { baseUrl } from './store/todosStore'
import autorizationStore from './store/autorizationStore'
import storageToken from './components/storage-token'
import RegisterPage from './components/pages/register-page'
import StartPage from './components/pages/start-page'
const allRoutes = [
    { path: '/', element: <StartPage /> },
    { path: '/login', element: <AuthPage /> },
    { path: '/mainPage', element: <MainToDo /> },
    { path: '/register', element: <RegisterPage /> },
]

function App() {
    useEffect(() => {
        const getData = async () => {
            try {
                const token = storageToken.get()
                if (token) {
                    await axios.get(`${baseUrl}/todos`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                }
                autorizationStore.setIsAuthenticated(true)
            } catch (error: any) {
                if (error.response.status === 401) {
                    autorizationStore.setIsAuthenticated(false)
                }
            }
        }
        getData()
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                {allRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default App
