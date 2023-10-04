'use client'
import { useRouter } from 'next/navigation'
import SingleClickButton from './common/components/SingleClickButton'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import styles from './page.module.scss'

export default function Home() {

  const router = useRouter()
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()


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
        <div>
          <label>Title</label>
          <input type="text" />

          <label>Message</label>
          <textarea></textarea>

          <label>Mark as completed</label>
          <input type="checkbox" />
        </div>
      </div>
    </main>
  )
}
