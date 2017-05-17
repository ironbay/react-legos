import './styles.css'
import * as React from 'react'
import wrap from '../wrap'
import * as cs from 'classnames'

import Container from '../container'

export default class Modal extends React.Component<any, any> {
	constructor() {
		super()
		this.state = {
			active: true
		}
	}
	render() {
		const classes = cs('modal', this.state)
		return (
			<Container onClick={() => this.hide()} className={classes} justify-center align-center>
				<Container onClick={e => e.stopPropagation()} vertical bg-white className='modal-wrap'>
					{this.props.children}
				</Container>
			</Container>
		)
	}
	public show() {
		this.setState({
			active: true,
		})
	}
	public hide() {
		this.setState({
			active: false,
		})
	}
}
