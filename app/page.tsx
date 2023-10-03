'use client'
import Card from './common/components/Card/Card'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Login</h1>
        <Card />
      </div>
    </main>
  )
}
