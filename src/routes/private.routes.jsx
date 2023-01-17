import { Navigate, Outlet } from 'react-router-dom'
import { INTERNAL_PATHS } from '../configs/routs.config'
export const PrivateRoutes = () => {
    if (localStorage.loggedIn) {
        return <Navigate to={INTERNAL_PATHS.HOME} />
    } else {
        return (
            <Outlet />
        )
    }
}