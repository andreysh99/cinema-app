import React, { lazy } from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home/Home'))
const Login = lazy(() => import('./pages/Login/Login'))

function App() {
  const user = null
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
