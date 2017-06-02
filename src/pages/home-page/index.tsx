import './styles.css'
import * as React from 'react'

import Container from '../../components/container'
import Text from '../../components/text'
import Tag from '../../components/tag'
import { Modal } from '../../components/modal'
import * as Form from '../../components/form'

export default class HomePage extends React.Component<any, any> {
	constructor() {
		super()
		this.state = {
			item: {
				name: 'Some Item',
				tags: {
					hello: 1,
					bye: 1,
				},
			},
			modal: true,
		}
	}
	componentDidMount() {
	}
	render() {
		const { item, modal } = this.state
		return (
			<Container vertical align-center pad-8>
				<Modal active={modal} onHide={() => this.setState({modal: false})} >
					<Container pad-8 vertical>
						<Text size-5 weight-5>Edit Item</Text>
					</Container>
					<Container vertical>
						<Form.Row>
							<Form.Block border-r>
								<Form.Label>Name</Form.Label>
								<Form.Input value={item.name} placeholder='Name of item' onChange={Form.editor.bind(this, 'name')}/>
							</Form.Block>
							<Form.Block>
								<Form.Label>Referrer</Form.Label>
								<Form.Input placeholder='Your name' />
							</Form.Block>
						</Form.Row>
						<Form.Row>
							<Form.Block border-r>
								<Form.Label>Description</Form.Label>
								<Form.TextArea rows={5} placeholder='Description of item' />
							</Form.Block>
						</Form.Row>
						<Form.Row>
							<Form.Block>
								<Form.Label>Tags</Form.Label>
								<Form.Tags placeholder='Add tag...' value={item.tags} onChange={Form.editor.bind(this, 'tags')} />
							</Form.Block>
						</Form.Row>
					</Container>
					<Container cursor bg-blue pad-6 justify-center>
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
