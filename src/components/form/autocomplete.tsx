import * as React from 'react'
import * as ReactDOM from 'react-dom'
import wrap from '../wrap'
import { Input } from './index'

import Container from '../container'
import Text from '../text'

interface IProps {
	value: string
	options: { [key: string]: any }
	[key: string]: any,
}

interface IState {
	focus: boolean,
	filter: string
}

export default class Autocomplete extends React.Component<IProps, IState> {
	constructor() {
		super()
		this.state = {
			focus: false,
			filter: '',
		}
	}
	render() {
		const { value, options, onChange, ...rest } = this.props
		const { focus, filter } = this.state
		const matches = this.matches(options, filter)
		const display = options[value]
		return (
			<Container style={{position: 'relative'}} vertical onBlur={this.handle_focus.bind(this, false)} >
				<Container align-center>
					{display && <Text mgn-r4 size-4>{display}</Text> }
					<Container >
						<Input
							value={this.state.filter}
							onChange={this.handle_search}
							onFocus={this.handle_focus.bind(this, true)}
							{...rest} />
					</Container>
				</Container>
				<Container
					onFocus={console.log}
					style={{
						position: 'absolute',
						top: '41px',
						width: '30rem',
						left: '-20px',
					}}
					vertical
					hide={!focus || !filter}
					border-v
					bg-lightgray >
					{
						matches.map(([key, value])=> {
							return (
								<Container cursor pad-h5 pad-v5 key={key} onMouseDown={() => this.handle_change(key)} >
									<Text size-3-5>{value}</Text>
								</Container>
							)
						})
					}
					{
						matches.length === 0 && 
								<Container cursor pad-h5 pad-v5 >
									<Text size-3-5>No matches found</Text>
								</Container>
					}
				</Container>
			</Container>
		)
	}
	private handle_change = value => {
		this.props.onChange({
			target: {
				value,
			}
		})
		this.setState({
			filter: '',
		})
	}
	private handle_focus = value => {
		this.setState({
			focus: value,
			filter: '',
		})
	}
	private handle_search = e => {
		this.setState({
			filter: e.target.value
		})
	}
	private matches(options: Object, filter: string) {
		if (!filter)
			return []
		filter = filter.toLowerCase()
		return Object
		.entries(options)
		.filter(([_, value]) => value.toLowerCase().indexOf(filter) > -1)
	}
}