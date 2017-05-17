import './styles.css'
import * as React from 'react'
import wrap from '../wrap'

import Container from '../container'

export default wrap(Container, 'text', {}, {
	size: true,
	uppercase: true,
	weight: true,
	preserve: true,
	line: true,
})
