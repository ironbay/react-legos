import * as React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Root from './root'

const routes = () => {
	return (
		<BrowserRouter>
			<Root>
			</Root>
		</BrowserRouter>
	)
}


export default routes
