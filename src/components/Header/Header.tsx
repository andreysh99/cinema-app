import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IMovie } from '../../models/models'
import styles from './styles.module.scss'

function slicetext(text: string, n: number){
  return text?.length > n ? text.slice(0, n-1) + "..." : text
}

export default function Header() {
  const [movie, setMovie] = useState<IMovie | undefined>(undefined)

  useEffect(() => {
   async function getMovie() {
    const randMovie = Math.round(Math.random() * 10)
    await axios.get('http://localhost:3001/movies/'+randMovie).then((res) => setMovie(res.data))
   }
   getMovie()
  }, [])

  return (
    <header className={styles.header} style={{ backgroundImage: `url(${movie?.imgUrl})` }}>
      <div className={styles.content}>
        <h1 className={styles.title}>{movie?.title}</h1>
        <div className={styles.buttonGroup}>
          <button className={styles.btn}>Play</button>
          <button className={styles.btn}>My list</button>
        </div>
        <h1 className={styles.desc}>{slicetext( `${movie?.description}` , 150)}</h1>
      </div>
      <div className={styles.fade} />
    </header>
  )
}
