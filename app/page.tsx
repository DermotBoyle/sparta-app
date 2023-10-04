'use client'
import { useRouter } from 'next/navigation'
import Card from './common/components/Card/Card'
import SingleClickButton from './common/components/SingleClickButton'
import styles from './page.module.scss'

export default function Home() {

  const router = useRouter()

  const handleLogout = async () => {
    const res = await fetch('/api/auth/signout', {
      method: 'GET',
    })

    if (res.status === 200) {
      router.refresh()
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer} >
        <img className={styles.mainImage} src="/sparta-logo.svg" alt="Sparta commodities brand logo" />
        <h1 className={styles.mainTitle}>Sparta commodities</h1>
        <p>Successful sign-in</p>
        <SingleClickButton style='primary' label="Sign out" onClick={() => handleLogout()} />
      </div>
    </main>
  )
}
