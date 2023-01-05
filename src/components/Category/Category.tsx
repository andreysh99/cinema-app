import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IMovie } from '../../models/models'
import styles from './styles.module.scss'

type Category = {
  title: string
  direction: any
}
export default function Category({ title, direction }: Category) {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    async function getMovies() {
      await axios
        .get('http://localhost:3001/movies/?genre=' + title)
        .then((res) => setMovies(res.data))
    }
    getMovies()
  }, [direction])

  return (
    <div className={styles.category}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.posters}>
        {movies.map((elem) => {
          return (
              <img
                key={elem.id}
                className={styles.poster}
                src={elem.imgUrl}
                alt={elem.title}
              />
          )
        })}
      </div>
    </div>
  )
}
