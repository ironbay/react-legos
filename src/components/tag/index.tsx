import './styles.css'
import * as React from 'react'
import wrap from '../wrap'

import Text from '../text'

export default wrap(Text, 'tag', {
	uppercase: true,
	'medium': true,
}, [])
