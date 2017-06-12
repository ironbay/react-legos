import './styles.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Dynamic  } from '@ironbay/kora'
import wrap from '../wrap'

import Text from '../text'
import Tag from '../tag'
import Container from '../container'

export { default as DateTime } from './datetime'
export { default as Date } from './date'
export { default as Tags } from './tags'
export { default as Autocomplete } from './autocomplete'

export const Input = wrap('input', 'input', {}, {
	error: true
})

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


export function edit(component: React.Component<any, any>, ...path: (string | ((e: any) => void))[]) {
	let cb = e => {}
	if (typeof path[path.length - 1] !== 'string') {
		cb = path.pop() as (e: any) => void
	}
	return e => {
		const { value } = e.target
		component.setState(state => {
			let { item, changed } = state
			item = Dynamic.put({
				...(item || {})
			}, path, value)
			changed = Dynamic.put({
				...(changed || {})
			}, path, value)
			return {
				...state,
				item,
				changed,
			}
		}, () => cb(value))
	}
}

export class Address extends React.Component<any, any> {
	private ac: google.maps.places.Autocomplete
	render() {
		const { value, onChange, ...rest } = this.props
		return <Input value={value.format} onChange={e => this.change({ format: e.target.value })} {...rest} />
	}
	componentDidMount() {
		const input = ReactDOM.findDOMNode(this) as HTMLInputElement
		const ac = new google.maps.places.Autocomplete(input)
		ac.addListener('place_changed', () => {
			const place = ac.getPlace()
			const payload = {
				format: input.value,
				name: place.name,
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
			}
			this.change(payload)
		})
		this.ac = ac
	}
	componentWillUnmount() {
		this.ac.unbindAll()
	}
	private change(obj) {
		this.props.onChange({
			target: {
				value: obj
			}
		})
	}
}

export class Editor<T> {
	private field: string
	private component: React.Component<any, any>
	public changes: Object = {}
	constructor(component: React.Component<any, any>, field: string) {
		this.component = component
		this.field = field
	}
	edit(input: T) {
		this.changes = {}
		this.component.setState({
			[this.field]: input
		})
	}
	handle(...path: (string | ((e: any) => void))[]) {
		let cb = e => {}
		if (typeof path[path.length - 1] !== 'string') {
			cb = path.pop() as (e: any) => void
		}
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target
			this.component.setState(state => {
				const target = state[this.field] || {}
				const next = Dynamic.put({ ...target }, path, value)
				Dynamic.put(this.changes, path, value)
				return {
					[this.field]: next,
				}
			}, () => cb(value))
		}
	}
}