import './styles.css'
import * as React from 'react'
import wrap from '../wrap'

import Container from '../container'

export default wrap(Container, 'text', {}, [
	'xxs',
	'xs',
	's',
	'l',
	'xl',
	'xxl',

	'stretch',

	'uppercase',

	'thin',
	'light',
	'medium',
	'semibold',
	'bold',
	'extrabold',
	'black',

	'preserve',
])
