import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  FormRegister,
  Registerlabel,
  RegisterInput,
  RegisterBtn,
} from './Register.styled';
import { register } from 'redux/auth/operations';

export const Register = () =>{
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    switch (e.target.name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    clearForm();
  };

    return (
      <div>
        <FormRegister autoComplete="off" onSubmit={handleSubmit}>
          <Registerlabel>Username
            <RegisterInput type="text" name="name" value={name} onChange={handleChange} />
          </Registerlabel>
          <Registerlabel>Email
            <RegisterInput type="email" name="email" value={email} onChange={handleChange} />
          </Registerlabel>
          <Registerlabel>Password
            <RegisterInput type="password" name="password" value={password} onChange={handleChange} />
          </Registerlabel>
          <RegisterBtn type="submit">Register</RegisterBtn>
        </FormRegister>
      </div>
    );
}