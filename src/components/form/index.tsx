import './styles.css'
import * as React from 'react'
import wrap from '../wrap'

import Text from '../text'
import Tag from '../tag'
import Container from '../container'

export const Input = wrap('input', 'input', {}, {})

export const InputArea = wrap('textarea', 'input', {}, {})

export const InputRow = wrap(Container, 'input-row', {
	'border-t': true
}, {})

export const InputBlock = wrap(Container, 'input-row', {
	vertical: true,
	'pad-5': true,
	grow: true,
}, {})

export const InputLabel = wrap(Text, 'input-text', {
	uppercase: true,
	'size-3': true,
	'weight-5': true,
	'fg-gray': true,
	'mgn-b': true,
}, {})


interface IInputTagProps {
	value: Object,
	placeholder: string,
	onChange: any,
}

export class InputTags extends React.Component<IInputTagProps, any> {
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
					<Input onKeyUp={this.add_tag} placeholder={this.props.placeholder} />
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

export function editor(name, e) {
	this.setState({
		[name]: e.target.value
	})
}
