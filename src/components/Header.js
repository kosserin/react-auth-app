import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { sliceActions } from '../store';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const isUserLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = e => {
    e.preventDefault();
    dispatch(sliceActions.logout());
    navigate('/react-auth-app')
  }

  return (
    <header className={styles.header}>
    <nav>
      <Link to="/react-auth-app">KossAuth</Link>
      <ul>
        {!isUserLoggedIn && <li><NavLink to='/react-auth-app/login'>Login</NavLink></li>}
        {isUserLoggedIn && <li><NavLink to='/react-auth-app/profile'>Profile</NavLink></li>}
        {isUserLoggedIn && <li><a href="#" onClick={logoutHandler}>Logout</a></li>}
      </ul>
    </nav>
    </header>
  )
}

export default Header