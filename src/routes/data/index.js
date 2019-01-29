import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import data from './data';

export default ({ match }) => (
    <Switch>
        <Route path={`${match.url}/`} component={data} />
        <Redirect to="/error" />
    </Switch>
);