import '@ironbay/legos/dist/raw.css'
import * as React from 'react'
import Classnames from 'classnames'
import Legos from '@ironbay/legos/dist/classes'

export default function Lego<P>(Component: string | React.StatelessComponent<P> | React.ComponentClass<P, any>, forced = {} as P & typeof Legos) {
    return class extends React.Component<P & typeof Legos> {
        render() {
            const { className: input_className, style: input_style, children, ...input_rest } = this.props as any
            const { className: forced_className, style: forced_style, ...forced_rest } = forced as any
            const rest = {
                ...input_rest,
                ...forced_rest
            }

            const classes = {}
            for (let key of Object.keys(rest)) {
                if (Legos[key]) {
                    classes[key] = rest[key]
                    delete rest[key]
                }
            }
            const combined = Classnames(input_className, forced_className, classes)
            return (
                <Component
                    className={combined}
                    style={{
                        ...input_style,
                        ...forced_style
                    }}
                    {...rest}
                >
                    {children}
                </Component>
            )
        }
    }
}
