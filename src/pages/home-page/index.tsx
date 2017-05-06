import './styles.css'
import * as React from 'react'

export default class HomePage extends React.Component<any, any> {
	constructor() {
		super()
	}
	render() {
		return (
			<div className='home-page'>
				Hello this is the home page!
			</div>
		)
	}
}
