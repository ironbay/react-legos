import * as React from 'react'
import Moment from 'moment'
import Input from './input'
import { Container } from '../index'

const FORMAT_PARSE = 'M/D/YYYY'
const FORMAT_DISPLAY = 'MM/DD/YYYY'

interface Props {
    value?: number
    onChange?: (val: number) => void
}

interface State {
    value?: string | boolean
}

export default class Date extends React.Component<React.HTMLAttributes<HTMLInputElement> & Props, State> {
    state = {
        value: null
    }

    render() {
        const { value, onChange, ...rest } = this.props
        return (
            <Container flex>
                <Input
                    onBlur={() => this.handle_blur()}
                    onChange={e => this.setState({ value: e.target.value })}
                    value={this.state.value == null ? (value > 0 ? Moment(value).format(FORMAT_DISPLAY) : '') : this.state.value as string}
                    {...rest} />
            </Container>
        )
    }

    private handle_blur() {
        const { onChange } = this.props
        if (onChange) {
            const parsed = Moment(this.state.value as string, FORMAT_PARSE)
            if (parsed.isValid()) {
                onChange(
                    Moment(this.props.value)
                        .set({
                            date: parsed.date(),
                            month: parsed.month(),
                            year: parsed.year()
                        })
                        .toDate()
                        .getTime()
                )
            }
        }
        this.setState({
            value: null
        })
    }
}