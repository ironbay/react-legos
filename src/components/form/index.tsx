import './styles.css'
import * as React from 'react'
import * as moment from 'moment'
import wrap from '../wrap'

import Text from '../text'
import Tag from '../tag'
import Container from '../container'

export { default as DateTime } from './datetime'
export { default as Tags } from './tags'

export const Input = wrap('input', 'input', {}, {})

export const TextArea = wrap('textarea', 'input', {}, {})

export const Row = wrap(Container, 'input-row', {
	'border-t': true,
	grow: 1,
}, {})

export const Select = wrap('select', 'input input-select', {}, {})

export const Block = wrap(Container, 'input-block', {
	vertical: true,
	'pad-5': true,
	'flex-basis': true,
	grow: 1,
}, {})

export const Label = wrap(Text, 'input-text', {
	uppercase: true,
	'size-3': true,
	'weight-5': true,
	'fg-gray': true,
	'mgn-b2': true,
}, {})

export function editor(name, e) {
	const component = this as React.Component<any, any>
	const { value } = e.target
	component.setState(state => {
		return {
			...state,
			item: {
				...state.item,
				[name]: value
			}
		}
	})
}