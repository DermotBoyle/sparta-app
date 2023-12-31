'use client'
import { useRouter } from 'next/navigation'
import SingleClickButton from './common/components/SingleClickButton/SingleClickButton'
import { useAppSelector } from './redux/hooks'
import styles from './page.module.scss'
import TodoFormModal from './common/components/TodoForm/TodoForm'
import { useState } from 'react'

type HomePropsType = {
  searchParams: Record<string, string> | null | undefined;
}

export type Todo = {
  id: string;
  title: string;
  message: string;
  completed: boolean;
}

export default function Home() {

  const router = useRouter()
  const todos = useAppSelector(state => state.todos)
  const [ currentTodo, setCurrentTodo ] = useState<Todo | null>(null)

  const handleTodoEdit = (todo: Todo) => {
    router.push('/?todoFormModal=true')
    setCurrentTodo(todo)
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer} >
        <SingleClickButton style='primary' size='sm' label="Add todo" onClick={() => router.push('/?todoFormModal=true')} />
        <TodoFormModal currentTodo={currentTodo} />
        <section className={styles.todoGrid}>
          {todos.map(todo => <div className={styles.listItems} key={todo.id}>
            <div key={todo.id} className={styles.todoContainer}>
              <div className={styles.editIconContainer} onClick={() => handleTodoEdit(todo)} >
                <img className={styles.editIconImage} src="./edit-icon.svg" />
              </div>
              <h5 className={styles.title}>{todo.title}</h5>
              <p className={styles.description}>{todo.message}</p>
            </div>
          </div>)}
        </section>
      </div>
    </main>
  )
}
