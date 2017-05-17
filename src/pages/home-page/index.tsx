import './styles.css'
import * as React from 'react'

import Container from '../../components/container'
import Text from '../../components/text'
import Tag from '../../components/tag'
import Modal from '../../components/modal'
import { editor, Input, InputTags, InputRow, InputBlock, InputLabel, InputArea } from '../../components/form'

export default class HomePage extends React.Component<any, any> {
	constructor() {
		super()
		this.state = {
			name: 'Some Item',
			tags: {
				hello: 1,
				bye: 1,
			},
			modal: true,
		}
	}
	componentDidMount() {
	}
	render() {
		return (
			<Container vertical align-center pad-8>
				<Modal active={this.state.modal} onHide={() => this.setState({modal: false})} >
					<Container pad-8 vertical>
						<Text size-5 weight-5>Edit Item</Text>
					</Container>
					<Container vertical>
						<InputRow>
							<InputBlock border-r>
								<InputLabel>Title</InputLabel>
								<Input value={this.state.name} placeholder='Name of item' onChange={editor.bind(this, 'name')}/>
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
							<InputBlock>
								<InputLabel>Tags</InputLabel>
								<InputTags placeholder='Add tag...' value={this.state.tags} onChange={editor.bind(this, 'tags')} />
							</InputBlock>
						</InputRow>
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
