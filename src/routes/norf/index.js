import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import norf from './norf';

export default ({ match }) => (
    <Switch>
        <Route path={`${match.url}/`} component={norf} />
        <Redirect to="/error" />
    </Switch>
);