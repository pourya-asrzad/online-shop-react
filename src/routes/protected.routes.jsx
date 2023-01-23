import { Navigate, Outlet } from 'react-router-dom'
import { INTERNAL_PATHS } from '../configs/routs.config'
import ControlPanelHeader from '../layouts/header/controlPanelHeade.layout'
export const ProtectedRoutes = () => {
    if (localStorage.login) {
        return (
            <>
                <ControlPanelHeader />
                <Outlet />
            </>
        )
    } else {
        return <Navigate to={INTERNAL_PATHS.ADMIN_LOGIN} />
    }
}