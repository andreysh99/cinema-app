import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import imgLogo from '../../images/logo.png'
// import imgAvatar from '../../images/avatar.png'
import avatar from '../../assets/Profile.svg'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      setShow(true)
    } else { 
      setShow(false)
    }
  }
  const handleHome = () => navigate('/')
  const handleProfile = () => navigate('/profile')

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={styles[show ? 'navbar'+'__show' : 'navbar']}>
        <div className={styles.content}>
          <img className={styles.logo} src={imgLogo} alt="logo" onClick={handleHome}/>
          <img className={styles.avatar} src={avatar} alt="avatar" onClick={handleProfile}/>
        </div>
    </div>
  )
}
