import * as React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import RootPage from './pages/root-page'
import HomePage from './pages/home-page'


export default function Routes() {
    return (
        <BrowserRouter>
            <RootPage>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/test" component={HomePage} />
                </Switch>
            </RootPage>
        </BrowserRouter>
    )
}