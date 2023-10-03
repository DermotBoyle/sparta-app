'use client'
import React from 'react'
import Style from './Card.module.scss'
import SingleClickButton from '../SingleClickButton'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type SignInError = 'Please provide a valid email' | 'Please provide a valid password'

const SignInValidationSchema = z.object({
	email: z.string().email({ message: 'Please provide a valid email' }),
	password: z.string().min(8, { message: 'Please provide a valid password, min 8 characters' })
})

type ValidationSchema = z.infer<typeof SignInValidationSchema>

const Card = () => {

	const { register, handleSubmit, formState: { errors } } = useForm<ValidationSchema>({
		resolver: zodResolver(SignInValidationSchema),
	})

	const onSubmit = async (data: ValidationSchema) => {
		const res = await fetch('/api/auth/signin', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			}
		})

		console.log(res, 'res')
	}

	return (
		<div className={Style.cardContainer}>
			<div className={Style.cardHeader}>
				<h2 className={Style.cardTitle}>Sign in</h2>
				<h5>to start organizing your day</h5>
			</div>
			<form className={Style.formContainer}>
				<label className={Style.formLabel} htmlFor="email">Email</label>
				<input {...register("email")} placeholder='Enter your email or username' className={Style.signInInput} type="email" id="email" name="email" />
				{errors.email && <p className={Style.errorMessage}>{errors.email.message}</p>}
				<label className={Style.formLabel} htmlFor="password">Password</label>
				<input {...register("password")} placeholder='Enter your password' className={Style.signInInput} type="password" id="password" name="password" />
				{errors.password && <p className={Style.errorMessage}>{errors.password.message}</p>}
			</form>
			<SingleClickButton style='primary' label="Sign in" onClick={handleSubmit(onSubmit)} />
		</div>
	)
}

export default Card