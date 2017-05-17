import './styles.css'
import * as React from 'react'

import Container from '../../components/container'
import Text from '../../components/text'
import Tag from '../../components/tag'
import Modal from '../../components/modal'
import { Input, InputRow, InputBlock, InputLabel, InputArea } from '../../components/form'

export default class HomePage extends React.Component<any, any> {
	constructor() {
		super()
	}
	render() {
		return (
			<Container vertical align-center pad-8>
				<Modal>
					<Container pad-8 vertical>
						<Text size-5 weight-5>Edit Item</Text>
					</Container>
					<Container vertical>
						<InputRow>
							<InputBlock border-r>
								<InputLabel>Title</InputLabel>
								<Input placeholder='Name of item' />
							</InputBlock>
							<InputBlock>
								<InputLabel>Referrer</InputLabel>
								<Input placeholder='Your name.' />
							</InputBlock>
						</InputRow>
						<InputRow>
							<InputBlock border-r>
								<InputLabel>Description</InputLabel>
								<InputArea rows={5} placeholder='Description of item' />
							</InputBlock>
						</InputRow>
						<InputRow>
							<InputBlock border-r>
								<InputLabel>Tags</InputLabel>
								<Container mgn-t2>
									<Tag fg-blue mgn-r3>Hello</Tag>
									<Tag fg-blue mgn-r3>Bye</Tag>
								</Container>
							</InputBlock>
						</InputRow>
					</Container>
					<Container bg-blue pad-6 justify-center>
						<Text fg-white weight-5 >Save</Text>
					</Container>
				</Modal>
				<Container vertical wrap>
					<Text size-8 weight-5 mgn-v8>Example</Text>
					<Container vertical pad-8 bg-white border mgn-b8>
						<Text size-5 weight-5>Some Title</Text>
						<Text size-4 fg-gray mgn-t2>added by Dax five days ago</Text>
						<Container mgn-t3>
							<Tag fg-blue mgn-r3>Hello</Tag>
							<Tag fg-blue mgn-r3>Bye</Tag>
						</Container>
						<Text fg-gray line-8 mgn-t3>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum sem sit amet ultricies lacinia. Nulla et varius elit. Duis sed tristique mi, sit amet lacinia nisi. Etiam in nunc et est interdum placerat vel ut elit. Integer feugiat lobortis purus, vitae iaculis lorem. Fusce sed turpis tellus. Vestibulum gravida mauris eget mi fermentum bibendum.
						</Text>
					</Container>
					<Container vertical pad-8 bg-white border mgn-b8>
						<Text size-5 weight-5>Some Title</Text>
						<Text size-4 fg-gray mgn-t2>added by Dax five days ago</Text>
						<Container mgn-t3>
							<Tag fg-blue mgn-r3>Hello</Tag>
							<Tag fg-blue mgn-r3>Bye</Tag>
						</Container>
						<Text fg-gray line-8 mgn-t3>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum sem sit amet ultricies lacinia. Nulla et varius elit. Duis sed tristique mi, sit amet lacinia nisi. Etiam in nunc et est interdum placerat vel ut elit. Integer feugiat lobortis purus, vitae iaculis lorem. Fusce sed turpis tellus. Vestibulum gravida mauris eget mi fermentum bibendum.
						</Text>
					</Container>
				</Container>
			</Container>
		)
	}
}
