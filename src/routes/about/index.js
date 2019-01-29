import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import about from './about';

export default ({ match }) => (
    <Switch>
        <Route path={`${match.url}/`} component={about} />
        <Redirect to="/error" />
    </Switch>
);