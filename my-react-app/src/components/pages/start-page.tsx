import { Link } from 'react-router-dom'
const StartPage = () => {
    return (
        <div>
            <Link to={'/register'}>
                <button className="register_button">Зарегистрироваться</button>
            </Link>
            <Link to={'/login'}>
                <button>Уже зарегистрирован</button>
            </Link>
        </div>
    )
}
export default StartPage
