import './reset.css'
import './styles.css'
import * as React from 'react'

export default class Root extends React.Component<any, any> {
	constructor() {
		super()
	}
	render() {
		console.log(this.props)
		return (
			<div>
				{this.props.children}
			</div>
		)
	}

}
