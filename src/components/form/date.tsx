import * as React from 'react'
import * as moment from 'moment'

import wrap from '../wrap'
import Container from '../container'
import Text from '../text'
import Tag from '../tag'
import Icon from '../icon'
import * as Form from './index'

interface IProps {
	value: number,
	onChange: any,
	[key: string]: any
}

const RANGE = 5

const FORMAT = 'M/D/YYYY'

const DISPLAY_FORMAT = 'MM/DD/YYYY'

export default class Date extends React.Component<IProps, any> {
	constructor(props) {
		super()
		this.state = {
			value: false,
			focus: false,
		}
	}
	render() {
		const { focus } = this.state
		const { value, onChange, disabled, ...rest } = this.props
		const ts = moment(value)
		return (
			<Container
				vertical
				relative>
				<Container>
					<Form.Input
						error={this.state.value}
						value={this.state.value === false ? ts.format(DISPLAY_FORMAT) : this.state.value}
						onChange={this.handle_change}
						disabled={disabled}
						{...rest} />
					{!disabled && <Icon src='calendar' onClick={() => this.handle_focus(!focus)} />}
				</Container>
				{ focus && this.render_dropdown(ts) }
			</Container>
		)
	}
	private render_dropdown(ts: moment.Moment) {
		const start = ts.clone().startOf('month')
		const end = ts.clone().endOf('month')
		const days = [] as Array<moment.Moment>
		for (let m = start.clone().startOf('week'); m.isBefore(end); m.add('days', 1)) {
			days.push(m.clone())
		}
		return (
			<Container
				style={{
					zIndex: '1000',
					position: 'absolute',
					top: '40px',
					width: '30rem',
					left: '-16px',
				}}
				vertical
				border-v
				bg-lightgray
			>
				<Container>
					<Arrow flip={false} onClick={() => this.handle_date(start.clone().add(-1, 'month'))} />
					<Text center grow pad-v6 weight-5>{start.format('MMMM')}</Text>
					<Arrow flip={true} onClick={() => this.handle_date(start.clone().add(1, 'month'))} />
				</Container>
				<Container grid>
					{
						days.map((item, n) => {
							const disabled = item.month() !== ts.month()
							const active = !disabled && item.date() === ts.date()
							return (
								<Container
									key={n}
									pad-v4
									align-center
									justify-center
									vertical
									flex-fixed
									cursor={!disabled}
									onClick={() => {
										if (disabled)
											return
										this.handle_date(item, true)
										this.handle_focus(false)
									}}
									style={{
										width: 'calc(100%/7)'
									}}
								>
									<Text
										mgn-b
										hide={disabled}
										weight-5={active}
										fg-highlight={active}>
										{item.format('DD')}
									</Text>
									<Text
										hide={disabled}
										size-3
										weight-3
										fg-highlight={active}
										weight-5={active}>{item.format('ddd')}
									</Text>
								</Container>
							)
						})
					}
				</Container>
			</Container>
		)
	}
	private handle_date = (value: moment.Moment, hide = false) => {
		this.handle_change({
			target: {
				value: value.format(FORMAT)
			}
		})
	}
	private handle_focus = value => {
		this.setState({
			focus: value,
		})
	}
	handle_change = e => {
		const input = e.target.value as string

		const { value } = this.props
		const result = this.parse(input)
		if (result) {
			const payload = {
				target: {
					value: this.set_date(value, result).toDate().getTime()
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
	private parse(input: string) {
		const format = FORMAT
		const stripped = input.replace(' ', '')
		const parsed = moment(stripped, format, true)
		if (!parsed.isValid())
			return false
		return parsed
	}
}

function Arrow({ flip, ...rest }) {
	return <Container cursor {...rest} flex-fixed align-center pad-h5 >{flip ? '→' : '←' }</Container>
}