import './styles.css'
import * as React from 'react'
import wrap from '../wrap'
import * as cs from 'classnames'

import Container from '../container'
import Text from '../text'
import Icon from '../icon'

interface IProps {
	active?: boolean,
	slider?: boolean,
	onHide?: () => void,
	children: JSX.Element[],
}

export function Modal(props: IProps) {
	const classes = cs('modal', {
		active: props.active
	})
	const wrap_classes = cs('modal-wrap', {
		slider: props.slider
	})
	return (
		<Container onClick={props.onHide} className={classes} justify-center align-center>
			<Container onClick={e => e.stopPropagation()} vertical bg-white className={wrap_classes}>
				{props.children}
				<Container hide-desktop mgn-l4 onClick={props.onHide} style={{position: 'absolute', top: 16}}>
					<Icon src='x'/>
				</Container>
			</Container>
		</Container>
	)
}

export const ModalTitle = wrap(Text, 'modal-title', {
	'pad-v5': true,
	'bg-lightgray': true,
	'weight-5': true,
	'fg-gray': true,
	unselectable: true,
	style: {
		textAlign: 'center'
	}
}, {})

export class ModalButton extends React.Component<any, any> {
	constructor() {
		super()
		this.state = {
			active: false,
		}
	}
	render() {
		const { active } = this.state
		const props = {
			...this.props,
			onClick: this.handle_click,
			children: active ? 'Working...' : this.props.children
		}
		return this.wrap(props)
	}

	private handle_click = async e => {
		if (this.state.active)
			return
		this.setState({
			active: true
		})
		try {
			await this.props.onClick(e)
		} catch (ex) {
			alert(ex)
		}
		this.setState({
			active: false
		})

	}

	private wrap = wrap(Text, 'modal-button', {
		'pad-v5': true,
		'justify-center': true,
		'weight-5': true,
		'size-3': true,
		'uppercase': true,
		'flex-basis': true,
		'cursor': true,
		'grow': 1,
	}, {})


}