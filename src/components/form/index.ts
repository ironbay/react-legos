import * as React from 'react'
export { default as Dropdown } from './dropdown'
export { default as Checkbox } from './checkbox'
export { default as Date } from './date'
export { default as Time } from './time'
import Lego from '../lego'

export const Input = Lego<React.InputHTMLAttributes<HTMLInputElement>>('input', {
    'weight-5': true,
    style: {
        width: '100%'
    }
})

export const Textarea = Lego<React.InputHTMLAttributes<HTMLInputElement>>('textarea', {
    'weight-5': true,
    style: {
        width: '100%'
    }
})

export const Label = Lego<React.HTMLAttributes<HTMLDivElement>>('div', {
    uppercase: true,
    'size-3': true,
    'weight-6': true,
    'fg-black-40': true,
    'mgn-b2': true,
    style: {
        width: '100%'
    }
})

export const Select = Lego<React.InputHTMLAttributes<HTMLInputElement>>('select', { 'weight-5': true })
