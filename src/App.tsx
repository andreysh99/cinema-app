import React, { lazy, Suspense, useEffect } from 'react'
import styles from './App.module.scss'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useAppDispatch, useAppSelector } from './store/store'
import { login, logout } from './store/userReducer'
import ProtectedRoute from './pages/ProtectedRoute'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

const Profile = lazy(() => import('./pages/Profile/Profile'))

function App() {
  const profile = useAppSelector((state) => state.user.profile)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (profile) => {
      if (profile) {
        dispatch(
          login({
            uid: profile.uid,
            email: profile.email,
          }),
        )
        navigate('/')
      } else {
        dispatch(logout())
      }
    })
  }, [])

  console.log(profile)
  return (
    <div className={styles.app}>
      <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<ProtectedRoute profile={profile} element={<Profile />} />}
          />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
