import * as React from 'react'
import * as moment from 'moment'

import wrap from '../wrap'
import Container from '../container'
import Text from '../text'
import Tag from '../tag'
import * as Form from './index'

interface IProps {
	value: Object,
	placeholder: string,
	onChange: any,
}

const RANGE = 5
export default class DateTime extends React.Component<any, any> {
	constructor() {
		super()
		this.state = {
			unit: {
				type: 'h',
				amount: 1,
			}
		}
	}
	render() {
		const { value, onChange } = this.props
		const { unit } = this.state
		const parsed = moment(value)
		const start = parsed.clone().subtract(((parsed.date() - 1) % RANGE), 'd')
		const trigger = (timestamp: moment.Moment) => {
			onChange({
				target: {
					value: timestamp.toDate().getTime()
				}
			})
		}
		const bump = (offset: moment.Moment, amount, unit) => {
			let result = offset.clone().add(amount, unit)
			if (result.month() > start.month()) {
				result = result.set('date', 1)
			}
			if (result.month() < start.month()) {
				const last = result.clone().endOf('month').date()
				result = result.set('date', last)
			}
			trigger(result)
		}
		return (
			<span>
				<Container>
					<Arrow flip={false} onClick={() => trigger(parsed.clone().subtract(1, 'M').set('date', 1))} />
					<Form.Block align-center>
						<Text uppercase fg-gray size-3 weight-5>{start.format('MMMM YYYY')}</Text>
					</Form.Block>
					<Arrow flip={true} onClick={() => trigger(parsed.clone().add(1, 'M').set('date', 1))} />
				</Container>
				<Container>
					<Arrow flip={false} onClick={bump.bind(this, start, -1 * RANGE, 'd')} />
					<Container grow>
						{
							[0, 1, 2, 3, 4].map((offset: any) => {
								const date = start.clone().add(offset, 'd')
								if (date.month() !== start.month())
									return false
								const active = date.format('D') === parsed.format('D')
								return (
									<Date
										active={active}
										onClick={() => trigger(date.clone())}
										key={offset}
										number={date.format('DD')}
										day={date.format('ddd')} />
								)
							})
						}
					</Container>
					<Arrow flip={true} onClick={bump.bind(this, start, RANGE, 'd')} />
				</Container>
				<Container>
					<Arrow flip={false} onClick={bump.bind(this, parsed, -1 * unit.amount, unit.type)} />
					<Container grow pad-v8 justify-center>
						<Text cursor uppercase size-8 weight-3 weight-5={unit.type === 'h'} onClick={() => this.handle_unit('h', 1)} >{parsed.format('hh')}</Text>
						<Text uppercase size-8 weight-3>:</Text>
						<Text cursor uppercase size-8 weight-3 weight-5={unit.type === 'm'} onClick={() => this.handle_unit('m', 15)} >{parsed.format('mm')}</Text>
						<Text size-8 weight-3>{parsed.format('a')}</Text>
					</Container>
					<Arrow flip={true} onMouseDown={bump.bind(this, parsed, unit.amount, unit.type)} />
				</Container>
			</span>

		)
	}
	private handle_unit(type, amount) {
		this.setState({
			unit: {
				type,
				amount,
			}
		})
	}
}

function Arrow({ flip, ...rest }) {
	return <Container cursor {...rest} flex-fixed align-center pad-h5 >{flip ? '→' : '←' }</Container>
}

function Date({ number, day, active, ...rest }) {
	return (
		<Container {...rest} cursor bg-lightgray={active} vertical pad-v6 style={{width: `calc(100%/${RANGE})`, textAlign: 'center'}}>
			<Text uppercase block size-5 weight-3 mgn-b2 >{number}</Text>
			<Text uppercase block size-3 weight-3>{day}</Text>
		</Container>
	)
}