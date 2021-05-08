import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {

  return (
    <div className="entrance-group page__entrance-group">
      <h2 className="entrance-group__title">Регистрация</h2>

      <form className={`form login__form`}>
        <input className="form__input-text form__input-text_type_dark-form" type="email" name="name-profile" id="name-profile"
          placeholder="Email" required />
        <span className="form__input-error name-profile-error"></span>
        <input className="form__input-text form__input-text_type_dark-form" type="password" name="job-profile" id="job-profile"
          placeholder="Пароль" required minLength="2" maxLength="200" />
        <span className="form__input-error job-profile-error"></span>
        <input className="button form__save form__save_type_dark-form" type="submit" value="Зарегистрироваться" />
      </form>
      <p className="entrance-group__text">Уже зарегистрированы? <Link to="/sign-in" className="entrance-group__link">Войти</Link></p>
    </div>
  )
}

export default Register;
