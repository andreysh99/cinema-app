import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from './styles.module.scss'
import avatar from '../../assets/Profile.svg'
import { useAppSelector } from '../../store/store'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

export default function Profile() {
  const user = useAppSelector((state) => state.user.profile)
  const handleLogout = () => signOut(auth)
  return (
    <div className={styles.profile}>
        <NavBar />
        <div className={styles.content}>
          <h1 className={styles.head}>Профиль</h1>
          <div className={styles.info}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <div className={styles.details}>
              <h2 className={styles.mail}>{user?.email}</h2>
              <div className={styles.subscription}>
                <h3 className={styles.headsub}>Подписки</h3>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <div className={styles.typesub}>
                      <h4 className={styles.sub}>Базовая</h4>
                      <span className={styles.screen}>480p</span>
                    </div>
                    <button className={styles.btnsub}>Подписаться</button>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.typesub}>
                      <h4 className={styles.sub}>Стандартная</h4>
                      <span className={styles.screen}>1080p</span>
                    </div>
                    <button className={styles.btnsub}>Подписаться</button>
                  </li>
                  <li className={styles.item}>
                    <div className={styles.typesub}>
                      <h4 className={styles.sub}>Премиум</h4>
                      <span className={styles.screen}>4K+HDR</span>
                    </div>
                    <button className={styles.btnsub}>Подписаться</button>
                  </li>
                </ul>
              </div>
              <button className={styles.btn} onClick={handleLogout}>Выйти</button>
            </div>
          </div>
        </div>
    </div>
  )
}
