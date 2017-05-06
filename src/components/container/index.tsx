import './styles.css'
import * as React from 'react'
import wrap from '../wrap'

export default wrap('div', 'container', {}, [
	'horizontal',
	'vertical',

	'align-center',
	'justify-center',

	'margin-v',
	'margin-h',
	'margin-right',
	'margin-left',
	'margin-top',
	'margin-bottom',

	'pad-v',
	'pad-h',
	'pad-right',
	'pad-left',
	'pad-top',
	'pad-bottom',
])
