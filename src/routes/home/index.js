import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import home from './home';

export default ({ match }) => (
    <Switch>
        <Route path={`${match.url}/`} component={home} />
        <Redirect to="/error" />
    </Switch>
);