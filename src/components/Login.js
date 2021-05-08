import React, { useState } from 'react';
import Link from 'react-router-dom';

function Login({ onLogin }) {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  return (
    <div className="entrance-group page__entrance-group">
      <h2 className="entrance-group__title">Вход</h2>

      <form className={`form login__form`}>
        <input className="form__input-text form__input-text_type_dark-form" type="email" name="name-profile" id="name-profile"
          placeholder="Email" required minLength="2" maxLength="40" />
        <span className="form__input-error name-profile-error"></span>
        <input className="form__input-text form__input-text_type_dark-form" type="password" name="job-profile" id="job-profile"
          placeholder="Пароль" required minLength="2" maxLength="200" />
        <span className="form__input-error job-profile-error"></span>
        <input className="button form__save form__save_type_dark-form" type="submit" value="Войти" />
      </form>

    </div>
  )
}

export default Login;
