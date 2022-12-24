import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { INTERNAL_PATHS } from '../configs/routs.config'
import { PublicRoutes } from './public.routes'
const LazyHome = React.lazy(() => import('../pages/home/home.page'))
const LazyCart = React.lazy(() => import('../pages/cart/cart.page'))
const LazyNotFound = React.lazy(() => import('../pages/Error/not-found.page'))
export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path={INTERNAL_PATHS.HOME} element={<LazyHome />} />
                    <Route path={INTERNAL_PATHS.CART} element={<LazyCart />} />
                    <Route path={INTERNAL_PATHS.PAGE404} element={<LazyNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}