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
			<Container vertical pad-8>
				<Container vertical mgn-b4>
					<Text size-4>Text 4</Text>
					<Text size-5>Text 5</Text>
					<Text size-6>Text 6</Text>
					<Text size-7>Text 4</Text>
					<Text size-8>Text 5</Text>
					<Text size-9>Text 9</Text>
					<Text size-10 >Text 10</Text>
					<Text size-11 >Text 11</Text>
					<Text size-12 >Text 12</Text>
				</Container>
				<Container vertical>
					<Text weight-1>Hello</Text>
					<Text weight-2>Hello</Text>
					<Text weight-3>Hello</Text>
					<Text weight-4>Hello</Text>
					<Text weight-5>Hello</Text>
					<Text weight-6>Hello</Text>
					<Text weight-7>Hello</Text>
					<Text weight-8>Hello</Text>
				</Container>
			</Container>
		)
	}
}
