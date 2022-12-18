import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

// Реєстрація нового користувача POST NEW USER
export const register = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', userData);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


// Авторизація (логування) користувача POST - Login User
export const logIn = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', userData);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Розлогінення користувача POST - Login Out User
export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
           await axios.post('/users/logout');
           clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);