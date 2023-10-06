'use client'
import { useRouter } from 'next/navigation'
import SingleClickButton from './common/components/SingleClickButton/SingleClickButton'
import { useAppSelector } from './redux/hooks'
import styles from './page.module.scss'
import TodoFormModal from './common/components/TodoForm/TodoForm'

type HomePropsType = {
  searchParams: Record<string, string> | null | undefined;
}

export default function Home({ searchParams }: HomePropsType) {

  const router = useRouter()
  const todos = useAppSelector(state => state.todos)

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer} >
        <SingleClickButton style='primary' size='sm' label="Add todo" onClick={() => router.push('/?todoFormModal=true')} />
        <TodoFormModal />
      </div>
    </main>
  )
}
