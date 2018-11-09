import * as React from 'react'
import Lego from '../lego'

export default Lego<React.InputHTMLAttributes<HTMLInputElement>>('input', {
    'weight-5': true,
    style: {
        width: '100%'
    }
})