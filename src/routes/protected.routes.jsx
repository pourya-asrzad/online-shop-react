import { Navigate, Outlet } from 'react-router-dom'
import { INTERNAL_PATHS } from '../configs/routs.config'
export const ProtectedRoutes = () => {
    localStorage.setItem('loggedIn', 'fg')
    if (localStorage.loggedIn) {
        return (
            <Outlet />
        )
    } else {
        return <Navigate to={INTERNAL_PATHS.HOME} />
    }
}