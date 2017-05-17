import './styles.css'
import * as React from 'react'
import wrap from '../wrap'
import * as cs from 'classnames'

import Container from '../container'

interface IProps {
	active?: boolean,
	onHide?: () => void,
	children: JSX.Element[],
}

export default function Modal(props: IProps) {
	const classes = cs('modal', {
		active: props.active
	})
	return (
		<Container onClick={props.onHide} className={classes} justify-center align-center>
			<Container onClick={e => e.stopPropagation()} vertical bg-white className='modal-wrap'>
				{props.children}
			</Container>
		</Container>
	)
}
