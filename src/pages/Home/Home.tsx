import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import styles from './styles.module.scss'
import Category from '../../components/Category/Category'

export default function Home() {
  const categories = [
    {
      id:1,
      title: 'Популярные',
      direction: ''
    },
    {
      id:2,
      title: 'Боевики',
      direction: ''
    },
    {
      id:3,
      title: 'Комедии',
      direction: ''
    },
    {
      id:4,
      title: 'Ужасы',
      direction: ''
    },
    {
      id:5,
      title: 'Драмы',
      direction: ''
    },
    {
      id:6,
      title: 'Документальные',
      direction: ''
    }
  ]
  return (
    <div className={styles.home}>
      <NavBar />
      <Header />
      {categories.map((elem) => {
        return (
          <Category key={elem.id} title={elem.title} direction={elem.direction}/>
        )
      })}
    </div>
  )
}
