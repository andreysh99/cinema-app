import React from 'react'
import styles from './styles.module.scss'
import imgLogo from '../../images/logo.png'

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <img className={styles.logo} src={imgLogo} alt="logo" />
        <button className={styles.btn}>Войти</button>
        <div className={styles.grad}/>
      </div>
      <div className={styles.container}>
        <h1 className={styles.head}>Большая библиотека фильмов, сериалов и многого другого.</h1>
        <h2 className={styles.head2}>Смотри в любом месте. В любое время.</h2> 
        <h3 className={styles.head3}>Готов к просмотру? Введи свой email, чтобы войти или зарегистрироваться.</h3>
        <div className={styles.data}>
            <form className={styles.form}>
                <input className={styles.input} type="email" placeholder='Email' />
                <button className={styles.submit}>Начать</button>
            </form>
        </div>
      </div>
    </div>
  )
}
