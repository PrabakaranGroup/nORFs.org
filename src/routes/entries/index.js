import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import entries from './entries';

export default ({ match }) => (
    <Switch>
        <Route path={`${match.url}/`} component={entries} />
        <Redirect to="/error" />
    </Switch>
);