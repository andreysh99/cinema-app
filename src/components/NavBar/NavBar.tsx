import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import imgLogo from '../../images/logo.png'
import imgAvatar from '../../images/avatar.png'

export default function NavBar() {

  const [show, setShow] = useState(false)
  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      setShow(true)
    } else { 
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={styles[show ? 'navbar'+'__show' : 'navbar']}>
        <div className={styles.content}>
          <img className={styles.logo} src={imgLogo} alt="logo" />
          <img className={styles.avatar} src={imgAvatar} alt="avatar" />
        </div>
    </div>
  )
}
