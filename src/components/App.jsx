// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
import { AppBar } from './AppBar/AppBar';
import { Home } from 'pages/Home/Home';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};


/** Маршрутизація
Додай маршрутизацію з бібліотекою React Router. У програмі має бути кілька сторінок:

/register - публічний маршрут реєстрації нового користувача з формою
/login - публічний маршрут логіна існуючого користувача з формою
/contacts - приватний маршрут для роботи зі списком контактів користувача
 */