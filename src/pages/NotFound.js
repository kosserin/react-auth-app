import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
    <h1>Whoops! Page you are looking for is not found.</h1>
    <Link to="/react-auth-app">Go back to dashboard</Link>
    </div>
  )
}

export default NotFound