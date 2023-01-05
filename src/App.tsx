import React, { lazy, useEffect } from 'react'
import styles from './App.module.scss'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useAppDispatch, useAppSelector } from './store/store'
import { login, logout } from './store/userReducer'
import ProviderRoute from './pages/ProviderRoute'
const Home = lazy(() => import('./pages/Home/Home'))
const Login = lazy(() => import('./pages/Login/Login'))

function App() {
  const user = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          }),
        )
        navigate('/')
      } else {
        dispatch(logout())
      }
    })
  }, [])

  console.log(user)
  return (
    <div className={styles.app}>
      <Routes>
        <Route index path="/" element={
        <ProviderRoute user={user}>
          <Home />
        </ProviderRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
