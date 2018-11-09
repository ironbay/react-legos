import * as React from 'react'
import Moment from 'moment'
import Input from './input'

const FORMAT_PARSE = 'h:ma'
const FORMAT_DISPLAY = 'hh:mma z'

interface Props {
    timezone?: string
    value?: number
    onChange?: (val: number) => void
}

interface State {
    value?: string | boolean
}

export default class Time extends React.Component<React.HTMLAttributes<HTMLInputElement> & Props, State> {
    state = {
        value: null
    }

    render() {
        const { value, onChange, timezone, ...rest } = this.props
        return (
            <Input
                onBlur={() => this.handle_blur()}
                onChange={e => this.setState({ value: e.target.value })}
                value={this.state.value == null ? Moment.tz(value, timezone || Moment.tz.guess()).format(FORMAT_DISPLAY) : this.state.value as string}
                {...rest} />
        )
    }

    private handle_blur() {
        const { onChange, timezone } = this.props
        if (onChange) {
            const parsed = Moment.tz(this.state.value as string, FORMAT_PARSE, timezone || Moment.tz.guess())
            if (parsed.isValid()) {
                onChange(
                    Moment(this.props.value)
                        .set({
                            hour: parsed.hour(),
                            minute: parsed.minute(),
                            second: parsed.second()
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