import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/operations';
import { BiLogIn } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { 
  LoginContainer, 
  Title, 
  FormLogin, 
  LabelLogin, 
  InputLogin, 
  ButtonLogin } from './Login.styled';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = e => {
    const value = e.target.value;
    switch (e.target.name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  }

    return (
      <LoginContainer>
        <BiLogIn size={32} color="blue" />
        <Title>Log In</Title>
        <FormLogin autoComplete="off" onSubmit={handleSubmitLogin}>
          <LabelLogin>
            <HiOutlineMail size={20} />
            Email
            <InputLogin
              type="email"
              name="email"
              value={email}
              onChange={handleChangeLogin}
            />
          </LabelLogin>
          <LabelLogin>
            <RiLockPasswordFill size={20} />
            Password
            <InputLogin
              type="password"
              name="password"
              value={password}
              onChange={handleChangeLogin}
            />
          </LabelLogin>
          <ButtonLogin type="submit">Log In</ButtonLogin>
        </FormLogin>
      </LoginContainer>
    );
}