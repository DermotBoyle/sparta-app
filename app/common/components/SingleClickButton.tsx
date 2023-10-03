import React, { useState } from 'react'
import Styles from './SingleClickButton.module.scss'

type SingleClickButtonProps = {
	onClick: () => void,
	label: string,
	disabled?: boolean,
}


const SingleClickButton = ({ onClick, label, disabled = false }: SingleClickButtonProps) => {

	const [ isBlocking, setIsBlocking ] = useState(false)

	return (
		<button className={Styles.singleClickButtonBase} disabled={disabled || isBlocking}>{label}</button>
	)
}

export default SingleClickButton