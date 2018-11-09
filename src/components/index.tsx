import * as React from 'react'
import Lego from './lego'

export const Container = Lego<React.HTMLAttributes<HTMLDivElement>>('div')
export const Span = Lego<React.HTMLAttributes<HTMLDivElement>>('span')
export const Image = Lego<React.HTMLAttributes<HTMLDivElement>>('img')
export const Anchor = Lego<React.HTMLAttributes<HTMLAnchorElement>>('a')

export function Wrap(props: React.HTMLAttributes<HTMLDivElement>) {
    const { children, ...rest } = props
    return (
        <Container flex justify-center {...rest}>
            <Container style={{ width: '68rem', maxWidth: '100%' }}>
                {children}
            </Container>
        </Container>
    )
}