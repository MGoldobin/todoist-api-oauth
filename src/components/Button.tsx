import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	width: 100px;
	height: 30px;
	border: 1px solid yellow;
	background-color: yellow;
	margin: 10px 0;

	&:hover {
		opacity: .7;
		font-weight: 700;
	}
`

interface ButtonProps {
	dis?: boolean
	children: React.ReactNode 
	onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({dis, children, onClick}:ButtonProps) => {
	return (
		<StyledButton disabled={dis} onClick={onClick}>
			{children}
		</StyledButton>
	)
}

export default Button