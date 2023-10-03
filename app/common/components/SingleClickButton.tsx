'use client'
import React, { useState } from 'react'
import classNames from 'classnames'
import Styles from './SingleClickButton.module.scss'

type SingleClickButtonProps = {
	onClick: () => void,
	label: string,
	disabled?: boolean,
	size?: ButtonSize,
	type?: 'submit' | 'button' | 'reset'
	style: 'primary' | 'secondary' | 'tertiary'
}

type ButtonSize = 'sm' | 'md' | 'lg'


const SingleClickButton = ({ onClick, label, disabled = false, size = 'md', type = 'button', style = 'primary' }: SingleClickButtonProps) => {

	const btnClass = classNames({
		[ Styles.singleClickButtonBase ]: true,
		[ Styles.singleClickButtonDisabled ]: disabled,
		[ Styles.primaryButton ]: style === 'primary',
		[ Styles.secondaryButton ]: style === 'secondary',
		[ Styles.tertiaryButton ]: style === 'tertiary',
		[ Styles.sizeSm ]: size === 'sm',
		[ Styles.sizeMd ]: size === 'md',
		[ Styles.sizeLg ]: size === 'lg',

	})

	const [ isBlocking, setIsBlocking ] = useState(false)

	return (
		<button onClick={onClick} className={btnClass} type={type} disabled={disabled || isBlocking}>{label}</button>
	)
}

export default SingleClickButton