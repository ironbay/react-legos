import * as React from 'react'
import * as cs from 'classnames'

export default function wrap(element: any, baseClass: string, props: Object, modifiers: Object): any {
	return function({ children, className, ...rest }) {
		const classes = {}
		for (let key of Object.keys(rest)) {
			const prefix = key.split('-')[0]
			if (modifiers[prefix]) {
				classes[key] = true
				delete rest[key]
			}
		}
		const combined = cs(baseClass, className, classes)
		return React.createElement(element, {
			className: combined,
			...rest,
			...props,
		}, children)
	}
}
