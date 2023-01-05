import React, { useRef } from 'react'
import styles from './styles.module.scss'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
export default function SingIn() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const regist = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    createUserWithEmailAndPassword(
      auth,
      emailRef.current!.value,
      passwordRef.current!.value,
    )
      .then((res) => console.log(res))
      .catch((err) => alert('Ошибка'))
  }
  const singIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (emailRef !== null && passwordRef !== null) {
        signInWithEmailAndPassword(
          auth,
          emailRef.current!.value,
          passwordRef.current!.value,
        )
          .then((res) => console.log(res))
          .catch((err) => alert('Ошибка'))
      }
  }
  return (
    <div className={styles.singIn}>
      <form className={styles.form}>
        <h1 className={styles.head}>Вход</h1>
        <input
          ref={emailRef}
          className={styles.input}
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className={styles.input}
          type="password"
          placeholder="Пароль"
        />
        <button className={styles.btn} type="submit" onClick={singIn}>
          Войти
        </button>
        <h4 className={styles.nohead}>
          <span className={styles.gray}>Нет аккаунта? </span>
          <span className={styles.link} onClick={regist}>
            Зарегистрироваться
          </span>
        </h4>
      </form>
    </div>
  )
}
