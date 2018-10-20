import * as React from 'react'
import { Container } from '../'
import Lego from '../lego'

interface Props {
    value?: any
    placeholder?: string
    options: { [key: string]: any }
    onChange?: (val: any) => void
}
interface State {
    active: boolean
}

export default class Dropdown extends React.Component<Props & React.HTMLAttributes<HTMLDivElement>, State> {
    state = {
        active: false
    }
    render() {
        const { options, value, placeholder, ...rest } = this.props
        const { active } = this.state
        const label = options[String(value)]
        return (
            <Container relative mgn-b2 inline-block {...rest}>
                <Container cursor-pointer weight-5 onClick={() => this.setState({ active: true })}>{label || placeholder}</Container>
                <Container bg-white pad-h4 pad-v2 radius-4 style={{
                    zIndex: active ? 1000 : -1000,
                    opacity: active ? 100 : 0,
                    pointerEvents: active ? 'all' : 'none',
                    position: 'absolute',
                    transition: '250ms all',
                    transform: active ? 'initial' : 'translate3D(0, -15px, 0)',
                    left: 0,
                    top: 25,
                    width: '20rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                }}>
                    {
                        Object
                            .entries(options)
                            .map(([k, v]) => (
                                <Container
                                    onClick={() => this.handle_change(k)}
                                    className="omnibox-hover"
                                    key={k}
                                    pad-v1
                                    line-5
                                    size-3-5
                                    weight-5
                                    cursor-pointer
                                >
                                    {v}
                                </Container>
                            ))
                    }
                </Container>
            </Container>
        )
    }

    private handle_change(val: any) {
        this.props.onChange && this.props.onChange(val)
        this.setState({
            active: false
        })
    }
}
