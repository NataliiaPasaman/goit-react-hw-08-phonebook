import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { register } from 'redux/auth/operations';
import {
  RegisterContainer, 
  Title, 
  FormRegister,
  Registerlabel,
  RegisterInput,
  RegisterBtn,
} from './Register.styled';

export default function Register() {
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
      <RegisterContainer>
        <BiLogIn size={32} color="blue" />
        <Title>Register Form</Title>
        <FormRegister autoComplete="off" onSubmit={handleSubmit}>

          <Registerlabel>
            <FaUserAlt size={20} />
            Username
            <RegisterInput
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Registerlabel>

          <Registerlabel>
            <HiOutlineMail size={20} />
            Email
            <RegisterInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Registerlabel>

          <Registerlabel>
            <RiLockPasswordFill size={20} />
            Password
            <RegisterInput
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Registerlabel>

          <RegisterBtn type="submit">Register</RegisterBtn>
        </FormRegister>
      </RegisterContainer>
    );
}