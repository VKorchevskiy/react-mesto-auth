import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [registerData, setRegisterData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setMessage('');

    e.preventDefault();
    if (!registerData.email || !registerData.password) {
      return;
    }

    setRegisterData({
      ...registerData,
      username: registerData.email,
    });

    onRegister(registerData)
      .catch(err => {
        console.log(err)
        setMessage(err.message || 'Что-то пошло не так')
      });
  };



  return (
    <div className="entrance-group page__entrance-group">
      <h2 className="entrance-group__title">Регистрация</h2>

      <form className={`form login__form`} onSubmit={handleSubmit}>
        <input className="form__input-text form__input-text_type_dark-form" type="email" name="email"
          id="email-register" placeholder="Email" required autoComplete="email"
          value={registerData.email} onChange={handleChange}
        />
        <span className="form__input-error"></span>
        <input className="form__input-text form__input-text_type_dark-form" type="password" name="password"
          id="password-register" placeholder="Пароль" required minLength="2" maxLength="200" autoComplete="password"
          value={registerData.password} onChange={handleChange}
        />
        <span className="form__input-error"></span>
        <input className="button form__save form__save_type_dark-form" type="submit" value="Зарегистрироваться" />
      </form>
      <p className="entrance-group__text">Уже зарегистрированы? <Link to="/sign-in" className="entrance-group__link">Войти</Link></p>
    </div>
  )
}

export default Register;
