import axios from 'axios';
import React, { FormEventHandler, useState } from 'react';
import styled from 'styled-components';

const StyleSignIn = styled.div`
  .container {
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #ffff;
    height: 100vh;
  }
  .form {
    width: 30%;
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
  }
  form * {
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  .form-label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
  }
  .form-input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
  }
  .form-button {
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const updateEmail = (value: string) => {
    setEmail(value);
  };
  const updatePassword = (value: string) => {
    setPassword(value);
  };
  const login: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4003/signIn', {
        email, password
      })
      .then((response) => {
        console.log(response);
        //TODO: SHOW MODAL WITH RESPONSE
      });
    // console.log(e.target);
  };
  return (
    <StyleSignIn className="container">
      <div className="container">
        <h1 className="title">Bienvenido a 88Pay</h1>
        <form onSubmit={login} className="form">
          <label className="form-label" htmlFor="email">
            Correo:{' '}
          </label>
          <input
            className="form-input"
            id="email"
            type="email"
            placeholder="Correo electrónico"
            onChange={(e) => {
              const newvalue = e.target.value;
              updateEmail(newvalue);
            }}
          />
          <label className="form-label" htmlFor="password">
            Contraseña:{' '}
          </label>
          <input
            className="form-input"
            id="password"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => {
              const newvalue = e.target.value;
              updatePassword(newvalue);
            }}
          />
          <button className="form-button" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </StyleSignIn>
  );
}
