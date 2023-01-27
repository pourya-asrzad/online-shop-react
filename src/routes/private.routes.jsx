import { Navigate, Outlet } from 'react-router-dom'
import { INTERNAL_PATHS } from '../configs/routs.config'
export const PrivateRoutes = () => {
    if (localStorage.token) {
        return <Navigate to={INTERNAL_PATHS.CONTROLPANEL} />
    } else {
        return (
            <Outlet />
        )
    }
}