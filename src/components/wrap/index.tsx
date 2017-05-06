import * as React from 'react'
import * as cs from 'classnames'

export default function Wrap(element: any, className: string, props: Object, modifiers: Array<string>): any {
	return function({ children, ...rest }) {
		const classes = {}
		for (let key of modifiers) {
			classes[key] = rest[key]
			delete rest[key]
		}
		const combined = cs(className, rest['className'], classes)
		delete rest['className']
		return React.createElement(element, {
			className: combined,
			...rest,
			...props,
		}, children)
	}
}
