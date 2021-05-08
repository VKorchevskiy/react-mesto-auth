import React, { useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { IsLoggedInContext } from '../contexts/IsLoggedInContext';
import { UserInfoContext } from '../contexts/UserInfoContext';
import logo from '../images/logo.svg';

function Header() {
  const isLoggedIn = useContext(IsLoggedInContext);
  const { _id, email } = useContext(UserInfoContext);

  return (
    <header className="header page__header">
      <img className="logo" src={logo} alt="Логотип" />
      { isLoggedIn ? (
        <Route path="/">
          <div>
            <p className="header__text">{email}</p>
            <Link to="sign-in" className="header__link">Выйти</Link>
          </div>
        </Route>
      ) : (
        <Switch>
          <Route path='/sign-up'>
            <Link to="sign-in" className="header__link">Войти</Link>
          </Route>
          <Route path='/sign-in'>
            <Link to="sign-up" className="header__link">Регистрация</Link>
          </Route>
          <Route path='/'>
            <Link to="sign-in" className="header__link">Войти</Link>
          </Route>
        </Switch>
      )

      }
    </header>
  )

}

export default Header;
