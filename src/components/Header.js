import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header page__header">
      <img className="logo" src={logo} alt="Логотип" />
      <Switch>
        <Route path='/sign-up'>
          <Link to="sign-in" className="header__link">Войти</Link>
        </Route>
        <Route path='/sign-in'>
          <Link to="sign-up" className="header__link">Регистрация</Link>
        </Route>
      </Switch>
    </header>
  )
}

export default Header;
