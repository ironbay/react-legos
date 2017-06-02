import * as React from 'react'
import wrap from '../wrap'
import Container from '../container'
import Tag from '../tag'

import * as Form from './index'

interface IProps {
	value: Object,
	placeholder: string,
	onChange: any,
}

export default class Tags extends React.Component<IProps, any> {
	constructor(props) {
		super()
	}
	render() {
		let keys = Object.keys(this.props.value)
		return (
			<Container mgn-t2 style={{display: 'block'}}>
				{
					keys.map(item => {
						return <Tag key={item} mgn-r3 mgn-b3>{item}</Tag>
					})
				}
				<Container mgn-t>
					<Form.Input onKeyUp={this.add_tag} placeholder={this.props.placeholder} />
				</Container>
			</Container>
		)
	}
	private add_tag = e => {
		if (e.which !== 13)
			return
		this.props.onChange({
			target: {
				value: {
					...this.props.value,
					[e.target.value]: true,
				}
			}
		})
		e.target.value = ''
	}
}