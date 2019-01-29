import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import methods from './methods';

export default ({ match }) => (
    <Switch>
        <Route path={`${match.url}/`} component={methods} />
        <Redirect to="/error" />
    </Switch>
);