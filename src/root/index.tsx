import './reset.css'
import './styles.css'
import * as React from 'react'

import Container from '../components/container'

export default class Root extends React.Component<any, any> {
	constructor() {
		super()
	}
	render() {
		return (
			<Container vertical>
				{this.props.children}
			</Container>
		)
	}
}
