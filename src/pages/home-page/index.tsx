import './styles.css'
import * as React from 'react'

import Container from '../../components/container'
import Text from '../../components/text'

export default class HomePage extends React.Component<any, any> {
	constructor() {
		super()
	}
	render() {
		return (
			<Container vertical pad-l className='home-page'>
				<Text xxs>Text xxs</Text>
				<Text xs>Text xs</Text>
				<Text s>Text s</Text>
				<Text>Text</Text>
				<Text l>Text l</Text>
				<Text xl>Text xl</Text>
				<Text xxl>Text xxl</Text>
			</Container>
		)
	}
}
