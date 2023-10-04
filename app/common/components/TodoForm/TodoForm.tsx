import { z } from 'zod'
import SingleClickButton from '../SingleClickButton/SingleClickButton'
import Styles from './TodoForm.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

const TodoValidationSchema = z.object({
	title: z.string().min(3, { message: 'Please provide a valid title, min 3 characters' }),
	message: z.string().min(8, { message: 'Please provide a valid message, min 8 characters' }),
	completed: z.boolean()
})

type ValidationSchema = z.infer<typeof TodoValidationSchema>

const TodoFormModal = () => {

	const { register, handleSubmit, formState: { errors } } = useForm<ValidationSchema>({
		resolver: zodResolver(TodoValidationSchema),
	})

	const searchParams = useSearchParams()
	const modalRef = useRef<HTMLDialogElement | null>(null)
	const showModal = searchParams.get('todoFormModal')
	const router = useRouter()

	useEffect(() => {
		if (showModal) {
			modalRef.current?.showModal()
		} else {
			modalRef.current?.close()
			router.push('/')
		}
	}, [ showModal ])

	const onSubmit = async (data: ValidationSchema) => {
		console.log(data)
	}

	const handleClose = () => {
		modalRef.current?.close()
		router.push('/')
	}


	const dialog = showModal
		? <dialog ref={modalRef}>
			<div>
				<h2 className={Styles.title}>Add todo</h2>
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
				<input {...register("completed")} type="checkbox" />
			</div>
			<Link className={Styles.linkModal} href='/'>
				<SingleClickButton style='primary' label="Add todo" onClick={handleSubmit(onSubmit)} />
			</Link>
		</dialog>
		: null

	return dialog
}

export default TodoFormModal