import React     from 'react';
import { Route } from 'react-router';

import App from './App';
import Work from './Work';

export default (
    <Route name="app" component={App} path="/">
        <Route name="work" component={Work} path="work" />
    </Route>
);