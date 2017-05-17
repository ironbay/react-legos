import './styles.css'
import * as React from 'react'
import wrap from '../wrap'

import Container from '../container'

export default class Modal extends React.Component<any, any> {
	render() {
		return (
			<Container className='modal' justify-center align-center>
				<Container vertical bg-white className='modal-wrap'>
					{this.props.children}
				</Container>
			</Container>
		)
	}
}
