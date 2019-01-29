import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import api from './api';

export default ({ match }) => (
    <Switch>
        <Route path={`${match.url}/`} component={api} />
        <Redirect to="/error" />
    </Switch>
);