import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';
import {CalendarApp} from '../pages/CalendarApp';
import {Login} from '../pages/Login';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route 
                path='/login' element={
                    <PublicRoute>
                        <Login/>
                    </PublicRoute>
                }
            />
            <Route
                path='/' element={
                    <PrivateRoute>
                        <CalendarApp/>
                    </PrivateRoute>
                }
            />
        </Routes>
    </BrowserRouter>
  )
}
