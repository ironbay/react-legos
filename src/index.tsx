import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Routes from './routes'

const element = document.getElementById('react-root')
const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>
	, element)
}
render(Routes)
if (module.hot) {
		module.hot.accept('./routes', () => {
			const NextApp = require<RequireImport>('./routes').default
			ReactDOM.render(
				<AppContainer>
					<NextApp />
				</AppContainer>
			,
			element,
		)
	})
}
