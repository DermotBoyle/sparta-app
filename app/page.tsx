'use client'
import Card from './common/components/Card/Card'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer} >
        <img className={styles.mainImage} src="/sparta-logo.svg" alt="Sparta commodities brand logo" />
        <Card />
      </div>
    </main>
  )
}
