import './styles.css'
import * as React from 'react'
import Container from '../container'
import Image from '../image'


export default function Icon({ src, ...rest }) {
	return (
		<Container cursor {...rest}>
			<Image width={18} src={`https://feathericons.com/node_modules/feather-icons/dist/icons/${src}.svg`}  />
		</Container>
	)
}
