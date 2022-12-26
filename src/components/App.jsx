import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch } from "react-redux";
import { getCurrentUser } from 'redux/auth/operations';
import { AppBar } from './AppBar/AppBar';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch])

  return (
    <Suspense fallback={<div>Loadind...</div>} >
    <Routes>
      <Route path="/" element={<AppBar />}>
        
        <Route index element={<Home />} />

        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/contacts">
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="login"
          element={
            <PublicRoute redirectTo="/contacts">
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
    </Suspense>
  );
};
