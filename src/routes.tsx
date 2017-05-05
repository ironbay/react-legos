import * as React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Root from './root'

import HomePage from './pages/home-page'

const routes = () => {
	return (
		<BrowserRouter>
			<Root>
				<Route path='/' component={HomePage} />
			</Root>
		</BrowserRouter>
	)
}


export default routes
