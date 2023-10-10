import { z } from 'zod'
import SingleClickButton from '../SingleClickButton/SingleClickButton'
import Styles from './TodoForm.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useAppDispatch } from '@/app/redux/hooks'
import { addTodo } from '@/app/redux/actions/addTodoSlice'
import { Todo } from '@/app/page'

const TodoValidationSchema = z.object({
	title: z.string().min(3, { message: 'Please provide a valid title, min 3 characters' }),
	message: z.string().min(8, { message: 'Please provide a valid message, min 8 characters' }),
	completed: z.boolean()
})

type ValidationSchema = z.infer<typeof TodoValidationSchema>

type MaybeTodo = Todo | null

type TodoFormModalPropsType = {
	currentTodo: MaybeTodo
}

const TodoFormModal = ({ currentTodo }: TodoFormModalPropsType) => {

	const { register, handleSubmit, formState: { errors }, reset } = useForm<ValidationSchema>({
		resolver: zodResolver(TodoValidationSchema),
		defaultValues: currentTodo || undefined
	})

	const searchParams = useSearchParams()
	const modalRef = useRef<HTMLDialogElement | null>(null)
	const showModal = searchParams.get('todoFormModal')
	const router = useRouter()
	const dispatch = useAppDispatch()


	useEffect(() => {
		if (showModal) {
			modalRef.current?.showModal()
			document.documentElement.style.overflowY = 'hidden'
		} else {
			handleClose()
		}
	}, [ showModal ])

	const onSubmit = async (data: ValidationSchema) => {
		const uniqueId = Math.random().toString(36).substring(7)
		dispatch(addTodo({ ...data, id: uniqueId }))
	}

	const handleClose = () => {
		reset()
		modalRef.current?.close()
		document.documentElement.style.overflowY = 'scroll'
		router.push('/')
	}


	const dialog = showModal
		? <dialog className={Styles.todoFormModal} ref={modalRef}>
			<div className={Styles.todoFormHeaderBar}>
				<h2 className={Styles.title}>Mode: </h2>
				<button className={Styles.closeButton} onClick={() => handleClose()}>x</button>
			</div>
			<div className={Styles.todoFormContainer}>
				<label className={Styles.label}>Title</label>
				<input className={Styles.todoInput} {...register("title")} type="text" />
				{errors.title && <p className={Styles.error}>{errors.title.message}</p>}

				<label className={Styles.label}>Message</label>
				<textarea className={Styles.todoTextArea} {...register("message")}></textarea>
				{errors.message && <p className={Styles.error}>{errors.message.message}</p>}
				<label className={Styles.label}>Mark as completed</label>
				<input className={Styles.todoCheckbox} {...register("completed")} type="checkbox" />
			</div>
			<Link className={Styles.linkModal} href='/'>
				<SingleClickButton style='primary' label="Add todo" onClick={handleSubmit(onSubmit)} />
			</Link>
		</dialog>
		: null

	return dialog
}

export default TodoFormModal