import React from 'react';
import { Link } from 'react-router-dom';

function LoginComponent() {
  function btnState() {
    const form = document.getElementById('loginForm');
    const btnSubmit = document.getElementById('submitBtn');
    btnSubmit.disabled = !form.checkValidity();
  }
  return (
    <div>
      <h1>Login</h1>
      <form id="loginForm" onChange={ btnState }>
        <label htmlFor="username">
          Username:
          <input type="email" name="username" id="username" />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input type="password" name="senha" id="password" minLength="6" />
        </label>
        <br />
        <Link to="/ActivitiesList">
          <input id="submitBtn" type="submit" value="Entrar" disabled />
        </Link>
      </form>
    </div>
  );
}

export default LoginComponent;
