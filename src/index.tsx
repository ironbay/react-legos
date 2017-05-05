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
console.log(Routes)
render(Routes)
if (module.hot) {
		module.hot.accept('./root', () => {
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
