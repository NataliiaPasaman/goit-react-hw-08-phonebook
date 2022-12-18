import React from 'react';

export const Login = () =>{

    return (
      <div>
        <form autoComplete="off">
          <label>Email
            <input type="email" name="email" />
          </label>
          <label>Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
}