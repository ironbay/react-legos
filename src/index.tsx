import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Root from './root'
import { AppContainer } from 'react-hot-loader'

const element = document.getElementById('react-root')
const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>
	, element)
}
render(Root)
if (module.hot) {
		module.hot.accept("./root", () => {
			const NextApp = require<RequireImport>("./root").default
			ReactDOM.render(
				<AppContainer>
					<NextApp />
				</AppContainer>
			,
			element,
		)
	})
}
