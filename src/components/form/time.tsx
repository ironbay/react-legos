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

const DISPLAY_FORMAT = 'hh:mma'

export default class Time extends React.Component<IProps, any> {
	private editing: any
	constructor(props) {
		super()
		this.state = {
			input: false,
		}
	}
	render() {
		const { value, onChange, ...rest } = this.props
		const ts = moment(value)
		const { input } = this.state
		return (
			<Container
				vertical
				relative>
				<Container style={{alignItems: 'baseline'}}>
					<Container>
						<Form.Input
							onBlur={this.set_time}
							error={input !== false && !moment(input, DISPLAY_FORMAT).isValid()}
							onChange={this.handle_change}
							value={input === false ? ts.format(DISPLAY_FORMAT) : input}
							{...rest}
						/>
					</Container>
				</Container>
			</Container>
		)
	}
	private handle_change = e => {
		const { value } = e.target
		this.setState({
			input: value
		})
	}
	private set_time = () => {
		const parsed = moment(this.state.input, DISPLAY_FORMAT)
		const value = moment(this.props.value)
		const next = parsed.isValid() ? parsed : value
		this.props.onChange({
			target: {
				value: value.set({
					hour: next.hour(),
					minute: next.minute(),
					second: next.second(),
				}).toDate().getTime()
			}
		})
		this.setState({
			input: false
		})
	}
}

function Arrow({ flip, ...rest }) {
	return <Container cursor {...rest} flex-fixed align-center pad-h5 >{flip ? '→' : '←' }</Container>
}