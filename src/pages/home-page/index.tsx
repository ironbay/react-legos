import * as React from 'react'
import { Container, Wrap } from '../../components'
import * as Form from '../../components/form'

interface State {
    dropdown?: string
    checkbox?: boolean
    date?: number
}

export default class HomePage extends React.Component<any, State> {
    state = {
        dropdown: '',
        checkbox: true,
        date: new Date().getTime()
    }
    text: null
    render() {
        const { state } = this
        return (
            <Container pad-8>
                <Wrap>
                    <Container size-8 weight-5>Legos</Container>

                    <Container mgn-t8>
                        <Container size-5 weight-5>Container</Container>
                        <Container mgn-t4 bg-blue>
                            <Container flex>
                                <Container pad-4 bg-red flex-grow />
                                <Container pad-4 bg-pink flex-grow />
                            </Container>
                            <Container flex>
                                <Container pad-4 flex-third pad-2 bg-green />
                                <Container pad-4 flex-third pad-2 bg-blue />
                                <Container pad-4 flex-third pad-2 bg-orange />
                            </Container>
                        </Container>
                    </Container>

                    <Container mgn-t8>
                        <Container size-5 weight-5>Form</Container>
                        <Container mgn-t4>
                            <Form.Label>Text Input</Form.Label>
                            <Form.Input placeholder="Enter text" />
                        </Container>
                        <Container mgn-t4 flex>
                            <Container flex-grow>
                                <Form.Label>Date</Form.Label>
                                <Form.Date onChange={val => this.setState({ date: val })} value={state.date} placeholder="Enter text" />
                            </Container>
                            <Container flex-grow>
                                <Form.Label>Time</Form.Label>
                                <Form.Time onChange={val => this.setState({ date: val })} value={state.date} placeholder="Enter text" />
                            </Container>
                        </Container>
                        <Container mgn-t8>
                            <Form.Label>Text Area</Form.Label>
                            <Form.Textarea placeholder="Enter text" />
                        </Container>
                        <Container mgn-t8>
                            <Form.Label>Native Select</Form.Label>
                            <Form.Select pad-r8 placeholder="Select option">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Form.Select>
                        </Container>
                        <Container mgn-t8 relative style={{ zIndex: 1000 }}>
                            <Form.Label>Dropdown</Form.Label>
                            <Form.Dropdown
                                options={{
                                    en: 'English',
                                    fr: 'French',
                                    es: 'Spanish'
                                }}
                                value={state.dropdown}
                                onChange={val => this.setState({ dropdown: val })}
                                pad-r8
                                placeholder="Select option" />
                        </Container>
                        <Container mgn-t8>
                            <Form.Label>Checkboxes</Form.Label>
                            <Container flex cursor-pointer onClick={() => this.setState({ checkbox: !state.checkbox })}>
                                <Form.Checkbox value={state.checkbox} />
                                <Container size-3-5 mgn-l2 weight-5>Check Me</Container>
                            </Container>
                        </Container>
                    </Container>
                </Wrap>
            </Container>
        )
    }
}