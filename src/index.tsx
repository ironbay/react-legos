import 'moment-timezone'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './routes'

const element = document.getElementById('root')
function render() {
    const Routes = require('./routes').default
    ReactDOM.render(<Routes />, element)
}
render()
module.hot.accept(render)
