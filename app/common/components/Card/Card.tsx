'use client'
import React from 'react'
import Style from './Card.module.scss'
import SingleClickButton from '../SingleClickButton'


const Card = () => {
	return (
		<div className={Style.cardContainer}>
			<h1>Sign In</h1>
			<form className={Style.formContainer}>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" name="password" />
			</form>
			<SingleClickButton label="Sign in" onClick={() => console.log('clicked')} />
		</div>
	)
}

export default Card