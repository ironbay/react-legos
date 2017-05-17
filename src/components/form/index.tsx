import './styles.css'
import * as React from 'react'
import wrap from '../wrap'

import Text from '../text'
import Container from '../container'

export const Input = wrap('input', 'input', {}, {})

export const InputArea = wrap('textarea', 'input', {}, {})

export const InputRow = wrap(Container, 'input-row', {
	'border-t': true
}, {})

export const InputBlock = wrap(Container, 'input-row', {
	vertical: true,
	'pad-4': true,
	grow: true,
}, {})

export const InputLabel = wrap(Text, 'input-text', {
	uppercase: true,
	'size-3': true,
	'weight-5': true,
	'fg-gray': true,
	'mgn-b': true,
}, {})

export function InputTags({ tags, ...rest }) {

}
