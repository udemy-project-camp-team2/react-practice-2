import { useDispatch, useSelector } from 'react-redux';
import Auth from '../components/auth'
import { logout ,login} from '../store/module/authStore';

const AuthContainer = () => {
    const authStore = useSelector((state) => state.auth.isLogined)
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login())
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Auth handleLogin={handleLogin} handleLogout={handleLogout} authStore={authStore}/>
    )
}

export default AuthContainer;