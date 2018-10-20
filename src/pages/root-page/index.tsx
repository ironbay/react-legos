import * as React from 'react'

export default class Root extends React.Component<any, any> {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                {
                    React.cloneElement(this.props.children as any)
                }
            </div>
        )
    }
}