import './styles.css'
import * as React from 'react'

import Container from '../../components/container'

export default class HomePage extends React.Component<any, any> {
	constructor() {
		super()
	}
	render() {
		return (
			<Container pad-l className='home-page'>
				Hello this is the home page!
			</Container>
		)
	}
}
