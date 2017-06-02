import './styles.css'
import * as React from 'react'
import wrap from '../wrap'
import * as cs from 'classnames'

import Container from '../container'
import Text from '../text'

interface IProps {
	active?: boolean,
	onHide?: () => void,
	children: JSX.Element[],
}

export function Modal(props: IProps) {
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

export const ModalTitle = wrap(Text, 'modal-title', {
	'pad-v6': true,
	'bg-lightgray': true,
	'weight-5': true,
	'fg-gray': true,
	style: {
		textAlign: 'center'
	}
}, {})

export const ModalButton = wrap(Text, 'modal-button', {
	'pad-v6': true,
	'justify-center': true,
	'weight-5': true,
	'size-3': true,
	'uppercase': true,
	'flex-basis': true,
	'cursor': true,
	'grow': 1,
}, {})