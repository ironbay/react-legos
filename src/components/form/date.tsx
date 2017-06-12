import * as React from 'react'
import * as moment from 'moment'

import wrap from '../wrap'
import Container from '../container'
import Text from '../text'
import Tag from '../tag'
import * as Form from './index'

interface IProps {
	value: number,
	onChange: any,
	type: Type,
	[key: string]: any
}

type Type = 'time' | 'date'

const RANGE = 5

const FORMATS = {
	time: 'h:mma',
	date: 'M/D/YYYY'
}
const DISPLAY_FORMATS = {
	time: 'hh:mma',
	date: 'MM/DD/YYYY'
}

export default class Date extends React.Component<IProps, any> {
	constructor(props) {
		super()
		this.state = {
			value: false,
		}
	}
	render() {
		const { value, onChange, type, ...rest } = this.props
		const ts = moment(value)
		return (
			<Form.Input
				error={this.state.value}
				value={this.state.value === false ? ts.format(DISPLAY_FORMATS[type]) : this.state.value}
				onChange={this.handle_change}
				{...rest} />
		)
	}
	handle_change = e => {
		const input = e.target.value as string

		const { type, value } = this.props
		const result = this.parse(input, type)
		if (result) {
			const payload = {
				target: {
					value: (type === 'time' ? this.set_time(value, result) : this.set_date(value, result)).toDate().getTime()
				}
			}
			this.props.onChange(payload)
			this.setState({
				value: false,
			})
			return
		}
		this.setState({
			value: input
		})
	}
	private set_time(input: number, next: moment.Moment) {
		return moment(input).set({
			hour: next.hour(),
			minute: next.minute(),
			second: next.second(),
		})
	}
	private set_date(input: number, next: moment.Moment) {
		return moment(input).set({
			month: next.month(),
			date: next.date(),
			year: next.year(),
		})
	}
	private parse(input: string, type: string) {
		const format = FORMATS[type]
		const stripped = input.replace(' ', '')
		const parsed = moment(stripped, format, true)
		if (!parsed.isValid())
			return false
		if (type !== 'time')
			return parsed
		if (stripped.indexOf('am') > -1 || stripped.indexOf('pm') > -1)
			return parsed
		return false
	}
}