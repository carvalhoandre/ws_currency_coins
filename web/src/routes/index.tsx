import React from 'react'
import { BrowserRouter, Routes as AllRoutes, Route } from 'react-router-dom'


const Home = React.lazy(async () => await import('../pages/Home'))

export const Routes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <AllRoutes>
                <Route path='/*' element={<Home />} />
            </AllRoutes>
        </BrowserRouter>
    )
}