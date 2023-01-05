import React, { useState } from 'react'
import styles from './styles.module.scss'
import imgLogo from '../../images/logo.png'
import SingIn from '../../components/SingIn/SingIn'

export default function Login() {
  const [singIn, setSingIn] = useState(false)

  const handleSingIn = () => {
    setSingIn(true)
  }
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <img className={styles.logo} src={imgLogo} alt="logo" />
        <button className={styles.btn} onClick={handleSingIn}>
          Войти
        </button>
        <div className={styles.grad} />
      </div>
      <div className={styles.container}>
        {singIn ? (
          <SingIn />
        ) : (
          <>
            <h1 className={styles.head}>
              Большая библиотека фильмов, сериалов и многого другого.
            </h1>
            <h2 className={styles.head2}>
              Смотри в любом месте. В любое время.
            </h2>
            <h3 className={styles.head3}>
              Готов к просмотру? Введи свой email, чтобы войти или
              зарегистрироваться.
            </h3>
            <div className={styles.data}>
              <form className={styles.form}>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                />
                <button className={styles.submit} onClick={handleSingIn}>
                  Начать
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
