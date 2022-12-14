import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from 'redux/contacts/selector';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div
      style={{
        height: '100vh',
        padding: '40px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && !error && <ContactsList />}
    </div>
  );
};


/** Маршрутизація
Додай маршрутизацію з бібліотекою React Router. У програмі має бути кілька сторінок:

/register - публічний маршрут реєстрації нового користувача з формою
/login - публічний маршрут логіна існуючого користувача з формою
/contacts - приватний маршрут для роботи зі списком контактів користувача
Додай компонент навігації Navigation з посиланнями для переходу по маршрутах. */