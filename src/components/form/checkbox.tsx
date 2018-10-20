import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Container } from '../'
const IMG_CHECK = require('./check.png')

interface CheckboxProps {
    value: boolean
    big?: boolean
}
export default function Checkbox(props: CheckboxProps) {
    const { value, big, ...rest } = props
    return (
        <Container
            border-1
            radius-3
            fg-white
            style={{
                width: big ? '28px' : '14px',
                height: big ? '28px' : '14px',
                borderColor: props.value ? 'transparent' : '#7f8fa4',
                color: 'white',
                MozUserSelect: 'none',
                WebkitUserSelect: 'none',
                msUserSelect: 'none'
            }}
            bg-blue={props.value}
            flex
            align-center
            justify-center
            cursor-pointer
            {...rest}
        >
            {
                props.value &&
                <img width={props.big ? 12 : 9} height={props.big ? 12 : 9} src={IMG_CHECK} />
            }
        </Container>
    )
}
