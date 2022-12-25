import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';
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
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        /> */}
        {/* <PrivateRoute path="contacts" redirectTo="/login">
          <Contacts/>
        </PrivateRoute> */}
      </Route>
    </Routes>
    </Suspense>
  );
};


/** Маршрутизація
Додай маршрутизацію з бібліотекою React Router. У програмі має бути кілька сторінок:

/register - публічний маршрут реєстрації нового користувача з формою
/login - публічний маршрут логіна існуючого користувача з формою
/contacts - приватний маршрут для роботи зі списком контактів користувача
 */